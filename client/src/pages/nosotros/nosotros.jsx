import React from 'react';
import './nosotros.css';
import MaterialsList from '../materialsList';

function Nosotros() {
  const handleSubmitMat = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const datos = {
      codigo_mat: formData.get("codigo_mat"),
      nombre_mat: formData.get("nombre_mat"),
      cantidad_mat: formData.get("cantidad_mat"),
      precio_mat: formData.get("precio_mat")
    };

    const url = "http://localhost:3000/api/materials";

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
  };

  return (
    <div className='ppal-nosotros'>
      <div className='hero-nosotros fondo-nosotros h-[32vh] w-full text-white flex items-center'>
        <div className="xl:w-[40%] md:w-[55%] sm:w-[50%] ml-20 mr-6">
          <div>
            <h1 className="pb-5 text-2xl xl:text-[1.5rem] md:text-2xl sm:text-2xl font-semibold">
              MATERIALES
            </h1>
          </div>
        </div>
      </div>

      <section>
        <div className="flex justify-center m-5">
          <div className="contenedor-ppal flex justify-center h-[80vh] m-8 items-center w-[90%]">
            <div className="contenedor-left img-mats h-[80vh] w-[50%] shadow-[80px] rounded-l-2xl"></div>

            <div className="contenedor-right w-[50%] bg-[#f0eeee] h-[80vh] rounded-r-2xl">
              <div className="bg-white m-8 rounded-2xl p-1">
                <section className="formulario m-4">
                  <h3 className="text-center font-bold text-[1.3rem] m-4">
                    MATERIALES
                  </h3>
                  <form onSubmit={handleSubmitMat}>
                    <div className="input-name-proyect">
                      <label className="block mb-2 text-sm font-medium text-black">
                        Código Material*
                      </label>
                      <input
                        type="number"
                        name="codigo_mat"
                        placeholder="Introduce el codigo del material"
                        className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0 mb-6" required
                      />
                    </div>

                    <div className="input-dueño-proyect">
                      <label className="block mb-2 text-sm font-medium text-black">
                        Nombre Material*
                      </label>
                      <input
                        type="text"
                        name="nombre_mat"
                        placeholder="Nombre del material"
                        className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0 mb-6" required
                      />
                    </div>
                    <div className="input-dueño-proyect">
                      <label className="block mb-2 text-sm font-medium text-black">
                        Cantidad Material*
                      </label>
                      <input
                        type="text"
                        name="cantidad_mat"
                        placeholder="Nombre del material"
                        className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0 mb-6" required
                      />
                    </div>

                    <div className="input-reque-proyect">
                      <label className="block mb-2 text-sm font-medium text-black">
                        Precio Material*
                      </label>
                      <input
                        type="number"
                        name="precio_mat"
                        placeholder="Precio del material en COP"
                        className="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2 focus:outline-none pl-0 mb-6" required
                      />
                    </div>

                    <div className="flex justify-center m-5">
                      <button
                        type="submit"
                        className="w-[35%] text-white bg-[#171824] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#1a1c30] mt-5"
                      >
                        Agregar
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MaterialsList />
    </div>
  );
}

export default Nosotros;
