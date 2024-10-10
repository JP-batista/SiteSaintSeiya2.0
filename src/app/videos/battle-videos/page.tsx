// src/app/videos/battle-videos.tsx
'use client';
import { useState } from 'react';

export default function BattleVideosPage() {
  const [category, setCategory] = useState('all');

  // Lista de vídeos das batalhas
  const videos = [
    { title: 'Seiya vs Saga de Gêmeos', url: 'https://www.youtube.com/embed/vJRr0CpOhI0', category: 'Cavaleiros de Ouro' },
    { title: 'Shiryu vs Shura de Capricórnio', url: 'https://www.youtube.com/embed/i7TFCZqT9lI', category: 'Cavaleiros de Ouro' },
    { title: 'Hyoga vs Camus de Aquário', url: 'https://www.youtube.com/embed/pozmjDG_nKY', category: 'Cavaleiros de Ouro' },
    { title: 'Ikki vs Shaka de Virgem', url: 'https://www.youtube.com/embed/seWdMjgQ6A4', category: 'Cavaleiros de Ouro' },
    { title: 'Seiya vs Poseidon', url: 'https://www.youtube.com/embed/rh53zmjAsfM', category: 'Poseidon' },
    { title: 'Seiya vs Hades', url: 'https://www.youtube.com/embed/OnCaoP7WOD4', category: 'Hades' },
    // Adicione mais vídeos conforme necessário
  ];

  const filteredVideos = category === 'all' ? videos : videos.filter(video => video.category === category);

  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-8 text-center">Vídeos de Batalhas Épicas</h1>
      
      {/* Filtros */}
      <div className="text-center mb-6">
        <button className="mx-4 p-2 bg-yellow-500 rounded-lg" onClick={() => setCategory('all')}>Todas as Batalhas</button>
        <button className="mx-4 p-2 bg-yellow-500 rounded-lg" onClick={() => setCategory('Cavaleiros de Ouro')}>Cavaleiros de Ouro</button>
        <button className="mx-4 p-2 bg-yellow-500 rounded-lg" onClick={() => setCategory('Poseidon')}>Poseidon</button>
        <button className="mx-4 p-2 bg-yellow-500 rounded-lg" onClick={() => setCategory('Hades')}>Hades</button>
      </div>
      
      {/* Lista de vídeos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredVideos.map((video, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-yellow-300 mb-4">{video.title}</h3>
            <iframe 
              width="100%" 
              height="315" 
              src={video.url} 
              title={video.title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
