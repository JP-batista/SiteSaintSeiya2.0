// src/app/encyclopedia/page.tsx

import Link from 'next/link';

const characters = [
  {
    name: 'Seiya de Pégaso',
    img: 'https://i.pinimg.com/originals/f4/78/66/f47866e3aa44f46a7857548f22526aa7.png',
    link: '/encyclopedia/seiya'
  },
  {
    name: 'Shiryu de Dragão',
    img: 'https://i.pinimg.com/originals/be/e9/8b/bee98b455b2807ce86f50051d52767c3.png',
    link: '/encyclopedia/shiryu'
  },
  // Adicione mais personagens aqui
];

export default function EncyclopediaPage() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Enciclopédia de Personagens</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {characters.map((character, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <img src={character.img} alt={character.name} className="w-48 h-auto object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl text-yellow-300 font-bold">{character.name}</h3>
            <Link href={character.link} className="mt-4 block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-600 transition-colors duration-300">
              Ver Perfil
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
