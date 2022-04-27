import { Form, Container,Row, Col, Button } from "react-bootstrap"



const Admin = () => {
    return (
        <>
        <Container className="block-example border border-dark" style={{width: '50%'}}  >
            <Form style={{display: 'flex', justifyContent: 'center'}}>
                <Row>
                <Form.Group style={{marginBottom: '5px', width: '100%'}}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='email' placeholder="name@mail.com">
                    </Form.Control>
                </Form.Group>
                <Form.Group style={{marginBottom: '5px', width: '100%'}}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder="password">
                    </Form.Control>
                </Form.Group>
                
                </Row>
                
            </Form>
            <Button style={{margin: '10px'}}>LogIn</Button>
        </Container>

        </>
    )




}

export default Admin