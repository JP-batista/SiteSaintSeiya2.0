"use client";
import { useState, useEffect } from "react";
import characters from "../data/characters"; // Certifique-se de que os dados dos personagens estão aqui

export default function GamePage() {
  // Função auxiliar para salvar no localStorage
  const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // Função auxiliar para carregar do localStorage
  const loadFromLocalStorage = (key: string, defaultValue: any) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  };

  const [selectedCharacter, setSelectedCharacter] = useState(() =>
    loadFromLocalStorage(
      "selectedCharacter",
      characters[Math.floor(Math.random() * characters.length)]
    )
  );
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState(() =>
    loadFromLocalStorage("attempts", [])
  );
  const [won, setWon] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false); // Estado para controlar desistência
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const parseHeight = (height: string) =>
    parseFloat(height.replace(",", ".").replace(" m", ""));

  const compareNumber = (value: number, target: number) => {
    if (value === target) return "green";
    return value > target ? "down" : "up"; // Setas para indicar maior ou menor
  };

  const compareHeight = (value: string, target: string) => {
    const val = parseHeight(value);
    const tgt = parseHeight(target);
    if (isNaN(val) || isNaN(tgt)) return "red"; // Caso falte algum dado de altura
    if (val === tgt) return "green";
    return val > tgt ? "down" : "up";
  };

  // Salva o personagem e tentativas no localStorage sempre que houver mudanças
  useEffect(() => {
    saveToLocalStorage("selectedCharacter", selectedCharacter);
    saveToLocalStorage("attempts", attempts);
  }, [selectedCharacter, attempts]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const guess = characters.find(
      (char) => char.nome.toLowerCase() === input.toLowerCase()
    );

    if (!guess) {
      alert("Personagem não encontrado!");
      return;
    }

    const correct = guess.nome === selectedCharacter.nome;

    const comparison = {
      nome: input,
      idade: compareNumber(guess.idade, selectedCharacter.idade),
      altura: compareHeight(guess.altura, selectedCharacter.altura),
      genero: guess.genero === selectedCharacter.genero ? "green" : "red",
      peso: compareNumber(guess.peso, selectedCharacter.peso),
      signo: guess.signo === selectedCharacter.signo ? "green" : "red",
      localDeTreinamento:
        guess.localDeTreinamento === selectedCharacter.localDeTreinamento
          ? "green"
          : "red",
      patente: guess.patente === selectedCharacter.patente ? "green" : "red",
      exercito: guess.exercito === selectedCharacter.exercito ? "green" : "red",
      saga: guess.saga === selectedCharacter.saga ? "green" : "red", // Comparação do novo campo "saga"
      imgSrc: guess.imgSrc,
      guessCharacter: guess,
    };

    if (correct) setWon(true);

    setAttempts([comparison, ...attempts]); // Adicionando o novo personagem no início da lista
    setInput("");
    setSuggestions([]);
    setShowDropdown(false);
  };

  // Função para desistir do jogo
  const handleGiveUp = () => {
    setShowAnswer(true);
    setWon(true); // Considera como "fim de jogo"
    localStorage.removeItem("selectedCharacter");
    localStorage.removeItem("attempts");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim()) {
      const filteredSuggestions = characters.filter((char) =>
        char.nome.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowDropdown(true);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (suggestion: { nome: string }) => {
    setInput(suggestion.nome);
    setShowDropdown(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && suggestions.length > 0) {
      setInput(suggestions[0].nome);
    }
  };

  // Função para reiniciar o jogo
  const handleRestart = () => {
    setAttempts([]);
    setSelectedCharacter(
      characters[Math.floor(Math.random() * characters.length)]
    );
    setInput("");
    setWon(false);
    setShowAnswer(false);
    localStorage.removeItem("selectedCharacter");
    localStorage.removeItem("attempts");
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-8 text-yellow-400">
        Adivinhe o Cavaleiro!
      </h1>

      {!won ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4 mb-8"
          >
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Digite o nome do cavaleiro"
                className="p-3 w-full border border-gray-500 rounded-md bg-gray-700 focus:ring-2 focus:ring-yellow-500 text-center text-lg"
              />
              {showDropdown && suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 mt-2 bg-gray-700 border border-gray-500 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.nome}
                      className="flex items-center p-2 hover:bg-gray-600 cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <img
                        src={suggestion.imgSrc}
                        alt={suggestion.nome}
                        className="w-10 h-10 rounded-lg mr-2" // Imagem quadrada levemente arredondada e maior
                      />
                      <span>{suggestion.nome}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold text-xl hover:bg-yellow-600 transition-all duration-300"
            >
              Tentar
            </button>
          </form>

          <div className="w-full max-w-3xl">
            <h2 className="text-3xl mb-6 text-center">Tentativas</h2>
            <div className="">
              <table className="w-full text-left border-collapse table-auto bg-gray-700 rounded-lg shadow-lg">
                <thead>
                  <tr className="text-yellow-500 border-b-2 border-yellow-500">
                    <th className="p-2">Personagem</th>
                    <th className="p-2">Idade</th>
                    <th className="p-2">Altura</th>
                    <th className="p-2">Gênero</th>
                    <th className="p-2">Peso</th>
                    <th className="p-2">Signo</th>
                    <th className="p-2">Treinamento</th>
                    <th className="p-2">Patente</th>
                    <th className="p-2">Exército</th>
                    <th className="p-2">Saga</th>
                  </tr>
                </thead>
                <tbody>
                  {attempts.map((attempt, index) => (
                    <tr key={index} className="border-b border-gray-600">
                      <td className="p-2 flex flex-col items-center">
                        <img
                          src={attempt.imgSrc}
                          alt={attempt.nome}
                          className="w-24 h-auto rounded-lg mb-2" // Aumentando o tamanho da imagem para 24x24
                        />
                        <span>{attempt.nome}</span>
                      </td>
                      <td className={`p-2 ${attempt.idade}`}>
                        {attempt.idade === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : attempt.idade === "up" ? (
                          <span className="text-3xl">🔼</span>
                        ) : attempt.idade === "down" ? (
                          <span className="text-3xl">🔽</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.idade}
                        </span>
                      </td>
                      <td className={`p-2 ${attempt.altura}`}>
                        {attempt.altura === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : attempt.altura === "up" ? (
                          <span className="text-3xl">🔼</span>
                        ) : attempt.altura === "down" ? (
                          <span className="text-3xl">🔽</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.altura}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.genero === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.genero === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.genero}
                        </span>
                      </td>
                      <td className={`p-2 ${attempt.peso}`}>
                        {attempt.peso === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : attempt.peso === "up" ? (
                          <span className="text-3xl">🔼</span>
                        ) : attempt.peso === "down" ? (
                          <span className="text-3xl">🔽</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.peso}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.signo === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.signo === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.signo}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.localDeTreinamento === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.localDeTreinamento === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.localDeTreinamento}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.patente === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.patente === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.patente}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.exercito === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.exercito === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.exercito}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.saga === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.saga === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.saga}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center text-yellow-400">Indicadores de cor</h3>
            <div className="flex items-center justify-around space-x-4">
                
                <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg ">
                    <span className="text-white text-xl">✔️</span>
                </div>
                <span className="text-sm text-white mt-2">Correto</span>
                </div>
                
                <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg ">
                    <span className="text-white text-xl">❌</span>
                </div>
                <span className="text-sm text-white mt-2">Incorreto</span>
                </div>
                
                <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg ">
                    <span className="text-white text-xl">🔼</span>
                </div>
                <span className="text-sm text-white mt-2">Mais alto</span>
                </div>
                
                <div className="flex flex-col items-center">
                <div className="w-10 h-10  flex items-center justify-center rounded-lg ">
                    <span className="text-white text-xl">🔽</span>
                </div>
                <span className="text-sm text-white mt-2">Mais baixo</span>
                </div>

            </div>
            </div>


          {/* Botão de desistência no final da página */}
          <button
            type="button"
            onClick={handleGiveUp}
            className="bg-red-500 text-gray-900 px-6 py-2 mt-8 rounded-lg font-bold text-xl hover:bg-red-600 transition-all duration-300"
          >
            Desistir
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-4xl text-green-400 mb-4">
            {showAnswer ? "Você desistiu!" : "Parabéns! Você acertou!"}
          </h2>
          <p className="text-2xl mb-4">
            O personagem era {selectedCharacter.nome}!
          </p>

          <div className="flex flex-col items-center">
            <img
              src={selectedCharacter.imgSrc}
              alt={selectedCharacter.nome}
              className="w-40 h-40 rounded-lg mb-2" // Imagem quadrada com bordas arredondadas e maior na tela de vitória
            />
            <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
              <p>
                <strong>Nome:</strong> {selectedCharacter.nome}
              </p>
              <p>
                <strong>Idade:</strong> {selectedCharacter.idade}
              </p>
              <p>
                <strong>Altura:</strong> {selectedCharacter.altura}
              </p>
              <p>
                <strong>Gênero:</strong> {selectedCharacter.genero}
              </p>
              <p>
                <strong>Peso:</strong> {selectedCharacter.peso}
              </p>
              <p>
                <strong>Signo:</strong> {selectedCharacter.signo}
              </p>
              <p>
                <strong>Local de Treinamento:</strong>{" "}
                {selectedCharacter.localDeTreinamento}
              </p>
              <p>
                <strong>Patente:</strong> {selectedCharacter.patente}
              </p>
              <p>
                <strong>Exército:</strong> {selectedCharacter.exercito}
              </p>
              <p>
                <strong>Saga:</strong> {selectedCharacter.saga}
              </p>
            </div>
          </div>

          {/* Mostrar todas as tentativas e o total */}
          <div className="mt-8 w-full max-w-3xl">
            <h3 className="text-2xl mb-4 text-center">Tentativas:</h3>
            <div className="">
              <table className="w-full text-left border-collapse table-auto bg-gray-700 rounded-lg shadow-lg">
                <thead>
                  <tr className="text-yellow-500 border-b-2 border-yellow-500">
                    <th className="p-2">Personagem</th>
                    <th className="p-2">Idade</th>
                    <th className="p-2">Altura</th>
                    <th className="p-2">Gênero</th>
                    <th className="p-2">Peso</th>
                    <th className="p-2">Signo</th>
                    <th className="p-2">Treinamento</th>
                    <th className="p-2">Patente</th>
                    <th className="p-2">Exército</th>
                    <th className="p-2">Saga</th>
                  </tr>
                </thead>
                <tbody>
                  {attempts.map((attempt, index) => (
                    <tr key={index} className="border-b border-gray-600">
                      <td className="p-2 flex flex-col items-center">
                        <img
                          src={attempt.imgSrc}
                          alt={attempt.nome}
                          className="w-24 h-auto rounded-lg mb-2"
                        />
                        <span>{attempt.nome}</span>
                      </td>
                      <td className={`p-2 ${attempt.idade}`}>
                        {attempt.idade === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : attempt.idade === "up" ? (
                          <span className="text-3xl">🔼</span>
                        ) : attempt.idade === "down" ? (
                          <span className="text-3xl">🔽</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.idade}
                        </span>
                      </td>
                      <td className={`p-2 ${attempt.altura}`}>
                        {attempt.altura === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : attempt.altura === "up" ? (
                          <span className="text-3xl">🔼</span>
                        ) : attempt.altura === "down" ? (
                          <span className="text-3xl">🔽</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.altura}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.genero === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.genero === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.genero}
                        </span>
                      </td>
                      <td className={`p-2 ${attempt.peso}`}>
                        {attempt.peso === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : attempt.peso === "up" ? (
                          <span className="text-3xl">🔼</span>
                        ) : attempt.peso === "down" ? (
                          <span className="text-3xl">🔽</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.peso}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.signo === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.signo === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.signo}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.localDeTreinamento === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.localDeTreinamento === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.localDeTreinamento}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.patente === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.patente === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.patente}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.exercito === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.exercito === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.exercito}
                        </span>
                      </td>
                      <td
                        className={`p-2 ${
                          attempt.saga === "green"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {attempt.saga === "green" ? (
                          <span className="text-3xl">✔️</span>
                        ) : (
                          <span className="text-3xl">❌</span>
                        )}
                        <br />
                        <span className="text-xs text-gray-400">
                          {attempt.guessCharacter.saga}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-lg text-white">
              Total de Tentativas: {attempts.length}
            </p>

            {/* Botão para reiniciar o jogo */}
            <button
              onClick={handleRestart}
              className="bg-yellow-500 text-gray-900 px-6 py-2 mt-6 rounded-lg font-bold text-xl hover:bg-yellow-600 transition-all duration-300"
            >
              Jogar de Novo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}