import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import person from '../Assets/person.svg'
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navbar1() {
  return (
    <div>
      <Navbar className='custom-navbar' variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className='logo-nav'>UNWIRE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='nav-links'href="about">About Us</Nav.Link>
              <Nav.Link href="mission" className='nav-links'>Our Mission</Nav.Link>
              <Nav.Link href='/login' className='nav-links'>SignUp/Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
