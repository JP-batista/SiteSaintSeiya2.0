// src/app/mangas/page.tsx

import Link from 'next/link';

export default function MangasPage() {
  const mangas = [
    {
      name: 'Cavaleiros do Zodíaco',
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
      name: 'Kanzenban',
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
      <h1 className="text-5xl font-extrabold text-center text-yellow-400 mb-12">Mangás dos Cavaleiros do Zodíaco</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {mangas.map((manga) => (
          <div key={manga.name} className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-gray-700 hover:border-yellow-500 transform transition-all duration-300 hover:scale-105 bg-gray-900">
            <div className="p-6 bg-gradient-to-t from-gray-800 via-gray-900 to-transparent text-center">
              <img src={manga.image} alt={manga.name} className="mx-auto rounded-lg mb-4" style={{ maxHeight: '400px', width: 'auto' }} />
              <h3 className="text-3xl font-bold text-yellow-300 mb-3">{manga.name}</h3>
              <p className="text-gray-300 mb-6 text-sm">{manga.description}</p>
              <Link href={manga.link}>
                <button className="w-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transform transition-transform duration-300">
                  Ver Mais
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
