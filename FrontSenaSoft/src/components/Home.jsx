// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <div className="bg-green-500 p-10">
        <div className="bg-white w-full md:w-1/2 p-2 rounded-lg flex justify-between items-center shadow-lg">
          <div className="flex items-center">
            <img  alt="Logo" className="h-8 mr-4" />
            <span className="text-black font-bold">XXXXX</span>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-black hover:text-gray-300 rounded-lg p-2">Inicio</Link>
            <Link to="/challenges" className="text-black hover:text-gray-300 rounded-lg p-2">Retos</Link>
            <Link to="/forum" className="text-black hover:text-gray-300 rounded-lg p-2">Foro</Link>
          </div>
          <button className="bg-white text-green-500 font-bold py-2 px-4 rounded-lg hover:bg-green-100">
            Iniciar Sesión
          </button>
        </div>

      </div>

      <div className="bg-green-500 relative h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto px-20">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">Nuestra Empresa</h1>
          <p className="text-4xl md:text-3xl px-20 text-white mb-8">
            Divierte haciendo retos mientras <br /> ayudas a 
            fundaciones para la <br /> conservación de nuestro <br /> medio ambiente
          </p>

          <div className="flex justify-center">
            <div className="w-1/2 relative">
              <img alt="Hoja sana" className="rounded-full h-64 w-64 object-cover" />
            </div>
          </div>
        </div>
      </div>

      edrftgyhujikolp
    </div>
  );
};

export default Home;
