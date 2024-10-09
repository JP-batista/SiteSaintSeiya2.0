// src/app/characters/gold/capricornio/page.tsx

export default function CapricornioPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Shura de Capricórnio</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/6e/a8/2c/6ea82c57588a9ee51230ad61d9a10bc8.png" 
          alt="Shura de Capricórnio" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Shura é o Cavaleiro de Ouro de Capricórnio, mestre no uso da espada sagrada Excalibur. Ele guarda a décima casa do zodíaco e é conhecido por sua lealdade inabalável a Atena.
          </p>
          <p className="text-gray-300">
            Sua força e destreza com a Excalibur o tornam um dos mais respeitados entre os Cavaleiros de Ouro.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  