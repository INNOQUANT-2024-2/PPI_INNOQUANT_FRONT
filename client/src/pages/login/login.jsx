import React, { useState } from "react";
import "../login/login.css";
import { GlobalContext } from "../../context/globalContext";

function Login() {
  const { handleSubmitLogin, isRegister, message } = React.useContext(GlobalContext);
/*   const [errorMessage, setErrorMessage] = useState(""); */ // Para el manejo de errores

/*   const handleSubmitLogin2 = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Limpiar cualquier mensaje de error previo

    const form = e.target;
    const formData = new FormData(form);

    const datos = {
      identificacion_usu: formData.get("identificacion_usu"),
      contra_usu: formData.get("contra_usu"),
    };

    console.log(datos, 23)
    

    try {
      const response = await handleSubmitLogin(datos); // Usamos la función del contexto
      console.log(response, 25)
      if (!response.ok) {
        setErrorMessage("Identificación o contraseña incorrecta"); // Mostrar mensaje de error si la respuesta no es exitosa
      }
    } catch (error) {
      setErrorMessage("Ocurrió un error al intentar iniciar sesión"); // Mostrar mensaje de error general
      console.log(error)
    }
  }; */

  return (
    <div className="ppal-login w-full">
      <div className="flex justify-center">
        <div className="conten-ppal-login flex justify-center h-[80vh] m-8 items-center w-[90%]">
          <div className="conten-letf w-[50%] bg-[#CED4DA] rounded-l-2xl hidden lg:block">
            <div className="w-full fondo-login h-[80vh] rounded-br-[60px] rounded-l-2xl"></div>
          </div>
          <div className="conten-right w-[50%] bg-[#070502] rounded-r-2xl shadow-[80px]">
            <div className="w-full bg-[#CED4DA] h-[80vh] rounded-tl-[60px] rounded-r-2xl">
              <section className="ppal-form-log flex justify-center h-[80vh] text-black">
                <div className="flex flex-col items-center justify-center w-[70%]">
                  <div className="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black h-[65vh]">
                    <div className="form-login p-6 space-y-4 md:space-y-6 sm:p-8 shadow-sm">
                      <h1 className="text-xl font-bold leading-tight tracking-tight pb-2">
                        Iniciar Sesión
                      </h1>

                      {/* {message && <p style={{ color: 'red' }}>{message}</p>} */} {/* Mostrar mensaje de error */}
                      {!isRegister && <p style={{color: 'red'}}>{message}</p>} {/* Mostrar mensaje de éxito si se ha registrado correctamente */}

                      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitLogin}>
                        <div>
                          <label htmlFor="identificacion_usu" className="block mb-1 text-sm font-medium text-black">
                            Identificación
                          </label>
                          <input
                            type="text"
                            name="identificacion_usu"
                            className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0"
                            placeholder="Ingrese su identificación*"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="block mb-1 text-sm font-medium text-black">
                            Contraseña
                          </label>
                          <input
                            type="password"
                            name="contra_usu"
                            placeholder="••••••••*"
                            className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0"
                            required
                          />
                        </div>
                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="w-[80%] text-white bg-[#171824] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:shadow-2xl"
                            
                          >
                            Ingresar
                          </button>
                        </div>
                        <p className="text-sm font-light text-gray-600 flex justify-center">
                          ¿Aún no tienes cuenta?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a href="/register" className="font-medium text-primary-600 hover:text-[#171824]">
                            Crea una cuenta
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
