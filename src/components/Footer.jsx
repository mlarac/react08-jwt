import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export const Footer = () => {
  return (
    <Navbar  bg="dark" variant="dark"  className="mt-auto py-3 w-100">
      <div className="text-center w-100 text-light">
        © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados
      </div>
    </Navbar>
  );
};
