import { useState, useEffect } from "react"
import {Button, Container, Carousel, Card, CardImg, } from "react-bootstrap"



const Women = () => {

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
        <Container style={{maxWidth: '100%', height: '30rem'}}>
            <Carousel variant={'dark'} style={{minWidth: '50%',maxWidth:'100%',display: 'inline-flex',justifyContent: 'center'}}>
                        {display.map(shoe => (
                            <Carousel.Item style={{minHeight: '30rem'}} >
                            <Card style={{ display:'inline-flex', justifyContent: 'center',backgroundColor: 'transparent', width: '20rem'}}>
                            <CardImg style={{minHeight: '70%', maxHeight: '75%'}} src="http://static1.squarespace.com/static/5afceb6f5ffd2052611eff46/5b3bb2028a922d4ba1d2153a/5cb155e3f9619adc67e4f2b8/1646334464256/nike-air-force-1-hall-of-sneakz.png?format=1500w">

                            </CardImg>
                            <Card.Body>
                                <Card.Title style={{fontFamily: 'chalkduster'}}>
                                    {shoe.Name}
                                </Card.Title>
                                <Card.Text>
                                    {shoe.Size.join(',')}
                                </Card.Text>
                                <Button href='/contact' variant={'dark'}>
                                    Ask about this!
                                </Button>
                                
                            </Card.Body>
                        </Card>
                </Carousel.Item>
                        ))}
            </Carousel>
        </Container>
        </>
    )

}
export default Women