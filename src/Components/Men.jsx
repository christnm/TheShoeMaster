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
                            <Carousel.Item>
                                <Card.Img alt="No pic" src="https://images.stockx.com/360/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=2&updated_at=1635275427&h=320&q=80"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img src="https://images.stockx.com/360/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img10.jpg?fm=avif&auto=compress&w=480&dpr=2&updated_at=1635275427&h=320&q=80" alt="Pic 2"/>
                            </Carousel.Item>
                            <Carousel.Item>
                    
                                <Card.Img src="https://images.stockx.com/360/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img17.jpg?fm=avif&auto=compress&w=480&dpr=2&updated_at=1635275427&h=320&q=80" alt="Pic 3"/>
                            </Carousel.Item>
                            
                            </Carousel>
                            
                        <Card.Body style={{backgroundColor: 'black', color: 'white'}} className="card-body">
                            <h5 className="card-title">{shoe.Name}</h5>
                            <p className="card-text">Size(s): {shoe.Size.join(',')}</p>
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