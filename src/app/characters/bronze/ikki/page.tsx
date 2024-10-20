// src/app/characters/ikki/page.tsx

import Link from 'next/link';

export default function IkkiProfile() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-red-600 mb-8">Ikki de Fênix</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="/cloth-schemes/athena-saints/ikki.png"
          alt="Ikki de Fênix"
          className="w-full h-auto rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Informações Básicas</h2>
          <p><strong>Nome:</strong> Ikki</p>
          <p><strong>Constelação:</strong> Fênix</p>
          <p><strong>Armadura:</strong> Armadura de Bronze de Fênix</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Habilidades</h2>
          <p>Ikki é conhecido por sua técnica "Golpe Fantasma da Fênix", que causa ilusões perturbadoras aos seus inimigos.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">História</h2>
          <p>Ikki é o Cavaleiro de Fênix e irmão mais velho de Shun. Apesar de seu exterior duro, ele tem um profundo amor por seu irmão e protege Atena com fervor. A Armadura de Fênix tem a habilidade única de se regenerar sempre que é destruída.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Principais Batalhas</h2>
          <ul>
            <li>Batalha contra Shaka de Virgem</li>
            <li>Batalha contra os Cavaleiros Negros</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">Armaduras</h2>
          <ul>
            <li>Armadura de Bronze de Fênix</li>
            <li>Armadura Divina de Fênix</li>
          </ul>
        </div>
      </div>

      {/* Galeria de Imagens */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-1-anime.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-2-anime.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-3-anime.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/leo-Ikki-authentic.png" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-1.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-2.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-3.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-god.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-god-anime.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-3-omega.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-2-gold-anime.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-1-time-odyssey.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          <img src="/cloth-schemes/athena-saints/phoenix-ikki-unknown.jpg" alt="Ikki" className="w-auto h-auto rounded-lg" />
          {/* Adicione mais imagens aqui */}
        </div>
      </div>

      {/* Rede de Relacionamentos */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Rede de Relacionamentos</h2>
        <p><strong>Amigos:</strong> Seiya, Shiryu, Hyoga, Shun</p>
        <p><strong>Irmão:</strong> Shun de Andrômeda</p>
      </div>

      <div className="text-center mt-10">
        <Link href="/characters/bronze" className="bg-red-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
          Voltar Para Personagens
        </Link>
      </div>
    </div>
  );
}
