"use client";

import { useState, useEffect } from 'react';

export default function HipermitoPage() {
  const allErasSections = [
    'A ERA DA CRIAÇÃO DO UNIVERSO',
    'O BIG BANG',
    'O NASCIMENTO DO UNIVERSO',
    'A ERA DA CRIAÇÃO DA TERRA',
    'A ERA DOS DEUSES',
    'A MITOLOGIA MUNDIAL E O HIPERMITO',
    'O NASCIMENTO DE ATENA',
    'ATENA POSSUI UMA ARMADURA?',
    'O DESAPARECIMENTO DE ZEUS',
    'POSEIDON INICIA OS PREPARATIVOS PARA INVADIR A TERRA',
    'A INVASÃO DA TERRA POR POSEIDON',
    'OS GUERREIROS INVENCÍVEIS: OS MARINAS!',
    'ATLÂNTIDA, A FORTALEZA FINALMENTE É TERMINADA!',
    'O NASCIMENTO DOS CAVALEIROS DE ATENA',
    'AS ARMADURAS SÃO BASEADAS NAS CONSTELAÇÕES?',
    'AS ARMADURAS',
    'A DERROTA DE POSEIDON!',
    'A ORIGEM DOS GUERREIROS AZUIS (BLUE WARRIORS)',
    'O NASCIMENTO DO SANTUÁRIO',
    'O QUE SÃO GUERRAS SANTAS?',
    'A ERA DO CAOS',
    'BATALHA CONTRA GIGANTES',
    'O FIM DO CONTINENTE DE MU',
    'A ORIGEM DO CAVALEIRO DE OURO DE ÁRIES',
    'A GUERRA CONTRA ARES',
    'HADES E ARES',
    'OS CAVALEIROS EM PERIGO',
    'OS CAVALEIROS DESCONHECIDOS',
    'A DERROTA DE ARES',
    'A ARMADURA DE LIBRA',
    'A ERA DOS HUMANOS',
    'AS ARMADURAS NEGRAS',
    'A ILHA DA RAINHA DA MORTE',
    'O MISTÉRIO DA MÁSCARA DE GUILTY',
    'O PRIMEIRO HOMEM QUE UTILIZA A ARMADURA DE FÊNIX',
    'A ÚLTIMA GUERRA SANTA',
    'A VIGÍLIA DE DOHKO',
    'A PURIFICAÇÃO DO SANTUÁRIO',
    'O ANTIGO MESTRE DO SANTUÁRIO',
    'OS CAVALEIROS DE OURO ALIADOS A SAGA',
  ];

  const mainInfoSections = [
    'Nascimento do Mundo e a Grande Vontade (Big Will)',
    'A Era dos DEUSES',
    'AS GUERRAS SAGRADAS',
    'NASCIMENTO DE UMA LENDA',
    'CALMARIA ANTES DA TEMPESTADE',
    'RUMO AO HADES',
  ];

  const [selectedSection, setSelectedSection] = useState(mainInfoSections[0]);
  const [currentCarousel, setCurrentCarousel] = useState<'allEras' | 'mainInfo'>('mainInfo');

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

  const sectionsToDisplay = currentCarousel === 'allEras' ? allErasSections : mainInfoSections;

  return (
    <div className="min-h-screen p-4 md:p-8 text-white ">
      <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-500 text-center mb-8 md:mb-12 animate-fade-in-down">
        O Hipermito - Saint Seiya
      </h1>

      {/* Botões para alternar entre carrosséis */}
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <button
          onClick={() => {
            setCurrentCarousel('mainInfo');
            setSelectedSection(mainInfoSections[0]);
          }}
          className={`px-4 sm:px-6 py-3 rounded-lg text-base sm:text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
            currentCarousel === 'mainInfo' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
          }`}
        >
          Principais Informações
        </button>
        <button
          onClick={() => {
            setCurrentCarousel('allEras');
            setSelectedSection(allErasSections[0]);
          }}
          className={`px-4 sm:px-6 py-3 rounded-lg text-base sm:text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 ${
            currentCarousel === 'allEras' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400'
          }`}
        >
          Todas as Eras
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
      {/* Exibição do conteúdo da seção selecionada */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4">{selectedSection}</h2>
        <div className="mt-2">
          {/* Placeholder para o conteúdo da seção */}
            {selectedSection === 'A ERA DA CRIAÇÃO DO UNIVERSO' && (
                <span>
                    "O grande Deus do tempo: Cronos" De acordo com o Hipermito, Cronos está 
                    vinculado diretamente ao ser que deu início ao Big Bang, consequentemente
                    ao nascimento do Universo. De acordo com a mitologia, Cronos é o pai de Zeus!!!
                </span>
            )}
            {selectedSection === 'O BIG BANG' && (
                <span>
                    "O mistério que existiu antes do Big Bang (Grande Explosão)" O começo do 
                    Hipermito é o Big Bang. Como era o universo antes disso? Qual a sua ligação 
                    com o Hipermito? Hoje em dia ninguém no mundo sabe algo sobre o Big Bang!!!
                </span>
            )}
            {selectedSection === 'O NASCIMENTO DO UNIVERSO' && (
                <span>
                    "A Suprema Virtude movimenta o Universo" Big Will (Suprema Virtude) foi criada 
                    devido ao Big Bang, expandindo-se como feixes de luz que formaram as estrelas 
                    que brilham no céu e os planetas. Estes deram forma ao Universo que vivemos hoje.
                    Mas qual seria a origem da Suprema Virtude?

                </span>
            )}
            {selectedSection === 'A ERA DA CRIAÇÃO DA TERRA' && (
                <span>
                    "O nascimento da vida" Segundo o Hipermito, um raio de luz da Suprema Virtude se 
                    transformou no planeta Terra, que criou o seu solo (Gaia), céu (Urano) e os oceanos 
                    (Pontos), antes do surgimento da vida. Esta vida se criou, mais tarde, da imagem e 
                    semelhança da energia da Suprema Virtude e assim nasceu o ser humano.
                </span>
            )}
            {selectedSection === 'A ERA DOS DEUSES' && (
                <span>
                    "Zeus, Poseidon e Hades" Visto que a humanidade se tornou numerosa, alguns seres 
                    começaram despertar a Suprema Virtude. A descoberta do alvorecer do cosmo deve-se 
                    ao sétimo sentido e a descoberta da Suprema Virtude só é possível a quem possui o 
                    oitavo e nono sentido. Consequentemente, três homens apareceram e mostraram-se 
                    capaz de despertar a Suprema Virtude, tornando-se poderosos e imortais. Eles são: 
                    Zeus, Hades e Poseidon. Considerados como deuses pela humanidade, cada um 
                    desenvolveu seu território. Zeus fez de seu reino a terra e o céu, Poseidon 
                    os oceanos e Hades o plano dimensional aonde as almas vão após a morte.

                </span>
            )}
            {selectedSection === 'A MITOLOGIA MUNDIAL E O HIPERMITO' && (
                <span>
                    Na época do Hipermito, diferentes deuses apareciam em vários mitos no mundo. Eles 
                    são os seres humanos que podem mostrar a Suprema Virtude em si próprios. Por isso, 
                    não tome como base a mitologia grega e sim o Hipermito.
                </span>
            )}
            {selectedSection === 'O NASCIMENTO DE ATENA' && (
                <span>
                    De acordo com a mitologia grega, Atena nasceu da cabeça de Zeus, mas o Hipermito 
                    não dá detalhes precisos deste nascimento. Embora, exista uma teoria que diga 
                    sobre o assunto, uma verdadeira missão surgiu no nascimento da deusa Atena!
                </span>
            )}
            {selectedSection === 'ATENA POSSUI UMA ARMADURA?' && (
                <span>
                    Segundo a mitologia grega, Atena nasceu com uma lança e um escudo, além de um elmo 
                    e uma armadura. Caso o fato seja verdadeiro, com certeza em breve ela deverá 
                    utilizar a sua armadura!
                </span>
            )}
            {selectedSection === 'O DESAPARECIMENTO DE ZEUS' && (
                <span>
                    "Onde está Zeus?" Sabe-se que um dia Zeus confiou a terra à Atena e desapareceu 
                    partindo para uma extremidade profunda do céu. O Deus onipotente desapareceu de 
                    repente? Zeus: por que ele sumiu? Por que ele deixou a terra para Atena? Qual o 
                    verdadeiro objetivo dele? No Hipermito, a existência de Zeus está cercada de 
                    inúmeros mistérios que se forem solucionados, permitirão desvendar o verdadeiro 
                    Hipermito.

                </span>
            )}
            {selectedSection === 'POSEIDON INICIA OS PREPARATIVOS PARA INVADIR A TERRA' && (
                <span>
                    "O deus dos mares: Poseidon!" Poseidon, sabendo do desaparecimento de Zeus, decide 
                    dominar a terra e começa a se preparar para vencer Atena. Ele reune os mais poderosos 
                    guerreiros do sete mares, nomeados mais tarde de Marinas. Poseidon estabeleceu um 
                    reino submarino, mas sempre sonhou em dominar a terra. De acordo com a mitologia 
                    grega, Poseidon teve o talento para criar todas as classes de seres vivos. Esta 
                    pode ser uma maneira interpretar a criação das escamas (scales) para seus guerreiros.
                </span>
            )}
            {selectedSection === 'A INVASÃO DA TERRA POR POSEIDON' && (
                <span>
                    "A primeira Guerra Santa" O deus dos mares, Poseidon, desejando torna-se o deus da 
                    terra, começou a invadir a superfície, território de Atena. Os soldados da terra 
                    eram impotentes perto do poder invencível dos marinas (guerreiros de Poseidon). 
                    Sabe-se que Hades observou toda a guerra do fundo do mundo dos mortos.
                </span>
            )}
            {selectedSection === 'OS GUERREIROS INVENCÍVEIS: OS MARINAS!' && (
                <span>
                    As armaduras que vestem os marinas são chamadas de Escamas. São feitas de Oricalco e 
                    nenhuma arma da terra poderia vencê-las. Como nenhuma arma da terra permitia os guerreiros
                    se protegerem dos golpes dos Marinas, os guerreiros da terra morreram diante os Marinas.
                </span>
            )}
            {selectedSection === 'ATLÂNTIDA, A FORTALEZA FINALMENTE É TERMINADA!' && (
                <span>
                    Poseidon estabelece sua base para a invasão da terra, uma enorme fortaleza em pleno 
                    Oceano Atlântico, na cidade de Atlântida. Após a construção desta fortaleza, a 
                    invasão de Poseidon foi feita de forma mais intensa. Devido ao seu tamanho colossal, 
                    Atlântida ficou conhecida como a "fortaleza continental". O poder de defesa era 
                    imenso, com dezenas de milhares de soldados. Sua existência é contada na história 
                    até hoje, como o famoso continente perdido de Atlântida.

                </span>
            )}
            {selectedSection === 'O NASCIMENTO DOS CAVALEIROS DE ATENA' && (
                <span>
                    A maioria dos guerreiros da terra morreram durante os ataques repetidos dos marinas.
                    Com isso não houve outra solução: jovens e crianças teriam que lutar também. Como 
                    Atena não admite armas, estes jovens utilizavam os corpos como armas, rasgando o 
                    céu com seus punhos e rompendo a terra com seus pés. Atena não gostava que os jovens
                    se ferissem então resolveu dar proteções chamadas Armaduras. Os jovens que vestiam 
                    as armaduras eram chamados de Cavaleiros de Atena.
                </span>
            )}
            {selectedSection === 'AS ARMADURAS SÃO BASEADAS NAS CONSTELAÇÕES?' && (
                <span>
                    As 88 constelações que brilham no céu surgiram de acordo com o desejo de Atena e 
                    são estas constelações que as armaduras são baseadas. Com isso, os Cavaleiros só 
                    podem vestir uma armadura referente à sua constelação protetora.
                </span>
            )}
            {selectedSection === 'AS ARMADURAS' && (
                <span>
                    Os alquimistas do continente de Mu construíram as armaduras que protegem os Cavaleiros
                    de Atena. As armaduras podem se auto curar pois foram desenvolvidas com Oricalco, 
                    Gamânio e pó das estrelas. Em caso de danos menores, as armaduras devem ficar guardadas
                    na Caixa de Pandora (caixa das armaduras) aonde irão se recuperar sozinhas.

                </span>
            )}
            {selectedSection === 'A DERROTA DE POSEIDON!' && (
                <span>
                    Devido o nascimento dos Cavaleiros, a situação da guerra mudou e Atena tentava convencer
                    Poseidon para que ele deixasse suas ambições de lado e voltasse para seus oceanos. Mas
                    Poseidon ignorou o pedido de Atena e as lutas continuaram em Atlântida, causando terremotos
                    e maremotos que inundaram toda a terra. Apenas Noé, sua família e sua Arca (repleta de
                    animais de diversas espécies) se salvaram. O grande número de mortos causou a ira de 
                    Atena que enviou oito Cavaleiros de Atena até Atlântida. Depois de um duro combate, 
                    os Cavaleiros saíram vitoriosos e destruíram Atlântida.
                </span>
            )}
            {selectedSection === 'A ORIGEM DOS GUERREIROS AZUIS (BLUE WARRIORS)' && (
                <span>
                    Após ter vencido Poseidon, Atena selou sua alma e enviou-a para o Pólo Norte. Escolheu 
                    vários Cavaleiros para vigiá-la. Estes cavaleiros criaram um reino nestas terras, onde 
                    mais tarde renunciaram ao cargo de cavaleiros de Atena e se tornaram os Guerreiros Azuis
                    (Blue Warriors).

                </span>
            )}
            {selectedSection === 'O NASCIMENTO DO SANTUÁRIO' && (
                <span>
                    Passaram-se sete gerações após a primeira Guerra Santa, Atena construiu o seu templo perto 
                    da atual cidade de Atenas. As doze casas do Zodíaco foram construídas logo em seguida e em
                    torno do templo, que ficou conhecido como Santuário.
                </span>
            )}
            {selectedSection === 'O QUE SÃO GUERRAS SANTAS?' && (
                <span>
                    Após a invasão da terra por Poseidon, toda guerra que confronta as forças que despertaram a
                    Suprema Virtude é chamada de Guerra Santa. Quando o mal chega ao Mundo, com Atena renascida
                    na terra e sob as ordens do Grande Mestre, os Cavaleiros se reúnem no Santuário. As Guerras
                    Santas acontecem a cada 250 anos em média.

                </span>
            )}
            {selectedSection === 'A ERA DO CAOS' && (
                <span>
                    "Os combates contra os Gigas: a Gigantomaquia (a batalha contra os gigantes)" Depois que os
                    Cavaleiros de Atena terminaram muitas Guerras Santas, eram os Gigas, uma raça de gigantes,
                    que ameaçavam o Santuário. A existência destes gigantes continua sendo duvidosa e suas
                    origens são desconhecidas ainda. Seu poder de batalha excedeu ao dos Cavaleiros.
                    Acredita-se que tenha sido Hades ou Zeus que trouxeram estas criaturas ao universo,
                    anteriormente ao Big Bang. A batalha contra ao Gigas não é considerado uma Guerra
                    Santa e é chamada Gigantomaquia.

                </span>
            )}
            {selectedSection === 'BATALHA CONTRA GIGANTES' && (
                <span>
                    De acordo com a mitologia grega, o Gigantomaquia é a guerra com os gigantes enviados em
                    segredo pela deusa terra, Gaia, em uma caverna do norte da Grécia, na frente de Zeus e
                    de todos os deuses do Olimpo. O que é mais interessante é que o último dos gigantes
                    morto foi Encélado, cortado por Atena nesta mesma mitologia grega.
                </span>
            )}
            {selectedSection === 'O FIM DO CONTINENTE DE MU' && (
                <span>
                    Ao mesmo tempo, a terra original das armaduras, o continente de Mu, afundou e foi parar
                    no fundo do Oceano Pacífico. Muitas armaduras e alquimistas foram perdidos dentro das
                    construções durante esta catástrofe. A razão desta tragédia é desconhecida ainda.
                </span>
            )}
            {selectedSection === 'A ORIGEM DO CAVALEIRO DE OURO DE ÁRIES' && (
                <span>
                    Devido à perda do continente de Mu, das armaduras em produção, assim como as técnicas
                    para repará-las foram perdidas, o único que pode reparar armaduras hoje em dia é
                    Cavaleiros Dourado que vive em Jamiel, Mu de Áries. Existe uma teoria que diz que
                    Mu seria um descendente do continente de Mu... Obs.: O nome do continente é Mu
                    mesmo, o que provavelmente inspirou o nome do atual Cavaleiro de Áries, Mu.

                </span>
            )}
            {selectedSection === 'A GUERRA CONTRA ARES' && (
                <span>
                    Entre todas as Guerras Santas, a que foi contra o deus da guerra Ares foi de longe a mais
                    dura para os Cavaleiros. Dizem que Ares é o mais violento de todos os deuses. Ele plantou
                    as sementes de conflito por todo o mundo e inspirou as guerras na humanidade. A armada
                    de Ares foi dividida em quatro exércitos: a do "fogo", a do "chama", a do "desastre"
                    e do "terror". Eram compostos de soldados sanguinários e destrutivos, sendo conhecidos
                    como Berserkers (soldados dementes que prolongam a destruição e a morte além de seus limites).

                </span>
            )}
            {selectedSection === 'HADES E ARES' && (
                <span>
                    De acordo com a mitologia grega, Hades estava um pouco relacionado a numerosos deuses, o que
                    incluía o cruel Ares. As numerosas mortes resultantes das guerras causadas por Ares se
                    tornavam habitantes do mundo dos mortos de Hades. Ao que parece Hades tinha participação
                    ativa nos conflitos entre Atena e Ares.
                </span>
            )}
            {selectedSection === 'OS CAVALEIROS EM PERIGO' && (
                <span>
                    Diz-se que as batalhas entre os quatro exércitos de Ares e os Cavaleiros de Atena pareciam 
                    sem fim. A história diz que 58 Cavaleiros participaram deste conflito, aquele era o número
                    total dos cavaleiros nesse tempo (mesmo na era atual, nunca foi obtido o numero de 88 
                    cavaleiros sendo que existiam armaduras que nunca tiveram seus donos), mas a ação dos 
                    cavaleiros de bronze, prata e ouro eram inúteis, pois a batalha se seguiu com essa desvantagem 
                    e os Cavaleiros de Atena caíram pouco a pouco sob os golpes violentos dos Berserkers.
                </span>
            )}
            {selectedSection === 'OS CAVALEIROS DESCONHECIDOS' && (
                <span>
                    Reconhece-se que sem dúvida o número total de cavaleiros é de 88, mas os mistérios relativos 
                    à sua distribuição ainda existem. Os cavaleiros de ouro têm por constelações o zodíaco, que 
                    são 12. Os Cavaleiros de prata são o dobro, 24, e consequentemente são 48 cavaleiros de bronze.
                    Essa é a estrutura conhecida, mas se estes números forem somados, se obtém 84. Então quem são
                    os outros quatro cavaleiros...?
                </span>
            )}
            {selectedSection === 'A DERROTA DE ARES' && (
                <span>
                    Atena autorizou o Cavaleiro de Libra a usar suas armas contra os exércitos de Ares. Diz-se
                    que os cavaleiros que recebiam as armas de Libra eliminavam os Berserkers rapidamente e 
                    Ares, que havia perdido seu exército, se refugiou para o mundo dos mortos.

                </span>
            )}
            {selectedSection === 'A ARMADURA DE LIBRA' && (
                <span>
                    Quando desmontada, a armadura de ouro de Libra se converte em doze armas distribuídas em
                    seis categorias diferentes. Mas os cavaleiros que devem dar seus corpos como armas não 
                    têm o direito de usar armas. Os cavaleiros não podem usá-las a não ser que Atena e o cavaleiro
                    de Libra reconheçam como justo seu uso. O que não se afirma nas últimas guerras santas.
                    O conflito contra os Berserkers é o único exemplo confirmado do uso das armas da armadura de Libra.
                </span>
            )}
            {selectedSection === 'A ERA DOS HUMANOS' && (
                <span>
                    "A descoberta da Ilha da Rainha da Morte" Um dia, um cavaleiro descobriu uma ilha 
                    situada exatamente na parte de baixo do Equador e uma quantidade enorme de caixas 
                    de armaduras de um formato que nunca tinha visto. Esta ilha onde dormiam e estavam 
                    às caixas de armaduras é uma parte do continente de Mu que foi perdido, mais tarde 
                    sendo chamada como a Ilha da Rainha da Morte.

                </span>
            )}
            {selectedSection === 'AS ARMADURAS NEGRAS' && (
                <span>
                    Diz-se que entre as caixas das armaduras descobertas na Ilha da Rainha da Morte estavam
                    às armaduras negras. Nenhum cavaleiro quis utilizar as armaduras negras. Logo, diz-se 
                    que os soldados rejeitados como cavaleiros e os soldados que obtiveram uma força 
                    superficial sem poder para se transformar em cavaleiros, reuniram-se na Ilha da 
                    Rainha da Morte e usaram estas armaduras.

                </span>
            )}
            {selectedSection === 'A ILHA DA RAINHA DA MORTE' && (
                <span>
                    Atena, que desaprovava os cavaleiros negros que usavam o poder dos cavaleiros com 
                    propósitos egoístas e pessoais, isolou a Ilha da Rainha da Morte, selando-a assim.
                    A existência de mais cavaleiros negros não foi verificada até que Ikki quebrou 
                    este isolamento.

                </span>
            )}
            {selectedSection === 'O MISTÉRIO DA MÁSCARA DE GUILTY' && (
                <span>
                    A Ilha da Rainha da Morte foi selada e protegida por um cavaleiro de poder incomensurável.
                    Este cavaleiro tinha que usar uma máscara e lutar contra os cavaleiros negros que 
                    quisessem quebrar o selo.
                </span>
            )}
            {selectedSection === 'O PRIMEIRO HOMEM QUE UTILIZA A ARMADURA DE FÊNIX' && (
                <span>
                    Aquele que conquistar a mais poderosa armadura de bronze, a armadura de Fênix, deve 
                    ter o cosmo que possa desencadear o poder desta armadura. E para isso, se dizia que 
                    nunca uma pessoa seria digna desta armadura. Aparentemente um erro, há um homem digno
                    para levá-la e ele apareceu. Este homem é Ikki, o primeiro a utilizar a armadura de Fênix.
                </span>
            )}
            {selectedSection === 'A ÚLTIMA GUERRA SANTA' && (
                <span>
                    A guerra Santa mais recente foi há 243 anos. Neste tempo, se dizia que havia 79 cavaleiros,
                    o maior número de cavaleiros reunidos da história estava presente, mas não houve muitos 
                    sobreviventes no fim desta guerra e somente o cavaleiro de libra, Dohko dos cinco picos 
                    de Rozan, que é o que ainda vive no tempo atual. Diz-se também que nesta guerra Santa foi
                    um conflito duro onde quase todos os cavaleiros acabaram mortos, o sinal precede que uma
                    guerra Santa deve aparecer. Quando será esta próxima guerra Santa?
                </span>
            )}
            {selectedSection === 'A VIGÍLIA DE DOHKO' && (
                <span>
                    Graças ao grande sacrifício de numerosos cavaleiros, na guerra Santa precedente, Dohko 
                    mal chegando à superfície da terra e ao término dos agradecimentos a Atena, que trancou
                    e selou os espíritos malignos, ele já foi requisitado para vigiar estes espíritos malignos,
                    já que era um cavaleiro que sobreviverá a guerra Santa anterior. Quando se considera o 
                    poder de Dohko e do fato desta missão ter lhe sido confiada, é obvio que deve ser dito 
                    que estes espíritos malignos são muito poderosos.
                </span>
            )}
            {selectedSection === 'A PURIFICAÇÃO DO SANTUÁRIO' && (
                <span>
                    Atena (Saori Kido), a fim limpar o mal que existia no Santuário, o atacou com cinco cavaleiros
                    de bronze para purificá-lo.
                </span>
            )}
            {selectedSection === 'O ANTIGO MESTRE DO SANTUÁRIO' && (
                <span>
                    O antigo Mestre do Santuário, que lutou junto de Dohko na Guerra Santa precedente, foi 
                    morto por Saga, que tomou seu lugar, enganando todo mundo.

                </span>
            )}
            {selectedSection === 'OS CAVALEIROS DE OURO ALIADOS A SAGA' && (
                <span>
                    O que é interessante na purificação do Santuário por Atena é que havia cavaleiros do 
                    ouro que seguiam o grande mestre mesmo sabendo que o mesmo era maligno. Os Cavaleiros
                    de Atena, os guerreiros que protegem a justiça e que pensam que "a força é a justiça"
                    são bastante anormais. Será que alguém havia plantado as sementes de mal?

                </span>
            )}
            {selectedSection === 'Nascimento do Mundo e a Grande Vontade (Big Will)' && (
                <div>
                    <p className="mt-4">
                    No começo dos tempos somente havia o Nada (o Caos). Duas entidades não materializadas 
                    apareceram: o Céu (Urano) a a Terra (Gaia). De sua união nasceu a primeira raça: Titãs 
                    e Gigantes. Mas desde o começo, os Titãs se sobrepuseram aos Gigantes.
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/Titas-nomes.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Então veio o Big Bang, criado pelos Titãs (e aparentemente por Cronos, em especial). 
                    Foi o nascimento de um Universo em expansão. O Big Bang se espalhou pelo Cosmo dos raios 
                    de luz que deram vida a tudo que tocaram. Esses raios de luz eram chamados de Grande
                    Vontade (Big Will, no original). A Grande Vontade corresponde ao Nono Sentido, o sentido
                    supremo que inclui os outros oito. Como se sabe, todo ser humano tem cinco sentidos 
                    (visão, audição, tato, paladar e olfato). Eles também possuem um sexto sentido que alguns
                    desenvolvem, a intuição. O Sétimo Sentido, o Cosmo Definitvo (Ultimate Cosmo), torna 
                    possível aumentar o nível de poder equivalente aos Cavaleiros de Ouro, e o Oitavo, o 
                    Arayashiki, torna possível manter-se vivo no Mundo dos Mortos, e não se tornar um 
                    prisioneiro de lá. Shaka (que é a reencarnação de Shakyamuni, o primeiro Buda) foi 
                    o primeiro a despertar o Oitavo Sentido, e é por isso que ele é chamado de “homem mais
                    próximo de Deus” (Kami no mottomo chikai otolo). Por último, o Nono Sentido, Grande 
                    Vontade (Big Will ou Divine Will), permite a imortalidade do coração, mas não do corpo.
                    É por isso que os deuses são obrigados a reencarnar regularmente (em um ciclo que dura
                    cerca de 250 anos). Qualquer um que consiga despertar o Nono Sentido se tornará uma 
                    divindade. Foi o que aconteceu com Buda, que alcançou o Nirvana após anos de meditação,
                    assim como é o caso de Cristo. Um dia, o Big Will, símbolo do poder espiritual, 
                    revelou-se ao mundo. O Big Will é o poder dos deuses, os humanos não podem compreender
                    sua real natureza.
                    </p>
                </div>
            )}   
            {selectedSection === 'A Era dos DEUSES' && (
                <div>
                    <p className="mt-4">
                    Embora a imortalidade do coração esteja assegurada, os deuses só reencarnam com intervalos 
                    regulares… Muito rapidamente, as guerras acontecem entre as várias divindades e sua ira 
                    se reflete nos homens, que se transformaram em seus mensageiros. Prometeu está na origem 
                    da humanidade. Um dia, andando pela Terra deserta, ele decidiu modelar seres de barro a 
                    quem chamaria “homens”. Esses homens foram criados com a imagem de deuses. Esses seres 
                    não possuíam vida, e Atena interviu e deu-lhes um coração. Zeus, satisfeito com o presente 
                    que sua filha havia oferecido à humanidade, ofereceu a ela a responsabilidade pela Terra e 
                    pela proteção daqueles a quem ela tinha dado vida. Mas a presença de novos seres na Terra 
                    deu origem a um sentimento de irritação e hostilidade em outros deuses, e isso levou a 
                    muitos conflitos. Uma série de Guerras Santas teve início. Somente três deuses não possuem 
                    forma nem vontade humana, são de natureza espiritual: Gaia (a Terra), Uranos (o Céu) e 
                    Pontos (o Oceano).
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/Deuses-Zeus-Hades-e-Poseidon.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Zeus, Hades e Poseidon foram os primeiros com forma e vontade humana a alcançar o “Big Will” 
                    e a serem adorados como deuses. Eles assumiram o controle da Terra, do Reino dos Mortos e dos 
                    Oceanos. Por seu domínio do “Big Will”, esses deuses ganharam uma alma imortal, porém seus 
                    corpos são mortais. Eles, assim, têm que encarnar regularmente (a cada 250 anos em média) 
                    e alcançar o “Big Will” de novo. Desta maneira, Saori Kido se tornou Atena somente quando 
                    realmente descobriu quem era e quando se tornou madura o suficiente para usar seu Cosmo, 
                    justamente antes das batalhas contra o Santuário. Naturalmente você pode ver no mangá que 
                    quem revela a identidade de Atena aos Cavaleiros é a própria Saori, não Tatsumi… Mas talvez 
                    ela mesma tenha descoberto a verdade muito antes do começo do mangá… Quem sabe? Julian Solo 
                    tornou-se Poseidon somente no penúltimo episódio da série…
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/Poseidon.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    (Bom, sobre a Saori tornar-se Atena somente após algum tempo, é algo contestável, já que ela 
                    salvou Kanon, através de seu cosmo, quando ainda era recém-nascida) Não há rastro de Zeus em 
                    Saint Seiya, mais talvez essa não seja toda a verdade…Diz a lenda que Zeus desapareceu um dia, 
                    deixando a soberania da Terra à Atena. Costuma-se dizer que: “Se entenderá o significado da 
                    vida quando se entender as razões da partida”. De qualquer maneira, é óbvio no mangá, mesmo 
                    não dito explicitamente, que Zeus reencarnou em Mitsumasa Kido, o fundador da Fundação Graad. 
                    Depois de cuidar um pouco de Saori, desapareceu de novo e voltou a reger sobre o céu, como 
                    podemos ver quando Saori esta falando com ele no planetário. Além do mais, quem poderia ter 
                    sido capaz de seduzir tantas mulheres em tão pouco tempo?
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/Mitsumasa-Kido.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                </div>
            )}  
            {selectedSection === 'AS GUERRAS SAGRADAS' && (
                <div>
                    <p className="mt-4">
                    As Guerras Sagradas são batalhas entre os deuses, e assim também entre os humanos que os veneram. 
                    Essas guerras sempre tem como motivo a possessão da Terra, que é de Atena. O primeiro deus que 
                    “enlouqueceu” dentre todos foi Poseidon, deus dos Mares. Determinado totalmente a conquistar o 
                    mundo, ele rodeou-se com sete guerreiros extremamente poderosos, cada um representando um dos 
                    mares, e os nomeou Generais. Ofereceu aos seus Generais e Marinas armaduras de origem desconhecida 
                    (provavelmente criadas pelo próprio Poseidon), chamadas de Escamas (Scales); Os monstros mitológicos 
                    como sirenes (bruxa do mar), sereias, krakens, foram inspiradas pelas formas destas armaduras, 
                    não o contrário.
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/marinas.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Foram feitas de Oricalco (orichalchum), um metal que de acordo com uma lenda Selenia provém de um 
                    meteoro vindo das proximidades de Saturno e que se chocou em Atlântida há muito tempo atrás. Qualquer 
                    um que utilize armas feitas a partir desse material poder ser invencível… (O oricalco, segundo Platão, 
                    era um metal extremamente resistente, usado na Atlândida.) A guerra começa. Poseidon envia seus exércitos, 
                    e Atena, que odiava a violência, envia jovens cujas únicas armas eram seus punhos e a coragem. Todos os 
                    seus guerreiros morriam um a um e somente jovens garotos ainda estavam dispostos a lutar (em memória deste 
                    fato, somente adolescentes estão autorizados a se tornarem Cavaleiros…). Assim, Poseidon rapidamente 
                    avançou sem encontrar resistência. Atena não queria ver seus guerreiros sofrendo e decidiu dar a eles 
                    armaduras.
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/armaduras-alquimistas-1024x217.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Para essa tarefa, chamou os alquimistas do continente onde viviam os ancestrais de Mu, o qual se localizava 
                    no meio do Oceano Pacífico e forjaram estas armaduras. Atena mesma as desenhou, inspirada nas formas que via 
                    em cada uma das 88 constelações. Um Cavaleiro assim teria que estar em harmonia com a constelação que inspira 
                    sua armadura para estar autorizado a usá-la; Em outras palavras, tem que estar protegido por estrelas de uma 
                    constelação, assim como os cavaleiros de ouro precisam ser do mesmo signo de suas armaduras. Kurumada já 
                    havia deixado indicado no mangá que Mu era descendente do povo desse continente desaparecido, chamado 
                    Lemúria, ou Terra de Mu segundo alguns. Essa civilização teria conhecimentos muito mais avançados que 
                    os nossos. Estas armaduras não foram feitas de Oricalco, sim de Gamânio (gammanium, dito o metal mais 
                    resistente) e de pó de estrelas, o qual contém o “Big Will” e dá vida as armaduras… Mu restaurou duas 
                    vezes com este pó as armaduras dos Cavaleiros de Bronze para fazê-los mais fortes. As armaduras tem 
                    corações, aptos a reconhecer o valor de um cavaleiro (percebe-se bem isso no caso de Máscara da Morte), 
                    a se desenvolverem/mudarem de forma (as de bronze o fazem diversas vezes) mas também a morrer. Portanto, 
                    quando uma armadura morre, um cavaleiro deve dar dois terços de seu sangue para ressuscitá-la. Se uma armadura 
                    não morresse, mas se ferisse, ela poderia se regenerar sozinha em sua Caixa de Pandora. Talvez as armaduras de 
                    Atena não sejam feitas de Oricalco, mas no mangá Mu usa Oricalco para restaurar as armaduras de Shiryu e Seiya. 
                    Mu e Kiki são os últimos descendentes da gente do antigo continente…Este mítico continente foi absorvido 
                    pelos mares faz muito tempo durante outra Guerra Sagrada, na qual se enfrentaram os Cavaleiros e os Titãs, 
                    seres que provocaram A Grande Explosão (Big Bang), que provavelmente fez vir à terra a vontade de Hades. O 
                    poder das armaduras dependia de sua categoria (há 12 de Ouro, 24 de Prata, 48 de Bronze e 4 de origem 
                    desconhecida que Masami Kurumada não mencionou, nem utilizou no mangá). Essa contagem é contradita pelo mangá 
                    da Saga G, segundo o qual existem 12 armaduras de ouro, 24 de prata e 54 de bronze, ou seja, não há as 4 
                    armaduras de origens desconhecidas. Atena então cria a Ordem dos Cavaleiros (Athena Holy No). Desde então, 
                    ela reencarna na Terra justamente antes do começo de cada Guerra Sagrada para dirigir seus guerreiros, 
                    reunidos no Santuário sob às ordens do Mestre (Kyoko, em japonês) o qual executa a vontade da deusa. Com a 
                    ajuda de suas armaduras, os Cavaleiros repelem os Marinas aos mares. Poseidon, cego de raiva, reúne então seus 
                    guerreiros em seu templo gigante situado em Atlântida (ou Atlântis).
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/atena-aprisiona-poseidon.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Atena, decidida a acabar com a Batalha, envia oito de seus Cavaleiros para destruir o templo, os Marinas e 
                    mandar todo o continente diretamente às profundezas. A deusa então encerra a alma de Poseidon em uma ânfora 
                    no Pólo Norte e envia alguns Cavaleiros a resguardá-lo. Estes Cavaleiros estabelecem-se lá e, com o tempo, 
                    esquecem suas origens e se tornam os Blue Warriors (eles só aparecem no mangá que ademais são protótipos dos 
                    guerreiros deuses de Asgard).
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/alexei-natassia-blue-warriors.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Seriam os Blue Warriors guerreiros de Atena? Segundo Camus, eles são guerreiros da mitologia nórdica. Essa 
                    primeira Guerra Sagrada entre Atena e Poseidon foi a primeira de uma série de sete outros confrontos que se 
                    seguiram. Na época do segundo levante do Imperador dos Mares, este havia instalado seu Templo sob o Mediterrâneo, 
                    perto do Cabo Sounion, onde a deusa aprisionava seus rebeldes. Por isso o Mediterrâneo encontra-se sobre o Pilar 
                    Central (Hand Blade Winner).
                    </p>
                </div>
            )}     
            {selectedSection === 'NASCIMENTO DE UMA LENDA' && (
                <div>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/Santuario-12-casas-cavaleiros-de-ouro.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Depois de sete gerações, Atena constrói o Santuário, constituído de doze templos, as doze casas do zodíaco, 
                    defendidas pelos cavaleiros de ouro, perto da cidade de Atenas. Nisso então segue um período caótico, durante 
                    o qual a deusa e seus Cavaleiros tem que confrontar os Gigantes, que haviam sido dominados pelos Titãs no 
                    passado (esta guerra contra os Gigantes é chamada de Gigantomaquia). A mesma Atena teve que intervir para 
                    derrotar o último e mais poderoso deles, Encélado, que foi encarcerado sob a Sicília. Diz a mesma lenda 
                    que: “O Monte Etna é a abertura pela qual Encélado despeja o fogo de sua ira “. Outra lenda posterior diz 
                    que o prisioneiro do monte não é Encélado e sim Tífon que havia sido derrotado anteriormente por Zeus. 
                    Gigantomachia é um termo usado para designar batalhas entre os deuses (não necessariamente gregos), pela 
                    hegemonia no mundo. No Japão está sendo escrita (não por Kurumada) uma história de Saint Seiya narrando 
                    essa guerra. Depois desta guerra, os Cavaleiros tiveram que lutar com o deus Ares, amigo de Hades. Esta 
                    luta foi sem dúvida a mais terrível. Ares dirigiu os seus Berserkers (assim que se chamam seus guerreiros), 
                    organizados em quatro legiões (Terror, Fogo, Chamas e Calamidade) a destruir os 58 Cavaleiros ativos neste 
                    momento (igual ao número de Cavaleiros na geração de Seiya).
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/armas-da-armadura-de-libra.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    A deusa decidiu, sem outra alternativa, por primeira e última vez antes do começo da série, permitir ao 
                    Cavaleiro de Libra utilizar as armas de Oricalco que são parte de sua armadura sagrada… Os Cavaleiros foram 
                    então capazes de repelir Ares ao Mundo dos Mortos, o que causou indiretamente o primeiro conflito entre 
                    Atena e Hades… Nesse tempo, Hades foi ferido, pelo Cavaleiro de Pégaso, bastante parecido com Seiya. É 
                    interessante notar que as armas de Libra, ao contrário das outras armaduras, foram feitas de Oricalco, o 
                    que explica o fato delas conseguirem destruir o esquife de gelo de Camus e os 7 Pilares dos marinas.
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/hades-e-pegaso.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Quanto ao cavaleiro de Pégaso que feriu Hades, ele é mencionado pelo próprio deus, que diz que Seiya é 
                    idêntico ao único homem que o havia ferido. Foi após essa Batalha que um jovem cavaleiro foi recompensado 
                    por sua honestidade perante Atena, sendo dada a ele a legendária espada Excalibur pela deusa e foi elevado 
                    a categoria de Cavaleiro de Ouro de Capricórnio.
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/excalibur-capricornio.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                </div>
            )}     
            {selectedSection === 'CALMARIA ANTES DA TEMPESTADE' && (
                <div>
                    <p className="mt-4">
                    E os dias pacíficos passaram. Mais adiante, um inferno sobre a Terra, a pequena 
                    Ilha da Rainha da Morte, foi descoberta no meio do Oceano Pacífico, na Linha do 
                    Equador. Foi o lugar perfeito para que alguns alquimistas rebeldes forjassem os 
                    protótipos das armaduras negras. Estas armaduras eram muito poderosas, apesar de 
                    não serem reconhecidas oficialmente por Atena. A ilha na verdade era uma parte 
                    montanhosa do continente desaparecido de Mu. A ilha se tornou com o tempo o único 
                    lugar ao qual iam todos os homens que não tiveram a força e o espírito necessário 
                    para se converter em Cavaleiro, porque obter uma armadura ali era possível.
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/cavaleiros-negros.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Os alquimistas rebeldes não puderam (não tiveram tempo nem conhecimento, já que seu 
                    continente despareceu em curto tempo) produzir algo mais que simples cópias das armaduras 
                    de Bronze. Eles se concentraram em produzir cópias da armadura de Fênix, que se dizia 
                    ser a mais poderosa entre aquelas que eles conheciam.
                    Mas é claro que essas cópias da armadura de Fênix não possuem os mesmos poderes da original.
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/guilty-esmeralda.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    A deusa decidiu então enviar um Cavaleiro à Ilha, para evitar que estas armaduras 
                    deixassem esse lugar. Este Cavaleiro teria de ser poderoso, mas ao mesmo tempo não 
                    muito importante para não fazer falta ao Santuário, já que teria que viver na Ilha 
                    para sempre. Mestres sucessivamente enviaram assim os seus guerreiros mais cruéis à 
                    ilha, e eles eram obrigados a usar uma máscara que simbolizava o compromisso com a 
                    Ilha. A máscara foi realmente o símbolo da ilha, qualquer um que quisesse sair dali 
                    teria que destruir o portador da máscara ou jurar nunca abandonar a ilha. Mas também 
                    se podia acabar com aquele que possuía a máscara muito antes! 
                    Guilty, pai adotivo de Esmeralda e mestre de Ikki foi um deles.
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/Ikki-de-Fenix.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Também é preciso dizer que Ikki foi o primeiro homem da história a obter a armadura 
                    sagrada de Fênix… Já que ninguém antes dele teve o cosmo suficiente para canalizar a energia de Fênix.
                    </p>
                </div>
            )}     
            {selectedSection === 'RUMO AO HADES' && (
                <div>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/espectros-de-hades-x-atena-cavaleiros.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Em 1743, o príncipe da escuridão regressa a Terra… Hades declara guerra a toda humanidade, 
                    só por repugnância a nós. Com 79 armaduras sagradas ativas, (o número mais alto já alcançado, 
                    essa guerra foi terrível para os cavaleiros de Atena, sendo que somente dois Cavaleiros 
                    sobreviveram a esta terrível batalha: Shion de Áries (outro descendente do povo de Mu), 
                    que foi nomeado Mestre posteriormente e Dohko de Libra, futuro mestre de Shiryu. Todos 
                    cavaleiros caem perante a violência dos 108 Espectros, ou Estrelas Maléficas de Hades, 
                    protegidos por suas escuras Sapuris, de origem desconhecida. Ao final da Batalha, Shion
                     se tornará o novo Grande Mestre (o mesmo que seria morto por Saga 230 anos depois) e 
                     Dohko será encarregado de vigiar a torre, situada perto dos Cinco Picos Antigos, no 
                     qual haviam sido presas as almas dos 108 Espectros. Para tanto, Atena concedeu-lhe o 
                     dom da Misopheta Menos, que simulava o envelhecimento natural quando na verdade ele 
                     envelhecia apenas um dia por ano.
                     Esse número de 79 armaduras é contradito no mangá da Saga de Hades, que diz 
                     que 88 cavaleiros lutaram nessa Guerra.
                     Sobre as “almas dos 108 Espectros”, elas provavelmente são as “Estrelas Maléficas”. 
                     Isso quer dizer que os espectros só puderam utilizar todo seu poder quando o selo de 
                     Atena se quebrou e as Estrelas Maléficas foram libertadas.
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/shun-hades.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                    <p className="mt-4">
                    Hades tentará sua vingança somente em 1973… Aguardando pacientemente para reencarnar no corpo de Shun.
                    Foi Hades quem perverteu a alma de Saga no tempo do Santuário para preparar sua vinda. Um projeto que 
                    impediria a ação dos Cavaleiros, sendo este o dia apropriado aos para os Espectros invadirem o Santuário 
                    afim de neutralizar Atena. A guerra que se anunciaria tombaria a maior parte dos valentes Cavaleiros, 
                    mas eles fizeram de tudo para proteger Atena, com bravura em honra do deus dos deuses.
                    </p>
                    <img
                    src="https://diegomaryo.cdz.com.br/wp-content/uploads/2011/12/Saga-Ares.png" 
                    className="w-100 h-auto rounded-lg shadow-lg"
                    />
                </div>
            )}             
        </div>
      </div>
    </div>
  );
}

