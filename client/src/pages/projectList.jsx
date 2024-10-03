import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    nombre_proyecto: '',
    descripcion_proyecto: '',
    id_usu_pro: ''
  });
  
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:3002/api/projects');
      console.log('Response from API:', res.data); // Verificar la respuesta de la API
      setProjects(Array.isArray(res.data) ? res.data : []); // Asegura que la respuesta sea un arreglo
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([]); // En caso de error, asegura que projects sea un arreglo vacío
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleCreateProject = async () => {
    try {
      await axios.post('http://localhost:3000/api/projects', newProject);
      fetchProjects();
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setNewProject({
      nombre_proyecto: project.NOMBRE_PROYECTO,
      descripcion_proyecto: project.DESCRIPCION_PROYECTO,
    });
  };

  const handleUpdateProject = async () => {
    try {
      await axios.put(`http://localhost:3000/api/projects/${editingProject.ID_PROYECTO}`, newProject);
      setEditingProject(null);
      setNewProject({
        nombre_proyecto: '',
        descripcion_proyecto: '',
      });
      fetchProjects();
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Proyectos</h1>
      <div className="mb-4">
        <input
          type="text"
          name="nombre_proyecto"
          placeholder="Nombre del Proyecto"
          value={newProject.nombre_proyecto}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="descripcion_proyecto"
          placeholder="Descripción del Proyecto"
          value={newProject.descripcion_proyecto}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        {editingProject ? (
          <button onClick={handleUpdateProject} className="bg-yellow-500 text-white p-2">
            Actualizar Proyecto
          </button>
        ) : (
          <button onClick={handleCreateProject} className="bg-[#171824] text-white p-2">
            Crear Proyecto
          </button>
        )}
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nombre del Proyecto</th>
            <th className="border p-2">Descripción</th>
            <th className="border p-2">Fecha de Inicio</th>
            <th className="border p-2">Fecha de Fin</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map(project => (
              <tr key={project.ID_PROYECTO}>
                <td className="border p-2">{project.ID_PROYECTO}</td>
                <td className="border p-2">{project.NOMBRE_PROYECTO}</td>
                <td className="border p-2">{project.DESCRIPCION_PROYECTO}</td>
                <td className="border p-2">{project.FECHA_INICIO}</td>
                <td className="border p-2">{project.FECHA_FIN}</td>
                <td className="border p-2">
                  <button onClick={() => handleEditProject(project)} className="bg-yellow-500 text-white p-2 mr-2">
                    Editar
                  </button>
                  <button onClick={() => handleDeleteProject(project.ID_PROYECTO)} className="bg-red-500 text-white p-2">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="border p-2 text-center">No hay proyectos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
