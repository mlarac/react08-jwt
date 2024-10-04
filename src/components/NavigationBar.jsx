import {React, useContext} from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useCart } from '../context/Cartcontext';
import { useUser } from '../context/UserContext'; // Importamos el UserContext

export const NavigationBar = () => {
 // const total = 25000; // Cambia esto a otro valor para probar
  const { calculateTotal } = useCart(); 
  const { token, logout } = useUser(); // Obtenemos el token y el método logout del UserContext

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
              <Button variant="outline-light" onClick={logout}>🔒 Logout</Button> {/* Logout ejecuta el método */}
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
