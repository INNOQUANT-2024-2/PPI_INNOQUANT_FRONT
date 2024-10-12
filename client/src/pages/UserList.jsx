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
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3002/api/users');
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCreateUser = async () => {
    try {
      setErrorMessage('');
      setSuccessMessage('');

      if (
        !newUser.identificacion_usu ||
        !newUser.nombre_usu ||
        !newUser.apellido1_usu ||
        !newUser.contra_usu ||
        !newUser.rol_usu
      ) {
        setErrorMessage('Todos los campos son obligatorios.');
        return;
      }

      await axios.post('http://localhost:3002/api/users', newUser);
      setSuccessMessage('Usuario creado con éxito');
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
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Error al crear el usuario');
      } else {
        setErrorMessage('Error al crear el usuario. Inténtelo de nuevo.');
      }
    }
  };

  const handleDeleteUser = async () => {
    try {
      setErrorMessage('');
      setSuccessMessage('');
      await axios.delete(`http://localhost:3002/api/users/${userToDelete.ID_USU}`);
      setSuccessMessage('Usuario eliminado con éxito');
      setDeleteModalOpen(false);
      setUserToDelete(null);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      setErrorMessage('Error al eliminar el usuario');
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
      setErrorMessage('');
      setSuccessMessage('');

      await axios.put(`http://localhost:3002/api/users/${editingUser.ID_USU}`, newUser);
      setEditingUser(null);
      setSuccessMessage('Usuario actualizado con éxito');
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
      setErrorMessage('Error al actualizar el usuario');
    }
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setNewUser({
      identificacion_usu: '',
      nombre_usu: '',
      apellido1_usu: '',
      apellido2_usu: '',
      rol_usu: '',
      contra_usu: ''
    });
    setErrorMessage('');
    setSuccessMessage('');
  };

  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setUserToDelete(null);
    setDeleteModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Usuarios</h1>

      {errorMessage && <div className="bg-red-200 text-red-800 p-2 rounded mb-4">{errorMessage}</div>}
      {successMessage && <div className="bg-green-200 text-green-800 p-2 rounded mb-4">{successMessage}</div>}

      <div className="mb-4">
        <input
          type="text"
          name="identificacion_usu"
          placeholder="Identificación"
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
        <select
          name="rol_usu"
          value={newUser.rol_usu}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        >
          <option value="">Seleccione un rol</option>
          <option value="1">Arquitecto</option>
          <option value="2">Cliente</option>
        </select>
        {!editingUser && (
          <input
            type="password"
            name="contra_usu"
            placeholder="Contraseña"
            value={newUser.contra_usu}
            onChange={handleInputChange}
            className="border p-2 mr-2"
          />
        )}
        {editingUser ? (
          <>
            <button onClick={handleUpdateUser} className="bg-yellow-500 text-white p-2 mr-2">
              Actualizar Usuario
            </button>
            <button onClick={handleCancelEdit} className="bg-gray-500 text-white p-2">
              Cancelar
            </button>
          </>
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
            <th className="border p-2">Identificación</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Apellido 1</th>
            <th className="border p-2">Apellido 2</th>
            <th className="border p-2">Rol</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.ID_USU}>
                <td className="border p-2">{user.ID_USU}</td>
                <td className="border p-2">{user.IDENTIFICACION_USU}</td>
                <td className="border p-2">{user.NOMBRE_USU}</td>
                <td className="border p-2">{user.APELLIDO1_USU}</td>
                <td className="border p-2">{user.APELLIDO2_USU}</td>
                <td className="border p-2"> {user.CODIGO_ROL_USU === 1 || user.CODIGO_ROL_USU === '1' ? "Arquitecto" : "Cliente"}</td>
                <td className="border p-2">
                  <button onClick={() => handleEditUser(user)} className="bg-yellow-500 text-white p-2 mr-2">
                    Editar
                  </button>
                  <button onClick={() => openDeleteModal(user)} className="bg-red-500 text-white p-2">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="border p-2 text-center">
                No hay usuarios
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal de confirmación de eliminación */}
      {deleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Confirmar Eliminación</h2>
            <p>
              ¿Estás seguro de que deseas eliminar al usuario{" "}
              <strong>{userToDelete.NOMBRE_USU}</strong> con identificación{" "}
              <strong>{userToDelete.IDENTIFICACION_USU}</strong>?
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeDeleteModal}
                className="bg-gray-500 text-white p-2 mr-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleDeleteUser}
                className="bg-red-500 text-white p-2 rounded"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
