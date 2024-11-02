// src/app/page.tsx
import Head from 'next/head';
import Link from 'next/link'; // Importando o componente Link para navegação

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent p-4 md:p-8">
      <Head>
        <title>Saint Seiya</title>
        <meta name="description" content="Descrição da página" />
      </Head>
      {/* Hero Section */}
      <section className="text-center my-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500 mb-4 animate-fade-in-down">
          Bem-vindo ao Mundo de Saint Seiya
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 animate-fade-in-up">
          Explore os Cavaleiros do Zodíaco, suas sagas épicas, batalhas e personagens lendários.
        </p>
        <div className="flex justify-center space-x-4 md:space-x-6">
          {/* Ver Personagens */}
          <Link href="/characters/todos">
            <div className="text-yellow-400 bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
              <img
                src="/logos/helmet-pegasus.svg"
                alt="Personagens"
                className="mx-auto w-20 h-auto mb-4"
              />
              <h2 className="text-2xl font-bold">Ver Personagens</h2>
              <p className="text-gray-300">
                Explore os cavaleiros do zodíaco, suas sagas e poderes.
              </p>
            </div>
          </Link>

          {/* Quiz Saint Seiya */}
          <Link href="/quiz">
            <div className="text-yellow-400 bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
              <img
                src="/logos/helmet-draco.svg"
                alt="Quiz Saint Seiya"
                className="mx-auto w-32 h-auto mb-4"
              />
              <h2 className="text-2xl font-bold">Quiz Saint Seiya</h2>
              <p className="text-gray-300 mt-2">
                Teste seus conhecimentos sobre o universo dos Cavaleiros.
              </p>
            </div>
          </Link>

          {/* Jogo DLE Saint Seiya */}
          <Link href="/game">
            <div className="text-yellow-400 bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
              <img
                src="/logos/helmet-cygnus.svg"
                alt="DLE Saint Seiya"
                className="mx-auto w-24 h-auto mb-4"
              />
              <h2 className="text-2xl font-bold">Jogo DLE Saint Seiya</h2>
              <p className="text-gray-300 mt-2">
                Adivinhe os cavaleiros com base em dicas e características.
              </p>
            </div>
          </Link>

          {/* Sobre o Projeto */}
          <Link href="/about">
            <div className="text-yellow-400 bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
              <img
                src="/logos/helmet-andromeda.svg"
                alt="Sobre o Projeto"
                className="mx-auto w-20 h-auto mb-4"
              />
              <h2 className="text-2xl font-bold">Sobre o Projeto</h2>
              <p className="text-gray-300 mt-2">
                Saiba mais sobre a criação e o desenvolvimento deste site.
              </p>
            </div>
          </Link>
        </div>
      </section>
      
      {/* Funcionalidades do site */}
      <section className="my-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 text-center mb-10">Funcionalidades do Site</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Card 1 - Explorar Personagens */}
          <Link href="/characters" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Explorar Personagens</h3>
            <p className="text-gray-300 text-md md:text-lg">
              Conheça os Cavaleiros de Bronze, de Ouro e os inimigos poderosos.
            </p>
          </Link>

          {/* Card 2 - Histórias Épicas */}
          <Link href="/stories" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Histórias Épicas</h3>
            <p className="text-gray-300 text-md md:text-lg">
              Descubra as batalhas mais épicas da série e o impacto dos Cavaleiros do Zodíaco.
            </p>
          </Link>

          {/* Card 3 - Linha do Tempo Interativa */}
          <Link href="/timeline" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Linha do Tempo Interativa</h3>
            <p className="text-gray-300 text-md md:text-lg">
              Navegue pelas sagas e veja como elas se conectam na história dos Cavaleiros do Zodíaco.
            </p>
          </Link>
        </div>
      </section>

      {/* Linha do Tempo Interativa */}
      <section id="timeline" className="my-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 text-center mb-10">Linha do Tempo das Sagas</h2>
        <div className="relative">
          <div className="border-l-4 border-yellow-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Evento 1: Saga do Santuário */}
          <div className="mb-8 w-full flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-5/12 mb-4 md:mb-0">
              <img
                src="https://i.pinimg.com/originals/e6/e2/8c/e6e28c37884537f8782067056396f347.jpg"
                alt="Saga do Santuário"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-5/12 px-4">
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-60 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Saga do Santuário</h3>
                <p className="text-gray-300 text-md md:text-lg mb-4">
                  A primeira grande batalha dos Cavaleiros de Bronze, onde enfrentam os Cavaleiros de Ouro nas 12 Casas do Zodíaco para salvar Atena.
                </p>
                <Link href="/stories/santuary-saga" className="mt-4 block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-600 transition-colors duration-300">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>

          {/* Evento 2: Saga de Asgard */}
          <div className="mb-8 w-full flex flex-col md:flex-row-reverse justify-between items-center">
            <div className="w-full md:w-5/12 mb-4 md:mb-0">
              <img
                src="https://i.pinimg.com/originals/3c/30/c2/3c30c2ec2fa3d872b147d591c5ae2bbc.jpg"
                alt="Saga de Asgard"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-5/12 px-4">
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-60 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Saga de Asgard</h3>
                <p className="text-gray-300 text-md md:text-lg mb-4">
                  Os Cavaleiros de Atena viajam ao Reino de Asgard para enfrentar os Guerreiros Deuses e salvar Hilda de Polaris.
                </p>
                <Link href="/stories/asgard-saga" className="mt-4 block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-600 transition-colors duration-300">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>

          {/* Evento 3: Saga de Poseidon */}
          <div className="mb-8 w-full flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-5/12 mb-4 md:mb-0">
              <img
                src="https://i.pinimg.com/736x/98/03/03/980303d163a09f75fb3c0e5d1dfe263b.jpg"
                alt="Saga de Poseidon"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-5/12 px-4">
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-60 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Saga de Poseidon</h3>
                <p className="text-gray-300 text-md md:text-lg mb-4">
                  Os Cavaleiros enfrentam Poseidon e seus Generais Marinas para salvar o mundo da inundação planejada por ele.
                </p>
                <Link href="/stories/poseidon-saga" className="mt-4 block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-600 transition-colors duration-300">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>

          {/* Evento 4: Saga de Hades */}
          <div className="mb-8 w-full flex flex-col md:flex-row-reverse justify-between items-center">
            <div className="w-full md:w-5/12 mb-4 md:mb-0">
              <img
                src="https://i.pinimg.com/564x/3f/57/a8/3f57a8a04dc4fe35b31921d99b0b0c69.jpg"
                alt="Saga de Hades"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-5/12 px-4">
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-60 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Saga de Hades</h3>
                <p className="text-gray-300 text-md md:text-lg mb-4">
                  Os Cavaleiros enfrentam Hades e seus Espectros para salvar o mundo do Grande Eclipse.
                </p>
                <Link href="/stories/hades-saga" className="mt-4 block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-600 transition-colors duration-300">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        <div className="text-center mt-8">
          <Link href="/timeline" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
            Ver Linha do Tempo Completa
          </Link>
        </div>

      {/* Mangás Section */}
      <section className="my-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 text-center mb-10">Principais Mangás de Saint Seiya</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img 
              src="https://i.pinimg.com/originals/13/14/2d/13142d68102e818c64411f8c00c75a10.jpg" 
              alt="Saint Seiya Clássico" 
              className="w-60 h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Saint Seiya: Clássico</h3>
            <p className="text-gray-300 mb-4">
              O mangá clássico que iniciou toda a saga, criado por Masami Kurumada em 1986.
            </p>
            <Link href="/mangas/classico" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Ver Mais
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img 
              src="https://i.pinimg.com/originals/0a/58/18/0a58187f91b549165c6f28b4506cea76.jpg" 
              alt="Saint Seiya The Lost Canvas" 
              className="w-60 h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Saint Seiya: The Lost Canvas</h3>
            <p className="text-gray-300 mb-4">
              A saga que retrata a Guerra Santa anterior ao arco do Santuário.
            </p>
            <Link href="/mangas/lost-canvas" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Ver Mais
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img 
              src="https://m.media-amazon.com/images/I/71C6FJFg1QL._AC_UF1000,1000_QL80_.jpg" 
              alt="Saint Seiya Next Dimension" 
              className="w-60 h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Saint Seiya: Next Dimension</h3>
            <p className="text-gray-300 mb-4">
              A sequência oficial do mangá clássico, escrita e ilustrada por Masami Kurumada.
            </p>
            <Link href="/mangas/next-dimension" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Ver Mais
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/mangas" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
            Ver Todos os Mangás
          </Link>
        </div>
      </section>

      {/* Trilha Sonora Section */}
      <section className="my-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 text-center mb-10">Trilhas Sonoras</h2>
        <div className="flex justify-center items-center ">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <p className="text-gray-300 text-md md:text-lg">
                Ouça as músicas épicas de Saint Seiya enquanto explora o site.
              </p>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-6 p-4">
        <Link href="/soundtrack" key="Classico" className="bg-yellow-500 rounded-lg p-2 font-bold text-center transform hover:scale-105 transition duration-300 shadow-md">
          <div className="flex justify-center items-center">
            <img 
              src={`/images/classico.png`} 
              alt="Classico" 
              className="w-auto h-24 object-cover rounded-md mb-1"
            />
          </div>
          Classico
        </Link>
        <Link href="/soundtrack" key="lost Canvas" className="bg-yellow-500 rounded-lg p-2 font-bold text-center transform hover:scale-105 transition duration-300 shadow-md">
          <div className="flex justify-center items-center">
            <img 
              src={`/images/lost-canvas.png`} 
              alt="Lost Canvas" 
              className="w-auto h-24 object-cover rounded-md mb-1"
            />
          </div>
          Lost Canvas
        </Link>
        <Link href="/soundtrack" key="Omega" className="bg-yellow-500 rounded-lg p-2 font-bold text-center transform hover:scale-105 transition duration-300 shadow-md">
          <div className="flex justify-center items-center">
            <img 
              src={`/images/omega.png`} 
              alt="Omega" 
              className="w-auto h-24 object-cover rounded-md mb-1"
            />
          </div>
          Omega
        </Link>
        <Link href="/soundtrack" key="Soul of Gold" className="bg-yellow-500 rounded-lg p-2 font-bold text-center transform hover:scale-105 transition duration-300 shadow-md">
          <div className="flex justify-center items-center">
            <img 
              src={`/images/soul-of gold.png`} 
              alt="Soul of Gold" 
              className="w-auto h-24 object-cover rounded-md mb-1"
            />
          </div>
          Soul of Gold
        </Link>

        </div>
      </section>
      {/* Seção Principal */}
      <section className="text-center my-12">
        <h1 className="text-6xl font-extrabold text-yellow-500 mb-4">Bem-vindo ao Mundo de Saint Seiya</h1>
        <p className="text-gray-300 text-xl mb-8">Explore batalhas épicas, sagas lendárias e muito mais.</p>
        
        <div className="flex justify-center space-x-6">
          <Link href="/videos/battle-videos" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
            Ver Vídeos de Batalhas
          </Link>
        </div>
      </section>
    </div>
  );
}