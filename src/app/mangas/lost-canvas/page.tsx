'use client'; 

import { useState, useEffect } from 'react';

export default function LostCanvas() {
  const allErasSections = [
    'Volume 1',
    'Volume 2',
    'Volume 3',
    'Volume 4',
    'Volume 5',
    'Volume 6',
    'Volume 7',
    'Volume 8',
    'Volume 9',
    'Volume 10',
    'Volume 11',
    'Volume 12',
    'Volume 13',
    'Volume 14',
    'Volume 15',
    'Volume 16',
    'Volume 17',
    'Volume 18',
    'Volume 19',
    'Volume 20',
    'Volume 21',
    'Volume 22',
    'Volume 23',
    'Volume 24',
    'Volume 25',
    
  ];

  const [selectedSection, setSelectedSection] = useState(allErasSections[0]); // Estado para a seção selecionada

  useEffect(() => {
    const container = document.getElementById('carousel-container');
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (container) {
        container.scrollLeft += event.deltaY * 6; // Controla a velocidade do scroll
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
  }, []);

  // Função para ir ao início do carrossel
  const scrollToStart = () => {
    const container = document.getElementById('carousel-container');
    if (container) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  // Função para ir ao final do carrossel
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
    <div className="min-h-screen p-4 md:p-8 text-white ">
      <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-500 text-center mb-8 md:mb-12 animate-fade-in-down">
        Os Cavaleiros do Zodíaco - Tankōbon
      </h1>

      {/* Botões de controle do carrossel */}
      <div className="relative flex items-center justify-between mb-8 px-4 md:px-16">
        {/* Botão para ir ao início */}
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
          {allErasSections.map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 hover:bg-yellow-500 hover:text-gray-900 ${
                selectedSection === section
                  ? 'bg-yellow-500 text-gray-900 scale-110'
                  : 'bg-gray-700 text-yellow-400'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Botão para ir ao fim */}
        <button
          onClick={scrollToEnd}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
          style={{ marginLeft: '1rem' }}
        >
          Fim
        </button>
      </div>

      {/* Exibição do conteúdo da seção selecionada */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4">{selectedSection}</h2>
        <div className="mt-2">
          {/* Placeholder para o conteúdo da seção */}
          {selectedSection === 'A ERA DA CRIAÇÃO DO UNIVERSO' && (
            <p>
              Aqui começa o relato da criação do universo, quando a Grande Vontade (Big Will) iniciou tudo.
            </p>
          )}
          {selectedSection === 'O BIG BANG' && (
            <p>
              O Big Bang é a explosão que originou o universo. A partir desse evento, toda a matéria e energia começaram a se expandir e formar as galáxias.
            </p>
          )}
          {/* Adicione conteúdo para outras seções aqui */}
        </div>
      </div>
    </div>
  );
}
