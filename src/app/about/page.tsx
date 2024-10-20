// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent p-8">
      <h1 className="text-5xl font-extrabold text-yellow-500 text-center mb-12">
        Sobre o Autor e o Projeto
      </h1>

      {/* Biografia */}
      <section className="bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-lg mb-10 hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl text-yellow-300 mb-6">Biografia</h2>
        <p className="text-gray-300 text-lg">
          Olá! Meu nome é <strong>João Pedro Ribeiro Batista Araújo</strong>. Sou um desenvolvedor apaixonado por tecnologia, sempre em busca de aprender novas habilidades e enfrentar desafios. Desde jovem, tenho um grande interesse por programação e desenvolvimento web. A ideia de criar este site nasceu da minha paixão por <strong>Saint Seiya</strong> e o desejo de aplicar meus conhecimentos em desenvolvimento front-end.
        </p>
        <p className="text-gray-300 mt-4 text-lg">
          Estou cursando <strong>Engenharia de Software</strong> atualmente no quarto periodo. Este site é uma demonstração das minhas habilidades e da minha paixão por desenvolvimento.
        </p>
      </section>

      {/* Habilidades */}
      <section className="bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-lg mb-10 hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl text-yellow-300 mb-6">Habilidades</h2>
        <ul className="text-gray-300 grid grid-cols-2 gap-6 text-lg">
          <li className="hover:text-yellow-400 transition-colors duration-300">HTML5 & CSS3</li>
          <li className="hover:text-yellow-400 transition-colors duration-300">JavaScript & TypeScript</li>
          <li className="hover:text-yellow-400 transition-colors duration-300">React & Next.js</li>
          <li className="hover:text-yellow-400 transition-colors duration-300">Tailwind CSS</li>
          <li className="hover:text-yellow-400 transition-colors duration-300">Node.js & Express</li>
          <li className="hover:text-yellow-400 transition-colors duration-300">Git & GitHub</li>
          <li className="hover:text-yellow-400 transition-colors duration-300">Figma (Design)</li>
          <li className="hover:text-yellow-400 transition-colors duration-300">Responsividade</li>
        </ul>
      </section>

      {/* Ferramentas Utilizadas */}
      <section className="bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-lg mb-10 hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl text-yellow-300 mb-6">Ferramentas Utilizadas no Desenvolvimento</h2>
        <p className="text-gray-300 text-lg mb-4">
          Durante o desenvolvimento deste site, utilizei as seguintes ferramentas e tecnologias:
        </p>
        <ul className="text-gray-300 list-disc list-inside text-lg">
          <li>Next.js - Framework React para desenvolvimento full-stack</li>
          <li>Tailwind CSS - Para estilização rápida e responsiva</li>
          <li>Git & GitHub - Para controle de versão</li>
          <li>Figma - Para prototipação de design</li>
        </ul>
      </section>

      {/* Projetos */}
      <section className="bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-lg mb-10 hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl text-yellow-300 mb-6">Projetos</h2>
        <p className="text-gray-300 text-lg mb-6">Confira alguns dos projetos em que trabalhei:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 bg-opacity-60 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl text-yellow-300 mb-4">Projeto 1: Saint Seiya Web</h3>
            <p className="text-gray-300 text-lg mb-6">Um site dedicado aos Cavaleiros do Zodíaco, com conteúdo e informações sobre os personagens.</p>
            <a href="/" className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300 text-lg">Ver Projeto</a>
          </div>
          <div className="bg-gray-900 bg-opacity-60 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl text-yellow-300 mb-4">Projeto 2: Portfólio Pessoal</h3>
            <p className="text-gray-300 text-lg mb-6">Meu portfólio pessoal com projetos desenvolvidos ao longo da minha carreira como desenvolvedor.</p>
            <a href="#" className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300 text-lg">Ver Projeto</a>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-lg mb-10 hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl text-yellow-300 mb-6">Contato</h2>
        <p className="text-gray-300 text-lg">Telefone: (63) 99912-2501</p>
        <p className="text-gray-300 text-lg">
          Email:{" "}
          <a
            href="mailto:jpedro204jp@gmail.com"
            className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300 text-lg"
          >
            jpedro204jp@gmail.com
          </a>
        </p>
        <p className="text-gray-300 text-lg">
          Instagram:{" "}
          <a
            href="https://instagram.com/jp_batista20"
            target="_blank"
            className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300 text-lg"
          >
            @jp_batista20
          </a>
        </p>
      </section>

      {/* Redes Sociais */}
      <section className="bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl text-yellow-300 mb-6">Nos Siga nas Redes Sociais</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://x.com/JP_Eissoai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/jp_batista20/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Instagram
          </a>
          <a
            href="https://br.pinterest.com/joaopedroribeirobatistaaraujo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Pinterest
          </a>
        </div>
      </section>
    </div>
  );
}
