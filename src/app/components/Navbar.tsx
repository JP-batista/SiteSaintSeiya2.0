// src/app/components/Navbar.tsx

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [favoriteCharacter, setFavoriteCharacter] = useState('Seiya');

  const handleCharacterChange = (character: string) => {
    setFavoriteCharacter(character);
    // Salvar a escolha no localStorage para persistência
    if (typeof window !== 'undefined') {
      localStorage.setItem('favoriteCharacter', character);
    }
  };

  return (
    <header className="bg-gray-900 bg-opacity-75 shadow-lg backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo menor para navegação */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="https://i.pinimg.com/originals/cf/38/b3/cf38b3ac9fc826e5e8b9c620f570fa4e.png"
              alt="Logo Os Cavaleiros do Zodíaco"
              className="w-28 h-auto mr-4 hover:scale-105 transition-transform duration-300"
            />
            <strong>Os Cavaleiros do Zodíaco </strong>
          </Link>
        </div>

        {/* Navegação */}
        <nav className="flex space-x-6 text-yellow-400 text-lg font-semibold">
          <Link href="/" className="hover:text-yellow-300 transition-colors duration-300">
            Home
          </Link>
          <Link href="/characters" className="hover:text-yellow-300 transition-colors duration-300">
            Personagens
          </Link>
          <Link href="/about" className="hover:text-yellow-300 transition-colors duration-300">
            Sobre
          </Link>
          <Link href="/login" className="hover:text-yellow-300 transition-colors duration-300">
            Login
          </Link>

          {/* Dropdown de Seleção de Personagem */}
          <div className="relative">
            <button className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
              Escolha seu Personagem Favorito
            </button>
            <div className="absolute mt-2 w-48 bg-gray-800 rounded-lg shadow-lg">
              <button
                className="block w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700"
                onClick={() => handleCharacterChange('Seiya')}
              >
                Seiya de Pégaso
              </button>
              <button
                className="block w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700"
                onClick={() => handleCharacterChange('Shiryu')}
              >
                Shiryu de Dragão
              </button>
              <button
                className="block w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700"
                onClick={() => handleCharacterChange('Hyoga')}
              >
                Hyoga de Cisne
              </button>
              <button
                className="block w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700"
                onClick={() => handleCharacterChange('Ikki')}
              >
                Ikki de Fênix
              </button>
              <button
                className="block w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700"
                onClick={() => handleCharacterChange('Shun')}
              >
                Shun de Andrômeda
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
