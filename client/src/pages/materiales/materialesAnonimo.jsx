import React from 'react';

function MaterialesAnonimo() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Materiales en Obras Civiles</h1>
        
        {/* Descripción General */}
        <p className="text-xl text-gray-700 mb-12 text-center">
          En las obras civiles, los materiales juegan un papel crucial en la construcción de estructuras seguras y duraderas.
          Aquí te presentamos los materiales más utilizados en este tipo de proyectos.
        </p>
        
        {/* Sección de Materiales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Material: Cemento */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Cement_truck_04.jpg" alt="Cemento" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cemento</h2>
            <p className="text-gray-600">
              El cemento es un aglutinante que, al mezclarse con agua, forma una masa que endurece y adquiere resistencia con el tiempo. 
              Es uno de los componentes más importantes en la construcción de estructuras.
            </p>
          </div>
          
          {/* Material: Acero */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Steel_beams_iron_bridge.jpg" alt="Acero" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acero</h2>
            <p className="text-gray-600">
              El acero se utiliza en refuerzos de concreto y estructuras metálicas. Su alta resistencia lo convierte en un material indispensable para soportar grandes cargas y dar estabilidad a las construcciones.
            </p>
          </div>

          {/* Material: Madera */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Hardwood_Lumber_Pile.jpg" alt="Madera" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Madera</h2>
            <p className="text-gray-600">
              La madera es un material natural que se usa principalmente en la construcción de techos y estructuras ligeras. 
              Es valorada por su resistencia y por ser un recurso renovable.
            </p>
          </div>

          {/* Material: Ladrillo */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Bricks_Stacked_on_Wood_Pallet.jpg" alt="Ladrillo" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ladrillo</h2>
            <p className="text-gray-600">
              Los ladrillos son uno de los materiales más antiguos en la construcción. Se utilizan en la construcción de muros y paredes. 
              Son conocidos por su durabilidad y resistencia a las condiciones climáticas.
            </p>
          </div>

          {/* Material: Concreto */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Concrete_column_base_reinforcement_cage.jpg" alt="Concreto" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Concreto</h2>
            <p className="text-gray-600">
              El concreto es una mezcla de cemento, agua, arena y grava. Se usa en la construcción de cimientos, columnas y otras estructuras que requieren alta resistencia.
            </p>
          </div>

          {/* Material: Vidrio */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Glass_panels.jpg" alt="Vidrio" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vidrio</h2>
            <p className="text-gray-600">
              El vidrio es un material utilizado principalmente en ventanas y fachadas. Su transparencia y resistencia lo hacen ideal para permitir la entrada de luz natural en las edificaciones.
            </p>
          </div>
          
        </div>
        
        {/* Pie de página */}
        <footer className="text-center mt-12">
          <p className="text-gray-500 text-lg">Conoce más sobre los materiales esenciales en la construcción civil para crear estructuras duraderas y seguras.</p>
        </footer>
      </div>
    </div>
  );
}

export default MaterialesAnonimo;
