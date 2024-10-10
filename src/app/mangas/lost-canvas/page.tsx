// src/app/mangas/lost-canvas/page.tsx

import Link from 'next/link';

export default function LostCanvasMangaPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">Lost Canvas</h1>
      <p className="text-gray-300 mb-8">
        A história da Guerra Santa anterior, com Tenma e Alone como os novos protagonistas. A saga retrata as batalhas contra Hades e seus espectros para salvar a humanidade.
      </p>
      <Link href="/mangas" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
        Voltar para Mangás
      </Link>
    </div>
  );
}
