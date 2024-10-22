"use client";
import characters from "../../data/characters"; // Certifique-se de que os dados dos personagens estão aqui

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 rounded-lg">
      <h1 className="text-5xl font-extrabold text-center text-yellow-400 mb-12">
        Personagens de Saint Seiya
      </h1>

      {/* Grid configurada para 5 colunas em telas grandes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {characters.map((character, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={character.imgSrc}
              alt={character.nome}
              className="w-full h-auto rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-yellow-400 mb-2 text-center">
              {character.nome}
            </h2>
            <ul className="text-gray-300 space-y-1">
              <li>
                <strong>Idade:</strong>{" "}
                {character.idade === "imortal"
                  ? "Imortal"
                  : character.idade === "desconhecido"
                  ? "X"
                  : character.idade}
              </li>
              <li><strong>Altura:</strong> {character.altura}</li>
              <li><strong>Gênero:</strong> {character.genero}</li>
              <li><strong>Peso:</strong> {character.peso}</li>
              <li><strong>Signo:</strong> {character.signo}</li>
              <li>
                <strong>Local de Treinamento:</strong> {character.localDeTreinamento}
              </li>
              <li><strong>Patente:</strong> {character.patente}</li>
              <li><strong>Exército:</strong> {character.exercito}</li>
              <li><strong>Saga:</strong> {character.saga}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
