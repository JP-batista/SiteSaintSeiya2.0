// src/app/stories/page.tsx

import Link from 'next/link';

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-transparent p-8">
      <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-12">
        Histórias Épicas de Saint Seiya
      </h1>

      <section className="my-16">
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Escolha uma Saga</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card - Saga do Santuário */}
          <Link href="/stories/santuary-saga">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://i.pinimg.com/originals/ed/6c/41/ed6c4164b0d0242fe99c835b2887b522.jpg" // Imagem da Saga do Santuário
                alt="Saga do Santuário"
                className="w-full h-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl text-yellow-300 font-bold mb-2">Saga do Santuário</h3>
              <p className="text-gray-300 text-lg">A épica batalha pelo controle do Santuário de Atena.</p>
            </div>
          </Link>

          {/* Card - Saga de Asgard */}
          <Link href="/stories/asgard-saga">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://i.pinimg.com/originals/32/ee/46/32ee46ba20faa639365b8382f02d5b72.jpg" // Imagem da Saga de Asgard
                alt="Saga de Asgard"
                className="w-full h-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl text-yellow-300 font-bold mb-2">Saga de Asgard</h3>
              <p className="text-gray-300 text-lg">Uma batalha na terra gelada de Asgard, com guerreiros deuses.</p>
            </div>
          </Link>

          {/* Card - Saga de Poseidon */}
          <Link href="/stories/poseidon-saga">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://i.pinimg.com/originals/d6/77/7f/d6777fd8c14e022938552d07acae7c22.jpg" // Imagem da Saga de Poseidon
                alt="Saga de Poseidon"
                className="w-full h-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl text-yellow-300 font-bold mb-2">Saga de Poseidon</h3>
              <p className="text-gray-300 text-lg">Os Cavaleiros enfrentam Poseidon e seus Generais Marinas.</p>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}
