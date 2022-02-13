import React from 'react';
import './Navigation.css';
import logo from '../../../images/logo/eMarket-logos_transparent.png';
import { Badge, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {count} = useAuth();
    return (
        <Navbar variant="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                <img
                    src={logo}
                    width="90"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#login" className="mx-auto">
                        <span className="nav-icon nav-account">
                        </span>
                    </Nav.Link>
                    <Nav.Link href="#login" className="mx-auto">
                        <span className="nav-icon nav-wishlist">
                        </span>
                    </Nav.Link>
                    <Nav.Link href="#login" className="mx-auto">
                        <span className="nav-icon nav-cart">
                            <span className="nav-text">{count <100 ? count : 'NL'}</span>
                        </span>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;