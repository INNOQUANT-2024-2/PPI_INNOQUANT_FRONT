import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MaterialsList = () => {
  const [materials, setMaterials] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [newMaterial, setNewMaterial] = useState({
    codigo_mat: '',
    nombre_mat: '',
    cantidad_mat: '',
    precio_mat: ''
  });
  const [editingMaterial, setEditingMaterial] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchMaterials();
  }, []);

  // Función para obtener los materiales desde la API
  const fetchMaterials = async () => {
    try {
      const res = await axios.get('/api/materials');
      console.log('Response from API:', res.data); // Verificar la respuesta de la API
      setMaterials(Array.isArray(res.data) ? res.data : []); // Asegura que la respuesta sea un arreglo
    } catch (error) {
      console.error('Error fetching materials:', error);
      setMaterials([]);
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
      await axios.post('http://localhost:3002/api/materials', newMaterial);
      fetchMaterials(); // Refrescar la lista después de crear un nuevo material
      setNewMaterial({
        codigo_mat: '',
        nombre_mat: '',
        cantidad_mat: '',
        precio_mat: ''
      });
      setErrorMessage(''); // Limpiar mensajes de error previos
      setSuccessMessage('Material creado con éxito'); // Mensaje de éxito
    } catch (error) {
      console.error('Error creating material:', error);
      if (error.response && error.response.data && error.response.data.mensaje) {
        setErrorMessage(error.response.data.mensaje);
      } else {
        setErrorMessage('Error al crear el material. Intente de nuevo.');
      }
    }
  };

  // Función para eliminar un material con confirmación
  const handleDeleteMaterial = async (codigo_mat) => {
    if (!codigo_mat) {
      console.error("El código del material es undefined. No se puede eliminar.");
      setErrorMessage("No se puede eliminar el material: código no válido.");
      return;
    }

    const confirmed = window.confirm(`¿Estás seguro de eliminar el material con código: ${codigo_mat}?`);
    if (!confirmed) return;

    try {
      console.log("Intentando eliminar el material con código:", codigo_mat);
      await axios.delete(`http://localhost:3002/api/materials/${codigo_mat}`);
      fetchMaterials();
      setErrorMessage(''); // Limpiar mensajes de error previos
    } catch (error) {
      console.error('Error deleting material:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Error al eliminar el material. Intente de nuevo.');
      }
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
    if (!editingMaterial) return;

    try {
      await axios.put(`http://localhost:3002/api/materials/${editingMaterial.codigo_mat}`, newMaterial);
      setEditingMaterial(null);
      setNewMaterial({
        codigo_mat: '',
        nombre_mat: '',
        cantidad_mat: '',
        precio_mat: ''
      });
      fetchMaterials();
      setErrorMessage(''); // Limpiar mensajes de error previos
    } catch (error) {
      console.error('Error updating material:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Error al actualizar el material. Intente de nuevo.');
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Materiales</h1>
      {errorMessage && <div className="bg-red-200 text-red-800 p-2 rounded mb-4">{errorMessage}</div>}
      <div className="mb-4">
        <input
          type="text"
          name="codigo_mat"
          id="codigo_mat"
          placeholder="Código del Material"
          value={newMaterial.codigo_mat}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="nombre_mat"
          id="nombre_mat"
          placeholder="Nombre del Material"
          value={newMaterial.nombre_mat}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="cantidad_mat"
          id="cantidad_mat"
          placeholder="Precio del Material"
          value={newMaterial.precio_mat}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="precio_mat"
          id="precio_mat"
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
            <th className="border p-2">Precio</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {materials.length > 0 ? (
            materials.map((material, index) => (
              <tr key={index}>
                <td className="border p-2">{material.codigo_mat}</td>
                <td className="border p-2">{material.nombre_mat}</td>
                <td className="border p-2">{material.cantidad_mat}</td>
                <td className="border p-2">{material.precio_mat}</td>
                <td className="border p-2">
                  <button onClick={() => handleEditMaterial(material)} className="bg-yellow-500 text-white p-2 mr-2">
                    Editar
                  </button>
                  <button onClick={() => handleDeleteMaterial(material.codigo_mat)} className="bg-red-500 text-white p-2">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="border p-2 text-center">No hay materiales</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialsList;
