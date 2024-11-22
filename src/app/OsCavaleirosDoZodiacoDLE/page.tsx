"use client";

import React from "react";
import Link from "next/link";

export default function GameSelectionPage() {
  const games = [
    {
      name: "Clássico",
      description: "Consiga pistas a cada tentativa",
      icon: "/dle_feed/classic_icon.png",
      link: "/SaintSeiyaDLE/classico",
    },
    {
      name: "Quiz",
      description: "Teste seus conhecimentos",
      icon: "/dle_feed/quiz_icon.png",
      link: "/SaintSeiyaDLE/quiz",
    },
    {
      name: "Afinidade",
      description: "Descubra seu Cavaleiro Compatível",
      icon: "/dle_feed/affinity_icon.png",
      link: "/SaintSeiyaDLE/affinity",
    },
    {
      name: "Silhuetas",
      description: "Adivinhe pela silhueta",
      icon: "/dle_feed/silhouette_icon.png",
      link: "/SaintSeiyaDLE/silhueta",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
      {/* Logo */}
      <div className="flex justify-center items-center mb-8">
        <img
          src="/dle_feed/logo_dle.png"
          alt="Logo Os Cavaleiros do Zodíaco"
          className="w-auto h-52 hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="w-[380px] bg-gray-800 text-white rounded-xl shadow-lg p-4 mb-8">
        <h3 className="text-xl font-bold text-center text-yellow-400 group-hover:text-yellow-300">
            Adivinha os personagens de <br /> Os Cavaleiros do Zodíaco
        </h3>
      </div>

      {/* Lista de Jogos */}
      <div className="flex flex-col items-center space-y-6">
        {games.map((game, index) => (
          <Link key={index} href={game.link}>
            <div className="flex items-center space-x-4 cursor-pointer group w-[380px]">
              {/* Ícone do Jogo */}
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700 shadow-lg group-hover:border-yellow-500 transition duration-300">
                <img
                  src={game.icon}
                  alt={game.name}
                  className="w-22 h-22 object-contain"
                />
              </div>

              {/* Detalhes do Jogo */}
              <div className="bg-gray-800 border-2 border-gray-700 p-4 rounded-lg shadow-lg flex-1 group-hover:border-yellow-500 transition duration-300 h-20 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300">
                  {game.name}
                </h3>
                <p className="text-gray-300 text-sm">{game.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
