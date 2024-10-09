// src/app/characters/gold/peixes/page.tsx

export default function PeixesPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Afrodite de Peixes</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/9a/3a/6e/9a3a6e597f6ba0c21f796815da4dfbdc.png" 
          alt="Afrodite de Peixes" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Afrodite é o Cavaleiro de Ouro de Peixes, conhecido por sua beleza e charme, mas também por sua letalidade. Ele guarda a décima segunda casa do zodíaco.
          </p>
          <p className="text-gray-300">
            Ele usa rosas venenosas para derrotar seus inimigos de forma rápida e silenciosa, sendo um dos mais mortais entre os Cavaleiros de Ouro.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  