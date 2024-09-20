import {React, useContext} from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useCart } from '../context/Cartcontext';

export const NavigationBar = () => {
 // const total = 25000; // Cambia esto a otro valor para probar
  const { calculateTotal } = useCart(); 
  const token = false; // Cambia esto a true para simular que el usuario está logueado

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Pizeria Mama-mia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
                <Nav.Link as={Link} to="/logout">🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>
          {/* Alinear a la derecha */}
          <Nav className="ms-auto">
            <Button variant="outline-light" as={Link} to="/cart">
              🛒 Total: ${calculateTotal().toLocaleString('es-CL')}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
