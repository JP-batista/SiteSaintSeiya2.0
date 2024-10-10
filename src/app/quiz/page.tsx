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
  const [name, setName] = useState(''); 
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Inicialize o estado com o tipo adequado para as perguntas
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
    <div className="min-h-screen p-8 text-white">
      {!quizStarted ? (
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-8">Clique para começar o Quiz!</h1>
          <button
            onClick={startQuiz}
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Iniciar Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Pergunta {currentQuestion + 1} de 10</h2>
          <p className="mb-4">{selectedQuestions[currentQuestion].question}</p>
          {selectedQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="block bg-gray-800 text-yellow-400 px-4 py-2 mb-2 rounded-lg hover:bg-gray-700 transition-colors"
              onClick={() => handleAnswer(option === selectedQuestions[currentQuestion].answer)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
