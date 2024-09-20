import { createContext, useState } from "react";
import { pizzaCart } from "../assets/pizzas";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
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
    <CartContext.Provider value={{ cart, setCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
