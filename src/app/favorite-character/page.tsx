// src/app/favorite-character/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function FavoriteCharacterPage() {
  const [favorite, setFavorite] = useState<string | null>(null);

  const characters = [
    { name: 'Seiya de Pégaso', img: 'https://i.pinimg.com/originals/f4/78/66/f47866e3aa44f46a7857548f22526aa7.png' },
    { name: 'Shiryu de Dragão', img: 'https://i.pinimg.com/originals/be/e9/8b/bee98b455b2807ce86f50051d52767c3.png' },
    { name: 'Hyoga de Cisne', img: 'https://i.pinimg.com/originals/6c/52/e9/6c52e90d72b7d9aea6ca9cf6a95fd8f9.png' },
    { name: 'Shun de Andrômeda', img: 'https://i.pinimg.com/originals/07/30/85/073085621672be8ad93084d4f33e358d.png' },
    { name: 'Ikki de Fênix', img: 'https://i.pinimg.com/originals/30/37/02/3037027d3457d7d29f929a0243089dc7.png' },
  ];

  const selectFavorite = (character: string) => {
    setFavorite(character);
    localStorage.setItem('favoriteCharacter', character);
  };

  return (
    <div className="min-h-screen p-8 bg-transparent text-white">
      <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Selecione seu Personagem Favorito</h1>

      {/* Grid de personagens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {characters.map((char) => (
          <div
            key={char.name}
            className={`p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ${
              favorite === char.name ? 'border-4 border-yellow-400' : 'border border-gray-500'
            }`}
            onClick={() => selectFavorite(char.name)}
          >
            <img src={char.img} alt={char.name} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl text-yellow-300 text-center">{char.name}</h3>
          </div>
        ))}
      </div>

      {/* Exibição do personagem selecionado e botão para voltar à página inicial */}
      {favorite && (
        <div className="text-center mt-8">
          <h2 className="text-2xl">Personagem Selecionado: {favorite}</h2>

          {/* Remover o <a> */}
          <Link
            href="/"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300 mt-4 inline-block"
          >
            Voltar à Página Inicial
          </Link>
        </div>
      )}
    </div>
  );
}
