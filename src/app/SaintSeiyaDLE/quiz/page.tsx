'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '../../data/questions';
import {
  salvarToLocalStorage,
  carregarFromLocalStorage,
  removerFromLocalStorage,
} from '../../utils/localStorageUtils';

const LOCAL_STORAGE_PREFIX = 'SaintSeiyaQuiz_';

type Question = {
  difficulty: string;
  question: string;
  options: string[];
  answer: string;
};

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(() =>
    carregarFromLocalStorage('quizStarted', false, LOCAL_STORAGE_PREFIX)
  );
  const [currentQuestion, setCurrentQuestion] = useState(() =>
    carregarFromLocalStorage('currentQuestion', 0, LOCAL_STORAGE_PREFIX)
  );
  const [score, setScore] = useState(() =>
    carregarFromLocalStorage('score', 0, LOCAL_STORAGE_PREFIX)
  );
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>(() =>
    carregarFromLocalStorage('selectedQuestions', [], LOCAL_STORAGE_PREFIX)
  );
  const [achievements, setAchievements] = useState<string[]>([]);

  const [showAchievement, setShowAchievement] = useState<string | null>(null);
  
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    () => carregarFromLocalStorage('selectedDifficulty', null, LOCAL_STORAGE_PREFIX)
  );
  const [completedDifficulties, setCompletedDifficulties] = useState<string[]>(
    () => carregarFromLocalStorage('completedDifficulties', [], LOCAL_STORAGE_PREFIX)
  );
  const [won, setWon] = useState(() =>
    carregarFromLocalStorage('won', false, LOCAL_STORAGE_PREFIX)
  );

  const router = useRouter();
  const characteristicsRef = useRef<HTMLDivElement | null>(null);

  const achievementMilestones = [3, 5, 10];
  const difficulties = ["easy", "medium", "hard", "impossible"];

  
  useEffect(() => {
    // Atualizar o localStorage sempre que os estados principais mudarem
    salvarToLocalStorage('quizStarted', quizStarted, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('currentQuestion', currentQuestion, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('score', score, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('selectedQuestions', selectedQuestions, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('selectedDifficulty', selectedDifficulty, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('won', won, LOCAL_STORAGE_PREFIX);
  }, [
    quizStarted,
    currentQuestion,
    score,
    selectedQuestions,
    selectedDifficulty,
    won,
  ]);

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

  const ACHIEVEMENTS_KEY = 'global_achievements'; // Chave compartilhada para conquistas

  const saveAchievement = (achievement: string) => {
    const savedAchievements = JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || '[]');
  
    if (!savedAchievements.includes(achievement)) {
      const updatedAchievements = [...savedAchievements, achievement];
      setAchievements(updatedAchievements);
      localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(updatedAchievements));
      setShowAchievement(achievement);
      setTimeout(() => setShowAchievement(null), 3000);
    }
  };

  useEffect(() => {
    const savedAchievements = JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || '[]');
    setAchievements(savedAchievements);
  }, []);
  
  const startQuiz = () => {
    if (!selectedDifficulty) return;

    const filteredQuestions = questions.filter(
      (q) => q.difficulty === selectedDifficulty
    );
    const shuffledQuestions = [...filteredQuestions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);

    setSelectedQuestions(shuffledQuestions);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setWon(false);

    // Salvar o estado inicial do quiz
    salvarToLocalStorage('selectedQuestions', shuffledQuestions, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('quizStarted', true, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('currentQuestion', 0, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('score', 0, LOCAL_STORAGE_PREFIX);
    salvarToLocalStorage('won', false, LOCAL_STORAGE_PREFIX);
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
        const updatedDifficulties = [
          ...completedDifficulties,
          selectedDifficulty as string,
        ];
        setCompletedDifficulties(updatedDifficulties);
        salvarToLocalStorage(
          'completedDifficulties',
          updatedDifficulties,
          LOCAL_STORAGE_PREFIX
        );

        if (updatedDifficulties.length === difficulties.length) {
          saveAchievement('Progresso Máximo!');
        }
      }

      setWon(true);
      salvarToLocalStorage('won', true, LOCAL_STORAGE_PREFIX);

      setTimeout(() => {
        characteristicsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedQuestions([]);
    setWon(false);

    // Remover os dados do estado anterior
    removerFromLocalStorage('quizStarted', LOCAL_STORAGE_PREFIX);
    removerFromLocalStorage('currentQuestion', LOCAL_STORAGE_PREFIX);
    removerFromLocalStorage('score', LOCAL_STORAGE_PREFIX);
    removerFromLocalStorage('selectedQuestions', LOCAL_STORAGE_PREFIX);
    removerFromLocalStorage('selectedDifficulty', LOCAL_STORAGE_PREFIX);
    removerFromLocalStorage('won', LOCAL_STORAGE_PREFIX);
  };

  return (
    <div className="min-h-screen p-8 text-white flex flex-col justify-center items-center">

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
              onClick={handleRestart}
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
                className="border-2 border-yellow-500 rounded-full w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
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

      {!quizStarted && !won ? (
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-6 drop-shadow-md animate-pulse">
            Desafio Cavaleiros do Zodíaco
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Escolha sua dificuldade e desafie seus conhecimentos!
          </p>
        
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`relative group px-6 py-3 rounded-md font-bold text-lg border-2 transition-transform duration-300 ${
                  selectedDifficulty === difficulty
                    ? 'bg-yellow-500 text-gray-900 border-yellow-500 scale-110 shadow-lg'
                    : 'bg-gray-800 text-gray-300 border-gray-600 hover:border-yellow-500 hover:scale-105'
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-20 rounded-md transition-opacity duration-300"></span>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </button>
            ))}
          </div>
        
          <button
            onClick={startQuiz}
            disabled={!selectedDifficulty}
            className={`relative px-12 py-4 rounded-lg font-bold text-xl shadow-lg transform transition-all duration-300 ${
              selectedDifficulty
                ? 'bg-yellow-500 text-gray-900 hover:scale-110 hover:shadow-2xl'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
            Começar o Quiz
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
      ) : !won ? (
        <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Pergunta {currentQuestion + 1} de {selectedQuestions.length}
          </h2>
          <div className="bg-gray-700 p-6 rounded-md shadow-md mb-6">
            <p className="text-xl text-white text-center mb-4">
              {selectedQuestions[currentQuestion].question}
            </p>
            <div className="grid grid-cols-1 gap-4">
              {selectedQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswer(option === selectedQuestions[currentQuestion].answer)
                  }
                  className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg">
              Pontuação Atual:{' '}
              <span className="text-yellow-400 font-bold">{score}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center">     
          {/* Lista de perguntas respondidas */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2 text-yellow-400">Resumo do Quiz:</h3>
            <ul className="space-y-4 text-left">
              {selectedQuestions.map((q, index) => (
                <li key={index} className="bg-gray-700 p-4 rounded-md shadow-md">
                  <p className="text-lg font-semibold text-gray-200">
                    {index + 1}. {q.question}
                  </p>
                  {q.options.map((option, optIndex) => {
                    const isSelected = option === selectedQuestions[index].answer;
                    const isCorrect = option === q.answer;
                    return (
                      <p
                        key={optIndex}
                        className={`mt-1 px-3 py-1 rounded-md font-medium ${
                          isCorrect
                            ? 'bg-green-500 text-gray-900'
                            : isSelected
                            ? 'bg-red-500 text-gray-900'
                            : 'bg-gray-800 text-gray-400'
                        }`}
                      >
                        {isCorrect ? '✅ ' : isSelected ? '❌ ' : ''} {option}
                      </p>
                    );
                  })}
                </li>
              ))}
            </ul>
          </div>

          <div ref={characteristicsRef}  className="mt-8 bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg text-center max-w-md mx-auto animate-fade-in">
            <h2 className="text-4xl text-green-400 mb-4">
              {score === selectedQuestions.length 
                ? 'Incrível! Você acertou todas as perguntas!' 
                : 'Você concluiu o quiz!'}
            </h2>
            <p className="text-md font-semibold mb-4">
              Você acertou <span className="font-bold">{score}</span> de{' '}
              <span className="font-bold">{selectedQuestions.length}</span> na dificuldade{' '}
              <span className="text-yellow-400 font-bold">{selectedDifficulty?.toUpperCase()}</span>.
            </p>

            {/* Conquistas desbloqueadas nesta partida */}
            {showAchievement && (
              <div className="mt-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Conquistas desbloqueadas:</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>🏆 {showAchievement}</li>
                </ul>
              </div>
            )}

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2 text-gray-100">Próximo modo:</h3>
              <div className="flex flex-col items-center space-y-4">
                <div
                  className="flex items-center space-x-4 cursor-pointer group w-[380px]"
                  onClick={() => window.location.href = "/SaintSeiyaDLE/affinity"}
                >
                  <div className="w-22 h-22 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700 shadow-lg group-hover:border-yellow-500 transition duration-300">
                    <img
                      src="/dle_feed/affinity_icon.png"
                      alt="Quiz"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div className="bg-gray-800 border-2 border-gray-700 p-4 rounded-lg shadow-lg flex-1 group-hover:border-yellow-500 transition duration-300 h-20 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300">
                      Teste de Afinidade
                    </h3>
                    <p className="text-gray-300 text-sm">Descubra qual Cavaleiro voçê seria!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-2 bg-gray-800 flex items-center justify-center mt-6">
              {/* Botão 1 */}
              <div className="relative group">
                <button
                  className="w-16 h-16 bg-transparent focus:outline-none"
                  onClick={() => window.location.href = "/SaintSeiyaDLE/classico"}
                >
                  <img
                    src="/dle_feed/classic_icon.png"
                    alt="Modo Classic"
                    className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
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
                    className="border-2 border-yellow-500 rounded-full w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
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

      )}
      {won && (
        <button
            onClick={handleRestart}
            className="bg-yellow-500 text-gray-900 px-6 py-2 mt-6 rounded-lg font-bold text-xl hover:bg-yellow-600 transition-all duration-300"
            >
            Jogar Novamente
        </button>
      )}
    </div>
  );
}
