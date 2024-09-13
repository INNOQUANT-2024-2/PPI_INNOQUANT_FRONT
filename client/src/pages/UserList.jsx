import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    identificacion_usu: '',
    nombre_usu: '',
    apellido1_usu: '',
    apellido2_usu: '',
    rol_usu: '',
    contra_usu: ''
  });
  
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/users');
      console.log('Response from API:', res.data); // Verificar la respuesta de la API
      setUsers(Array.isArray(res.data) ? res.data : []); // Asegura que la respuesta sea un arreglo
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([]); // En caso de error, asegura que users sea un arreglo vacío
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCreateUser = async () => {
    try {
      await axios.post('http://localhost:3000/api/users', newUser);
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewUser({
      identificacion_usu: user.IDENTIFICACION_USU,
      nombre_usu: user.NOMBRE_USU,
      apellido1_usu: user.APELLIDO1_USU,
      apellido2_usu: user.APELLIDO2_USU,
      rol_usu: user.CODIGO_ROL_USU,
      contra_usu: ''
    });
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(`http://localhost:3000/api/users/${editingUser.ID_USU}`, newUser);
      setEditingUser(null);
      setNewUser({
        identificacion_usu: '',
        nombre_usu: '',
        apellido1_usu: '',
        apellido2_usu: '',
        rol_usu: '',
        contra_usu: ''
      });
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Usuarios</h1>
      <div className="mb-4">
       
        <input
          type="text"
          name="identificacion_usu"
          placeholder="Identificacion"
          value={newUser.identificacion_usu}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="nombre_usu"
          placeholder="Nombre"
          value={newUser.nombre_usu}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="apellido1_usu"
          placeholder="Apellido 1"
          value={newUser.apellido1_usu}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="apellido2_usu"
          placeholder="Apellido 2"
          value={newUser.apellido2_usu}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="rol_usu"
          placeholder="Rol"
          value={newUser.rol_usu}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="password"
          name="contra_usu"
          placeholder="Contraseña"
          value={newUser.contra_usu}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        {editingUser ? (
          <button onClick={handleUpdateUser} className="bg-yellow-500 text-white p-2">
            Actualizar Usuario
          </button>
        ) : (
          <button onClick={handleCreateUser} className="bg-blue-500 text-white p-2">
            Crear Usuario
          </button>
        )}
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Identificacion</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Apellido 1</th>
            <th className="border p-2">Apellido 2</th>
            <th className="border p-2">Rol</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.ID_USU}>
                <td className="border p-2">{user.ID_USU}</td>
                <td className="border p-2">{user.IDENTIFICACION_USU}</td>
                <td className="border p-2">{user.NOMBRE_USU}</td>
                <td className="border p-2">{user.APELLIDO1_USU}</td>
                <td className="border p-2">{user.APELLIDO2_USU}</td>
                <td className="border p-2">{user.CODIGO_ROL_USU}</td>
                <td className="border p-2">
                  <button onClick={() => handleEditUser(user)} className="bg-yellow-500 text-white p-2 mr-2">
                    Editar
                  </button>
                  <button onClick={() => handleDeleteUser(user.ID_USU)} className="bg-red-500 text-white p-2">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="border p-2 text-center">No hay usuarios</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;