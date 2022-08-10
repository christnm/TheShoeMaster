import { useState } from "react"
import { Form, Button, Container,Col, Row } from "react-bootstrap"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const [phone, setPhone] = useState('')
    const [size, setSize] = useState('')
    const [shoeName, setShoeName] = useState('')
    const [name, setName] = useState('')


    const handleName = (e) => {
        setName(e.target.value)
    } 

    const handleShoeName = (e) => {
        setShoeName(e.target.value)
        
    }
    const handleSize = (e) => {
        setSize(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const sendMessage = (e) => {
        e.preventDefault()
  
        const temp_para = {
            to_name: 'Wilnes',
            from_name: name,
            phone_number: phone,
            message: 'Hi, I want more info for the '+ shoeName + ' size: ' + size
        }

        emailjs.send('service_drt8r81', 'template_mph6a3m', temp_para, 'iCDZLx5VeC6J7RcOe')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });

         document.getElementById('name').value = ""
         document.getElementById('number').value = ""
         document.getElementById('Shoe').value = ""
         document.getElementById('size').value = ""

    }



    return (
        <>
            <Container >
                <Form className="sm-1">
                    <Row>
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control id='name' required type="text" placeholder="Name" onChange={handleName}></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control id='number' required type="number" placeholder="Ex. 77777777" onChange={handlePhone} />
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>Shoe Name</Form.Label>
                        <Form.Control id='Shoe' type="text" placeholder="Ex. Jordan UNC" onChange={handleShoeName} />
                       
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>Size</Form.Label>
                        <Form.Control id='size' required type="text" placeholder="Ex. 8.5" onChange={handleSize}  />
                        
                    </Form.Group>
                    </Row>

                    <Button style={{marginTop: '1rem'}} variant="dark" type="submit" onClick={sendMessage}>
                        Submit
                    </Button>
                </Form>

            </Container>

        </>
    )

}

export default Contact