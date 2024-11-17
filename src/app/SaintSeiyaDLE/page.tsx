// src/app/game/page.tsx

"use client";
import { useState, useEffect } from "react";
import characters from "../data/charactersDLE"; // Certifique-se de que os dados dos personagens estão aqui
import React from "react";

// Definindo o tipo dos personagens para melhorar a tipagem
type Character = {
  nome: string;
  idade: string;
  altura: string;
  genero: string;
  peso: string;
  signo: string;
  localDeTreinamento: string;
  patente: string;
  exercito: string;
  saga?: string; // Tornando opcional para evitar problemas com undefined
  imgSrc: string;
  dica1?: string; // Nova propriedade para a primeira dica
  dica2?: string; // Nova propriedade para a segunda dica
};

type Achievement =
  | "Primeira Vitória"
  | "Vitória em 10 Tentativas"
  | "Vitória em 7 Tentativas"
  | "Vitória em 5 Tentativas"
  | "Vitória em 3 Tentativas"
  | "Vitória em 1 Tentativa";

export default function GamePage() {
  // Função auxiliar para salvar no localStorage
  const saveToLocalStorage = (key: string, value: any) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Erro ao salvar no localStorage: ${key}`, error);
      }
    }
  };

  // Função auxiliar para carregar do localStorage
  const loadFromLocalStorage = (key: string, defaultValue: any) => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultValue;
      } catch {
        return defaultValue;
      }
    }
    return defaultValue;
  };

  const [selectedSuggestion, setSelectedSuggestion] = useState<Character | null>(null);

  const [showHint1, setShowHint1] = useState<boolean>(false);
  const [showHint2, setShowHint2] = useState<boolean>(false);

  const [selectedCharacter, setSelectedCharacter] = useState<Character>(() =>
    loadFromLocalStorage(
      "selectedCharacter",
      characters.length > 0 ? characters[Math.floor(Math.random() * characters.length)] : null
    )
  );
  
  const [input, setInput] = useState<string>("");
  const [attempts, setAttempts] = useState<any[]>(() =>
    loadFromLocalStorage("attempts", [])
  );
  const [won, setWon] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<Character[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const [dica1, setDica1] = useState<string | null>(null); // Estado para a primeira dica
  const [dica2, setDica2] = useState<string | null>(null); // Estado para a segunda dica

  useEffect(() => {
    if (attempts.length >= 5 && !dica1 && selectedCharacter?.dica1) {
      setDica1(selectedCharacter.dica1);
    }
    if (attempts.length >= 10 && !dica2 && selectedCharacter?.dica2) {
      setDica2(selectedCharacter.dica2);
    }
  }, [attempts, selectedCharacter, dica1, dica2]);

  // Adicionar estado de conquistas
  const [achievements, setAchievements] = useState<Achievement[]>(() =>
    loadFromLocalStorage("achievements", [])
  );
  
  const [recentAchievement, setRecentAchievement] = useState<Achievement | null>(null);

  // Função para converter altura de string para número
  const parseHeight = (height: string): number => {
    if (height.toLowerCase() === "desconhecido") return NaN; // Retorna NaN para "desconhecido"
    return parseFloat(height.replace(",", ".").replace(" m", "").trim());
  };

  // Função para comparar números como idade e peso
  const compareAge = (value: string, target: string): string => {
    const valueLower = value.toLowerCase();
    const targetLower = target.toLowerCase();

    // Ambos são "desconhecido"
    if (valueLower === "desconhecida" && targetLower === "desconhecida") {
      return "green";
    }

    // Um dos dois é "desconhecido"
    if (valueLower === "desconhecida" || targetLower === "desconhecida") {
      return "red";
    }

    // Ambos são "imortal"
    if (valueLower === "imortal" && targetLower === "imortal") {
      return "green";
    }

    // Um é "imortal"
    if (valueLower === "imortal") {
      return "down";
    }
    if (targetLower === "imortal") {
      return "up";
    }

    // Comparação numérica
    const numericValue = parseFloat(value);
    const numericTarget = parseFloat(target);

    if (isNaN(numericValue) || isNaN(numericTarget)) return "red";
    if (numericValue === numericTarget) return "green";
    return numericValue < numericTarget ? "up" : "down";
  };
  
  const compareWeight = (value: string, target: string): string => {
    const valueLower = value.toLowerCase();
    const targetLower = target.toLowerCase();
  
    // Caso ambos sejam "desconhecido"
    if (valueLower === "desconhecido" && targetLower === "desconhecido") return "green";
  
    // Caso um dos valores seja "desconhecido"
    if (valueLower === "desconhecido" || targetLower === "desconhecido") return "ignore";
  
    // Comparação numérica para valores válidos
    const numericValue = parseFloat(value);
    const numericTarget = parseFloat(target);
  
    if (isNaN(numericValue) || isNaN(numericTarget)) return "ignore";
    if (numericValue === numericTarget) return "green";
    return numericValue < numericTarget ? "up" : "down";
  };

  // Comparação de alturas (que são strings)
  const compareHeight = (value: string, target: string): string => {
    const valueLower = value.toLowerCase();
    const targetLower = target.toLowerCase();
  
    // Ambos são "desconhecido"
    if (valueLower === "desconhecida" && targetLower === "desconhecida") {
      return "green";
    }
  
    // Um dos dois é "desconhecido"
    if (valueLower === "desconhecida" || targetLower === "desconhecida") {
      return "red";
    }
  
    // Comparação numérica
    const numericValue = parseHeight(value);
    const numericTarget = parseHeight(target);
  
    if (isNaN(numericValue) || isNaN(numericTarget)) return "red";
    if (numericValue === numericTarget) return "green";
    return numericValue < numericTarget ? "up" : "down";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!input.trim() || !selectedSuggestion) {
      alert("Selecione ou digite um personagem válido!");
      return;
    }
  
    const guess = characters.find(
      (char: Character) => char.nome.toLowerCase() === selectedSuggestion.nome.toLowerCase()
    );
  
    if (!guess) {
      alert("Personagem não encontrado!");
      return;
    }
  
    if (!selectedCharacter) {
      alert("Erro interno: Personagem selecionado inválido.");
      return;
    }
  
    if (isAlreadyTried(selectedSuggestion.nome)) {
      alert("Você já tentou esse personagem!");
      return;
    }
  
    const correct = guess.nome === selectedCharacter.nome;
  
    const comparison = {
      nome: guess.nome,
      idade: compareAge(guess.idade, selectedCharacter.idade),
      altura: compareHeight(guess.altura, selectedCharacter.altura), // Atualizado para usar compareHeight
      peso: compareWeight(guess.peso, selectedCharacter.peso),
      genero: guess.genero === selectedCharacter.genero ? "green" : "red",
      signo: guess.signo === selectedCharacter.signo ? "green" : "red",
      localDeTreinamento: guess.localDeTreinamento === selectedCharacter.localDeTreinamento ? "green" : "red",
      patente: guess.patente === selectedCharacter.patente ? "green" : "red",
      exercito: guess.exercito === selectedCharacter.exercito ? "green" : "red",
      saga: guess.saga === selectedCharacter.saga ? "green" : "red",
      imgSrc: guess.imgSrc,
      guessCharacter: guess,
    };
  
    if (correct) {
      setWon(true);
      checkAchievements();
    }
  
    setAttempts([comparison, ...attempts]);
    setInput("");
    setSuggestions([]);
    setShowDropdown(false);
    setSelectedSuggestion(null);
  };

  // Salva o personagem e tentativas no localStorage sempre que houver mudanças
  useEffect(() => {
    saveToLocalStorage("selectedCharacter", selectedCharacter);
    saveToLocalStorage("attempts", attempts);
    saveToLocalStorage("achievements", achievements);
  }, [selectedCharacter, attempts, achievements]);

  const checkAchievements = () => {
    const newAchievements: Achievement[] = [];

    if (!achievements.includes("Primeira Vitória")) {
      newAchievements.push("Primeira Vitória");
    }
    if (attempts.length <= 10 && !achievements.includes("Vitória em 10 Tentativas")) {
      newAchievements.push("Vitória em 10 Tentativas");
    }
    if (attempts.length <= 7 && !achievements.includes("Vitória em 7 Tentativas")) {
      newAchievements.push("Vitória em 7 Tentativas");
    }
    if (attempts.length <= 5 && !achievements.includes("Vitória em 5 Tentativas")) {
      newAchievements.push("Vitória em 5 Tentativas");
    }
    if (attempts.length <= 3 && !achievements.includes("Vitória em 3 Tentativas")) {
      newAchievements.push("Vitória em 3 Tentativas");
    }
    if (attempts.length < 1 && !achievements.includes("Vitória em 1 Tentativa")) {
      newAchievements.push("Vitória em 1 Tentativa");
    }

    if (newAchievements.length > 0) {
      setAchievements([...achievements, ...newAchievements]);
      setRecentAchievement(newAchievements[0]); // Exibe a primeira conquista desbloqueada
    }
  };

  // Função para fechar a notificação de conquista
  const closeAchievementNotification = () => {
    setRecentAchievement(null);
  };
  
  // Função que verifica se o personagem já foi tentado
  const isAlreadyTried = (nome: string) => {
    return attempts.some((attempt) => attempt.nome.toLowerCase() === nome.toLowerCase());
  };

  // Função para normalizar o texto, removendo acentos e caracteres especiais
  const normalizeText = (text: string) => {
    return text
      .normalize("NFD") // Remove acentos
      .replace(/[\u0300-\u036f]/g, "") // Remove marcas de diacríticos
      .replace(/[^\w\s]/gi, "") // Remove caracteres especiais
      .toLowerCase(); // Converte para minúsculas
  };
  

  // Função para filtrar personagens não tentados para o dropdown de sugestões
  const getFilteredSuggestions = (value: string) => {
    const normalizedValue = normalizeText(value);
    return characters.filter(
      (char: Character) =>
        normalizeText(char.nome).includes(normalizedValue) && !isAlreadyTried(char.nome)
    );
  };
  

  // Função para desistir do jogo
  const handleGiveUp = () => {
    setShowAnswer(true);
    setWon(true); // Considera como "fim de jogo"
    localStorage.removeItem("selectedCharacter");
    localStorage.removeItem("attempts");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInput(value);

    if (value) {
      const filteredSuggestions = getFilteredSuggestions(value);
      setSuggestions(filteredSuggestions);
      setShowDropdown(true);
      setSelectedSuggestion(filteredSuggestions[0] || null);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
      setSelectedSuggestion(null);
    }
  }; 
  

  const handleSuggestionClick = (suggestion: Character) => {
    setInput(suggestion.nome); // Atualiza o valor do input com o nome do personagem clicado
    setSelectedSuggestion(suggestion); // Define o personagem clicado como selecionado
    setShowDropdown(false); // Fecha o dropdown
  };
  

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && suggestions.length > 0) {
      const currentIndex = suggestions.findIndex((s) => s === selectedSuggestion);
      const nextIndex = (currentIndex + 1) % suggestions.length;
      setSelectedSuggestion(suggestions[nextIndex]);
      setInput(suggestions[nextIndex].nome);
    } else if (e.key === "ArrowUp" && suggestions.length > 0) {
      const currentIndex = suggestions.findIndex((s) => s === selectedSuggestion);
      const prevIndex = (currentIndex - 1 + suggestions.length) % suggestions.length;
      setSelectedSuggestion(suggestions[prevIndex]);
      setInput(suggestions[prevIndex].nome);
    }
  };  
  
  // Função para reiniciar o jogo
  const handleRestart = () => {
    const usedCharacters = loadFromLocalStorage("usedCharacters", []);
    
    // Obter personagens restantes
    const remainingCharacters = characters.filter(
      (char) => !usedCharacters.includes(char.nome)
    );
  
    let randomCharacter;
  
    if (remainingCharacters.length > 0) {
      // Escolher um personagem aleatório dos que ainda não foram usados
      randomCharacter = remainingCharacters[Math.floor(Math.random() * remainingCharacters.length)];
      // Atualizar lista de usados
      saveToLocalStorage("usedCharacters", [...usedCharacters, randomCharacter.nome]);
    } else {
      // Todos os personagens foram usados, resetar e escolher novamente
      randomCharacter = characters[Math.floor(Math.random() * characters.length)];
      saveToLocalStorage("usedCharacters", [randomCharacter.nome]);
    }
  
    if (!randomCharacter) {
      alert("Nenhum personagem disponível para reiniciar o jogo.");
      return;
    }
  
    setAttempts([]);
    setSelectedCharacter(randomCharacter);
    setInput("");
    setWon(false);
    setShowAnswer(false);
    setShowHint1(false);
    setShowHint2(false);
    setDica1(null);
    setDica2(null);
    localStorage.removeItem("selectedCharacter");
    localStorage.removeItem("attempts");
  };
  

  useEffect(() => {
    try {
      if (recentAchievement) {
        const timeout = setTimeout(() => setRecentAchievement(null), 3000);
        return () => clearTimeout(timeout);
      }
    } catch (error) {
      console.error("Erro inesperado no sistema de conquistas:", error);
    }
  }, [recentAchievement]);

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6">
      {/* Notificação de Conquista */}
      {recentAchievement && (
        <div
          className="fixed top-10 right-10 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg shadow-lg animate-bounce z-50"
          onClick={closeAchievementNotification}
        >
          <p className="text-lg font-bold">Conquista Desbloqueada!</p>
          <p className="text-sm">{recentAchievement}</p>
        </div>
      )}
      <div className="flex justify-center items-center mb-8">
        <img
          src="/dle_feed/logo_dle.png"
          alt="Logo Os Cavaleiros do Zodíaco"
          className="w-auto h-52 hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg p-4 mb-6">
        <h3 className="text-xl font-bold text-center mb-4 text-yellow-400 tracking-wide">
          Adivinha qual é a personagem de<br></br>Saint Seiya
        </h3>
        <div className="flex justify-between gap-4">
          {/* Botão Dica 1 */}
          <div
            onClick={() => setShowHint1(!showHint1)}
            className={`cursor-pointer flex-1 p-3 text-center border-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
              attempts.length >= 5
                ? "border-yellow-500 bg-gray-700 hover:bg-yellow-500 hover:text-gray-900 shadow-md"
                : "border-gray-600 bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            Dica 1
          </div>

          {/* Botão Dica 2 */}
          <div
            onClick={() => setShowHint2(!showHint2)}
            className={`cursor-pointer flex-1 p-3 text-center border-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
              attempts.length >= 10
                ? "border-yellow-500 bg-gray-700 hover:bg-yellow-500 hover:text-gray-900 shadow-md"
                : "border-gray-600 bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            Dica 2
          </div>
        </div>

        {/* Exibir texto da Dica 1 */}
        {showHint1 && attempts.length >= 5 && (
          <div className="mt-4 p-2 bg-gray-700 rounded-lg text-center text-sm font-semibold text-yellow-400 shadow-md">
            {dica1 || "Nenhuma dica disponível para este personagem."}
          </div>
        )}

        {/* Exibir texto da Dica 2 */}
        {showHint2 && attempts.length >= 10 && (
          <div className="mt-4 p-2 bg-gray-700 rounded-lg text-center text-sm font-semibold text-yellow-400 shadow-md">
            {dica2 || "Nenhuma dica disponível para este personagem."}
          </div>
        )}

        {/* Contagem regressiva para as dicas */}
        <div className="mt-4 text-center text-sm">
          {attempts.length < 5 && (
            <p className="text-gray-400">
              Faltam{" "}
              <span className="font-bold text-yellow-500">{5 - attempts.length}</span>{" "}
              tentativas para <span className="text-yellow-400">Dica 1</span>.
            </p>
          )}
          {attempts.length >= 5 && attempts.length < 10 && (
            <p className="text-gray-400">
              Faltam{" "}
              <span className="font-bold text-yellow-500">{10 - attempts.length}</span>{" "}
              tentativas para <span className="text-yellow-400">Dica 2</span>.
            </p>
          )}
        </div>
      </div>
      
      {!won ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex items-center space-x-4 mb-8" // Altera para "items-center" e "space-x-4" para alinhar horizontalmente
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


          <div className="w-full max-w-5xl grid grid-cols-10 gap-2 mt-8 bg-gray-800 p-4 rounded-lg shadow-lg">
            {/* Títulos das Colunas */}
            {[
              "Personagem",
              "Gênero",
              "Idade",
              "Altura",
              "Peso",
              "Signo",
              "Patente",
              "Exército",
              "Treinamento",
              "Saga",
            ].map((header, headerIndex) => (
              <div
                key={headerIndex}
                className="text-center text-yellow-400 font-bold border-b-2 border-yellow-500 pb-2 break-words uppercase"
              >
                {header}
              </div>
            ))}

            {/* Tentativas */}
            {attempts.map((attempt, index) => (
              <React.Fragment key={index}>
                {/* Personagem */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.imgSrc}
                    alt={attempt.nome}
                    className="w-16 h-16 rounded-lg object-cover mb-2 border-2 border-gray-500 shadow-md"
                  />
                  <span className="text-xs text-gray-200 font-semibold text-center break-words">
                    {attempt.nome}
                  </span>
                </div>

                {/* Gênero */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.genero === "green" ? "/dle_feed/certo.png" : "/dle_feed/errado.png"}
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.genero}
                  </span>
                </div>

                {/* Idade */}
                <div className="flex flex-col items-center">
                  <img
                    src={
                      attempt.idade === "green"
                        ? "/dle_feed/certo.png"
                        : attempt.idade === "up"
                        ? "/dle_feed/mais.png"
                        : attempt.idade === "down"
                        ? "/dle_feed/menos.png"
                        : "/dle_feed/errado.png"
                    }
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.idade}
                  </span>
                </div>

                {/* Altura */}
                <div className="flex flex-col items-center">
                  <img
                    src={
                      attempt.altura === "green"
                        ? "/dle_feed/certo.png"
                        : attempt.altura === "up"
                        ? "/dle_feed/mais.png"
                        : attempt.altura === "down"
                        ? "/dle_feed/menos.png"
                        : "/dle_feed/errado.png"
                    }
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.altura}
                  </span>
                </div>

                {/* Peso */}
                <div className="flex flex-col items-center">
                  <img
                    src={
                      attempt.peso === "green"
                        ? "/dle_feed/certo.png"
                        : attempt.peso === "up"
                        ? "/dle_feed/mais.png"
                        : attempt.peso === "down"
                        ? "/dle_feed/menos.png"
                        : "/dle_feed/errado.png"
                    }
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.peso}
                  </span>
                </div>

                {/* Signo */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.signo === "green" ? "/dle_feed/certo.png" : "/dle_feed/errado.png"}
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.signo}
                  </span>
                </div>

                {/* Patente */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.patente === "green" ? "/dle_feed/certo.png" : "/dle_feed/errado.png"}
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.patente}
                  </span>
                </div>

                {/* Exército */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.exercito === "green" ? "/dle_feed/certo.png" : "/dle_feed/errado.png"}
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.exercito}
                  </span>
                </div>

                {/* Treinamento */}
                <div className="flex flex-col items-center">
                  <img
                    src={
                      attempt.localDeTreinamento === "green"
                        ? "/dle_feed/certo.png"
                        : "/dle_feed/errado.png"
                    }
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.localDeTreinamento}
                  </span>
                </div>

                {/* Saga */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.saga === "green" ? "/dle_feed/certo.png" : "/dle_feed/errado.png"}
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.saga}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center text-yellow-400">Indicadores</h3>
            <div className="flex items-center justify-around space-x-4">
              
              {/* Indicador - Correto */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                  <img
                    src="/dle_feed/certo.png"
                    alt="Correto"
                    className="w-full h-full rounded-lg object-contain"
                  />
                </div>
                <span className="text-sm text-white mt-2">Correto</span>
              </div>

              {/* Indicador - Incorreto */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                  <img
                    src="/dle_feed/errado.png"
                    alt="Incorreto"
                    className="w-full h-full rounded-lg object-contain"
                  />
                </div>
                <span className="text-sm text-white mt-2">Incorreto</span>
              </div>

              {/* Indicador - Mais Alto */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                  <img
                    src="/dle_feed/mais.png"
                    alt="Mais Alto"
                    className="w-full h-full rounded-lg object-contain"
                  />
                </div>
                <span className="text-sm text-white mt-2">Mais alto</span>
              </div>

              {/* Indicador - Mais Baixo */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                  <img
                    src="/dle_feed/menos.png"
                    alt="Mais Baixo"
                    className="w-full h-full rounded-lg object-contain"
                  />
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
          <div className="mt-8 w-full max-w-5xl grid grid-cols-10 gap-2 bg-gray-800 p-4 rounded-lg shadow-lg">
            {/* Títulos das Colunas */}
            {[
              "Personagem",
              "Gênero",
              "Idade",
              "Altura",
              "Peso",
              "Signo",
              "Patente",
              "Exército",
              "Treinamento",
              "Saga",
            ].map((header, headerIndex) => (
              <div
                key={headerIndex}
                className="text-center text-yellow-400 font-bold border-b-2 border-yellow-500 pb-2 break-words uppercase"
              >
                {header}
              </div>
            ))}

            {/* Renderizar tentativas */}
            {attempts.map((attempt, index) => (
              <React.Fragment key={index}>
                {/* Personagem */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.imgSrc}
                    alt={attempt.nome}
                    className="w-16 h-16 rounded-lg object-cover mb-2 border-2 border-gray-500 shadow-md"
                  />
                  <span className="text-xs text-gray-200 font-semibold text-center break-words">
                    {attempt.nome}
                  </span>
                </div>

                {/* Gênero */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.genero === "green" ? "/dle_feed/certo.png" : "/dle_feed/errado.png"}
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.genero}
                  </span>
                </div>

                {/* Idade */}
                <div className="flex flex-col items-center">
                  <img
                    src={
                      attempt.idade === "green"
                        ? "/dle_feed/certo.png"
                        : attempt.idade === "up"
                        ? "/dle_feed/mais.png"
                        : attempt.idade === "down"
                        ? "/dle_feed/menos.png"
                        : "/dle_feed/errado.png"
                    }
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.idade}
                  </span>
                </div>

                {/* Altura */}
                <div className="flex flex-col items-center">
                  <img
                    src={
                      attempt.altura === "green"
                        ? "/dle_feed/certo.png"
                        : attempt.altura === "up"
                        ? "/dle_feed/mais.png"
                        : attempt.altura === "down"
                        ? "/dle_feed/menos.png"
                        : "/dle_feed/errado.png"
                    }
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.altura}
                  </span>
                </div>

                {/* Peso */}
                <div className="flex flex-col items-center">
                  <img
                    src={
                      attempt.peso === "green"
                        ? "/dle_feed/certo.png"
                        : attempt.peso === "up"
                        ? "/dle_feed/mais.png"
                        : attempt.peso === "down"
                        ? "/dle_feed/menos.png"
                        : "/dle_feed/errado.png"
                    }
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.peso}
                  </span>
                </div>

                {/* Signo */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.signo === "green" ? "/dle_feed/certo.png" : "/dle_feed/errado.png"}
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.signo}
                  </span>
                </div>

                {/* Patente */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.patente === "green" ? "/dle_feed/certo.png" : "/dle_feed/errado.png"}
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.patente}
                  </span>
                </div>

                {/* Exército */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.exercito === "green" ? "/dle_feed/certo.png" : "/dle_feed/errado.png"}
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.exercito}
                  </span>
                </div>

                {/* Treinamento */}
                <div className="flex flex-col items-center">
                  <img
                    src={
                      attempt.localDeTreinamento === "green"
                        ? "/dle_feed/certo.png"
                        : "/dle_feed/errado.png"
                    }
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.localDeTreinamento}
                  </span>
                </div>

                {/* Saga */}
                <div className="flex flex-col items-center">
                  <img
                    src={attempt.saga === "green" ? "/dle_feed/certo.png" : "/dle_feed/errado.png"}
                    alt="Feedback"
                    className="w-16 h-16 rounded-lg object-cover mb-2 shadow-md"
                  />
                  <span className="text-xs text-gray-400 text-center break-words">
                    {attempt.guessCharacter.saga}
                  </span>
                </div>
              </React.Fragment>
            ))}  
          </div>
          {/* Adiciona o total de tentativas e o botão de reinício */}
          <div className="col-span-10 text-center">
            <p className="mt-4 text-center text-lg text-white">
              Total de Tentativas: {attempts.length}
            </p>
            <button
              onClick={handleRestart}
              className="bg-yellow-500 text-gray-900 px-6 py-2 mt-6 rounded-lg font-bold text-xl hover:bg-yellow-600 transition-all duration-300"
            >
              Jogar de Novo
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => alert(`Personagem atual: ${selectedCharacter.nome}`)}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          width: "20px",
          height: "20px",
          opacity: 0,
          cursor: "pointer",
        }}
        aria-label="Mostrar Personagem Atual"
      />
    </div>
  );
}