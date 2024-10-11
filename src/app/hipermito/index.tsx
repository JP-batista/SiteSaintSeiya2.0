// src/app/hipermito/index.tsx
import { useState } from 'react';

const cavaleiros = [
  { name: "Seiya de Pégaso", constellation: "Pégaso", saga: "Santuário" },
  { name: "Shiryu de Dragão", constellation: "Dragão", saga: "Santuário" },
  { name: "Hyoga de Cisne", constellation: "Cisne", saga: "Santuário" },
  // Outros cavaleiros...
];

export default function HipermitoIndex() {
  const [filter, setFilter] = useState("");
  
  const filteredCavaleiros = cavaleiros.filter(cavaleiro =>
    cavaleiro.constellation.toLowerCase().includes(filter.toLowerCase()) ||
    cavaleiro.saga.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-yellow-500">Hipermito - Enciclopédia de Cavaleiros</h1>
      
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filtrar por constelação ou saga"
        className="mt-4 p-2 bg-gray-800 text-white rounded"
      />
      
      <ul className="mt-4">
        {filteredCavaleiros.map((cavaleiro, index) => (
          <li key={index} className="mt-2">
            <strong>{cavaleiro.name}</strong> - {cavaleiro.constellation} (Saga: {cavaleiro.saga})
          </li>
        ))}
      </ul>
    </div>
  );
}
