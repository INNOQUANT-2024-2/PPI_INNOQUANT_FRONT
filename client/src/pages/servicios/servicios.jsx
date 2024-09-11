import React from "react";
import "./servicio.css";
import ProjectList from "../projectList";

function servicios() {
 /*  const handleSubmitServi = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const datos = {
      nombre_proyect: formData.get("nombre_proyec"),
      apellido1_usu: formData.get("requerimiento_proyect"),
      rol_usu: formData.get("rol_usu"),
    };

    const url = "http://localhost:3000/api/project";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (!response.ok) {
        throw new Error(
          "Hubo un problema al realizar la petición: " + response.status
        );
      }

      const data = await response.json();
      console.log("Respuesta recibida:", data);
    } catch (error) {
      console.error("Error al realizar la petición:", error);
    }
  }; */
  return (
    <div className=" ppal-servicios">
      <div className=" hero-servicio fondo-servicio h-[32vh] w-full text-white flex items-center">
        <div className=" xl:w-[40%] md:w-[55%] sm:w-[50%] ml-20 mr-6">
          <div>
            <h1 className=" pt-8 text-2xl xl:text-[1.5rem] md:text-2xl sm:text-2xl font-semibold ">
              SERVICIOS
            </h1>
            <p className=" text-xl p-5 pl-0"></p>
          </div>
        </div>
      </div>

      <section>
        <div className=" flex justify-center m-5">
          <div className=" contenedor-ppal flex justify-center h-[80vh] m-8 items-center w-[90%]">
            <div className=" contenedor-letf img-proyecto h-[80vh] w-[50%] shadow-[80px] rounded-l-2xl "></div>

            <div className=" contenedor-right w-[50%] bg-[#f0eeee] h-[80vh] rounded-r-2xl ">
              <div className=" bg-white m-8 rounded-2xl p-1">
                <section className=" formulario m-4 ">
                  <h3 className=" text-center font-bold text-[1.3rem] m-4">
                    PROYECTOS
                  </h3>
                  <form action="" className="" /* onSubmit={handleSubmitServi} */>
                    <div className=" input-name-proyect">
                      <label className="block mb-2 text-sm font-medium text-black">
                        Nombre Proyecto
                      </label>
                      <input
                        type="text"
                        placeholder="Introduce el nombre del proyecto"
                        className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 mb-6  "
                      />
                    </div>

                    <div className=" input-dueño-proyect">
                      <label className="block mb-2 text-sm font-medium text-black">
                        Propietario Proyecto
                      </label>
                      <input
                        type="number"
                        placeholder="Identificacion a quien pertenece el proyecto"
                        className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 mb-6  "
                      />
                    </div>

                    <div className=" input-reque-proyect">
                      <label className="block mb-2 text-sm font-medium text-black">
                        Requerimientos Proyecto
                      </label>
                      <textarea
                        type="text"
                        placeholder="Escribe aqui los requerimientos (descripcion) de tu proyecto"
                        className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-2 rounded-md h-[100px]  focus:outline-none pl-2 "
                      />
                    </div>

                    <div className=" flex justify-center m-5">
                      <button
                        type="submit"
                        class="w-[35%] text-white bg-[#171824] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#1a1c30]"
                      >
                        Crear 
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectList />
    </div>
  );
}

export default servicios;
