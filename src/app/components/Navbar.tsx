// src/app/components/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gray-900 bg-opacity-75 shadow-lg backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo menor para navegação */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="https://i.pinimg.com/originals/cf/38/b3/cf38b3ac9fc826e5e8b9c620f570fa4e.png"
              alt="Logo Os Cavaleiros do Zodíaco"
              className="w-20 h-auto mr-4 hover:scale-105 transition-transform duration-300"
            />
            <strong>Os Cavaleiros do Zodíaco </strong>
          </Link>
        </div>

        {/* Navegação */}
        <nav className="flex space-x-6 text-yellow-400 text-lg font-semibold">
          <Link href="/" className="hover:text-yellow-300 transition-colors duration-300">
            Home
          </Link>
          <Link href="/characters/bronze" className="hover:text-yellow-300 transition-colors duration-300">
            Cavaleiros de Bronze
          </Link>
          <Link href="/characters/gold" className="hover:text-yellow-300 transition-colors duration-300">
            Cavaleiros de Ouro
          </Link>
          <Link href="/about" className="hover:text-yellow-300 transition-colors duration-300">
            Sobre
          </Link>
          {/* Link para página de login */}
          <Link href="/login" className="hover:text-yellow-300 transition-colors duration-300">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
