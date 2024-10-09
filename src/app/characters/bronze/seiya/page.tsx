// src/app/characters/bronze/seiya/page.tsx

export default function SeiyaPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Seiya de Pégaso</h1>
      </div>
      <img 
        src="https://i.pinimg.com/originals/f4/78/66/f47866e3aa44f46a7857548f22526aa7.png" 
        alt="Seiya de Pégaso" 
        className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
      />
      <div className="text-center">
        <p className="text-gray-300 mb-4">
          Seiya é o protagonista da série e Cavaleiro de Bronze de Pégaso. Corajoso e determinado, ele nunca desiste de lutar pela justiça. Seu principal objetivo é proteger Atena e garantir a paz na Terra.
        </p>
        <p className="text-gray-300">
          Seiya luta com a armadura de Pégaso, e é famoso pelo golpe Meteoro de Pégaso. Ao longo da série, ele enfrenta muitos inimigos poderosos, mas sua lealdade à deusa Atena e sua coragem o tornam uma figura chave na defesa do Santuário.
        </p>
      </div>
      <p className="text-yellow-400 mt-6 text-center">
        <a href="/characters/bronze" className="hover:text-yellow-500">Voltar para Cavaleiros de Bronze</a>
      </p>
    </div>
  );
}
