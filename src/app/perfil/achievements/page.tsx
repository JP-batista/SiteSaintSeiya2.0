// src/app/achievements/page.tsx

'use client';

import { useEffect, useState } from 'react';
import cavaleiros from '../../data/skins'; // Assumindo que as skins dos cavaleiros estão neste arquivo

type Achievement = {
  name: string;
  description: string;
  source: string; // Indica de onde vem a conquista (SaintSeiyaDLE ou Quiz)
  skinImage: string; // URL da imagem da skin associada
};

const allAchievements: Achievement[] = [
  { name: 'Primeira Vitória', description: 'Ganha sua primeira partida no jogo SaintSeiyaDLE.', source: 'SaintSeiyaDLE', skinImage: cavaleiros[0].banner },
  { name: 'Vitória em 10 Tentativas', description: 'Complete o jogo com no máximo 10 tentativas.', source: 'SaintSeiyaDLE', skinImage: cavaleiros[1].banner },
  { name: 'Vitória em 7 Tentativas', description: 'Complete o jogo com no máximo 7 tentativas.', source: 'SaintSeiyaDLE', skinImage: cavaleiros[3].banner },
  { name: 'Vitória em 5 Tentativas', description: 'Complete o jogo com no máximo 5 tentativas.', source: 'SaintSeiyaDLE', skinImage: cavaleiros[4].banner },
  { name: 'Vitória em 3 Tentativas', description: 'Complete o jogo com no máximo 3 tentativas.', source: 'SaintSeiyaDLE', skinImage: cavaleiros[6].banner },
  { name: 'Vitória em 1 Tentativa', description: 'Complete o jogo em apenas 1 tentativa.', source: 'SaintSeiyaDLE', skinImage: cavaleiros[7].banner },
  { name: 'Conquista: 3 acertos', description: 'Acerte 3 respostas corretas no quiz.', source: 'Quiz', skinImage: cavaleiros[9].banner },
  { name: 'Conquista: 5 acertos', description: 'Acerte 5 respostas corretas no quiz.', source: 'Quiz', skinImage: cavaleiros[10].banner },
  { name: 'Conquista: 10 acertos', description: 'Acerte 10 respostas corretas no quiz.', source: 'Quiz', skinImage: cavaleiros[12].banner },
  { name: 'Progresso Máximo!', description: 'Complete todas as dificuldades no quiz.', source: 'Quiz', skinImage: cavaleiros[13].banner },
];

export default function AchievementsPage() {
    const [achievements, setAchievements] = useState<string[]>([]);
  
    useEffect(() => {
      const savedAchievements = localStorage.getItem('achievements');
      if (savedAchievements) {
        setAchievements(JSON.parse(savedAchievements));
      }
    }, []);
  
    return (
      <div className="min-h-screen text-white p-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-yellow-400">Conquistas Desbloqueadas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allAchievements.map((achievement) => {
            const isUnlocked = achievements.includes(achievement.name);
  
            return (
              <div 
                key={achievement.name} 
                className={`relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 border-4 ${
                  isUnlocked ? 'border-yellow-500' : 'border-gray-700'
                }`}
                style={{ backgroundImage: `url(${achievement.skinImage})`, backgroundSize: 'cover', backgroundPosition: '75% center' }}
              >
                <div className={`absolute inset-0 ${isUnlocked ? 'bg-opacity-20' : 'bg-gray-800 bg-opacity-60'} rounded-lg`}></div>
                
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-300 flex items-center">
                    {isUnlocked ? '🏆' : '🔒'} {achievement.name}
                  </h3>
                  <p className="mb-4">{achievement.description}</p>
                  <span 
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold 
                      ${achievement.source === 'SaintSeiyaDLE' ? 'bg-purple-500 text-white' : 'bg-blue-500 text-white'}`}
                  >
                    {achievement.source === 'SaintSeiyaDLE' ? 'SaintSeiyaDLE' : 'Quiz'}
                  </span>
                  {isUnlocked && (
                    <p className="mt-4 text-green-300 font-semibold">Conquistado!</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }