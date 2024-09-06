import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

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

  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>Price: ${pizza.price.toLocaleString('es-CL')}</p>
      <p>{pizza.desc}</p>
      <p>Ingredients: {pizza.ingredients.join(', ')}</p>
      <img src={pizza.img} alt={pizza.name} />
      <button>Add to Cart</button>
    </div>
  );
};

export default Pizza;
