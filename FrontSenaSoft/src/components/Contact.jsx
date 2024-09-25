// src/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Contacto</h1>
      <form className="mt-4 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">Nombre:</label>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensaje:</label>
          <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
