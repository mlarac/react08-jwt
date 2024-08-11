import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/Header.jpg'; // Ajusta la ruta según tu estructura de carpetas

const Header = ({ text }) => {
  return (
    <div className="position-relative text-center text-light d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
      <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Header;
