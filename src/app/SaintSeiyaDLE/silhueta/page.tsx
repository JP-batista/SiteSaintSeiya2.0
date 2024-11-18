
"use client";

import { useEffect, useState } from "react";
import { armors } from "../../data/armors";

export default function ArmorGamePage() {
  const [selectedArmor, setSelectedArmor] = useState(() =>
    JSON.parse(localStorage.getItem("selectedArmor") || "null") ||
    armors[Math.floor(Math.random() * armors.length)]
  );
  const [zoomLevel, setZoomLevel] = useState(() =>
    JSON.parse(localStorage.getItem("zoomLevel") || "200")
  );
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState(() =>
    JSON.parse(localStorage.getItem("attempts") || "0")
  );
  const [revealed, setRevealed] = useState(() =>
    JSON.parse(localStorage.getItem("revealed") || "false")
  );
  const [testedArmors, setTestedArmors] = useState(() =>
    JSON.parse(localStorage.getItem("testedArmors") || "[]")
  );
  const [showDropdown, setShowDropdown] = useState(false);

  const [suggestions, setSuggestions] = useState<
    { name: string; category: string; description: string; knight: string; saga: string; silhouetteImg: string; revealedImg: string }[]
  >([]);
  const [highlightedArmor, setHighlightedArmor] = useState<
    { name: string; category: string; description: string; knight: string; saga: string; silhouetteImg: string; revealedImg: string } | null
  >(null);

  // Save game state to localStorage
  useEffect(() => {
    localStorage.setItem("selectedArmor", JSON.stringify(selectedArmor));
    localStorage.setItem("zoomLevel", JSON.stringify(zoomLevel));
    localStorage.setItem("attempts", JSON.stringify(attempts));
    localStorage.setItem("revealed", JSON.stringify(revealed));
    localStorage.setItem("testedArmors", JSON.stringify(testedArmors));
  }, [selectedArmor, zoomLevel, attempts, revealed, testedArmors]);

  const handleGuess = (armor: {
    name: string;
    category: string;
    description: string;
    knight: string;
    saga: string;
    silhouetteImg: string;
    revealedImg: string;
  } | null) => {
    if (!armor || input.trim() === "") return;

    const guessedArmor = armor;

    const newTestedArmor = {
      ...guessedArmor,
      isCorrect: guessedArmor.name === selectedArmor.name, // Marca se é a correta
    };

    setTestedArmors((prev) => [newTestedArmor, ...prev]); // Adiciona à pilha de testadas

    if (guessedArmor.name === selectedArmor.name) {
      setRevealed(true);
    }

    setAttempts(attempts + 1);
    setZoomLevel(Math.max(100, zoomLevel - 20)); // Reduz o zoom, mas não menos que 100%

    setInput("");
    setShowDropdown(false);
    setHighlightedArmor(null);
  };

  const restartGame = () => {
    const newArmor = armors[Math.floor(Math.random() * armors.length)];
    setSelectedArmor(newArmor);
    setZoomLevel(200);
    setInput("");
    setAttempts(0);
    setRevealed(false);
    setTestedArmors([]);
    setShowDropdown(false);
    setHighlightedArmor(null);

    localStorage.removeItem("selectedArmor");
    localStorage.removeItem("zoomLevel");
    localStorage.removeItem("attempts");
    localStorage.removeItem("revealed");
    localStorage.removeItem("testedArmors");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    if (value) {
      const normalizedValue = value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Remove acentos
      const filteredSuggestions = armors.filter(
        (armor) =>
          armor.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(normalizedValue.toLowerCase()) &&
          !testedArmors.some(
            (testedArmor) =>
              testedArmor.name.toLowerCase() === armor.name.toLowerCase()
          )
      );

      setSuggestions(filteredSuggestions);
      setHighlightedArmor(filteredSuggestions[0] || null); // Define a primeira armadura como destacada por padrão
      setShowDropdown(true);
    } else {
      setSuggestions([]);
      setHighlightedArmor(null);
      setShowDropdown(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (highlightedArmor) {
        handleGuess(highlightedArmor);
      }
    }
  };

  const handleSuggestionClick = (
    armor: {
      name: string;
      category: string;
      description: string;
      knight: string;
      saga: string;
      silhouetteImg: string;
      revealedImg: string;
    } | null
  ) => {
    if (!armor) return;
    setInput(armor.name);
    setHighlightedArmor(armor);
    setShowDropdown(false);
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6">
      <div className="flex justify-center items-center mb-8">
        <img
          src="/dle_feed/logo_dle.png"
          alt="Logo Os Cavaleiros do Zodíaco"
          className="w-auto h-52 hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <h1 className="text-5xl font-extrabold text-yellow-400 mb-8">
        Desafio da Armadura
      </h1>

      {/* Imagem da armadura com estilo aprimorado */}
      <div className="relative bg-blue-900 text-white p-4 rounded-2xl shadow-lg w-[360px]">
        <h1 className="text-xl font-bold text-center mb-6">
          De que armadura é esta silhueta?
        </h1>
        <div className="relative w-full h-[300px] bg-white rounded-xl overflow-hidden shadow-inner border-4 border-blue-500 flex items-center justify-center">
          {!revealed ? (
            <img
              src={selectedArmor.silhouetteImg}
              alt="Silhueta da Armadura"
              style={{
                width: `${zoomLevel + 80}%`, // Zoom inicial aumentado
                height: `${zoomLevel + 80}%`,
                objectFit: "cover",
                transition: "all 0.3s ease",
              }}
            />
          ) : (
            <img
              src={selectedArmor.revealedImg}
              alt="Armadura Revelada"
              className="w-full h-full object-contain"
            />
          )}
        </div>
        <p className="mt-4 text-sm text-center text-gray-300">
          Cada tentativa diminui um pouco o zoom.
        </p>
      </div>

      {/* Exibição das características detalhadas */}
      {revealed && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md w-[360px] text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Detalhes da Armadura
          </h2>
          <p className="text-sm mb-2">
            <strong>Categoria:</strong> {selectedArmor.category}
          </p>
          <p className="text-sm mb-2">
            <strong>Cavaleiro:</strong> {selectedArmor.knight}
          </p>
          <p className="text-sm mb-2">
            <strong>Saga:</strong> {selectedArmor.saga}
          </p>
          <p className="text-sm">
            <strong>Descrição:</strong> {selectedArmor.description}
          </p>
        </div>
      )}

      {/* Campo de entrada */}
      {!revealed && (
        <div className="mt-6 flex flex-col items-center">
          <div className="relative w-80">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Digite o nome da armadura"
              className="p-4 rounded-md text-black w-full shadow-md mb-4 focus:ring-2 focus:ring-yellow-500"
            />
            {showDropdown && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
                {suggestions.map((armor) => (
                  <li
                    key={armor.name}
                    className={`flex items-center p-3 cursor-pointer ${
                      highlightedArmor?.name === armor.name
                        ? "bg-gray-600"
                        : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleSuggestionClick(armor)}
                  >
                    <img
                      src={armor.revealedImg}
                      alt={armor.name}
                      className="w-12 h-12 rounded-lg mr-3"
                    />
                    <span className="font-semibold">{armor.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            onClick={() => highlightedArmor && handleGuess(highlightedArmor)}
            disabled={!highlightedArmor}
            className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Tentar
          </button>
        </div>
      )}

      {/* Cartões de tentativas */}
      <div className="mt-8 w-full max-w-2xl">
        {testedArmors.length > 0 && (
          <div className="space-y-4">
            {testedArmors.map((armor) => (
              <div
                key={armor.name}
                className={`flex items-center px-6 py-4 rounded-lg shadow-lg ${
                  armor.isCorrect ? "bg-green-500" : "bg-red-500"
                } text-white`}
              >
                <img
                  src={armor.revealedImg}
                  alt={armor.name}
                  className="w-24 h-24 rounded-lg mr-4 object-contain shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">{armor.name}</span>
                  <span className="text-sm">{armor.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Botão de reinício */}
      {revealed && (
        <button
          onClick={restartGame}
          className="mt-6 bg-green-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition transform hover:scale-105 shadow-md"
        >
          Jogar Novamente
        </button>
      )}

      <p className="mt-6 text-gray-400">
        Tentativas: <span className="font-bold text-lg">{attempts}</span>
      </p>
    </div>
  );
}
