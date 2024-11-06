import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Navbar({ onThemeChange }: { onThemeChange: (theme: string) => void }) {
  const themes = ['santuary', 'ruinas', 'asgard', 'relogio'];
  const [currentTheme, setCurrentTheme] = useState('santuary');
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Estado para o dropdown de explorar mais
  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para o menu mobile
  const [isThemeDropdownOpen, setThemeDropdownOpen] = useState(false); // Estado para o dropdown de temas
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null); // Referência para o temporizador

  // Função para selecionar o tema e fechar o dropdown ao clicar
  const selectTheme = (theme: string) => {
    setCurrentTheme(theme);
    onThemeChange(theme);
    setThemeDropdownOpen(false); // Fecha o dropdown ao selecionar
  };

  // Abre o dropdown quando o mouse entra
  const handleThemeMouseEnter = () => {
    setThemeDropdownOpen(true);
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current); // Cancela o temporizador se o mouse entrar novamente
    }
  };

  // Fecha o dropdown quando o mouse sai com um pequeno atraso
  const handleThemeMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setThemeDropdownOpen(false);
    }, 200); // Atraso de 200ms para fechar o dropdown
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 100);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 bg-opacity-75 shadow-lg backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center" aria-label="Logo Os Cavaleiros do Zodíaco">
            <img
              src="/spinners/zodiac-wheel/zodiac-wheel-spinner-white.gif"
              alt="Logo Os Cavaleiros do Zodíaco"
              className="w-16 h-auto mr-2 hover:scale-105 transition-transform duration-300"
            />
            <strong className="text-lg md:text-2xl text-white">Os Cavaleiros do Zodíaco</strong>
          </Link>
        </div>

        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-yellow-400 focus:outline-none" aria-label="Menu">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        <nav className={`md:flex md:space-x-6 text-yellow-400 text-lg font-semibold ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300" aria-label="Home">Home</Link>
          <Link href="/characters" className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300" aria-label="Personagens">Personagens</Link>
          <Link href="/about" className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300" aria-label="Sobre">Sobre</Link>
          <Link href="/hipermito" className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300" aria-label="Hipermito">Hipermito</Link>

          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300" aria-label="Explorar Mais">
              Explorar Mais
            </button>
            <div
              className={`absolute top-full mt-2 w-48 bg-gray-900 shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
                isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <Link href="/mangas" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Mangás">Mangás</Link>
              <Link href="/animes" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Mangás">Anime</Link>
              <Link href="/soundtrack" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Trilha Sonora">Trilha Sonora</Link>
              <Link href="/videos/battle-videos" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Vídeos de Batalhas">Vídeos de Batalhas</Link>
              <Link href="/timeline" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Linha do Tempo">Linha do Tempo</Link>
              <Link href="/quiz" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Quiz">Quiz</Link>
              <Link href="/videos/lost-canvas" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Lost Canvas">Lost Canvas</Link>
              <Link href="/galeria" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Minha Galeria">Minha Galeria</Link>
              <Link href="/game" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="DLE Saint Seiya">DLE Saint Seiya</Link>
              <Link href="/teste" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Teste">Teste</Link>
            </div>
          </div>
          <Link href="/login" className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300" aria-label="Login">Login</Link>
        </nav>

        {/* Dropdown para seleção de temas */}
        <div
          className="relative hidden md:block"
          onMouseEnter={handleThemeMouseEnter}
          onMouseLeave={handleThemeMouseLeave}
        >
          <button
            className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
            aria-label="Escolher Tema"
          >
            Escolher Tema
          </button>

          {isThemeDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 shadow-lg rounded-lg">
              {themes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => selectTheme(theme)}
                  className={`block w-full text-left px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300 transition-colors duration-300 ${
                    currentTheme === theme ? 'bg-gray-800' : ''
                  }`}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 p-4 space-y-2">
          <Link href="/mangas" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Mangás">Mangás</Link>
          <Link href="/animes" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Mangás">Animes</Link>
          <Link href="/soundtrack" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Trilha Sonora">Trilha Sonora</Link>
          <Link href="/videos/battle-videos" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Vídeos de Batalhas">Vídeos de Batalhas</Link>
          <Link href="/timeline" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Linha do Tempo">Linha do Tempo</Link>
          <Link href="/quiz" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Quiz">Quiz</Link>
          <Link href="/videos/lost-canvas" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Lost Canvas">Lost Canvas</Link>
          <Link href="/galeria" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Minha Galeria">Minha Galeria</Link>
          <Link href="/hipermito" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Hipermito">Hipermito</Link>

          {/* Dropdown de temas no menu mobile */}
          <button
            onClick={() => setThemeDropdownOpen(!isThemeDropdownOpen)}
            className="w-full bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 mt-4"
            aria-label="Escolher Tema"
          >
            Escolher Tema
          </button>

          {isThemeDropdownOpen && (
            <div className="mt-2 w-full bg-gray-900 shadow-lg rounded-lg">
              {themes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => selectTheme(theme)}
                  className={`block w-full text-left px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300 transition-colors duration-300 ${
                    currentTheme === theme ? 'bg-gray-800' : ''
                  }`}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </button>
              ))}
            </div>
          )}
        </nav>
      )}
    </header>
  );
}