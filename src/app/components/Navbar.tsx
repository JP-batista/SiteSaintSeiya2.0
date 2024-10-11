// src/app/components/Navbar.tsx

import { useState } from 'react'; // Importar o hook useState
import Link from 'next/link';

export default function Navbar({ onThemeChange }: { onThemeChange: (theme: string) => void }) {
  const themes = ['santuary', 'asgard', 'poseidon', 'hades'];
  const [currentTheme, setCurrentTheme] = useState('santuary');
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar a expansão do dropdown
  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para o menu mobile

  const toggleTheme = () => {
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    setCurrentTheme(nextTheme);
    onThemeChange(nextTheme);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true); // Abre o dropdown ao passar o mouse por cima
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false); // Fecha o dropdown ao tirar o mouse de cima
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Alterna a visibilidade do menu no mobile
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
            <strong>Os Cavaleiros do Zodíaco</strong>
          </Link>
        </div>

        {/* Menu de Hambúrguer para telas pequenas */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-yellow-400 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Navegação principal */}
        <nav className={`md:flex md:space-x-6 text-yellow-400 text-lg font-semibold ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300">
            Home
          </Link>
          <Link href="/characters" className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300">
            Personagens
          </Link>
          <Link href="/about" className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300">
            Sobre
          </Link>
          <Link href="/login" className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300">
            Login
          </Link>
          <Link href="/products" className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300">
            Produtos
          </Link>

          {/* Dropdown Menu - Abre ao passar o mouse */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300">
              Explorar Mais
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-48 bg-gray-900 shadow-lg rounded-lg">
                <Link href="/mangas" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300">
                  Mangás
                </Link>
                <Link href="/soundtrack" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300">
                  Trilha Sonora
                </Link>
                <Link href="/videos/battle-videos" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300">
                  Vídeos de Batalhas
                </Link>
                <Link href="/timeline" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300">
                  Linha do Tempo
                </Link>
                <Link href="/quiz" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300">
                  Quiz
                </Link>
                <Link href="/videos/lost-canvas" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300">
                  Lost Canvas
                </Link>
                <Link href="/galeria" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300">
                  Minha Galeria
                </Link>
                <Link href="/hipermito" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300">
                  Hipermito
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Botão de troca de tema */}
        <button
          onClick={toggleTheme}
          className="hidden md:block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
        >
          Trocar para {themes[(themes.indexOf(currentTheme) + 1) % themes.length].charAt(0).toUpperCase() +
            themes[(themes.indexOf(currentTheme) + 1) % themes.length].slice(1)}
        </button>
      </div>

      {/* Menu de navegação que abre no mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 p-4">
          <Link href="/" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Home
          </Link>
          <Link href="/characters" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Personagens
          </Link>
          <Link href="/about" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Sobre
          </Link>
          <Link href="/login" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Login
          </Link>
          <Link href="/products" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Produtos
          </Link>
          <Link href="/mangas" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Mangás
          </Link>
          <Link href="/soundtrack" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Trilha Sonora
          </Link>
          <Link href="/videos/battle-videos" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Vídeos de Batalhas
          </Link>
          <Link href="/timeline" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Linha do Tempo
          </Link>
          <Link href="/quiz" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Quiz
          </Link>
          <Link href="/videos/lost-canvas" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Lost Canvas
          </Link>
          <Link href="/galeria" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Minha Galeria
          </Link>
          <Link href="/hipermito" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Hipermito
          </Link>
        </nav>
      )}
    </header>
  );
}
