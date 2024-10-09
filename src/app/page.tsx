// src/app/page.tsx

export default function HomePage() {
  return (
    <div className="min-h-screen  p-8">
      {/* Hero Section */}
      <section className="text-center my-12">
        <h1 className="text-6xl font-extrabold text-yellow-500 mb-4 animate-fade-in-down">
          Bem-vindo ao Mundo de Saint Seiya
        </h1>
        <p className="text-gray-300 text-xl mb-8 animate-fade-in-up">
          Explore os Cavaleiros do Zodíaco, seus heróis, batalhas e histórias épicas.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="/characters"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300 animate-fade-in-up"
          >
            Ver Personagens
          </a>
          <a
            href="/about"
            className="bg-gray-700 text-yellow-500 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-600 transition-colors duration-300 animate-fade-in-up"
          >
            Sobre o Projeto
          </a>
        </div>
      </section>

      {/* Funcionalidades do site */}
      <section className="my-16">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Funcionalidades do Site</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Explorar Personagens</h3>
            <p className="text-gray-300 text-lg">
              Conheça cada um dos Cavaleiros de Bronze e de Ouro, suas histórias e habilidades.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Histórias Épicas</h3>
            <p className="text-gray-300 text-lg">
              Descubra as batalhas mais épicas da série e o impacto dos Cavaleiros do Zodíaco.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Sobre o Autor</h3>
            <p className="text-gray-300 text-lg">
              Saiba mais sobre o criador do site e o que motivou este projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Destaque de Personagens */}
      <section className="my-16">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Personagens em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pinimg.com/originals/f4/78/66/f47866e3aa44f46a7857548f22526aa7.png"
              alt="Seiya de Pégaso"
              className="w-60 h-88 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Seiya de Pégaso</h3>
            <p className="text-gray-300 text-lg">O Cavaleiro de Bronze que luta pela justiça e por Atena.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pinimg.com/originals/be/e9/8b/bee98b455b2807ce86f50051d52767c3.png"
              alt="Shiryu de Dragão"
              className="w-60 h-88 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Shiryu de Dragão</h3>
            <p className="text-gray-300 text-lg">O nobre e corajoso Cavaleiro de Dragão, protetor do Santuário.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pinimg.com/originals/6c/52/e9/6c52e90d72b7d9aea6ca9cf6a95fd8f9.png"
              alt="Hyoga de Cisne"
              className="w-60 h-88 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Hyoga de Cisne</h3>
            <p className="text-gray-300 text-lg">O Cavaleiro de Cisne, cuja frieza esconde um grande coração.</p>
          </div>
        </div>
      </section>

      {/* Footer com link para explorar mais */}
      <footer className="text-center my-12">
        <a
          href="/characters"
          className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300"
        >
          Explore Todos os Personagens
        </a>
      </footer>
    </div>
  );
}
