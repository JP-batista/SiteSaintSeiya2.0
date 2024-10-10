// src/app/stories/hades-hell/page.tsx

import Link from 'next/link';

export default function HadesHellSagaPage() {
  return (
    <div className="min-h-screen bg-transparent p-8">
      {/* Título da Página */}
      <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
        Saga de Hades: Fase Inferno
      </h1>

      {/* Resumo da Saga */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-8">Resumo da Saga</h2>
        <p className="text-gray-300 text-lg">
          A <strong>Saga de Hades: Fase Inferno</strong> é a segunda parte da Saga de Hades em <strong>Saint Seiya</strong> e mostra a jornada dos Cavaleiros de Atena no submundo, onde eles enfrentam Hades e seus poderosos subordinados, os Espectros e os Juízes do Inferno.
        </p>
        <p className="text-gray-300 text-lg mt-4">
          O objetivo dos Cavaleiros é salvar Atena, que se sacrificou na Fase Santuário, e impedir o Grande Eclipse, um plano de Hades para mergulhar a Terra em trevas eternas.
        </p>
      </section>

      {/* Batalhas e Episódios */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-8">Batalhas e Episódios</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seiya e Shun vs. Caronte de Aqueronte */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Seiya e Shun vs. Caronte</h3>
            <p className="text-gray-300 text-lg">Episódio 1: A Travessia de Aqueronte</p>
            <p className="text-gray-300 text-lg mt-2">
              Seiya e Shun enfrentam o barqueiro Caronte, que tenta impedir sua passagem pelo rio Aqueronte. Seiya derrota Caronte com o Meteoro de Pégaso.
            </p>
          </div>

          {/* Seiya e Shun vs. Cerberus */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Seiya e Shun vs. Cerberus</h3>
            <p className="text-gray-300 text-lg">Episódio 2: O Guardião das Portas do Inferno</p>
            <p className="text-gray-300 text-lg mt-2">
              Na entrada do Inferno, Seiya e Shun enfrentam Cerberus, o cão de três cabeças. Shun usa sua Corrente de Andrômeda para derrotar a criatura.
            </p>
          </div>

          {/* Seiya e Shun vs. Esfinge de Benu */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Seiya e Shun vs. Esfinge de Benu</h3>
            <p className="text-gray-300 text-lg">Episódio 3: O Guardião do Julgamento</p>
            <p className="text-gray-300 text-lg mt-2">
              Seiya derrota Esfinge após resistir ao ataque Ilusão Diabólica, permitindo que eles continuem sua jornada.
            </p>
          </div>

          {/* Ikki de Fênix vs. Aiacos de Garuda */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Ikki vs. Aiacos de Garuda</h3>
            <p className="text-gray-300 text-lg">Episódio 4: O Nobre Guerreiro de Garuda</p>
            <p className="text-gray-300 text-lg mt-2">
              Ikki enfrenta Aiacos, um dos Juízes do Inferno, e usa suas Asas Ardentes de Fênix para derrotá-lo em uma luta épica.
            </p>
          </div>

          {/* Seiya, Hyoga e Shiryu vs. Valentine de Harpia */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Seiya, Hyoga e Shiryu vs. Valentine</h3>
            <p className="text-gray-300 text-lg">Episódio 5: Batalha ao Lado do Tribunal</p>
            <p className="text-gray-300 text-lg mt-2">
              Os Cavaleiros de Bronze enfrentam Valentine de Harpia, conseguindo derrotá-lo com suas técnicas combinadas.
            </p>
          </div>

          {/* Shun vs. Radamanthys de Wyvern */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Shun vs. Radamanthys</h3>
            <p className="text-gray-300 text-lg">Episódio 6: A Revelação de Hades</p>
            <p className="text-gray-300 text-lg mt-2">
              Durante a luta, Shun é revelado como a reencarnação de Hades. Ikki intervém para salvar seu irmão, mas é incapaz de derrotar Hades diretamente.
            </p>
          </div>

          {/* Seiya, Shiryu, Hyoga e Ikki vs. Radamanthys */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Cavaleiros de Bronze vs. Radamanthys</h3>
            <p className="text-gray-300 text-lg">Episódio 7: Os Cavaleiros do Inferno</p>
            <p className="text-gray-300 text-lg mt-2">
              Os Cavaleiros de Bronze enfrentam Radamanthys e, com a ajuda dos Cavaleiros de Ouro, conseguem empurrá-lo até o Muro das Lamentações.
            </p>
          </div>

          {/* Cavaleiros de Ouro vs. Muro das Lamentações */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Cavaleiros de Ouro vs. Muro das Lamentações</h3>
            <p className="text-gray-300 text-lg">Episódio 8: O Muro das Lamentações</p>
            <p className="text-gray-300 text-lg mt-2">
              Os Cavaleiros de Ouro se sacrificam para destruir o Muro das Lamentações, permitindo que os Cavaleiros de Bronze avancem para os Campos Elíseos.
            </p>
          </div>
        </div>
      </section>

      {/* Principais Batalhas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Principais Batalhas da Saga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ikki de Fênix vs. Aiacos de Garuda */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem de Ikki vs. Aiacos]</span>
            </div>
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Ikki vs. Aiacos de Garuda</h3>
            <p className="text-gray-300 text-lg">
              Ikki derrota Aiacos de Garuda, um dos três Juízes do Inferno, usando suas Asas Ardentes de Fênix.
            </p>
          </div>

          {/* Cavaleiros de Ouro vs. Muro das Lamentações */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem dos Cavaleiros de Ouro]</span>
            </div>
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Cavaleiros de Ouro vs. Muro das Lamentações</h3>
            <p className="text-gray-300 text-lg">
              Os Cavaleiros de Ouro se sacrificam para destruir o Muro das Lamentações, um dos momentos mais emocionantes e dramáticos da saga.
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
