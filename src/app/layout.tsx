// src/app/layout.tsx

"use client"; // Adiciona esta linha para indicar que o componente é um Client Component

import { useState, useEffect } from 'react'; // useState e useEffect são válidos apenas em Client Components
import './styles/globals.css';
import Navbar from './components/Navbar';
import Header from './components/Header'; // Importando o Header

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('santuary'); // Estado para o tema

  // Carrega o tema salvo no localStorage (opcional)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Função para alternar temas e salvar no localStorage
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <html lang="pt-BR">
      <body className={`${theme} bg-gray-900 text-white font-sans`}>
        {/* Navbar com controle de tema */}
        <Navbar onThemeChange={handleThemeChange} />
        {/* Header com a logo */}
        <Header />
        {/* Conteúdo da página */}
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
