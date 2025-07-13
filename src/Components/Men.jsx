import { useState, useEffect } from "react"
import { Button, Container, Carousel, Card, Col, Row } from "react-bootstrap"
import { db, auth} from '../firebase-config'
import { AddShoeModal, Contact} from "."
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { onAuthStateChanged } from "@firebase/auth"
import { BsFillChatDotsFill, BsInstagram, BsSnapchat} from 'react-icons/bs';

const Men = () => {
    const [display, setDisplay] = useState([])
    const shoesCollection = collection(db, "MenShoes")
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user1) => {
            if (user1) setUser(user1.uid)
            else setUser(null)
        })
        return () => unsubscribe() // cleanup subscription
    }, [])

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getDocs(shoesCollection)
                setDisplay(data.docs.map(doc => ({
                    ...doc.data(), id: doc.id
                })))
            } catch (error) {
                console.error("Failed to fetch data", error)
            }
        }
        getData()
    }, [])

    const refreshData = async () => {
        try {
            const data = await getDocs(shoesCollection)
            setDisplay(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        } catch (error) {
            console.error("Failed to refresh data", error)
        }
    }

    const handleDelete = (shoeId) => {
        if (user === null) {

        } else {
            return (<Col><Button variant="danger" onClick={() => deleting(shoeId)} style={{ marginLeft: '5px' }} >Delete</Button></Col>)
        }
    }
    const addShoe = async (name, size, pRef, pic1, pic2, pic3, pic4) => {
        try {
            await addDoc(shoesCollection, { Name: name, Sizes: size, Price: pRef, Pics: [pic1, pic2, pic3, pic4] })
            refreshData() // update state instead of reloading page
        } catch (error) {
            console.error("Error adding shoe", error)
        }
    }
    const deleting = async (id) => {
        try {
            const docToDelete = doc(db, "MenShoes", id)
            await deleteDoc(docToDelete)
            refreshData() // update state instead of reloading page
        } catch (error) {
            console.error("Error deleting shoe", error)
        }
    }
    

    return (
        <>
            <Container style={{ maxWidth: '100%', backgroundColor: 'transparent' }}>
                {user ? (
                    <div className="mb-3">
                        <AddShoeModal onPost={addShoe}/>
                    </div>
                ) : ""}
                {display.length === 0 ? (
                    <div className="text-center text-muted my-4">
                        No shoes available at the moment.
                    </div>
                ) : (
                    <Row xs={1} md={4} className="g-4" style={{ backgroundColor: 'transparent', maxHeight: "30rem" }}>
                        {display?.map(shoe => (
                            <Col key={shoe.id}>
                                <Card className="mb-4 shadow-sm border-0">
                                    <Carousel variant="dark">
                                        {shoe.Pics?.map((pic, index) => (
                                            <Carousel.Item key={index}>
                                                <Card.Img
                                                    className="img-fluid"
                                                    src={pic}
                                                    alt="Error Loading Pic try a different browser"
                                                    style={{ height: '300px', objectFit: 'cover' }} // fixed size with cropping
                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                    <Card.Body className="bg-dark text-white">
                                        <h5 className="card-title">{shoe.Name}</h5>
                                        <p className="card-text">Size(s) available: {shoe.Sizes?.join(',')}</p>
                                        {shoe.Price ? <p>Price: {shoe.Price}</p> : "Ask about the price!"}
                                        <Row className="mt-3">
                                            <Contact/>
                                            <Col>
                                                <a
                                                    href={'sms:/6156519967&body=Hi ShoeMaster I am interested in the ' + shoe.Name }
                                                    style={{fontSize: '300%', color: 'white'}}
                                                    aria-label="Contact via SMS"
                                                >
                                                    <BsFillChatDotsFill />
                                                </a>
                                            </Col>
                                            <Col>
                                                <a
                                                    href="https://www.snapchat.com/add/wilnes.ramey"
                                                    style={{fontSize: '300%', color: 'white'}}
                                                    aria-label="Contact via Snapchat"
                                                >
                                                    <BsSnapchat/>
                                                </a>
                                            </Col>
                                            <Col>
                                                <a
                                                    href="https://www.instagram.com/theshoemaster615"
                                                    style={{fontSize: '300%', color: 'white'}}
                                                    aria-label="Contact via Instagram"
                                                >
                                                    <BsInstagram/>
                                                </a>
                                            </Col>
                                            {handleDelete(shoe.id)}
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </>
    )
}
export default Men