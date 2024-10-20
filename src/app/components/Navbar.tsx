import { useState, useRef } from 'react'; // Importar o hook useState e useRef
import Link from 'next/link';

export default function Navbar({ onThemeChange }: { onThemeChange: (theme: string) => void }) {
  const themes = ['santuary', 'ruinas', 'asgard', 'relogio',];
  const [currentTheme, setCurrentTheme] = useState('santuary');
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar o dropdown
  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para o menu mobile
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null); // Referência para o temporizador

  const toggleTheme = () => {
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    setCurrentTheme(nextTheme);
    onThemeChange(nextTheme);
  };

  // Função para fechar o dropdown após 2 segundos se o mouse sair
  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 100); // 2000 ms = 2 segundos
  };

  // Função para abrir o dropdown quando o mouse entrar
  const handleMouseEnter = () => {
    setDropdownOpen(true); // Abre o dropdown imediatamente quando o mouse entra
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current); // Cancela o temporizador se o mouse voltar
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Alterna a visibilidade do menu no mobile
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
            <strong className="text-lg md:text-2xl">Os Cavaleiros do Zodíaco</strong>
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
              <Link href="/soundtrack" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Trilha Sonora">Trilha Sonora</Link>
              <Link href="/videos/battle-videos" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Vídeos de Batalhas">Vídeos de Batalhas</Link>
              <Link href="/timeline" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Linha do Tempo">Linha do Tempo</Link>
              <Link href="/quiz" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Quiz">Quiz</Link>
              <Link href="/videos/lost-canvas" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Lost Canvas">Lost Canvas</Link>
              <Link href="/galeria" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="Minha Galeria">Minha Galeria</Link>
              <Link href="/game" className="block px-4 py-2 text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" aria-label="DLE Saint Seiya">DLE Saint Seiya</Link>
            </div>
          </div>
          <Link href="/login" className="block py-2 md:py-0 hover:text-yellow-300 transition-colors duration-300" aria-label="Login">Login</Link>
        </nav>

        <button
          onClick={toggleTheme}
          className="hidden md:block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
          aria-label={`Trocar para ${themes[(themes.indexOf(currentTheme) + 1) % themes.length].charAt(0).toUpperCase() + themes[(themes.indexOf(currentTheme) + 1) % themes.length].slice(1)}`}
        >
          Trocar para {themes[(themes.indexOf(currentTheme) + 1) % themes.length].charAt(0).toUpperCase() + themes[(themes.indexOf(currentTheme) + 1) % themes.length].slice(1)}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 p-4 space-y-2">
          <Link href="/mangas" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Mangás">Mangás</Link>
          <Link href="/soundtrack" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Trilha Sonora">Trilha Sonora</Link>
          <Link href="/videos/battle-videos" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Vídeos de Batalhas">Vídeos de Batalhas</Link>
          <Link href="/timeline" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Linha do Tempo">Linha do Tempo</Link>
          <Link href="/quiz" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Quiz">Quiz</Link>
          <Link href="/videos/lost-canvas" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Lost Canvas">Lost Canvas</Link>
          <Link href="/galeria" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Minha Galeria">Minha Galeria</Link>
          <Link href="/hipermito" className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" aria-label="Hipermito">Hipermito</Link>
          <button
            onClick={toggleTheme}
            className="w-full bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 mt-4"
            aria-label={`Trocar para ${themes[(themes.indexOf(currentTheme) + 1) % themes.length].charAt(0).toUpperCase() + themes[(themes.indexOf(currentTheme) + 1) % themes.length].slice(1)}`}
          >
            Trocar para {themes[(themes.indexOf(currentTheme) + 1) % themes.length].charAt(0).toUpperCase() + themes[(themes.indexOf(currentTheme) + 1) % themes.length].slice(1)}
          </button>
        </nav>
      )}
    </header>
  );
}


