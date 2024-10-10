// src/app/mangas/next-dimension/page.tsx

import Link from 'next/link';

export default function NextDimensionMangaPage() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">Next Dimension</h1>
      <p className="text-gray-300 mb-8">
        A continuação direta do mangá clássico, explorando o retorno de Hades e novos desafios para Seiya e os outros cavaleiros de Atena.
      </p>
      <Link href="/mangas" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
        Voltar para Mangás
      </Link>
    </div>
  );
}
