// src/app/hipermito/[cavaleiro].tsx

import Link from 'next/link';

const cavaleiroInfo = {
  name: "Seiya de Pégaso",
  constellation: "Pégaso",
  history: `Seiya é o Cavaleiro de Bronze da constelação de Pégaso. Ele luta pela justiça e pela proteção da deusa Atena.`,
  abilities: [
    {
      name: "Meteoro de Pégaso",
      description: "Ataque poderoso com inúmeros socos rápidos que parecem com meteoros.",
    },
    {
      name: "Cometa de Pégaso",
      description: "Um ataque concentrado que reúne toda a energia cósmica em um único golpe.",
    },
  ],
  armor: {
    description: `A Armadura de Pégaso é uma das armaduras de bronze, regenerada pelo sangue dos cavaleiros de ouro após ter sido destruída.`,
    material: "Oricalco, Gamânio, Pó das Estrelas",
  },
  gallery: [
    {
      src: "https://i.pinimg.com/originals/8e/f8/23/8ef8231ef8ce04a80470aa33a0d160e5.jpg",
      alt: "Seiya com a Armadura de Pégaso",
    },
    {
      src: "https://i.pinimg.com/originals/32/ec/3b/32ec3b74464a2b169671f40d21cea0d5.jpg",
      alt: "Seiya em combate",
    },
  ],
};

export default function CavaleiroPage() {
  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-yellow-500">{cavaleiroInfo.name}</h1>
      <p className="text-xl mb-6">Constelação: {cavaleiroInfo.constellation}</p>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-yellow-400">História</h2>
        <p>{cavaleiroInfo.history}</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-yellow-400">Habilidades e Técnicas</h2>
        <ul>
          {cavaleiroInfo.abilities.map((ability, index) => (
            <li key={index}>
              <strong>{ability.name}</strong>: {ability.description}
            </li>
          ))}
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-yellow-400">Armadura</h2>
        <p>{cavaleiroInfo.armor.description}</p>
        <p>Material: {cavaleiroInfo.armor.material}</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-yellow-400">Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cavaleiroInfo.gallery.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} className="rounded-lg shadow-lg" />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <Link href="/hipermito">
          <a className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">Voltar para Hipermito</a>
        </Link>
      </div>
    </div>
  );
}
