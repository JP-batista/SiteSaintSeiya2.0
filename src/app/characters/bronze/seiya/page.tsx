// src/app/characters/seiya/page.tsx

import Link from 'next/link';

export default function SeiyaProfile() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-8">Seiya de Pégaso</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://i.pinimg.com/originals/e7/a7/9a/e7a79aae3e7da79a966a957c1229f710.png"
          alt="Seiya de Pégaso"
          className="w-full h-auto rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Informações Básicas</h2>
          <p><strong>Nome:</strong> Seiya</p>
          <p><strong>Constelação:</strong> Pégaso</p>
          <p><strong>Armadura:</strong> Armadura de Bronze de Pégaso</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">Habilidades</h2>
          <p>Seiya é conhecido por sua técnica "Meteoro de Pégaso", onde lança centenas de golpes de uma só vez.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">História</h2>
          <p>Seiya é o Cavaleiro de Pégaso e protagonista da série. Ele é um guerreiro destemido que está sempre pronto para proteger Atena e enfrentar qualquer desafio.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Principais Batalhas</h2>
          <ul>
            <li>Batalha contra Ikki de Fênix</li>
            <li>Batalha nas 12 casas</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">Armaduras</h2>
          <ul>
            <li>Armadura de Bronze de Pégaso</li>
            <li>Armadura Divina de Pégaso</li>
          </ul>
        </div>
      </div>

      {/* Galeria de Imagens */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-1-anime.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-1-time-odyssey.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-1.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-2-time-odyssey.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-2.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-3.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-4-anime.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-4-gold-anime.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-4.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-5-anime.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-5.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-god-anime.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-god.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/pegasus-seiya-miracles.jpg" alt="Seiya" className="w-auto h-auto rounded-lg" />
        </div>
      </div>

      {/* Rede de Relacionamentos */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Rede de Relacionamentos</h2>
        <p><strong>Amigos:</strong> Shiryu, Hyoga, Shun, Ikki</p>
        <p><strong>Mentor:</strong> Marin de Águia</p>
      </div>

      <div className="text-center mt-10">
        <Link href="/characters/bronze" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
          Voltar Para Personagens
        </Link>
      </div>
    </div>
  );
}
