// src/app/mangas/classico/page.tsx

import Link from 'next/link';

export default function ClassicoMangaPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">Cavaleiros do Zodíaco (Clássico)</h1>
      <p className="text-gray-300 mb-8">
        O mangá clássico que deu origem à saga, acompanhando Seiya e os outros Cavaleiros de Bronze em suas aventuras para proteger a deusa Atena e salvar o mundo.
      </p>
      <Link href="/mangas" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
        Voltar para Mangás
      </Link>
    </div>
  );
}
