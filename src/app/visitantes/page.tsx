"use client"; // Marca como Client-Side

import { useEffect, useState } from "react";

export default function VisitantesPage() {
  const [visitors, setVisitors] = useState<string[]>([]);

  useEffect(() => {
    // Recupera a lista de visitantes do localStorage
    const storedVisitors = JSON.parse(localStorage.getItem("visitors") || "[]");
    setVisitors(storedVisitors);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-transparent">
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg backdrop-filter backdrop-blur-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">Lista de Visitantes</h1>
        {visitors.length > 0 ? (
          <ul className="space-y-4">
            {visitors.map((visitor, index) => (
              <li
                key={index}
                className="bg-white bg-opacity-70 p-4 rounded-lg shadow-sm text-black border border-gray-300"
              >
                {visitor}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">Nenhum visitante registrado.</p>
        )}
      </div>
    </div>
  );
}
