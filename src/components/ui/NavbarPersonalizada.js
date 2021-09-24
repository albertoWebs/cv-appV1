import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const NavbarPersonalizada = () => {
 


  return (
    <Navbar className="navbar__main" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/initial">CV Alberto</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="/formacion">Formación</Nav.Link>
            <Nav.Link href="/experiencias">Experiencias</Nav.Link>
            <Nav.Link href="/buscador">Buscador de tecnologías</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
