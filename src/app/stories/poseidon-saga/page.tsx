// src/app/stories/poseidon-saga/page.tsx

import Link from 'next/link';

export default function PoseidonSagaPage() {
  return (
    <div className="min-h-screen bg-transparent p-8">
      {/* Título da Página */}
      <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
        Saga de Poseidon
      </h1>

      {/* Introdução à Saga */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-8">Introdução à Saga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 - Introdução à Saga de Poseidon */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Introdução à Saga de Poseidon</h3>
            <p className="text-gray-300 text-lg">
              Após os eventos de Asgard, Atena e os Cavaleiros de Bronze enfrentam uma nova ameaça: Poseidon, o deus dos mares, que planeja inundar a Terra e destruir a humanidade. Poseidon renasce no corpo de Julian Solo, um rico empresário.
            </p>
          </div>

          {/* Card 2 - Poseidon e seus Generais Marinas */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Poseidon e seus Generais Marinas</h3>
            <p className="text-gray-300 text-lg">
              Para executar seu plano, Poseidon convoca seus sete Generais Marinas, cada um representando um dos sete oceanos, para lutar contra os Cavaleiros de Atena. Estes Generais Marinas usam poderosas escamas (armaduras) associadas a criaturas mitológicas marinhas.
            </p>
          </div>

          {/* Card 3 - Missão dos Cavaleiros de Bronze */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Missão dos Cavaleiros de Bronze</h3>
            <p className="text-gray-300 text-lg">
              Atena se sacrifica, aprisionando-se em uma coluna do templo submarino de Poseidon para impedir a inundação imediata. Os Cavaleiros de Bronze devem derrotar os Generais Marinas e destruir as colunas que sustentam o reino submarino para salvar Atena e a Terra.
            </p>
          </div>

          {/* Card 4 - Batalha contra os Generais Marinas */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Batalha contra os Generais Marinas</h3>
            <p className="text-gray-300 text-lg">
              Os Cavaleiros de Bronze enfrentam cada um dos Generais Marinas em intensas batalhas, cada uma ocorrendo em uma das colunas que sustentam os sete oceanos.
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4">
              <li><strong>Baian de Cavalo Marinho:</strong> Guardião da Coluna do Pacífico Norte.</li>
              <li><strong>Eo de Scylla:</strong> Guardião da Coluna do Pacífico Sul.</li>
              <li><strong>Krishna de Chrysaor:</strong> Guardião da Coluna do Oceano Índico.</li>
              <li><strong>Kassa de Lymnades:</strong> Guardião da Coluna do Oceano Antártico.</li>
              <li><strong>Isaac de Kraken:</strong> Guardião da Coluna do Oceano Ártico e amigo de infância de Hyoga.</li>
              <li><strong>Cano de Dragão Marinho:</strong> General secreto que trabalha para Poseidon e também o verdadeiro Saga de Gêmeos.</li>
            </ul>
          </div>

          {/* Card 5 - A Revelação e a Batalha Final */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">A Revelação e a Batalha Final</h3>
            <p className="text-gray-300 text-lg">
              No final, Seiya veste a armadura de Atena, a lendária Armadura de Ouro de Sagitário, e, junto com seus amigos, enfrenta Poseidon em sua forma divina para destruir o tridente de Poseidon e salvar a Terra da destruição.
            </p>
          </div>

          {/* Card 6 - Conclusão */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Conclusão</h3>
            <p className="text-gray-300 text-lg">
              Com Poseidon derrotado, Atena aprisiona o espírito do deus dos mares em uma ânfora e restaura a paz na Terra. Os Cavaleiros de Bronze se preparam para futuras batalhas.
            </p>
          </div>

        </div>
      </section>

      {/* Batalhas da Saga de Poseidon */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Batalhas da Saga de Poseidon</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Baian de Cavalo Marinho vs. Seiya - Episódio 100</h3>
            <p className="text-gray-300 text-lg">
              Seiya enfrenta Baian de Cavalo Marinho, o primeiro General Marina a ser derrotado. Ele protege a Coluna do Pacífico Norte e utiliza ondas poderosas para atacar Seiya.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Eo de Scylla vs. Shun - Episódio 101</h3>
            <p className="text-gray-300 text-lg">
              Shun enfrenta Eo, cujo poder vem da criatura mítica Scylla, que possui seis ataques diferentes. Shun usa sua Corrente de Andrômeda para derrotá-lo.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Krishna de Chrysaor vs. Shiryu - Episódio 102</h3>
            <p className="text-gray-300 text-lg">
              Shiryu enfrenta Krishna, o guerreiro com a poderosa lança dourada de Chrysaor. Shiryu precisa sacrificar sua visão para derrotar Krishna em uma batalha épica.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Kassa de Lymnades vs. Hyoga - Episódio 103</h3>
            <p className="text-gray-300 text-lg">
              Hyoga enfrenta Kassa, o guerreiro que pode tomar a forma das pessoas mais queridas para enganar seu oponente. Hyoga supera a ilusão para derrotá-lo.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Isaac de Kraken vs. Hyoga - Episódios 104 e 105</h3>
            <p className="text-gray-300 text-lg">
              Hyoga enfrenta Isaac, seu amigo de infância, agora General Marina do Oceano Ártico. A luta é emocional, mas Hyoga consegue vencer Isaac, que foi corrompido por Poseidon.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Cano de Dragão Marinho vs. Seiya - Episódios 106 e 107</h3>
            <p className="text-gray-300 text-lg">
              Seiya descobre que Cano de Dragão Marinho é na verdade o verdadeiro Saga de Gêmeos. Eles travam uma batalha feroz enquanto o segredo de Cano é revelado.
            </p>
          </div>
        </div>
      </section>

      {/* Batalhas Principais */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Batalhas Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Batalha 1: Baian de Cavalo Marinho vs. Seiya */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem de Baian de Cavalo Marinho]</span>
            </div>
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Baian de Cavalo Marinho vs. Seiya</h3>
            <p className="text-gray-300 text-lg">
              Seiya enfrenta Baian, o primeiro General Marina a cair. Sua força e ataques com ondas são superados pela determinação de Seiya.
            </p>
          </div>

          {/* Batalha 2: Cano de Dragão Marinho vs. Seiya */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem de Cano de Dragão Marinho]</span>
            </div>
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Cano de Dragão Marinho vs. Seiya</h3>
            <p className="text-gray-300 text-lg">
              Seiya descobre que Cano de Dragão Marinho é o verdadeiro Saga de Gêmeos, e eles enfrentam uma batalha intensa pelo destino da Terra.
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
