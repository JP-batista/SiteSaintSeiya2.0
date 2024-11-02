// src/app/soundtrack/page.tsx


"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import Musicas from '../data/musicas';

type Music = {
  name: string;
  src: string;
  img: string;
};

type Tipo = {
  tipo: number;
  titulo: string;
  musicas: Music[];
};

type Saga = {
  saga: number;
  titulo: string;
  Tipos: Tipo[];
};

export default function MusicasPage() {
  const [currentMusic, setCurrentMusic] = useState<Music>(Musicas[0].Tipos[0].musicas[0]);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSaga, setSelectedSaga] = useState<Saga>(Musicas[0]);
  const carouselsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showSpeedOptions, setShowSpeedOptions] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentMusic]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (audioRef.current) {
      audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    }
  };

  const selectMusic = (music: Music) => {
    setCurrentMusic(music);
    setProgress(0);
    setIsPlaying(true);
  };

  const handleSagaSelect = (sagaTitle: string) => {
    const saga = Musicas.find((saga) => saga.titulo === sagaTitle);
    if (saga) {
      setSelectedSaga(saga);
    }
  };

  const filteredMusics = (musicas: Music[]) => {
    return musicas.filter((music) =>
      music.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const shuffleArray = (array: Music[]) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  const shuffledSagaMusics = useMemo(() => {
    return selectedSaga.Tipos.map(tipo => ({
      ...tipo,
      musicas: shuffleArray(tipo.musicas)
    }));
  }, [selectedSaga]);

  const scrollLeft = (category: string) => {
    carouselsRef.current[category]?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = (category: string) => {
    carouselsRef.current[category]?.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const downloadMusic = (src: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = currentMusic.name;
    link.click();
  };

  const adjustPlaybackRate = (rate: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const playRandomMusic = () => {
    const allMusics = selectedSaga.Tipos.flatMap(tipo => tipo.musicas);
    if (allMusics.length > 0) {
      const randomMusic = allMusics[Math.floor(Math.random() * allMusics.length)];
      selectMusic(randomMusic);
    }
  };

  const handlePreviousTrack = () => {
    const allMusics = selectedSaga.Tipos.flatMap(tipo => tipo.musicas);
    const currentIndex = allMusics.findIndex(music => music.name === currentMusic.name);
    if (currentIndex > 0) {
      selectMusic(allMusics[currentIndex - 1]);
    }
  };

  const handleNextTrack = () => {
    const allMusics = selectedSaga.Tipos.flatMap(tipo => tipo.musicas);
    const currentIndex = allMusics.findIndex(music => music.name === currentMusic.name);
    if (currentIndex < allMusics.length - 1) {
      selectMusic(allMusics[currentIndex + 1]);
    }
  };

  

  return (
    <div className="flex h-[calc(100vh-8rem)] overflow-hidden p-4">
      {/* Lado Esquerdo: Música Atual (Fixo) */}
      <div className="w-1/4 bg-gray-800 p-6 flex flex-col items-center shadow-lg rounded-lg h-full sticky top-0">
        <img
          src={currentMusic.img}
          alt={currentMusic.name}
          className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg transform hover:scale-105 transition duration-300"
        />
        <h2 className="text-xl font-bold mb-3 text-center text-yellow-300">{currentMusic.name}</h2>
        <div className="flex items-center w-full justify-between px-4 mb-3">
          <span className="text-gray-400 text-sm">
            {audioRef.current ? new Date(audioRef.current.currentTime * 1000).toISOString().substr(14, 5) : "0:00"}
          </span>
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePreviousTrack}
              className="text-yellow-500 text-2xl hover:text-yellow-400 transition duration-300 focus:outline-none"
              aria-label="Previous Track"
            >
              ⏮️
            </button>
            <button
              onClick={handlePlayPause}
              className="text-yellow-500 text-4xl hover:text-yellow-400 transition duration-300 focus:outline-none"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? "⏸️" : "▶️"}
            </button>
            <button
              onClick={handleNextTrack}
              className="text-yellow-500 text-2xl hover:text-yellow-400 transition duration-300 focus:outline-none"
              aria-label="Next Track"
            >
              ⏭️
            </button>
          </div>
          <div className="relative">
            <button onClick={() => setShowOptions(!showOptions)} className="text-gray-400 hover:text-yellow-500 transition duration-300">
              ⋮
            </button>
            {showOptions && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-700 rounded-lg shadow-lg p-2 text-sm">
                <button 
                  onClick={() => {
                    downloadMusic(currentMusic.src);
                    setShowOptions(false);
                  }} 
                  className="w-full text-left text-yellow-300 hover:text-yellow-500 py-1"
                >
                  Baixar Música
                </button>
                <button 
                  onClick={() => {
                    setShowOptions(false);
                    setShowSpeedOptions(true);
                  }} 
                  className="w-full text-left text-yellow-300 hover:text-yellow-500 py-1"
                >
                  Velocidade
                </button>
              </div>
            )}
            {showSpeedOptions && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-700 rounded-lg shadow-lg p-2 text-sm">
                <button 
                  onClick={() => adjustPlaybackRate(1)} 
                  className="w-full text-left text-yellow-300 hover:text-yellow-500 py-1"
                >
                  Velocidade Normal
                </button>
                <button 
                  onClick={() => adjustPlaybackRate(1.5)} 
                  className="w-full text-left text-yellow-300 hover:text-yellow-500 py-1"
                >
                  1.5x Velocidade
                </button>
                <button 
                  onClick={() => adjustPlaybackRate(2)} 
                  className="w-full text-left text-yellow-300 hover:text-yellow-500 py-1"
                >
                  2x Velocidade
                </button>
                <button 
                  onClick={() => setShowSpeedOptions(false)} 
                  className="w-full text-left text-gray-300 hover:text-yellow-500 py-1"
                >
                  Voltar
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full px-6 mb-3">
          <input
            type="range"
            value={progress}
            onChange={handleProgressChange}
            className="w-full h-2 appearance-none cursor-pointer bg-gray-600 rounded-lg"
            style={{
              background: `linear-gradient(to right, #FFD700 ${progress}%, #4B5563 ${progress}%)`,
            }}
          />
        </div>
        <audio
          ref={audioRef}
          src={currentMusic.src}
          onTimeUpdate={handleTimeUpdate}
          onEnded={playRandomMusic}
        />
      </div>

      {/* Lado Direito: Lista de Músicas (Rolável) */}
      <div className="w-3/4 p-4 overflow-y-auto h-full">
        <input 
            type="text" 
            placeholder="Pesquisar músicas..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-12 bg-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-gray-800 transition duration-300 shadow-lg"
        />
        <div className="grid grid-cols-4 gap-3 mb-6 p-4">
          {Musicas.map((saga) => (
            <button
              key={saga.titulo}
              onClick={() => handleSagaSelect(saga.titulo)}
              className="bg-yellow-500 rounded-lg p-2 font-bold text-center transform hover:scale-105 transition duration-300 shadow-md"
            >
              <div className="flex justify-center items-center">
                <img 
                    src={`/images/${saga.titulo.toLowerCase().replace(' ', '-')}.png`} 
                    alt={saga.titulo} 
                    className="w-auto h-24 object-cover rounded-md mb-1"
                />
              </div>
              {saga.titulo}
            </button>
          ))}
        </div>

        {shuffledSagaMusics.map((tipo) => (
          tipo.musicas.length > 0 && (
            <div key={tipo.tipo} className="mb-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">{tipo.titulo}</h2>
              <div className="relative flex items-center group">
                <button
                  onClick={() => scrollLeft(tipo.titulo)}
                  className="absolute left-0 z-10 p-3 bg-gray-700 rounded-full text-yellow-500 opacity-0 group-hover:opacity-100 transition duration-300 transform -translate-x-4 hover:scale-110 shadow-lg"
                  aria-label="Scroll Left"
                >
                  &lt;
                </button>
                <div 
                  className="flex space-x-4 overflow-x-scroll no-scrollbar pl-8 transition-transform duration-300 ease-in-out"
                  ref={(el) => {
                    carouselsRef.current[tipo.titulo] = el;
                  }}
                >
                  {tipo.musicas.map((music) => (
                    <div 
                      key={music.name} 
                      onClick={() => selectMusic(music)} 
                      className="bg-gray-800 w-48 p-3 rounded-lg cursor-pointer shadow-md flex-shrink-0 hover:bg-gray-700 transition-all duration-300"
                    >
                      <img 
                        src={music.img} 
                        alt={music.name} 
                        className="w-full h-32 object-cover rounded-lg mb-2 shadow-md"
                      />
                      <h4 className="text-base font-semibold text-center text-yellow-300">{music.name}</h4>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scrollRight(tipo.titulo)}
                  className="absolute right-0 z-10 p-3 bg-gray-700 rounded-full text-yellow-500 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-x-4 hover:scale-110 shadow-lg"
                  aria-label="Scroll Right"
                >
                  &gt;
                </button>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
