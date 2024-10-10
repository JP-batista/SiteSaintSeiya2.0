// src/app/videos/lost-canvas/page.tsx

'use client';

import { useState } from 'react';

// Lista de vídeos do Lost Canvas, com o link, título e descrição
const episodes = [
  {
    title: 'Episódio 1: A Promessa',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/wKhayTDRXmc',
  },
  {
    title: 'Episódio 2: O Despertar de Hades',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/7zvPu3fLO2o',
  },
  {
    title: 'Episódio 3: O Início da Guerra Santa',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/1b0zyRvKg7c',
  },
  {
    title: 'Episódio 4: A Pulseira de Flores',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/I_mYszSgGF4',
  },
  {
    title: 'Episódio 5: Rosa Venenosa',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/RVAHaA3mWmM',
  },
  {
    title: 'Episódio 6: O Funeral de Flores',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/GYlljQCZkaM',
  },
  {
    title: 'Episódio 7: Os Frutos da Mokurenji',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/5MlbOLO5WGo',
  },
  {
    title: 'Episódio 8: Brisa Refrescante',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/BI7D1foHsDY',
  },
  {
    title: 'Episódio 9: A Estrela Gigante',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/FXKOHc4-nXE',
  },
  {
    title: 'Episódio 10: O Advento',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/P632CP_SXog',
  },
  {
    title: 'Episódio 11: Fora de Alcance',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/soEeR3yGhPs',
  },
  {
    title: 'Episódio 12: Sacrifício Sem Fim',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/lYKZ0QT4VV8',
  },
  {
    title: 'Episódio 13: A Partida',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/uejl5vDwgA4',
  },
  {
    title: 'Episódio 14: A Floresta da Morte',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/nZ70d_YbrJI',
  },
  {
    title: 'Episódio 15: Se Eu Pudesse Voltar para Aquele Dia',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/LdynjjtLZTc',
  },
  {
    title: 'Episódio 16: Deuses e Peões',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/vPng9Q70ZUQ',
  },
  {
    title: 'Episódio 17: Lixo',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/nxcg7JRf07E',
  },
  {
    title: 'Episódio 18: Quero que Sobreviva',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/uOQMVI-Ttzg',
  },
  {
    title: 'Episódio 19: A Espada Solitária',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/h0Hu3A2I-6Q',
  },
  {
    title: 'Episódio 20: Prisão dos Sonhos',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/80HcK3r0mBo',
  },
  {
    title: 'Episódio 21: Além dos Sonhos',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/80HcK3r0mBo',
  },
  {
    title: 'Episódio 22: O Caminho da Justiça',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/3nmt_F_IMzo',
  },
  {
    title: 'Episódio 23: A Espada Sagrada',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/CIgqws2wZo0',
  },
  {
    title: 'Episódio 24: A Batalha Sangrenta',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/gJ3Pns7F2ms',
  },
  {
    title: 'Episódio 25: Muitos e Muitos Anos',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/TnJJIoxkLI8',
  },
  {
    title: 'Episódio 26: Seja Você Mesmo',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/Sm1YjkHUkSw',
  },
];

export default function LostCanvasPage() {
  const [currentEpisode, setCurrentEpisode] = useState(0);

  // Função para navegar para o próximo episódio
  const handleNextEpisode = () => {
    if (currentEpisode < episodes.length - 1) {
      setCurrentEpisode(currentEpisode + 1);
    }
  };

  // Função para navegar para o episódio anterior
  const handlePrevEpisode = () => {
    if (currentEpisode > 0) {
      setCurrentEpisode(currentEpisode - 1);
    }
  };

  return (
    <div className="min-h-screen p-8 text-white flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-8">Saint Seiya: The Lost Canvas</h1>

      {/* Vídeo e Navegação */}
      <div className="relative flex justify-center items-center w-full max-w-4xl">
        {/* Botão para o episódio anterior */}
        <button
          onClick={handlePrevEpisode}
          className={`absolute left-0 p-2 text-2xl bg-yellow-500 rounded-lg hover:bg-yellow-600 ${
            currentEpisode === 0 ? 'invisible' : ''
          }`}
        >
          &#8249; {/* Seta para esquerda */}
        </button>

        {/* Vídeo do Episódio Atual */}
        <iframe
          width="1000"
          height="563"
          src={episodes[currentEpisode].videoUrl}
          title={episodes[currentEpisode].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>

        {/* Botão para o próximo episódio */}
        <button
          onClick={handleNextEpisode}
          className={`absolute right-0 p-2 text-2xl bg-yellow-500 rounded-lg hover:bg-yellow-600 ${
            currentEpisode === episodes.length - 1 ? 'invisible' : ''
          }`}
        >
          &#8250; {/* Seta para direita */}
        </button>
      </div>

      {/* Título e Descrição do Episódio Atual */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-yellow-300">{episodes[currentEpisode].title}</h2>
        <p className="text-lg text-gray-300 mt-4">{episodes[currentEpisode].description}</p>
      </div>
    </div>
  );
}
