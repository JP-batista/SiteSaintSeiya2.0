// src/app/games/page.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function GamesPage() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-5xl font-extrabold text-center text-yellow-400 mb-16">
        Escolha seu Jogo
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Card do Jogo SaintSeiyaDLE */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 border-4 border-gray-700 hover:border-yellow-500 bg-black">
          <div className="relative h-72 w-full bg-cover bg-center" style={{ backgroundImage: `url('/skins/banner-seiya1.jpg')`, backgroundPosition: '85% center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <div className="p-6">
            <h2 className="text-4xl font-extrabold text-yellow-300 mb-3">SaintSeiyaDLE</h2>
            <p className="text-gray-300 mb-6">
              Descubra o cavaleiro oculto adivinhando características e dicas. Um desafio de lógica para os fãs de Saint Seiya!
            </p>
            <Link href="/game">
              <button className="w-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transform transition-transform duration-300">
                Jogar Agora
              </button>
            </Link>
          </div>
        </div>

        {/* Card do Quiz */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 border-4 border-gray-700 hover:border-yellow-500 bg-black">
          <div className="relative h-72 w-full bg-cover bg-center" style={{ backgroundImage: `url('/skins/banner-shiryu1.jpg')`, backgroundPosition: '85% center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <div className="p-6">
            <h2 className="text-4xl font-extrabold text-yellow-300 mb-3">Quiz de Saint Seiya</h2>
            <p className="text-gray-300 mb-6">
              Teste seus conhecimentos sobre o universo de Saint Seiya. Quantas respostas você consegue acertar?
            </p>
            <Link href="/quiz">
              <button className="w-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transform transition-transform duration-300">
                Jogar Agora
              </button>
            </Link>
          </div>
        </div>

        {/* Card do Teste de Afinidade */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 border-4 border-gray-700 hover:border-yellow-500 bg-black">
          <div className="relative h-72 w-full bg-cover bg-center" style={{ backgroundImage: `url('/skins/banner-hyoga1.jpg')`, backgroundPosition: '85% center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <div className="p-6">
            <h2 className="text-4xl font-extrabold text-yellow-300 mb-3">Teste de Afinidade</h2>
            <p className="text-gray-300 mb-6">
              Descubra com qual Cavaleiro você tem mais afinidade com base em suas respostas!
            </p>
            <Link href="/games/affinity">
              <button className="w-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transform transition-transform duration-300">
                Jogar Agora
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
