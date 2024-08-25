// src/pages/Home.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardItem from '../components/CardPizza';
import {pizzas} from '../assets/pizzas'


const Home = () => {
  
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row>
        {pizzas.map((pizzas, index) => (
          <Col key={index} md={4}>
            <CardItem 
              name={pizzas.name}
              price={pizzas.price}
              ingredients={pizzas.ingredients}
              img={pizzas.img}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
