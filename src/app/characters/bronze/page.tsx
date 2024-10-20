// src/app/characters/bronze/page.tsx

import Link from 'next/link';

const bronzeCharacters = [
  { name: 'Seiya de Pégaso', slug: 'seiya', description: 'Protagonista da série e Cavaleiro de Bronze de Pégaso.', imgSrc: '/Tags/TagPegasus.png' },
  { name: 'Shiryu de Dragão', slug: 'shiryu', description: 'Cavaleiro de Dragão, conhecido por sua força e sabedoria.', imgSrc: '/Tags/TagDragao.png' },
  { name: 'Hyoga de Cisne', slug: 'hyoga', description: 'Cavaleiro de Cisne, mestre no controle do gelo.', imgSrc: '/Tags/TagCisne.png' },
  { name: 'Shun de Andrômeda', slug: 'shun', description: 'Cavaleiro de Andrômeda, caracterizado por sua bondade.', imgSrc: '/Tags/TagAndromeda.png' },
  { name: 'Ikki de Fênix', slug: 'ikki', description: 'Cavaleiro de Fênix, conhecido por seu poder de renascimento.', imgSrc: '/Tags/TagFenix.png' },
];

export default function BronzeCharactersPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Cavaleiros de Bronze</h1>
      </div>
      <ul className="space-y-4">
        {bronzeCharacters.map((char) => (
          <li key={char.slug} className="bg-gray-900 bg-opacity-80 p-8 rounded-3xl shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50 flex items-center">
            <img src={char.imgSrc} alt={char.name} className="w-32 h-56 object-cover rounded-lg mr-4" />
            <div>
              <h2 className="text-2xl text-white font-bold">{char.name}</h2>
              <p className="text-gray-300 mt-2">{char.description}</p>
              <Link href={`/characters/bronze/${char.slug}`} className="text-yellow-400 hover:text-yellow-500 mt-4 block">
                Leia mais
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-yellow-400 mt-6 text-center">
        <Link href="/characters" className="hover:text-yellow-500">Voltar para Personagens</Link>
      </p>
    </div>
  );
}
