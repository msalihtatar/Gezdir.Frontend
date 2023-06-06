import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';

type Props = {}

export default function TopNavbar({}: Props) {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand  onClick={() => navigate('/')}><img src={logo} className="" alt="logo" height={60} width={60}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
            <Nav.Link onClick={() => navigate('/')}>Gezdir</Nav.Link>
            <Nav.Link onClick={() => navigate('/discover')}>Discover the City</Nav.Link>
            <Nav.Link onClick={() => navigate('/facilator')}>Facilator Module</Nav.Link>
            <Nav.Link onClick={() => navigate('/contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
