import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MaterialsList = () => {
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState({
    codigo_mat: '',
    nombre_mat: '',
    cantidad_mat: '',
    precio_mat: ''
  });
  
  const [editingMaterial, setEditingMaterial] = useState(null);

  // Se ejecuta al montar el componente
  useEffect(() => {
    fetchMaterials();
  }, []);

  // Función para obtener los materiales desde la API
  const fetchMaterials = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/materials');
      
      // Agrega este console.log para verificar la respuesta
      console.log('Datos recibidos desde la API:', res.data); 

      // Asegúrate de que la respuesta sea un array antes de guardarla en el estado
      setMaterials(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('Error fetching materials:', error);
      setMaterials([]); // Si hay error, asegúrate de que materials sea un arreglo vacío
    }
  };

  // Manejo del cambio de input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMaterial({ ...newMaterial, [name]: value });
  };

  // Función para crear un nuevo material
  const handleCreateMaterial = async () => {
    try {
      // Asegúrate de que los campos estén completos
      if (!newMaterial.codigo_mat || !newMaterial.nombre_mat || !newMaterial.cantidad_mat || !newMaterial.precio_mat) {
        alert('Todos los campos son obligatorios.');
        return;
      }

      await axios.post('http://localhost:3000/api/materials', newMaterial);
      setNewMaterial({ codigo_mat: '', nombre_mat: '', cantidad_mat: '', precio_mat: '' }); // Limpiar el formulario
      fetchMaterials(); // Volver a cargar los materiales
    } catch (error) {
      console.error('Error creating material:', error);
    }
  };

  // Función para eliminar un material
  const handleDeleteMaterial = async (codigo_mat) => {
    try {
      await axios.delete(`http://localhost:3000/api/materials/${codigo_mat}`);
      fetchMaterials();
    } catch (error) {
      console.error('Error deleting material:', error);
    }
  };

  // Función para editar un material
  const handleEditMaterial = (material) => {
    setEditingMaterial(material);
    setNewMaterial({
      codigo_mat: material.codigo_mat,
      nombre_mat: material.nombre_mat,
      cantidad_mat: material.cantidad_mat,
      precio_mat: material.precio_mat
    });
  };

  // Función para actualizar un material
  const handleUpdateMaterial = async () => {
    if (!editingMaterial) return;  // Asegúrate de que haya un material en edición

    try {
      await axios.put(`http://localhost:3000/api/materials/${editingMaterial.codigo_mat}`, newMaterial);
      setEditingMaterial(null);
      setNewMaterial({
        codigo_mat: '',
        nombre_mat: '',
        cantidad_mat: '',
        precio_mat: ''
      });
      fetchMaterials();
    } catch (error) {
      console.error('Error updating material:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Materiales</h1>
      <div className="mb-4">
        <input
          type="text"
          name="codigo_mat"
          placeholder="Código del Material"
          value={newMaterial.codigo_mat}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="nombre_mat"
          placeholder="Nombre del Material"
          value={newMaterial.nombre_mat}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="cantidad_mat"
          placeholder="Cantidad del Material"
          value={newMaterial.cantidad_mat}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="precio_mat"
          placeholder="Precio del Material"
          value={newMaterial.precio_mat}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        {editingMaterial ? (
          <button onClick={handleUpdateMaterial} className="bg-yellow-500 text-white p-2">
            Actualizar Material
          </button>
        ) : (
          <button onClick={handleCreateMaterial} className="bg-blue-500 text-white p-2">
            Crear Material
          </button>
        )}
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Código</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Cantidad</th>
            <th className="border p-2">Precio</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {materials.length > 0 ? (
            materials.map((material) => (
              <tr key={material.codigo_mat}>
                <td className="border p-2">{material.codigo_mat}</td>
                <td className="border p-2">{material.nombre_mat}</td>
                <td className="border p-2">{material.cantidad_mat}</td>
                <td className="border p-2">{material.precio_mat}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEditMaterial(material)}
                    className="bg-yellow-500 text-white p-2 mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteMaterial(material.codigo_mat)}
                    className="bg-red-500 text-white p-2"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="border p-2 text-center">
                No hay materiales
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialsList;
