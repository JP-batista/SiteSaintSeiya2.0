// src/app/stories/asgard-saga/page.tsx

import Link from 'next/link';

export default function AsgardSagaPage() {
  return (
    <div className="min-h-screen bg-transparent p-8">
      {/* Título da Página */}
      <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
        Saga de Asgard
      </h1>

      {/* Introdução à Saga */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-8">Introdução à Saga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 - Introdução a Asgard */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Introdução a Asgard</h3>
            <p className="text-gray-300 text-lg">
              A saga começa quando Saori Kido (Atena) e os Cavaleiros de Bronze são chamados ao reino de Asgard, governado por Hilda de Polaris. Hilda, corrompida pelo Anel de Nibelungo, transforma-se em uma tirana que deseja dominar o mundo.
            </p>
          </div>

          {/* Card 2 - Cavaleiros de Asgard */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Cavaleiros de Asgard</h3>
            <p className="text-gray-300 text-lg">
              Hilda convoca os sete Guerreiros Deuses de Asgard, cada um protegido por uma estrela de Odin, para lutar contra os Cavaleiros de Atena. Eles vestem armaduras chamadas "God Robes", representando figuras mitológicas nórdicas.
            </p>
          </div>

          {/* Card 3 - Missão dos Cavaleiros de Bronze */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Missão dos Cavaleiros de Bronze</h3>
            <p className="text-gray-300 text-lg">
              Saori oferece sua vida em sacrifício para apaziguar o caos climático causado por Hilda. Enquanto isso, os Cavaleiros de Bronze lutam contra os Guerreiros Deuses para salvar Atena e o reino de Asgard.
            </p>
          </div>

          {/* Card 4 - Batalha contra os Guerreiros Deuses */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Batalha contra os Guerreiros Deuses</h3>
            <p className="text-gray-300 text-lg">
              Os Cavaleiros de Bronze enfrentam, um a um, os poderosos Guerreiros Deuses de Asgard:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4">
              <li><strong>Thor de Phecda:</strong> O gigante que representa o martelo de Thor.</li>
              <li><strong>Fenrir de Alioth:</strong> Um guerreiro criado entre lobos.</li>
              <li><strong>Hagen de Merak:</strong> Apaixonado por Freya, irmã de Hilda.</li>
              <li><strong>Alberich de Megrez:</strong> Um estrategista cruel e ganancioso.</li>
              <li><strong>Mime de Benetnasch:</strong> Um lutador e músico com uma história trágica.</li>
              <li><strong>Shido de Mizar e Alcor:</strong> Representa duas estrelas gêmeas, com um irmão secreto.</li>
              <li><strong>Siegfried de Dubhe:</strong> O líder imortal, inspirado no herói da mitologia nórdica.</li>
            </ul>
          </div>

          {/* Card 5 - A Revelação e a Batalha Final */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">A Revelação e a Batalha Final</h3>
            <p className="text-gray-300 text-lg">
              Após derrotar os Guerreiros Deuses, Seiya e seus amigos descobrem que Poseidon estava manipulando Hilda através do Anel de Nibelungo. Seiya usa a armadura de Odin e a espada Balmung para destruir o anel e libertar Hilda.
            </p>
          </div>

          {/* Card 6 - Conclusão */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Conclusão</h3>
            <p className="text-gray-300 text-lg">
              Com Hilda libertada, a paz é restaurada em Asgard. Atena e os Cavaleiros de Bronze seguem em direção à próxima ameaça: Poseidon.
            </p>
          </div>

        </div>
      </section>

      {/* Batalhas da Saga de Asgard */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Batalhas da Saga de Asgard</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Thor de Phecda vs. Seiya - Episódio 75</h3>
            <p className="text-gray-300 text-lg">
              Seiya enfrenta Thor de Phecda, o primeiro dos Guerreiros Deuses. Thor utiliza o poder de seu martelo gigantesco e sua força bruta, mas Seiya resiste até conseguir derrotá-lo.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Fenrir de Alioth vs. Shiryu - Episódio 76</h3>
            <p className="text-gray-300 text-lg">
              Shiryu enfrenta Fenrir, o guerreiro criado por lobos. Fenrir é extremamente rápido e selvagem, mas Shiryu utiliza sua sabedoria e força para derrotá-lo.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Hagen de Merak vs. Hyoga - Episódio 77</h3>
            <p className="text-gray-300 text-lg">
              Hyoga luta contra Hagen, um guerreiro apaixonado por Freya, a irmã de Hilda. Hagen possui poderes de fogo e lava, criando um confronto épico com o gelo de Hyoga.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Mime de Benetnasch vs. Ikki - Episódio 78</h3>
            <p className="text-gray-300 text-lg">
              Ikki enfrenta Mime, um habilidoso músico e lutador que possui uma história de traição familiar. Mime usa suas melodias como armas, mas Ikki supera sua técnica com seu poder de Fênix.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Alberich de Megrez vs. Shun - Episódio 79</h3>
            <p className="text-gray-300 text-lg">
              Shun enfrenta Alberich, um guerreiro astuto que utiliza estratégias cruéis para vencer seus oponentes. Shun precisa superar as armadilhas de Alberich para vencer a luta.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Shido de Mizar e Alcor vs. Seiya e Shiryu - Episódio 80</h3>
            <p className="text-gray-300 text-lg">
              Shido de Mizar, acompanhado de seu irmão secreto Alcor, enfrenta Seiya e Shiryu. A luta contra os irmãos gêmeos é uma das mais difíceis para os Cavaleiros de Bronze.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Siegfried de Dubhe vs. Shiryu e Seiya - Episódios 81 e 82</h3>
            <p className="text-gray-300 text-lg">
              Seiya e Shiryu enfrentam Siegfried, o líder imortal dos Guerreiros Deuses. Após uma batalha árdua, eles conseguem descobrir a fraqueza de Siegfried e derrotá-lo.
            </p>
          </div>
        </div>
      </section>

      {/* Batalhas Principais */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Batalhas Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Batalha 1: Thor de Phecda vs. Seiya */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem de Thor de Phecda]</span>
            </div>
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Thor de Phecda vs. Seiya</h3>
            <p className="text-gray-300 text-lg">
              Seiya enfrenta Thor de Phecda, o primeiro dos Guerreiros Deuses de Asgard. O gigante possui uma força imensa e utiliza o martelo de Thor como arma principal.
            </p>
          </div>

          {/* Batalha 2: Siegfried de Dubhe vs. Shiryu */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem de Siegfried de Dubhe]</span>
            </div>
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Siegfried de Dubhe vs. Shiryu</h3>
            <p className="text-gray-300 text-lg">
              Shiryu luta contra Siegfried, o líder dos Guerreiros Deuses, cuja imortalidade o torna um adversário quase invencível. Shiryu precisa encontrar uma forma de derrotá-lo.
            </p>
          </div>
        </div>
      </section>

      {/* Link de Voltar */}
      <div className="text-center">
        <Link href="/stories" legacyBehavior>
          <a className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
            Voltar para Histórias Épicas
          </a>
        </Link>
      </div>
    </div>
  );
}
