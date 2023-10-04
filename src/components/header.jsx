import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

//using bootstrap for navbar
function Header() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  if (isLoginPage || isSignupPage) {
    return null; 
  }

  return (
    <Navbar data-bs-theme="dark" className="bg-body-tertiary" expand="lg">
      <Container fluid >
        <Navbar.Brand as={Link} to='/home' className='nbrand'>CodeOdyssey</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
            <Nav.Link href='/home'>Home</Nav.Link>
            <NavDropdown title="Domains" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/cloud'>Cloud Computing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/android'>Android Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/webdev'>Web Development</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Link to='/login'><Button variant="outline-success">Log In</Button></Link>
      </Container>
    </Navbar>
  );
}

export default Header;
