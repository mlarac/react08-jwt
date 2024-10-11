import React, { useState } from 'react';
import { useCart } from '../context/Cartcontext';
import { useUser } from '../context/UserContext'; // Importamos el UserContext
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const { cart, addToCart, removeFromCart, calculateTotal, clearCart } = useCart();
  const { token } = useUser(); // Obtenemos el token del UserContext
  const [message, setMessage] = useState(''); // Estado para manejar el mensaje de éxito/error

  const handleCheckout = async () => {
    const total = calculateTotal();
    
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ cart, total })
      });

      if (response.ok) {
        setMessage('Compra realizada con éxito');
        clearCart(); // Limpiar el carrito después de la compra
      } else {
        setMessage('Error al realizar la compra');
      }
    } catch (error) {
      setMessage('Ocurrió un error, por favor intenta nuevamente.');
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {message && <p>{message}</p>} {/* Mostrar mensaje de éxito o error */}
      <div className="row">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src={item.img} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${item.price.toLocaleString('es-CL')}
                  </Card.Text>
                  <Card.Text>
                    <strong>Quantity:</strong> {item.count}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="outline-primary" size="sm" onClick={() => addToCart(item)}>+</Button>
                    <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>-</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
      <h3>Total: ${calculateTotal().toLocaleString('es-CL')}</h3>
      <Button variant="primary" onClick={handleCheckout} disabled={!token}>
        Pay
      </Button> {/* Deshabilita el botón si token es false */}
    </div>
  );
};

export default Cart;
