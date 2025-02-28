import { BrowserRouter, useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Contacto from "./pages/contact/contacto";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Nosotros from "./pages/nosotros/nosotros";
import Servicios from "./pages/servicios/servicios";
import Cotizacion from "./pages/cotizacion/cotizacion";
import PerfilClient from "./pages/perfilClient";
import UsuariosAnonimos from "./pages/usuariosAnonimo";
import MaterialesAnonimo from "./pages/materiales/materialesAnonimo";
import MaterialesClient from "./pages/materiales/materialesClient";
import ProyectoAnonimo from "./pages/proyectoAnonimo";
import { ContextProvider } from "../src/context/globalContext";
import ProtectedRoute from "./pages/protectedRoute";  

function Router() {
  let router = useRoutes([
    { path: "/", element: <Home /> },  
    { path: "/usuarios-any", element: <UsuariosAnonimos /> },  
    { path: "/materiales-any", element: <MaterialesAnonimo /> },  
    { path: "/Login", element: <Login /> },  
    { path: "/register", element: <Register /> },  
    { path: "/proyectos-any", element: <ProyectoAnonimo /> },  
    { path: "/cotizacion", element: <Cotizacion /> },  
    { path: "/perfil", element: <PerfilClient /> },  

   //Rutas Protegidas
    { 
      path: "/usuarios", 
      element: (
        <ProtectedRoute allowedRoles={['1']}>  
          <Contacto />  
        </ProtectedRoute>
      )
    },

    // Ruta protegida para clientes (rol 2)
    {
      path: "/materiales-client", 
      element: (
        <ProtectedRoute allowedRoles={['2']}>  
          <MaterialesClient />  
        </ProtectedRoute>
      )
    },

    // Ruta protegida para arquitectos (rol 1)
    {
      path: "/materiales-arq",
      element: (
        <ProtectedRoute allowedRoles={['1']}>  
          <Nosotros />  
        </ProtectedRoute>
      )
    },

    { 
      path: "/proyectos", 
      element: (
        <ProtectedRoute allowedRoles={['1', '2']}>  
          <Servicios/>
        </ProtectedRoute>
      )
    },
  ]);

  return router;
}

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Router />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
