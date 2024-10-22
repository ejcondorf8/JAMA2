import React, { useState } from 'react';
import { Book, DollarSign, Star, FileText } from 'lucide-react';
import PowerBIEmbed from './PowerBIEmbed';

const Header: React.FC = () => {
  const [showPowerBI, setShowPowerBI] = useState(false);

  return (
    <>
      <header className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mi Aplicación</h1>
          <nav>
            <ul className="flex space-x-4">
              <li className="flex items-center cursor-pointer">
                <Book size={20} className="mr-1" />
                <span>Manuales</span>
              </li>
              <li 
                className="flex items-center cursor-pointer"
                onClick={() => setShowPowerBI(true)}
              >
                <DollarSign size={20} className="mr-1" />
                <span>Ventas</span>
              </li>
              <li className="flex items-center cursor-pointer">
                <Star size={20} className="mr-1" />
                <span>Puntuación</span>
              </li>
              <li className="flex items-center cursor-pointer">
                <FileText size={20} className="mr-1" />
                <span>Ver Manuales</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {showPowerBI && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-11/12 h-5/6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Informe de Ventas</h2>
              <button 
                onClick={() => setShowPowerBI(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Cerrar
              </button>
            </div>
            <PowerBIEmbed />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;