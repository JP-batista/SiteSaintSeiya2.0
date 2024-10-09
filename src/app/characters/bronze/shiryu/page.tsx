// src/app/characters/bronze/shiryu/page.tsx

export default function ShiryuPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h1 className="text-5xl text-yellow-400 mb-10 font-bold">Shiryu de Dragão</h1>
      </div>
      <img 
        src="https://i.pinimg.com/originals/be/e9/8b/bee98b455b2807ce86f50051d52767c3.png" 
        alt="Shiryu de Dragão" 
        className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
      />
      <div className="text-center">
        <p className="text-gray-300 mb-4">
          Shiryu é o Cavaleiro de Dragão, conhecido por sua força física e sabedoria. Ele é o mais calmo e sereno dos Cavaleiros de Bronze, sempre disposto a sacrificar-se pelos amigos e por Atena.
        </p>
        <p className="text-gray-300">
          Seu golpe mais famoso é o Cólera do Dragão, e ele utiliza a armadura do Dragão, uma das mais poderosas armaduras. Shiryu é conhecido por se tornar mais forte quando enfrenta desafios difíceis.
        </p>
      </div>
      <p className="text-yellow-400 mt-6 text-center">
        <a href="/characters/bronze" className="hover:text-yellow-500">Voltar para Cavaleiros de Bronze</a>
      </p>
    </div>
  );
}
