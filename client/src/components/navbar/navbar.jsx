import React from "react";
import "../navbar/navbar.css";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" ppal-navbar">
      <div className=" navbar w-full flex text-white font-semibold text-[1rem] bg-[#353A3E] h-[9vh] ">
        <div className=" flex w-full justify-between items-center ">
          <NavLink to="/">
            <h1 className=" ml-4 mt-0 text-xl transition duration-300 ease-in-out hover:scale-110 ">INNOQUANT</h1>
          </NavLink>
          <ul className=" gap-10 md:flex hidden justify-center ">
            <NavLink to="/" >
              <li className=" transition duration-300 ease-in-out hover:scale-110 ">Inicio</li>
            </NavLink>
            <NavLink to="/nosotros">
              <li className="transition duration-300 ease-in-out hover:scale-110 ">Materiales</li>
            </NavLink>
            <NavLink to="/contacto">
              <li className=" transition duration-300 ease-in-out hover:scale-110 ">Usuarios</li>
            </NavLink>
            <NavLink to="/servicios">
              <li className=" transition duration-300 ease-in-out hover:scale-110  ">Proyectos</li>
            </NavLink>
          </ul>
          <ul className="gap-10 md:flex hidden mr-5">
            <NavLink to="/login">
              <li className="">
                <FaUser className=" text-[1.5rem] font-semibold transition duration-300 ease-in-out hover:scale-110 " />
              </li>
            </NavLink>
          </ul>
        </div>
        <NavLink>
          <div className=" relative flex justify-end">
            <RxHamburgerMenu className=" md:hidden mr-5 text-[1.5rem] font-semibold absolute mt-5 transition duration-300 ease-in-out hover:scale-110 " />
          </div>
        </NavLink>
      </div>
      
    </div>
  );
};

export default Navbar;
