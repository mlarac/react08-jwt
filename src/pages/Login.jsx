import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"; 

export const Login = () => {
    const [nombre, setNombre] = useState("")
    const [error, setError] = useState(false)
    const [password, setPassword] = useState("")

    function submitHandler (e) {
        e.preventDefault()
        // Validación input
        if(nombre === ''||password ==='') {
            setError(true)
            return
        }
        setError(false)
    }

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="border p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <Form onSubmit={submitHandler}>
        {error ? <p className="error">Debes ingresar los datos</p> :null}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setPassword(e.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setNombre(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};
