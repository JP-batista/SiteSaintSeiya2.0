'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Importando usePathname do next/navigation
import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import { getFavoriteCharacter } from './utils/favoriteCharacter';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('santuary');
  const [favoriteCharacter, setFavoriteCharacter] = useState<string | null>(null);
  const pathname = usePathname(); // Usando usePathname para obter o caminho atual

  useEffect(() => {
    const storedFavorite = getFavoriteCharacter();
    if (storedFavorite) {
      setFavoriteCharacter(storedFavorite);
      setTheme(storedFavorite);
    }
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <html lang="pt-BR">
      <head>
        <title>Saint Seiya</title>
      </head>
      <body className={`${theme}`}>
        {/* Navbar é exibido em todas as páginas */}
        {pathname !== '/login' && pathname !== '/login/signin' && pathname !== '/login/signup' && <Navbar onThemeChange={handleThemeChange} />}
        {/* Header e Footer serão exibidos apenas se a rota não for "/soundtrack" */}
        {pathname !== '/soundtrack' && pathname !== '/game' && pathname !== '/login' && pathname !== '/login/signin' && pathname !== '/login/signup' && <Header />}
        <div className="container mx-auto p-4">
          {children}
        </div>
        {pathname !== '/soundtrack' && pathname !== '/login' && pathname !== '/login/signin' && pathname !== '/login/signup' && <Footer />}
      </body>
    </html>
  );
}