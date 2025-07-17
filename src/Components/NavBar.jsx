import { Nav, Navbar, Container } from "react-bootstrap"
import { Admin } from '.'
import { useLocation } from "react-router"
import { useState } from "react"

const NavBar = () => {
    const location = useLocation()
    let activeMen = false
    let activeWomen = false
    let activeKids = false
    let activeAdmin = false
 
    if (location.pathname === '/men') {
        activeMen = true
    } else if (location.pathname === '/women') {
        activeWomen = true
    } else if (location.pathname === '/kids') {
        activeKids = true
    }else if (location.pathname === '/admin') {
        activeAdmin = true
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{ fontFamily: 'monoton' }} href="/">The Shoe Master</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Item>
                                <Nav.Link className={activeMen ? 'active item' : 'item'} href="/men">Men</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={activeWomen ? 'active item' : 'item'} href="/women">Women</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={activeKids ? 'active item' : 'item'} href="/kids">Kids</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <Nav.Item >
                                <Nav.Link className={activeAdmin? 'active item' : 'item'}href='/admin'>Admin</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    );
}
export default NavBar