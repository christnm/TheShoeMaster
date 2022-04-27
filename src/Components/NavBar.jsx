import { Nav, Navbar, Container } from "react-bootstrap"


const NavBar = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/" style={{fontFamily: 'monoton'}}>The Shoe Master</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/men">Men</Nav.Link>
                        <Nav.Link href="/women">Women</Nav.Link>
                        <Nav.Link href="/kids">Kids</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar