// src/app/galeria/page.tsx

import Link from 'next/link';
import { clothSchemes } from '../data/clothSchemes';  // Caminho ajustado para acessar o arquivo

export default function GaleriaPage() {
  // Adicione um fallback para o caso de `clothSchemes` ser undefined ou vazio
  if (!clothSchemes || clothSchemes.length === 0) {
    return <div className="text-center text-white">Nenhuma arte disponível no momento.</div>;
  }

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">
        Galeria de Arte
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mapeia as fanarts dinamicamente */}
        {clothSchemes.map((item, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg">
            <img
              src={item.src}  // Insere a imagem da fanart
              alt={item.alt}
              className="w-auto h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl text-yellow-300 font-bold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
