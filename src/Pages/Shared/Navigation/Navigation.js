import React from 'react';
import './Navigation.css';
import logo from '../../../images/logo/eMarket-logos_transparent.png';
import { Badge, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {count} = useAuth();
    return (
        <Navbar className="nav-bg" variant="dark" expand="lg">
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
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Order Review</Nav.Link>
                    <Nav.Link href="#">
                    Manage Inventory Here
                    </Nav.Link>
                    <Nav.Link href="#login">
                    Login
                    </Nav.Link>
                    <NavDropdown title="name" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Logout
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <div className="d-flex align-items-center justify-content-center">
                    <i className="fas fa-shopping-cart fs-5 text-white"></i><Badge bg="secondary">{count}</Badge>
                    </div>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;