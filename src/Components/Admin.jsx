import { useState, useRef, useEffect } from "react"
import { Form, Container, Button, Card, Alert } from "react-bootstrap"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "@firebase/auth"
import { auth } from "../firebase-config"
import { BsCheck } from "react-icons/bs"

const Admin = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState("")
    const emailRef = useRef()
    const passRef = useRef()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user1) => {
            if (user1) setUser(user1.uid)
            else setUser(null)
        })
        return () => unsubscribe()
    }, [])

    const logo = () => user ? <BsCheck className="fs-1 me-2" /> : null

    const Authenticate = async () => {
        try {
            await signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
            setError("")
        } catch (error) {
            setError("Incorrect username or password.")
            console.error("Authentication error", error)
        }
    }

    const LogOut = async () => {
        await signOut(auth)
    }

    return (
        <>
            <Container 
                className="d-flex flex-column align-items-center justify-content-start pt-3" 
                style={{ height: '120vh', backgroundColor: 'transparent', fontFamily: 'YourFontName, sans-serif' }}
            >
                <Card className="shadow rounded" style={{ maxWidth: '400px', width: '100%', maxHeight: '95vh', overflowY: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                    <Card.Header className="text-center py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        {logo()}
                        <h4 className="mb-0 text-white">Admin Panel</h4>
                    </Card.Header>
                    <Card.Body className="text-white" style={{ backgroundColor: 'transparent' }}>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" ref={emailRef} placeholder="name@mail.com" size="lg" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passRef} placeholder="password" size="lg" />
                            </Form.Group>
                            <div className="d-grid gap-3">
                                <Button variant="primary" size="lg" onClick={Authenticate}>Log In</Button>
                                <Button variant="outline-secondary" size="lg" onClick={LogOut}>Log Out</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Admin