import React from 'react';
import UserList from '../UserList';
import "../contact/contacto.css";

function Contacto() {
  return (
    <div className='ppal-contacto '>
      <div className=' hero-contacto fondo-contacto h-[32vh] w-full text-white flex items-center'>
        <div className=" xl:w-[40%] md:w-[55%] sm:w-[50%] ml-20 mr-6">
          <div>
            <h1 className=" pb-5 text-2xl xl:text-[1.5rem] md:text-2xl sm:text-2xl font-semibold ">
              
            </h1>
          </div>
        </div>
      </div>
      <UserList />
    </div>
  )
}

export default Contacto;
