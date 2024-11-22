"use client";

import React, { useState, useEffect, useRef } from "react";
import { armors } from "../../data/armors";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
  removeFromLocalStorage,
} from "../../utils/localStorageUtils";

type Armor = {
  name: string;
  category: string;
  description: string;
  knight: string;
  saga: string;
  silhouetteImg: string;
  revealedImg: string;
};

export default function SilhuetaGamePage() {
  // Adicionar referência para a seção das características
  const characteristicsRef = useRef<HTMLDivElement | null>(null);

  const [selectedSuggestion, setSelectedSuggestion] = useState<Armor | null>(null);
  const [input, setInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Armor[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(3);
  const [showOriginalZoom, setShowOriginalZoom] = useState<boolean>(false);

  const [selectedArmor, setSelectedArmor] = useState<Armor | null>(() =>
    loadFromLocalStorage<Armor>("selectedArmor", null)
  );
  const [attempts, setAttempts] = useState<string[]>(() =>
    loadFromLocalStorage<string[]>("attempts", [])
  );
  const [testedArmors, setTestedArmors] = useState<
    Array<{ name: string; category: string; revealedImg: string; isCorrect: boolean }>
  >(() =>
    loadFromLocalStorage<
      Array<{ name: string; category: string; revealedImg: string; isCorrect: boolean }>
    >("testedArmors", [])
  );
  const [won, setWon] = useState<boolean>(() => loadFromLocalStorage<boolean>("won", false));
  const [usedArmors, setUsedArmors] = useState<Armor[]>(() =>
    loadFromLocalStorage<Armor[]>("usedArmors", [])
  );
  const [showAnswer, setShowAnswer] = useState<boolean>(false);


  
  useEffect(() => {
    const initializeGame = () => {
      let availableArmors = armors.filter(
        (armor) => !usedArmors.some((used) => used.name === armor.name)
      );

      if (availableArmors.length === 0) {
        availableArmors = armors;
        setUsedArmors([]);
        removeFromLocalStorage("usedArmors");
      }

      const randomArmor =
        availableArmors[Math.floor(Math.random() * availableArmors.length)];
      setSelectedArmor(randomArmor);
      setUsedArmors([...usedArmors, randomArmor]);
    };

    if (!selectedArmor) {
      initializeGame();
    }
  }, []);

  useEffect(() => {
    const maxZoomLevel = 3;
    const minZoomLevel = 1;
    const maxAttempts = 20;

    const newZoomLevel = Math.max(
      minZoomLevel,
      maxZoomLevel - (maxZoomLevel - minZoomLevel) * (attempts.length / maxAttempts)
    );

    setZoomLevel(newZoomLevel);
  }, [attempts]);

  useEffect(() => {
    saveToLocalStorage("selectedArmor", selectedArmor);
    saveToLocalStorage("attempts", attempts);
    saveToLocalStorage("testedArmors", testedArmors);
    saveToLocalStorage("usedArmors", usedArmors);
    saveToLocalStorage("won", won);
  }, [selectedArmor, attempts, testedArmors, usedArmors, won]);

  const getFilteredSuggestions = (value: string) => {
    const normalizedValue = normalizeString(value);
    return armors.filter((armor) => {
      const normalizedArmorName = normalizeString(armor.name);
      return (
        normalizedArmorName.startsWith(normalizedValue) &&
        !testedArmors.some(
          (tested) => normalizeString(tested.name) === normalizedArmorName
        )
      );
    });
  };
  

  const normalizeString = (str: string): string => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
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

  const handleSuggestionClick = (suggestion: Armor) => {
    setInput(suggestion.name);
    setSelectedSuggestion(suggestion);
    setShowDropdown(false);
  };


  
  

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && suggestions.length > 0) {
      const currentIndex = suggestions.findIndex((s) => s === selectedSuggestion);
      const nextIndex = (currentIndex + 1) % suggestions.length;
      setSelectedSuggestion(suggestions[nextIndex]);
      setInput(suggestions[nextIndex].name);
    } else if (e.key === "ArrowUp" && suggestions.length > 0) {
      const currentIndex = suggestions.findIndex((s) => s === selectedSuggestion);
      const prevIndex = (currentIndex - 1 + suggestions.length) % suggestions.length;
      setSelectedSuggestion(suggestions[prevIndex]);
      setInput(suggestions[prevIndex].name);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim() || !selectedSuggestion) {
      return;
    }

    const guess = armors.find(
      (armor) => normalizeString(armor.name) === normalizeString(selectedSuggestion.name)
    );

    if (!guess) {
      alert("Armadura não encontrada!");
      return;
    }

    if (!selectedArmor) {
      alert("Erro interno: Armadura selecionada inválida.");
      return;
    }

    if (
      testedArmors.some(
        (tested) => normalizeString(tested.name) === normalizeString(selectedSuggestion.name)
      )
    ) {
      alert("Você já tentou essa armadura!");
      return;
    }

    const correct = normalizeString(guess.name) === normalizeString(selectedArmor.name);

    if (correct) {
      setShowAnswer(false);
      setWon(true);
      setTimeout(() => {
        characteristicsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }

    const newTestedArmor = {
      name: guess.name,
      category: guess.category,
      revealedImg: guess.revealedImg,
      isCorrect: correct,
    };

    setTestedArmors([newTestedArmor, ...testedArmors]);
    setAttempts([guess.name, ...attempts]);
    setInput("");
    setSuggestions([]);
    setShowDropdown(false);
    setSelectedSuggestion(null);
  };
  

  const handleRestart = () => {
    let availableArmors = armors.filter(
      (armor) => !usedArmors.some((used) => used.name === armor.name)
    );

    if (availableArmors.length === 0) {
      availableArmors = armors;
      setUsedArmors([]);
      removeFromLocalStorage("usedArmors");
    }

    const randomArmor =
      availableArmors[Math.floor(Math.random() * availableArmors.length)];
    setSelectedArmor(randomArmor);
    setUsedArmors([...usedArmors, randomArmor]);

    setAttempts([]);
    setTestedArmors([]);
    setWon(false);
    setZoomLevel(3);
    setInput("");
    setShowDropdown(false);
    setSelectedSuggestion(null);
    removeFromLocalStorage("selectedArmor");
    removeFromLocalStorage("attempts");
    removeFromLocalStorage("testedArmors");
    removeFromLocalStorage("won");
  };

  const handleGiveUp = () => {
    setWon(true);
    setShowAnswer(true);
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6">

      <div className="flex justify-center items-center mb-2">
        <img
          src="/dle_feed/logo_dle.png"
          alt="Logo Os Cavaleiros do Zodíaco"
          className="w-auto h-52 hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="mb-4">
        <div className="gap-4 flex items-center justify-center ">
          {/* Botão 1 */}
          <div className="relative group ">
            <button
              className="w-16 h-16 bg-transparent focus:outline-none "
              onClick={handleRestart}
            >
              <img
                src="/dle_feed/classic_icon.png"
                alt="Modo Classic"
                className="border-2 border-yellow-500 rounded-full w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
              />
            </button>
            <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Modo Classic
            </div>
          </div>

          {/* Botão 4 */}
          <div className="relative group">
            <button
              className="w-16 h-16 bg-transparent focus:outline-none"
              onClick={() => window.location.href = "/SaintSeiyaDLE/silhueta"}
            >
              <img
                src="/dle_feed/silhouette_icon.png"
                alt="Modo Silhouette"
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </button>
            <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Silhuetas
            </div>
          </div>
        
          {/* Botão 2 */}
          <div className="relative group">
            <button
              className="w-16 h-16 bg-transparent focus:outline-none"
              onClick={() => window.location.href = "/SaintSeiyaDLE/quiz"}
            >
              <img
                src="/dle_feed/quiz_icon.png"
                alt="Modo Quiz"
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </button>
            <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Quiz
            </div>
          </div>

          {/* Botão 3 */}
          <div className="relative group">
            <button
              className="w-16 h-16 bg-transparent focus:outline-none"
              onClick={() => window.location.href = "/SaintSeiyaDLE/affinity"}
            >
              <img
                src="/dle_feed/affinity_icon.png"
                alt="Modo Affinity"
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </button>
            <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Teste de Afinidade
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-800 text-white p-4 rounded-2xl shadow-lg w-[360px] mb-8 ">
        <h3 className="text-xl font-bold text-center mb-4 text-yellow-400 tracking-wide">
            De que Armadura é esta silhueta?
        </h3>
        <div className="relative w-full h-[300px] bg-white rounded-xl overflow-hidden shadow-inner border-4 border-blue-500 flex items-center justify-center">
            {selectedArmor && (
            <img
                src={selectedArmor.silhouetteImg}
                alt="Silhueta da Armadura"
                style={{
                width: `${showOriginalZoom ? 300 : zoomLevel * 100}%`,
                height: `${showOriginalZoom ? 300 : zoomLevel * 100}%`,
                objectFit: "cover",
                transition: "all 0.3s ease",
                }}
            />
            )}
        </div>
        <p className="mt-4 text-sm text-center text-gray-300">Cada tentativa diminui um pouco o zoom.</p>

        {/* Ícone para alternar o estado do zoom */}
        <div className="mt-4 flex justify-center">
            <button
            onClick={() => setShowOriginalZoom(!showOriginalZoom)}
            className="flex items-center justify-center w-14 h-14 rounded-full transition transform hover:scale-105"
            >
            {showOriginalZoom ? (
                <svg width="63" height="54" viewBox="0 0 63 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.2953 4.73979C57.2562 3.74827 57.2313 2.16555 56.2398 1.20469C55.2483 0.243833 53.6656 0.268692 52.7047 1.26022L5.70469 49.7602C4.74383 50.7517 4.76869 52.3345 5.76022 53.2953C6.75174 54.2562 8.33446 54.2313 9.29531 53.2398L56.2953 4.73979Z" fill="#8C8C8C"/>
                    <path d="M10.061 40.954C9.16303 40.1675 8.33569 39.3638 7.57723 38.5632C5.14133 35.992 3.38816 33.4286 2.24112 31.5056C1.66601 30.5414 1.23877 29.7307 0.950585 29.15C0.806383 28.8594 0.696661 28.6257 0.620353 28.4584C0.582189 28.3747 0.552351 28.3076 0.530707 28.2582L0.504357 28.1975L0.495753 28.1773L0.492587 28.1699L0.491288 28.1668C0.491288 28.1668 0.490177 28.1642 3.25508 27C0.490177 25.8358 0.491288 25.8332 0.491288 25.8332L0.492587 25.8301L0.495753 25.8227L0.504357 25.8025L0.530707 25.7418C0.552351 25.6924 0.582189 25.6253 0.620353 25.5416C0.696661 25.3743 0.806383 25.1406 0.950585 24.85C1.23877 24.2693 1.66601 23.4586 2.24112 22.4944C3.38816 20.5714 5.14133 18.008 7.57723 15.4368C12.4604 10.2823 20.198 5 31.2551 5C35.6218 5 39.4708 5.82388 42.8308 7.13838L18.2592 32.4942C16.985 30.2892 16.2559 27.7297 16.2559 25C16.2559 19.5484 19.1641 14.776 23.5139 12.1498C18.5434 13.6976 14.7396 16.6007 11.9329 19.5632C9.86883 21.742 8.37201 23.9286 7.39404 25.5681C7.06629 26.1175 6.79886 26.6021 6.58967 27C6.79886 27.3979 7.06629 27.8825 7.39404 28.4319C8.37201 30.0714 9.86883 32.258 11.9329 34.4368C12.6387 35.1817 13.4074 35.9228 14.2419 36.6397L10.061 40.954Z" fill="#8C8C8C"/>
                    <path d="M19.6608 46.8544C23.0251 48.1731 26.8803 49 31.2551 49C42.3121 49 50.0498 43.7177 54.9329 38.5632C57.3688 35.992 59.122 33.4286 60.269 31.5056C60.8442 30.5414 61.2714 29.7307 61.5596 29.15C61.7038 28.8594 61.8135 28.6257 61.8898 28.4584C61.928 28.3747 61.9578 28.3076 61.9795 28.2582L62.0058 28.1975L62.0144 28.1773L62.0176 28.1699L62.0189 28.1668C62.0189 28.1668 62.02 28.1642 59.2551 27L62.02 28.1642L62.5102 27L62.02 25.8358L59.2551 27C62.02 25.8358 62.0189 25.8332 62.0189 25.8332L62.0176 25.8301L62.0144 25.8227L62.0058 25.8025L61.9795 25.7418C61.9578 25.6924 61.928 25.6253 61.8898 25.5416C61.8135 25.3743 61.7038 25.1406 61.5596 24.85C61.2714 24.2693 60.8442 23.4586 60.269 22.4944C59.122 20.5714 57.3688 18.008 54.9329 15.4368C54.1706 14.632 53.3386 13.8242 52.4353 13.0338L48.2543 17.3483C49.0942 18.0689 49.8676 18.8142 50.5772 19.5632C52.6413 21.742 54.1382 23.9286 55.1161 25.5681C55.4439 26.1175 55.7113 26.6021 55.9205 27C55.7113 27.3979 55.4439 27.8825 55.1161 28.4319C54.1382 30.0714 52.6413 32.258 50.5772 34.4368C46.4604 38.7823 40.198 43 31.2551 43C28.7222 43 26.4044 42.6617 24.2895 42.078L19.6608 46.8544Z" fill="#8C8C8C"/>
                    <path d="M26.9198 39.3637C28.2925 39.7776 29.7482 40 31.2559 40C39.5401 40 46.2559 33.2843 46.2559 25C46.2559 23.3268 45.9819 21.7176 45.4764 20.2148L37.0913 28.8675C36.6142 29.5861 36.0079 30.2114 35.3055 30.7104L26.9198 39.3637Z" fill="#8C8C8C"/>
                    <path d="M3.25508 27L0.490177 28.1642L0 27L0.490177 25.8358L3.25508 27Z" fill="#8C8C8C"/>
                </svg>
            ) : (
                <svg width="64" height="44" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.763 20.8332C62.763 20.8332 62.7641 20.8358 59.9992 22C62.7641 23.1642 62.763 23.1668 62.763 23.1668L62.7617 23.1699L62.7586 23.1773L62.75 23.1975L62.7236 23.2582C62.702 23.3076 62.6721 23.3747 62.634 23.4584C62.5576 23.6257 62.4479 23.8594 62.3037 24.15C62.0155 24.7307 61.5883 25.5414 61.0132 26.5056C59.8661 28.4286 58.113 30.992 55.6771 33.5632C50.7939 38.7177 43.0563 44 31.9992 44C20.9422 44 13.2045 38.7177 8.32137 33.5632C5.88547 30.992 4.1323 28.4286 2.98527 26.5056C2.41016 25.5414 1.98291 24.7307 1.69473 24.15C1.55052 23.8594 1.4408 23.6257 1.36449 23.4584C1.32633 23.3747 1.29649 23.3076 1.27485 23.2582L1.2485 23.1975L1.23989 23.1773L1.23673 23.1699L1.23543 23.1668C1.23543 23.1668 1.23432 23.1642 3.99922 22C1.23432 20.8358 1.23543 20.8332 1.23543 20.8332L1.23673 20.8301L1.23989 20.8227L1.2485 20.8025L1.27485 20.7418C1.29649 20.6924 1.32633 20.6253 1.36449 20.5416C1.4408 20.3743 1.55052 20.1406 1.69473 19.85C1.98291 19.2693 2.41016 18.4586 2.98527 17.4944C4.1323 15.5714 5.88547 13.008 8.32137 10.4368C13.2045 5.28233 20.9422 0 31.9992 0C43.0563 0 50.7939 5.28233 55.6771 10.4368C58.113 13.008 59.8661 15.5714 61.0132 17.4944C61.5883 18.4586 62.0155 19.2693 62.3037 19.85C62.4479 20.1406 62.5576 20.3743 62.634 20.5416C62.6721 20.6253 62.702 20.6924 62.7236 20.7418L62.75 20.8025L62.7586 20.8227L62.7617 20.8301L62.763 20.8332ZM8.13818 23.4319C7.81043 22.8825 7.543 22.3979 7.33381 22C7.543 21.6021 7.81043 21.1175 8.13818 20.5681C9.11615 18.9286 10.613 16.742 12.6771 14.5632C15.4837 11.6007 19.2875 8.69758 24.258 7.14977C19.9083 9.77602 17 14.5484 17 20C17 28.2843 23.7157 35 32 35C40.2843 35 47 28.2843 47 20C47 14.5491 44.0924 9.77722 39.7437 7.15077C44.7126 8.69882 48.5153 11.6013 51.3214 14.5632C53.3855 16.742 54.8823 18.9286 55.8603 20.5681C56.188 21.1175 56.4554 21.6021 56.6646 22C56.4554 22.3979 56.188 22.8825 55.8603 23.4319C54.8823 25.0714 53.3855 27.258 51.3214 29.4368C47.2045 33.7823 40.9422 38 31.9992 38C23.0563 38 16.7939 33.7823 12.6771 29.4368C10.613 27.258 9.11615 25.0714 8.13818 23.4319ZM32 27C35.866 27 39 23.866 39 20C39 16.8974 36.9815 14.2662 34.186 13.3481C34.7046 14.2817 35 15.3563 35 16.5C35 20.0899 32.0899 23 28.5 23C27.3563 23 26.2817 22.7046 25.3481 22.186C26.2662 24.9815 28.8974 27 32 27Z" fill="#FFCB04"/>
                    <path d="M3.99922 22L1.23432 23.1642L0.744141 22L1.23432 20.8358L3.99922 22Z" fill="#FFCB04"/>
                    <path d="M59.9992 22L62.7641 23.1642L63.2543 22L62.7641 20.8358L59.9992 22Z" fill="#FFCB04"/>
                </svg>

            )}
            </button>
        </div>
      </div>

      {!won && (
        <>
            <form
            onSubmit={handleSubmit}
            className="flex items-center space-x-4 mb-8"
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
                        key={suggestion.name} 
                        className="flex items-center p-2 hover:bg-gray-600 cursor-pointer"
                        onClick={() => handleSuggestionClick(suggestion)}
                    >
                        <img
                        src={suggestion.revealedImg} 
                        alt={suggestion.name}
                        className="w-10 h-10 rounded-lg mr-2"
                        />
                        <span>{suggestion.name}</span>
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
        </>
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


      {/* Exibição das características detalhadas */}
      {!won && selectedArmor && (
        <div ref={characteristicsRef} className="text-center">
         <div className="mt-8 bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2 text-gray-100">Próximo modo:</h3>
                <div className="flex flex-col items-center space-y-4">
                  {/* Detalhe do próximo modo */}
                  <div
                    className="flex items-center space-x-4 cursor-pointer group w-[380px]"
                    onClick={() => window.location.href = "/SaintSeiyaDLE/classico"} // Redireciona para o modo "Silhouette"
                  >
                    <div className="w-22 h-22 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700 shadow-lg group-hover:border-yellow-500 transition duration-300">
                      <img
                        src="/dle_feed/quiz_icon.png"
                        alt="qUIZ"
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div className="bg-gray-800 border-2 border-gray-700 p-4 rounded-lg shadow-lg flex-1 group-hover:border-yellow-500 transition duration-300 h-20 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300">
                        Quiz Saint Seiya
                      </h3>
                      <p className="text-gray-300 text-sm">Acerte as Perguntas Sobre CDZ</p>
                    </div>
                  </div>

                  <div className="gap-2 bg-gray-800 flex items-center justify-center ">
                  {/* Botão 1 */}
                  <div className="relative group ">
                    <button
                      className="w-16 h-16 bg-transparent focus:outline-none "
                      onClick={() => window.location.href =  "/SaintSeiyaDLE/classico"}
                    >
                      <img
                        src="/dle_feed/classic_icon.png"
                        alt="Modo Classic"
                        className=" w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </button>
                    <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Modo Classic
                    </div>
                  </div>
                  
                    {/* Botão 4 */}
                    <div className="relative group">
                      <button
                        className="w-16 h-16 bg-transparent focus:outline-none"
                        onClick={handleRestart}
                      >
                        <img
                          src="/dle_feed/silhouette_icon.png"
                          alt="Modo Silhouette"
                          className="border-2 border-yellow-500 rounded-full w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </button>
                      <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Silhuetas
                      </div>
                    </div>

                    {/* Botão 2 */}
                    <div className="relative group">
                      <button
                        className="w-16 h-16 bg-transparent focus:outline-none"
                        onClick={() => window.location.href = "/SaintSeiyaDLE/quiz"}
                      >
                        <img
                          src="/dle_feed/quiz_icon.png"
                          alt="Modo Quiz"
                          className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                      </button>
                      <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Quiz
                      </div>
                    </div>

                    {/* Botão 3 */}
                    <div className="relative group">
                      <button
                        className="w-16 h-16 bg-transparent focus:outline-none"
                        onClick={() => window.location.href = "/SaintSeiyaDLE/affinity"}
                      >
                        <img
                          src="/dle_feed/affinity_icon.png"
                          alt="Modo Affinity"
                          className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                      </button>
                      <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Teste de Afinidade
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}


      {/* Exibição das características detalhadas */}
      {won && selectedArmor && (
        <div ref={characteristicsRef} className="text-center">
         <div className="mt-8 bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
            <h2 className="text-4xl text-green-400 mb-4">
                {showAnswer ? "Você desistiu!" : "Parabéns! Você acertou!"}
            </h2>
            <img
              src={selectedArmor.revealedImg}
              alt="Armadura Revelada"
              className="mb-4 relative w-full h-full bg-white rounded-xl overflow-hidden shadow-inner border-4 border-blue-500 flex items-center justify-center "
            />
            <h2 className="text-2xl font-bold text-yellow-400 mb-4"><strong>{selectedArmor.name}</strong></h2>
            <p className="text-sm mb-2"><strong>Categoria:</strong> {selectedArmor.category}</p>
            <p className="text-sm mb-2"><strong>Cavaleiro:</strong> {selectedArmor.knight}</p>
            <p className="text-sm mb-2"><strong>Saga:</strong> {selectedArmor.saga}</p>
            <p className="text-sm mb-4"><strong>Descrição:</strong> {selectedArmor.description}</p>
            <p className="text-md font-semibold mb-4">
                Tentativas: <span className="font-bold text-lg">{attempts.length}</span>
            </p>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-red-700 transition duration-300 mb-4"
              onClick={() => alert('Estatísticas ainda não implementadas.')}
            >
              📊 Estatísticas
            </button>
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2 text-gray-100">Próximo modo:</h3>
                <div className="flex flex-col items-center space-y-4">
                  {/* Detalhe do próximo modo */}
                  <div
                    className="flex items-center space-x-4 cursor-pointer group w-[380px]"
                    onClick={() => window.location.href = "/SaintSeiyaDLE/classico"} // Redireciona para o modo "Silhouette"
                  >
                    <div className="w-22 h-22 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700 shadow-lg group-hover:border-yellow-500 transition duration-300">
                      <img
                        src="/dle_feed/quiz_icon.png"
                        alt="qUIZ"
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div className="bg-gray-800 border-2 border-gray-700 p-4 rounded-lg shadow-lg flex-1 group-hover:border-yellow-500 transition duration-300 h-20 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300">
                        Quiz Saint Seiya
                      </h3>
                      <p className="text-gray-300 text-sm">Acerte as Perguntas Sobre CDZ</p>
                    </div>
                  </div>

                  <div className="gap-2 bg-gray-800 flex items-center justify-center ">
                  {/* Botão 1 */}
                  <div className="relative group ">
                    <button
                      className="w-16 h-16 bg-transparent focus:outline-none "
                      onClick={() => window.location.href =  "/SaintSeiyaDLE/classico"}
                    >
                      <img
                        src="/dle_feed/classic_icon.png"
                        alt="Modo Classic"
                        className=" w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </button>
                    <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Modo Classic
                    </div>
                  </div>
                  
                    {/* Botão 4 */}
                    <div className="relative group">
                      <button
                        className="w-16 h-16 bg-transparent focus:outline-none"
                        onClick={handleRestart}
                      >
                        <img
                          src="/dle_feed/silhouette_icon.png"
                          alt="Modo Silhouette"
                          className="border-2 border-yellow-500 rounded-full w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </button>
                      <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Silhuetas
                      </div>
                    </div>

                    {/* Botão 2 */}
                    <div className="relative group">
                      <button
                        className="w-16 h-16 bg-transparent focus:outline-none"
                        onClick={() => window.location.href = "/SaintSeiyaDLE/quiz"}
                      >
                        <img
                          src="/dle_feed/quiz_icon.png"
                          alt="Modo Quiz"
                          className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                      </button>
                      <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Quiz
                      </div>
                    </div>

                    {/* Botão 3 */}
                    <div className="relative group">
                      <button
                        className="w-16 h-16 bg-transparent focus:outline-none"
                        onClick={() => window.location.href = "/SaintSeiyaDLE/affinity"}
                      >
                        <img
                          src="/dle_feed/affinity_icon.png"
                          alt="Modo Affinity"
                          className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                      </button>
                      <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Teste de Afinidade
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}
      {!won && (
        <button
            onClick={handleGiveUp}
            className="bg-red-500 text-gray-900 px-6 py-2 mt-8 rounded-lg font-bold text-xl hover:bg-red-600 transition-all duration-300"
        >
            Desistir
        </button>
      )}
      {won && (
        <button
            onClick={handleRestart}
            className="bg-yellow-500 text-gray-900 px-6 py-2 mt-6 rounded-lg font-bold text-xl hover:bg-yellow-600 transition-all duration-300"
            >
            Jogar Novamente
        </button>
      )}
    { !won && selectedArmor && (
        <button
            onClick={() => alert(`Armadurda atual: ${selectedArmor.name}`)}
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
      )}
    </div>
  );
}
