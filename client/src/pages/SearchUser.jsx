import React, { useState } from 'react';
import axios from 'axios';

const SearchUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    try {
      console.log(`Searching for: ${searchTerm}`);
      const res = await axios.get(`http://localhost:3000/api/users/search?nombre_usu=${searchTerm}`);
      console.log('Search result:', res.data);
      setSearchResult(res.data);
    } catch (error) {
      console.error('Error searching user:', error);
      setSearchResult([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar usuario por nombre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border p-2 mr-2'
      />
      <button onClick={handleSearch} className=' bg-green-500 text-white p-2'>Buscar</button>

      {searchResult && (
        <div>
          {searchResult.length > 0 ? (
            searchResult.map((user) => (
              <div key={user.ID_USU}>
                <p>ID: {user.ID_USU}</p>
                <p>Nombre: {user.NOMBRE_USU}</p>
                <p>Apellido 1: {user.APELLIDO1_USU}</p>
                <p>Apellido 2: {user.APELLIDO2_USU}</p>
                <p>Rol: {user.CODIGO_ROL_USU}</p>
              </div>
            ))
          ) : (
            <p>No hay usuarios</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchUser;
