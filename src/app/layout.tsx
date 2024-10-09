// src/app/layout.tsx

import './styles/globals.css';
import Navbar from './components/Navbar';
import Header from './components/Header'; // Importando o Header

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white font-sans">
        {/* A barra de navegação vem primeiro */}
        <Navbar />
        {/* Agora o Header com a logo vem abaixo da barra de navegação */}
        <Header />
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
