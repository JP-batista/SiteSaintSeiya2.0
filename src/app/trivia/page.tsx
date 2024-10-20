// src/components/TriviaGame.tsx
"use client";

import { useState, useEffect } from "react";
import { questions } from "../data/questions"; // Importando as perguntas

export default function TriviaGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [lives, setLives] = useState(3); // Jogador começa com 3 vidas
  const [timeLeft, setTimeLeft] = useState(15); // Tempo para responder
  const [gameOver, setGameOver] = useState(false);

  // Função para mudar para a próxima pergunta
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setTimeLeft(15); // Reinicia o tempo para cada nova pergunta
    } else {
      setGameOver(true); // Fim de jogo
    }
  };

  // Função para verificar a resposta
  const checkAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].answer) {
      handleNextQuestion(); // Avança para a próxima pergunta
    } else {
      setLives(lives - 1); // Perde uma vida
      if (lives === 1) {
        setGameOver(true); // Fim de jogo se as vidas chegarem a 0
      } else {
        handleNextQuestion();
      }
    }
  };

  // Lógica do cronômetro
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      setLives(lives - 1); // Perde uma vida se o tempo acabar
      handleNextQuestion(); // Passa para a próxima pergunta
    }

    return () => clearInterval(timer); // Limpa o cronômetro ao desmontar
  }, [timeLeft]);

  if (gameOver) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Fim de Jogo</h2>
        <p className="text-lg">Você acertou {currentQuestionIndex} perguntas!</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Jogar Novamente
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Trivia: Saint Seiya</h1>
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">
            {questions[currentQuestionIndex].question}
          </h2>
          <div className="mt-4 space-y-3">
            {questions[currentQuestionIndex].options.map((option) => (
              <button
                key={option}
                onClick={() => checkAnswer(option)}
                className={`w-full p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition ${
                  selectedAnswer === option ? "bg-yellow-500" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-lg">
            <span className="text-yellow-500">Vidas:</span> {lives}
          </div>
          <div className="text-lg">
            <span className="text-yellow-500">Tempo:</span> {timeLeft}s
          </div>
        </div>
      </div>
    </div>
  );
}
