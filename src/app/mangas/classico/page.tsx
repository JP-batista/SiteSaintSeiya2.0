'use client'; // Marcação necessária para o Next.js

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Importando o componente Link para navegação

export default function SaintSeiya() {
  const Santuario = [
    'Volume 1 - Os Cavaleiros de Athena',
    'Volume 2 - Combate Mortal! Pégaso Contra Dragão',
    'Volume 3 - Fênix! O Guerreiro que Veio do Inferno',
    'Volume 4 - Banho de Sangue! As Armaduras Negras',
    'Volume 5 - Armadura de Prata! A Beleza Assassina',
    'Volume 6 - Lutem! Em Prol de Athena',
    'Volume 7 - Colisão Violenta! A Armadura de Ouro',
    'Volume 8 - Santuário! As Doze Casas',
    'Volume 9 - Por Nossa Deusa',
    'Volume 10 - Shaka! O Homem Mais Próximo de Deus',
    'Volume 11 - Jovens! Confiamos Athena a Vocês',
    'Volume 12 - Combate Mortal na Sala do Grande Mestre!',
    'Volume 13 - A Ressurreição de Athena',
  ];

  const Poseidon = [
    'Volume 14 - Coroação!! O Rei dos Mares Poseidon!',
    'Volume 15 - Santuário Submarino! Os Sete Pilares',
    'Volume 16 - O Caçador de Corações',
    'Volume 17 - Ecoe! A Oração de Athena',
    'Volume 18 - Além das Ondas Azuis',
  ];

  const Hades = [
    'Volume 19 - Ressurreição! As 108 Estrelas Maléficas de Hades',
    'Volume 20 - Colisão! As Doze Casas',
    'Volume 21 - Sob as Árvores Salas Gêmeas...',
    'Volume 22 - Desperte!! Oitavo Sentido',
    'Volume 23 - Inferno - O Portão do Desepero',
    'Volume 24 - Rei das Trevas! O Nascimento da Alma',
    'Volume 25 - O Grande Eclipse',
    'Volume 26 - O Caminho para os Campos Elísios!',
    'Volume 27 - Thanatos e Hypnos!',
    'Volume 28 - Para um Mundo Onde a Luz Transborda...!',
  ];

  const [selectedSection, setSelectedSection] = useState(Santuario[0]); // Estado para a seção selecionada
  const [currentCarousel, setCurrentCarousel] = useState<'Santuario' | 'Poseidon' | 'Hades'>('Santuario'); // Define qual carrossel está ativo

  useEffect(() => {
    const container = document.getElementById('carousel-container');
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (container) {
        container.scrollLeft += event.deltaY * 6; // Controla a velocidade do scroll
      }
    };

    if (container) {
      container.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentCarousel]);

  // Função para ir ao início do carrossel
  const scrollToStart = () => {
    const container = document.getElementById('carousel-container');
    if (container) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  // Função para ir ao final do carrossel
  const scrollToEnd = () => {
    const container = document.getElementById('carousel-container');
    if (container) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: 'smooth',
      });
    }
  };

  const sectionsToDisplay =
    currentCarousel === 'Santuario' ? Santuario : currentCarousel === 'Poseidon' ? Poseidon : Hades;

  return (
    <div className="min-h-screen p-4 md:p-8 text-white ">
      <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-500 text-center mb-8 md:mb-12 animate-fade-in-down">
        Volumes Mangá - Saint Seiya
      </h1>

      {/* Botões para alternar entre carrosséis */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => {
            setCurrentCarousel('Santuario');
            setSelectedSection(Santuario[0]);
          }}
          className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
            currentCarousel === 'Santuario' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
          }`}
        >
          Saga do Santuário
        </button>
        <button
          onClick={() => {
            setCurrentCarousel('Poseidon');
            setSelectedSection(Poseidon[0]);
          }}
          className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
            currentCarousel === 'Poseidon' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
          }`}
        >
          Saga de Poseidon
        </button>
        <button
          onClick={() => {
            setCurrentCarousel('Hades');
            setSelectedSection(Hades[0]);
          }}
          className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
            currentCarousel === 'Hades' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
          }`}
        >
          Saga de Hades
        </button>
      </div>

      {/* Botões de controle do carrossel */}
      <div className="relative flex items-center justify-between mb-8 px-4 md:px-16">
        {/* Botão para ir ao início */}
        <button
          onClick={scrollToStart}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
          style={{ marginRight: '1rem' }}
        >
          Início
        </button>

        {/* Container do carrossel */}
        <div
          id="carousel-container"
          className="flex space-x-4 sm:space-x-6 overflow-x-auto no-scrollbar items-center py-4 mx-4 sm:mx-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          {sectionsToDisplay.map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 hover:bg-yellow-500 hover:text-gray-900 ${
                selectedSection === section
                  ? 'bg-yellow-500 text-gray-900 scale-110'
                  : 'bg-gray-700 text-yellow-400'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Botão para ir ao fim */}
        <button
          onClick={scrollToEnd}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
          style={{ marginLeft: '1rem' }}
        >
          Fim
        </button>
      </div>

      <div className="mt-2">
        {/* Exibição condicional das imagens de cada volume do Santuário */}
        {selectedSection === 'Volume 1 - Os Cavaleiros de Athena' && (
          <img 
            src="https://i.pinimg.com/originals/7c/74/c1/7c74c16dc9176cfb2e9a6dc16662f385.jpg" 
            alt="Volume 1 - Os Cavaleiros de Athena" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 2 - Combate Mortal! Pégaso Contra Dragão' && (
          <img 
            src="https://i.pinimg.com/originals/9c/07/79/9c07793be80bf8945cf60e12add2eddb.jpg" 
            alt="Volume 2 - Combate Mortal! Pégaso Contra Dragão" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 3 - Fênix! O Guerreiro que Veio do Inferno' && (
          <img 
            src="https://i.pinimg.com/originals/9a/cb/ad/9acbadf8c1d1ca07a3d8ba06a63f7ac1.jpg" 
            alt="Volume 3 - Fênix! O Guerreiro que Veio do Inferno" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 4 - Banho de Sangue! As Armaduras Negras' && (
          <img 
            src="https://i.pinimg.com/originals/0c/4b/74/0c4b74b918f3b0bef8190fe6469b958f.jpg"
            alt="Volume 4 - Banho de Sangue! As Armaduras Negras" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 5 - Armadura de Prata! A Beleza Assassina' && (
          <img 
            src="https://i.pinimg.com/originals/03/eb/83/03eb83c863b6bd92623183f5d2253cae.jpg"
            alt="Volume 5 - Armadura de Prata! A Beleza Assassina" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 6 - Lutem! Em Prol de Athena' && (
          <img 
            src="https://i.pinimg.com/originals/50/49/25/504925bb4e6fcdf9820aa6b416e125ad.jpg"
            alt="Volume 6 - Lutem! Em Prol de Athena" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 7 - Colisão Violenta! A Armadura de Ouro' && (
          <img 
            src="https://i.pinimg.com/originals/d4/92/3a/d4923a186a4980e4d1c4d8c18fc53219.jpg"
            alt="Volume 7 - Colisão Violenta! A Armadura de Ouro" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 8 - Santuário! As Doze Casas' && (
          <img 
            src="https://i.pinimg.com/originals/2a/1e/18/2a1e18aa3dce4d7c1fdfe3fdfb16e948.jpg"
            alt="Volume 8 - Santuário! As Doze Casas" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 9 - Por Nossa Deusa' && (
          <img 
            src="https://i.pinimg.com/originals/b9/0c/b7/b90cb7f7bb000f46351dcfae0f9842dd.jpg"
            alt="Volume 9 - Por Nossa Deusa" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 10 - Shaka! O Homem Mais Próximo de Deus' && (
          <img 
            src="https://i.pinimg.com/originals/6e/f6/1c/6ef61c395e5d3a1c689df667ef019212.jpg"
            alt="Volume 10 - Shaka! O Homem Mais Próximo de Deus" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 11 - Jovens! Confiamos Athena a Vocês' && (
          <img 
            src="https://i.pinimg.com/originals/93/7b/7e/937b7ed4d0cf3c779d625747c1ba5971.jpg"
            alt="Volume 11 - Jovens! Confiamos Athena a Vocês" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 12 - Combate Mortal na Sala do Grande Mestre!' && (
          <img 
            src="https://i.pinimg.com/originals/1c/bc/f4/1cbcf47420f4cc14ef6051c81d1f8ea6.jpg"
            alt="Volume 12 - Combate Mortal na Sala do Grande Mestre!" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 13 - A Ressurreição de Athena' && (
          <img 
            src="https://i.pinimg.com/originals/b6/d0/61/b6d061c1b68c06d5e77a711f1c3ed1bc.jpg"
            alt="Volume 13 - A Ressurreição de Athena" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}

        {/* Exibição condicional das imagens de cada volume de Poseidon */}
        {selectedSection === 'Volume 14 - Coroação!! O Rei dos Mares Poseidon!' && (
          <img 
            src="https://i.pinimg.com/originals/1f/bd/f1/1fbdf16a60d65ed45ce300145068aa8d.jpg"
            alt="Volume 14 - Coroação!! O Rei dos Mares Poseidon!" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 15 - Santuário Submarino! Os Sete Pilares' && (
          <img 
            src="https://i.pinimg.com/originals/52/15/9f/52159f51fbc59d7e0ad92a6a624132e7.jpg"
            alt="Volume 15 - Santuário Submarino! Os Sete Pilares" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 16 - O Caçador de Corações' && (
          <img 
            src="https://i.pinimg.com/originals/c7/90/3f/c7903fdbc1e48aea28e00aa56f6eec5e.jpg"
            alt="Volume 16 - O Caçador de Corações" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 17 - Ecoe! A Oração de Athena' && (
          <img 
            src="https://i.pinimg.com/originals/f7/16/d1/f716d1d16bed4aeca5b498b6c5e896ba.jpg"
            alt="Volume 17 - Ecoe! A Oração de Athena" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 18 - Além das Ondas Azuis' && (
          <img 
            src="https://i.pinimg.com/originals/84/75/cf/8475cffcccbb55ab44a0edc19c3709f0.jpg"
            alt="Volume 18 - Além das Ondas Azuis" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}

        {/* Exibição condicional das imagens de cada volume de Hades */}
        {selectedSection === 'Volume 19 - Ressurreição! As 108 Estrelas Maléficas de Hades' && (
          <img 
            src="https://i.pinimg.com/originals/8a/e7/15/8ae7153542b5153641ef7e205c5ea04c.jpg"
            alt="Volume 19 - Ressurreição! As 108 Estrelas Maléficas de Hades" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 20 - Colisão! As Doze Casas' && (
          <img 
            src="https://i.pinimg.com/originals/7c/07/18/7c0718014d67f643a6e1de4813f6f1f2.jpg"
            alt="Volume 20 - Colisão! As Doze Casas" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 21 - Sob as Árvores Salas Gêmeas...' && (
          <img 
            src="https://i.pinimg.com/originals/16/46/d9/1646d99c2ce3671546fb240fa500bf1e.jpg"
            alt="Volume 21 - Sob as Árvores Salas Gêmeas..." 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 22 - Desperte!! Oitavo Sentido' && (
          <img 
            src="https://i.pinimg.com/originals/69/3c/22/693c22d734e1052f580dd35349fbfbf1.jpg"
            alt="Volume 22 - Desperte!! Oitavo Sentido" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 23 - Inferno - O Portão do Desepero' && (
          <img 
            src="https://i.pinimg.com/originals/96/77/b7/9677b701663daa5b6420566a6971a7c3.jpg"
            alt="Volume 23 - Inferno - O Portão do Desepero" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 24 - Rei das Trevas! O Nascimento da Alma' && (
          <img 
            src="https://i.pinimg.com/originals/fa/1c/03/fa1c03b9c05af6e9210960a4a8dfad6a.jpg"
            alt="Volume 24 - Rei das Trevas! O Nascimento da Alma" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 25 - O Grande Eclipse' && (
          <img 
            src="https://i.pinimg.com/originals/22/65/19/2265191b1e8d026daa5b5e097d5fc205.jpg"
            alt="Volume 25 - O Grande Eclipse" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 26 - O Caminho para os Campos Elísios!' && (
          <img 
            src="https://i.pinimg.com/originals/fe/90/0b/fe900bf2ad31908543c54ba4410315ef.jpg"
            alt="Volume 26 - O Caminho para os Campos Elísios!" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 27 - Thanatos e Hypnos!' && (
          <img 
            src="https://i.pinimg.com/originals/ce/11/6e/ce116e7b4c51afe37cf9da6829ec54dd.jpg"
            alt="Volume 27 - Thanatos e Hypnos!" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
        {selectedSection === 'Volume 28 - Para um Mundo Onde a Luz Transborda...!' && (
          <img 
            src="https://i.pinimg.com/originals/b4/3a/e7/b43ae74459c0a5149978877a230c576d.jpg"
            alt="Volume 28 - Para um Mundo Onde a Luz Transborda...!" 
            className="w-64 h-112 object-cover rounded-lg mx-auto mb-6" 
          />
        )}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4">{selectedSection}</h2>
        <div className="mt-2">

          <p></p>
          {selectedSection === 'Volume 1 - Os Cavaleiros de Athena' && (
            <div>
                <p className="text-2xl"> 
                Capítulo 1: "Os Cavaleiros de Atena"
                </p> 
                <p>
                "Athena no Seinto"
                </p>
                <p className="mt-2">
                Lançamento em tankobon no Japão: 10 de setembro de 1986; no Brasil: janeiro de 2012 (Editora JBC)
                </p>
                <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/1.jpg" 
                className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
                <p className="mt-4">
                Dois turistas estão visitando a Acrópole (região de ruínas de templos próxima à cidade de Atenas). 
                Encantados com as maravilhas do local, eles veem uma luz e acham que é uma estrela cadente, mas é o 
                aprendiz de cavaleiro Seiya, que voa longe com um golpe de sua mestra, Marin. Ele pede para os turistas 
                fugirem antes que ela chegue. A amazona (nome dado aos cavaleiros do sexo feminino) chega e continua 
                lutando com Seiya, que insiste em dizer que já está pronto para enfrentar Cássios.
                Marin avisa Seiya que ela só terá certeza que ele pode derrotar Cássios se ele demonstrar que pode vencê-lo. 
                Então Seiya aumenta o seu cosmo e abre uma cratera no chão. Confiantes, os dois vão embora. Os dois turistas 
                ficam espantados com o poder deles.
                Em Atenas, um velho padre explica sobre a existência dos Cavaleiros do Zodíaco e, que desde a antiguidade, 
                eles protegem Atena nas guerras contra os deuses.
                Seiya vai enfrentar Cássios e, ao iniciar a luta, o gigante aprendiz de cavaleiro agarra Seiya e promete 
                arrancar a sua orelha, mas é Seiya quem arranca a orelha do Cássios. Durante o decorrer da luta, Seiya 
                lembra de momentos do treino dele com Marin, inclusive as explicações sobre o Cosmo e os Átomos. No final, 
                Seiya pergunta para Cássios se ele já sentiu o cosmo e fala que vai fazer uma demonstração para ele. Seiya 
                derrota Cássios com os Meteoros de Pégaso.
                </p>

                <p className="text-2xl mt-4"> 
                Capítulo 2: "Armadura de Pégaso
                </p>
                
                <p>
                "Pegasasu no Kurosu"
                </p>

                <p className="mt-2">
                Lançamento em tankobon no Japão: 10 de setembro de 1986; no Brasil: janeiro de 2012 (Editora JBC)
                </p>
                <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/2.jpg" 
                className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
                <p className="mt-4">
                Seiya conquista a Armadura de Bronze de Pégaso, porém ele é avisado pelo Grande Mestre que ele não pode 
                usar a armadura em benefício próprio. No alojamento dos cavaleiros, Marin explica para Seiya a história 
                da urna das armaduras e sobre a relação dela com a Caixa de Pandora.
                Os soldados de Shina de Cobra (mestra de Cássios) invadem o quarto de Seiya e Marin, mas neste momento 
                eles já fugiram. Marin está levando Seiya para fora do Santuário, só que Shina aparece e diz que a 
                armadura pertence a um grego e não a um oriental, por isso a Armadura de Pégaso deveria pertencer a 
                Cássios. Marin avisa Seiya que ele mesmo terá que enfrentar Shina sozinho. A princípio, Seiya foge, 
                mas quando ele veste a armadura, por um momento, quase acerta Shina, que mesmo assim continua a acertá-lo.
                Shina e Marin falam que sem ele queimar o cosmo, a armadura é só um peso a mais para o cavaleiro. 
                Então Seiya queima o seu cosmo ao máximo, derrota os soldados de Shina e parte a máscara dela ao meio, 
                vendo o seu rosto. Marin leva Seiya até as montanhas que divide o Santuário de Atenas e Seiya pede que, 
                da próxima vez, Marin revele o seu rosto para ele.
                </p>

                <p className="text-2xl mt-4"> 
                Capítulo 3: "Armadura de Ouro"
                </p>

                <p>
                "Gorudo Kurosu"
                </p>
                <p className="mt-2">
                Lançamento em tankobon no Japão: 10 de setembro de 1986; no Brasil: janeiro de 2012 (Editora JBC)
                </p>
                <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/3.jpg" 
                className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
                <p className="mt-4">
                Na Fundação Graad, no Japão, chega à sétima armadura, a Armadura de Hidra. A jovem Saori Kido, neta de 
                Mitsumasa Kido, fundador da Fundação Graad, anuncia para a imprensa, junto de seu mordomo Tatsumi, que 
                a Fundação realizará um torneio (Guerra Galáctica) com os Cavaleiros do Zodíaco e premiará o vencedor 
                com a Armadura de Ouro de Sagitário.
                Ela explica que seu avô adotou, há seis anos, cem crianças que receberam treinamento e depois foram 
                enviadas para os quatro cantos do mundo para virarem cavaleiros, mas, no final desses seis anos, só 
                dez continuaram a se corresponder com a Fundação e apenas sete deles já voltaram para o Japão.
                Seiya chega ao meio da coletiva e exige ver sua irmã, do qual foi separado há seis anos. Saori conta 
                que a irmã dele fugiu após a sua ida para a Grécia. Seiya, então, vai embora, mas Jabu, Cavaleiro de 
                Unicórnio, tenta impedir que Seiya vá embora. Junto com Tatsumi, exige que Seiya deixe a armadura. Seiya 
                fala que vai deixar armadura, mas antes golpeia Jabu.
                </p>
                <p className="text-2xl mt-4"> 
                Capítulo 4: "Guerra Galáctica"
                </p>

                <p>
                "Gyarakushan Wozu"
                </p>
                <p className="mt-2">
                Lançamento em tankobon no Japão: 10 de setembro de 1986; no Brasil: janeiro de 2012 (Editora JBC)
                </p>
                <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/4.jpg" 
                className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
                <p className="mt-4">
                O torneio entre os Cavaleiros de Bronze está prestes a começar. Mino, uma amiga de infância de Seiya, 
                da época do orfanato, convence o Cavaleiro de Pégaso a participar do torneio, com o pretexto de que a 
                sua irmã poderá vê-lo pela TV.
                O torneio começa e as chaves ficam assim: Cisne x Hidra; Pégaso x Urso, o vencedor enfrenta Dragão; 
                Andrômeda enfrenta o vencedor de Leão x Unicórnio; e Lobo x Fênix.
                O primeiro combate é de Pégaso x Urso, porque Cisne ainda não chegou. Durante a luta, Geki de Urso 
                encurrala Seiya com seu golpe Braços de Urso, mas Seiya se lembra do seu treinamento em que Marin 
                conta que, para derrotar seu adversário, deve-se privá-lo de sua principal arma. Então Seiya quebra 
                os braços de Geki e chuta o Urso com uma velocidade incrível, como se fossem Meteoros.
                </p>           
            </div>
          )}
          {selectedSection === 'Volume 2 - Combate Mortal! Pégaso Contra Dragão' && (
            <div>
              <p className="text-2xl mt-4"> 
              Capítulo 5: "Cisne, o Guerreiro do Gelo"
              </p>

              <p>
              "Kigunasu, Hyogen no Senshi"
              </p>
              <p className="mt-2">
              Lançamento em tankobon no Japão: 10 de setembro de 1986; no Brasil: fevereiro de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/5.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Unicórnio derrota Ban de Leão Menor. Enquanto isso, na Sibéria, Hyoga recebe uma carta do Santuário 
              contando onde está a Armadura de Cisne e o autorizando a usar para acabar com a Guerra Galáctica. 
              Chegando lá, ele enfrenta e derrota Ichi de Hidra e avisa a Seiya e os outros que está de volta ao 
              Japão só para acabar com o torneio.
              </p>

              <p className="text-2xl mt-4"> 
              Capítulo 6: "Dragão, o escudo e punho mais fortes" 
              </p>
              <p>
              "Doragon, Saikyo no Tate to Ken"
              </p>
              <p className="mt-2"> 
              Lançamento em tankobon no Japão: 9 de janeiro de 1987; no Brasil: fevereiro de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/6.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Como Fênix ainda não chegou, a luta de Seiya contra Shiryu de Dragão é antecipada. Ao começar a luta, 
              Shunrei, uma garota que foi criada junto com Shiryu na China, chega até a coliseu e conta para Shiryu 
              que seu mestre está à beira da morte.
              Shiryu decide encerrar a luta logo para poder voltar para casa, mas Seiya não se rende tão fácil. 
              Shiryu consegue se defender com o escudo de sua armadura e atacar com o seu punho, que juntos são 
              considerados os mais fortes dos Cavaleiros de Bronze. Seiya, entretanto, consegue destruir o punho 
              e o escudo de Shiryu.
              </p>
              
              <p className="text-2xl mt-4"> 
              Capítulo 7: "Combate mortal! Pégaso contra Dragão"
              </p>
              <p>
              "Shito! Pegasasu Tai Doragon"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 9 de janeiro de 1987; no Brasil: fevereiro de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/7.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Um replay é mostrado para saber como Seiya destruiu o escudo e o punho de Shiryu. O Cavaleiro de Pégaso 
              se jogou contra o escudo de Shiryu e quando o Dragão foi golpear a sua cabeça, ele se abaixou, fazendo 
              Shiryu atingir o próprio escudo, que é destruído junto de seu punho.
              Dragão diz que não adianta mais lutar com armadura destruída e tira o resto dela. Seiya, que não gosta 
              de enfrentar um oponente em desvantagem, também tira sua. Pégaso solta seus Meteoros, Shiryu desvia, 
              mas alguns deles o acertam. Seiya conta que descobriu o ponto fraco de Shiryu: ao soltar o Cólera do 
              Dragão, Shiryu desprotege o seu coração momentaneamente. Se Seiya conseguir atingir um golpe ali, 
              Shiryu certamente morrerá.
              Duvidando que Seiya consiga, Shiryu dispara o Cólera do Dragão e Seiya o Meteoro de Pégaso, os dois 
              são atingidos, o médico declara que Dragão está morto. Shunrei implora para que Seiya golpeie a costa 
              de Shiryu, no lado oposto do coração dele, mas o médico diz que Pégaso está incapaz de fazer isso. 
              Entretanto, Seiya resolve tentar. Shun de Andrômeda ajuda carregando Shiryu. O Pégaso se concentra 
              e consegue acertar as costas de Shiryu, fazendo o seu coração voltar a bater.
              </p>

              <p className="text-2xl mt-4"> 
              Capítulo 8: "Axia"
              </p>
              <p>
              "Axia"
              </p>
              <p className="mt-2">   
              Lançamento em tankobon no Japão: 9 de janeiro de 1987; no Brasil: fevereiro de 2012 (Editora JBC)           
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/8.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              A luta de Shun de Andrômeda contra Jabu de Unicórnio começa. Shun faz uma proteção em volta de si com a 
              Corrente de Andrômeda, que o protege de todos os ataques de Unicórnio. Jabu sofre com os choques elétricos 
              da corrente.
              No hospital, Shiryu visita Seiya para agradecer e conta que sente o cosmo de Fênix no Santuário faz tempo. 
              Dragão também comenta sobre quem é Fênix e Seiya lembra que, se Fênix realmente estiver no Coliseu, 
              todos correm perigo.
              A Corrente de Andrômeda começa a agir de forma estranha e ela forma a palavra AXIA, que significa 
              "Algo de Grande Valor". Shun então percebe que o perigo que a corrente tenta mostrar está na Armadura 
              de Ouro de Sagitário, que se abre e de dentro sai Fênix.
              </p>
            </div>
          )}
          {selectedSection === 'Volume 3 - Fênix! O Guerreiro que Veio do Inferno' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              Capítulo 9: "Fênix! O guerreiro que veio do inferno!"
              </p>
              <p>
              "Fenikkusu! Jigoku Yori no Senshi"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 10 de março de 1987; no Brasil: março de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/9.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Ikki de Fênix é o irmão de Shun e foi ele quem partiu no lugar de Shun para a Ilha da Rainha da Morte. 
              O Cavaleiro de Bronze de Fênix revela que voltou ao Japão para se vingar da Fundação Graad e todos os 
              envolvidos com ela. Então ele ataca Shun, mas Nachi de Lobo entra na frente e diz que Fênix deve lutar 
              contra ele pela Guerra Galáctica.
              Ikki derrota Lobo rapidamente com o seu poderoso Espírito Diabólico de Fênix. Ikki pergunta quem quer 
              ser o próximo a morrer, mas os Cavaleiros Negros aparecem e dizem que Ikki deve deixar os outros cavaleiros para eles.
              </p>

              <p className="text-2xl mt-4"> 
              Capítulo 10: "A Armadura de Ouroi é roubada"
              </p>
              <p>
              "Ubawareta Gorudo Kurosu"
              </p>
              <p className="mt-2">      
              Lançamento em tankobon no Japão: 10 de março de 1987; no Brasil: março de 2012 (Editora JBC)        
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/10.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Os Cinco Fênix Negros encurralam os Cavaleiros de Bronze. Um deles avisa a Ikki que eles já levaram a 
              Armadura de Ouro, fazendo Ikki e os Cavaleiros Negros fugirem.
              Saori manda Seiya e os outros irem atrás da armadura. Mesmo não gostando da postura de Saori, Seiya vai 
              à caça da armadura. Hyoga recupera o braço esquerdo da armadura, Seiya a perna direita, Shun a perna 
              esquerda e Shiryu o braço direito. Porém, Ikki e os outros Cavaleiros Negros conseguem escapar.
              </p>
              
              <p className="text-2xl mt-4"> 
              Capítulo 11: "Os quatro Cavaleiros Negros! Apresentação"
              </p>
              <p>
              "Burakku Fo! Tojo"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 10 de março de 1987; no Brasil: março de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/11.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Shiryu vai embora levando as Armaduras de Dragão e de Pégaso para conserto. Shun sai pelas propriedades 
              da mansão da família Kido para achar o lugar em que Ikki treinava e, ao achar a árvore com a marca dos 
              socos de Ikki, Shun é atacado por Cisne Negro.
              Hyoga chega para ajudar e os dois Cisnes começam a lutar, porém a luta é interrompida pelos outros 
              Cavaleiros Negros. Cisne Negro vai embora junto com eles. Os Cavaleiros Negros chegam ao local onde Ikki está.
              Ikki distribui as outras partes da Armadura de Sagitário entre os Cavaleiros Negros: Pégaso Negro 
              fica com a Cintura, Dragão Negro fica com o Peitoral, Cisne Negro fica com as Ombreiras, Andrômeda 
              fica com o cinturão e Ikki fica com o Elmo (ou capacete).
              </p>

              <p className="text-2xl mt-4"> 
              Capítulo 12: "O palácio de Mu"
              </p>
              <p>
              "Mu no Yakata"
              </p>
              <p className="mt-2">   
              Lançamento em tankobon no Japão: 10 de março de 1987; no Brasil: março de 2012 (Editora JBC)           
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/12.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Shiryu chega a China e descobre que seu Mestre está bem. Ele pediu que Shunrei contasse que ele 
              estava morrendo para que Shiryu aprendesse a se concentrar na luta ao invés de se preocupar com 
              outras coisas. O Mestre Ancião conta para Shiryu como chegar até o homem que conserta armaduras.
              Shiryu parte para Jamiel onde enfrenta alguns desafios no caminho até chegar ao Palácio de Mu, 
              onde ele é recebido por Kiki. Mu diz para Shiryu que se ele quiser consertar as armaduras, ele 
              deve doar sua vida para elas.
              No Japão, Ikki lança um desafio para os Cavaleiros de Bronze: eles devem levar as partes da armadura 
              que eles têm ao Monte Fuji, onde Ikki e os Cavaleiros Negros estarão esperando. Os Cavaleiros de 
              Bronze chagam lá e Seiya começa a ficar preocupado com a demora de Shiryu, até que ele vê a silhueta 
              do Cavaleiro de Dragão, que traz consigo a nova Armadura de Pégaso para Seiya.
              </p>
            </div>
          )}
          {selectedSection === 'Volume 4 - Banho de Sangue! As Armaduras Negras' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              Capítulo 13: "A terror do punho da Morte Negra"
              </p>
              <p>
              "Kokushiken no Kyofu"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 8 de maio de 1987; no Brasil: abril de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/13.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Kiki aparece com a Armadura de Dragão e revela que Shiryu deu a vida pelo conserto dela e da 
              Armadura de Pégaso. Seiya e os outros resolvem entrar no Monte Fuji e pedem para Kiki esperar 
              ali, por Shiryu.
              Seiya se encontra com o Pégaso Negro e, mesmo após ser atingido pelo Meteoro Negro, ele consegue 
              derrotar o Pégaso Negro com o Meteoro de Pégaso e fica com ao cinturão da Armadura, só que Seiya 
              começar a sentir queimaduras no seu corpo, nos pontos em que ele foi atingido pelo Meteoro Negro. 
              A dor é tanta que ele se desequilibra e cai em um precipício.
              Hyoga luta contra o Cisne Negro e o congela. Antes de morrer, Cisne Negro arranca o seu olho e 
              manda para Ikki. Hyoga pega as ombreiras e, perto dali, Seiya consegue subir e deixar as partes 
              da Armadura de Ouro para que os outros achem, antes de cair novamente no precipício.
              </p>

              <p className="text-2xl mt-4"> 
              Capítulo 14: "Batalha gélida! Cisne vs Fênix"
              </p>
              <p>
              "Seizetsu! Hakucho Tai Hoo"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 8 de maio de 1987; no Brasil: abril de 2012 (Editora JBC)            
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/14.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Ikki recebe o olho do Cisne Negro, que mostra para Ikki os golpes de Hyoga. O Cavaleiro de Cisne 
              chega sem seguida para enfrentar o Fênix, porém Ikki consegue desviar de todos os golpes. Ikki 
              ataca com o Golpe Fantasma de Fênix.
              Hyoga relembra do naufrágio em que sua mãe morreu e quando ele conseguiu enfim visitar o seu túmulo 
              no fundo do mar, ele também vê uma ilusão em que o corpo congelado de sua mãe se transforma em um 
              esqueleto. Ikki golpeia o coração de Hyoga que, antes de morrer, segura o braço de Ikki e o congela.
              </p>
              
              <p className="text-2xl mt-4"> 
              Capítulo 15: "Shun! A fúria da Nebulosa"
              </p>
              <p>
              "Shun! Ikari no Nebyura"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 8 de maio de 1987; no Brasil: abril de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/15.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Mu chega com o corpo de Shiryu. Shun acha Seiya pendurado no precipício e tenta salvá-lo com a Corrente 
              de Andrômeda, mas o Andrômeda Negro chega e ataca Shun com a Corrente Negra.
              Mu lembra que Shiryu teve que doar metade de seu sangue para a armadura, porém ele aguentou a perda 
              de tanto sangue. Então, de forma inesperada, Shiryu levanta de seu túmulo. Mu avisa que ele não pode 
              perder mais sangue ou senão morrerá. Shun derrota o Andrômeda Negro.
              </p>

              <p className="text-2xl mt-4">
              Capítulo 16: "Colisão! Dragão vs Dragão" 
              </p>
              <p>
              "Gekito! Ryu Tai Ryu"
              </p>
              <p className="mt-2">
              Lançamento em tankobon no Japão: 8 de maio de 1987; no Brasil: abril de 2012 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/16.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Shiryu de Dragão chega para enfrentar o Dragão Negro. Shun deixa as partes da Armadura de Ouro dele 
              e de Seiya com Shiryu e desce pelo precipício para salvar o Cavaleiro de Pégaso. Valendo seis peças 
              da Armadura de Ouro, os dois dragões começam a lutar, o Dragão Negro se esconde das sombras, porém 
              os ataques dele veem do lado oposto em que ele está.
              Shiryu percebe que é o irmão do Dragão Negro que ataca das sombras e como ele é cego, ele consegue 
              se orientar melhor na escuridão. Então o Dragão Negro percebe que deverá enfrentar Shiryu pessoalmente. 
              Mesmo não podendo, Shiryu ataca com o Cólera do Dragão, porém seu corpo fraco recebe o impacto da 
              força do golpe. Ele quase derrota o Dragão Negro, que num ato de solidariedade, pressiona o ponto 
              vital de Shiryu para que os ferimentos causados pelo Cólera do Dragão parem. Arrependido, o Dragão 
              Negro cai morto no chão.
              </p>
              
              <p className="text-2xl mt-4"> 
              Capítulo 17: "Lembranças do Ódio"
              </p>
              <p>
              "Nikushimi no Kioku"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 8 de maio de 1987; no Brasil: abril de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/17.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Shun consegue resgatar Seiya do fundo do precipício, Shiryu pressiona os pontos vitais de Seiya para 
              que os ferimentos causados pelo Meteoro Negro parem. Shun e Shiryu chegam até Ikki e Shiryu se prepara 
              para lutar, mas Shun o ataca e se oferece em sacrifício para Ikki poder voltar a ser a pessoa boa que 
              era antes.
              Ikki fala que não vai adiantar nada, mesmo assim ele ataca o irmão, mas é impedido por Hyoga que ainda 
              está vivo. Seiya também aparece. Ikki está disposto a enfrentar os quatro. Ele ataca com o Golpe Fantasma 
              de Fênix, porém Hyoga faz uma barreira de gelo, fazendo o golpe do Ikki voltar contra si.
              Ikki começa a lembrar de Esmeralda, uma jovem que ajudava Ikki na Ilha da Rainha da Morte, da qual ele 
              se apaixonou, porém ela foi morta pelo Mestre de Ikki, Guilty, fazendo com que Ikki se enfureça e mate 
              seu mestre.
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 5 - Armadura de Prata! A Beleza Assassina' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              Capítulo 18: "Lembranças da Ilha da Rainha da Morte"
              </p>
              <p>
              "Desukuinto no Tsuioku"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 10 de julho de 1987; no Brasil: maio de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/18.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Ikki se lembra de alguns momentos em que ele passou com Esmeralda e também se lembra dos momentos finais 
              de seu mestre, que revela que Mitsumada Kido é o pai de Ikki e de todos os órfãos adotados há seis anos 
              pela Fundação Graad.
              Neste momento é que Ikki fica revoltado e decide se vingar da fundação. Depois ele se lembra do momento 
              em que ele foi pegar a Armadura de Fênix, mas ela estava sob a proteção de Jango, o líder dos Cavaleiros 
              Negros, e ao derrotá-lo, ficou com a posse da Armadura de Bronze de Fênix.
              Após vestir a armadura, Shaka de Virgem aparece para eliminar Jango, mas descobre que ele acabou de ser 
              derrotado por Ikki, que percebe a força descomunal do Cavaleiro de Ouro. Fênix tenta atacar Shaka, que 
              revida jogando Ikki longe. O Cavaleiro de Virgem vai embora apagando a memória de Fênix, que depois tem 
              um encontro com o resto dos Cavaleiros Negros. Os Cavaleiros Negros pedem para serem subordinados de Ikki.
              </p>

              <p className="text-2xl mt-4"> 
              Capítulo 19: "Torne-se cinzas, Fênix"
              </p>
              <p>
              "Fushicho yo Haito Nare!"
              </p>
              <p className="mt-2">   
              Lançamento em tankobon no Japão: 10 de julho de 1987; no Brasil: maio de 2012 (Editora JBC)           
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/19.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Hyoga quer aproveitar e eliminar Ikki agora que ele está incapacitado, porém Shun impede que Hyoga faça isso. 
              Neste momento de distração, Ikki acorda e golpeia o coração de Hyoga. Fênix tira, do peito do Cisne, o 
              crucifixo que pertencia a mãe de Hyoga e percebe que foi isso que protegeu o coração do Cisne, quando ele 
              recebeu o seu golpe na luta anterior.
              Ikki golpeia os quatro com o Ave Fênix, mas Seiya é protegido pela Armadura de Sagitário. Seiya lembra que, 
              no dia em que os órfãos estavam partindo para o redor do mundo, Ikki tentou fugir para salvar Shun de ir para 
              a Ilha de Andrômeda, mas, eletrificado pelas cercas elétricas da mansão Kido, Ikki é mandando para a Ilha da 
              Rainha da Morte, sendo espancado por Tatsumi. Mesmo assim Ikki não se sensibiliza. Seiya golpeia Fênix e 
              destrói sua armadura, que se reconstrói (como a Fênix na mitologia).
              Ikki ataca, mas Seiya se protege com o Escudo do Dragão, que foi mandado por Shiryu. Seiya ataca com o 
              Meteoro, mas a Corrente de Andrômeda ataca junto e Ikki cai no chão. Seiya percebe que mesmo desacordados, 
              seus amigos estão ajudando com os seus cosmos. Seiya então finaliza com o Meteoro de Pégaso, que recebe a 
              ajuda do Pó de Diamante. Declarando sua derrota, Ikki fala que o que ajudou Seiya não foi só a amizade e 
              sim o amor fraterno.
              </p>
              
              <p className="text-2xl mt-4"> 
              Capítulo 20: "Armadura de Prata! A beleza assassina"
              </p>
              <p>
              "Shiruba Kurosu! Utsukushiki Hittoman"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 10 de julho de 1987; no Brasil: maio de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/20.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Kiki e Mu percebem um cosmo poderoso que se aproxima do Monte Fugi. Enquanto isso, Ikki revela para Seiya 
              que todos os órfãos adotados pela Fundação Graad são irmãos e que o pai deles é Mitsumasa Kido. Um terremoto 
              acontece no Monte Fuji, Mu consegue teletransportar os cavaleiros, surgindo assim quatro estrelas cadentes 
              no céu, mas quatro outras estrelas seguem essas.
              Misty de Lagarto é o misterioso cavaleiro que se aproximava do Monte Fuji. Foi ele que causou o terremoto e 
              Marin de Águia, mestra de Seiya, avisa Misty que quatro estrelas cadentes saíram do Monte Fuji. Os dois então 
              seguem Mu, que carrega Seiya, que está desacordado, e o alcança em uma praia. Misty se prepara para lutar com 
              Mu, mas Marin lembra que eles estão ali para derrotar os Cavaleiros de Bronze.
              Seiya acorda e se surpreende ao ver sua mestra ali. Misty ataca Seiya, que revida, mas Misty comenta que a 
              diferença entre um Cavaleiro de Prata e um de Bronze é enorme. Seiya ataca Misty, mas quando o Cavaleiro de 
              Prata vai revidar, Marin golpeia o coração de Seiya, o matando. Misty se surpreende com esse ato de Marin e 
              desconfia se Seiya realmente morreu. O Cavaleiro Mouses de Baleia chega com o corpo de Shiryu, Asterion de 
              Cães de Caça com o corpo de Shun e Babel de Centauro com o corpo de Hyoga.
              </p>

              <p className="text-2xl mt-4"> 
              Capítulo 21: "Medalha de hombridade"
              </p>
              <p>
              "Otoko no Kunsho"
              </p>
              <p className="mt-2">    
              Lançamento em tankobon no Japão: 10 de julho de 1987; no Brasil: maio de 2012 (Editora JBC)          
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/21.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Os Cavaleiros de Prata enterram os quatros Cavaleiros de Bronze. Kiki pergunta para Mu se eles perceberam o 
              plano de Marin e Mu diz que não, só Misty que desconfia da morte de Seiya, fato que é verdade, pois o Cavaleiro 
              de Lagarto fica para trás para conferir se Seiya realmente está morto e ataca o túmulo de Pégaso. Seiya salta 
              de seu túmulo, desviando do golpe, mostrando que está vivo.
              Descobrindo a traição de Marin, Misty continua a luta com Seiya, que ataca com os Meteoros, mas são bloqueados 
              pelo Cavaleiro de Prata. Misty ataca com o golpe Furacão das Trevas, mas Seiya não se da por vencido e continua 
              lutando com Misty, cada vez acertando mais Meteoros nele.
              Seiya, no final, ataca com o golpe Cometa de Pégaso, mas mesmo assim Misty fica vivo e ataca Seiya. O Cavaleiro 
              de Pégaso consegue bloquear e usa um golpe novo chamado Turbilhão de Pégaso, enfim derrotando o cavaleiro de prata.
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 6 - Lutem! Em Prol de Athena' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              Capítulo 22: "A carta do cavaleiro ressuscitado"
              </p>
              <p>
              "Fukkatsu no Seinto Kado"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 10 de setembro de 1987; no Brasil: junho de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/22.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Seiya desenterra seus amigos e descobre que na verdade tratam-se dos corpos dos Cavaleiros Negros que Mu teleportou 
              também e que, usando uma ilusão, fez com que os Cavaleiros de Prata achassem que eram os de Bronze.
              Mu fala para Kiki que está na hora de irem embora, pois os Cavaleiros de Bronze tem que aprender vencer sem ajuda. 
              Com a demora de Misty, Babel de Centauro volta e descobre o corpo de seu colega. Ele então encontra Hyoga, que tira 
              sarro do fato de Babel não ter percebido a ilusão de Mu.
              Irritado, Babel ataca Hyoga, que consegue revidar e derrota o Cavaleiro de Prata. Mouses, Asterion e Marin também 
              voltam para a praia. Percebendo a traição de Marin, os dois Cavaleiros de Pata lutam com a Amazona. Eles prendem 
              Marin e a amarram de ponta cabeça em um mastro, fixado no no mar.
              </p>

              <p className="text-2xl mt-4"> 
              Capítulo 23: "Seiya, o ataque enfurecido!"
              </p>
              <p>
              "Seiya, Ikari no Atakku!"
              </p>
              <p className="mt-2">   
              Lançamento em tankobon no Japão: 10 de setembro de 1987; no Brasil: junho de 2012 (Editora JBC)           
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/23.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Asterion e Mouses desconfiam que Marin seja irmã de Seiya, pelo fato dela ter ido a Grécia só para reencontrar o 
              irmão. Seiya percebendo o cosmo fraco de Marin, volta para trás e a encontra prestes a morrer. Ele tenta salvá-la, 
              mas Mouses de Baleia o impede, ajudado por Asterion de Cães de Caça que é capaz de ler mentes. Em um dos seus golpes, 
              Mouses fala que Seiya deve morrer para viver junto com sua irmã Marin no outro mundo.
              Descobrindo que ela é sua irmã, Seiya se enfurece e consegue desviar do que seria o golpe final de Mouses, para em 
              seguida derrotar o Cavaleiro de Prata com o Turbilhão de Pegaso. Após isso, Asterion consegue derrubar Seiya, mas 
              Marin escapa. Asterion tenta ler a mente dela para derrotá-la, mas ela apaga sua mente e consegue achar uma brecha 
              no golpe de Asterion, o derrotando, porém ela o deixa vivo para ele ir ao Santuário avisar que os Cavaleiros de 
              Bronze estão dispostos a lutar.
              </p>
              
              <p className="text-2xl mt-4"> 
              Capítulo 24: "Lutem! Em prol de Atena"
              </p>
              <p>
              "Tatakae! Atena no Moto de"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 10 de setembro de 1987; no Brasil: junho de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/24.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Os quatro Cavaleiros de Bronze se reunem na praia. Seiya revela que são irmãos e quem é o pai deles. Hyoga também 
              revela que já sabia disso. Eles voltam com a Armadura de Ouro para o Coliseu da Fundação, que está todo destruído. 
              Lá dentro está Saori Kido com seu Cetro.
              Seiya diz que já sabe da verdade, então Saori diz que está na hora de saber o resto: ela é Atena. Quando criança, 
              o cavaleiro Aiolos de Sagitário, ferido, encontra Mitsumasa Kido nas ruínas gregas e deixa ela e a Armadura de 
              Ouro com ele. Os Cavaleiros de Bronze falam que mesmo sabendo que ela é Atena, não querem lutar ao lado dela e 
              vão embora. Porém, ao saírem do Coliseu, vários corvos atacam e levam Saori embora. Seiya vai atrás e alcança 
              ela numa montanha fora da cidade, onde ela está sendo capturada por Jamian de Corvo.
              Seiya resgata Saori, mas a amazona Shina de Cobra aparece pronta para lutar. Vendo que a única chance é pular pelo 
              precipício que está ao seu lado, Seiya salta levando Saori em seus braços, desmaiando com a queda. Jamian desce e 
              tenta enfrentar Saori, que mostra seu cosmo poderosíssimo, impressionando Shina e outros três Cavaleiros de Prata 
              que estão por perto. Ikki chega e derrota Jamian de Corvo.
              Os outros Cavaleiros de Prata se preparam para lutar com Ikki. O primeiro, Capella de Auriga, acaba derrotado 
              facilmente. Em seguida é a vez de Dante de Cérbero, que também é derrotado por Fênix.
              </p>

            </div>
          )}
          {selectedSection === 'Volume 7 - Colisão Violenta! A Armadura de Ouro' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              Capítulo 25: "Por um futuro magnífico"
              </p>
              <p>
              "Ooinaru Mirai no Tameni"
              </p>
              <p className="mt-2">  
              Lançamento em tankobon no Japão: 10 de novembro de 1987; no Brasil: agosto de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/25.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              O primeiro Cavaleiro de Prata, Capela de Auriga, mostra estar vivo e volta a luta. Ele ataca Ikki com seu 
              disco, mas Ikki revida com o Golpe Fantasma de Fênix. Capella então sofre com a ilusão e, quando desperta, 
              é derrotado pelo próprio disco que voltou e ele não conseguiu segurar a tempo.
              Ikki é atacado pelas costas por Dante de Cérbero, que não foi derrotado também, mas Shun, usando as Correntes 
              de Andrômeda, salva seu irmão. Hyoga e Shiryu também aparecem, indo socorrer Saori e Seiya. Shun então derrota 
              Dante, só restando o último Cavaleiro de Prata. Ikki vai embora e Hyoga o avisa para ir no Vulcão da Ilha do 
              Canhão, pois só o calor de lá pode descongelar o braço de Ikki, afetado pela luta com Hyoga.
              O último cavaleiro é Algol de Perseu, que, utilizando o seu escudo, tranforma Shun e Hyoga em pedra, como a 
              Medusa da mitologia. Shiryu vendo que só ele pode salvar Atena e seus amigos, luta com Algol, chegando ao 
              ponto de colocar uma venda em seus olhos, porém, mesmo assim, o golpe de Algol faz com que o braço esquerdo 
              de Shiryu vire pedra. Tendo só uma alternativa, Shiryu fura seus olhos e derrota Algol, salvando seus amigos.
              </p>

              <p className="text-2xl mt-4"> 
              Capítulo 26: "O desafio de Aiolia de Leão"
              </p>
              <p>
              "Leo Aioria no Chosen"
              </p>
              <p className="mt-2"> 
              Lançamento em tankobon no Japão: 10 de novembro de 1987; no Brasil: agosto de 2012 (Editora JBC)             
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/26.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              O Grande Mestre reune, após anos, dois Cavaleiros de Ouro em uma mesma sala. Milo de Escorpião e Aiolia de Leão 
              (que não utiliza sua armadura, fato explicado no Episódio G). O Grande Mestre conta sobre as vitórias que os 
              Cavaleiros de Bronze estão tendo sobre o Santuário e sobre a falsa declaração de Saori Kido, que diz ser Atena. 
              Ele pede que Aiolia vá ao Japão eliminar os Cavaleiros e resgatar a Armadura de Sagitário, que ele afirma ser a 
              verdadeira.
              No Japão, Seiya está internado no Hospital, se recuperando. Mino e Shun o fazem uma visita e Shun comenta que 
              Hyoga e Shiryu foram embora do Japão. O Cavaleiro de Andrômeda diz que talvez vá embora também. Seiya fala que 
              irá procurar sua irmã pelo mundo. No quarto de Seiya está guardada a Armadura de Sagitário, apesar de que Seiya 
              quer ela longe dele. De noite, Shina de Cobra aparece e ataca Seiya, dizendo que como Seiya viu seu rosto, ele 
              tem que morrer.
              Aiolia chega até o hospital e tira Seiya e Shina a força para fora. Shina fala para Seiya fugir, mas o poder de 
              Aiolia é muito grande, e Leão diz para Seiya entregar seus amigos e a Armadura de Ouro. Seiya não concorda, o que 
              faz Aiolia atacar com o Relâmpago de Plasma, que acaba acertando Shina, que pula na frente de Seiya para protegê-lo. 
              Ela revela que já que ele viu seu rosto, ela tem que amá-lo ou matá-lo, mas ela optou por amá-lo. Para salvar a 
              Amazona a tempo, Aiolia diz que vai levá-la ao Santuário para ela se recuperar.
              Porém três Cavaleiros de Prata (Algethi de Hércules, Dio de Mosca e Sírius de Cão maior) falam que estão seguindo 
              Aiolia a mando do Grande Mestre e que eles vão eliminar Seiya, o atacando várias vezes. Na hora de dar o golpe 
              fatal, Seiya é protegido pela Armadura de Sagitário e vestindo ela, ele derrota os três Cavaleiros de Prata.
              </p>
              
              <p className="text-2xl mt-4">
              Capítulo 27: "Colisão violenta! A Armadura de Ouro" 
              </p>
              <p>"Gekitotsu! Gorudo Kurosu"
              </p>
              <p className="mt-2"> Lançamento em tankobon no Japão: 10 de novembro de 1987; no Brasil: agosto de 2012 (Editora JBC) 
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/27.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              Vendo que Seiya agora está em pé de igualdade com ele, Aiolia deixa Shina no chão e se prepara 
              para lutar com o Pégaso, que, mesmo com a armadura, não consegue suportar os golpes de Leão. Seiya indaga o porque 
              de Aiolia servir o Grande Mestre e Leão diz que é por causa dele defender a Justiça e o Amor. Quando ele resolver 
              dar o golpe final em Seiya, alguém aparece.
              Enquanto isso, na Grécia, o Grande Mestre, em um de seus momentos de "dupla personalidade", conversa consigo mesmo 
              comentando sobre ele enganar o Santuário por 13 anos. Ele acaba sendo visto por um serviçal e, por causa dele saber 
              a sua verdadeira identidade, ele o mata.
              Saori Kido chega para impedir Aiolia. Vendo o cosmo dela, o Leão percebe que ela só pode ser Atena. Saori conta que, 
              quando bebê, o Grande Mestre tentou matá-la, mas Aiolos o salvou e quase morreu ao fugir do Santuário, então ele 
              entregou ela e a Armadura de Ouro para Mitsumasa Kido, que mudou a forma da Armadura de Ouro e só revelou para ela 
              sua história no seu leito de morte. O torneio serviu para revelar para o Grande Mestre onde a Armadura de Ouro estava, 
              só para ele sair da sombra e declarar guerra. Duvidando da verdade, Aiolia diz que se ela for Atena, ela aguentará 
              o golpe dele.
              Aiolia ataca e Seiya segura o golpe. Por trás de Seiya surge a silhueta de Aiolos, que confirma a história. Seiya 
              consegue repelir o golpe de Aiolia, que não consegue se defender. Derrotado, Aiolia perde perdão a Atena e vai 
              embora com Shina para o Santuário, onde ele cobra a verdade do Grande Mestre, que diz que Aiolia descobriu a sua 
              história e deve morrer. Com sua cor de cabelo mudada repentinamente do loiro para o moreno, o Grande Mestre começa 
              lutar com Aiolia, mas a luta é interrompida por Shaka de Virgem.
              </p>

            </div>
          )}
          {selectedSection === 'Volume 8 - Santuário! As Doze Casas' && (
            <div>
              
              <p className="text-2xl mt-4"> Capítulo 28: "Hora da batalha"
              </p>
              <p>"Kessen no Toki"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 8 de janeiro de 1988; no Brasil: setembro de 2012 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/28.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Shaka e Aiolia começam a lutar, iniciando uma Batalha de Mil Dias. Nos Cinco Picos, Shiryu 
                conversa com o Mestre Ancião, quando o Cavaleiro de Ouro Máscara da Morte de Câncer aparece a mando do Santuário 
                para eliminar o Mestre Ancião.
              Shiryu veste a Armadura do Dragão para derrotar o Cavaleiro de Ouro. Máscara da Morte diz que seu objetivo é 
              derrotar o Mestre Ancião, que é o Cavaleiro de Ouro de Libra. Máscara da Morte se prepara para usar seu golpe 
              Ondas do Inferno, mas Mu aparece, revelando ser o Cavaleiro de Ouro de Áries. Falando que é suicídio lutar 
              contra dois Cavaleiros de Ouro, Máscara da Morte vai embora dizendo que espera Shiryu no Santuário.
              Na Sibéria, Hyoga vai ao fundo do mar visitar o túmulo de sua mãe, porém seu mestre afunda o navio onde ela 
              está para Hyoga perder o seu ponto fraco e deixa a mensagem "Santuário" escrita no gelo.
              No Japão, Seiya se despede de Minu para ir ao Santuário junto com Saori, mas eles se supreendem ao ver Hyoga 
              e Shiryu, que também querem enfrentar o Santuário. Então eles esperam Shun, que está sendo barrado por sua 
              amiga de treino, e paixão, June de Camaleão, que pede para Shun não enfrentar o Grande Mestre.
              </p>

              <p className="text-2xl mt-4"> Capítulo 29: "Santuário! As Doze Casas"
              </p>
              <p>"Sankuchuari! Juni no Kyuden"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 8 de janeiro de 1988; no Brasil: setembro de 2012 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/29.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Saori, Tatsumi, Seiya, Shiryu, Hyoga e Shun chegam no Santuário. Eles são recebidos por um 
                sacerdote que os leva até a Casa de Áries e diz para eles que há Doze Casas do qual cada uma é guardada por 
                um Cavaleiro de Ouro. Além disso, para chegar até o Grande Mestre, eles precisam passar por todas.
              O sacerdote revela ser Tremy de Flecha (Sagita) e os ataca com flechas. As flechas eram na verdade uma ilusão 
              e Seiya o derrota em seguida, só que uma das flechas era verdadeira, uma flecha de ouro que atingiu o peito de 
              Saori Kido. A partir de então, o Relógio Zodiacal se acendeu e eles têm apenas doze horas para chegar até o 
              Grande Mestre, o único capaz de retirar a flecha. Os cavaleiros vão correndo até a primeira casa, a Casa de 
              Áries, onde Mu concerta suas armaduras e conta sobre o Sétimo Sentido.
              </p>
              
              <p className="text-2xl mt-4">Capítulo 30: "Batalha na Casa de Touro" 
              </p>
              <p>"Kingyukyu no Batoru"
              </p>
              <p className="mt-2"> Lançamento em tankobon no Japão: 8 de janeiro de 1988; no Brasil: setembro de 2012 (Editora JBC) 
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/30.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Com uma hora já passada, eles chegam até a Casa de Touro, onde Aldebaran de Touro deixa Shiryu, 
                Shun e Hyoga desacordados. Vendo a persistência de Seiya, Aldebaran diz que permite que Seiya atravesse a sua 
                casa caso ele quebre o chifre da Armadura de Touro.
              Então o Pégaso bloqueia o golpe de Aldebaran, que, enquanto se recupera do impacto do próprio golpe, é atacado 
              por trás por Seiya. O Pégaso então quebra seu chifre, conseguindo o direito de atravessar a sua casa.
              </p>

              <p className="text-2xl mt-4">Capítulo 31: "O Labirinto de Gêmeos" 
              </p>
              <p>"Gemini no Meikyu"
              </p>
              <p className="mt-2"> Lançamento em tankobon no Japão: 8 de janeiro de 1988; no Brasil: setembro de 2012 (Editora JBC)             
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/31.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Os cavaleiros atravessam a Casa de Gêmeos, mas ao sair eles percebem que voltaram para a 
                entrada da casa. Eles tentam de novo e voltam à entrada novamente, só que dessa vez aparecem duas Casas de 
                Gêmeos. Eles resolvem se separar: Hyoga e Shun vão para a casa da esquerda e Seiya com Shiryu vão na casa 
                da direita. Mu visita Aldebaran na casa de Touro e os dois conversam sobre o objetivo dos Cavaleiros de 
                Bronze e sobre o misterioso Cavaleiro de Gêmeos. Hyoga e Shun encontram o Cavaleiro de Gêmeos, que revida 
                todos os golpes, conseguindo nocautear Hyoga. Na outra casa, Seiya e Shiryu também se deparam com Gêmeos, 
                mas Shiryu não consegue sentir a presença dele e percebe que na verdade é uma ilusão. Puxando Seiya, ele 
                vai de encontro com o cavaleiro e consegue sair da casa, desfazendo a ilusão por de trás deles. O Grande 
                Mestre não gosta de Pégaso e Dragão terem atravessado, o deixando determinado a derrotar o Cisne e o Andrômeda. 
                Na outra casa, a ilusão continua e Shun vê que sua corrente também não sente nenhuma presença de inimigo, 
                então Shun protege ele e Hyoga com a Nebulosa de Andrômeda.
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 9 - Por Nossa Deusa' && (
            <div>
              
              <p className="text-2xl mt-4">Capítulo 32: "A ilusão de Gêmeos 
              </p>
              <p>"Gemini no Gen'ei"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de março de 1988; no Brasil: outubro de 2012 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/32.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Gêmeos consegue atravessar a Nebulosa de Andrômeda, fazendo Shun perceber que ele é uma 
                ilusão feita por alguém longe. O Cavaleiro de Ouro usa o golpe Outra Dimensão, Shun usa as suas Correntes 
                para se manter na Casa de Gêmeos, mas Hyoga, indefeso, é sugado pela Dimensão paralela criada por Gêmeos, 
                que usa o golpe novamente e desta vez destrói as Correntes de Andrômeda, só que bem na hora, um cosmo atrapalha 
                a concentração do Grande Mestre, desfazendo a ilusão. Irritado, o Grande Mestre procura o dono desse cosmo. 
                Ele descobre que é de Ikki, que está na Ilha do Canhão, recuperando o seu braço congelado. Ainda na casa de 
                Gêmeos, Shun reluta sair sem Hyoga, então ele acaba preso de novo pela ilusão do Grande Mestre. O Cavaleiro 
                de Gêmeos usa novamente o golpe Outra Dimensão, mas Shun se protege com a sua corrente e usa a Onda Relâmpago, 
                golpe que lança a corrente através do infinito até ela achar o inimigo, e a corrente consegue atingir o Grande 
                Mestre na sua sala, desfazendo novamente a ilusão. O Grande Mestre resolve se render por enquanto. Hyoga cai 
                na Casa de Libra, onde ele encontra o seu mestre Camus de Aquário que, para protegê-lo, resolve enfrentá-lo, 
                Camus revela que foi ele que afundou o navio da mãe de Hyoga, com raiva, Hyoga ataca com o Pó de Diamante, 
                mas o seu mestre usa a Execução Aurora, congelando Hyoga dentro de um esquife de gelo que ficará eternamente 
                na casa de Libra.
              </p>

              <p className="text-2xl mt-4">Capítulo 33: "Combate mortal na Casa de Câncer" 
              </p>
              <p>"Kyokaikyu no Shito"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de março de 1988; no Brasil: outubro de 2012 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/33.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Shiryu e Seiya chegam na casa de Câncer onde há os rostos das pessoas mortas por Máscara de 
                Morte, que já está pronto para lutar. Shiryu pede para Seiya seguir em frente, pois ele quer terminar a luta 
                que iniciou na China. O Cavaleiro de Ouro usa o golpe Ondas do Inferno, que manda Shiryu para a Colina de 
                Yomotsu, o portal entre a vida e a morte. Lá, o espírito de Saori aparece e ajuda Shiryu a voltar a vida. 
                Inconformado, Máscara da Morte usa de novo o Ondas do Inferno. Aos pés da cachoeira de Rozan, Shunrei começa 
                rezar por Shiryu e o Cavaleiro de Câncer sente as orações, com medo de Shiryu ressuscitar de novo, ele vai 
                também para o Yomotsu para enviar o Dragão ao mundo dos mortos pessoalmente. Ele prende Shiryu e ao chegarem 
                perto do topo da colina, as orações se tornam mais fortes. Irritado, o Cavaleiro de Câncer usa seu cosmo e 
                derruba Shunrei na Cachoeira. Enfurecido, Shiryu se liberta e Câncer o ataca violentamente, conseguindo empurrar 
                Shiryu pelo buraco, porém o Dragão consegue se segurar na beirada. O Cavaleiro de Ouro vai chutar a mão de 
                Shiryu para ele cair, mas as suas vítimas, que não conseguiram descansar em paz, pulam em cima dele. Sem piedade, 
                Máscara da Morte ataca os corpos e os joga pelo portal. Shiryu fica indignado com a crueldade do cavaleiro e se 
                pergunta como ele consegue servir a justiça. Então Máscara da Morte vai pisar na mão de Dragão para ele cair, 
                só que Shiryu consegue golpear a perna do Cavaleiro de Ouro que ficou desprotegida da armadura. O cavaleiro de 
                bronze se levanta e golpeia o braço de Máscara da Morte, que também ficou desprotegido. A armadura de Câncer 
                sai do corpo do Cavaleiro e Shiryu fala que ela não quer ajudar alguém tão mau. Não querendo ficar em vantagem, 
                o Dragão tira a sua armadura para lutar de igual para igual com Máscara da Morte. Atingindo o sétimo sentido 
                por um instante, Shiryu ataca com o Cólera do Dragão, jogando o Cavaleiro de Ouro pelo portal. Na casa de Câncer, 
                Shun chega e reanima Shiryu. Mestre Ancião começa a conversar com eles por telepatia e diz que ele salvou Shunrei 
                e ele percebe que Shiryu recuperou a visão.
              </p>
              
              <p className="text-2xl mt-4">Capítulo 34: "Por nossa deusa" 
              </p>
              <p>"Waga Megami no Tameni"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de março de 1988; no Brasil: outubro de 2012 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/34.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Seiya esta na Casa de Leão, onde ele encontra um Aiolia totalmente transformado. O Leão ataca 
                Seiya impiedosamente, mas Pégaso consegue atingir um chute no Cavaleiro de Ouro. Enquanto isso, Shina se recuperou 
                e Cássios conta para ela que os Cavaleiros de Bronze já estão na Casa de Leão e que Aiolia foi golpeado durante a 
                luta com Shaka pelo Grande Mestre, com o Satão Imperial, golpe que hipnotiza a mente do adversário, que só melhora 
                quando ele mata alguém. Shina fica desesperada e se levanta para salvar Seiya, mas Cássios a golpeia e decide ir 
                em seu lugar, pois ele não quer que ela se sacrifique por Pégaso. Aiolia continua lutando contra Seiya. Shun e 
                Shiryu estão chegando perto da entrada da casa, só que Cássios chega também e fala para os dois não entrarem ou 
                senão irão ver o corpo de Seiya derrotado por Aiolia. Enquanto isso, Pégaso está prestes a ser derrotado por Leão, 
                mas Cássios entra na casa e se mata na frente de Aiolia para ele recobrar a consciência. A personalidade de Leão 
                não muda, então Seiya eleva seu 7º sentido e consegue atingir Aiolia com os Meteoros e ele finalmente recobra a consciência.
              </p>

            </div>
          )}
          {selectedSection === 'Volume 10 - Shaka! O Homem Mais Próximo de Deus' && (
            <div>
              
              <p className="text-2xl mt-4">Capítulo 35: "Shaka! O homem mais próximo de Deus" 
              </p>
              <p>"Shaka! Kami ni Chikai Otoko"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de maio de 1988; no Brasil: novembro de 2012 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/35.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Aiolia usa sua capa para cobrir o corpo de Cássios e ele alerta Seiya, Shiryu e Shun para 
                tomarem cuidado com Shaka e não deixá-lo abrir seus olhos. Minutos depois na casa de Virgem, Shaka imobiliza 
                os três Cavaleiros de Bronze e está preste a matar Shun, mas Ikki aparece e impede o Cavaleiro de Ouro. Shaka 
                faz aparecer um lago de sangue na casa de Virgem e Fênix começa a afundar. Ele diz que só salvará Fênix se ele 
                venerá-lo como um Deus, mas Ikki expande seu cosmo que faz o sangue evaporar. Shaka faz Ikki se lembrar do 
                encontro que tiveram na Ilha da Rainha da Morte e o cavaleiro de Ouro lança o Circulo das Seis Existências. 
                Virgem acha que derrotou Fênix, que se levanta e ataca com o Golpe Fantasma de Fênix. O golpa se volta contra 
                ele, que se quando criança carregando Shun pelo mundo, após a morte de sua mãe. Shaka destrói a armadura de 
                Ikki e se prepara para lançar novamente o Circulo das Seis Existências, mas Fênix foge. Entretanto, Ikki percebe 
                que não saiu do mesmo lugar, como se fosse "um grão de areia na mão de Buda". Shaka ataca de novo, mas a armadura 
                de Fênix se restaura e vendo que Ikki não será derrotado tão facilmente, o Cavaleiro de Ouro ataca com o golpe 
                Rendição Divina, abrindo os seus olgos e soltando um cosmo poderosíssimo. O Cavaleiro de Ouro começa a retirar 
                os cinco sentidos de Ikki, um de cada vez, para em seguida se preparar para eliminar o Cavaleiro de Bronze de 
                uma vez por todas, mas Shun aparece e utiliza sua corrente para impedir o ataque de Shaka. Através do seu cosmo, 
                Ikki pede para Shun deixá-lo derrotar Shaka, que ataca o 6º sentido de Fênix. Agora só restou o 7º sentido de 
                Ikki e ele o expande ao máximo. Fênix se teleporta e aparece atrás de Shaka, o prendendo-o, aumentando cada vez 
                mais seu cosmo. Os dois são transportados para uma outra dimensão, só restando a armadura de Virgem na sexta casa.
              </p>

              <p className="text-2xl mt-4"> Capítulo 36: "O segredo da Armadura de Libra"
              </p>
              <p>"Raibura no Kurosu no Himitsu"
              </p>
              <p className="mt-2"> Lançamento em tankobon no Japão: 10 de maio de 1988; no Brasil: novembro de 2012 (Editora JBC)             
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/36.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Seiya, Shiryu e Shun chegam na casa de Libra e lá eles encontram o esquife de Gelo de Hyoga. 
                Seiya solta seu Meteoros de Pégaso, mas o esquife permanece intacto. De repente aparece uma urna de armadura que 
                se abre e revela ser a Armadura de Libra. Shiryu percebe que seu mestre enviou a Armadura para ele e conta que a 
                Armadura têm seis armas aos pares: a Espada, a Lança, o Escudo, a Barra Dupla, a Barra Tripla e a Tonfa. Ele conta 
                também a história da Armadura, que Atena não permite que os Cavaleiros possam usar armas, as únicas armas são as de 
                Libra. O Cavaleiro de Libra deve ser um Cavaleiro capaz de avaliar e decidir quem pode usar suas armas. Shiryu escolhe 
                a Espada para quebrar o esquife, pois para ele, ela é a única capaz de destruir o gelo sem Hyoga ser atingido pelo 
                impacto. O esquife é destruído e Shun fica para trás para reanimar Hyoga, que está quase morrendo. Seiya e Shiryu 
                seguem em frente, mas quando chegam perto da casa de Escorpião, eles percebem que talvez Shun se sacrifique para 
                salvar Hyoga, então eles resolvem voltar para trás, mas o Cavaleiro Milo de Escorpião aparece e impede os dois de 
                retornarem. Ele aplica o golpe Agulha Escarlate nos dois. Hyoga chega na casa com Shun no seu colo, que desmaiou 
                ao enviar o seu cosmo para o seu amigo.
              </p>
              
              <p className="text-2xl mt-4"> Capítulo 37: "Escorpião vs Cisne"
              </p>
              <p>"Sasori Tai Hakucho"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de maio de 1988; no Brasil: novembro de 2012 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/37.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Hyoga entrega Shun para Seiya e Shiryu, e fala para eles seguirem em frente. Ao pé das doze 
                casas, Tatsumi é atacado por alguns soldados do Santuário que querem matar Saori, mas Jabu e os outros 4 Cavaleiros 
                de Bronze aparecem e derrotam os soldados. Milo e Hyoga começam a se enfrentar, um ataca com o Agulha Escarlate e o 
                outro com o Pó de Diamante. Milo não sente o golpe, mas Hyoga é atingido com a primeira das treze picadas do Escorpião. 
                Hyoga continua atacando, mas ele recebe mais picadas. Quando Milo se prepara para disparar a última, a Antares, que 
                representa a estrela vermelha no centro da Constelação de Escorpião, ele percebe que suas pernas foram congeladas no 
                chão pelos golpes de Hyoga, que se aproveita da situação e ataca com o Kholodnyi Smerch.
              </p>

            </div>
          )}
          {selectedSection === 'Volume 11 - Jovens! Confiamos Athena a Vocês' && (
            <div>
              
              <p className="text-2xl mt-4">Capítulo 38: "Avante até a morte!" 
              </p>
              <p>"Shisutomo Susumu!"
              </p>
              <p className="mt-2"> Lançamento em tankobon no Japão: 10 de maio de 1988; no Brasil: dezembro de 2012 (Editora JBC) 
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/38.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Milo continua em pé e Hyoga começa sofrer hemorragia por causa das picadas do adversário. 
                Escorpião fala que Camus queria somente poupá-lo quando o congelou, mas Hyoga não concorda e está determinado 
                a vencer Milo, que por telepatia fala para Camus que vai derrotar Hyoga. O Cavaleiro de Bronze acredita que só 
                será um verdadeiro cavaleiro se ele lutar até o final, mesmo que morra. Então Hyoga ataca com o Pó de Diamante e 
                Milo com a Antares. Cisne é derrotado, mas o Cavaleiro de Ouro percebe que ele teve sua armadura congelada e que 
                sem ela, ele teria sido derrotado antes de atacar Hyoga. Vendo que era para ele ter perdido, Milo pressiona o ponto 
                vital de Hyoga, que acorda e sua hemorragia para. De volta aos pés das Doze Casas, Geki pega para Tatsumi o Cetro 
                de Saori e a Armadura de Sagitário que estavam no avião. A Armadura se teleporta para a Casa de Sagitário e no 
                Santuário todos sentem o cosmo das Doze Armaduras de Ouro ressoar por se juntarem após 13 anos. Seiya e Shiryu, 
                que estão levando Shun, chegam à Casa de Sagitário, onde a armadura dispara sua flecha contra Seiya.
              </p>

              <p className="text-2xl mt-4">Capítulo 39: "Jovens! Confiamos Atena a vocês" 
              </p>
              <p>"Shonen Tachi yo! Atena wo Takusu!"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de maio de 1988; no Brasil: dezembro de 2012 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/39.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">A flecha atingiu a parede. Shun acorda e, junto com Seiya e Shiryu, acaba vendo a parede revelar 
                uma mensagem de Aiolos. Hyoga chega e juntos eles lêem a mensagem que diz "Jovens guerreiros, eu lhes confio Atena!". 
                Os quatro se emocionam e percebem que este é o testamento de Aiolos, então os quatro juram que pelo menos um terá que 
                chegar ao Mestre. Eles saem da casa e veem que o Sol já se pôs. Eles passam pela Casa de Capricórnio que estava vazia, 
                mas, ao saírem, Shiryu percebe um cosmo e fala para seus companheiros pularem, bem na hora que uma fenda é aberta da 
                terra. Shiryu ficou para trás e o cavaleiro Shura de Capricórnio aparece. Ele fala que eliminou Aiolos há 13 anos e 
                Shiryu diz que vai se vingar.
              </p>
              
              <p className="text-2xl mt-4">Capítulo 40: "Shura! O homem que possui a Excalibur!" 
              </p>
              <p>"Shura! Ekusukariba wo Motsu Otoko!"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de maio de 1988; no Brasil: dezembro de 2012 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/40.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Shura com o seu golpe Excalibur acerta a perna de Shiryu. Ao tentar acertar um segundo golpe, 
                Shiryu revida com o Cólera do Dragão, mas Shura aproveita e usa o golpe Pedras Saltitantes, que joga Shiryu longe. 
                Shura continua a usar o Excalibur, que corta até o indestrutível escudo do Dragão e o resto da armadura. O Cavaleiro 
                de Capricórnio vai dar um último golpe, mas Shiryu consegue parar as mãos de Shura e expande seu cosmo, fazendo 
                aparecer o Dragão de suas costas. Ele usa o Cólera do Dragão, mas Shura consegue aplicar o Excalibur no coração do 
                Cavaleiro de Bronze. Vendo que só resta uma alternativa, Shiryu usa o Último Dragão, que lança ele e Shura ao espaço. 
                Capricórnio, vendo a determinação de Shiryu, percebe que ele estava dizendo a verdade e se arrepende antes de morrer. 
                Seiya, Shun e Hyoga param ao ver uma estrela cadente subindo da Casa de Capricórnio, mas Hyoga fala que eles não devem 
                parar, pois eles estão perto da Casa de Aquário onde Camus já está na porta esperando-os. Hyoga diz para Seiya e Shun 
                seguirem em frente, pois ele que vai derrotar seu mestre.
              </p>

              <p className="text-2xl mt-4">Capítulo 41: "Frio extremo! O Zero Absoluto!" 
              </p>
              <p>"Kyukyoku no Toki! Zettai Reido!"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de maio de 1988; no Brasil: dezembro de 2012 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/41.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Hyoga usa o Pó de Diamante, mas Camus usa seu frio que é maior para bloquear o ataque. Hyoga lembra 
                quando Camus lhe ensinou sobre o Zero Absoluto. Camus usa a Execução Aurora, mas Hyoga se levanta e usa o Kholodnyi 
                Smerch, mas é inútil. Aquário congela Hyoga mais uma vez e faz o Esquife de Gelo, mas Hyoga se livra e os dois lançam 
                uma massa de ar gelada que fica bloqueada entre eles. Hyoga desmaia e, antes que a massa de ar o atinja, ele sente o 
                cosmo dos seus amigos, de Saori e de sua falecida mãe. Então Hyoga desperta e consegue mandar a massa de ar frio de 
                volta para Camus, que tem a sua armadura congelada. Vendo que Hyoga não tem um golpe mais forte, Camus se prepara para 
                usar a Execução Aurora, mas Hyoga também se posiciona para usar o mesmo ataque. Os dois lançam o golpe, acabando ambos 
                congelados e derrotados. Seiya e Shun chegam às portas da Casa de Peixes, onde Afrodite os espera.
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 12 - Combate Mortal na Sala do Grande Mestre!' && (
            <div>
              
              <p className="text-2xl mt-4">Capítulo 42: "O cortejo fúnebre das rosas!" 
              </p>
              <p>"Bara no Soretsu"
              </p>
              <p className="mt-2"> Lançamento em tankobon no Japão: 9 de setembro de 1988; no Brasil: janeiro de 2013 (Editora JBC) 
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/42.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Shun fala para Seiya ir direto para Sala do Grande Mestre, pois ele quer vingar seu mestre que 
                foi morto por Afrodite. Ao chegar à escadaria que leva à Sala do Grande Mestre, Seiya percebe que ela está coberta 
                com rosas e espinhos. Essas rosas são chamadas de Rosas Diabólicas, já que aos poucos tiram os cinco sentidos da 
                pessoa que inala o seu cheiro. Seiya tenta subir a escada, mas acaba sendo derrotado pelo cheiro das rosas. Shun 
                fala para Afrodite que irá se vingar pela morte de seu mestre e se lembra de June lhe contando o que aconteceu na 
                Ilha de Andrômeda. Shun usa a Corrente de Andrômeda, mas Afrodite consegue defender e usa o golpe Rosas Diabólicas 
                Reais. Shun se levanta e quando Afrodite usa o golpe pela segunda vez, ele usa a Defesa Circular, que se volta contra 
                Peixes. O Cavaleiro de Ouro cria um turbilhão com as pétalas das rosas e se esconde no meio delas, mas, usando a 
                Onda Relâmpago, Andrômeda consegue achar e acertar o elmo do cavaleiro de Peixes. Shun se lembra de momentos de seu 
                treinamento e do dia que passou pela prova do sacrifício e ganhou a Armadura de Andrômeda. O Cavaleiro de Bronze usa 
                a Onda Relâmpago mais uma vez, mas a corrente é bloqueada por uma rosa negra. Afrodite então usa as Rosas Piranhas 
                que destrói tudo o que toca, destruindo a armadura e a corrente de Andrômeda. Shun relembra do momento quando estava 
                indo embora da Ilha de Andrômeda e se despediu de seu mestre, mostrando a força de seu cosmo escondido. Shun então 
                usa a Tempestade Nebulosa, que prende Afrodite em um turbilhão. Shun fala que se quiser, ele pode aumentar a força do 
                turbilhão que pode matá-lo, mas Afrodite mostra a última rosa, a Rosa Sangrenta, que quando atinge o adversário ela 
                suga todo o sangue até ele morrer. O Cavaleiro de Peixes revela que tanto ele quanto Shura e Máscara da Morte sabiam 
                da verdade por de trás do Grande Mestre e então solta a rosa que acerta Shun. Neste momento, o Cavaleiro de Andrômeda 
                aumenta a força do turbilhão e mata Afrodite. Shun, antes de morrer, se lembra de quando era criança e questionou para 
                Ikki o porquê de no mundo haver tantas guerras e sofrimento.
              </p>

              <p className="text-2xl mt-4">Capítulo 43: "Combate mortal na sala do Grande Mestre!" 
              </p>
              <p>"Kyoko no Ma no Shito!"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 9 de setembro de 1988; no Brasil: janeiro de 2013 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/43.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Só resta meia hora para a última chama ser apagada. Seiya se arrasta pela escadaria. Marin aparece 
                e coloca sua máscara para Seiya parar de respirar o cheiro das rosas e ela o carrega levando-o até a Sala do Grande 
                Mestre. Ela cai e Seiya, que já está melhor, devolve a máscara para sua mestra e destrói as pétalas com os Meteoros 
                de Pégaso. Shina aparece e fala que irá cuidar de Marin. Então Seiya segue em frente e chega até o Grande Mestre, que 
                retira o seu elmo e começa a chorar. Ele fala que somente o escudo da Deusa, que está na estátua de Atena, pode salvá-la. 
                Seiya então vai para lá, mas o Grande Mestre começa a passar mal e sua outra personalidade desperta, atacando Seiya. 
                Seiya lança os Meteoros de Pégaso no Grande Mestre, mas ele se defende e veste a Armadura de Gêmeos. O Cavaleiro de 
                Ouro usa o golpe Outra Dimensão, mas seu lado bom desperta e protege Seiya. O Mestre volta a ficar mau e tira os 5 sentidos 
                de Seiya.
              </p>
              
              <p className="text-2xl mt-4">Capítulo 44: "Gêmeos! O homem de duas caras" 
              </p>
              <p>"Gemini! Futatsu no Kao wo Motsu Otoko"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 9 de setembro de 1988; no Brasil: janeiro de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/44.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Por telepatia, Shaka pede para Mu ajudá-lo a voltar da outra dimensão para a casa de Virgem e trazer 
                Ikki junto. A armadura de Fênix se restaura e Ikki segue até a Sala do Grande Mestre, onde Seiya aumenta seu cosmo e 
                derruba Gêmeos. Então Pégaso vê a silhueta da estátua de Atena e segue até lá, mas o Grande Mestre persiste. Seiya usa 
                o Turbilhão de Pégaso, porém quem recebe o impacto do golpe é ele mesmo. Gêmeos se prepara para dar o golpe final, mas 
                o elmo da armadura começa a "chorar", deixando-o surpreso. Ikki passa pela casa de Capricórnio, onde o corpo de Shiryu 
                com a armadura de Capricórnio cai, a armadura sai de Shiryu, que desperta em seguida. Ele diz que Shura lhe passou a 
                armadura para salvá-lo. Ikki diz que tem que seguir em frente. Na casa de Aquário, Hyoga também diz para Ikki continuar 
                e na casa de Peixes, Shun pede perdão para Ikki, que fala que ele é quem deve ser perdoado.
              </p>

            </div>
          )}
          {selectedSection === 'Volume 13 - A Ressurreição de Athena' && (
            <div>
              
              <p className="text-2xl mt-4">Capítulo 45: "Seu nome é Saga!" 
              </p>
              <p>"Sono na wa Saga"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de novembro de 1988; no Brasil: fevereiro de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/45.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Na Sala do Grande Mestre, Fênix chega e impede Gêmeos de dar o golpe final em Pégaso. 
                Ikki usa o Ave Fênix duas vezes, porém na segunda vez não causa efeito. Ambos usam seus golpes psíquicos, 
                o Satã Imperial e o Golpe Diabólico de Fênix, e ambos causam efeitos. Vendo que se continuassem iriam 
                iniciar um combate de mil dias, eles resolvem usar golpes físicos. O Cavaleiro usa o Explosão Galáctica, 
                que derruba Ikki. Por telepatia, os 5 cavaleiros de ouro sobreviventes conversam e Mu conta a verdade: o 
                Mestre é Saga de Gêmeos. Então a voz de Saga ecoa por todo o Santuário, revelando a história. Ele conta 
                para Ikki que era para ele ser o atual Grande Mestre, mas o antigo Grande Mestre escolheu Aiolos de Sagitário. 
                Ele então se vingou matando e tomando lugar do Mestre. Os Cavaleiros de Ouro resolvem derrotar Saga, mas Mu 
                fala que isso é uma provação que os cavaleiros de bronze e Saori têm que passarem. Seiya se levanta e Saga 
                tenta atacá-lo, mas Ikki entra na frente. Gêmeos usa o golpe Explosão Galáctica.
              </p>

              <p className="text-2xl mt-4">Capítulo 46: "A ressurreição de Atena!" 
              </p>
              <p>"Atena Fukkatsu!"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de novembro de 1988; no Brasil: fevereiro de 2013 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/santuario/46.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Seiya continua em pé. Hyoga, Shun e Shiryu emprestam seus cosmos para Seiya, que então golpeia 
                Saga com o Cometa de Pégaso. Quando Saga acorda, ele vai correndo para a Estátua de Atena, mas o conflito de sua 
                mente o atrasa, mesmo assim ele chega até o templo de Atena, onde Seiya tenta alcançar o escudo de pedra, que fica 
                menor e dourado. Então no instante em que a chama de Peixes se apaga, Seiya mira o Escudo para Saori, porém Saga 
                entra na frente e recebe o impacto da luz que chega até a flecha que é destruída. Saga desmaia e seu lado maligno 
                sai de seu corpo e Seiya desmaia. Saori acorda e os Cavaleiros de Ouro a reconhecem como Atena. Então eles e todos 
                os Cavaleiros se ajoelham perante a deusa Atena. Saori se lembra dos cinco Cavaleiros de Bronze e começa a subir 
                as doze casas. No caminho ela encontra Saga, que ataca seu coração para se redimir do mal que causou. Mu chega até 
                lá e diz que talvez Saga fosse o que mais sofreu nessa guerra por causa de sua divisão entre o bem e o mal.
              </p>
              
              <p className="text-2xl mt-4">Natássia do País do Gelo 
              </p>
              <p>"THE CYGNUS STORY: Kori no Kuni no Natasha"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de novembro de 1988; no Brasil: agosto de 2002 
              (Conrad Editora); fevereiro de 2013 (Editora JBC)  
              </p>
              <p className="text-2xl mt-4">Introdução
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/bluewarriors/capa.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/bluewarriors/1.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">A saga dos Guerreiros Azuis (Blue Warriors) é uma história solo do personagem 
              Hyoga de Cisne. É uma história curta, lançada logo após o término da Fase Santuário clássica. 
              Infelizmente nunca ganhou adaptação em anime, embora alguns elementos foram utilizados e aproveitados 
              na Saga de Asgard e no filme A Grande Batalha dos Deuses.
              No mangá brasileira da Conrad, a história está localizada no volume 22. Já no mangá tankobon da 
              JBC, o fã encontra esta história no volume 13 (o mesmo da edição japonesa também).
              </p>
              <p className="mt-2">A saga dos Guerreiros Azuis, conhecidos como Blue Warriors ou Guerreiros do gelo, é 
              uma saga solo de Hyoga de Cisne, existente apenas no mangá de Os Cavaleiros do Zodíaco. É uma saga pequena 
              em relação as demais, não constituindo um aglomerado de adaptação para o anime e sendo apenas publicada no 
              volume 13 do mangá japonês (versão tankohon), e no volume 22 do mangá brasileiro. A história começa após o 
              encerramento da Saga do Santuário. No anime, foi substituída pela Saga de Asgard, havendo algumas semelhanças 
              entre elas. Essa "side story" ainda foi usada como base para o segundo filme de Saint Seiya, "A Grande 
              Batalha dos Deuses" ("Kamigami no atsuki tatakai"). Por esse motivo, Frey e Freya são idênticos a Alexei e 
              Natassia da história dos Blue Warriors. Lembrando que Frey e Freya, assim como quase todos os personagens desse 
              filme, foram desenvolvidos pelo próprio Kurumada.              
              </p>

            </div>
          )}

          {/* Seções de Poseidon */}
          {selectedSection === 'Volume 14 - Coroação!! O Rei dos Mares Poseidon!' && (
            <div>
              
              <p className="text-2xl mt-4">Capítulo 1: "O Templo Submarino" 
              </p>
              <p>"Kaitei Shinden"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de janeiro de 1989; no Brasil: março de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/1.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Saori e Tatsumi estão na festa de aniversário de 16 anos de Julian Solo. Por haver muitas celebridades 
                lá, Tatsumi considera a festa um exagero, porém Saori lembra o mordomo que Julian se tornou o herdeiro da fortuna do 
                pai que era um grande comerciante marítimo. O aniversariante fica feliz, pois ele ouve o comentário de Saori e leva-a 
                na varanda da mansão para terem uma conversa em particular. Julian pede Saori em casamento, pois ele acha que os dois 
                estão predestinados, mas considerando tudo uma piada ela simplesmente nega o pedido retira-se dali. Julian fica 
                inconformado com Saori, porém ele acaba vendo ao longe, na ponta do Cabo Sunion (um rochedo próximo à mansão) uma luz. 
                Enquanto isso, Saori dorme no quarto de hóspedes da mansão e ela é sequestrada por um cavaleiro com uma armadura diferente, 
                mas Aiolia de Leão a salva. Julian segue a luz até o Cabo Sunion, onde ele acha um tridente, então uma jovem vestindo 
                uma armadura aparece e diz que ele é o deus dos mares Poseidon. Surpreso com a notícia, ele permite que ela o leve ao 
                Templo Submarino, que é o Santuário de Poseidon que fica no fundo do mar. Três dias depois, chove sem cessar no mundo 
                inteiro, cidades litorâneas estão sendo inundadas por causa de tsunamis e maremotos. Na mansão Kido, Saori fica preocupada 
                com esses eventos catastróficos e ela quer descobrir a causa de tudo isso, então ela é surpreendida pela jovem que estava 
                no Cabo Sunion, ela se apresenta como Thétis de Sereia e conta que tudo está sendo causado por Poseidon. Ela (junto de alguns 
                soldados marinas) quer levar Saori até o Templo Submarino, porém Seiya aparece e salva a deusa, enquanto Thétis foge. 
                Tatsumi manda Pégaso segui-la, mas ele acaba desmaiando.
              </p>

              <p className="text-2xl mt-4"> Capítulo 2: "A melodia da morte"
              </p>
              <p>"Shi no Merodi"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de janeiro de 1989; no Brasil: março de 2013 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/2.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Seiya é levado de volta para a UTI. da Fundação Graad, onde está hospitalizado também Shun, Shiryu e 
                Hyoga. O médico diz que não há previsão de quando eles sairão do coma. No Templo Submarino, Thetis conta o ocorrido 
                para o General Dragão Marinho. Ela diz que é melhor derrotar Atena o mais depressa possível. O General Sorento de Sirene 
                se oferece para ir até o Japão e eliminá-la. No hospital, Aldebaran de Touro chega para ser o segurança de Saori, já que 
                ela não quer ir até o Santuário enquanto os Cavaleiros de Bronze não se recuperarem. Durante a noite, Sorento de Sirene 
                aparece, tocando sua flauta, então ele corta a cabeça de Aldebaran, que simplesmente desvia do golpe e dispara o Grande 
                Chifre contra o General de Poseidon. Sorento sai ileso do golpe e continua tocando a flauta, afetando os sentidos e o 
                cosmo do Cavaleiro de Ouro. Usando o golpe Sinfonia Final da Morte, Sorento paralisa o corpo de Aldebaran, que fura seus 
                tímpanos para não continuar ouvindo a melodia da flauta de Sirene. O Cavaleiro de Touro diz que está preparado em se 
                sacrificar para salvar os Cavaleiros de Bronze. Sorento então solta o seu último golpe, o Clímax Final da Morte, que 
                explode o corpo de Aldebaran, só restando a Armadura de Ouro de Touro, mas o General de Poseidon fica paralisado com o 
                cosmo do Cavaleiro de Ouro que ainda persiste em proteger os cavaleiros.
              </p>
              
              <p className="text-2xl mt-4">Capítulo 3: "Coroação! O Rei dos Mares Poseidon!" 
              </p>
              <p>"Taikan! Kaio Poseidon!"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de janeiro de 1989; no Brasil: março de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/3.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">No Templo Submarino, Julian Solo é coroado o Imperador dos Oceanos. Ele prevê que, em 30 dias, a Terra 
                estará submersa, mas Thetis diz que é melhor não declarar vitória ainda, pois Atena pode se intrometer nos planos dele. 
                Sorento aparece dizendo que eles não devem se preocupar, pois os Cavaleiros do Zodíaco não vão incomodar mais. Ele 
                apresenta então o elmo do Cavaleiro de Touro que foi derrotado. Ele diz também que diferente dos cavaleiros, ele não 
                pode dizer o mesmo de Atena, então Saori aparece. Todos ficam surpresos, Sorento diz que não teve como impedi-la de 
                segui-lo, pois ele sentiu um medo mortal dela. Saori e Julian ficam surpresos ao verem que o outro é a reencarnação de 
                seu inimigo de eras. Ele ordena para os Marinas os deixarem a sós. Saori pede que ele pare com as chuvas, mas Julian 
                não aceita, pois somente como na história da Arca de Nóe, só com a inundação do mundo é que ele vai eliminar os homens 
                que destroem atualmente o planeta. Julian repete o pedido de casamento para juntos eles dominarem o mundo, mas ela nega 
                novamente, então ele diz que a única opção é ela se sacrificar. Ele mostra para ela que o Templo é sustentado por sete 
                pilares que representam os sete mares e mais um pilar, o Pilar Principal, que é a base de toda a sustentação do mar acima 
                do Templo, para que ele não seja inundado. Então ele prende Saori dentro do Pilar e diz que ela deverá receber toda a 
                água destinada para a inundação da Terra. Em Rozan, Thetis vai falar com o Grande Mestre e declarar Guerra contra o 
                Santuário, pois ela conta que Saori está presa no Pilar Principal e que eles estão preparados caso os Cavaleiros de 
                Ouro queiram enfrentar Poseidon e seu exército. Nesse momento, os Cavaleiros de Bronze aparecem e dizem que eles bastam 
                para derrotar Poseidon e os Generais Marinas. Thetis vai embora e fala que ficará esperando-os, Shiryu lamenta que suas 
                armaduras foram destruídas, mas Kiki aparece com as quatro urnas das armaduras de bronze.
              </p>

              <p className="text-2xl mt-4">Capítulo 4: "Ressurreição! As Novas Armaduras" 
              </p>
              <p>"Fukkatsu! Nyu Kurosu"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de janeiro de 1989; no Brasil: março de 2013 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/4.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Seiya e os outros vestem as armaduras que foram ressuscitadas com o sangue dos Cavaleiros de Ouro. 
                Kiki usa seu faro e segue o cheiro de Thetis, levando os Cavaleiros de Bronze até o Santuário Submarino, onde o General 
                Dragão Marinho repreende Thetis por ter sido seguida. A marina de Sereia conta para os cavaleiros que se eles quiserem 
                salvar Atena, eles deverão destruir primeiro os sete pilares que sustentam o Santuário, porém cada um é protegido por 
                um General Marina. Então os cavaleiros separam-se para poder salvar Saori mais depressa. Seiya derrota alguns Marinas 
                que estão no caminho do Pilar do Pacífico Norte. Ao chegar ao pilar, ele utiliza os Meteoros de Pégaso para derrubá-lo, 
                mas o General Bian de Cavalo Marinho protege o pilar. Vendo que a luta é inevitável, Seiya utiliza seus Meteoros no 
                General, que não sofre dano algum, e revida com o golpe Sopro Divino. Pégaso utiliza mais uma vez seu golpe, que continua 
                sendo inútil e recebe mais uma vez o contra-ataque de Bian. Para encerrar a luta, Cavalo Marinho utiliza a técnica Ventos 
                de Tempestade que lança Seiya para o mar, fazendo-o atravessar o Oceano e chegar até a superfície. Porém Pégaso não se da 
                por vencido, ele volta e utiliza mais uma vez os Meteoros, que dessa vez acertam Bian.
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 15 - Santuário Submarino! Os Sete Pilares' && (
            <div>
              
              <p className="text-2xl mt-4">Capítulo 5: "As Armaduras de Bronze reluzindo douradas!" 
              </p>
              <p>"Kin'iro no Buronzu Kurosu!"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de março de 1989; no Brasil: abril de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/5.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Bian fica surpreso por Seiya o ter acertado. O Cavaleiro de Bronze repete o golpe que mais uma 
                vez surte efeito. A explicação está na armadura de Pégaso, que começa a reluzir dourada, como o sangue dos Cavaleiros 
                de Ouro é que foram utilizadas para ressuscitar as armaduras, elas ficaram mais fortes. Seiya usa mais uma vez os 
                Meteoros e revela que o modo de Bian se defender é igual o de Misty de Lagarto, então não funcionará mais com ele. 
                O General Marina revida com o golpe Sopro Divino, mas Pégaso defende-se falando que um golpe não funciona duas vezes 
                com um cavaleiro. Seiya eleva seu cosmo e sua armadura volta a ficar dourada, ele usa o Cometa de Pégaso, derrotando 
                Bian que antes de morrer, avisa que Seiya não conseguirá derrubar o pilar. O Cavaleiro utiliza o Cometa de Pégaso e 
                depois os Meteoros, e ambos nem arranham o pilar. No Templo de Poseidon, Kiki está inquieto e acaba irritando Thetis 
                que parte para cima do aprendiz de cavaleiro, porém Shina aparece com uma urna de armadura e diz que será adversária 
                da Marina de Sereia. Kiki leva a urna para Seiya, é a Armadura de Libra, e o cavaleiro de Pégaso tem que escolher uma 
                das armas para destruir o pilar. A própria armadura sugere que ele utilize o escudo, então Seiya destrói o Pilar do 
                Pacífico Norte e começa chover no local. O Cavaleiro e Kiki voltam para o Templo onde ele encontra Shina, em seguida 
                ele parte rumo ao Pilar do Atlântico Sul enquanto Kiki leva a armadura para outro cavaleiro. Shun chega até o Pilar 
                do Pacífico Sul e sua corrente reage contra uma silhueta, mas ao ver que é uma mulher, Shun impede o ataque, porém, 
                dos pés da mulher sai seis bestas que o ataca, ele se protege graças às suas correntes.
              </p>

              <p className="text-2xl mt-4">Capítulo 6: "Combate Mortal! O Pilar do Pacífico Sul" 
              </p>
              <p>"Shito! Saosu Pashifikku Pira"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de março de 1989; no Brasil: abril de 2013 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/6.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Io de Scylla apresenta-se para Shun como o protetor do Pilar do Pacífico Sul e conta a história da 
                lenda de Scylla. Ele ataca Shun com a Águia Poderosa, e a defesa de Shun não funciona contra o General. O Marina diz 
                que uma mesma defesa não funciona mais de uma vez contra ele, então ele usa mais golpes contra Andrômeda: Fúria do 
                Lobo, Ferrão de Abelha Rainha, Serpente Assassina, Ataque Vampiro e Urso Infernal. Io decide eliminar Shun com o golpe 
                Ferrão de Abelha Rainha, mas Shun protege-se usando a Teia da Aranha de Andrômeda, uma modificação da Corrente de 
                Andrômeda. Assim, Shun protege-se de cada golpe de Scylla com modificações de sua corrente: Rede de Andrômeda (para a 
                águia), Espiral de Andrômeda (para a cobra), Bumerangue de Andrômeda (para o morcego), Armadilha de Andrômeda (para o 
                lobo) e Grande Captura de Andrômeda (para o urso), esse último, prendendo o General Marina.
              </p>
              
              <p className="text-2xl mt-4">Capítulo 7: "As Correntes Douradas!" 
              </p>
              <p>"Kin'iro no Chen!"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de março de 1989; no Brasil: abril de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/7.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Shun usa a Corrente Nebulosa para derrubar o pilar, mas não surte efeito. Io desprende-se da corrente e 
                ataca Shun com o golpe Tornado Violento. Mesmo machucado, Shun persiste em derrubar o pilar com sua corrente, mesmo com 
                Io usando repetidas vezes o seu golpe. Até que Shun divide o Tornado em dois ao elevar seu cosmo, e assim, sua armadura 
                reluz dourada e ele prende novamente Scylla com as correntes. Kiki chega com a Armadura de Libra e Shun escolhe a Barra 
                dupla para derrubar o pilar, mas ao lançá-lo, Io pula na frente e recebe o impacto do golpe que mesmo assim, atinge o 
                pilar que é derrubado. Antes de morrer, Io alerta Shun, dizendo que ele deve parar de ter dó de seus adversários. Shiryu 
                chega ao pilar do Índico, onde encontra o General Krishna de Chrysaor.
              </p>

              <p className="text-2xl mt-4">Capítulo 8: "Lança Dourada vs Excalibur" 
              </p>
              <p>"Goruden no Ransu VS Ekusukariba"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de março de 1989; no Brasil: abril de 2013 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/8.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Krishina nem deixa Shiryu se apresentar, pois para ele o Cavaleiro de Dragão vai ser derrotado 
                rapidamente. O Marina fere Shiryu várias vezes, então ele se prepara para dar o último golpe, a Lança Dourada, o 
                Cavaleiro de Bronze tenta se defender com seu escudo, porém a lança transpassa tanto o escudo quanto o corpo do Dragão. 
                Shiryu ainda tenta quebrar a lança, mas ela é muito resistente, então ele cai ao chão e tem uma visão em que Shura de 
                Capricórnio fala sobre a Excalibur, que ela reside em Shiryu como presente de Shura. O Cavaleiro de Bronze se levanta, 
                vendo a perseverança dele, Krishina pede para o dragão se apresentar. O General Marina usa mais uma vez a Lança Dourada, 
                mas dessa vez o escudo do dragão (que reluz dourado) impede o golpe. Shiryu tenta mais uma vez destruir a lança com a 
                Excalibur, mas o golpe não surte efeito. Krishina usa outro golpe, o Lança-relâmpago, o Cavaleiro de Dragão cai 
                novamente, mas ele impede o general de dar o golpe de misericórdia. Levantando-se, Shiryu retira a sua armadura para 
                poder elevar o seu cosmo, então ele usa a Excalibur que dessa vez quebra a lança dourada.
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 16 - O Caçador de Corações' && (
            <div>
              
              <p className="text-2xl mt-4">Capítulo 9: "Acerte o ponto vital!" 
              </p>
              <p>"Seimeiten wo Kire!"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de maio de 1989; no Brasil: maio de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/9.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Não é somente a lança que se quebra, a escama de Krishina de Chrysaor parte-se ao meio. O 
                general então se senta numa posição de meditação e começa a levitar, formando uma barreira de ar à sua frente, 
                não permitindo que nada passe por ela. Shiryu tenta usar o golpe Dragão Voador, mas o golpe volta contra si. 
                Krishina fala para Shiryu sobre os seus Chakras, o dragão percebe então que os Chakras são como os pontos vitais, 
                ele teria de destruí-los para derrotar o general, mas o Marina usa o golpe Maha Roshini. Shiryu se mantém de pé e 
                eleva seu cosmo, fazendo com que o dragão apareça em suas costas, então ele usa o Cólera do Dragão, mas o golpe 
                não surte efeito por causa da barreira. O Cavaleiro de Bronze começa perceber que sua visão está ficando mais 
                fraca, Krishina avisa que é resultado do Maha Roshini. Krishina se prepara para dar o golpe final, então o dragão 
                clama por Atena, assim ele acaba enxergando a silhueta do general e os sete Chakras dele. Shiryu usa a Excalibur 
                e vence o General Marina.
              </p>

              <p className="text-2xl mt-4">Capítulo 10: "O caçador de corações" 
              </p>
              <p>"Kokoro no Karyudo"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de maio de 1989; no Brasil: maio de 2013 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/10.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Hyoga está indo para o Pilar do Oceano Antártico, porém ele acha que está andando em círculos, 
                até que ele chega ao pilar e encontra seu mestre Camus de Aquário, mas ele percebe que é uma farsa e ataca o General 
                Marina. No Pilar do Oceano Índico, Kiki entrega a urna de Libra para Shiryu que usa a Espada para destruir o Pilar. 
                Os generais Dragão Marinho e Sorento de Sirene conversam e falam que os Cavaleiros de Bronze irão perecer ao enfrentar 
                Kasa de Lymnades. Hyoga enfrenta o Marina, mas ele insiste em dizer que é o verdadeiro Camus, para provar, ele usa o 
                Execução Aurora que lança Hyoga longe. Vendo que é o seu mestre, Hyoga abraça o Cavaleiro de Ouro. Seiya chega ao Pilar, 
                mas ele vê que chegou ao Pilar do Oceano Antártico ao invés do Atlântico Sul. Ali ele se encontra com Marin de Águia. 
                Seiya a questiona, então a Amazona revela ser Seika, a irmã de Seiya e tira a máscara para provar. Shun que ia até o 
                Pilar do Atlântico Norte, sente a mesma sensação que ele sentiu na Casa de Gêmeos, ele chega ao Pilar, mas vê que é o 
                do Antártico, no chão ele encontra Seiya e Hyoga caídos. Aparece Ikki de Fênix, contente em se reencontrar com seu irmão, 
                Shun o abraça, mas graça às correntes, ele se defende do golpe que Ikki o daria pelas costas durante o abraço. Fênix 
                revela ser na verdade o General Marina Kasa de Lymnades que conta que usou a mesma técnica com Seiya e Hyoga. Shun fica 
                revoltado com essa maneira de Kasa agir, então ele usa o Onda Relâmpago, mas Kasa desaparece. O cavaleiro usa a Grande 
                Captura de Andrômeda que prende o general. Shun vai dar o golpe de misericórdia no general que se transforma novamente 
                em Ikki, mesmo insistindo, Shun não consegue atacar seu alguém com a imagem de seu irmão. Aproveitando da hesitação de 
                Andrômeda, Kasa usa o golpe Salamandra Satânica e derrota Shun.
              </p>
              
              <p className="text-2xl mt-4">Capítulo 11: "Vingança enfurecida" 
              </p>
              <p>"Ikari no Hofuku"
              </p>
              <p className="mt-2"> Lançamento em tankobon no Japão: 10 de maio de 1989; no Brasil: maio de 2013 (Editora JBC) 
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/11.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">No Pilar do Oceano Índico, Kiki tenta reanimar Shiryu que manda ele seguir em frente. Kasa tenta 
                desferir o golpe final em Shun, mas é impedido por um golpe do verdadeiro Ikki de Fênix que usa o Golpe Fantasma de 
                Fênix que faz com que Kasa tenha a ilusão de enfrentar a si mesmo, como se o seu próprio golpe fosse usado contra si. 
                Ikki então golpeia Kasa duas vezes, uma pelo Seiya e outra pelo Hyoga. Lymnades tenta usar o Salamandra Satânica, mas 
                Fênix bloqueia e usa o Ave Fênix que lança o general longe. Ele se levanta e se transforma em Shun, tentando usar a 
                mesma tática em Ikki, que não hesita e ataca Kasa, mesmo usando a imagem de seu irmão. Kasa tenta olhar mais fundo no 
                coração do cavaleiro e encontra Esmeralda, transforma-se nela, mas só não consegue executar seu plano, pois não tem 
                mais forças para lutar, assim ele cai morto. Ikki admite que se Kasa tivesse descoberto sobre Esmeralda um pouco mais 
                cedo, ele teria derrotado Ikki. Kiki chega com a urna e Fênix usa a lança para destruir o pilar.
              </p>

              <p className="text-2xl mt-4">Capítulo 12: "Isaak! O amigo que veio do gelo" 
              </p>
              <p>"Aizakku! Koritsuita Kyuyu"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de maio de 1989; no Brasil: maio de 2013 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/12.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Ikki parte para derrotar Poseidon, surpreendendo Kiki, pois ele não quer perder tempo destruindo os 
                pilares primeiro. Hyoga se levanta e mesmo enfraquecido com o golpe de Kasa, ele parte determinado a destruir o Pilar 
                do Oceano Ártico. Chegando lá, ele encontra-se com o General Marina que diz ter salvo a vida de Hyoga. Ele retira o 
                elmo da armadura e revela ser Isaak, um rapaz que é cego do olho esquerdo. O cavaleiro de Cisne se ajoelha pedindo desculpa 
                para o general que não tem dó e chuta Cisne. Hyoga tem um flashback em que se lembra do Isaak quando criança e adolescente 
                treinando com ele na Sibéria, sob a tutela de Camus. Como pedido de desculpas, Hyoga permite que Isaak fure o olho de 
                Hyoga também. Ambos têm um flashback do dia em que Isaak perdeu seu olho, ao tentar salvar Hyoga que tinha mergulhado 
                no oceano para visitar o corpo de sua mãe e acabou preso no navio naufragado por causa da correnteza do Oceano. Isaak 
                mergulha também e salva Hyoga, mas acaba sendo arrastado pela correnteza e perde o olho. Ele acredita que somente escapou 
                da morte por causa de Poseidon e por causa do Kraken que ele viu momentos antes de escapar da morte. O general de Kraken 
                golpeia Hyoga mais uma vez.
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 17 - Ecoe! A Oração de Athena' && (
            <div>
              
              <p className="text-2xl mt-4">Capítulo 13: "A morte de um amigo" 
              </p>
              <p>"Tomo yo Shishite Mata"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de julho de 1989; no Brasil: junho de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/13.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Isaak sente-se ofendido pois Hyoga diz que ele tem um cosmo que está sujo. Então o General usa o 
                golpe Aurora Boreal, derrubando Hyoga. Kiki chega com a urna e vê Hyoga caído, Isaak então pede a urna para Kiki que 
                se recusa em entregá-la. Isaak tenta tomar a Armadura de Ouro à força, mas Kiki não permite e defende corajosamente a 
                armadura. O General quase o mata, mas Hyoga se levanta e deita Kiki no chão para descansar um pouco. O Cavaleiro de 
                Bronze volta a enfrentar o General e derruba-o com o Pó de Diamante. Isaak tenta revidar com o Aurora Boreal, mas Hyoga 
                bloqueia, porém a força do golpe faz com que a ferida causada por Kasa se abra e comece a sangrar. No Santuário, 
                Aiolia de Leão questiona Mu de Áries sobre a ordem do Mestre Ancião de que os Cavaleiros de Ouro não devem sair do 
                Santuário. No Pilar, Hyoga assume a postura da Execução Aurora, então Isaak prepara-se para se defender usando o Aurora 
                Boreal, mas o golpe de Cisne é mais forte e o General é derrotado. Hyoga destrói o Pilar usando a Tonfa. Antes de morrer, 
                Isaak revela para Hyoga quem realmente está por trás de todos esses combates, Hyoga fica revoltado, mas acaba desmaiando 
                por causa da grande perda de sangue. No Santuário, os demais Cavaleiros de Ouro também questionam Mu. Ikki está indo para 
                o Templo Submarino, mas encontra o General Dragão Marinho no caminho que golpeia Ikki com o Explosão Galática. Fênix 
                reconhece esse golpe e o General tira o elmo e Ikki vê que ele é Saga de Gêmeos.
              </p>

              <p className="text-2xl mt-4">Capítulo 14: "Gêmeos! O Retorno" 
              </p>
              <p>"Jemini! Futatabi"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de julho de 1989; no Brasil: junho de 2013 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/14.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">O General Dragão Marinho fala que na verdade é Kanon, irmão gêmeo de Saga. Ele não gostade ser 
                comparado a seu irmão e usa o golpe Triângulo de Ouro, que suga Ikki para outra dimensão. Shina percebe que o cosmo 
                de Ikki desapareceu. Vendo a necessidade de chegar logo Poseidon, ela derrota Thetis com o golpe Garras do Trovão, e 
                assim ela chega na sala do Imperador que está sentado em seu trono. Somente com seu cosmo, Julian Solo quebra a máscara 
                da Amazona, que insiste em enfrentá-lo, mas ele a derrota usando o seu cosmo. Sorento de Sirene encontra-se com Kanon e 
                o questiona sobre suas verdadeiras intenções, mas a conversa dos dois é interrompida ao sentirem um cosmo poderoso se 
                aproximar. É Shun que chega ao Pilar do Atlântico Sul e começa enfrentar Sorento, que usa a Sinfonia Final da Morte. A 
                sua sinfonia é interrompida por uma canção que vem do cosmo de Atena no Pilar Principal (que nesse momento já cobriu 
                Saori inteiramente).
              </p>
              
              <p className="text-2xl mt-4">Capítulo 15: "Ecoe! A oração de Atena" 
              </p>
              <p>"Hibike! Atena no Inori"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de julho de 1989; no Brasil: junho de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/15.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">O General fica paralisado, pois a canção lhe causa o mesmo temor que lhe causou quando ele enfrentava 
                Aldebaran (que naquela ocasião foi salvo por Saori, que interferiu na luta). No Atlântico Norte, Kanon sente alguns 
                cosmos, enquanto que no Templo Submarino, Seiya chega até a sala do trono, ficando cara a cara com Julian Solo, que faz 
                com que a parede do fundo da sala se abra, revelando o caminho para o Pilar Principal. Seiya ataca Poseidon com os 
                Meteoros de Pégaso, mas o golpe volta-se contra si. Mesmo elevando seu cosmo e fazendo a armadura reluzir dourada, sua 
                força não é o suficiente para impedir o golpe que Julian Solo dispara (que destrói a armadura de Pégaso), porém Seiya é 
                salvo por Hyoga e Shiryu que o defende do golpe. No Santuário, Aiolia irrita-se e tenta partir para o Santuário Submarino, 
                mas Mu diz que se ele sair do Santuário, o Cavaleiro de Áries será obrigado a matá-lo por traição a Atena. Para o alívio 
                dos Cavaleiros de Ouro que se preocupam com Atena e os Cavaleiros de Bronze, a Armadura de Ouro de Sagitário sai do 
                Santuário em direção ao Santuário de Poseidon. Enquanto isso, Julian Solo também destrói as armaduras de Shiryu e Hyoga 
                que caem ao chão. Seiya se levanta para continuar a lutar contra Poseidon, nisso a Armadura de Ouro chega e Seiya à 
                veste (para desespero de Kanon que sente o cosmo da Armadura). Então o Cavaleiro de Pégaso aponta o arco de Sagitário 
                em direção ao Deus dos Mares.
              </p>

              <p className="text-2xl mt-4">Capítulo 16: "Conflito! As duas almas" 
              </p>
              <p>"Sokoku! Futatsu no Tamashii"
              </p>
              <p className="mt-2"> Lançamento em tankobon no Japão: 10 de julho de 1989; no Brasil: junho de 2013 (Editora JBC)             
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/16.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Julian Solo adverte Seiya de que se ele disparar a flecha, ela voltará contra Seiya. No Pilar do 
                Atlântico Sul, Shun e Sorento ainda se enfrentam. O General destrói as correntes e a armadura de Andrômeda com a 
                Sinfonia Final da Morte. Shun é afetado também pelo golpe. Mas Sirene é preso numa corrente de ar feita pelo Cavaleiro 
                que diz que se ele tocar mais uma nota, a corrente ficará mais forte matando o General. Sorento desafia Andrômeda 
                utilizando o golpe Clímax Final da Morte, mas ele é derrotado, pois Shun usa a Tempestade Nebulosa. Kiki chega e tenta 
                reanimar Shun. Seiya ainda ameaça Julian Solo com a flecha, então eles ouvem no Templo o barulho do Pilar do Atlântico 
                Sul sendo destruído. No Atlântico Norte, Ikki reaparece, Kanon usa o Explosão Galática, mas Ikki diz que nem mesmo 
                Saga conseguiu derrotá-lo com esse golpe e que Kanon é muito inferior ao seu irmão. Fênix usa o seu Golpe Fantasma 
                que faz com que Dragão Marinho tenha um flashback de quando treze anos antes, Saga percebe que Kanon tem um coração 
                maléfico e então o prende na prisão do Cabo Sunion.
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 18 - Além das Ondas Azuis' && (
            <div>
              
              <p className="text-2xl mt-4"> Capítulo 17: "O mistério da ressurreição do Rei dos Mares"
              </p>
              <p>"Kaio Fukkatsu no Nazo"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 10 de julho de 1989; no Brasil: junho de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/17.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Seiya atira a flecha que volta contra si, insistente ele atira novamente, a flecha se volta, mas 
                atinge Shina que entrou na frente para proteger o seu amado. Ainda sob o efeito do Golpe Fantasma, Kanon conta para 
                Ikki que no Cabo Sunion foi salvo muitas vezes por um cosmo desconhecido, e que um dia tentando fugir ele encontra o 
                tridente de Poseidon que está com o selo de Atena, ao encostar-se no Tridente, ele é transportado para o Templo de 
                Poseidon. Kanon entra numa sala onde estão as sete escamas dos Generais e a escama de Poseidon, também um ânfora que 
                contém a alma do verdadeiro Poseidon. Kanon a abre e desperta a alma do deus que o questiona. Com medo, Kanon inventa 
                a desculpa que é o General Dragão Marinho e que o desperto porque Atena reencarnou novamente. Irritado com essa 
                notícia, Poseidon diz que irá habitar o corpo de Julian Solo e que quando chegar a hora irá despertar. Kanon então 
                planeja a guerra com a intenção de que tanto Julian quanto Saori morram e assim ele assuma o comando do planeta.
              </p>

              <p className="text-2xl mt-4">Capítulo 18: "Atire! Flecha Dourada" 
              </p>
              <p>"Ute! Ogon no Isshi"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 8 de setembro de 1989; no Brasil: julho de 2013 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/18.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Kanon é atingido pelo efeito do Golpe Fantasma. No Santuário, a Armadura de Aquário também parte 
                para ajudar os Cavaleiros de Bronze. Shina insiste para que Seiya dispare a flecha de novo que ela irá defendê-lo, 
                sem alternativa, Seiya aceita, mas quem o defende dessa vez é Shiryu. O Dragão não se importa e entrega a flecha para 
                Seiya tentar de novo, Hyoga e Shun que acabou de chegar também entra na frente de Seiya para defendê-lo caso a flecha 
                volte. Vendo que dessa vez os seus amigos também correm perigo, Seiya eleva seu cosmo ao máximo e dispara a flecha. 
                Graças ao cosmo dos cinco cavaleiros, a Flecha Dourada atinge o elmo de Julian que desperta e fica em choque, pois 
                não entende como parou ali. Os cinco cavaleiros atravessam a sala e passam por Julian que não reage. O rapaz começa a 
                se questionar, até que o cosmo dele se eleva e a alma do verdadeiro Poseidon desperta. Sorento de Sirene ao Pilar do 
                Atlântico Norte junto com Kiki que entrega o escudo da Armadura de Ouro para Ikki que destrói o Pilar. Como Sorento vê 
                que tudo era na verdade um plano de Kanon, ele decide abandonar a batalha. Ikki pede para Kiki levar a urna para os 
                outros, pois ele ainda quer descobrir como derrotar Poseidon. Os cinco cavaleiros são impedidos de chegar até o Pilar 
                Principal por Poseidon que toma a frente da batalha. Seiya tenta seguir em frente, mas Poseidon dispara seu golpe que 
                atinge Hyoga que entra na frente. O Cavaleiro de Cisne insiste para Seiya seguir em frente, Poseidon vai eletrocutá-lo 
                porém a Armadura de Ouro de Aquário protege Hyoga que a veste.
              </p>
              
              <p className="text-2xl mt-4">Capítulo 19: "As três flechas" 
              </p>
              <p>"Sanbon no ya"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 8 de setembro de 1989; no Brasil: julho de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/19.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Hyoga usa a Execução Aurora contra Poseidon, que revida. O poder de ambos os golpes forma um esfera 
                de energia que paira no ar, mas Hyoga não aguenta mantê-la e se rende, mas é defendido por Shiryu com o Escudo da 
                Armadura de Ouro de Libra. A Armadura de Ouro chegou ali através de Kiki que usou o resto de suas energias para se 
                teleportar com a armadura. Shiryu então veste a armadura. Usando o Cometa de Pégaso, o Cólera do Dragão e o Execução 
                Aurora, Seiya, Shiryu e Hyoga se unem e derrubam Poseidon. Os três então seguem para o Pilar Principal.
              </p>

              <p className="text-2xl mt-4">Capítulo 20: "Destruam! O Pilar Central" 
              </p>
              <p>"Hokai! Mein Buredowina"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 8 de setembro de 1989; no Brasil: julho de 2013 (Editora JBC)              
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/20.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Shiryu tenta destruir o pilar com o Escudo de Libra que é destruído. Hyoga tenta usar a Tonfa, mas 
                a arma também é destruída. Seiya utiliza a Lança, mas ela também não surte efeito. Então os três tentam usar ao mesmo 
                tempo o Tridente, a Barra Tripla e a Espada. Ikki ainda enfrenta Kanon, Sorento tenta interferir na luta, mas Ikki 
                não permite. Fênix pergunta para Kanon onde está a Ânfora de Atena, a única arma capaz de derrotar o deus dos mares. 
                No Pilar Principal, as três armas são destruídas e Seiya diz que Hyoga e Shiryu devem lançá-lo utilizando seus golpes, 
                ele pode morrer, mas é a única maneira de destruir o Pilar e salvar Saori. Enquanto isso, Ikki diz para Kanon que ele 
                tem uma dívida com Atena, pois era dela o cosmo que o salvou tantas vezes no Cabo Sunion, irritado, o Dragão Marinho 
                diz que a ânfora está dentro do Pilar Principal presa também com Atena. Ikki dá às costas para Kanon e diz que nem vale 
                a pena lutar com ele, então o cavaleiro parte para o Pilar Principal. Sorento diz para Kanon que o cosmo de Atena mudou 
                sua opinião sobre o planeta, pois ele viu que ainda há bondade e por isso ele se retirará da guerra. Hyoga e Shiryu se 
                preparam para atirar Seiya, mas Poseidon eletrocuta-os. Ikki chega e agarra Poseidon por trás para os cavaleiros, porém 
                destruir o Pilar, então Shiryu e Hyoga utilizam o Cólera do Dragão e o Pó de Diamante, arremessando Seiya. Poseidon 
                derruba Ikki, Hyoga e Shiryu. Ele tenta atingir Seiya também, mas o Cavaleiro supera a Velocidade da Luz com o seu 
                cosmo e atinge o Pilar vai abaixo junto com todo o Santuário Submarino. Seiya resgata Saori e faz o caminho de volta 
                do Pilar. Poseidon tenta destruir Seiya, mas seu Tridente é impedido por Atena que se levanta para derrotar Poseidon.
              </p>
              
              <p className="text-2xl mt-4">Capítulo 21: "Além das ondas azuis" 
              </p>
              <p>"Aoki Hato no Hate"
              </p>
              <p className="mt-2">Lançamento em tankobon no Japão: 8 de setembro de 1989; no Brasil: julho de 2013 (Editora JBC)  
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/poseidon/21.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Saori está com a Ânfora que pode prender Poseidon. Seiya prepara o arco para atirar a flecha contra 
                Poseidon novamente, mas Saori intercede por ele dizendo que ele está no corpo de Julian Solo e o rapaz não tem culpa, 
                pois foi possuído por Poseidon. O deus dos mares atira seu Tridente contra os dois, mas Kanon entra na frente protegendo-os 
                e sendo atingido pelo Tridente, então ele cai derrotado. Saori abre a ânfora que prende a alma de Poseidon novamente. 
                Saori e Seiya começam procurar o corpo de Julian para salvá-lo, mas Thetis chega primeiro ao corpo e diz que ela vai 
                salvá-lo, pois tem uma divida com ele, então ela tem um flashback que mostra que quando Julian era criança, ele salvou 
                um peixe que está preso numa linha de pesca e que ela é esse peixe. Todo o Santuário é inundado. Dias depois no Cabo 
                Sunion, Julian (que não se lembra de nada) conhece um rapaz chamado Sorento que toca flauta, Sorento se dispõe a ajudar 
                Julian que quer reconstruir os lugares destruídos pelas chuvas torrenciais dos dias anteriores e as pessoas que foram 
                prejudicadas por elas. Julian encontra um peixe que está morto e cheio de feridas na areia, ele devolve o peixe para o 
                mar onde é o seu lugar, mas Sorento vê o peixe se mexer e desaparecer no Oceano.
              </p>
              
            </div>
          )}

          {/* Seções de Hades */}
          {selectedSection === 'Volume 19 - Ressurreição! As 108 Estrelas Maléficas de Hades' && (
            <div>
              
              <p className="text-2xl mt-4"> Capítulo 1: "Ressurreição! As 108 estrelas maléficas de Hades"
              </p>
              <p>"Fukkatsu! Hadesu Hyaku-hachi no Masei"
              </p>
              <p className="mt-2">  Lançamento em tankobon no Japão: 10 de novembro de 1989; no Brasil: setembro de 2013 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/hades/1.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Mestre Ancião está sentado nos Cinco Picos Antigos de Rozan e observa que, a mil quilômetros de distância, o selo que prendia Hades em uma imensa torre havia perdido a força. Uma nova Guerra Santa está prestes a começar!!! No Santuário, Nachi de Lobo e Ichi de Hidra dão bronca em alguns soldados que estão dormindo. Eles dizem que soaram alertas no Santuário e não é para soldados ficarem dormindo.
Os dois Cavaleiros de Bronze continuam andando e conversando, dizendo que agora que Atena está de volta ao Santuário, as pessoas que vivem nele se sentem mais seguras. De repente, os soldados que foram repreendidos parecem ver algo estranho. Enquanto isso, no Templo de Atena, Saori dorme, mas é acordada por um homem que diz ser Hades. Hades arranca a cabeça de Saori, mas tudo isso não passou de uma premonição do Mestre Ancião, que continua em Rozan. Nachi e Ichi escutam os gritos dos soldados e voltam para ver o que aconteceu. Os soldados estão caídos e, de repente, aparece um homem com túnica (provavelmente algum espectro de Cavaleiro de Prata morto no passado). Os Cavaleiros de Bronze tentam atacar os espectros, porém não conseguem acertar os golpes neles. Jabu aparece para ajudar, disparando o seu Galope do Unicórnio e os espectros misteriosamente somem.
Na Casa de Áries, Mu está de guarda e observa a chegada de um espectro. O espectro pede para Mu se ajoelhar perante ele e o Cavaleiro de Ouro obedece. O espectro ordena que Mu encontre e mate Atena, porém Mu se recusa, dizendo que mesmo a ordem vindo "dele", ele não pode fazer uma coisa dessas. Nisso, mais dois espectros surgem. Shina vai até o cemitério do Santuário e observa que vários túmulos foram abertos. Ela nota que os túmulos foram abertos por dentro e não por fora. De volta a Casa de Áries, os dois novos espectros se apresentam: são os cavaleiros de Ouro Afrodite de Peixes e Máscara da Morte de Câncer. Eles dizem que foram revividos por Hades, o que faz Mu se espantar. Os dois espectros que um dia já foram Cavaleiros de Ouro rasgam a túnica que vestiam e mostram suas armaduras: são negras, mas iguais as Armaduras de Ouro. Eles explicam que agoram eles vestem Surplices, sinal que eles são espectros leais a Hades.
Afrodite e Máscara da Morte tentam avançar, mas Mu os impede com a sua Parede de Cristal. Máscara da Morte tenta atacar com a sua Ondas do Inferno, porém tem o golpe repelido. O mesmo acontece com Afrodite, ao tentar disparar as Rosas Piranhas. Não existe maneira de atravessar a Parede de Cristal! Em Rozan, o Mestre Ancião avisa para Shunrei que ele terá que ir embora e talvez nunca mais volte. Na Casa de Áries, o outro encapuzado quebra a Parede de Cristal facilmente, fazendo com que Máscara da Morte e Afrodite tentem avançar novamente. Mu recebe alguns golpes deles, mas resiste. Quando Máscara da Morte iria disparar um novo golpe, é surpreendentemente atingido pelas costas. Seiya de Pégaso aparece.
              </p>

              <p className="text-2xl mt-4"> Capítulo 2: "Lamentação! Lágrimas de sangue"
              </p>
              <p>"Dokoku! Chi no Namida"
              </p>
              <p className="mt-2">   Lançamento em tankobon no Japão: 10 de novembro de 1989; no Brasil: setembro de 2013 (Editora JBC)           
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/hades/2.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Seiya pergunta para o Mu o que está acontecendo. Logo em seguida ele encara Máscara da Morte e Afrodite e pergunta como os dois podem ter voltado a vida. Mu explica que eles são espectros de Hades e diz que o verdadeiro inimigo de Atena é Hades (as lutas anteriores foram eventos insignificantes). Mu pede para Seiya sair do Santuário pois não é mais lugar para ele ficar.
Em Rozan, Shiryu se despede de Shunrei, deixando-a sozinha, e parte para o Santuário. Na Sibéria, Hyoga se despede da sua mãe e sente um cosmo estranho se dirigindo para o Santuário. Shun, que está na mansão Kido, sente o mesmo cosmo. Tatsumi aparece e diz que Shun não pode ir para o Santuário. De volta a Casa de Áries, Seiya está indignado com o que Mu disse e quer ver Atena a qualquer custo. Mu o impede e, logo em seguida, Máscara da Morte entra na briga e dá um chute na cara do Seiya, para logo em seguida ficar pisoteando em cima do Pégaso. Seiya fica nervoso e joga Máscara da Morte para longe. Seiya resolve lutar e veste a sua armadura (que não está em bom estado).
Máscara da Morte pergunta para o Seiya, o que ele espera conseguir com uma armadura toda quebrada. Seiya responde que nem precisa de uma armadura para vencer Máscara da Morte. O Pégaso agarra Máscara da Morte e dispara o seu Turbilhão de Pégaso. O ex-cavaleiro de Câncer cai no chão e, quando Seiya iria disparar o golpe final, Mu o paralisa, dizendo para ele ir embora. Saori acorda, dizendo ter ouvido a voz de Seiya. Alguém misterioso chega para conversar com a Saori. De volta na Casa de Áries, Máscara da Morte tenta se aproveitar do fato de Seiya estar caido e ataca. Mu segura o braço de Máscara da Morte e diz que ele mesmo vai matar Seiya. Máscara da Morte voa longe com um simples movimento de Mu. O Cavaleiro de Áries dispara a Extinção Estelar e Seiya desaparece.
Shion percebe a farsa e pergunta para a Mu para onde ele enviou o Pégaso. Mu responde que todos que são atingidos pela Extinção Estelar são enviados para o Inferno. Máscara da Morte e Afrodite tentam avançar novamente, mas são detidos mais uma vez por Mu. É impossível passar por cima de Mu e até o mestre dele percebe isso, dizendo que é a primeira vez que o Cavaleiro de Áries mostra toda sua agressividade. Mu resolve acabar com tudo isso rapidamente e dispara mais uma Extinção Estelar, eliminando Afrodite e Máscara da Morte. Três novos espectros surgem: Saga de Gêmeos, Shura de Capricórnio e Camus de Aquário. Os três partem para cima de Mu e o Cavaleiro de Áries tenta de todas as formas se defender, mas lutar contra três grandes Cavaleiros de Ouro é muito complicado.
Mu recua, mas percebe que existe algo estranho com aqueles três cavaleiros: eles estão chorando, seus "corações estão chorando sangue". Mu entende toda a situação, mas é paralisado totalmente por seu Mestre, fazendo com que Saga, Shura e Camus passem pela Casa de Áries. De repente, o Mestre Ancião chega ao local. Shion rasga a sua túnica e mostra a sua armadura e a sua verdadeira aparência. Ele é o jovem Shion de Áries!
              </p>
              
              <p className="text-2xl mt-4"> Capítulo 3: "Relógio de Fogo! As chamas reacendem"
              </p>
              <p>"Hidokei! Futatabi Moyuru"
              </p>
              <p className="mt-2">  Lançamento em tankobon no Japão: 10 de novembro de 1989; no Brasil: setembro de 2013 (Editora JBC)
              </p>
              <img src="https://www.cavzodiaco.com.br/imagens-mangas/hades/3.jpg" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">Mu fica surpreso ao ver Shion com a aparência jovem. O antigo mestre do Santuário explica que ele está com a aparência jovem graças ao poder de Hades e diz que, enquanto ele está jovem, Dohko está um velho acabado. Dohko responde, dizendo que tudo isso não passa de uma ilusão. Ele, antes de chegar no local, havia acendido o Relógio de Fogo. A vida de Shion e dos outros Cavaleiros de Ouro renegados durará apenas doze horas. Dohko ordena para que Mu parta e proteja Atena de todas as formas possíveis, durante as doze horas.
No Castelo de Hades, Máscara da Morte de Câncer e Afrodite de Peixes pedem mais uma chance para Radamanthys, porém o espectro não os perdoa, jogando os dois no buraco que leva até o mundo dos mortos. Radamanthys entra no Castelo de Hades, para pedir para Pandora que ela ordene a sua ida ao Santuário. Pandora recusa dizendo que já existem cavaleiros mortos lá e que Hades não permitiria que seus espectros se ferissem. Radamanthys é obrigado a aceitar as ordens! Mu chega à Casa de Touro e encontra Aldebaran estático, como se acabasse de disparar o seu Grande Chifre. Mu percebe que Aldebaran está morto. O Cavaleiro de Touro se sacrificou para proteger a Casa de Touro.
Um novo espectro surge por trás da armadura de Aldebaran: é Niobe de Deep. De volta ao Castelo de Hades, Radamanthys pergunta se Zelos de Sapo seguiu suas ordens, enviando espectros ao Santuário. Zelos questiona Radamanthys, perguntando se Radamanthys não tem medo de Pandora. O juíz vira as costas e não responde. Na Casa de Touro, Mu resolve lutar, mas quem ataca primeiro é o espectro, disparando o golpe Fragrância Profunda. Mu parece ter sido atingido em cheio pelo golpe, mas surpreende Niobe, que dá de frente com a Parede de Cristal de Mu.
O Cavaleiro de Ouro nem perde tempo lutando com o espectro e já parte para a próxima casa, Gêmeos. Niobe pergunta para Mu porque ele não vai lutar e Mu responde de forma simples: eu não preciso lutar contra alguém que já está morto. No mesmo instante, aparece ao fundo a alma de Aldebaran de Touro e o corpo do espectro explode, matando-o. Mu, que já está a caminho da Casa de Gêmeos, diz que a morte de Aldebaran não foi em vão e que ele fara de tudo para proteger Atena. Mu sente, também, que existe um cosmo estranho na Casa de Câncer.
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 20 - Colisão! As Doze Casas' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 21 - Sob as Árvores Salas Gêmeas...' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 22 - Desperte!! Oitavo Sentido' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 23 - Inferno - O Portão do Desepero' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 24 - Rei das Trevas! O Nascimento da Alma' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 25 - O Grande Eclipse' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 26 - O Caminho para os Campos Elísios!' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 27 - Thanatos e Hypnos!' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
            </div>
          )}
          {selectedSection === 'Volume 28 - Para um Mundo Onde a Luz Transborda...!' && (
            <div>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">  
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-left mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>

              <p className="text-2xl mt-4"> 
              </p>
              <p>
              </p>
              <p className="mt-2">              
              </p>
              <img src="" 
              className="w-100 h-auto rounded-lg shadow-lg float-right mt-4 my-1 mr-4 ml-4"/>
              <p className="mt-4">
              </p>
              
            </div>
          )}
        </div>
      </div>
      <div className="text-center mt-8">
        <Link href="/mangas" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300">
          Voltar para Mangás
        </Link>
      </div>
    </div>
  );
}
