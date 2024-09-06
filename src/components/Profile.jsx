import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container">
      <p>Email:xxxx.com</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
