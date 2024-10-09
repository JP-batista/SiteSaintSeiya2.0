// src/app/characters/gold/escorpiao/page.tsx

export default function EscorpiaoPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Milo de Escorpião</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/2d/8b/cb/2d8bcb8cd34c286248fe48c747b78297.png" 
          alt="Milo de Escorpião" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Milo é o Cavaleiro de Ouro de Escorpião, conhecido por sua incrível velocidade e ataques venenosos, como a Agulha Escarlate. Ele guarda a oitava casa do zodíaco.
          </p>
          <p className="text-gray-300">
            Ele é extremamente leal a Atena e luta para proteger a paz e a justiça.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  