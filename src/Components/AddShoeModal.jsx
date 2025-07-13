import React, { useState, useRef } from "react"
import { Modal, Form, Button } from "react-bootstrap"

const AddShoeModal = ({ onPost }) => {

    const [show, setShow] = useState(false)
    const nameRef = useRef()
    const sizeRef = useRef()
    const pRef = useRef()
    const pic1 = useRef()
    const pic2 = useRef()
    const pic3 = useRef()
    const pic4 = useRef()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handlePost = () => {
        handleClose()
        onPost(nameRef.current.value, sizeRef.current.value.split(",").map(ss => (parseFloat(ss))), pRef.current.value, pic1.current.value,pic2.current.value,pic3.current.value,pic4.current.value)
    }
    const items = []
    for (let i = 1; i < 11; i++){
        items.push(i)
    }

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add New Shoes
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add A New Shoe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Air Force 1" ref={nameRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Sizes</Form.Label>
                            <Form.Control placeholder="8,9,10" ref={sizeRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price (Optional)</Form.Label>
                            <Form.Control placeholder="$180" ref={pRef} />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicLogo">
                            <Form.Label>Picture Link</Form.Label>
                            <Form.Control placeholder="Enter a picture link" ref={pic1} />
                            <Form.Label>Picture Link</Form.Label>
                            <Form.Control placeholder="Enter a picture link" ref={pic2} />
                            <Form.Label>Picture Link</Form.Label>
                            <Form.Control placeholder="Enter a picture link" ref={pic3} />
                            <Form.Label>Picture Link</Form.Label>
                            <Form.Control placeholder="Enter a picture link" ref={pic4} />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={handlePost}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )


}

export default AddShoeModal