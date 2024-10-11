'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa useRouter para redirecionar
import { questions } from '../data/questions'; // Sua base de dados de perguntas

// Defina o tipo para as perguntas
type Question = {
  difficulty: string;
  question: string;
  options: string[];
  answer: string;
};

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const router = useRouter(); // Instancia o roteador para redirecionar

  // Função para iniciar o quiz
  const startQuiz = () => {
    const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 10); // Seleciona 10 perguntas aleatórias
    setSelectedQuestions(shuffledQuestions);
    setQuizStarted(true);
  };

  // Função para lidar com a seleção de resposta
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestion + 1 < selectedQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completo, redireciona para a página inicial após mostrar a pontuação
      alert(`Você acertou ${score + 1} de 10!`);
      router.push('/'); // Redireciona para a página inicial
    }
  };

  return (
    <div className="min-h-screen p-8 text-white flex flex-col justify-center items-center">
      {!quizStarted ? (
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-8 animate-bounce">Bem-vindo ao Quiz de Cavaleiros do Zodíaco!</h1>
          <button
            onClick={startQuiz}
            className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-semibold text-2xl hover:bg-yellow-600 transition-transform transform hover:scale-110"
          >
            Iniciar Quiz
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center animate-fade-in">
            Pergunta {currentQuestion + 1} de 10
          </h2>
          <div className="bg-gray-700 p-4 rounded-lg mb-6">
            <p className="text-xl text-white text-center mb-4 animate-pulse">
              {selectedQuestions[currentQuestion].question}
            </p>
            <div className="grid grid-cols-1 gap-4">
              {selectedQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
                  onClick={() => handleAnswer(option === selectedQuestions[currentQuestion].answer)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-lg text-white">Pontuação Atual: <span className="font-bold text-yellow-400">{score}</span></p>
          </div>
        </div>
      )}
    </div>
  );
}
