'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; 
import kanzenbanVolumes from '../../data/kanzenbanVolumes';

export default function Kanzenban() {
  const [currentSaga, setCurrentSaga] = useState(kanzenbanVolumes[0]); 
  const [selectedSection, setSelectedSection] = useState(currentSaga.volumes[0].titulo);

  const selectedVolume = currentSaga.volumes.find(
    volume => volume.titulo === selectedSection
  );

  useEffect(() => {
    const container = document.getElementById('carousel-container');
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (container) {
        container.scrollLeft += event.deltaY * 6;
      }
    };

    if (container) {
      container.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSaga]);

  const scrollToStart = () => {
    const container = document.getElementById('carousel-container');
    if (container) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const scrollToEnd = () => {
    const container = document.getElementById('carousel-container');
    if (container) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-500 text-center mb-8 md:mb-12 animate-fade-in-down">
        Volumes Mangá - Saint Seiya Clássico
      </h1>

      {/* Botões para alternar entre sagas */}
      <div className="flex justify-center space-x-4 mb-8">
        {kanzenbanVolumes.map((saga) => (
          <button
            key={saga.saga}
            onClick={() => {
              setCurrentSaga(saga);
              setSelectedSection(saga.volumes[0].titulo);
            }}
            className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
              currentSaga.saga === saga.saga ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
            }`}
          >
            {saga.titulo}
          </button>
        ))}
      </div>

      {/* Botões de controle do carrossel */}
      <div className="relative flex items-center justify-between mb-8 px-4 md:px-16">
        <button
          onClick={scrollToStart}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
          style={{ marginRight: '1rem' }}
        >
          Início
        </button>

        {/* Container do carrossel */}
        <div
          id="carousel-container"
          className="flex space-x-4 sm:space-x-6 overflow-x-auto no-scrollbar items-center py-4 mx-4 sm:mx-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          {currentSaga.volumes.map((volume) => (
            <button
              key={volume.volume}
              onClick={() => setSelectedSection(volume.titulo)}
              className={`whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 hover:bg-yellow-500 hover:text-gray-900 ${
                selectedSection === volume.titulo
                  ? 'bg-yellow-500 text-gray-900 scale-110'
                  : 'bg-gray-700 text-yellow-400'
              }`}
            >
              {volume.titulo}
            </button>
          ))}
        </div>

        <button
          onClick={scrollToEnd}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
          style={{ marginLeft: '1rem' }}
        >
          Fim
        </button>
      </div>

      {/* Exibição do volume selecionado */}
      {selectedVolume && (
        <div>
          <img 
            src={selectedVolume.capa} 
            alt={`Capa do ${selectedSection}`} 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-4">{selectedVolume.titulo}</h2>
            
            {selectedVolume.capitulos.map((capitulo, index) => (
              <div key={capitulo.capitulo} className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400">{capitulo.titulo}</h3>
                <h4 className="text-md text-gray-400 italic">{capitulo.subtitulo}</h4>
                <p className="text-sm text-gray-300 mb-4">{capitulo.legenda}</p>
                {capitulo.imagem && (
                  <img 
                    src={capitulo.imagem} 
                    alt={`Capítulo ${capitulo.capitulo}`} 
                    className={`w-100 h-auto rounded-lg shadow-lg my-4 mx-4 ${
                      index % 2 === 0 ? 'float-left' : 'float-right'
                    }`}
                  />
                )}
                <p className="text-white">{capitulo.texto}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="text-center mt-8">
        <Link href="/mangas" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
          Voltar para Mangás
        </Link>
      </div>
    </div>
  );
}
