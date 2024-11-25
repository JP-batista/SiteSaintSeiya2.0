'use client';

import { useState, useEffect } from 'react';
import { characters, affinityQuestions } from '../../data/charactersAffinity';
import {
  salvarToLocalStorage,
  carregarFromLocalStorage,
  removerFromLocalStorage,
} from '../../utils/localStorageUtils';

const LOCAL_STORAGE_PREFIX = 'AffinityTest_';

export default function AffinityTestPage() {
  const [testStarted, setTestStarted] = useState(() =>
    carregarFromLocalStorage('testStarted', false, LOCAL_STORAGE_PREFIX)
  );
  const [selectedQuestions, setSelectedQuestions] = useState<typeof affinityQuestions>(() =>
    carregarFromLocalStorage('selectedQuestions', [], LOCAL_STORAGE_PREFIX)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() =>
    carregarFromLocalStorage('currentQuestionIndex', 0, LOCAL_STORAGE_PREFIX)
  );
  const [scores, setScores] = useState<{ [key: string]: number }>(() =>
    carregarFromLocalStorage('scores', {}, LOCAL_STORAGE_PREFIX)
  );
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(() =>
    carregarFromLocalStorage('selectedCharacter', null, LOCAL_STORAGE_PREFIX)
  );
  const [isVictory, setIsVictory] = useState(() =>
    carregarFromLocalStorage('isVictory', false, LOCAL_STORAGE_PREFIX)
  );

  useEffect(() => {
    if (!selectedQuestions.length && testStarted) {
      const shuffledQuestions = [...affinityQuestions].sort(() => Math.random() - 0.5);
      setSelectedQuestions(shuffledQuestions.slice(0, 10));
    }
  }, [testStarted]);

  useEffect(() => {
    salvarToLocalStorage('testStarted', testStarted, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('selectedQuestions', selectedQuestions, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('currentQuestionIndex', currentQuestionIndex, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('scores', scores, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('selectedCharacter', selectedCharacter, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('isVictory', isVictory, LOCAL_STORAGE_PREFIX);
  }, [testStarted, selectedQuestions, currentQuestionIndex, scores, selectedCharacter, isVictory]);

  const handleStartTest = () => {
    setTestStarted(true);
    setSelectedCharacter(null);
    setIsVictory(false);
  };

  const handleAnswer = (traits: string[]) => {
    const updatedScores = { ...scores };
    traits.forEach((trait) => {
      updatedScores[trait] = (updatedScores[trait] || 0) + 1;
    });
    setScores(updatedScores);

    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateAffinity();
    }
  };

  const calculateAffinity = () => {
    let maxScore = 0;
    let matchedCharacter = null;

    characters.forEach((character) => {
      const characterScore = character.traits.reduce((sum, trait) => sum + (scores[trait] || 0), 0);
      if (characterScore > maxScore) {
        maxScore = characterScore;
        matchedCharacter = character.name;
      }
    });
    setSelectedCharacter(matchedCharacter);
    setIsVictory(true);
  };

  const resetTest = () => {
    setTestStarted(false);
    setCurrentQuestionIndex(0);
    setScores({});
    setSelectedCharacter(null);
    setIsVictory(false);
    removerFromLocalStorage('testStarted', LOCAL_STORAGE_PREFIX);
    removerFromLocalStorage('selectedQuestions', LOCAL_STORAGE_PREFIX);
    removerFromLocalStorage('currentQuestionIndex', LOCAL_STORAGE_PREFIX);
    removerFromLocalStorage('scores', LOCAL_STORAGE_PREFIX);
    removerFromLocalStorage('selectedCharacter', LOCAL_STORAGE_PREFIX);
    removerFromLocalStorage('isVictory', LOCAL_STORAGE_PREFIX);
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-8">
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
              onClick={() => window.location.href = "/SaintSeiyaDLE/classico"}
            >
              <img
                src="/dle_feed/classic_icon.png"
                alt="Modo Classic"
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
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
                className="border-2 border-yellow-500 rounded-full w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
              />
            </button>
            <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Teste de Afinidade
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold text-yellow-400 mb-12">Teste de Afinidade</h1>

      {!testStarted ? (
        <>
          <button
            onClick={handleStartTest}
            className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            Iniciar Teste
          </button>

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
                        src="/dle_feed/classic_icon.png"
                        alt="qUIZ"
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div className="bg-gray-800 border-2 border-gray-700 p-4 rounded-lg shadow-lg flex-1 group-hover:border-yellow-500 transition duration-300 h-20 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300">
                        Modo Classico
                      </h3>
                      <p className="text-gray-300 text-sm">Acerte o personagem de Saint Seiya</p>
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
                      onClick={() => window.location.href =  "/SaintSeiyaDLE/silhueta"}
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
                        className="border-2 border-yellow-500 rounded-full w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
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
        </>
      ) : selectedCharacter ? (
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Você se assemelha ao:</h2>
          <div
            className="w-full max-w-lg h-80 rounded-lg shadow-2xl border-4 border-yellow-500 mb-8"
            style={{
              backgroundImage: `url(${characters.find((char) => char.name === selectedCharacter)?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: '85% center',
            }}
          ></div>
          <h3 className="text-3xl text-yellow-300">{selectedCharacter}</h3>
          <p className="text-lg mt-4 mb-8 text-gray-200">
            {characters.find((char) => char.name === selectedCharacter)?.description}
          </p>
          <button
            onClick={resetTest}
            className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            Refazer Teste
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-gray-800 bg-opacity-90 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">
            {selectedQuestions[currentQuestionIndex]?.question}
          </h2>
          <div className="space-y-4">
            {selectedQuestions[currentQuestionIndex]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.traits)}
                className="w-full bg-gradient-to-br from-gray-700 to-gray-800 bg-opacity-75 p-4 rounded-lg shadow-md text-left hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                {option.answer}
              </button>
            ))}
          </div>
        </div>
      )}

      {isVictory && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-gray-900 px-6 py-4 rounded-lg shadow-lg text-center font-semibold animate-bounce">
          🎉 Você completou o Teste de Afinidade!
        </div>
      )}
    </div>
  );
}
