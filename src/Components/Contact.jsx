import { useState } from "react"
import { Form, Button, Col, Modal } from "react-bootstrap"
import { MdEmail } from "react-icons/md"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const [phone, setPhone] = useState('')
    const [size, setSize] = useState('')
    const [shoeName, setShoeName] = useState('')
    const [name, setName] = useState('')
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        if (name === ""){
            return "Not filled out"
        }
        const temp_para = {
            to_name: 'Wilnes',
            from_name: name,
            phone_number: phone,
            message: 'Hi, I want more info for the ' + shoeName + ' size: ' + size
        }

        emailjs.send('service_drt8r81', 'template_mph6a3m', temp_para, 'iCDZLx5VeC6J7RcOe')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

        document.getElementById('name').value = ""
        document.getElementById('number').value = ""
        document.getElementById('Shoe').value = ""
        document.getElementById('size').value = ""
    }
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return false
        } else {
            setValidated(true);
            sendMessage();
            handleClose();
        }

    };

    return (
        <>
            <Col>
                <a onClick={handleShow} style={{ fontSize: '300%', color: 'white' }}>
                    {<MdEmail />}
                </a>
            </Col>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Send Us An Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="sm-1 md-1 lg-1 ">
                        <Col style={{ width: '60%', margin: 'auto' }}>
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    id="name"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleName}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control id='number' required type="text" placeholder="Ex. 77777777" onChange={handlePhone} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formBasicEmail">
                                <Form.Label>Shoe Name</Form.Label>
                                <Form.Control id='Shoe' type="text" required placeholder="Ex. Jordan UNC" onChange={handleShoeName} />

                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicEmail">
                                <Form.Label>Size</Form.Label>
                                <Form.Control id='size' required type="text" placeholder="Ex. 8.5" onChange={handleSize} />
                            </Form.Group>
                        </Col>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button style={{ marginTop: '1rem', marginBottom: '1rem' }}  variant="dark" onClick={handleSubmit}>
                        Send Email
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )

}

export default Contact