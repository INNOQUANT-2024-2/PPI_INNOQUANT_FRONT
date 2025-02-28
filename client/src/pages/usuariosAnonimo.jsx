import React from 'react';

function UsuariosAnonimo() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Acceso Denegado</h1>
        <p className="text-lg text-gray-700 mb-6">
          Lo sentimos, no tienes los permisos necesarios para acceder a esta página.
        </p>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png" 
          alt="Sin permiso" 
          className="mx-auto w-32 h-32 mb-6"
        />
        <a href="/" className="text-blue-500 hover:text-blue-700 underline font-semibold">
          Volver al Inicio
        </a>
      </div>
    </div>
  );
}

export default UsuariosAnonimo;
