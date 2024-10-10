// src/app/stories/hades-elysium/page.tsx

import Link from 'next/link';

export default function HadesElysiumSagaPage() {
  return (
    <div className="min-h-screen bg-transparent p-8">
      {/* Título da Página */}
      <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
        Saga de Hades: Fase Elíseos
      </h1>

      {/* Resumo da Saga */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-8">Resumo da Saga</h2>
        <p className="text-gray-300 text-lg">
          A <strong>Saga de Hades: Fase Elíseos</strong> é a parte final da Saga de Hades e o encerramento da história principal de <strong>Saint Seiya</strong>. Nessa fase, os Cavaleiros de Bronze atravessam o Muro das Lamentações, com a ajuda do sacrifício dos Cavaleiros de Ouro, para chegar aos Campos Elíseos, onde Hades reside.
        </p>
        <p className="text-gray-300 text-lg mt-4">
          Lá, eles enfrentam os deuses guardiões e, finalmente, o próprio Hades, em uma batalha decisiva para salvar Atena e a humanidade do Grande Eclipse.
        </p>
      </section>

      {/* Batalhas e Episódios */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-8">Batalhas e Episódios</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seiya vs. Thanatos */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Seiya vs. Thanatos</h3>
            <p className="text-gray-300 text-lg">Episódios 1-2: A Travessia do Muro das Lamentações / O Deus da Morte e do Sono</p>
            <p className="text-gray-300 text-lg mt-2">
              Thanatos, o Deus da Morte, é o primeiro grande oponente nos Campos Elíseos. Ele destrói a Armadura de Bronze de Seiya e o fere gravemente, mas Seiya desperta a Armadura de Sagitário.
            </p>
          </div>

          {/* Seiya, Shiryu, Hyoga, Shun e Ikki vs. Thanatos */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Seiya e Cavaleiros vs. Thanatos</h3>
            <p className="text-gray-300 text-lg">Episódios 3-4: A Aparição das Armaduras Divinas</p>
            <p className="text-gray-300 text-lg mt-2">
              Com suas Armaduras Divinas, Seiya e os Cavaleiros de Bronze derrotam Thanatos. A luta mostra que os humanos podem desafiar até os deuses.
            </p>
          </div>

          {/* Ikki vs. Hypnos */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Ikki vs. Hypnos</h3>
            <p className="text-gray-300 text-lg">Episódio 5: A Luta contra o Deus do Sono</p>
            <p className="text-gray-300 text-lg mt-2">
              Ikki enfrenta Hypnos, o Deus do Sono, e mesmo com sua Armadura Divina, tem dificuldade. Mas com a ajuda de seus companheiros, ele vence.
            </p>
          </div>

          {/* Seiya, Shiryu, Hyoga, Shun e Ikki vs. Hades */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Seiya e Cavaleiros vs. Hades</h3>
            <p className="text-gray-300 text-lg">Episódios 6-7: O Despertar de Hades / A Última Batalha</p>
            <p className="text-gray-300 text-lg mt-2">
              Os Cavaleiros de Bronze enfrentam Hades, que desperta em seu corpo original. Mesmo com as Armaduras Divinas, têm dificuldade para derrotá-lo.
            </p>
          </div>

          {/* Atena vs. Hades */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Atena vs. Hades</h3>
            <p className="text-gray-300 text-lg">Episódio 8: O Grande Eclipse</p>
            <p className="text-gray-300 text-lg mt-2">
              Atena enfrenta diretamente Hades, após Seiya ser ferido pela espada do deus. Com a ajuda de seus Cavaleiros, Atena consegue derrotar Hades.
            </p>
          </div>
        </div>
      </section>

      {/* Principais Batalhas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Principais Batalhas da Saga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seiya e os Cavaleiros de Bronze vs. Thanatos */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem de Seiya vs. Thanatos]</span>
            </div>
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Seiya e Cavaleiros vs. Thanatos</h3>
            <p className="text-gray-300 text-lg">
              A batalha contra Thanatos é significativa. O deus destrói as armaduras dos Cavaleiros, mas as Armaduras Divinas surgem, mudando o curso da luta.
            </p>
          </div>

          {/* Seiya e Atena vs. Hades */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem de Seiya e Atena vs. Hades]</span>
            </div>
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Seiya e Atena vs. Hades</h3>
            <p className="text-gray-300 text-lg">
              O confronto final com Hades é o clímax da saga. Mesmo com as Armaduras Divinas, os Cavaleiros têm dificuldade em derrotá-lo, mas com a ajuda de Atena, Hades é finalmente vencido.
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
