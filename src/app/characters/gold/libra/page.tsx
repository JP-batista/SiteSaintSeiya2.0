// src/app/characters/gold/libra/page.tsx

export default function LibraPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Dohko de Libra</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/70/aa/68/70aa6819992b62fb5126ed1846087e62.png" 
          alt="Dohko de Libra" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Dohko é o Cavaleiro de Ouro de Libra, guardião da balança da justiça e mestre em artes marciais. Ele é o mentor de Shiryu de Dragão e um dos mais sábios entre os Cavaleiros de Ouro.
          </p>
          <p className="text-gray-300">
            Ele guarda a sétima casa do zodíaco e é um dos mais antigos Cavaleiros de Ouro, tendo participado da última Guerra Santa.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  