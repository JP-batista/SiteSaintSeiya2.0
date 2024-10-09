// src/app/characters/gold/aries/page.tsx

export default function AriesPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Mu de Áries</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/4f/b7/7e/4fb77e504c8130965a1655fc8d44d446.png" 
          alt="Mu de Áries" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Mu é o Cavaleiro de Ouro de Áries, guardião da primeira casa do zodíaco. Ele é conhecido por sua sabedoria, paciência e habilidades com teletransporte e reparo de armaduras.
          </p>
          <p className="text-gray-300">
            Ele desempenha um papel importante na proteção de Atena e na reparação das armaduras sagradas, sendo um dos mais respeitados entre os Cavaleiros de Ouro.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  