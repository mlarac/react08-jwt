import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext'; // Importar el contexto de usuario
import { useNavigate } from 'react-router-dom';  // Para redirigir después del logout

const Profile = () => {
  const { profile, fetchProfile, logout } = useUser(); // Desestructurar profile, fetchProfile y logout desde el contexto
  const navigate = useNavigate(); // Hook de React Router para redirigir

  // Usar useEffect para llamar a fetchProfile al montar el componente
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]); // Solo se llama una vez cuando el componente se monta

  const handleLogout = () => {
    logout();  // Llamar al método logout
    navigate('/login');  // Redirigir a la página de login
  };

  return (
    <div className="profile-container">
      <p>Email: {profile?.email}</p> {/* Mostrar el email del usuario autenticado */}
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
