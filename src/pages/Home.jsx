// src/pages/Home.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardItem from '../components/CardItem';

const Home = () => {
  const products = [
    {
      name :"Pepperoni",
      price : 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    },
    {
      name :"Pepperoni",
      price : 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    },
    {
      name :"Pepperoni",
      price : 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    }
  ];

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={4}>
            <CardItem 
              name={product.name}
              price={product.price}
              ingredients={product.ingredients}
              img={product.img}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
