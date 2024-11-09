"use client";

import { useState } from 'react';
import Image from 'next/image';
import casas from '../../data/casas';
import informacoesCasas from '../../data/informacoesCasas';
import { InfoCasa } from '../../data/informacoesCasas';

export default function MapaDozeCasas() {
  const [casaSelecionada, setCasaSelecionada] = useState<InfoCasa | null>(null);

  const handleCliqueCasa = (id: string) => {
    const infoCasa = informacoesCasas.find((casa) => casa.id === id);
    setCasaSelecionada(infoCasa || null);
  };

  const fecharZoom = () => {
    setCasaSelecionada(null);
  };

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
      {/* Background fixo */}
      <div
        className="fixed inset-0 -z-10 bg-fixed"
        style={{
          backgroundImage: "url('/doze-casas/fundo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundColor: 'black',
        }}
      ></div>

      {/* Título ajustável */}
      <h1
            className="absolute text-5xl font-extrabold text-transparent bg-clip-text"
            style={{
                backgroundImage: 'linear-gradient(135deg, #FFD700, #FF8C00)',
                top: '40%',
                left: '20%',
                transform: 'translate(-50%, -50%)',
                textShadow: '2px 4px 6px rgba(0, 0, 0, 0.4)',
            }}
            >
            Mapa das Doze Casas
        </h1>

      {/* Botões interativos para cada casa */}
      {casas.map((casa) => (
        <div
          key={casa.id}
          onClick={() => handleCliqueCasa(casa.id)}
          className="absolute cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg"
          style={{
            top: casa.posicao.top,
            left: casa.posicao.left,
            width: casa.posicao.width,
            height: casa.posicao.height,
          }}
        >
          <Image
            src={casa.img}
            alt={casa.nome}
            width={parseInt(casa.posicao.width)}
            height={parseInt(casa.posicao.height)}
            className="rounded-lg"
          />
        </div>
      ))}

      {/* Modal de zoom na casa selecionada */}
      {casaSelecionada && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-500"
        onClick={fecharZoom} // Fecha ao clicar fora
      >
        {/* Imagem ampliada da casa centralizada */}
        <div
          className="relative w-full max-w-md p-5 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105"
          onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar na imagem
        >
          <Image
            src={`/doze-casas/${casaSelecionada.id}.png`}
            alt={casaSelecionada.nome}
            layout="responsive"
            width={600}
            height={600}
            className="rounded-lg transition-opacity duration-300 ease-in-out"
          />
        </div>

        {/* Informações adicionais ao lado direito da imagem */}
        <div
          className="ml-10 text-left text-white max-w-lg bg-opacity-90 backdrop-blur-lg rounded-lg p-6 border border-gray-600 shadow-lg"
          onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar no texto
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 tracking-wide">{casaSelecionada.nome}</h2>
          <p className="text-lg mb-2"><strong>Protetores: </strong> {casaSelecionada.protetor.join(', ')}</p>
          <p className="text-lg mb-2"><strong>Curiosidades: </strong> {casaSelecionada.curiosidades}</p>
          <p className="text-lg mb-2">
            <strong>Batalhas: </strong>
            {casaSelecionada.batalhas.map((batalha, index) => (
              <span key={index}>
                {batalha}
                {index < casaSelecionada.batalhas.length - 1 && <><br /></>}
              </span>
            ))}
          </p>
          <p className="text-lg"><strong>Informações Adicionais: </strong> {casaSelecionada.informacoesAdicionais}</p>
        </div>
      </div>
    )}


      {/* CSS para animações */}
      <style jsx>{`
        .transition-opacity {
          opacity: 0;
          animation: fadeIn 0.6s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .backdrop-blur-lg {
          backdrop-filter: blur(10px);
        }

        .shadow-xl {
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </div>
  );
}
