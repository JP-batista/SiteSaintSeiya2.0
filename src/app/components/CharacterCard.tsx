// src/app/characters/page.tsx

import Link from 'next/link';

const characters = [
  { name: 'Seiya de Pégaso', slug: 'seiya', description: 'Protagonista da série e Cavaleiro de Bronze de Pégaso.' },
  { name: 'Shiryu de Dragão', slug: 'shiryu', description: 'Cavaleiro de Dragão, conhecido por sua força e sabedoria.' },
  { name: 'Hyoga de Cisne', slug: 'hyoga', description: 'Cavaleiro de Cisne, mestre no controle do gelo.' },
  { name: 'Shun de Andrômeda', slug: 'shun', description: 'Cavaleiro de Andrômeda, caracterizado por sua bondade.' },
  { name: 'Ikki de Fênix', slug: 'ikki', description: 'Cavaleiro de Fênix, conhecido por seu poder de renascimento.' },
];

export default function CharactersPage() {
  return (
    <div>
      <h1 className="text-3xl text-yellow-400 mb-6">Personagens</h1>
      <ul className="space-y-4">
        {characters.map((char) => (
          <li key={char.slug} className="bg-gray-800 p-4 rounded shadow-md">
            <h2 className="text-2xl text-white">{char.name}</h2>
            <p className="text-gray-300">{char.description}</p>
            <Link href={`/characters/${char.slug}`} className="text-yellow-400 hover:text-yellow-500 mt-2 block">
              Leia mais
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
