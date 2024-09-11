import React from "react";
import "../home/home.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import img_sobre_nostros from "../../assets/sobreNosotros.png";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";

function Home() {
  return (
    <div className=" ppal">
      <div className=" fondoHome h-[60vh] w-full flex justify-start items-center text-white">
        <div className=" xl:w-[40%] md:w-[55%] sm:w-[50%] ml-20 mr-6">
          <div>
            <h1 className=" pb-5 text-2xl xl:text-[1.5rem] md:text-2xl sm:text-2xl font-semibold ">
              SERVICIO DE COTIZACIÓN ARQUITECTÓNICA
            </h1>
            <p className=" text-lg p-5 pl-0">
            Somos un software dedicado a proyectar tus expectativas acerca de tu proyecto arquitectónico brindandóte cotizaciones precisas y acertadas de acuerdo a tus necesidades.
            </p>
            <form action="" className=" flex mt-6">
              <button className=" bg-[#4265ac] w-[60%] py-1 rounded-2xl text-start px-5 flex items-center justify-between hover:animate-slide-out-right">
                Contáctanos
                <IoIosArrowRoundForward className=" text-[1.8rem]" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* En pantallas md, se ponga la imagen encima del texto  */}

      {/* Sobre nosotros */}
      <section className=" sobre-nosotros">
        <div className=" m-12">
          <div className=" text-center">
            <h1 className="text-[2rem] font-bold sobre_nosotros">
              Sobre Nosotros
            </h1>
            <div className=" parrafos flex m-8 gap-8 justify-center flex-col lg:flex-row pt-2 lg:justify-center">
              <img
                src={img_sobre_nostros}
                className=" flex xl:w-[40%] lg:w-[45%] lg:h-[20%] md:w-[60%] sm:w-[60%] object-cover mb-4 md:mb-0 self-center"
              />
              <div className="Objetivos w-full md:w-[70%] lg:w-[50%] text-[1rem] self-center">
                <p className=" pb-5 xl:text-[1.1rem] lg:text-[1rem] md:text-[1.2rem] sm:text-[1.1rem]">
                  Llegamos para acompañarte en tu proceso de creación de tu espacio soñado, de la mano de arquitectos profesionales te brindaremos una cotización precisa y acertada, ayudandóte a aterrizar las ideas que tengas en mente.
                </p>
                <h1 className=" pb-2 font-bold text-[1.2rem]">Misión</h1>
                <p>
                Desarrollar un software para la gestión y administración de cotizaciones en obras civiles que permita a los clientes gestionar de manera efectiva y eficiente las cotizaciones de proyectos de obras civiles. El software debe ser capaz de manejar la totalidad del ciclo de vida de una cotización, desde la creación hasta la aprobación del proyecto.
                </p>
                <h1 className=" pt-5 font-bold text-[1.2rem] ">Visión</h1>
                <p className=" pt-2">
                Ser la herramienta líder en la gestión de cotizaciones en obras civiles, brindando a nuestros clientes una plataforma segura, fácil de usar y escalable que les permita gestionar de manera efectiva y eficiente sus cotizaciones y proyectos.
                </p>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cards */}

      <section className=" cards-ppal">
        <div className=" text-center font-bold bg-gray-400 h-auto w-full p-4">
          <h1 className=" p-4 text-[2rem]">PROYECTOS DESTACADOS</h1>
          <div className=" cards-all flex flex-wrap gap-5 m-5 justify-evenly">
            <div className=" card1 bg-[#363f8f] w-[30%] flex flex-col  items-center p-5 ">
              <img src={card1} className=" h-[30vh] "/>
              <div className=" info-card1">
                <h5>EJEMPLO 1</h5>
                <p className=" text-lg ">
                 
                </p>
                <a href="/nosotros">
                  <button className=" bg-slate-500 py-1 px-4 mt-3 rounded-md">+ Info</button>
                </a>
              </div>
            </div>
            <div className=" card2 bg-[#363f8f] w-[30%] flex flex-col items-center p-5">
              <img src={card2} className=" h-[30vh] "/>
              <div className=" info-card1">
                <h5>EJEMPLO 2</h5>
                <p className=" text-lg ">
                  
                </p>
                <a href="/nosotros">
                  <button className=" bg-slate-500 py-1 px-4 mt-3 rounded-md">+ Info</button>
                </a>
              </div>
            </div>
            <div className=" card3 bg-[#363f8f] w-[30%] flex flex-col items-center p-5">
              <img src={card3} className=" h-[30vh] "/>
              <div className=" info-card1">
                <h5>EJEMPLO 3</h5>
                <p className=" text-lg ">
                  
                </p>
                <a href="/nosotros">
                  <button className=" bg-slate-500 py-1 px-4 mt-3 rounded-md">+ Info</button>
                </a>
              </div>
            </div>
          </div>
          </div>
      </section>
    </div>
  );
}

export default Home;
