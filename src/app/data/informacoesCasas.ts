// informacoesCasas.ts

export interface InfoCasa {
    id: string;
    nome: string;
    curiosidades: string;
    protetor: string[];
    batalhas: string[];
    informacoesAdicionais: string;
  }
  
  const informacoesCasas: InfoCasa[] = [
    {
        id: "aries",
        nome: "Casa de Áries",
        curiosidades: "A Casa de Áries é a primeira das Doze Casas do Zodíaco no Santuário de Atena, servindo como entrada para os Cavaleiros que buscam alcançar o Grande Mestre.",
        protetor: [
            "Shion de Áries",
            "Mu de Áries",
            "Kiki de Áries",
            "Avenir de Áries",
            "Gateguard de Áries"
        ],
        batalhas: [
            "Mu vs. Máscara da Morte e Afrodite",
            "Mu vs. Espectros de Hades",
            "Kiki vs. Dione"
        ],
        informacoesAdicionais: "Os Cavaleiros de Áries são conhecidos por técnicas defensivas, como a 'Muralha de Cristal', e ofensivas, como a 'Revolução Estelar'."
    },
    {
        id: "touro",
        nome: "Casa de Touro",
        curiosidades: "A Casa de Touro é a segunda das Doze Casas do Zodíaco no Santuário de Atena, protegida pelo Cavaleiro de Ouro de Touro. Ela representa a força e a resistência, sendo um dos principais obstáculos para aqueles que tentam atravessar o Santuário.",
        protetor: [
            "Aldebaran de Touro",
            "Hasgard de Touro",
            "Teneo de Touro",
            "Harbinger de Touro",
            "Ox de Touro"
        ],
        batalhas: [
            "Seiya de Pégaso vs. Aldebaran de Touro",
            "Kouga de Pégaso vs. Harbinger de Touro",
            "Aldebaran de Touro vs. Niobe de Deep"
        ],
        informacoesAdicionais: "Aldebaran de Touro é conhecido por sua técnica 'Grande Chifre', que simboliza a investida poderosa de um touro. Na série clássica, Seiya de Pégaso consegue quebrar um dos chifres da armadura de Aldebaran, demonstrando seu crescimento como Cavaleiro."
    },
    {
        id: "gemeos",
        nome: "Casa de Gêmeos",
        curiosidades: "A Casa de Gêmeos é a terceira das Doze Casas do Zodíaco no Santuário de Atena, protegida pelo Cavaleiro de Ouro de Gêmeos. Conhecida por seus enigmas e ilusões, representa a dualidade e a complexidade, sendo um dos desafios mais intrigantes para aqueles que atravessam o Santuário.",
        protetor: [
            "Saga de Gêmeos",
            "Kanon de Gêmeos",
            "Aspros de Gêmeos",
            "Deuteros de Gêmeos",
            "Paradox de Gêmeos",
            "Integra de Gêmeos",
            "Cain de Gêmeos",
            "Abel de Gêmeos"
        ],
        batalhas: [
            "Seiya de Pégaso e Shiryu de Dragão vs. Ilusões da Casa de Gêmeos",
            "Shun de Andrômeda vs. Ilusões da Casa de Gêmeos",
            "Cavaleiros Renegados vs. Kanon de Gêmeos"
        ],
        informacoesAdicionais: "A Casa de Gêmeos é famosa por suas ilusões e labirintos, criados pelo Cavaleiro de Gêmeos para confundir e testar os intrusos. Saga de Gêmeos, um dos mais notórios Cavaleiros de Ouro, é conhecido por sua técnica 'Outra Dimensão', que envia o oponente para uma dimensão paralela."
    },
    {
        id: "cancer",
        nome: "Casa de Câncer",
        curiosidades: "A Casa de Câncer é a quarta das Doze Casas do Zodíaco no Santuário de Atena, protegida pelo Cavaleiro de Ouro de Câncer. É conhecida por sua ligação com o mundo dos mortos, sendo um local onde as almas dos derrotados são enviadas ao Yomotsu Hirasaka, o portal para o submundo.",
        protetor: [
            "Máscara da Morte de Câncer",
            "Manigoldo de Câncer",
            "Sage de Câncer",
            "Schiller de Câncer",
            "Lancelot de Câncer"
        ],
        batalhas: [
            "Shiryu de Dragão vs. Máscara da Morte de Câncer",
            "Schiller de Câncer vs. Kouga de Pégaso"
        ],
        informacoesAdicionais: "Os Cavaleiros de Câncer são conhecidos por suas técnicas que envolvem o controle das almas e a manipulação do portal para o mundo dos mortos, como o 'Ondas do Inferno'. Máscara da Morte é notório por sua crueldade e desprezo pela vida humana, enquanto Manigoldo, apesar de sua natureza impetuosa, demonstra um profundo senso de justiça."
    },
    {
        id: "leao",
        nome: "Casa de Leão",
        curiosidades: "A Casa de Leão é a quinta das Doze Casas do Zodíaco no Santuário de Atena, protegida pelo Cavaleiro de Ouro de Leão. Representa a força e a coragem, sendo um dos pontos mais desafiadores para aqueles que atravessam o Santuário.",
        protetor: [
            "Aiolia de Leão",
            "Regulus de Leão",
            "Micenas de Leão",
            "Kaiser de Leão",
            "Ilias de Leão"
        ],
        batalhas: [
            "Seiya de Pégaso vs. Aiolia de Leão",
        ],
        informacoesAdicionais: "Os Cavaleiros de Leão são conhecidos por suas técnicas poderosas, como o 'Relâmpago de Plasma' e o 'Relâmpago de Vaqueiro'. Aiolia de Leão é irmão mais novo de Aiolos de Sagitário e é reconhecido por sua lealdade e senso de justiça."
    },
    {
        id: "virgem",
        nome: "Casa de Virgem",
        curiosidades: "A Casa de Virgem é a sexta das Doze Casas do Zodíaco no Santuário de Atena, protegida pelo Cavaleiro de Ouro de Virgem. É conhecida por sua atmosfera serena e espiritual, refletindo a natureza meditativa e iluminada de seu guardião.",
        protetor: [
            "Shaka de Virgem",
            "Asmita de Virgem",
            "Shijima de Virgem",
            "Fudou de Virgem"
        ],
        batalhas: [
            "Ikki de Fênix vs. Shaka de Virgem",
            "Shaka de Virgem vs. Saga de Gêmeos, Shura de Capricórnio e Camus de Aquário",
            "Shijima de Virgem vs. Shaka de Virgem"
        ],
        informacoesAdicionais: "Os Cavaleiros de Virgem são reconhecidos por sua profunda conexão espiritual e habilidades meditativas. Shaka de Virgem é frequentemente referido como 'o homem mais próximo de Deus' devido à sua iluminação e poder. Suas técnicas, como o 'Tesouro do Céu' e o 'Ciclo das Seis Existências', são temidas por muitos."
    },
    {
        id: "libra",
        nome: "Casa de Libra",
        curiosidades: "A Casa de Libra é a sétima das Doze Casas do Zodíaco no Santuário de Atena, protegida pelo Cavaleiro de Ouro de Libra. É conhecida por seu equilíbrio e senso de justiça, e o Cavaleiro de Libra é responsável por decidir quando utilizar as armas das Armaduras de Ouro, sendo o único a possuí-las.",
        protetor: [
            "Dohko de Libra",
            "Genbu de Libra",
            "Itia de Libra"
        ],
        batalhas: [
            "Hyoga de Cinse vs. Camus de Aquário",
            "Genbu de Libra vs. Tokisada de Aquário"
        ],
        informacoesAdicionais: "O Cavaleiro de Libra é o único autorizado a portar armas, como escudos, espadas e lanças, que podem ser usadas com a permissão de Atena. Dohko de Libra é conhecido por sua longevidade e sabedoria, sendo mestre de Shiryu de Dragão. Suas técnicas incluem o poderoso 'Cólera do Dragão'."
    },
    {
        id: "escorpiao",
        nome: "Casa de Escorpião",
        curiosidades: "A Casa de Escorpião é a oitava das Doze Casas do Zodíaco no Santuário de Atena, protegida pelo Cavaleiro de Ouro de Escorpião. É conhecida por sua atmosfera intensa e pelas técnicas letais de seu guardião, que refletem as características do escorpião.",
        protetor: [
            "Milo de Escorpião",
            "Kardia de Escorpião",
            "Écarlate de Escorpião",
            "Sonia de Escorpião"
        ],
        batalhas: [
            "Hyoga de Cisne vs. Milo de Escorpião",
            "Kardia de Escorpião vs. Radamanthys de Wyvern",
            "Sonia de Escorpião vs. Eden de Orion"
        ],
        informacoesAdicionais: "Os Cavaleiros de Escorpião são reconhecidos por suas técnicas que imitam as picadas de um escorpião, como a 'Agulha Escarlate', que atinge pontos vitais do oponente. Milo de Escorpião é conhecido por sua lealdade a Atena e por sua amizade com Camus de Aquário."
    },
    {
        id: "sagitario",
        nome: "Casa de Sagitário",
        curiosidades: "A Casa de Sagitário é a nona das Doze Casas do Zodíaco no Santuário de Atena, protegida pelo Cavaleiro de Ouro de Sagitário. É conhecida por sua ligação com a justiça e a proteção de Atena, sendo um símbolo de esperança para os Cavaleiros de Bronze.",
        protetor: [
            "Aiolos de Sagitário",
            "Sisifo de Sagitário",
            "Seiya de Sagitário",
            "Gestalt de Sagitário"
        ],
        batalhas: [
            "Seiya de Pégaso vs. Ilusões na Casa de Sagitário",
            "Seiya de Pégaso vs. Saga de Gêmeos (com a Armadura de Sagitário)"
        ],
        informacoesAdicionais: "Aiolos de Sagitário é conhecido por seu sacrifício ao proteger Atena quando bebê, sendo considerado um traidor pelo Santuário até que a verdade fosse revelada. Sua Armadura de Sagitário frequentemente auxilia os Cavaleiros de Bronze em momentos críticos, simbolizando a justiça e a proteção divina."
    },
    {
        id: "capricornio",
        nome: "Casa de Capricórnio",
        curiosidades: "A Casa de Capricórnio é a décima das Doze Casas do Zodíaco no Santuário de Atena, protegida pelo Cavaleiro de Ouro de Capricórnio. É conhecida por sua atmosfera austera e pela presença de um guardião que valoriza a honra e a lealdade acima de tudo.",
        protetor: [
            "Shura de Capricórnio",
            "El Cid de Capricórnio",
            "Ionia de Capricórnio",
            "Izo de Capricórnio"
        ],
        batalhas: [
            "Shiryu de Dragão vs. Shura de Capricórnio",
            "El Cid de Capricórnio vs. Espectros de Hades",
            "Ionia de Capricórnio vs. Kouga de Pégaso"
        ],
        informacoesAdicionais: "Os Cavaleiros de Capricórnio são reconhecidos por sua técnica 'Excalibur', que confere aos seus golpes o poder de corte de uma espada lendária. Shura de Capricórnio é conhecido por sua lealdade a Atena e por ter sido responsável pela morte de Aiolos de Sagitário, embora posteriormente tenha se arrependido de seus atos."
    },
    {
        id: "aquario",
        nome: "Casa de Aquário",
        curiosidades: "A Casa de Aquário é a décima-primeira das Doze Casas do Zodíaco no Santuário de Atena, protegida pelo Cavaleiro de Ouro de Aquário. É conhecida por sua atmosfera gélida, refletindo as técnicas baseadas no gelo e no frio de seu guardião.",
        protetor: [
            "Camus de Aquário",
            "Dégel de Aquário",
            "Tokisada de Aquário",
            "Mystoria de Aquário"
        ],
        batalhas: [
            "Hyoga de Cisne vs. Camus de Aquário",
            "Dégel de Aquário vs. Unity de Bluegrad",
            "Tokisada de Aquário vs. Seiya de Pégaso"
        ],
        informacoesAdicionais: "Os Cavaleiros de Aquário são reconhecidos por suas técnicas que manipulam o gelo e as baixas temperaturas, como a 'Execução Aurora', que atinge temperaturas próximas ao zero absoluto. Camus de Aquário é mestre de Hyoga de Cisne e é conhecido por sua filosofia de que um cavaleiro deve controlar suas emoções para alcançar o verdadeiro poder."
    },
    {
        id: "peixes",
        nome: "Casa de Peixes",
        curiosidades: "A Casa de Peixes é a décima-segunda e última das Doze Casas do Zodíaco no Santuário de Atena, servindo como a última linha de defesa antes do Salão do Grande Mestre e da Estátua de Atena.",
        protetor: [
            "Afrodite de Peixes",
            "Albafica de Peixes",
            "Amor de Peixes"
        ],
        batalhas: [
            "Shun de Andrômeda vs. Afrodite de Peixes",
            "Albafica de Peixes vs. Minos de Griffon",
            "Amor de Peixes vs. Kouga de Pégaso"
        ],
        informacoesAdicionais: "Os Cavaleiros de Peixes são conhecidos por utilizarem rosas envenenadas como armas, empregando técnicas como 'Rosas Diabólicas Reais' e 'Rosa Sangrenta'. Afrodite de Peixes é reconhecido por sua beleza e por sua lealdade a Atena, apesar de suas ações questionáveis."
    },
    {
        id: "salao-grande-mestre",
        nome: "Salão do Grande Mestre",
        curiosidades: "O Salão do Grande Mestre é a estrutura central do Santuário de Atena, localizado após as Doze Casas do Zodíaco. Este salão serve como residência e local de trabalho do Grande Mestre, a mais alta autoridade humana do Santuário e representante direto da deusa Atena na Terra.",
        protetor: [
            "Shion de Áries",
            "Saga de Gêmeos",
            "Hakurei de Altar",
            "Sage de Câncer"
        ],
        batalhas: [
            "Seiya de Pégaso vs. Saga de Gêmeos",
            "Ikki de Fênix vs. Shaka de Virgem"
        ],
        informacoesAdicionais: "O Grande Mestre é responsável por governar o Santuário e comandar todos os Cavaleiros de Atena, especialmente nos períodos em que a deusa não está presente ou é jovem demais para exercer suas funções. O salão do trono é utilizado para cerimônias oficiais e audiências com cavaleiros e visitantes. Para alcançar o Salão do Grande Mestre, é necessário atravessar todas as Doze Casas, enfrentando os respectivos Cavaleiros de Ouro que as protegem."
    },
  ];
  
  export default informacoesCasas;
  