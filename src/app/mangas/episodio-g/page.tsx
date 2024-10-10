// src/app/mangas/episodio-g/page.tsx

import Link from 'next/link';

export default function EpisodioGMangaPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">Episódio G</h1>
      <p className="text-gray-300 mb-8">
        Focado nos Cavaleiros de Ouro, este mangá traz novas histórias e batalhas épicas, com destaque para o cavaleiro Aioria de Leão.
      </p>
      <Link href="/mangas" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
        Voltar para Mangás
      </Link>
    </div>
  );
}
