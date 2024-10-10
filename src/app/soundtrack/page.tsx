'use client'; // Marcação para o Next.js

import { useState, useRef } from 'react';

const tracks = [
  {
    name: 'Blue Dream - Saint Seiya',
    src: '/soundtrack/Blue Dream - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/BAZUp8S7RPs/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFgoOTAP&rs=AOn4CLArM1KWKGzfKJ7WwmfsEU6vSWTVVQ',
  },
  {
    name: 'Blue Forever - Saint Seiya',
    src: '/soundtrack/Blue Forever - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/51zLAMRo0jk/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBooGDAP&rs=AOn4CLDI-JEx8fkjJJdVGE5WgOaogVxR-Q',
  },
  {
    name: 'Chikyuugi - Saint Seiya',
    src: '/soundtrack/Chikyuugi - Saint Seiya (slowed reverb).mp3',
    img: 'https://i.ytimg.com/vi/Fac-xC41ndY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg7IEcocjAP&rs=AOn4CLDA5s5KQZV8W5dOllULCeV5GVs-rA',
  },
  // Adicione mais faixas conforme necessário
];

export default function SoundtrackPage() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (trackSrc: string) => {
    if (currentTrack === trackSrc) {
      // Se o áudio já está tocando, alterna entre tocar e pausar
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      // Se outro áudio está tocando, para o atual e inicia a nova faixa
      if (audioRef.current) {
        audioRef.current.src = trackSrc;
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentTrack(trackSrc);
      }
    }
  };

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Trilha Sonora de Saint Seiya</h1>
      {/* Elemento de áudio que reproduz a música */}
      <audio ref={audioRef} controls style={{ display: 'none' }} />

      {/* Renderização das faixas de áudio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <div key={track.name} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <img src={track.img} alt={track.name} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl text-yellow-300 mb-2">{track.name}</h3>
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
