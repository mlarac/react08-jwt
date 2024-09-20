import React from 'react';
import { useCart } from '../context/CartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const { cart, addToCart, removeFromCart, calculateTotal } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
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
                    <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
      <h3>Total: ${calculateTotal().toLocaleString('es-CL')}</h3>
      <Button variant="primary">Pay</Button>
    </div>
  );
};

export default Cart;
