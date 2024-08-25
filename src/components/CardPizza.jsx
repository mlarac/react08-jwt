import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ${price.toFixed(2)}
        </Card.Text>
        <Card.Text>
          <strong>Ingredients:</strong>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="outline-secondary" size="sm">Add to Cart</Button>
          <Button variant="outline-secondary" size="sm">View More</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
