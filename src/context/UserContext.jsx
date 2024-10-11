import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const UserContext = createContext();

// Hook para consumir el contexto en otros componentes
export const useUser = () => useContext(UserContext);

// Proveedor del contexto
const UserProvider = ({ children }) => {
  // Estado que almacena el token, por defecto en true
  //const [token, setToken] = useState(true);
  const [token, setToken] = useState(null); // El token por defecto será null hasta que el usuario inicie sesión
  const [email, setEmail] = useState(null); // El email por defecto será null hasta que se registre o inicie sesión
  
  // Método para hacer login
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setToken(data.token); // Almacena el token devuelto por el servidor
        setEmail(data.email); // Almacena el email del usuario devuelto por el servidor
        console.log('Login successful');
      } else {
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  // Método para hacer register
  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setToken(data.token); // Almacena el token devuelto por el servidor
        setEmail(data.email); // Almacena el email del usuario devuelto por el servidor
        console.log('Register successful');
      } else {
        console.error('Failed to register');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

 // Método para hacer logout
 const logout = () => {
  setToken(null); // Elimina el token
  setEmail(null); // Elimina el email
  console.log('Logout successful');
};


  return (
    // Proveer el token y el método logout al contexto
    <UserContext.Provider value={{ token, email, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
