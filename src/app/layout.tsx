'use client';
import { useState, useEffect } from 'react';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';  // Importando o Footer
import Header from './components/Header';
import { getFavoriteCharacter } from './utils/favoriteCharacter'; // Função utilitária para pegar o personagem favorito do localStorage

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('santuary');
  const [favoriteCharacter, setFavoriteCharacter] = useState<string | null>(null);

  useEffect(() => {
    // Recupera o personagem favorito do localStorage ao carregar a página
    const storedFavorite = getFavoriteCharacter();
    if (storedFavorite) {
      setFavoriteCharacter(storedFavorite);
      setTheme(storedFavorite); // Usa o nome do personagem para definir o tema baseado no personagem favorito
    }
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <html lang="pt-BR">
      <head>
        <title>Saint Seiya</title> {/* Adicionando o título da página */}
      </head>
      <body className={`${theme}`}>
        <Navbar onThemeChange={handleThemeChange} />
        <Header />
        <div className="container mx-auto p-4">
          {children}
        </div>
        <Footer /> {/* Incluindo o Footer aqui */}
      </body>
    </html>
  );
}
