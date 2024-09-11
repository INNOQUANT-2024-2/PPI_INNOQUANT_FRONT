import { BrowserRouter,useRoutes } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"
import Contacto from "./pages/contact/contacto"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import Nosotros from "./pages/nosotros/nosotros"
import Servicios from "./pages/servicios/servicios"
import Cotizacion from "./pages/cotizacion/cotizacion"
import { ContextProvider } from "../src/context/globalContext"


function Router (){
  let router = useRoutes([
    {path:"/",element:<Home/>}, 
    {path:"/Contacto",element:<Contacto/>},
    {path:"/Login",element:<Login/>},
    {path:"/register",element:<Register/>},
    {path:"/nosotros",element:<Nosotros/>},
    {path:"/servicios",element:<Servicios/>},
    {path:"/cotizacion",element:<Cotizacion/>},
  ]
  )
  return router
}


function App() {

  return (
    <>
    <ContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Router/>
      </BrowserRouter>
    </ContextProvider>
    </>
  )
}

export default App
