import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"; 
import { useUser } from '../context/UserContext'; // Línea agregada: Importar el contexto de usuario
import { useNavigate } from 'react-router-dom'; // Línea agregada: Para redirigir después del login

export const Login = () => {
  const [email, setEmail] = useState(""); // Línea modificada: Cambiado a 'email'
  const [password, setPassword] = useState(""); // Línea modificada: Cambiado a 'password'
  const [error, setError] = useState(false);
  
  const { login } = useUser(); // Línea agregada: Desestructurar el método login desde el UserContext
  const navigate = useNavigate(); // Línea agregada: Hook de React Router para redirigir

  const submitHandler = async (e) => {
    e.preventDefault();
    // Validación input
    if (email === '' || password === '') {
      setError(true);
      return;
    }
    setError(false);

    try {
      await login(email, password); // Línea agregada: Llamar al método login del contexto
      navigate('/profile'); // Línea agregada: Redirigir al perfil después del login
    } catch (error) {
      console.error('Error during login:', error);
      setError(true);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="border p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <Form onSubmit={submitHandler}>
          {error ? <p className="error">Debes ingresar los datos correctos</p> : null}
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} // Línea modificada: Cambiar 'nombre' por 'email'
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} // Línea modificada: Cambiar 'password'
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};
