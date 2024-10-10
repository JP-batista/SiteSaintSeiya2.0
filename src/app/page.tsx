// src/app/page.tsx

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent p-8">
      {/* Hero Section */}
      <section className="text-center my-12">
        <h1 className="text-6xl font-extrabold text-yellow-500 mb-4 animate-fade-in-down">
          Bem-vindo ao Mundo de Saint Seiya
        </h1>
        <p className="text-gray-300 text-xl mb-8 animate-fade-in-up">
          Explore os Cavaleiros do Zodíaco, suas sagas épicas, batalhas e personagens lendários.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="/characters" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
            Ver Personagens
          </Link>
          <Link href="/about" className="bg-gray-700 text-yellow-500 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-600 transition-colors duration-300">
            Sobre o Projeto
          </Link>
        </div>
      </section>

      {/* Funcionalidades do site */}
      <section className="my-16">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Funcionalidades do Site</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Explorar Personagens</h3>
            <p className="text-gray-300 text-lg">
              Conheça os Cavaleiros de Bronze, de Ouro e os inimigos poderosos.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Histórias Épicas</h3>
            <p className="text-gray-300 text-lg">
              Descubra as batalhas épicas e os desafios enfrentados pelos Cavaleiros de Atena.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Linha do Tempo Interativa</h3>
            <p className="text-gray-300 text-lg">
              Navegue pelas sagas e veja como elas se conectam na história dos Cavaleiros do Zodíaco.
            </p>
            <Link href="#timeline" className="mt-4 block text-yellow-400 hover:text-yellow-500 transition-colors duration-300">
              Acessar Linha do Tempo
            </Link>
          </div>
        </div>
      </section>

      {/* Linha do Tempo Interativa */}
      <section id="timeline" className="my-16">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Linha do Tempo das Sagas</h2>
        <div className="relative">
          <div className="border-l-4 border-yellow-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {/* Evento 1: Saga do Santuário */}
          <div className="mb-8 w-full">
            <div className="flex justify-between items-center">
              <div className="w-5/12">
                <img
                  src="https://i.pinimg.com/originals/e6/e2/8c/e6e28c37884537f8782067056396f347.jpg"
                  alt="Saga do Santuário"
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-5/12 px-4">
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-60 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">Saga do Santuário</h3>
                  <p className="text-gray-300 mb-4">
                    A primeira grande batalha dos Cavaleiros de Bronze, onde enfrentam os Cavaleiros de Ouro nas 12 Casas do Zodíaco para salvar Atena e derrotar o Grande Mestre, que controla o Santuário.
                  </p>
                  <Link href="/stories/santuary-saga" className="mt-4 block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-600 transition-colors duration-300">
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Evento 2: Saga de Asgard */}
          <div className="mb-8 w-full flex-row-reverse flex justify-between items-center">
            <div className="w-5/12">
              <img
                src="https://i.pinimg.com/originals/3c/30/c2/3c30c2ec2fa3d872b147d591c5ae2bbc.jpg"
                alt="Saga de Asgard"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-5/12 px-4">
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-60 transition-all duration-300">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Saga de Asgard</h3>
                <p className="text-gray-300 mb-4">
                  Os Cavaleiros de Atena viajam ao Reino de Asgard para enfrentar os Guerreiros Deuses e salvar Hilda de Polaris, corrompida pelo Anel de Nibelungo.
                </p>
                <Link href="/stories/asgard-saga" className="mt-4 block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-600 transition-colors duration-300">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>

          {/* Evento 3: Saga de Poseidon */}
          <div className="mb-8 w-full flex justify-between items-center">
            <div className="w-5/12">
              <img
                src="https://i.pinimg.com/736x/98/03/03/980303d163a09f75fb3c0e5d1dfe263b.jpg"
                alt="Saga de Poseidon"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-5/12 px-4">
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-60 transition-all duration-300">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Saga de Poseidon</h3>
                <p className="text-gray-300 mb-4">
                  Os Cavaleiros enfrentam o deus Poseidon e seus Generais Marinas para salvar o mundo da inundação global planejada por ele.
                </p>
                <Link href="/stories/poseidon-saga" className="mt-4 block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-600 transition-colors duration-300">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>

          {/* Evento 4: Saga de Hades */}
          <div className="mb-8 w-full flex-row-reverse flex justify-between items-center">
            <div className="w-5/12">
              <img
                src="https://i.pinimg.com/564x/3f/57/a8/3f57a8a04dc4fe35b31921d99b0b0c69.jpg"
                alt="Saga de Hades"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-5/12 px-4">
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-60 transition-all duration-300">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Saga de Hades</h3>
                <p className="text-gray-300 mb-4">
                  A saga final onde os Cavaleiros de Atena enfrentam Hades e seus Espectros para salvar o mundo do Grande Eclipse.
                </p>
                <Link href="/stories/hades-saga" className="mt-4 block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-600 transition-colors duration-300">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Destaque de Personagens */}
      <section className="my-16">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Personagens em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Seiya */}
          <Link href="/characters/bronze/seiya">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://i.pinimg.com/originals/f4/78/66/f47866e3aa44f46a7857548f22526aa7.png"
                alt="Seiya de Pégaso"
                className="w-60 h-88 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl text-yellow-300 font-bold mb-2">Seiya de Pégaso</h3>
              <p className="text-gray-300 text-lg">O Cavaleiro de Bronze que luta pela justiça e por Atena.</p>
            </div>
          </Link>

          {/* Card 2 - Shiryu */}
          <Link href="/characters/bronze/shiryu">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://i.pinimg.com/originals/be/e9/8b/bee98b455b2807ce86f50051d52767c3.png"
                alt="Shiryu de Dragão"
                className="w-60 h-88 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl text-yellow-300 font-bold mb-2">Shiryu de Dragão</h3>
              <p className="text-gray-300 text-lg">O nobre e corajoso Cavaleiro de Dragão, protetor do Santuário.</p>
            </div>
          </Link>

          {/* Card 3 - Hyoga */}
          <Link href="/characters/bronze/hyoga">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://i.pinimg.com/originals/6c/52/e9/6c52e90d72b7d9aea6ca9cf6a95fd8f9.png"
                alt="Hyoga de Cisne"
                className="w-60 h-88 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl text-yellow-300 font-bold mb-2">Hyoga de Cisne</h3>
              <p className="text-gray-300 text-lg">O Cavaleiro de Cisne, cuja frieza esconde um grande coração.</p>
            </div>
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center my-12">
        <a href="/characters" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
          Explore Todos os Personagens
        </a>
      </footer>
    </div>
  );
}
