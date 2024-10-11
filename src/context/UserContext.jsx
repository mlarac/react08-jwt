import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // El token por defecto será null hasta que el usuario inicie sesión
  const [email, setEmail] = useState(null); // El email por defecto será null hasta que se registre o inicie sesión
  const [profile, setProfile] = useState(null); // Línea agregada: estado para almacenar el perfil del usuario

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
    setProfile(null); // Línea agregada: Limpia el perfil al hacer logout
    console.log('Logout successful');
  };

  // Método para obtener el perfil del usuario autenticado
  const fetchProfile = async () => {  // Línea agregada: nuevo método fetchProfile
    if (!token) return; // Línea agregada: Verifica si hay un token antes de hacer la petición

    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Línea agregada: Enviar el token en los headers
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProfile(data); // Línea agregada: Almacena el perfil obtenido
        console.log('Profile fetched successfully:', data);
      } else {
        console.error('Failed to fetch profile');
      }
    } catch (error) {
      console.error('Error during profile fetch:', error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, profile, login, register, logout, fetchProfile }}> {/* Línea agregada: Exponer profile y fetchProfile */}
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
