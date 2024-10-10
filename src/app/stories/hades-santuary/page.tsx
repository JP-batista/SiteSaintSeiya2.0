// src/app/stories/hades-santuary/page.tsx

import Link from 'next/link';

export default function HadesSantuarySagaPage() {
  return (
    <div className="min-h-screen bg-transparent p-8">
      {/* Título da Página */}
      <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
        Saga de Hades: Fase Santuário
      </h1>

      {/* Resumo da Saga */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-8">Resumo da Saga</h2>
        <p className="text-gray-300 text-lg">
          A <strong>Saga de Hades: Fase Santuário</strong> é a primeira parte da Saga de Hades em <strong>Saint Seiya</strong> e cobre os eventos em que os Cavaleiros de Atena enfrentam os Cavaleiros de Ouro mortos, que retornam à vida sob o comando de Hades, o deus do submundo.
        </p>
        <p className="text-gray-300 text-lg mt-4">
          A história começa após a derrota de Poseidon, quando Hades inicia seu plano para destruir Atena e dominar o mundo. Ele ressuscita alguns dos Cavaleiros de Ouro falecidos (Saga de Gêmeos, Shura de Capricórnio, Camus de Aquário, Máscara da Morte de Câncer e Afrodite de Peixes), que têm a missão de assassinar Atena.
        </p>
      </section>

      {/* Batalhas e Episódios */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-8">Batalhas e Episódios</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Máscara da Morte de Câncer e Afrodite de Peixes vs. Mu de Áries */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Máscara da Morte e Afrodite vs. Mu</h3>
            <p className="text-gray-300 text-lg">Episódio 1: A Abertura do Inferno</p>
            <p className="text-gray-300 text-lg mt-2">
              Os Cavaleiros de Câncer e Peixes ressuscitados invadem a Casa de Áries, onde são derrotados por Mu. Eles não conseguem resistir ao poder do Muro de Cristal de Mu.
            </p>
          </div>

          {/* Saga de Gêmeos, Shura de Capricórnio e Camus de Aquário vs. Mu de Áries */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Saga, Shura e Camus vs. Mu</h3>
            <p className="text-gray-300 text-lg">Episódio 2: O Destino dos Renegados</p>
            <p className="text-gray-300 text-lg mt-2">
              Os três Cavaleiros de Ouro renegados entram na Casa de Áries, mas Mu é forçado a deixá-los passar depois de uma breve luta, pois não deseja matá-los.
            </p>
          </div>

          {/* Saga, Shura e Camus vs. Aldebaran de Touro */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Saga, Shura e Camus vs. Aldebaran</h3>
            <p className="text-gray-300 text-lg">Episódio 3: O Retorno dos Antigos Cavaleiros de Ouro</p>
            <p className="text-gray-300 text-lg mt-2">
              Ao passarem pela Casa de Touro, eles enfrentam Aldebaran, que é gravemente ferido após resistir, mas sobrevive.
            </p>
          </div>

          {/* Shiryu vs. Máscara da Morte de Câncer e Afrodite de Peixes */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Shiryu vs. Máscara da Morte e Afrodite</h3>
            <p className="text-gray-300 text-lg">Episódio 4: Uma Chama no Coração Congelado</p>
            <p className="text-gray-300 text-lg mt-2">
              Shiryu derrota Máscara da Morte e Afrodite no Monte Yomotsu, impedindo-os de continuar seu caminho até Atena.
            </p>
          </div>

          {/* Saga, Shura e Camus vs. Shaka de Virgem */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Saga, Shura e Camus vs. Shaka</h3>
            <p className="text-gray-300 text-lg">Episódio 5: Renegados vs. Cavaleiros de Ouro</p>
            <p className="text-gray-300 text-lg mt-2">
              Shaka desafia os três Cavaleiros renegados na Casa de Virgem. Eles usam a técnica proibida Athena Exclamation e derrotam Shaka.
            </p>
          </div>

          {/* Saga, Shura e Camus vs. Miro de Escorpião */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Saga, Shura e Camus vs. Miro</h3>
            <p className="text-gray-300 text-lg">Episódio 6: Quando o Sol Brilhar Novamente</p>
            <p className="text-gray-300 text-lg mt-2">
              Miro tenta detê-los na Casa de Escorpião, mas é convencido de que os Cavaleiros renegados estão se sacrificando por um propósito maior.
            </p>
          </div>

          {/* Cavaleiros de Bronze vs. Espectros de Hades */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Cavaleiros de Bronze vs. Espectros</h3>
            <p className="text-gray-300 text-lg">Episódios 7-9: O Poente do Sol / A Morte de Atena</p>
            <p className="text-gray-300 text-lg mt-2">
              Seiya e seus amigos enfrentam vários Espectros de Hades enquanto tentam salvar Atena e impedir Hades de dominar o Santuário.
            </p>
          </div>

          {/* Saga, Shura e Camus vs. Seiya, Shiryu, Hyoga, Shun */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Renegados vs. Cavaleiros de Bronze</h3>
            <p className="text-gray-300 text-lg">Episódios 9-10: O Sacrifício dos Renegados / O Último Eclipse</p>
            <p className="text-gray-300 text-lg mt-2">
              Os Cavaleiros de Bronze lutam contra os Cavaleiros de Ouro renegados que revelam que estavam se sacrificando para ajudar Atena.
            </p>
          </div>

          {/* Shaka de Virgem vs. Radamanthys de Wyvern */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Shaka vs. Radamanthys</h3>
            <p className="text-gray-300 text-lg">Episódios 10-11: O Último Eclipse / A Luz Brilhante das Estrelas</p>
            <p className="text-gray-300 text-lg mt-2">
              Shaka confronta Radamanthys no Submundo, mas a luta é interrompida por Atena.
            </p>
          </div>
        </div>
      </section>

      {/* Principais Batalhas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Principais Batalhas da Saga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Batalha 1: Shaka vs. Saga, Shura e Camus */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem de Shaka vs. Saga, Shura e Camus]</span>
            </div>
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Shaka vs. Saga, Shura e Camus</h3>
            <p className="text-gray-300 text-lg">
              Shaka enfrenta os três Cavaleiros renegados na Casa de Virgem. Eles são forçados a usar a Athena Exclamation, resultando em uma batalha épica.
            </p>
          </div>

          {/* Batalha 2: Renegados vs. Cavaleiros de Bronze */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">[Imagem de Renegados vs. Cavaleiros de Bronze]</span>
            </div>
            <h3 className="text-2xl text-yellow-300 font-bold mb-2">Renegados vs. Cavaleiros de Bronze</h3>
            <p className="text-gray-300 text-lg">
              Os Cavaleiros de Ouro renegados enfrentam os Cavaleiros de Bronze na Casa de Sagitário, revelando que seu verdadeiro plano era proteger Atena.
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
