// src/app/galeria/page.tsx

import Link from 'next/link';

export default function GaleriaPage() {
  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">Galeria de Arte de Fãs</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Exemplo de fanart */}
        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg">
          <img
            src="https://i.pinimg.com/originals/f4/78/66/f47866e3aa44f46a7857548f22526aa7.png"
            alt="Fanart de Exemplo"
            className="w-40 h-auto rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold">Dog Tag Pégaso(LOS)</h3>
          <p className="text-gray-300">Por: Jota Pe</p>
        </div>
        {/* Exemplo de fanart */}
        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg">
          <img
            src="https://i.pinimg.com/originals/be/e9/8b/bee98b455b2807ce86f50051d52767c3.png"
            alt="Fanart de Exemplo"
            className="w-40 h-auto rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold">Dog Tag Dragão(LOS)</h3>
          <p className="text-gray-300">Por: Jota Pe</p>
        </div>
        {/* Exemplo de fanart */}
        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg">
          <img
            src="https://i.pinimg.com/originals/be/e9/8b/bee98b455b2807ce86f50051d52767c3.png"
            alt="Fanart de Exemplo"
            className="w-40 h-auto rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold">Dog Tag Dragão(LOS)</h3>
          <p className="text-gray-300">Por: Jota Pe</p>
        </div>
        {/* Exemplo de fanart */}
        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg">
          <img
            src="https://i.pinimg.com/originals/6c/52/e9/6c52e90d72b7d9aea6ca9cf6a95fd8f9.png"
            alt="Fanart de Exemplo"
            className="w-40 h-auto rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold">Dog Tag Cisne(LOS)</h3>
          <p className="text-gray-300">Por: Jota Pe</p>
        </div>
        {/* Exemplo de fanart */}
        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg">
          <img
            src="https://i.pinimg.com/originals/9e/00/38/9e0038c81ccb5e0f3b2a1b87d582bff9.png"
            alt="Fanart de Exemplo"
            className="w-40 h-auto rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold">Dog Tag Andromeda(LOS)</h3>
          <p className="text-gray-300">Por: Jota Pe</p>
        </div>
        {/* Exemplo de fanart */}
        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg">
          <img
            src="https://i.pinimg.com/originals/94/48/b5/9448b5b75e63b786d0052bd8f1ce785f.png"
            alt="Fanart de Exemplo"
            className="w-40 h-auto rounded-lg mb-4"
          />
          <h3 className="text-2xl text-yellow-300 font-bold">Dog Tag Fenix(LOS)</h3>
          <p className="text-gray-300">Por: Jota Pe</p>
        </div>
      </div>
    </div>
  );
}
