// src/app/characters/shiryu/page.tsx

import Link from 'next/link';

export default function ShiryuProfile() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-green-400 mb-8">Shiryu de Dragão</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://i.pinimg.com/originals/89/28/fd/8928fdb630f704cd5aa299b26cdf6468.png"
          alt="Shiryu de Dragão"
          className="w-auto h-auto rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Informações Básicas</h2>
          <p><strong>Nome:</strong> Shiryu</p>
          <p><strong>Constelação:</strong> Dragão</p>
          <p><strong>Armadura:</strong> Armadura de Bronze de Dragão</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Habilidades</h2>
          <p>Shiryu é conhecido pela sua poderosa técnica "Cólera do Dragão" e pela defesa suprema de seu escudo.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">História</h2>
          <p>Shiryu é o Cavaleiro de Dragão, um dos mais leais a Atena. Ele é conhecido por sua sabedoria e força, além de sua amizade com Seiya.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Principais Batalhas</h2>
          <ul>
            <li>Batalha contra Máscara da Morte de Câncer</li>
            <li>Batalha nas 12 casas</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">Armaduras</h2>
          <ul>
            <li>Armadura de Bronze de Dragão</li>
            <li>Armadura Divina de Dragão</li>
          </ul>
        </div>
      </div>

      {/* Galeria de Imagens */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/cloth-schemes/athena-saints/draco-shiryu-1-anime.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/draco-shiryu-3-anime.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/draco-shiryu-3-gold-anime.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/draco-shiryu-4-anime.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/draco-shiryu-1.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/draco-shiryu-2.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/draco-shiryu-3.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/draco-shiryu-4.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/draco-shiryu-god.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/draco-shiryu-god-anime.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/draco-shiryu-1-time-odyssey.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/draco-shiryu-2-time-odyssey.jpg" alt="Shiryu" className="w-auto h-auto rounded-lg" />
        </div>
      </div>

      {/* Rede de Relacionamentos */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Rede de Relacionamentos</h2>
        <p><strong>Amigos:</strong> Seiya, Hyoga, Shun, Ikki</p>
        <p><strong>Mentor:</strong> Mestre Ancião</p>
      </div>

      <div className="text-center mt-10">
        <Link href="/characters/bronze" className="bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
          Voltar Para Personagens
        </Link>
      </div>
    </div>
  );
}
