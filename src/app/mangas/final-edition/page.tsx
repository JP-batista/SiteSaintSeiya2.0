// src/app/mangas/final-edition/page.tsx

import Link from 'next/link';

export default function FinalEditionMangaPage() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">Final Edition</h1>
      <p className="text-gray-300 mb-8">
        Uma edição especial que revisita a saga clássica com novas ilustrações e aprimoramentos, trazendo uma nova experiência para os fãs da série.
      </p>
      <Link href="/mangas" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
        Voltar para Mangás
      </Link>
    </div>
  );
}
