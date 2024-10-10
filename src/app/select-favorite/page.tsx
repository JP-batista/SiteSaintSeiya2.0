// src/app/select-favorite/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { saveFavoriteCharacter } from '../utils/favoriteCharacter'; // Função utilitária para salvar o personagem favorito

export default function SelectFavoritePage() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const handleCharacterSelect = (character: string) => {
    setSelectedCharacter(character);
  };

  const handleSave = () => {
    if (selectedCharacter) {
      saveFavoriteCharacter(selectedCharacter);
      alert(`Personagem favorito salvo: ${selectedCharacter}`);
    }
  };

  const characters = [
    { name: 'Seiya de Pégaso', id: 'seiya', img: 'https://i.pinimg.com/originals/f4/78/66/f47866e3aa44f46a7857548f22526aa7.png' },
    { name: 'Shiryu de Dragão', id: 'shiryu', img: 'https://i.pinimg.com/originals/be/e9/8b/bee98b455b2807ce86f50051d52767c3.png' },
    { name: 'Hyoga de Cisne', id: 'hyoga', img: 'https://i.pinimg.com/originals/6c/52/e9/6c52e90d72b7d9aea6ca9cf6a95fd8f9.png' },
    { name: 'Shun de Andrômeda', id: 'shun', img: 'https://i.pinimg.com/originals/9e/00/38/9e0038c81ccb5e0f3b2a1b87d582bff9.png' },
    { name: 'Ikki de Fênix', id: 'ikki', img: 'https://i.pinimg.com/originals/94/48/b5/9448b5b75e63b786d0052bd8f1ce785f.png' },
    // Cavaleiros de Ouro
    { name: 'Mu de Áries', id: 'mu', img: 'https://i.pinimg.com/originals/4f/b7/7e/4fb77e504c8130965a1655fc8d44d446.png' },
    { name: 'Aldebaran de Touro', id: 'aldebaran', img: 'https://i.pinimg.com/originals/72/0b/bb/720bbb9fd518cb268d1306ec14c11df8.png' },
    { name: 'Saga de Gêmeos', id: 'saga', img: 'https://i.pinimg.com/originals/97/e1/ed/97e1ed20ee24b6c94b4e04f68dc61a54.png' },
    { name: 'Máscara da Morte de Câncer', id: 'deathmask', img: 'https://i.pinimg.com/originals/de/b3/a4/deb3a44da7eb95548da425b9570bdcf1.png' },
    { name: 'Aioria de Leão', id: 'aioria', img: 'https://i.pinimg.com/originals/83/7a/ef/837aef49ae60078b330f2237a2c015bd.png' },
    { name: 'Shaka de Virgem', id: 'shaka', img: 'https://i.pinimg.com/originals/34/28/fc/3428fcb213afe587d0f0f87a4b30497e.png' },
    { name: 'Dohko de Libra', id: 'dohko', img: 'https://i.pinimg.com/originals/70/aa/68/70aa6819992b62fb5126ed1846087e62.png' },
    { name: 'Milo de Escorpião', id: 'milo', img: 'https://i.pinimg.com/originals/2d/8b/cb/2d8bcb8cd34c286248fe48c747b78297.png' },
    { name: 'Aioros de Sagitário', id: 'aioros', img: 'https://i.pinimg.com/originals/22/25/bf/2225bff4a5b20f37b160cc767e55e9d6.png' },
    { name: 'Shura de Capricórnio', id: 'shura', img: 'https://i.pinimg.com/originals/6e/a8/2c/6ea82c57588a9ee51230ad61d9a10bc8.png' },
    { name: 'Camus de Aquário', id: 'camus', img: 'https://i.pinimg.com/originals/93/a4/dc/93a4dc1cc91a0e7e268357cf3d653eaf.png' },
    { name: 'Afrodite de Peixes', id: 'afrodite', img: 'https://i.pinimg.com/originals/9a/3a/6e/9a3a6e597f6ba0c21f796815da4dfbdc.png' },
  ];

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">
        Selecione seu Personagem Favorito
      </h1>

      {/* Grid de personagens disponíveis */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {characters.map((char) => (
          <div
            key={char.id}
            className={`p-6 rounded-lg shadow-lg cursor-pointer ${
              selectedCharacter === char.id ? 'bg-yellow-500' : 'bg-gray-800'
            }`}
            onClick={() => handleCharacterSelect(char.id)}
          >
            <img src={char.img} alt={char.name} className="w-auto h-auto object-cover mb-4" />
            <h3 className="text-2xl text-yellow-300 font-bold">{char.name}</h3>
          </div>
        ))}
      </div>

      {/* Botão para salvar o personagem favorito */}
      <div className="text-center mt-8">
        <button
          onClick={handleSave}
          className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300"
        >
          Salvar Personagem Favorito
        </button>
      </div>

      {/* Link para voltar à página inicial */}
      <div className="text-center mt-8">
        <Link href="/" className="text-yellow-400 hover:text-yellow-500">
          Voltar à Página Inicial
        </Link>
      </div>
    </div>
  );
}
