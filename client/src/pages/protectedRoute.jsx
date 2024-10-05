import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const rol = localStorage.getItem('rol');  // Obtener el rol del localStorage

  // Si el rol está permitido, renderizamos el componente hijo. Si no, redirigimos a usuarios-any.
  return allowedRoles.includes(rol) ? children : <Navigate to="/usuarios-any" />;
};

export default ProtectedRoute;
