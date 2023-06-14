import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AddImg from "../resources/GezdirLogo6.png";
import { useNavigate } from 'react-router-dom';

type Props = {}

export default function TopNavbar({}: Props) {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand  onClick={() => navigate('/')}><img src={AddImg} className="" alt="logo" height={100} width={100}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3 bg">
            <Nav.Link onClick={() => navigate('/')} style={{fontSize:"2rem", fontWeight:"bold", color:"darkslateblue"}}>Gezdir</Nav.Link>
            <Nav.Link onClick={() => navigate('/discover')} style={{fontSize:"2rem", fontWeight:"bold", color:"darkslategray"}}>Discover the City</Nav.Link>
            <Nav.Link onClick={() => navigate('/facilator')} style={{fontSize:"2rem", fontWeight:"bold", color:"darkgreen"}}>Facilator Module</Nav.Link>
            <Nav.Link onClick={() => navigate('/contact')} style={{fontSize:"2rem", fontWeight:"bold", color:"darkcyan"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
