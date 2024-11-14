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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-12 font-extrabold">Cavaleiros de Bronze</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Conheça os Cavaleiros de Bronze, os jovens guerreiros que lutam com suas habilidades únicas e determinação para proteger a deusa Atena.
          </p>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {bronzeCharacters.map((char) => (
            <li 
              key={char.slug} 
              className="bg-gray-800 bg-opacity-90 p-8 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50"
            >
              <div className="relative flex flex-col items-center text-center space-y-4">
                <img 
                  src={char.imgSrc} 
                  alt={char.name} 
                  className="w-32 h-56 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                />
                <div>
                  <h2 className="text-3xl text-yellow-400 font-bold">{char.name}</h2>
                  <p className="text-gray-300 mt-3">{char.description}</p>
                  <Link 
                    href={`/characters/bronze/${char.slug}`} 
                    className="mt-4 inline-block text-lg text-yellow-400 hover:text-yellow-500 font-semibold transition-colors duration-200"
                  >
                    Leia mais &rarr;
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <Link href="/characters">
            <a className="text-yellow-400 text-lg font-semibold hover:text-yellow-500 transition-colors duration-200">
              Voltar para Personagens
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
