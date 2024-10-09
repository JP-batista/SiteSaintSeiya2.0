// src/app/stories/page.tsx

import Link from 'next/link';

export default function EpicStoriesPage() {
  return (
    <div className="min-h-screen bg-transparent p-8">
      {/* Título da Página */}
      <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
        Histórias Épicas
      </h1>

      {/* Cards de Histórias Épicas */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 - Saga do Santuário */}
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.pinimg.com/originals/ed/6c/41/ed6c4164b0d0242fe99c835b2887b522.jpg"
            alt="Saga do Santuário"
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold mb-2">Saga do Santuário</h3>
          <p className="text-gray-300 mb-4">
            A saga mais icônica onde Seiya e os Cavaleiros de Bronze enfrentam os poderosos Cavaleiros de Ouro para salvar Atena.
          </p>
          <Link href="/stories/santuary-saga" legacyBehavior>
            <a className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Saiba Mais
            </a>
          </Link>
        </div>

        {/* Card 2 - Saga de Asgard */}
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.pinimg.com/originals/32/ee/46/32ee46ba20faa639365b8382f02d5b72.jpg"
            alt="Saga de Asgard"
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold mb-2">Saga de Asgard</h3>
          <p className="text-gray-300 mb-4">
            A saga exclusiva do anime onde Seiya e seus companheiros enfrentam os Guerreiros Deuses de Asgard para salvar o mundo.
          </p>
          <Link href="/stories/asgard-saga" legacyBehavior>
            <a className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Saiba Mais
            </a>
          </Link>
        </div>

        {/* Card 3 - Saga de Poseidon */}
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.pinimg.com/originals/d6/77/7f/d6777fd8c14e022938552d07acae7c22.jpg"
            alt="Saga de Poseidon"
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold mb-2">Saga de Poseidon</h3>
          <p className="text-gray-300 mb-4">
            Após os eventos de Asgard, os Cavaleiros de Bronze enfrentam Poseidon e seus Generais Marinas para salvar o mundo de uma inundação.
          </p>
          <Link href="/stories/poseidon-saga" legacyBehavior>
            <a className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Saiba Mais
            </a>
          </Link>
        </div>

        {/* Card 4 - Saga de Hades: Fase Santuário */}
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.pinimg.com/originals/d9/73/aa/d973aa3089c42f6c722298606624254b.jpg"
            alt="Saga de Hades: Fase Santuário"
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold mb-2">Saga de Hades: Fase Santuário</h3>
          <p className="text-gray-300 mb-4">
            O início da batalha contra Hades, o deus do submundo, onde os Cavaleiros de Ouro enfrentam os espectros de Hades.
          </p>
          <Link href="/stories/hades-santuary" legacyBehavior>
            <a className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Saiba Mais
            </a>
          </Link>
        </div>

        {/* Card 5 - Saga de Hades: Fase Inferno */}
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.pinimg.com/originals/47/97/5f/47975f7174038983872f63add1c31911.jpg"
            alt="Saga de Hades: Fase Inferno"
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold mb-2">Saga de Hades: Fase Inferno</h3>
          <p className="text-gray-300 mb-4">
            Seiya e seus amigos entram no submundo para confrontar Hades diretamente em uma batalha desesperada.
          </p>
          <Link href="/stories/hades-hell" legacyBehavior>
            <a className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Saiba Mais
            </a>
          </Link>
        </div>

        {/* Card 6 - Saga de Hades: Fase Elíseos */}
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.pinimg.com/originals/24/28/1e/24281ec2aeb3f6b7e7873f020681cd3f.jpg"
            alt="Saga de Hades: Fase Elíseos"
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold mb-2">Saga de Hades: Fase Elíseos</h3>
          <p className="text-gray-300 mb-4">
            A batalha final entre os Cavaleiros de Bronze e Hades no Elíseos, onde Seiya e seus companheiros enfrentam deuses para salvar a humanidade.
          </p>
          <Link href="/stories/hades-elysium" legacyBehavior>
            <a className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Saiba Mais
            </a>
          </Link>
        </div>

      </section>
    </div>
  );
}
