// src/app/characters/bronze/page.tsx

import Link from 'next/link';

const bronzeCharacters = [
  { name: 'Seiya de Pégaso', slug: 'seiya', description: 'Protagonista da série e Cavaleiro de Bronze de Pégaso.', imgSrc: 'https://i.pinimg.com/originals/f4/78/66/f47866e3aa44f46a7857548f22526aa7.png' },
  { name: 'Shiryu de Dragão', slug: 'shiryu', description: 'Cavaleiro de Dragão, conhecido por sua força e sabedoria.', imgSrc: 'https://i.pinimg.com/originals/be/e9/8b/bee98b455b2807ce86f50051d52767c3.png' },
  { name: 'Hyoga de Cisne', slug: 'hyoga', description: 'Cavaleiro de Cisne, mestre no controle do gelo.', imgSrc: 'https://i.pinimg.com/originals/6c/52/e9/6c52e90d72b7d9aea6ca9cf6a95fd8f9.png' },
  { name: 'Shun de Andrômeda', slug: 'shun', description: 'Cavaleiro de Andrômeda, caracterizado por sua bondade.', imgSrc: 'https://i.pinimg.com/originals/9e/00/38/9e0038c81ccb5e0f3b2a1b87d582bff9.png' },
  { name: 'Ikki de Fênix', slug: 'ikki', description: 'Cavaleiro de Fênix, conhecido por seu poder de renascimento.', imgSrc: 'https://i.pinimg.com/originals/94/48/b5/9448b5b75e63b786d0052bd8f1ce785f.png' },
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
