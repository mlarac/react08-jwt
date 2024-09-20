import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardItem from "../components/CardPizza";
import { useCart } from "../context/Cartcontext"; // Importamos el contexto del carrito

const Home = () => {
  // Estado para las pizzas, inicialmente vacío
  const [pizzas, SetPizzas] = useState([]);
  const { addToCart } = useCart(); // Obtenemos la función addToCart desde el contexto

  // Consumimos la API para obtener las pizzas cuando el componente se monta
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
  }, []);

  // Función que añade la pizza al carrito
  const handleAddToCart = (pizza) => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      img: pizza.img,
      count: 1, // Añadimos 1 como cantidad inicial
    });
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row>
        {pizzas.map((pizza, index) => (
          <Col key={index} md={4}>
            <CardItem
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              // Añadimos un botón de agregar al carrito que llama a handleAddToCart
              addToCart={() => handleAddToCart(pizza)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
