// src/app/timeline/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TimelinePage() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const toggleEventDetails = (eventId: string) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const timelineEvents = [
    {
      id: 'santuary-1',
      title: 'Saga do Santuário: Guerra Galáctica',
      description: 'Torneio onde os Cavaleiros de Bronze competem entre si pelo controle da Armadura de Ouro de Sagitário.',
      image: 'https://vainerds.com.br/wp-content/uploads/2020/04/saint-seiya-1280x720-1-1024x576.jpg',
      episode: 'Episódios 1-8',
      manga: 'Volumes 1-8',
      linkWatch: 'https://www.primevideo.com/region/na/detail/0SJHE5JISV7Z6IMWIX1OE0IQ1V/ref=atv_hm_hom_c_cjm7wb_2_2?jic=8%7CEgNhbGw%3D',
      linkRead: 'https://slimeread.com/ler/4140/cap-1',
      details: 'A Guerra Galáctica inicia a saga, onde Seiya e seus companheiros competem no torneio até que o caos é interrompido pela chegada de Ikki e os Cavaleiros Negros.',
    },
    {
      id: 'santuary-2',
      title: 'Saga do Santuário: Cavaleiros Negros',
      description: 'Seiya e os Cavaleiros de Bronze enfrentam Ikki e os Cavaleiros Negros, que roubam a Armadura de Ouro de Sagitário.',
      image: 'https://criticalhits.com.br/wp-content/uploads/2024/02/Cavaleiros-Negros1-1280x822.jpg',
      episode: 'Episódios 9-15',
      manga: 'Volumes 9-19',
      linkWatch: 'https://www.primevideo.com/region/na/detail/0SJHE5JISV7Z6IMWIX1OE0IQ1V/ref=atv_hm_hom_c_cjm7wb_2_2?jic=8%7CEgNhbGw%3D',
      linkRead: 'https://slimeread.com/ler/4140/cap-9',
      details: 'Ikki de Fênix lidera os Cavaleiros Negros em uma tentativa de controlar a Armadura de Ouro, levando Seiya e seus amigos a uma perigosa batalha.',
    },
    {
      id: 'santuary-3',
      title: 'Saga do Santuário: Lendas Ocultas do Santuário',
      description: 'Os Cavaleiros de Bronze enfrentam novos desafios enquanto segredos obscuros do Santuário são revelados.',
      image: 'https://i0.wp.com/heroisx.com/wp-content/uploads/2017/06/Cavaleiros-fantasma-de-geist-de-serpente.jpg?resize=615%2C240',
      episode: 'Episódios 16-22',
      manga: 'Exclusivo do Anime',
      linkWatch: 'https://www.primevideo.com/region/na/detail/0SJHE5JISV7Z6IMWIX1OE0IQ1V/ref=atv_hm_hom_c_cjm7wb_2_2?jic=8%7CEgNhbGw%3D',
      linkRead: '',
      details: 'Nesta fase, novos inimigos e mistérios em torno do Santuário são revelados, preparando o terreno para os próximos conflitos.',
    },
    {
      id: 'santuary-4',
      title: 'Saga do Santuário: Cavaleiros de Prata',
      description: 'Seiya e os Cavaleiros enfrentam os poderosos Cavaleiros de Prata enviados pelo Santuário.',
      image: 'https://heroisx.com/wp-content/uploads/2017/09/Algol-de-Perseu-Cavaleiros-de-Prata.jpg',
      episode: 'Episódios 23-35',
      manga: 'Volumes 20-25',
      linkWatch: 'https://www.primevideo.com/region/na/detail/0SJHE5JISV7Z6IMWIX1OE0IQ1V/ref=atv_hm_hom_c_cjm7wb_2_2?jic=8%7CEgNhbGw%3D',
      linkRead: 'https://slimeread.com/ler/4140/cap-20',
      details: 'Atena e seus Cavaleiros são caçados pelos Cavaleiros de Prata, enviados pelo Grande Mestre do Santuário.',
    },
    {
      id: 'santuary-5',
      title: 'Saga do Santuário: Cavaleiros de Ouro e Doze Casas',
      description: 'Os Cavaleiros de Bronze enfrentam os lendários Cavaleiros de Ouro nas 12 Casas do Zodíaco para salvar Atena.',
      image: 'https://i.pinimg.com/originals/3f/b8/52/3fb852ca910900c2cf7f94090b3aa861.jpg',
      episode: 'Episódios 36-73',
      manga: 'Volumes 26-46',
      linkWatch: 'https://www.primevideo.com/region/na/detail/0SJHE5JISV7Z6IMWIX1OE0IQ1V/ref=atv_hm_hom_c_cjm7wb_2_2?jic=8%7CEgNhbGw%3D',
      linkRead: 'https://slimeread.com/ler/4140/cap-26.1',
      details: 'Após descobrir a verdadeira identidade de Atena, Seiya e seus amigos devem atravessar as 12 Casas do Zodíaco, enfrentando os poderosos Cavaleiros de Ouro.',
    },
    {
      id: 'asgard-1',
      title: 'Saga de Asgard: Os Guerreiros Deuses',
      description: 'Os Cavaleiros de Atena enfrentam Hilda de Polaris e seus Guerreiros Deuses para salvar o reino de Asgard.',
      image: 'https://sm.ign.com/ign_br/screenshot/default/saga-de-asgard-cavaleiros-do-zodiaco_2rcx.jpg',
      episode: 'Episódios 74-99',
      manga: 'Manga spin-off disponível',
      linkWatch: 'https://www.primevideo.com/region/na/detail/0OHSSW864SW1POUXUIFNS8JY15/ref=atv_dp_season_select_s2?jic=8%7CEgNhbGw%3D',
      linkRead: 'https://slimeread.com/ler/7035/cap-01',
      details: 'A Saga de Asgard é exclusiva do anime e retrata a luta contra Hilda, que foi corrompida pelo Anel de Nibelungo. Embora não faça parte do mangá original, um mangá spin-off desta saga está disponível.',
    },
    {
      id: 'poseidon-1',
      title: 'Saga de Poseidon: Batalha nos Mares',
      description: 'Os Cavaleiros de Atena enfrentam Poseidon e seus Generais Marinas para salvar o mundo de uma inundação global.',
      image: 'https://m.media-amazon.com/images/S/pv-target-images/3fee3df2cf7b423238401619bcb5d7c3a16637f47fea5cede625374eedabdedc._SX1080_FMjpg_.jpg',
      episode: 'Episódios 100-114',
      manga: 'Volumes 47-67',
      linkWatch: 'https://www.primevideo.com/region/na/detail/0U3VM9C545P99K69T8UAVKBCMU/ref=atv_dp_season_select_s3?jic=8%7CEgNhbGw%3D',
      linkRead: 'https://slimeread.com/ler/4140/cap-47',
      details: 'Após a vitória em Asgard, Seiya e os Cavaleiros de Bronze enfrentam Poseidon, que planeja submergir o mundo.',
    },
    {
      id: 'hades-1',
      title: 'Saga de Hades: Santuário',
      description: 'Os Cavaleiros de Bronze enfrentam os Cavaleiros de Ouro ressuscitados por Hades.',
      image: 'https://i.ytimg.com/vi/sNe1Xi_BnwY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBO-bV20sDb6GjM6GZFU0YQj0hj9A',
      episode: 'Episódios 115-127',
      manga: 'Volumes 68-82',
      linkWatch: 'https://www.crunchyroll.com/pt-br/series/G64911J1Y/saint-seiya-hades?srsltid=AfmBOooOAzSEQc0Wssg3F_GKh2ucNyJfWN6x5HE5pwDRUCyAae28ayo4',
      linkRead: 'https://slimeread.com/ler/4140/cap-68',
      details: 'A primeira fase da Saga de Hades começa no Santuário, onde Cavaleiros de Ouro ressuscitados atacam Atena.',
    },
    {
      id: 'hades-2',
      title: 'Saga de Hades: Inferno',
      description: 'Os Cavaleiros de Atena entram no submundo para confrontar Hades e seus juízes.',
      image: 'https://www.cavzodiaco.com.br/imagens-series/hades-inferno/13.jpg',
      episode: 'Episódios 128-139',
      manga: 'Volumes 83-98',
      linkWatch: 'https://www.crunchyroll.com/pt-br/series/G64911J1Y/saint-seiya-hades?srsltid=AfmBOooOAzSEQc0Wssg3F_GKh2ucNyJfWN6x5HE5pwDRUCyAae28ayo4',
      linkRead: 'https://slimeread.com/ler/4140/cap-83',
      details: 'Seiya e seus companheiros enfrentam os espectros e juízes do Inferno enquanto tentam alcançar Hades.',
    },
    {
      id: 'hades-3',
      title: 'Saga de Hades: Elíseos',
      description: 'Os Cavaleiros de Bronze chegam aos Campos Elíseos para a batalha final contra Hades.',
      image: 'https://64.media.tumblr.com/06ea11477207b3dab9acaf9042f5b83e/tumblr_inline_nwp2dh9kji1tzyldw_640.jpg',
      episode: 'Episódios 140-145',
      manga: 'Volumes 99-110',
      linkWatch: 'https://www.crunchyroll.com/pt-br/series/G64911J1Y/saint-seiya-hades?srsltid=AfmBOooOAzSEQc0Wssg3F_GKh2ucNyJfWN6x5HE5pwDRUCyAae28ayo4',
      linkRead: 'https://slimeread.com/ler/4140/cap-99',
      details: 'A última batalha entre Atena e Hades ocorre nos Campos Elíseos, onde Seiya e seus amigos lutam com suas Armaduras Divinas.',
    },
  ];

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Cronologia Detalhada de Saint Seiya</h1>
      
      <div className="relative">
        <div className="border-l-4 border-yellow-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>

        {timelineEvents.map(event => (
          <div key={event.id} className="mb-8 w-full">
            <div className="flex justify-between items-center">
              <div className="w-5/12">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-auto h-70 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-5/12 px-4">
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-60 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <p className="text-gray-400 mb-2"><strong>Episódios:</strong> {event.episode}</p>
                  <p className="text-gray-400 mb-2"><strong>Mangá:</strong> {event.manga}</p>

                  {/* Links para assistir ou ler */}
                  <div className="flex space-x-4">
                    <a href={event.linkWatch} target="_blank" className="text-yellow-400 hover:text-yellow-500">
                      Assistir Episódios
                    </a>
                    <a href={event.linkRead} target="_blank" className="text-yellow-400 hover:text-yellow-500">
                      Ler Mangá
                    </a>
                  </div>

                  {/* Botão de ver mais detalhes */}
                  <button
                    onClick={() => toggleEventDetails(event.id)}
                    className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold mt-4 hover:bg-yellow-600 transition-colors duration-300"
                  >
                    {expandedEvent === event.id ? 'Ver Menos Detalhes' : 'Ver Mais Detalhes'}
                  </button>

                  {/* Detalhes adicionais, apenas se expandido */}
                  {expandedEvent === event.id && (
                    <div className="mt-4 text-gray-300">
                      <p>{event.details}</p>
                      {/* Você também pode incluir vídeos embutidos ou mais imagens aqui */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Link para voltar à página inicial */}
      <div className="text-center mt-8">
          <Link href="/" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
            Voltar à Página Inicial
          </Link>
        </div>
    </div>
  );
}
