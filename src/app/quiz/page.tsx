'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '../data/questions';

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
  const [achievements, setAchievements] = useState<string[]>([]);
  const [showAchievement, setShowAchievement] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [completedDifficulties, setCompletedDifficulties] = useState<string[]>([]);
  const router = useRouter();

  const achievementMilestones = [3, 5, 10];
  const difficulties = ["easy", "medium", "hard", "impossible"];

  useEffect(() => {
    const savedAchievements = localStorage.getItem('achievements');
    const savedCompletedDifficulties = localStorage.getItem('completedDifficulties');
    
    if (savedAchievements) {
      setAchievements(JSON.parse(savedAchievements));
    }
    if (savedCompletedDifficulties) {
      setCompletedDifficulties(JSON.parse(savedCompletedDifficulties));
    }
  }, []);

  const saveAchievement = (achievement: string) => {
    if (!achievements.includes(achievement)) {
      const updatedAchievements = [...achievements, achievement];
      setAchievements(updatedAchievements);
      localStorage.setItem('achievements', JSON.stringify(updatedAchievements));
      setShowAchievement(achievement); 
      setTimeout(() => setShowAchievement(null), 3000); 
    }
  };

  const startQuiz = () => {
    if (!selectedDifficulty) return;

    const filteredQuestions = questions.filter(
      (q) => q.difficulty === selectedDifficulty
    );
    const shuffledQuestions = [...filteredQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    setSelectedQuestions(shuffledQuestions);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    let newScore = score;
    if (isCorrect) {
        newScore = score + 1;
        setScore(newScore);

        if (achievementMilestones.includes(newScore)) {
            saveAchievement(`Conquista: ${newScore} acertos`);
        }
    }

    if (currentQuestion + 1 < selectedQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      if (isCorrect && newScore === selectedQuestions.length) {
          const updatedDifficulties = [...completedDifficulties, selectedDifficulty as string];
          setCompletedDifficulties(updatedDifficulties);
          localStorage.setItem('completedDifficulties', JSON.stringify(updatedDifficulties));

          if (updatedDifficulties.length === difficulties.length) {
              saveAchievement("Progresso Máximo!");
          }
      }
      setTimeout(() => {
          alert(`Parabéns! Você acertou ${newScore} de ${selectedQuestions.length}!`);
          router.push('/perfil#conquistas');
      }, 500);
    }
  };

  return (
    <div className="min-h-screen p-8 text-white flex flex-col justify-center items-center ">
      {/* Card de Conquista Desbloqueada */}
      {showAchievement && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-5 rounded-2xl shadow-2xl flex items-center space-x-3 animate-fade-in transition-opacity duration-300">
          <img src="/icons/achievement-icon.png" alt="Achievement Icon" className="w-8 h-8" />
          <p className="text-lg font-bold">{showAchievement} desbloqueada!</p>
        </div>
      )}

      {!quizStarted ? (
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-10 animate-bounce">Desafio Cavaleiros do Zodíaco</h1>
          <p className="text-lg text-gray-300 mb-8">Selecione a dificuldade e teste seus conhecimentos!</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-6 py-3 rounded-lg font-bold text-lg ${
                  selectedDifficulty === difficulty ? "bg-yellow-600" : "bg-gray-700"
                } text-gray-900 hover:bg-yellow-500 transition-colors`}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={startQuiz}
            disabled={!selectedDifficulty}
            className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-gray-900 px-12 py-4 rounded-lg font-bold text-2xl hover:bg-yellow-600 transition-transform transform hover:scale-110 shadow-lg disabled:opacity-50"
          >
            Começar o Quiz
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-3xl shadow-2xl relative animate-slide-in">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Pergunta {currentQuestion + 1} de {selectedQuestions.length}
          </h2>
          <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 p-6 rounded-2xl mb-8 relative overflow-hidden shadow-lg">
            <p className="text-xl text-white text-center mb-6 animate-pulse">
              {selectedQuestions[currentQuestion].question}
            </p>
            <div className="grid grid-cols-1 gap-6">
              {selectedQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="block bg-gradient-to-r from-yellow-500 to-yellow-700 text-gray-900 px-6 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 shadow-md"
                  onClick={() => handleAnswer(option === selectedQuestions[currentQuestion].answer)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-lg text-white">
              Pontuação Atual: <span className="font-bold text-yellow-400">{score}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
