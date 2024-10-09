// src/app/characters/gold/virgem/page.tsx

export default function VirgemPage() {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Shaka de Virgem</h1>
        </div>
        <img 
          src="https://i.pinimg.com/originals/34/28/fc/3428fcb213afe587d0f0f87a4b30497e.png" 
          alt="Shaka de Virgem" 
          className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
        />
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Shaka é o Cavaleiro de Ouro de Virgem, conhecido como "o homem mais próximo de Deus". Ele é um dos mais poderosos e espiritualmente evoluídos Cavaleiros de Ouro.
          </p>
          <p className="text-gray-300">
            Ele guarda a sexta casa do zodíaco e usa seu imenso poder espiritual para defender Atena e a paz.
          </p>
        </div>
        <p className="text-yellow-400 mt-6 text-center">
          <a href="/characters/gold" className="hover:text-yellow-500">Voltar para Cavaleiros de Ouro</a>
        </p>
      </div>
    );
  }
  