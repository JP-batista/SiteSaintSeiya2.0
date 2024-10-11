'use client'; // Marcação para o Next.js

import { useState, useRef, useEffect } from 'react';

const tracks = [
  {
    name: 'Pegasus Fantasy - Saint Seiya',
    src: '/soundtrack/Pegasus Fantasy - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/hG-ZCL9irck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFgWlYdguEhzCxJmZkaTPqrVzktQ',
  },
  {
    name: 'Blue Forever - Saint Seiya',
    src: '/soundtrack/Blue Forever - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/51zLAMRo0jk/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBooGDAP&rs=AOn4CLDI-JEx8fkjJJdVGE5WgOaogVxR-Q',
  },
  {
    name: 'Soldier Dream - Saint Seiya',
    src: '/soundtrack/Soldier Dream - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/BhXm81Ya2NQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhMICwofzAP&rs=AOn4CLDezMVvcUOwKI3KurH52rU3quM5wA',
  },
  {
    name: 'Blue Dream - Saint Seiya',
    src: '/soundtrack/Blue Dream - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/BAZUp8S7RPs/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFgoOTAP&rs=AOn4CLArM1KWKGzfKJ7WwmfsEU6vSWTVVQ',
  },
  {
    name: 'Chikyuugi - Saint Seiya',
    src: '/soundtrack/Chikyuugi - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/Fac-xC41ndY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg7IEcocjAP&rs=AOn4CLDA5s5KQZV8W5dOllULCeV5GVs-rA',
  },
  {
    name: 'Kimi to Onaji Aozora - Saint Seiya',
    src: '/soundtrack/Kimi to Onaji Aozora - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/nDQeWzKeHGE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgiIGQocjAP&rs=AOn4CLBoH2Negx_6HZJz13ITVDZRgUCk5Q',
  },
  {
    name: 'Pegasus Forever - Saint Seiya',
    src: '/soundtrack/Pegasus Forever - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/JBtDsv2ihh8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_ICAoOjAP&rs=AOn4CLCirLe-h4s56W2Az3PidulYeY3ddQ',
  },
  {
    name: 'My Dear - Saint Seiya',
    src: '/soundtrack/My Dear - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/cQBckkyYPXY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTID8ofzAP&rs=AOn4CLA8bO0LcHpRKTb3-SSn0u4OzzzNPw',
  }, 
  {
    name: 'Kami no en - Saint Seiya',
    src: '/soundtrack/Kami no en - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/fFodzTUDSg8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIF0oRTAP&rs=AOn4CLC7oWZIqgxArxwYAT8OyowMCMlL4Q',
  },
];

export default function SoundtrackPage() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Estado para a barra de progresso
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (trackSrc: string) => {
    if (currentTrack === trackSrc) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.src = trackSrc;
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentTrack(trackSrc);
        setProgress(0); // Reset progress when a new track starts
      }
    }
  };

  // Função para atualizar a barra de progresso
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
    }
  };

  // Função para pular para uma parte da música ao clicar na barra de progresso
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (audioRef.current) {
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - left;
      const newTime = (clickX / width) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Trilha Sonora de Saint Seiya</h1>

      {/* Elemento de áudio que reproduz a música */}
      <audio ref={audioRef} controls style={{ display: 'none' }} onTimeUpdate={handleTimeUpdate} />

      {/* Renderização das faixas de áudio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <div key={track.name} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <img src={track.img} alt={track.name} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl text-yellow-300 mb-2">{track.name}</h3>

            {/* Barra de progresso clicável */}
            {currentTrack === track.src && (
              <div
                className="relative w-full bg-gray-700 rounded-lg h-2 mb-4 cursor-pointer"
                onClick={handleProgressClick}
              >
                <div
                  className="absolute top-0 left-0 h-full bg-yellow-500 rounded-lg"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* Botões de tocar e pausar */}
            <button
              onClick={() => handlePlayPause(track.src)}
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
            >
              {currentTrack === track.src && isPlaying ? 'Pausar' : 'Tocar'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
