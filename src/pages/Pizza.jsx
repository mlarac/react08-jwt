import React, { useState, useEffect } from 'react';
import { useCart } from '../context/Cartcontext'; // Importa el contexto del carrito

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useCart(); // Desestructura la función addToCart desde el contexto

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Error fetching pizza:', error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Loading...</div>;  // Mostrar un mensaje de carga mientras se obtienen los datos
  }

  const handleAddToCart = () => {
    // Llama a la función addToCart desde el contexto, pasando el objeto de la pizza
    addToCart({
      id: pizza.id, 
      name: pizza.name, 
      price: pizza.price, 
      img: pizza.img, 
      count: 1 // Agregas un conteo inicial de 1
    });
  };

  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>Price: ${pizza.price.toLocaleString('es-CL')}</p>
      <p>{pizza.desc}</p>
      <p>Ingredients: {pizza.ingredients.join(', ')}</p>
      <img src={pizza.img} alt={pizza.name} />
      <button onClick={handleAddToCart}>Add to Cart</button> {/* Llamas a handleAddToCart al hacer clic */}
    </div>
  );
};

export default Pizza;
