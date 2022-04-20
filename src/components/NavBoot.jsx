import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';

 

import {LinkContainer} from 'react-router-bootstrap'


const NavBoot = () => {
  return (
    <div>     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <LinkContainer to="/"><Nav.Link ><img
          src="/logo0.png"
          width="70"
           
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        /></Nav.Link></LinkContainer>
    <Container>
    
             
     
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
          
      <LinkContainer to="/sobremi">
        <Nav.Link >Sobre mí</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/gabinete">
        <Nav.Link  >el Gabinete</Nav.Link>
        </LinkContainer>

        
 

      
        <NavDropdown title="Formación" id="collasible-nav-dropdown">
        <LinkContainer to="/cursoEspecial">
        <NavDropdown.Item to="/cursoEspecial">curso Especial</NavDropdown.Item>
        </LinkContainer>
        <NavDropdown.Divider />

        <LinkContainer to="/curso1">
          <NavDropdown.Item to="/curso1">Curso1</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer to="/curso2">
          <NavDropdown.Item to="/curso2">Curso2</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer to="/Curso3">
          <NavDropdown.Item to="/curso3">Curso3</NavDropdown.Item>
          </LinkContainer>
         
        
        </NavDropdown>
      </Nav>
      <Nav>
      <LinkContainer to="/hayotramaneradevivir">
        <Nav.Link >Hay otra manera de vivir</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contacto">
        <Nav.Link  >Contacto</Nav.Link>
        </LinkContainer> 
      </Nav>
    </Navbar.Collapse>
    </Container>
    <LinkContainer to="/">
  <Navbar.Brand>José García Peñalver</Navbar.Brand>
  </LinkContainer>
  </Navbar></div>
  )
}

export default NavBoot