import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import Home from './pages/Home';
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Cart from './pages/Cart';
import Pizza from "./pages/Pizza";
//import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound"; 
import CartProvider from "./context/Cartcontext";

function App() {
  return (
   <>
   <CartProvider>
      <NavigationBar />
      <Header text="Bienvenido a Pizzería Mamma Mia!" />
      
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta para el registro */}
        <Route path="/register" element={<Register />} />
        
        {/* Ruta para el login */}
        <Route path="/login" element={<Login />} />
        
        {/* Ruta para el carrito */}
        <Route path="/cart" element={<Cart />} />
        
        {/* Ruta para una pizza específica */}
        <Route path="/pizza/p001" element={<Pizza />} />
        
        {/* Ruta para el perfil de usuario 
        <Route path="/profile" element={<Profile />} />*/}
        
        {/* Ruta para página 404 */}
        <Route path="/404" element={<NotFound />} />
        
        {/* Redirección para cualquier ruta no definida */}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      
      <Footer />
      </CartProvider>
      </>
  );
}

export default App;
