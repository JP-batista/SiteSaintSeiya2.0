'use client';

import { useState, useRef, useEffect } from 'react';

// Definições das músicas
const classicTracks = {
  openings: [
    {
      name: 'Pegasus Fantasy - Saint Seiya',
      src: '/soundtrack/Pegasus Fantasy - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/hG-ZCL9irck/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFgWlYdguEhzCxJmZkaTPqrVzktQ',
    },
    // Outras faixas...
  ],
  endings: [
    {
      name: 'Blue Forever - Saint Seiya',
      src: '/soundtrack/Blue Forever - Saint Seiya (slowed reverb).mp3',
      img: 'https://i.ytimg.com/vi/51zLAMRo0jk/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBooGDAP&rs=AOn4CLDI-JEx8fkjJJdVGE5WgOaogVxR-Q',
    },
    // Outras faixas...
  ],
};

const lostCanvasTracks = {
  openings: [
    {
      name: 'The Realm of Athena - Saint Seiya - The Lost Canvas',
      src: '/lost-canvas/The Realm of Athena - Saint Seiya- The Lost Canvas (slowed + reverb).m4a',
      img: 'https://i.ytimg.com/vi/alMTBrhmxR4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhDIFMocjAP&rs=AOn4CLC2IZAW6KS76CmfylC9ikoa74aWLA',
    },
  ],
  endings: [
    {
      name: 'Hana no Kusari - Saint Seiya - The Lost Canvas',
      src: '/lost-canvas/Hana no Kusari - Saint Seiya- The Lost Canvas (slowed + reverb).m4a',
      img: 'https://i.ytimg.com/vi/MnkHc4gEknM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1Fu1tXf0CbWzWo96f5PHySr_XHQ',
    },
  ],
};

const omegaTracks = {
  openings: [
    {
      name: 'Pegasus Fantasy - Saint Seiya Omega',
      src: '/omega/Pegasus Fantasy - Saint Seiya Omega (slowed + reverb).m4a',
      img: 'https://i.ytimg.com/vi/KaN8hZdg5OI/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg-IEsocjAP&rs=AOn4CLCPM2K7kf0JBh3YbofZbBtEAkIp_w',
    },
  ],
  endings: [
    {
      name: '',
      src: '/omega/',
      img: '',
    },
  ],
};

export default function SoundtrackPage() {
  const [currentCategory, setCurrentCategory] = useState<'classic' | 'lost-canvas' | 'omega'>('classic');
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

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (audioRef.current) {
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - left;
      const newTime = (clickX / width) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const renderTrackSection = (title: string, tracks: any[]) => (
    <section className="mb-8">
      <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <div key={track.name} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <img src={track.img} alt={track.name} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl text-yellow-300 mb-2">{track.name}</h3>

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

            <button
              onClick={() => handlePlayPause(track.src)}
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
            >
              {currentTrack === track.src && isPlaying ? 'Pausar' : 'Tocar'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  const getTracksForCategory = () => {
    if (currentCategory === 'classic') return classicTracks;
    if (currentCategory === 'lost-canvas') return lostCanvasTracks;
    if (currentCategory === 'omega') return omegaTracks;
    return null;
  };

  const tracks = getTracksForCategory();

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Trilha Sonora de Saint Seiya</h1>

      {/* Elemento de áudio que reproduz a música */}
      <audio ref={audioRef} controls style={{ display: 'none' }} onTimeUpdate={handleTimeUpdate} />

      {/* Botões de navegação entre as categorias */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setCurrentCategory('classic')}
          className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
            currentCategory === 'classic' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
          }`}
        >
          Clássico
        </button>
        <button
          onClick={() => setCurrentCategory('lost-canvas')}
          className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
            currentCategory === 'lost-canvas' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
          }`}
        >
          Lost Canvas
        </button>
        <button
          onClick={() => setCurrentCategory('omega')}
          className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
            currentCategory === 'omega' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
          }`}
        >
          Omega
        </button>
      </div>

      {/* Exibição das trilhas para a categoria selecionada */}
      {tracks && renderTrackSection('Aberturas', tracks.openings)}
      {tracks && renderTrackSection('Encerramentos', tracks.endings)}
    </div>
  );
}
