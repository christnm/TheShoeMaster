import { useState, useEffect, useRef } from "react"
import { Button, Container, Carousel, Card, Col, Row } from "react-bootstrap"
import { db } from '../firebase-config'
import { AddShoeModal } from "."
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { onAuthStateChanged } from "@firebase/auth"
import { auth } from "../firebase-config"


const Men = () => {
    const [display, setDisplay] = useState([])
    const shoesCollection = collection(db, "MenShoes")
    const [user, setUser] = useState("")
  useEffect(() => {
        const getData = async () => {
            const data = await getDocs(shoesCollection)
            setDisplay(data.docs.map(doc => ({
                ...doc.data(), id: doc.id
            })))
        }
        getData()
    }, [])
    onAuthStateChanged(auth, (user1) => {
        if (user1) {
            const uid = user1.uid;
            setUser(uid)
        } else {
            setUser("Not LoggedIn")
        }
    })
    const refreshPage = () => {
        window.location.reload(false)
    }

    const handleButton = () => {
        if (user === "Not LoggedIn") {

        } else {
            return <AddShoeModal onPost={addShoe} ></AddShoeModal>
        }
    }
    const handleDelete = (shoeId) => {
        if (user === "Not LoggedIn") {

        } else {
            return (<Col><Button variant="danger" onClick={() => deleting(shoeId)} style={{ marginLeft: '5px' }} >Delete</Button></Col>)
        }
    }
    const addShoe = async (name, size, pRef, pic1, pic2, pic3, pic4) => {
        await addDoc(shoesCollection, { Name: name, Sizes: size, Price: pRef, Pics: [pic1, pic2, pic3, pic4] })
        refreshPage()
    }
    const deleting = async (id) => {
        const docToDelete = doc(db, "MenShoes", id)
        await deleteDoc(docToDelete)
        refreshPage()
    }
    return (
        <>
            <Container style={{ maxWidth: '100%', height: '30rem', backgroundColor: 'transparent' }}>
                {handleButton()}
                <Row xs={1} md={4} className="g-4" style={{ backgroundColor: 'transparent', maxHeight: "30rem" }}>
                    {display?.map(shoe => (
                        <Col>
                            <Card style={{ backgroundColor: 'white', borderColor: 'black', marginTop: '10px' }}>
                                <Carousel variant="dark">
                                    {shoe.Pics?.map(pic => (
                                        <Carousel.Item>
                                            <Card.Img style={{ height: '300px', maxHeight: '300px', width: 'auto', maxWidth: '350px' }} src={pic} alt="Error Loading Pic try a different browser" />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>

                                <Card.Body style={{ backgroundColor: 'black', color: 'white' }} className="card-body">
                                    <h5 className="card-title">{shoe.Name}</h5>
                                    <p className="card-text" >Size(s) available: {shoe.Sizes?.join(',')}</p>
                                    {shoe.Price ? <p>Price: {shoe.Price}</p> : "Ask about the price!"}
                                    <Row style={{marginTop: '20px'}}>
                                        <Col>
                                            <Button href='/contact' variant='secondary' >
                                                Contact Us!
                                            </Button>
                                        </Col>
                                            {handleDelete(shoe.id)}
                                    </Row>
                                </Card.Body>

                            </Card>

                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )

}
export default Men