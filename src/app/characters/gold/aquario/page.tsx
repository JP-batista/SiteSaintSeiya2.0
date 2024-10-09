// src/app/characters/gold/aquario/page.tsx

export default function AquarioPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Camus de Aquário</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/93/a4/dc/93a4dc1cc91a0e7e268357cf3d653eaf.png" 
          alt="Camus de Aquário" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Camus é o Cavaleiro de Ouro de Aquário, mestre no controle do gelo. Ele é o mentor de Hyoga de Cisne e guarda a décima primeira casa do zodíaco.
          </p>
          <p className="text-gray-300">
            Seu golpe mais famoso, a Execução Aurora, é um dos ataques mais poderosos entre os Cavaleiros de Ouro.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  