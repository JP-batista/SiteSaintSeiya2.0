// src/app/characters/gold/cancer/page.tsx

export default function CancerPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Máscara da Morte de Câncer</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/de/b3/a4/deb3a44da7eb95548da425b9570bdcf1.png" 
          alt="Máscara da Morte de Câncer" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Máscara da Morte é o Cavaleiro de Ouro de Câncer, guardião da quarta casa do zodíaco. Ele é impiedoso e poderoso, conhecido por enviar seus inimigos diretamente para o submundo.
          </p>
          <p className="text-gray-300">
            Sua falta de compaixão o torna temido até mesmo por seus aliados.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  