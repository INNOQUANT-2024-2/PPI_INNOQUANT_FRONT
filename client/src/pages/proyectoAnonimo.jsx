import React from 'react';
import { FaBuilding, FaHome, FaRoad, FaWarehouse } from 'react-icons/fa'; // Iconos de FontAwesome

function ProyectoAnonimo() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Tipos de Proyectos en una Constructora Básica</h1>

        <p className="text-lg text-center mb-8 text-gray-700">
          En una constructora básica, nos especializamos en diversos tipos de proyectos esenciales para el desarrollo urbano y habitacional.
          Aquí te contamos más sobre los tipos de proyectos que manejamos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Proyecto: Edificios Residenciales */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaBuilding className="text-blue-500 text-4xl mr-4" />
              <h2 className="text-2xl font-bold text-blue-800">Edificios Residenciales</h2>
            </div>
            <p className="text-gray-600">
              Construimos complejos de apartamentos y viviendas multifamiliares, adaptándonos a las necesidades del mercado actual. 
              Nuestras soluciones habitacionales ofrecen calidad y comodidad a los residentes.
            </p>
          </div>

          {/* Proyecto: Casas Unifamiliares */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaHome className="text-green-500 text-4xl mr-4" />
              <h2 className="text-2xl font-bold text-green-800">Casas Unifamiliares</h2>
            </div>
            <p className="text-gray-600">
              Nos especializamos en la construcción de viviendas individuales, desde diseños personalizados hasta proyectos en serie.
              Creamos hogares donde la gente puede vivir y prosperar.
            </p>
          </div>

          {/* Proyecto: Infraestructura Vial */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaRoad className="text-yellow-500 text-4xl mr-4" />
              <h2 className="text-2xl font-bold text-yellow-800">Infraestructura Vial</h2>
            </div>
            <p className="text-gray-600">
              Ejecutamos proyectos de construcción y mejora de carreteras, puentes y vías urbanas, con un enfoque en la durabilidad y 
              el impacto positivo en las comunidades.
            </p>
          </div>

          {/* Proyecto: Bodegas Industriales */}
          <div className="bg-red-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaWarehouse className="text-red-500 text-4xl mr-4" />
              <h2 className="text-2xl font-bold text-red-800">Bodegas Industriales</h2>
            </div>
            <p className="text-gray-600">
              Desarrollamos espacios industriales y comerciales, diseñados para el almacenamiento y la logística eficiente, 
              cumpliendo con los estándares más altos de seguridad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProyectoAnonimo;
