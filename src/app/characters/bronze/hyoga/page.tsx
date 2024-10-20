// src/app/characters/hyoga/page.tsx

import Link from 'next/link';

export default function HyogaProfile() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-blue-400 mb-8">Hyoga de Cisne</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="/cloth-schemes/athena-saints/latest.png"
          alt="Hyoga de Cisne"
          className="w-full h-auto rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Informações Básicas</h2>
          <p><strong>Nome:</strong> Hyoga</p>
          <p><strong>Constelação:</strong> Cisne</p>
          <p><strong>Armadura:</strong> Armadura de Bronze de Cisne</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Habilidades</h2>
          <p>Hyoga é famoso por sua técnica "Pó de Diamante", que congela seus inimigos instantaneamente.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">História</h2>
          <p>Hyoga é o Cavaleiro de Cisne e é conhecido por sua determinação e controle sobre o gelo. Ele luta pela proteção de Atena, enquanto carrega o amor por sua mãe em seu coração.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Principais Batalhas</h2>
          <ul>
            <li>Batalha contra Camus de Aquário</li>
            <li>Batalha nas 12 casas</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">Armaduras</h2>
          <ul>
            <li>Armadura de Bronze de Cisne</li>
            <li>Armadura Divina de Cisne</li>
          </ul>
        </div>
      </div>

      {/* Galeria de Imagens */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/cloth-schemes/athena-saints/cygnus-hyoga-1-anime.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/cygnus-hyoga-2-anime.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/cygnus-hyoga-3-anime.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/aquarius-hyoga-anime.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/cygnus-hyoga-1.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/cygnus-hyoga-2.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/cygnus-hyoga-3.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/cygnus-hyoga-god-anime.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/cygnus-hyoga-god.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/cygnus-hyoga-2-gold-anime.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/cygnus-hyoga-1-time-odyssey.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/cygnus-hyoga-3-omega.jpg" alt="Hyoga" className="w-auto h-auto rounded-lg" />
          {/* Adicione mais imagens aqui */}
        </div>
      </div>

      {/* Rede de Relacionamentos */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Rede de Relacionamentos</h2>
        <p><strong>Amigos:</strong> Seiya, Shiryu, Shun, Ikki</p>
        <p><strong>Mentor:</strong> Camus de Aquário</p>
      </div>

      <div className="text-center mt-10">
        <Link href="/characters/bronze" className="bg-blue-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Voltar Para Personagens
        </Link>
      </div>
    </div>
  );
}
