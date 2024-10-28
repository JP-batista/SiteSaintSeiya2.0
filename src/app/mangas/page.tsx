// src/app/mangas/page.tsx

import Link from 'next/link';

export default function MangasPage() {
  const mangas = [
    {
      name: 'Cavaleiros do Zodíaco (Clássico)',
      description: 'O mangá clássico que deu origem à saga, acompanhando Seiya e os outros Cavaleiros de Bronze em suas aventuras.',
      image: '/capasMangaClassicoTanko/1.jpg',
      link: '/mangas/classico',
    },
    {
      name: 'Lost Canvas',
      description: 'A história da Guerra Santa anterior, com Tenma e Alone como os novos protagonistas.',
      image: '/capasLostCanvas/1.jpg',
      link: '/mangas/lost-canvas',
    },
    {
      name: 'Next Dimension',
      description: 'A continuação direta do mangá clássico, explorando o retorno de Hades e novos desafios para Seiya.',
      image: 'https://m.media-amazon.com/images/I/71C6FJFg1QL._AC_UF1000,1000_QL80_.jpg',
      link: '/mangas/next-dimension',
    },
    {
      name: 'Episódio G',
      description: 'Focado nos Cavaleiros de Ouro, este mangá traz novas histórias e batalhas épicas.',
      image: 'https://www.newpop.com.br/wp-content/uploads/2022/03/NewPOP_CDZ_G01.jpg',
      link: '/mangas/episodio-g',
    },
    {
      name: 'Lost Canvas Gaiden',
      description: 'Uma série de histórias paralelas sobre os Cavaleiros de Ouro da saga Lost Canvas.',
      image: 'https://www.jbchost.com.br/editorajbc/wp-content/uploads/2022/10/lost-canvas-gaiden-01-capa-p.jpg',
      link: '/mangas/lost-canvas-gaiden',
    },
    {
      name: 'Cavaleiros do Zodíaco (Kanzenban)',
      description: 'O mangá clássico que deu origem à saga, acompanhando Seiya e os outros Cavaleiros de Bronze em suas aventuras.',
      image: '/capasMangaClassicoKanzenban/1.jpg',
      link: '/mangas/Kanzenban',
    },
    {
      name: 'Final Edition',
      description: 'Uma edição especial que revisita a saga clássica com novas ilustrações e aprimoramentos.',
      image: 'https://i.pinimg.com/originals/5b/de/e7/5bdee71ecc539509d242cb9ecfa9fa14.jpg',
      link: '/mangas/final-edition',
    },
  ];

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">Mangás dos Cavaleiros do Zodíaco</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mangas.map((manga) => (
          <div key={manga.name} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src={manga.image} alt={manga.name} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">{manga.name}</h3>
            <p className="text-gray-300 mb-4">{manga.description}</p>
            <Link href={manga.link} className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Ver Mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
