// src/app/characters/page.tsx

import Link from 'next/link';

export default function CharactersPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Personagens</h1>
        <p className="text-gray-300 mb-12 text-lg">
          Explore os Cavaleiros de Bronze e Ouro e descubra suas histórias e jornadas épicas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Seção Cavaleiros de Bronze */}
        <div className="bg-gray-900 bg-opacity-80 p-8 rounded-3xl shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50">
          <h2 className="text-4xl text-yellow-400 mb-4 font-semibold text-center">Cavaleiros de Bronze</h2>
          <p className="text-gray-300 mb-4 text-center">Clique abaixo para ver os Cavaleiros de Bronze e suas aventuras lendárias.</p>
          <Link href="/characters/bronze" className="block bg-yellow-500 text-center py-3 rounded-lg text-black font-bold hover:bg-yellow-400 transition-colors">
            Ir para Cavaleiros de Bronze
          </Link>
        </div>

        {/* Seção Cavaleiros de Ouro */}
        <div className="bg-gray-900 bg-opacity-80 p-8 rounded-3xl shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50">
          <h2 className="text-4xl text-yellow-400 mb-4 font-semibold text-center">Cavaleiros de Ouro</h2>
          <p className="text-gray-300 mb-4 text-center">Clique abaixo para ver os Cavaleiros de Ouro e suas poderosas batalhas.</p>
          <Link href="/characters/gold" className="block bg-yellow-500 text-center py-3 rounded-lg text-black font-bold hover:bg-yellow-400 transition-colors">
            Ir para Cavaleiros de Ouro
          </Link>
        </div>
        
      </div>
      <div className="flex justify-center space-x-6 mt-6">
          <Link href="/characters/todos" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
            Todos os Personagens
          </Link>
        </div>
    </div>
  );
}
