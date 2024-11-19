'use client';

import { useState, useEffect } from 'react';
import { characters, affinityQuestions } from '../../data/charactersAffinity';

export default function AffinityTestPage() {
  const [selectedQuestions, setSelectedQuestions] = useState<typeof affinityQuestions>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  useEffect(() => {
    const shuffledQuestions = [...affinityQuestions].sort(() => Math.random() - 0.5);
    setSelectedQuestions(shuffledQuestions.slice(0, 10));
  }, []);

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
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setScores({});
    setSelectedCharacter(null);
    const shuffledQuestions = [...affinityQuestions].sort(() => Math.random() - 0.5);
    setSelectedQuestions(shuffledQuestions.slice(0, 10));
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-8 ">
      <h1 className="text-5xl font-bold text-yellow-400 mb-12">Teste de Afinidade</h1>

      {selectedCharacter ? (
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
    </div>
  );
}
