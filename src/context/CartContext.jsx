import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { ...product, count: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find(item => item.id === id);
      if (itemToRemove && itemToRemove.count > 1) {
        return prevCart.map(item =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        );
      }
      return prevCart.filter(item => item.id !== id); // Eliminar solo si la cantidad es 1
    });
  };
  

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
