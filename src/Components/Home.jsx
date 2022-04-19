import { Container, Button, Col, Row, Card } from 'react-bootstrap'
import jordan from '../jordanpic.png'



const Home = () => {


    return (
        <>
            <Container style={{marginTop: '5%'}}>
                <Container style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Card style={{ width: '28rem', border: 'none', backgroundColor: 'transparent' }}>
                        <Card.Img src={jordan} >
                        </Card.Img>

                    </Card>

                </Container>
                <Row style={{ marginTop: '45px' }}>
                    <Col >
                        <Button size='lg' href='/men' variant='dark' style={{ marginRight: '10px' }}> Browse for men</Button>
                        <Button size='lg' href='/women' variant='dark' style={{ marginRight: '10px' }}> Browse for Women</Button>
                        <Button size='lg' href='/kids' variant='dark' style={{ marginRight: '10px' }}> Browse for Kids</Button>
                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default Home