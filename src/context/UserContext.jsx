import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const UserContext = createContext();

// Hook para consumir el contexto en otros componentes
export const useUser = () => useContext(UserContext);

// Proveedor del contexto
const UserProvider = ({ children }) => {
  // Estado que almacena el token, por defecto en true
  const [token, setToken] = useState(true);

  // Método para logout, que cambia el token a false
  const logout = () => {
    setToken(false);
  };

  return (
    // Proveer el token y el método logout al contexto
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
