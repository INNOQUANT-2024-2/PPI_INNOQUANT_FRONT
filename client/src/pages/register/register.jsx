import React from "react";
import "../register/register.css";
import { GlobalContext } from "../../context/globalContext";

function register() {
  const context = React.useContext(GlobalContext);
  
  

  return (
    <div className=" ppal-register w-full">
    <div className=" "></div>
    <div className=" flex justify-center">
      <div className=" conten-ppal-login flex justify-center h-auto m-4 items-center w-[90%] ">
        <div className=" conten-letf w-[50%] bg-[#394948] rounded-l-2xl   ">
          <div className=" w-full bg-[#CED4DA] h-auto rounded-tr-[60px] rounded-l-2xl">
            <section class=" ppal-form-register flex justify-center h-auto text-black">
              <div class="flex flex-col items-center justify-center w-[70%] ">
                <div class="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black h-auto  ">
                  <div class=" form-login  md:space-y-6 sm:p-7 shadow-sm items-center ">
                    <h1 class="text-xl font-bold leading-tight tracking-tight ">
                      Crear Cuenta
                    </h1>
                    <form
                      class="space-y-4 md:space-y-6"
                      onSubmit={context.handleSubmit} 
                    >
                      <div>
                        <label
                          for="password"
                          class="block mb-1 text-sm font-medium text-black"
                        >
                         Identificación
                        </label>
                        <input
                          type="number"
                          name="identificacion_usu"
                          placeholder="Ingrese su identificación*"
                          class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for=""
                          class="block mb-1 text-sm font-medium text-black"
                        >
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          name="nombre_usu"
                          id="name"
                          class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                          placeholder="Nombre Completo*"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for=""
                          class="block mb-1 text-sm font-medium text-black"
                        >
                          Primer Apeliido
                        </label>
                        <input
                          type="text"
                          name="apellido1_usu"
                          id="primer_apellido"
                          class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                          placeholder="Primer Apellido*"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block mb-1 text-sm font-medium text-black"
                        >
                          Segundo Apellido
                        </label>
                        <input
                          type="text"
                          name="apellido2_usu"
                          id="segundo_apellido"
                          class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                          placeholder="Segundo Apellido"
                          
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          class="block mb-1 text-sm font-medium text-black"
                        >
                          Contraseña
                        </label>
                        <input
                          type="password"
                          name="contra_usu"
                          id="password"
                          placeholder="Ingrese su contraseña*"
                          class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="role"
                          className="block mb-1 text-sm font-medium text-black"
                        >
                          Rol
                        </label>
                        <select
                          name="rol_usu"
                          id="rol"
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
                      {/* <div>
                        <label for="" className="block mb-1 text-sm font-medium text-black">Rol</label>
                        <input type="text" 
                          name="email"
                          id="email"
                          class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                          placeholder="correo@gmail.com"
                          required="" />
                        
                      </div>
*/}
                      <div className=" flex justify-evenly">
                        <button
                          type="submit"
                          class="w-[50%] text-white bg-[#171824] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:shadow-2xl"
                          href="/nosotros"
                        >
                          Crear
                        </button>
                        <div className=" ">
                          <a href="/login" className=" text-center px-5 py-2.5">¿Ya tienes cuenta?</a>
                        </div>
                      </div>
                      {/* <p class="text-sm font-light text-gray-600  flex justify-center">
                        <a href="/login">¿Ya tienes cuenta?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a
                          href="/login"
                          class="font-medium text-primary-600  dark:text-primary-500 hover:text-[#171824]"
                        >
                          Iniciar Sesión
                        </a>
                      </p> */}
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className=" conten-right w-[50%] bg-[#CED4DA] rounded-r-2xl shadow-[80px] hidden lg:block">
          <div className=" w-full fondo-register h-[100vh] rounded-bl-[60px] rounded-r-2xl"></div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default register;
