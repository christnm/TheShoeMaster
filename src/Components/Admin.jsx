import { Form, Container,Row,  Button, Modal } from "react-bootstrap"
import {useState, useContext, useRef} from 'react'
import { getMultiFactorResolver, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "@firebase/auth"
import { auth } from "../firebase-config"


const Admin = () => {
    const [user, setUser] = useState("")
    const emailRef = useRef()
    const passRef = useRef()
    const [show, setShow] = useState(false)

    onAuthStateChanged(auth, (user1) => {
        if (user1) {
            const uid = user1.uid;
            setUser(uid)
          } else {
            setUser("Not LoggedIn")
          }
    })

    const showModal = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }
    const LoggedInModal = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        Incorrect username or password
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={handleClose}>
                    Close
                </Button>
        
            </Modal.Footer>
            </Modal>

        )
    }

    const Authenticate = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
            console.log(user)
        }catch(error){
            console.error("Incorrect username or password")
        }
    }
   

    const LogOut = async () => {
        await signOut(auth)
        console.log("Signed out successful")
    }
    
    return (
        <>
        <Container className="block-example border border-dark" style={{width: '50%'}}  >
            <Form style={{display: 'flex', justifyContent: 'center'}}>
                <Row>
                <Form.Group style={{marginBottom: '5px', width: '100%'}}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='email' ref={emailRef} placeholder="name@mail.com" >
                    </Form.Control>
                </Form.Group>
                <p>Current user = {user}</p>
                <Form.Group style={{marginBottom: '5px', width: '100%'}}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={passRef} placeholder="password" >
                    </Form.Control>
                </Form.Group>
                
                </Row>
                
            </Form>
            <Button style={{margin: '10px'}} onClick={Authenticate}>LogIn</Button>
            <Button style={{margin: '10px'}} onClick={LogOut}>LogOut</Button>
        </Container>
        

        </>
    )




}

export default Admin