import { useState, useEffect } from "react"
import {Button, Container, Col, Row, Carousel, CardGroup, Card, CardImg, } from "react-bootstrap"



const Men = () => {
    return (
        <>
        <Container>
            <Carousel>
                <Carousel.Item>
                    <CardGroup>
                        <Card style={{backgroundColor: 'transparent', width: '20rem'}}>
                            <CardImg style={{minHeight: '70%'}} src="http://static1.squarespace.com/static/5afceb6f5ffd2052611eff46/5b3bb2028a922d4ba1d2153a/5cb155e3f9619adc67e4f2b8/1646334464256/nike-air-force-1-hall-of-sneakz.png?format=1500w">

                            </CardImg>
                            <Card.Body>
                                <Card.Title style={{fontFamily: 'chalkduster'}}>
                                    Nike Air Force 1 
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{backgroundColor: 'transparent', width: '20rem'}}>
                            <CardImg style={{minHeight: '70%'}} src='https://image.goat.com/1000/attachments/product_template_pictures/images/051/754/897/original/631510_00.png.png'>
                            </CardImg>
                            <Card.Body>
                                <Card.Title style={{fontFamily: 'chalkduster'}}>
                                    Air Jordan 4 UNC
                                </Card.Title>
                                <Card.Text>
                                    Sizes Available: 8, 9, 10, 10.5
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{backgroundColor: 'transparent', width: '20rem'}}>
                            <CardImg style={{minHeight: '70%'}} src="https://images.squarespace-cdn.com/content/v1/5afceb6f5ffd2052611eff46/1620265160178-VBFLPCXNPR66AJEX9SO0/nike-dunk-low-white-black-2021-panda-hallofsneakz.png?format=750w">

                            </CardImg>
                            <Card.Body>
                                <Card.Title style={{fontFamily: 'chalkduster'}}>
                                    Dunks
                                </Card.Title>
                                <Card.Text>
                                    Sizes Available: 8, 9, 10, 10.5
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>

        </Container>
        </>
    )

}
export default Men