// src/app/characters/gold/sagitario/page.tsx

export default function SagitarioPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Aiolos de Sagitário</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/22/25/bf/2225bff4a5b20f37b160cc767e55e9d6.png" 
          alt="Aiolos de Sagitário" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Aiolos é o Cavaleiro de Ouro de Sagitário, conhecido por sua bravura e por ter protegido Atena quando ela era apenas um bebê. Ele guarda a nona casa do zodíaco.
          </p>
          <p className="text-gray-300">
            Seu legado é continuado por Seiya de Pégaso, que herda sua armadura em momentos críticos.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  