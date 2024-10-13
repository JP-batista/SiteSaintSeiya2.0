'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Importando o componente Link para navegação

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
      {/* Exibição condicional das imagens de cada volume do Santuário */}
      {selectedSection === 'Volume 1' && (
        <img 
          src="https://i.pinimg.com/originals/0a/58/18/0a58187f91b549165c6f28b4506cea76.jpg" 
          alt="Volume 1" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 2' && (
        <img 
          src="https://i.pinimg.com/originals/2e/3d/3d/2e3d3db4715cdd5f08e3e0feefb229db.jpg" 
          alt="Volume 2" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 3' && (
        <img 
          src="https://i.pinimg.com/originals/88/e3/b7/88e3b7a6ecb9ae1f99a93567121befa1.jpg" 
          alt="Volume 3" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 4' && (
        <img 
          src="https://i.pinimg.com/originals/ba/1e/d7/ba1ed72f068a861491658bdc81c92963.jpg" 
          alt="Volume 4" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 5' && (
        <img 
          src="https://i.pinimg.com/originals/fe/61/43/fe61437ac8221ef477b5101e984809e1.jpg" 
          alt="Volume 5" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 6' && (
        <img 
          src="https://i.pinimg.com/originals/ae/14/48/ae1448e343ce9363d603252283a1cfeb.jpg" 
          alt="Volume 6" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 7' && (
        <img 
          src="https://i.pinimg.com/originals/38/6f/71/386f712eb28a6e343ffae164f1303133.jpg" 
          alt="Volume 7" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 8' && (
        <img 
          src="https://i.pinimg.com/originals/af/d1/f1/afd1f1f8b8ef6af66c6496eb26129ada.jpg" 
          alt="Volume 8" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 9' && (
        <img 
          src="https://i.pinimg.com/originals/ab/47/bf/ab47bfbf87cad48a5ee5550d5837dd82.jpg" 
          alt="Volume 9" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 10' && (
        <img 
          src="https://i.pinimg.com/originals/48/2b/af/482bafa0bbfeae20ae1acd8846be35f3.jpg" 
          alt="Volume 10" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 11' && (
        <img 
          src="https://i.pinimg.com/originals/64/96/3b/64963b0868b675083811ce1f083daf2c.jpg" 
          alt="Volume 11" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 12' && (
        <img 
          src="https://i.pinimg.com/originals/34/60/cd/3460cd0a5d995dcc8bd328a324db481d.jpg" 
          alt="Volume 12" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 13' && (
        <img 
          src="https://i.pinimg.com/originals/a2/a6/90/a2a6909cfb1bb6044378961f6927ae51.jpg" 
          alt="Volume 13" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 14' && (
        <img 
          src="https://i.pinimg.com/originals/0f/15/64/0f1564424ec758c11218ab5570f95657.jpg" 
          alt="Volume 14" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 15' && (
        <img 
          src="https://i.pinimg.com/originals/ce/1d/87/ce1d875d9d198dfcf2adf532132f1aac.jpg" 
          alt="Volume 15" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 16' && (
        <img 
          src="https://i.pinimg.com/originals/7d/fe/d6/7dfed6a3e974d533ce44ea696dc95343.jpg" 
          alt="Volume 16" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 17' && (
        <img 
          src="https://i.pinimg.com/originals/0b/de/6c/0bde6c58b6805b0009b9fa41bd1f2fc1.jpg" 
          alt="Volume 17" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 18' && (
        <img 
          src="https://i.pinimg.com/originals/c6/c1/5b/c6c15bc5ead861f30d63ff58f255a921.jpg" 
          alt="Volume 18" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 19' && (
        <img 
          src="https://i.pinimg.com/originals/0e/b8/ad/0eb8addd61d909103b2f6c6aa624cd99.jpg" 
          alt="Volume 19" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 20' && (
        <img 
          src="https://i.pinimg.com/originals/09/be/84/09be8440f0a4326b5c712e04b6980323.jpg" 
          alt="Volume 20" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 21' && (
        <img 
          src="https://i.pinimg.com/originals/ac/4c/92/ac4c923ab49df57c3312efe797b18f8b.jpg" 
          alt="Volume 21" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 22' && (
        <img 
          src="https://i.pinimg.com/originals/54/9d/78/549d7816efd691fa679dd79a0ecda49d.jpg" 
          alt="Volume 22" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 23' && (
        <img 
          src="https://i.pinimg.com/originals/57/92/e2/5792e2e8aab15b5ebd2c5015dd00306b.jpg" 
          alt="Volume 23" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 24' && (
        <img 
          src="https://i.pinimg.com/originals/73/fd/b6/73fdb69c25449d28b354d5a20c159451.jpg" 
          alt="Volume 24" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}
      {selectedSection === 'Volume 25' && (
        <img 
          src="https://i.pinimg.com/originals/88/40/5c/88405c1c794c3c8ba4dda730938e9a5d.jpg" 
          alt="Volume 25" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
      )}

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
      <div className="text-center mt-8">
        <Link href="/mangas" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
          Voltar para Mangás
        </Link>
      </div>
    </div>
  );
}
