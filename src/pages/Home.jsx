// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardItem from "../components/CardPizza";
//import {pizzas} from '../assets/pizzas'

const Home = () => {
  //creo estado de pizzas al principio este esta vacio, con esto se deja de ocupar import
  const [pizzas, SetPizzas] = useState([]);

  //usamos useEffect para consumir la api, se ejecuta luego que el componente se monta
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        SetPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas", error);
      }
    };

    fetchPizzas();
  }, []); // Add the closing parenthesis and empty dependency array here

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
