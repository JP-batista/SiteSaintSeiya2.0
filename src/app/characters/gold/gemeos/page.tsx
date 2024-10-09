// src/app/characters/gold/gemeos/page.tsx

export default function GemeosPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Saga de Gêmeos</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/97/e1/ed/97e1ed20ee24b6c94b4e04f68dc61a54.png" 
          alt="Saga de Gêmeos" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Saga é o Cavaleiro de Ouro de Gêmeos, conhecido por sua dualidade e imensa sabedoria. Ele guarda a terceira casa do zodíaco e é um dos mais poderosos Cavaleiros de Ouro.
          </p>
          <p className="text-gray-300">
            Sua personalidade dupla o torna um personagem complexo e, ao mesmo tempo, temido e respeitado.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  