import { Nav, Navbar, Container } from "react-bootstrap"
import { useLocation } from "react-router"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { serverTimestamp } from "@firebase/firestore";


const NavBar = () => {
    const location = useLocation()

    let activeMen = false
    let activeWomen = false
    let activeKids = false
    let activeContact = false
    let activeAdmin = false

    if (location.pathname === '/men') {
        activeMen = true
    } else if (location.pathname === '/women') {
        activeWomen = true
    } else if (location.pathname === '/kids') {
        activeKids = true
    } else if (location.pathname === '/admin') {
        activeAdmin = true
    } else if (location.pathname === '/contact') {
        activeContact = true
    }
    return (
        // <>
        //     <Navbar bg="dark" variant="dark" expand="sm">
        //         <Container>
        //             <Navbar.Brand href="/" style={{fontFamily: 'monoton'}}>The Shoe Master</Navbar.Brand>
        //             <Nav className="me-auto">
        //                 <Nav.Link className={activeMen ? 'active item' : 'item'} href="/men">Men</Nav.Link>
        //                 <Nav.Link className={activeWomen ? 'active item' : 'item'} href="/women">Women</Nav.Link>
        //                 <Nav.Link className={activeKids ? 'active item' : 'item'} href="/kids">Kids</Nav.Link>
        //                 <Nav.Link className={activeContact ? 'active item' : 'item'} href="/contact">Contact Us</Nav.Link>
        //                 <Nav.Link className={activeAdmin ? 'active item' : 'item'} href="/admin">Admin</Nav.Link>
        //             </Nav>
        //         </Container>
        //     </Navbar>
        // </>
        //)
        //return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand style={{fontFamily:'monoton'}} href="/">The Shoe Master</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Item>
                            <Nav.Link  className={activeMen ? 'active item' : 'item'} href="/men">Men</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={activeWomen ? 'active item' : 'item'}  href="/women">Women</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={activeKids ? 'active item' : 'item'}  href="/kids">Kids</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  className={activeContact ? 'active item' : 'item'}  href="/contact">Contact Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={activeAdmin ? 'active item' : 'item'} href="/admin">Admin</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar