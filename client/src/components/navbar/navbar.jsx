import React, { useState } from "react";
import "../navbar/navbar.css";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Obtener el rol del localStorage
  const rol = localStorage.getItem("rol");

  return (
    <div className="ppal-navbar">
      <div className="navbar w-full flex text-white font-semibold text-[1rem] bg-[#353A3E] h-[9vh]">
        <div className="flex w-full justify-between items-center">
          <NavLink to="/">
            <h1 id="navbar-brand" className="ml-4 mt-0 text-xl transition duration-300 ease-in-out hover:scale-110">
              INNOQUANT
            </h1>
          </NavLink>
          <ul className="gap-10 md:flex hidden justify-center">
            <NavLink to="/">
              <li id="nav-home" className="transition duration-300 ease-in-out hover:scale-110">Inicio</li>
            </NavLink>

            {/* Si el usuario no está logueado, mostrar la ruta pública de materiales */}
            {!rol ? (
              <NavLink to="/materiales-any">
                <li id="nav-materiales-any" className="transition duration-300 ease-in-out hover:scale-110">Materiales</li>
              </NavLink>
            ) : (
              <>
                {/* Si el usuario es cliente */}
                {rol === "2" && (
                  <NavLink to="/materiales-client">
                    <li id="nav-materiales-client" className="transition duration-300 ease-in-out hover:scale-110">Materiales</li>
                  </NavLink>
                )}

                {/* Si el usuario es arquitecto */}
                {rol === "1" && (
                  <NavLink to="/materiales-arq">
                    <li id="nav-materiales-arq" className="transition duration-300 ease-in-out hover:scale-110">Materiales</li>
                  </NavLink>
                )}
              </>
            )}

            {/* Verificar si el rol es arquitecto o no */}
            {rol === "1" ? (
              <NavLink to="/usuarios">
                <li id="nav-usuarios" className="transition duration-300 ease-in-out hover:scale-110" name="nav-usuarios-arq">Usuarios</li>
              </NavLink>
            ) : (
              <NavLink to="/usuarios-any">
                <li id="nav-usuarios-any" className="transition duration-300 ease-in-out hover:scale-110">Usuarios</li>
              </NavLink>
            )}

            {/* Verificar si el usuario está logueado o no para mostrar la ruta de proyectos */}
            {!rol ? (
              <NavLink to="/proyectos-any">
                <li id="nav-proyectos-any" className="transition duration-300 ease-in-out hover:scale-110">Proyectos</li>
              </NavLink>
            ) : (
              <NavLink to="/proyectos">
                <li id="nav-proyectos" className="transition duration-300 ease-in-out hover:scale-110">Proyectos</li>
              </NavLink>
            )}

            <NavLink to="/perfil">
              <li id="nav-perfil" className="transition duration-300 ease-in-out hover:scale-110">Perfil</li>
            </NavLink>
          </ul>
          <ul className="gap-10 md:flex hidden mr-5">
            <NavLink to="/login">
              <li id="nav-login">
                <FaUser className="text-[1.5rem] font-semibold transition duration-300 ease-in-out hover:scale-110" />
              </li>
            </NavLink>
          </ul>
        </div>

        {/* Botón de hamburguesa para pantallas pequeñas */}
        <div className="relative flex justify-end">
          <button onClick={toggleMenu} className="md:hidden mr-5 text-[1.5rem] font-semibold absolute mt-5">
            <RxHamburgerMenu className="transition duration-300 ease-in-out hover:scale-110" />
          </button>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#353A3E] text-white w-full py-4">
          <NavLink to="/" onClick={toggleMenu}>
            <div id="mobile-nav-home" className="py-2 hover:scale-110 transition duration-300 ease-in-out w-full text-center">Inicio</div>
          </NavLink>

          {/* Si el usuario no está logueado, mostrar la ruta pública de materiales */}
          {!rol ? (
            <NavLink to="/materiales-any" onClick={toggleMenu}>
              <div id="mobile-nav-materiales-any" className="py-2 hover:scale-110 transition duration-300 ease-in-out w-full text-center">Materiales</div>
            </NavLink>
          ) : (
            <>
              {/* Si el usuario es cliente */}
              {rol === "2" && (
                <NavLink to="/materiales-client" onClick={toggleMenu}>
                  <div id="mobile-nav-materiales-client" className="py-2 hover:scale-110 transition duration-300 ease-in-out w-full text-center">Materiales</div>
                </NavLink>
              )}

              {/* Si el usuario es arquitecto */}
              {rol === "1" && (
                <NavLink to="/materiales-arq" onClick={toggleMenu}>
                  <div id="mobile-nav-materiales-arq" className="py-2 hover:scale-110 transition duration-300 ease-in-out w-full text-center">Materiales</div>
                </NavLink>
              )}
            </>
          )}

          {/* Verificar si el rol es arquitecto o no para pantallas pequeñas */}
          {rol === "1" ? (
            <NavLink to="/usuarios" onClick={toggleMenu}>
              <div id="mobile-nav-usuarios" className="py-2 hover:scale-110 transition duration-300 ease-in-out w-full text-center">Usuarios</div>
            </NavLink>
          ) : (
            <NavLink to="/usuarios-any" onClick={toggleMenu}>
              <div id="mobile-nav-usuarios-any" className="py-2 hover:scale-110 transition duration-300 ease-in-out w-full text-center">Usuarios</div>
            </NavLink>
          )}

          {/* Verificar si el usuario está logueado o no para mostrar la ruta de proyectos */}
          {!rol ? (
            <NavLink to="/proyectos-any" onClick={toggleMenu}>
              <div id="mobile-nav-proyectos-any" className="py-2 hover:scale-110 transition duration-300 ease-in-out w-full text-center">Proyectos</div>
            </NavLink>
          ) : (
            <NavLink to="/proyectos" onClick={toggleMenu}>
              <div id="mobile-nav-proyectos" className="py-2 hover:scale-110 transition duration-300 ease-in-out w-full text-center">Proyectos</div>
            </NavLink>
          )}

          <NavLink to="/perfil" onClick={toggleMenu}>
            <div id="mobile-nav-perfil" className="py-2 hover:scale-110 transition duration-300 ease-in-out w-full text-center">Perfil</div>
          </NavLink>
          <NavLink to="/login" onClick={toggleMenu}>
            <div id="mobile-nav-login" className="py-2 hover:scale-110 transition duration-300 ease-in-out w-full text-center">Login</div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
