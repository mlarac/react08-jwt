import React, { useState } from 'react';
import { pizzaCart } from '../assets/pizzas'; // Ajusta la ruta según tu estructura de archivos
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].count += 1;
    setCart(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].count > 1) {
      newCart[index].count -= 1;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="row">
        {cart.map((item, index) => (
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
                  <Button variant="outline-primary" size="sm" onClick={() => decreaseQuantity(index)}>-</Button>
                  <Button variant="outline-primary" size="sm" onClick={() => increaseQuantity(index)}>+</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <h3>Total: ${calculateTotal().toLocaleString('es-CL')}</h3>
      <Button variant="primary">Pay</Button>
    </div>
  );
};

export default Cart;
