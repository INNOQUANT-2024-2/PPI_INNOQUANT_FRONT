import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente que protege rutas según el rol
const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");  // Verificar si el token existe
  const rol = localStorage.getItem("rol");  // Obtener el rol del usuario

  // Si no hay token, redirigir al login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Si el rol no está permitido, mostrar un aviso en lugar de redirigir
  if (!allowedRoles.includes(rol)) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl text-red-600">Acceso denegado</h1>
        <p>No tienes permisos para acceder a esta vista.</p>
        <a href="/" className="text-blue-500">Volver al inicio</a>
      </div>
    );
  }

  // Si el usuario tiene el rol permitido, mostrar el contenido
  return children;
};

export default ProtectedRoute;
