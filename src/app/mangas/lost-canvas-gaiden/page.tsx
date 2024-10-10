// src/app/mangas/lost-canvas-gaiden/page.tsx

import Link from 'next/link';

export default function LostCanvasGaidenMangaPage() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">Lost Canvas Gaiden</h1>
      <p className="text-gray-300 mb-8">
        Uma série de histórias paralelas sobre os Cavaleiros de Ouro da saga Lost Canvas, mostrando suas aventuras e desafios.
      </p>
      <Link href="/mangas" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
        Voltar para Mangás
      </Link>
    </div>
  );
}
