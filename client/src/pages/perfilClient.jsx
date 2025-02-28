import React from 'react';
import { useNavigate } from 'react-router-dom';

const PerfilClient = () => {
  const nombre = localStorage.getItem('nombre');
  const identificacion = localStorage.getItem('identificacion');
  const rol = localStorage.getItem('rol');
  const token = localStorage.getItem('token'); // Verificamos si existe un token
  const navigate = useNavigate(); // Hook para redirigir

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('identificacion');
    localStorage.removeItem('rol');
    navigate('/login');
  };

  // Si no hay token o no hay rol, mostramos un mensaje de "No estás logueado"
  if (!token || !rol) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">No estás logueado</h1>
          <p className="text-lg text-gray-600 mb-6">
            Por favor, <a href="/login" className="text-blue-500 underline">inicia sesión</a> para acceder a tu perfil.
          </p>
        </div>
      </div>
    );
  }

  // Si hay token y rol, mostramos el perfil
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Perfil del Usuario</h1>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 mb-4 rounded-full bg-blue-200 flex items-center justify-center text-3xl font-semibold text-white" id='circle_name'>
            {nombre && nombre.charAt(0)}
          </div>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            <strong>Nombre:</strong> {nombre}
          </p>
          <p className="text-lg text-gray-600 mb-2" id='identificacion_perfil'>
            <strong id='id_perfil'>Identificación:</strong> {identificacion}
          </p>
          <p className="text-lg text-gray-600">
            <strong id='rol_perfil'>Rol:</strong> {rol === '1' ? 'Arquitecto' : 'Cliente'}
          </p>
          <button 
            onClick={handleLogout} 
            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" id='boton_logout'>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilClient;
