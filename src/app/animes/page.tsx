// src/app/animes/page.tsx

import Link from 'next/link';

export default function MangasPage() {
  const mangas = [
    {
        name: 'Saga do Santuário',
        description: 'A primeira saga, onde os Cavaleiros de Bronze enfrentam os Cavaleiros de Ouro para salvar Atena.',
        image: '/images/saga-santuario.jpg',
        link: '/animes/santuario',
    },
    {
        name: 'Saga de Asgard',
        description: 'Os Cavaleiros enfrentam guerreiros deuses em Asgard para deter Hilda de Polaris e salvar o mundo.',
        image: '/images/saga-asgard.jpg',
        link: '/animes/asgard',
    },
    {
        name: 'Saga de Poseidon',
        description: 'Poseidon ressuscita e ameaça inundar o mundo. Os Cavaleiros de Bronze devem lutar em seu reino submerso.',
        image: '/images/saga-poseidon.jpg',
        link: '/animes/poseidon',
    },
    {
        name: 'Saga de Hades',
        description: 'Hades, o deus do submundo, volta para destruir Atena e seus Cavaleiros, culminando em batalhas épicas no submundo.',
        image: '/images/saga-hades.jpg',
        link: '/animes/hades',
    },
    {
        name: 'Lost Canvas',
        description: 'Conta a Guerra Santa anterior entre Hades e Atena, mostrando a origem dos Cavaleiros.',
        image: '/images/lost-canvas.jpg',
        link: '/animes/lost-canvas',
    },
    {
        name: 'Omega',
        description: 'Uma nova geração de Cavaleiros luta para proteger Atena e enfrentar novas ameaças.',
        image: '/images/omega.jpg',
        link: '/animes/omega',
    },
    {
        name: 'Soul of Gold',
        description: 'Os Cavaleiros de Ouro ressuscitam em Asgard para enfrentar uma nova ameaça ao lado de Atena.',
        image: '/images/soul-of-gold.jpg',
        link: '/animes/soul-of-gold',
    },
    {
        name: 'Saint Seiya - Os Cavaleiros do Zodíaco',
        description: 'A história clássica dos Cavaleiros do Zodíaco, com aventuras emocionantes e batalhas épicas.',
        image: '/images/cavaleiros-zodiaco.jpg',
        link: '/animes/classico',
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
