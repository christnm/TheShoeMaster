import { useState, useEffect } from "react"
import {Button, Container, Carousel, Card, CardImg,Col, Row } from "react-bootstrap"



const Men = () => {

    const [display, setDisplay] = useState([])

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/christnm/TheShoeMaster/master/Data.json")
    .then(response => response.json())
    .then((data) => {
        setDisplay(data);
    });
    }, [])




    return (
        <>
        <Container style={{maxWidth: '100%', height: '30rem', backgroundColor: 'transparent'}}>
    
            <Row xs={1} md={4} className="g-4" style={{backgroundColor: 'transparent'}}>
            {display.map(shoe => (
                <Col>
                    <Card style={{backgroundColor: 'white', borderColor: 'black'}}>
                        <Carousel style={{height: '20rem'}} variant="dark">
                            {shoe.Picture.map( pic => (
                                <Carousel.Item>
                                    <Card.Img src={pic} alt="Error Loading Pic"/>
                                </Carousel.Item>
                            ))}
                            
                            </Carousel>
                            
                        <Card.Body style={{backgroundColor: 'black', color: 'white'}} className="card-body">
                            <h5 className="card-title">{shoe.Name}</h5>
                            <p className="card-text">Size(s) Available: {shoe.Size.join(',')}</p>
                            <Button href='/contact' variant='secondary' >
                            Ask About This Shoe
                        </Button>
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