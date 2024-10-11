"use client";

import { useState, useEffect } from 'react';

export default function HipermitoPage() {
  const sections = [
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

  const [selectedSection, setSelectedSection] = useState(sections[0]);

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
  }, []);

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

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-500 text-center mb-12 animate-fade-in-down">
        O Hipermito - Saint Seiya
      </h1>

      {/* Botões de controle do carrossel */}
      <div className="relative flex items-center justify-between mb-8 px-16">
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
          className="flex space-x-6 overflow-x-auto no-scrollbar items-center py-4 mx-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`whitespace-nowrap px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 hover:bg-yellow-500 hover:text-gray-900 ${
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
        <p className="mt-2">
          {/* Placeholder para o conteúdo da seção */}
            {selectedSection === 'A ERA DA CRIAÇÃO DO UNIVERSO' && (
                <span>
                    "O grande Deus do tempo: Cronos"
De acordo com o Hipermito, Cronos está vinculado diretamente ao ser que deu início ao Big
Bang, consequentemente ao nascimento do Universo. De acordo com a mitologia, Cronos é o
pai de Zeus!!!
                </span>
            )}
            {selectedSection === 'O BIG BANG' && (
                <span>
                    "O mistério que existiu antes do Big Bang (Grande Explosão)"
O começo do Hipermito é o Big Bang. Como era o universo antes disso? Qual a sua ligação com
o Hipermito? Hoje em dia ninguém no mundo sabe algo sobre o Big Bang!!!
                </span>
            )}
            {selectedSection === 'O NASCIMENTO DO UNIVERSO' && (
                <span>
                    "A Suprema Virtude movimenta o Universo"
Big Will (Suprema Virtude) foi criada devido ao Big Bang, expandindo-se como feixes de luz que
formaram as estrelas que brilham no céu e os planetas. Estes deram forma ao Universo que
vivemos hoje. Mas qual seria a origem da Suprema Virtude?

                </span>
            )}
            {selectedSection === 'A ERA DA CRIAÇÃO DA TERRA' && (
                <span>
                    "O nascimento da vida"
Segundo o Hipermito, um raio de luz da Suprema Virtude se transformou no planeta Terra, que
criou o seu solo (Gaia), céu (Urano) e os oceanos (Pontos), antes do surgimento da vida. Esta
vida se criou, mais tarde, da imagem e semelhança da energia da Suprema Virtude e assim
nasceu o ser humano.
                </span>
            )}
            {selectedSection === 'A ERA DOS DEUSES' && (
                <span>
                    "Zeus, Poseidon e Hades"
Visto que a humanidade se tornou numerosa, alguns seres começaram despertar a Suprema
Virtude. A descoberta do alvorecer do cosmo deve-se ao sétimo sentido e a descoberta da
Suprema Virtude só é possível a quem possui o oitavo e nono sentido. Consequentemente,
três homens apareceram e mostraram-se capaz de despertar a Suprema Virtude, tornando-se
poderosos e imortais. Eles são: Zeus, Hades e Poseidon. Considerados como deuses pela
humanidade, cada um desenvolveu seu território. Zeus fez de seu reino a terra e o céu,
Poseidon os oceanos e Hades o plano dimensional aonde as almas vão após a morte.

                </span>
            )}
            {selectedSection === 'A MITOLOGIA MUNDIAL E O HIPERMITO' && (
                <span>
                    Na época do Hipermito, diferentes deuses apareciam em vários mitos no mundo. Eles são os
seres humanos que podem mostrar a Suprema Virtude em si próprios. Por isso, não tome
como base a mitologia grega e sim o Hipermito.
                </span>
            )}
            {selectedSection === 'O NASCIMENTO DE ATENA' && (
                <span>
                    De acordo com a mitologia grega, Atena nasceu da cabeça de Zeus, mas o Hipermito não dá
detalhes precisos deste nascimento. Embora, exista uma teoria que diga sobre o assunto, uma
verdadeira missão surgiu no nascimento da deusa Atena!
                </span>
            )}
            {selectedSection === 'ATENA POSSUI UMA ARMADURA?' && (
                <span>
                    Segundo a mitologia grega, Atena nasceu com uma lança e um escudo, além de um elmo e
uma armadura. Caso o fato seja verdadeiro, com certeza em breve ela deverá utilizar a sua
armadura!
                </span>
            )}
            {selectedSection === 'O DESAPARECIMENTO DE ZEUS' && (
                <span>
                    "Onde está Zeus?"
Sabe-se que um dia Zeus confiou a terra à Atena e desapareceu partindo para uma
extremidade profunda do céu. O Deus onipotente desapareceu de repente? Zeus: por que ele
sumiu? Por que ele deixou a terra para Atena? Qual o verdadeiro objetivo dele? No Hipermito,
a existência de Zeus está cercada de inúmeros mistérios que se forem solucionados, permitirão
desvendar o verdadeiro Hipermito.

                </span>
            )}
            {selectedSection === 'POSEIDON INICIA OS PREPARATIVOS PARA INVADIR A TERRA' && (
                <span>
                    "O deus dos mares: Poseidon!"
Poseidon, sabendo do desaparecimento de Zeus, decide dominar a terra e começa a se
preparar para vencer Atena. Ele reune os mais poderosos guerreiros do sete mares, nomeados
mais tarde de Marinas. Poseidon estabeleceu um reino submarino, mas sempre sonhou em
dominar a terra. De acordo com a mitologia grega, Poseidon teve o talento para criar todas as
classes de seres vivos. Esta pode ser uma maneira interpretar a criação das escamas (scales)
para seus guerreiros.
                </span>
            )}
            {selectedSection === 'A INVASÃO DA TERRA POR POSEIDON' && (
                <span>
                    "A primeira Guerra Santa"
O deus dos mares, Poseidon, desejando torna-se o deus da terra, começou a invadir a
superfície, território de Atena. Os soldados da terra eram impotentes perto do poder
invencível dos marinas (guerreiros de Poseidon). Sabe-se que Hades observou toda a guerra do
fundo do mundo dos mortos.
                </span>
            )}
            {selectedSection === 'OS GUERREIROS INVENCÍVEIS: OS MARINAS!' && (
                <span>
                    As armaduras que vestem os marinas são chamadas de Escamas. São feitas de Oricalco e
nenhuma arma da terra poderia vencê-las. Como nenhuma arma da terra permitia os
guerreiros se protegerem dos golpes dos Marinas, os guerreiros da terra morreram diante os
Marinas.
                </span>
            )}
            {selectedSection === 'ATLÂNTIDA, A FORTALEZA FINALMENTE É TERMINADA!' && (
                <span>
                    Poseidon estabelece sua base para a invasão da terra, uma enorme fortaleza em pleno Oceano
Atlântico, na cidade de Atlântida. Após a construção desta fortaleza, a invasão de Poseidon foi
feita de forma mais intensa. Devido ao seu tamanho colossal, Atlântida ficou conhecida como a
"fortaleza continental". O poder de defesa era imenso, com dezenas de milhares de soldados.
Sua existência é contada na história até hoje, como o famoso continente perdido de Atlântida.

                </span>
            )}
            {selectedSection === 'O NASCIMENTO DOS CAVALEIROS DE ATENA' && (
                <span>
                    A maioria dos guerreiros da terra morreram durante os ataques repetidos dos marinas. Com
isso não houve outra solução: jovens e crianças teriam que lutar também. Como Atena não
admite armas, estes jovens utilizavam os corpos como armas, rasgando o céu com seus punhos
e rompendo a terra com seus pés. Atena não gostava que os jovens se ferissem então resolveu
dar proteções chamadas Armaduras. Os jovens que vestiam as armaduras eram chamados de
Cavaleiros de Atena.
                </span>
            )}
            {selectedSection === 'AS ARMADURAS SÃO BASEADAS NAS CONSTELAÇÕES?' && (
                <span>
                    As 88 constelações que brilham no céu surgiram de acordo com o desejo de Atena e são estas
constelações que as armaduras são baseadas. Com isso, os Cavaleiros só podem vestir uma
armadura referente à sua constelação protetora.
                </span>
            )}
            {selectedSection === 'AS ARMADURAS' && (
                <span>
                    Os alquimistas do continente de Mu construíram as armaduras que protegem os Cavaleiros de
Atena. As armaduras podem se auto curar pois foram desenvolvidas com Oricalco, Gamânio e
pó das estrelas. Em caso de danos menores, as armaduras devem ficar guardadas na Caixa de
Pandora (caixa das armaduras) aonde irão se recuperar sozinhas.

                </span>
            )}
            {selectedSection === 'A DERROTA DE POSEIDON!' && (
                <span>
                    Devido o nascimento dos Cavaleiros, a situação da guerra mudou e Atena tentava convencer
Poseidon para que ele deixasse suas ambições de lado e voltasse para seus oceanos. Mas
Poseidon ignorou o pedido de Atena e as lutas continuaram em Atlântida, causando
terremotos e maremotos que inundaram toda a terra. Apenas Noé, sua família e sua Arca
(repleta de animais de diversas espécies) se salvaram. O grande número de mortos causou a
ira de Atena que enviou oito Cavaleiros de Atena até Atlântida. Depois de um duro combate,
os Cavaleiros saíram vitoriosos e destruíram Atlântida.
                </span>
            )}
            {selectedSection === 'A ORIGEM DOS GUERREIROS AZUIS (BLUE WARRIORS)' && (
                <span>
                    Após ter vencido Poseidon, Atena selou sua alma e enviou-a para o Pólo Norte. Escolheu vários
Cavaleiros para vigiá-la. Estes cavaleiros criaram um reino nestas terras, onde mais tarde
renunciaram ao cargo de cavaleiros de Atena e se tornaram os Guerreiros Azuis (Blue
Warriors).

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
Suprema Virtude é chamada de Guerra Santa. Quando o mal chega ao Mundo, com Atena
renascida na terra e sob as ordens do Grande Mestre, os Cavaleiros se reúnem no Santuário.
As Guerras Santas acontecem a cada 250 anos em média.

                </span>
            )}
            {selectedSection === 'A ERA DO CAOS' && (
                <span>
                    "Os combates contra os Gigas: a Gigantomaquia (a batalha contra os gigantes)"
Depois que os Cavaleiros de Atena terminaram muitas Guerras Santas, eram os Gigas, uma
raça de gigantes, que ameaçavam o Santuário. A existência destes gigantes continua sendo
duvidosa e suas origens são desconhecidas ainda. Seu poder de batalha excedeu ao dos
Cavaleiros. Acredita-se que tenha sido Hades ou Zeus que trouxeram estas criaturas ao
universo, anteriormente ao Big Bang. A batalha contra ao Gigas não é considerado uma Guerra
Santa e é chamada Gigantomaquia.

                </span>
            )}
            {selectedSection === 'BATALHA CONTRA GIGANTES' && (
                <span>
                    De acordo com a mitologia grega, o Gigantomaquia é a guerra com os gigantes enviados em
segredo pela deusa terra, Gaia, em uma caverna do norte da Grécia, na frente de Zeus e de
todos os deuses do Olimpo. O que é mais interessante é que o último dos gigantes morto foi
Encélado, cortado por Atena nesta mesma mitologia grega.
                </span>
            )}
            {selectedSection === 'O FIM DO CONTINENTE DE MU' && (
                <span>
                    Ao mesmo tempo, a terra original das armaduras, o continente de Mu, afundou e foi parar no
fundo do Oceano Pacífico. Muitas armaduras e alquimistas foram perdidos dentro das
construções durante esta catástrofe. A razão desta tragédia é desconhecida ainda.
                </span>
            )}
            {selectedSection === 'A ORIGEM DO CAVALEIRO DE OURO DE ÁRIES' && (
                <span>
                    Devido à perda do continente de Mu, das armaduras em produção, assim como as técnicas
para repará-las foram perdidas, o único que pode reparar armaduras hoje em dia é Cavaleiros
Dourado que vive em Jamiel, Mu de Áries. Existe uma teoria que diz que Mu seria um
descendente do continente de Mu...
Obs.: O nome do continente é Mu mesmo, o que provavelmente inspirou o nome do atual
Cavaleiro de Áries, Mu.

                </span>
            )}
            {selectedSection === 'A GUERRA CONTRA ARES' && (
                <span>
                    Entre todas as Guerras Santas, a que foi contra o deus da guerra Ares foi de longe a mais dura
para os Cavaleiros. Dizem que Ares é o mais violento de todos os deuses. Ele plantou as
sementes de conflito por todo o mundo e inspirou as guerras na humanidade. A armada de
Ares foi dividida em quatro exércitos: a do "fogo", a do "chama", a do "desastre" e do "terror".
Eram compostos de soldados sanguinários e destrutivos, sendo conhecidos como Berserkers
(soldados dementes que prolongam a destruição e a morte além de seus limites).

                </span>
            )}
            {selectedSection === 'HADES E ARES' && (
                <span>
                    De acordo com a mitologia grega, Hades estava um pouco relacionado a numerosos deuses, o
que incluía o cruel Ares. As numerosas mortes resultantes das guerras causadas por Ares se
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
cavaleiros de bronze, prata e ouro eram inúteis, pois a batalha se seguiu com essa
desvantagem e os Cavaleiros de Atena caíram pouco a pouco sob os golpes violentos dos
Berserkers.
                </span>
            )}
            {selectedSection === 'OS CAVALEIROS DESCONHECIDOS' && (
                <span>
                    Reconhece-se que sem dúvida o número total de cavaleiros é de 88, mas os mistérios relativos
à sua distribuição ainda existem. Os cavaleiros de ouro têm por constelações o zodíaco, que
são 12. Os Cavaleiros de prata são o dobro, 24, e consequentemente são 48 cavaleiros de
bronze. Essa é a estrutura conhecida, mas se estes números forem somados, se obtém 84.
Então quem são os outros quatro cavaleiros...?
                </span>
            )}
            {selectedSection === 'A DERROTA DE ARES' && (
                <span>
                    Atena autorizou o Cavaleiro de Libra a usar suas armas contra os exércitos de Ares. Diz-se que
os cavaleiros que recebiam as armas de Libra eliminavam os Berserkers rapidamente e Ares,
que havia perdido seu exército, se refugiou para o mundo dos mortos.

                </span>
            )}
            {selectedSection === 'A ARMADURA DE LIBRA' && (
                <span>
                    Quando desmontada, a armadura de ouro de Libra se converte em doze armas distribuídas em
seis categorias diferentes. Mas os cavaleiros que devem dar seus corpos como armas não têm
o direito de usar armas. Os cavaleiros não podem usá-las a não ser que Atena e o cavaleiro de
Libra reconheçam como justo seu uso. O que não se afirma nas últimas guerras santas. O
conflito contra os Berserkers é o único exemplo confirmado do uso das armas da armadura de
Libra.
                </span>
            )}
            {selectedSection === 'A ERA DOS HUMANOS' && (
                <span>
                    "A descoberta da Ilha da Rainha da Morte"
Um dia, um cavaleiro descobriu uma ilha situada exatamente na parte de baixo do Equador e
uma quantidade enorme de caixas de armaduras de um formato que nunca tinha visto. Esta
ilha onde dormiam e estavam às caixas de armaduras é uma parte do continente de Mu que
foi perdido, mais tarde sendo chamada como a Ilha da Rainha da Morte.

                </span>
            )}
            {selectedSection === 'AS ARMADURAS NEGRAS' && (
                <span>
                    Diz-se que entre as caixas das armaduras descobertas na Ilha da Rainha da Morte estavam às
armaduras negras. Nenhum cavaleiro quis utilizar as armaduras negras. Logo, diz-se que os
soldados rejeitados como cavaleiros e os soldados que obtiveram uma força superficial sem
poder para se transformar em cavaleiros, reuniram-se na Ilha da Rainha da Morte e usaram
estas armaduras.

                </span>
            )}
            {selectedSection === 'A ILHA DA RAINHA DA MORTE' && (
                <span>
                    Atena, que desaprovava os cavaleiros negros que usavam o poder dos cavaleiros com
propósitos egoístas e pessoais, isolou a Ilha da Rainha da Morte, selando-a assim. A existência
de mais cavaleiros negros não foi verificada até que Ikki quebrou este isolamento.

                </span>
            )}
            {selectedSection === 'O MISTÉRIO DA MÁSCARA DE GUILTY' && (
                <span>
                    A Ilha da Rainha da Morte foi selada e protegida por um cavaleiro de poder incomensurável.
Este cavaleiro tinha que usar uma máscara e lutar contra os cavaleiros negros que quisessem
quebrar o selo.
                </span>
            )}
            {selectedSection === 'O PRIMEIRO HOMEM QUE UTILIZA A ARMADURA DE FÊNIX' && (
                <span>
                    Aquele que conquistar a mais poderosa armadura de bronze, a armadura de Fênix, deve ter o
cosmo que possa desencadear o poder desta armadura. E para isso, se dizia que nunca uma
pessoa seria digna desta armadura. Aparentemente um erro, há um homem digno para levá-la
e ele apareceu. Este homem é Ikki, o primeiro a utilizar a armadura de Fênix.
                </span>
            )}
            {selectedSection === 'A ÚLTIMA GUERRA SANTA' && (
                <span>
                    A guerra Santa mais recente foi há 243 anos. Neste tempo, se dizia que havia 79 cavaleiros, o
maior número de cavaleiros reunidos da história estava presente, mas não houve muitos
sobreviventes no fim desta guerra e somente o cavaleiro de libra, Dohko dos cinco picos de
Rozan, que é o que ainda vive no tempo atual. Diz-se também que nesta guerra Santa foi um
conflito duro onde quase todos os cavaleiros acabaram mortos, o sinal precede que uma
guerra Santa deve aparecer. Quando será esta próxima guerra Santa?
                </span>
            )}
            {selectedSection === 'A VIGÍLIA DE DOHKO' && (
                <span>
                    Graças ao grande sacrifício de numerosos cavaleiros, na guerra Santa precedente, Dohko mal
chegando à superfície da terra e ao término dos agradecimentos a Atena, que trancou e selou
os espíritos malignos, ele já foi requisitado para vigiar estes espíritos malignos, já que era um
cavaleiro que sobreviverá a guerra Santa anterior. Quando se considera o poder de Dohko e do
fato desta missão ter lhe sido confiada, é obvio que deve ser dito que estes espíritos malignos
são muito poderosos.
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
                    O que é interessante na purificação do Santuário por Atena é que havia cavaleiros do ouro que
seguiam o grande mestre mesmo sabendo que o mesmo era maligno. Os Cavaleiros de Atena,
os guerreiros que protegem a justiça e que pensam que "a força é a justiça" são bastante
anormais. Será que alguém havia plantado as sementes de mal?

                </span>
            )}
        </p>
      </div>
    </div>
  );
}
