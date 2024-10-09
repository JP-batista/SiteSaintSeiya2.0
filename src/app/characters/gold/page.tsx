// src/app/characters/gold/page.tsx

import Link from 'next/link';

const goldCharacters = [
  { name: 'Mu de Áries', slug: 'aries', description: 'Cavaleiro de Ouro de Áries, guardião da primeira casa do zodíaco.', imgSrc: 'https://i.pinimg.com/originals/4f/b7/7e/4fb77e504c8130965a1655fc8d44d446.png' },
  { name: 'Aldebaran de Touro', slug: 'touro', description: 'Cavaleiro de Ouro de Touro, conhecido por sua imensa força física.', imgSrc: 'https://i.pinimg.com/originals/72/0b/bb/720bbb9fd518cb268d1306ec14c11df8.png' },
  { name: 'Saga de Gêmeos', slug: 'gemeos', description: 'Cavaleiro de Ouro de Gêmeos, dotado de uma personalidade dual e imensa sabedoria.', imgSrc: 'https://i.pinimg.com/originals/97/e1/ed/97e1ed20ee24b6c94b4e04f68dc61a54.png' },
  { name: 'Máscara da Morte de Câncer', slug: 'cancer', description: 'Cavaleiro de Ouro de Câncer, impiedoso e poderoso.', imgSrc: 'https://i.pinimg.com/originals/de/b3/a4/deb3a44da7eb95548da425b9570bdcf1.png' },
  { name: 'Aiolia de Leão', slug: 'leao', description: 'Cavaleiro de Ouro de Leão, conhecido por sua coragem e bravura.', imgSrc: 'https://i.pinimg.com/originals/83/7a/ef/837aef49ae60078b330f2237a2c015bd.png' },
  { name: 'Shaka de Virgem', slug: 'virgem', description: 'Cavaleiro de Ouro de Virgem, considerado o homem mais próximo de Deus.', imgSrc: 'https://i.pinimg.com/originals/34/28/fc/3428fcb213afe587d0f0f87a4b30497e.png' },
  { name: 'Dohko de Libra', slug: 'libra', description: 'Cavaleiro de Ouro de Libra, guardião da balança da justiça.', imgSrc: 'https://i.pinimg.com/originals/70/aa/68/70aa6819992b62fb5126ed1846087e62.png' },
  { name: 'Milo de Escorpião', slug: 'escorpiao', description: 'Cavaleiro de Ouro de Escorpião, conhecido por seu veneno mortal.', imgSrc: 'https://i.pinimg.com/originals/2d/8b/cb/2d8bcb8cd34c286248fe48c747b78297.png' },
  { name: 'Aiolos de Sagitário', slug: 'sagitario', description: 'Cavaleiro de Ouro de Sagitário, protetor lendário de Atena.', imgSrc: 'https://i.pinimg.com/originals/22/25/bf/2225bff4a5b20f37b160cc767e55e9d6.png' },
  { name: 'Shura de Capricórnio', slug: 'capricornio', description: 'Cavaleiro de Ouro de Capricórnio, mestre no uso da espada sagrada Excalibur.', imgSrc: 'https://i.pinimg.com/originals/6e/a8/2c/6ea82c57588a9ee51230ad61d9a10bc8.png' },
  { name: 'Camus de Aquário', slug: 'aquario', description: 'Cavaleiro de Ouro de Aquário, mestre no controle do gelo.', imgSrc: 'https://i.pinimg.com/originals/93/a4/dc/93a4dc1cc91a0e7e268357cf3d653eaf.png' },
  { name: 'Afrodite de Peixes', slug: 'peixes', description: 'Cavaleiro de Ouro de Peixes, dono de uma beleza mortal.', imgSrc: 'https://i.pinimg.com/originals/9a/3a/6e/9a3a6e597f6ba0c21f796815da4dfbdc.png' },
];

export default function GoldCharactersPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Cavaleiros de Ouro</h1>
      </div>
      <ul className="space-y-4">
        {goldCharacters.map((char) => (
          <li key={char.slug} className="bg-gray-900 bg-opacity-80 p-8 rounded-3xl shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50 flex items-center">
            <img src={char.imgSrc} alt={char.name} className="w-32 h-56 object-cover rounded-lg mr-4" />
            <div>
              <h2 className="text-2xl text-white font-bold">{char.name}</h2>
              <p className="text-gray-300 mt-2">{char.description}</p>
              <Link href={`/characters/gold/${char.slug}`} className="text-yellow-400 hover:text-yellow-500 mt-4 block">
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
