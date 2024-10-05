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
import { ContextProvider } from "../src/context/globalContext";
import ProtectedRoute from "./pages/protectedRoute";  // Importamos el componente de ruta protegida

function Router() {
  let router = useRoutes([
    { path: "/", element: <Home /> },  // Ruta pública
    { path: "/usuarios-any", element: <UsuariosAnonimos /> },  // Ruta pública
    { path: "/Login", element: <Login /> },  // Ruta pública
    { path: "/register", element: <Register /> },  // Ruta pública
    { path: "/materiales", element: <Nosotros /> },  // Ruta pública
    { path: "/proyectos", element: <Servicios /> },  // Ruta pública
    { path: "/cotizacion", element: <Cotizacion /> },  // Ruta pública
    { path: "/perfil", element: <PerfilClient /> },  // Ruta pública

    // Ruta protegida solo para arquitectos (rol 1)
    { 
      path: "/usuarios", 
      element: (
        <ProtectedRoute allowedRoles={['1']}>  {/* Solo permite acceso si es arquitecto */}
          <Contacto />  {/* Esta es la vista de "usuarios" */}
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
