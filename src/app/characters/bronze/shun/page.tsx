// src/app/characters/shun/page.tsx

import Link from 'next/link';

export default function ShunProfile() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-pink-400 mb-8">Shun de Andrômeda</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6f53ff5-98c7-4145-b70a-27b99720adef/daa3m4q-75711327-f064-4a6c-b23f-2b7736d79676.png/v1/fill/w_459,h_1057/andromeda_shun__render__by_ladyheinstein_daa3m4q-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1NyIsInBhdGgiOiJcL2ZcL2Y2ZjUzZmY1LTk4YzctNDE0NS1iNzBhLTI3Yjk5NzIwYWRlZlwvZGFhM200cS03NTcxMTMyNy1mMDY0LTRhNmMtYjIzZi0yYjc3MzZkNzk2NzYucG5nIiwid2lkdGgiOiI8PTQ1OSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GTTtaIxtUWR2APnZ86VFllxWKzS_Y0Htp0JX3UT7jSM"
          alt="Shun de Andrômeda"
          className="w-84 h-auto rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Informações Básicas</h2>
          <p><strong>Nome:</strong> Shun</p>
          <p><strong>Constelação:</strong> Andrômeda</p>
          <p><strong>Armadura:</strong> Armadura de Bronze de Andrômeda</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Habilidades</h2>
          <p>Shun é conhecido por sua técnica "Corrente Nebulosa", que cria uma barreira de defesa e ataque ao mesmo tempo.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">História</h2>
          <p>Shun é o Cavaleiro de Andrômeda, famoso por sua gentileza e hesitação em lutar, mas disposto a se sacrificar para salvar seus amigos e proteger Atena.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Principais Batalhas</h2>
          <ul>
            <li>Batalha contra Afrodite de Peixes</li>
            <li>Batalha nas 12 casas</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">Armaduras</h2>
          <ul>
            <li>Armadura de Bronze de Andrômeda</li>
            <li>Armadura Divina de Andrômeda</li>
          </ul>
        </div>
      </div>

      {/* Galeria de Imagens */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/cloth-schemes/athena-saints/andromeda-shun-1-anime.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/andromeda-shun-2-anime.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/andromeda-shun-3-anime.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/virgo-shun.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/andromeda-shun-1.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/andromeda-shun-2.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/andromeda-shun-3.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/andromeda-shun-god-anime.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/andromeda-shun-god.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/andromeda-shun-3-omega.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/andromeda-shun-1-time-odyssey.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/andromeda-shun-2-gold-anime.jpg" alt="Shun" className="w-auto h-auto rounded-lg" />
          {/* Adicione mais imagens aqui */}
        </div>
      </div>

      {/* Rede de Relacionamentos */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Rede de Relacionamentos</h2>
        <p><strong>Amigos:</strong> Seiya, Shiryu, Hyoga, Ikki</p>
        <p><strong>Mentor:</strong> Daidalos de Cefeu</p>
        <p><strong>Irmão:</strong> Ikki de Fênix</p>
      </div>

      <div className="text-center mt-10">
        <Link href="/characters/bronze" className="bg-pink-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
          Voltar Para Personagens
        </Link>
      </div>
    </div>
  );
}
