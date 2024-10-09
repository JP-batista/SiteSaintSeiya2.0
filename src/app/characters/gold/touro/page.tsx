// src/app/characters/gold/touro/page.tsx

export default function TouroPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Aldebaran de Touro</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/72/0b/bb/720bbb9fd518cb268d1306ec14c11df8.png" 
          alt="Aldebaran de Touro" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Aldebaran é o Cavaleiro de Ouro de Touro, conhecido por sua imensa força física. Ele é um dos mais poderosos Cavaleiros de Ouro e guarda a segunda casa do zodíaco.
          </p>
          <p className="text-gray-300">
            Apesar de sua força bruta, Aldebaran é gentil e protetor, sempre disposto a lutar por Atena e pela justiça.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  