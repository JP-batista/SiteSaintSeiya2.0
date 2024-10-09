// src/app/characters/bronze/shun/page.tsx

export default function ShunPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Shun de Andrômeda</h1>
      </div>
      <img 
        src="https://i.pinimg.com/originals/9e/00/38/9e0038c81ccb5e0f3b2a1b87d582bff9.png" 
        alt="Shun de Andrômeda" 
        className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
      />
      <div className="text-center">
        <p className="text-gray-300 mb-4">
          Shun é o Cavaleiro de Andrômeda, caracterizado por sua bondade e compaixão. Mesmo sendo incrivelmente poderoso, ele evita ao máximo lutar, preferindo resolver os conflitos pacificamente.
        </p>
        <p className="text-gray-300">
          Shun utiliza as poderosas correntes de Andrômeda para se proteger e ajudar seus aliados. Sua verdadeira força vem de seu coração puro, mas ele pode liberar um poder devastador quando necessário para proteger Atena.
        </p>
      </div>
      <p className="text-yellow-400 mt-6 text-center">
        <a href="/characters/bronze" className="hover:text-yellow-500">Voltar para Cavaleiros de Bronze</a>
      </p>
    </div>
  );
}
