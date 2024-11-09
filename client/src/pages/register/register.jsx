import React from "react";
import "../register/register.css";
import { GlobalContext } from "../../context/globalContext";

function Register() {
  const context = React.useContext(GlobalContext);

  return (
    <div className="ppal-register w-full">
      <div className="flex justify-center">
        <div className="conten-ppal-login flex justify-center h-auto m-4 items-center w-[90%]">
          <div className="conten-letf w-[50%] bg-[#394948] rounded-l-2xl">
            <div className="w-full bg-[#CED4DA] h-auto rounded-tr-[60px] rounded-l-2xl">
              <section className="ppal-form-register flex justify-center h-auto text-black">
                <div className="flex flex-col items-center justify-center w-[70%]">
                  <div className="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black h-auto">
                    <div className="form-login md:space-y-6 sm:p-7 shadow-sm items-center">
                      <h1 className="text-xl font-bold leading-tight tracking-tight">
                        Crear Cuenta
                      </h1>
                      {/* Mostrar mensaje de error si existe */}
                      {context.message && (
                        <div
                          className={`p-2 rounded mb-4 ${
                            context.isRegister
                              ? "bg-green-200 text-green-800"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {context.message}
                        </div>
                      )}
                      <form className="space-y-4 md:space-y-6" onSubmit={context.handleSubmit}>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-black">
                            Identificación
                          </label>
                          <input
                            type="number"
                            name="identificacion_usu"
                            placeholder="Ingrese su identificación*"
                            className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0"
                            required=""
                          />
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-black">
                            Nombre Completo
                          </label>
                          <input
                            type="text"
                            name="nombre_usu"
                            className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0"
                            placeholder="Nombre Completo*"
                            required=""
                          />
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-black">
                            Primer Apellido
                          </label>
                          <input
                            type="text"
                            name="apellido1_usu"
                            className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0"
                            placeholder="Primer Apellido*"
                            required=""
                          />
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-black">
                            Segundo Apellido
                          </label>
                          <input
                            type="text"
                            name="apellido2_usu"
                            className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0"
                            placeholder="Segundo Apellido"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-black">
                            Contraseña
                          </label>
                          <input
                            type="password"
                            name="contra_usu"
                            placeholder="Ingrese su contraseña*"
                            className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0"
                            required=""
                          />
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-black">
                            Rol
                          </label>
                          <select
                            name="rol_usu"
                            className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0"
                            required
                          >
                            <option value="" disabled selected>
                              Seleccione un rol*
                            </option>
                            <option value="1">Arquitecto</option>
                            <option value="2">Cliente</option>
                          </select>
                        </div>
                        <div className="flex justify-evenly">
                          <button
                            type="submit"
                            className="w-[50%] text-white bg-[#171824] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:shadow-2xl" 
                            id="submit_register"
                          >
                            Crear
                          </button>
                          <div>
                            <a href="/login" className="text-center px-5 py-2.5">
                              ¿Ya tienes cuenta?
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="conten-right w-[50%] bg-[#CED4DA] rounded-r-2xl shadow-[80px] hidden lg:block">
            <div className="w-full fondo-register h-[100vh] rounded-bl-[60px] rounded-r-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
