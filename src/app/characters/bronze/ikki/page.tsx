// src/app/characters/bronze/ikki/page.tsx

export default function IkkiPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Ikki de Fênix</h1>
      </div>
      <img 
        src="https://i.pinimg.com/originals/94/48/b5/9448b5b75e63b786d0052bd8f1ce785f.png" 
        alt="Ikki de Fênix" 
        className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
      />
      <div className="text-center">
        <p className="text-gray-300 mb-4">
          Ikki é o Cavaleiro de Fênix, o mais forte dos Cavaleiros de Bronze. Ele é o irmão mais velho de Shun e tem uma personalidade indomável. Sua habilidade de renascer das cinzas o torna extremamente poderoso.
        </p>
        <p className="text-gray-300">
          Ikki é famoso pelo seu golpe Ave Fênix, que é capaz de destruir o psicológico de seus inimigos. Embora muitas vezes siga seu próprio caminho, ele sempre aparece nos momentos mais críticos para salvar seus amigos.
        </p>
      </div>
      <p className="text-yellow-400 mt-6 text-center">
        <a href="/characters/bronze" className="hover:text-yellow-500">Voltar para Cavaleiros de Bronze</a>
      </p>
    </div>
  );
}
