"use client"; // Para Next.js Client Component

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CenariosPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8 text-white">
      <section className="text-center my-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-8 animate-fade-in-down">
          Cenários dos Cavaleiros do Zodíaco
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10">
          Explore os locais lendários e aventuras épicas do universo Saint Seiya.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {/* Doze Casas */}
          <Link href="/mapas/mapa-doze-casas">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
              <img
                src="/doze-casas/doze-casas.png"
                alt="Doze Casas"
                className="mx-auto w-20 h-20 mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold text-yellow-400">Doze Casas</h2>
              <p className="text-gray-300">
                Desafie os Cavaleiros de Ouro nas doze casas do Santuário.
              </p>
            </div>
          </Link>

          {/* Santuário */}
          <Link href="/santuario">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-blue-500 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
              <img
                src="/images/santuario.png"
                alt="Santuário"
                className="mx-auto w-20 h-20 mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold text-yellow-400">Santuário</h2>
              <p className="text-gray-300">
                O berço dos Cavaleiros, palco de batalhas épicas.
              </p>
            </div>
          </Link>

          {/* Asgard */}
          <Link href="/asgard">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-teal-500 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
              <img
                src="/images/asgard.png"
                alt="Asgard"
                className="mx-auto w-20 h-20 mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold text-yellow-400">Asgard</h2>
              <p className="text-gray-300">
                Enfrente os Guerreiros Deuses no gelado reino de Asgard.
              </p>
            </div>
          </Link>

          {/* Poseidon */}
          <Link href="/poseidon">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-indigo-500 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
              <img
                src="/images/poseidon.png"
                alt="Poseidon"
                className="mx-auto w-20 h-20 mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold text-yellow-400">Poseidon</h2>
              <p className="text-gray-300">
                Mergulhe nas profundezas e enfrente os Generais Marinas.
              </p>
            </div>
          </Link>

          {/* Hades */}
          <Link href="/hades">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-purple-700 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
              <img
                src="/images/hades.png"
                alt="Hades"
                className="mx-auto w-20 h-20 mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold text-yellow-400">Hades</h2>
              <p className="text-gray-300">
                Entre no mundo dos mortos e desafie Hades e seus Espectros.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
