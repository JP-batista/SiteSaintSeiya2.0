// src/app/characters/bronze/hyoga/page.tsx

export default function HyogaPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Hyoga de Cisne</h1>
      </div>
      <img 
        src="https://i.pinimg.com/originals/6c/52/e9/6c52e90d72b7d9aea6ca9cf6a95fd8f9.png" 
        alt="Hyoga de Cisne" 
        className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
      />
      <div className="text-center">
        <p className="text-gray-300 mb-4">
          Hyoga é o Cavaleiro de Cisne, mestre no controle do gelo. Ele tem uma personalidade mais reservada, mas sua força vem de seu desejo de proteger aqueles que ama, especialmente sua mãe.
        </p>
        <p className="text-gray-300">
          Seus golpes, como o Pó de Diamante e o Trovão Aurora, são conhecidos por sua incrível precisão e poder. Hyoga é um dos Cavaleiros mais estratégicos e calmos, mesmo em situações de alto risco.
        </p>
      </div>
      <p className="text-yellow-400 mt-6 text-center">
        <a href="/characters/bronze" className="hover:text-yellow-500">Voltar para Cavaleiros de Bronze</a>
      </p>
    </div>
  );
}
