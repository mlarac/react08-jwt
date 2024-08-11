import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { formatCurrency } from '../utils/formatCurrency';

export const NavigationBar = () => {
  const total = 25000; // Cambia esto a otro valor para probar
  const token = false; // Cambia esto a true para simular que el usuario está logueado

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">Pizeria Mama-mia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link href="#profile">🔓 Profile</Nav.Link>
                <Nav.Link href="#logout">🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#login">🔐 Login</Nav.Link>
                <Nav.Link href="#register">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>
          {/* Alinear a la derecha */}
          <Nav className="ms-auto">
            <Button variant="outline-light">
              🛒 Total: {formatCurrency(total)}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
