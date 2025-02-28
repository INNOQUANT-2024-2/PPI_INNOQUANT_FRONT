import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MaterialesClient() {
  const [materials, setMaterials] = useState([]);

  // Función para obtener los materiales desde la API
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const res = await axios.get('http://localhost:3002/api/materials');  // Ajusta la URL de tu API
        
        // Verificar que la respuesta contenga datos
        console.log('Datos recibidos desde la API:', res.data);
        
        setMaterials(res.data); // Asegúrate de que res.data contenga los materiales
      } catch (error) {
        console.error('Error fetching materials:', error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Materiales Disponibles</h1>
        
        {/* Descripción */}
        <p className="text-xl text-gray-700 mb-12 text-center">
          Aquí puedes ver todos los materiales disponibles para la construcción. Estos materiales están listos para ser utilizados en tu proyecto.
        </p>

        {/* Lista de Materiales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.length > 0 ? (
            materials.map((material) => (
              <div key={material.codigo_mat} className="bg-white shadow-lg rounded-lg p-6">
                {/* Verifica que los datos no sean undefined o null */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{material.nombre_mat || 'Sin nombre'}</h2>
                <p className="text-gray-600">
                  <strong>Código:</strong> {material.codigo_mat || 'No disponible'}
                </p>
                <p className="text-gray-600">
                  <strong>Precio:</strong> {material.precio_mat ? `${material.precio_mat} COP` : 'No disponible'}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">No hay materiales disponibles en este momento.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MaterialesClient;
