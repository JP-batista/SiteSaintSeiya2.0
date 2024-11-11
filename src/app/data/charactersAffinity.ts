// src/data/charactersAffinity.ts

export type Character = {
    name: string;
    image: string;
    description: string;
    traits: string[]; // Características associadas ao personagem
  };
  
  // Dados dos Cavaleiros de Bronze e Ouro com suas respectivas imagens e características
export const characters: Character[] = [
    { name: "Seiya de Pégaso", image: "/skins/banner-seiya1.jpg", description: "Corajoso e persistente, sempre lutando por justiça.", traits: ["coragem", "persistência", "lealdade"] },
    { name: "Shiryu de Dragão", image: "/skins/banner-shiryu1.jpg", description: "Calmo e disciplinado, sacrifica-se pelo bem maior.", traits: ["disciplina", "calma", "sacrifício"] },
    { name: "Hyoga de Cisne", image: "/skins/banner-hyoga1.jpg", description: "Racional e focado, guiado por um forte senso de justiça.", traits: ["justiça", "frieza", "lealdade"] },
    { name: "Shun de Andrômeda", image: "/skins/banner-shun1.jpg", description: "Gentil e pacifista, valoriza a compaixão e o amor.", traits: ["compaixão", "paz", "sacrifício"] },
    { name: "Ikki de Fênix", image: "/skins/banner-ikki1.jpg", description: "Independente e resiliente, disposto a proteger quem ama.", traits: ["independência", "resiliência", "proteção"] },
    { name: "Jabu de Unicórnio", image: "/skins/banner-jabu.jpg", description: "Ágil e determinado, sempre disposto a ajudar seus amigos.", traits: ["determinação", "amigável", "agilidade"] },
    { name: "Geki de Urso", image: "/skins/banner-geki.jpg", description: "Forte e protetor, com um grande senso de justiça.", traits: ["força", "justiça", "proteção"] },
    { name: "Ichi de Hidra", image: "/skins/banner-ichi.jpg", description: "Astuto e observador, sempre em busca de aperfeiçoamento.", traits: ["inteligência", "observação", "ambição"] },
    { name: "Nachi de Lobo", image: "/skins/banner-nachi.jpg", description: "Leal e feroz, com espírito de equipe.", traits: ["lealdade", "coragem", "espírito de equipe"] },
    { name: "Ban de Leão Menor", image: "/skins/banner-ban.jpg", description: "Amigável e alegre, mas feroz em batalha.", traits: ["amigável", "alegria", "ferocidade"] },
    { name: "Tenma de Pégaso", image: "/skins/banner-tenma1.jpg", description: "Determinado e corajoso, disposto a enfrentar qualquer desafio.", traits: ["coragem", "determinação", "persistência"] },
  
    // Cavaleiros de Ouro
    { name: "Mu de Áries", image: "/skins/banner-mu1.jpg", description: "Inteligente e estratégico, mestre em habilidades mentais.", traits: ["inteligência", "estratégia", "sabedoria"] },
    { name: "Aldebaran de Touro", image: "/skins/banner-aldebaran1.jpg", description: "Forte e determinado, com grande senso de honra.", traits: ["força", "honra", "determinação"] },
    { name: "Saga de Gêmeos", image: "/skins/banner-saga1.jpg", description: "Complexo e poderoso, com forte dualidade.", traits: ["poder", "dualidade", "mistério"] },
    { name: "Máscara da Morte de Câncer", image: "/skins/banner-cancer1.jpg", description: "Implacável e sombrio, com uma visão distorcida de justiça.", traits: ["misticismo", "força", "implacável"] },
    { name: "Aiolia de Leão", image: "/skins/banner-leao1.jpg", description: "Orgulhoso e justo, com um grande coração.", traits: ["orgulho", "justiça", "coragem"] },
    { name: "Shaka de Virgem", image: "/skins/banner-virgem1.jpg", description: "O mais próximo de Deus, calmo e espiritual.", traits: ["sabedoria", "espiritualidade", "calma"] },
    { name: "Dohko de Libra", image: "/skins/banner-libra1.jpg", description: "Justo e pacífico, sábio como um mestre ancião.", traits: ["justiça", "sabedoria", "paz"] },
    { name: "Milo de Escorpião", image: "/skins/banner-milo1.jpg", description: "Intenso e impiedoso, mas leal aos amigos.", traits: ["intensidade", "lealdade", "impiedade"] },
    { name: "Aiolos de Sagitário", image: "/skins/banner-aiolos1.jpg", description: "Justo e sacrificial, disposto a proteger até o fim.", traits: ["justiça", "sacrifício", "honra"] },
    { name: "Shura de Capricórnio", image: "/skins/banner-shura1.jpg", description: "Focado e leal, acredita na justiça acima de tudo.", traits: ["foco", "lealdade", "justiça"] },
    { name: "Camus de Aquário", image: "/skins/banner-camus1.jpg", description: "Calmo e racional, com grande controle sobre suas emoções.", traits: ["frieza", "calma", "controle"] },
    { name: "Afrodite de Peixes", image: "/skins/banner-afrodite1.jpg", description: "Beleza e crueldade combinadas, um guerreiro com estilo.", traits: ["beleza", "crueldade", "orgulho"] },
  ];
  
  // Perguntas do Quiz de Afinidade
export const affinityQuestions = [
    {
      "question": "Como você age em uma situação de conflito?",
      "options": [
        { "answer": "Vou com tudo e dou o meu melhor!", "traits": ["coragem", "persistência"] },
        { "answer": "Procuro manter a calma e pensar antes de agir.", "traits": ["calma", "sabedoria"] },
        { "answer": "Sacrifico-me pelo bem dos outros, se necessário.", "traits": ["sacrifício", "proteção"] },
        { "answer": "Busco uma solução justa para todos.", "traits": ["justiça", "honra"] },
      ],
    },
    {
      "question": "Qual qualidade você mais valoriza?",
      "options": [
        { "answer": "Coragem", "traits": ["coragem"] },
        { "answer": "Disciplina", "traits": ["disciplina"] },
        { "answer": "Compaixão", "traits": ["compaixão"] },
        { "answer": "Força", "traits": ["força"] },
      ],
    },
    {
      "question": "Como você reage quando vê uma injustiça?",
      "options": [
        { "answer": "Luto contra ela com todas as minhas forças!", "traits": ["persistência", "justiça"] },
        { "answer": "Procuro entender os dois lados antes de agir.", "traits": ["sabedoria", "calma"] },
        { "answer": "Defendo os inocentes a qualquer custo.", "traits": ["proteção", "compaixão"] },
        { "answer": "Tento trazer equilíbrio e justiça à situação.", "traits": ["justiça", "honra"] },
      ],
    },
    {
      "question": "Se tivesse que sacrificar algo, o que seria?",
      "options": [
        { "answer": "Minha segurança pela dos outros.", "traits": ["sacrifício", "proteção"] },
        { "answer": "Meu conforto para alcançar a justiça.", "traits": ["justiça", "persistência"] },
        { "answer": "Nada, luto para proteger tudo e todos.", "traits": ["força", "proteção"] },
        { "answer": "Meu tempo para buscar sabedoria e paz.", "traits": ["sabedoria", "calma"] },
      ],
    },
    {
      "question": "Qual é o seu principal objetivo?",
      "options": [
        { "answer": "Lutar pelo bem de todos.", "traits": ["coragem", "justiça"] },
        { "answer": "Proteger os que amo.", "traits": ["proteção", "compaixão"] },
        { "answer": "Alcançar a paz interior.", "traits": ["calma", "sabedoria"] },
        { "answer": "Manter minha honra intacta.", "traits": ["honra", "resiliência"] },
      ],
    },
    {
      "question": "Se você fosse um cavaleiro, qual qualidade te definiria?",
      "options": [
        { "answer": "A coragem.", "traits": ["coragem"] },
        { "answer": "A disciplina.", "traits": ["disciplina"] },
        { "answer": "A justiça.", "traits": ["justiça"] },
        { "answer": "A força.", "traits": ["força"] },
      ],
    },
    {
      "question": "Como você lida com adversidades?",
      "options": [
        { "answer": "Enfrento-as de cabeça erguida.", "traits": ["resiliência", "força"] },
        { "answer": "Procuro resolver de forma pacífica.", "traits": ["paz", "compaixão"] },
        { "answer": "Analiso e busco uma solução estratégica.", "traits": ["sabedoria", "estratégia"] },
        { "answer": "Encontro força nos meus valores.", "traits": ["honra", "justiça"] },
      ],
    },
    {
      "question": "O que mais te inspira em um herói?",
      "options": [
        { "answer": "Sua bravura.", "traits": ["coragem"] },
        { "answer": "Seu sacrifício.", "traits": ["sacrifício"] },
        { "answer": "Sua justiça.", "traits": ["justiça"] },
        { "answer": "Sua determinação.", "traits": ["determinação"] },
      ],
    },
    {
      "question": "Qual é o seu maior medo?",
      "options": [
        { "answer": "Não conseguir proteger quem amo.", "traits": ["proteção", "compaixão"] },
        { "answer": "Ser injusto com alguém.", "traits": ["justiça", "honra"] },
        { "answer": "Perder a paz interior.", "traits": ["calma", "sabedoria"] },
        { "answer": "Fracassar em minha missão.", "traits": ["coragem", "persistência"] },
      ],
    },
    {
      "question": "Se você fosse enfrentar um inimigo poderoso, como agiria?",
      "options": [
        { "answer": "Lutaria com coragem e determinação.", "traits": ["coragem", "determinação"] },
        { "answer": "Pensaria em uma estratégia antes de agir.", "traits": ["estratégia", "sabedoria"] },
        { "answer": "Protegeria os inocentes antes de atacar.", "traits": ["proteção", "compaixão"] },
        { "answer": "Enfrentaria com força e honra.", "traits": ["força", "honra"] },
      ],
    },
    {
        "question": "Como você reage diante de uma situação inesperada?",
        "options": [
        { "answer": "Enfrento com coragem e determinação.", "traits": ["coragem", "determinação"] },
        { "answer": "Analiso calmamente antes de agir.", "traits": ["calma", "sabedoria"] },
        { "answer": "Procuro proteger os que estão ao meu redor.", "traits": ["proteção", "compaixão"] },
        { "answer": "Busco uma solução justa e equilibrada.", "traits": ["justiça", "honra"] }
        ]
    },
    {
        "question": "Qual dessas qualidades você mais valoriza em si mesmo?",
        "options": [
        { "answer": "Minha coragem para enfrentar desafios.", "traits": ["coragem"] },
        { "answer": "Minha disciplina e foco.", "traits": ["disciplina"] },
        { "answer": "Minha compaixão pelos outros.", "traits": ["compaixão"] },
        { "answer": "Minha força física e mental.", "traits": ["força"] }
        ]
    },
    {
        "question": "Diante de uma injustiça, qual é sua atitude?",
        "options": [
        { "answer": "Luto ativamente contra ela.", "traits": ["persistência", "justiça"] },
        { "answer": "Procuro entender todos os lados antes de agir.", "traits": ["sabedoria", "calma"] },
        { "answer": "Defendo os oprimidos sem hesitar.", "traits": ["proteção", "compaixão"] },
        { "answer": "Busco restaurar o equilíbrio e a justiça.", "traits": ["justiça", "honra"] }
        ]
    },
    {
        "question": "Se precisasse sacrificar algo, o que estaria disposto a oferecer?",
        "options": [
        { "answer": "Minha segurança pelo bem dos outros.", "traits": ["sacrifício", "proteção"] },
        { "answer": "Meu conforto para alcançar a justiça.", "traits": ["justiça", "persistência"] },
        { "answer": "Nada, lutaria para proteger tudo e todos.", "traits": ["força", "proteção"] },
        { "answer": "Meu tempo para buscar sabedoria e paz.", "traits": ["sabedoria", "calma"] }
        ]
    },
    {
        "question": "Qual é o seu principal objetivo na vida?",
        "options": [
        { "answer": "Lutar pelo bem de todos.", "traits": ["coragem", "justiça"] },
        { "answer": "Proteger aqueles que amo.", "traits": ["proteção", "compaixão"] },
        { "answer": "Alcançar a paz interior.", "traits": ["calma", "sabedoria"] },
        { "answer": "Manter minha honra intacta.", "traits": ["honra", "resiliência"] }
        ]
    },
    {
        "question": "Se você fosse um cavaleiro, qual qualidade o definiria?",
        "options": [
        { "answer": "A coragem.", "traits": ["coragem"] },
        { "answer": "A disciplina.", "traits": ["disciplina"] },
        { "answer": "A justiça.", "traits": ["justiça"] },
        { "answer": "A força.", "traits": ["força"] }
        ]
    },
    {
        "question": "Como você lida com adversidades?",
        "options": [
        { "answer": "Enfrento-as de cabeça erguida.", "traits": ["resiliência", "força"] },
        { "answer": "Procuro resolver de forma pacífica.", "traits": ["paz", "compaixão"] },
        { "answer": "Analiso e busco uma solução estratégica.", "traits": ["sabedoria", "estratégia"] },
        { "answer": "Encontro força nos meus valores.", "traits": ["honra", "justiça"] }
        ]
    },
    {
        "question": "O que mais o inspira em um herói?",
        "options": [
        { "answer": "Sua bravura.", "traits": ["coragem"] },
        { "answer": "Seu sacrifício.", "traits": ["sacrifício"] },
        { "answer": "Sua justiça.", "traits": ["justiça"] },
        { "answer": "Sua determinação.", "traits": ["determinação"] }
        ]
    },
    {
        "question": "Qual é o seu maior medo?",
        "options": [
        { "answer": "Não conseguir proteger quem amo.", "traits": ["proteção", "compaixão"] },
        { "answer": "Ser injusto com alguém.", "traits": ["justiça", "honra"] },
        { "answer": "Perder a paz interior.", "traits": ["calma", "sabedoria"] },
        { "answer": "Fracassar em minha missão.", "traits": ["coragem", "persistência"] }
        ]
    },
    {
        "question": "Se você fosse enfrentar um inimigo poderoso, como agiria?",
        "options": [
        { "answer": "Lutaria com coragem e determinação.", "traits": ["coragem", "determinação"] },
        { "answer": "Pensaria em uma estratégia antes de agir.", "traits": ["estratégia", "sabedoria"] },
        { "answer": "Protegeria os inocentes antes de atacar.", "traits": ["proteção", "compaixão"] },
        { "answer": "Enfrentaria com força e honra.", "traits": ["força", "honra"] }
        ]
    },
    {
        "question": "Como você reage ao enfrentar um desafio aparentemente impossível?",
        "options": [
        { "answer": "Enfrento com coragem, acreditando no impossível.", "traits": ["coragem", "determinação"] },
        { "answer": "Analiso a situação e busco uma estratégia eficaz.", "traits": ["sabedoria", "estratégia"] },
        { "answer": "Procuro apoio dos amigos e trabalho em equipe.", "traits": ["companheirismo", "lealdade"] },
        { "answer": "Mantenho a calma e confio nas minhas habilidades.", "traits": ["calma", "autoconfiança"] }
        ]
    },
    {
        "question": "Qual é a sua abordagem ao trabalhar em equipe?",
        "options": [
        { "answer": "Assumo a liderança e motivo os demais.", "traits": ["liderança", "motivação"] },
        { "answer": "Contribuo com ideias e estratégias.", "traits": ["criatividade", "estratégia"] },
        { "answer": "Ofereço suporte emocional e incentivo.", "traits": ["empatia", "apoio"] },
        { "answer": "Executo minhas tarefas com eficiência e dedicação.", "traits": ["eficiência", "dedicação"] }
        ]
    },
    {
        "question": "Diante de uma decisão difícil, o que você prioriza?",
        "options": [
        { "answer": "A justiça e o que é moralmente correto.", "traits": ["justiça", "moralidade"] },
        { "answer": "O bem-estar das pessoas envolvidas.", "traits": ["compaixão", "empatia"] },
        { "answer": "A solução mais lógica e racional.", "traits": ["racionalidade", "lógica"] },
        { "answer": "O resultado que trará mais benefícios a longo prazo.", "traits": ["visão de futuro", "planejamento"] }
        ]
    },
    {
        "question": "Como você lida com críticas construtivas?",
        "options": [
        { "answer": "Aceito e busco melhorar continuamente.", "traits": ["humildade", "crescimento pessoal"] },
        { "answer": "Analiso e aplico o que considero relevante.", "traits": ["sabedoria", "discernimento"] },
        { "answer": "Agradeço e reflito sobre os pontos levantados.", "traits": ["gratidão", "reflexão"] },
        { "answer": "Defendo meu ponto de vista, mas considero as sugestões.", "traits": ["assertividade", "abertura"] }
        ]
    },
    {
        "question": "O que mais o motiva a alcançar seus objetivos?",
        "options": [
        { "answer": "O desejo de proteger e ajudar os outros.", "traits": ["altruísmo", "proteção"] },
        { "answer": "A busca por conhecimento e sabedoria.", "traits": ["curiosidade", "aprendizado"] },
        { "answer": "A vontade de superar meus próprios limites.", "traits": ["autoaperfeiçoamento", "resiliência"] },
        { "answer": "A necessidade de justiça e equidade.", "traits": ["justiça", "equidade"] }
        ]
    },
    {
        "question": "Como você reage ao fracasso?",
        "options": [
        { "answer": "Vejo como uma oportunidade de aprendizado.", "traits": ["resiliência", "aprendizado"] },
        { "answer": "Refletindo sobre os erros e buscando melhorias.", "traits": ["autocrítica", "melhoria contínua"] },
        { "answer": "Mantenho a calma e tento novamente com mais empenho.", "traits": ["paciência", "determinação"] },
        { "answer": "Procuro apoio e conselhos de pessoas de confiança.", "traits": ["humildade", "busca de apoio"] }
        ]
    },
    {
        "question": "Qual é a sua maior força em situações de pressão?",
        "options": [
        { "answer": "Minha capacidade de manter a calma.", "traits": ["calma", "controle emocional"] },
        { "answer": "Minha habilidade de tomar decisões rápidas.", "traits": ["decisividade", "agilidade mental"] },
        { "answer": "Minha resistência e perseverança.", "traits": ["resiliência", "perseverança"] },
        { "answer": "Minha criatividade para encontrar soluções.", "traits": ["criatividade", "inovação"] }
        ]
    },
    {
        "question": "Como você define sucesso pessoal?",
        "options": [
        { "answer": "Alcançar meus objetivos mantendo minha integridade.", "traits": ["integridade", "realização"] },
        { "answer": "Fazer a diferença positiva na vida das pessoas.", "traits": ["impacto social", "altruísmo"] },
        { "answer": "Adquirir conhecimento e crescer continuamente.", "traits": ["crescimento pessoal", "sabedoria"] },
        { "answer": "Superar desafios e me tornar mais forte.", "traits": ["superação", "fortalecimento"] }
        ]
    },
    {
        "question": "O que você considera mais importante em um líder?",
        "options": [
        { "answer": "A capacidade de inspirar e motivar.", "traits": ["inspiração", "motivação"] },
        { "answer": "A habilidade de tomar decisões justas.", "traits": ["justiça", "imparcialidade"] },
        { "answer": "A empatia e compreensão com a equipe.", "traits": ["empatia", "compreensão"] },
        { "answer": "A visão estratégica e planejamento.", "traits": ["visão", "planejamento"] }
        ]
    },
    {
        "question": "Como você equilibra razão e emoção em suas decisões?",
        "options": [
        { "answer": "Confio na minha intuição, mas considero os fatos.", "traits": ["intuição", "racionalidade"] },
        { "answer": "Analiso logicamente, mas não ignoro meus sentimentos.", "traits": ["lógica", "sensibilidade"] },
        { "answer": "Busco um equilíbrio entre ambos, dependendo da situação.", "traits": ["equilíbrio", "flexibilidade"] },
        { "answer": "Dou prioridade à razão, mas reconheço a importância das emoções.", "traits": ["racionalidade", "consciência emocional"] }
        ]
    }, 
    {
    "question": "Como você reage ao receber uma tarefa desafiadora?",
    "options": [
        { "answer": "Aceito com entusiasmo e vejo como uma oportunidade de crescimento.", "traits": ["entusiasmo", "crescimento"] },
        { "answer": "Analiso cuidadosamente antes de decidir como proceder.", "traits": ["análise", "cautela"] },
        { "answer": "Busco apoio de colegas para garantir o sucesso.", "traits": ["colaboração", "apoio"] },
        { "answer": "Confio em minhas habilidades e sigo em frente com confiança.", "traits": ["autoconfiança", "determinação"] }
    ]
    },
    {
    "question": "Qual é a sua abordagem ao resolver conflitos entre amigos?",
    "options": [
        { "answer": "Atuo como mediador, buscando uma solução justa para todos.", "traits": ["mediação", "justiça"] },
        { "answer": "Ofereço apoio emocional e ouço ambos os lados.", "traits": ["empatia", "apoio"] },
        { "answer": "Procuro entender as causas profundas do conflito.", "traits": ["compreensão", "análise"] },
        { "answer": "Incentivo a comunicação aberta para resolver as diferenças.", "traits": ["comunicação", "resolução"] }
    ]
    },
    {
    "question": "Como você lida com mudanças inesperadas em seus planos?",
    "options": [
        { "answer": "Adapto-me rapidamente e busco alternativas.", "traits": ["adaptação", "flexibilidade"] },
        { "answer": "Mantenho a calma e reavalio a situação.", "traits": ["calma", "reavaliação"] },
        { "answer": "Procuro entender o motivo da mudança antes de agir.", "traits": ["compreensão", "paciência"] },
        { "answer": "Confio na minha capacidade de superar obstáculos.", "traits": ["confiança", "resiliência"] }
    ]
    },
    {
    "question": "O que você considera mais importante ao trabalhar em um projeto?",
    "options": [
        { "answer": "A qualidade e a excelência do resultado final.", "traits": ["excelência", "perfeccionismo"] },
        { "answer": "A colaboração e o trabalho em equipe.", "traits": ["colaboração", "trabalho em equipe"] },
        { "answer": "O cumprimento dos prazos estabelecidos.", "traits": ["pontualidade", "responsabilidade"] },
        { "answer": "A inovação e a criatividade no processo.", "traits": ["inovação", "criatividade"] }
    ]
    },
    {
    "question": "Como você se motiva diante de tarefas monótonas?",
    "options": [
        { "answer": "Encontro maneiras de tornar a tarefa mais interessante.", "traits": ["criatividade", "iniciativa"] },
        { "answer": "Lembro-me dos objetivos maiores que essa tarefa atende.", "traits": ["foco", "objetividade"] },
        { "answer": "Divido a tarefa em partes menores para facilitar.", "traits": ["organização", "planejamento"] },
        { "answer": "Procuro recompensar-me após a conclusão.", "traits": ["autorrecompensa", "motivação"] }
    ]
    },
    {
    "question": "Qual é a sua reação ao receber feedback negativo?",
    "options": [
        { "answer": "Vejo como uma oportunidade de melhoria.", "traits": ["humildade", "crescimento"] },
        { "answer": "Refletindo sobre os pontos levantados e ajustando conforme necessário.", "traits": ["reflexão", "ajuste"] },
        { "answer": "Busco entender melhor para evitar futuros erros.", "traits": ["compreensão", "prevenção"] },
        { "answer": "Agradeço o feedback e trabalho para melhorar.", "traits": ["gratidão", "melhoria contínua"] }
    ]
    },
    {
    "question": "Como você equilibra vida pessoal e profissional?",
    "options": [
        { "answer": "Estabeleço limites claros entre trabalho e lazer.", "traits": ["organização", "equilíbrio"] },
        { "answer": "Prioritizo atividades que trazem satisfação em ambas as áreas.", "traits": ["priorização", "satisfação"] },
        { "answer": "Busco flexibilidade para atender às demandas de ambos os lados.", "traits": ["flexibilidade", "adaptação"] },
        { "answer": "Planejo meu tempo de forma eficiente para acomodar tudo.", "traits": ["planejamento", "eficiência"] }
    ]
    },
    {
    "question": "O que você valoriza mais em um ambiente de trabalho?",
    "options": [
        { "answer": "A cultura de respeito e inclusão.", "traits": ["respeito", "inclusão"] },
        { "answer": "Oportunidades de crescimento e desenvolvimento.", "traits": ["crescimento", "desenvolvimento"] },
        { "answer": "A colaboração e o espírito de equipe.", "traits": ["colaboração", "espírito de equipe"] },
        { "answer": "A inovação e a abertura para novas ideias.", "traits": ["inovação", "criatividade"] }
    ]
    },
    {
    "question": "Como você se prepara para enfrentar um grande desafio?",
    "options": [
        { "answer": "Planejo detalhadamente cada passo necessário.", "traits": ["planejamento", "detalhismo"] },
        { "answer": "Busco conhecimento e informações relevantes.", "traits": ["conhecimento", "preparação"] },
        { "answer": "Fortaleço minha confiança e mentalidade positiva.", "traits": ["confiança", "positividade"] },
        { "answer": "Procuro apoio e conselhos de mentores ou colegas.", "traits": ["apoio", "mentoria"] }
    ]
    },
    {
    "question": "Qual é a sua atitude ao aprender algo novo?",
    "options": [
        { "answer": "Estou sempre aberto e curioso para novas experiências.", "traits": ["curiosidade", "abertura"] },
        { "answer": "Busco entender profundamente o assunto.", "traits": ["profundidade", "entendimento"] },
        { "answer": "Aplico o conhecimento na prática o mais rápido possível.", "traits": ["praticidade", "aplicação"] },
        { "answer": "Compartilho o que aprendi com os outros.", "traits": ["compartilhamento", "educação"] }
    ]
    },
    {
    "question": "Como você reage ao receber uma tarefa desafiadora?",
    "options": [
      { "answer": "Aceito com entusiasmo e vejo como uma oportunidade de crescimento.", "traits": ["entusiasmo", "crescimento"] },
      { "answer": "Analiso cuidadosamente antes de decidir como proceder.", "traits": ["análise", "cautela"] },
      { "answer": "Busco apoio de colegas para garantir o sucesso.", "traits": ["colaboração", "apoio"] },
      { "answer": "Confio em minhas habilidades e sigo em frente com confiança.", "traits": ["autoconfiança", "determinação"] }
    ]
  },
  {
    "question": "Qual é a sua abordagem ao resolver conflitos entre amigos?",
    "options": [
      { "answer": "Atuo como mediador, buscando uma solução justa para todos.", "traits": ["mediação", "justiça"] },
      { "answer": "Ofereço apoio emocional e ouço ambos os lados.", "traits": ["empatia", "apoio"] },
      { "answer": "Procuro entender as causas profundas do conflito.", "traits": ["compreensão", "análise"] },
      { "answer": "Incentivo a comunicação aberta para resolver as diferenças.", "traits": ["comunicação", "resolução"] }
    ]
  },
  {
    "question": "Como você lida com mudanças inesperadas em seus planos?",
    "options": [
      { "answer": "Adapto-me rapidamente e busco alternativas.", "traits": ["adaptação", "flexibilidade"] },
      { "answer": "Mantenho a calma e reavalio a situação.", "traits": ["calma", "reavaliação"] },
      { "answer": "Procuro entender o motivo da mudança antes de agir.", "traits": ["compreensão", "paciência"] },
      { "answer": "Confio na minha capacidade de superar obstáculos.", "traits": ["confiança", "resiliência"] }
    ]
  },
  {
    "question": "O que você considera mais importante ao trabalhar em um projeto?",
    "options": [
      { "answer": "A qualidade e a excelência do resultado final.", "traits": ["excelência", "perfeccionismo"] },
      { "answer": "A colaboração e o trabalho em equipe.", "traits": ["colaboração", "trabalho em equipe"] },
      { "answer": "O cumprimento dos prazos estabelecidos.", "traits": ["pontualidade", "responsabilidade"] },
      { "answer": "A inovação e a criatividade no processo.", "traits": ["inovação", "criatividade"] }
    ]
  },
  {
    "question": "Como você se motiva diante de tarefas monótonas?",
    "options": [
      { "answer": "Encontro maneiras de tornar a tarefa mais interessante.", "traits": ["criatividade", "iniciativa"] },
      { "answer": "Lembro-me dos objetivos maiores que essa tarefa atende.", "traits": ["foco", "objetividade"] },
      { "answer": "Divido a tarefa em partes menores para facilitar.", "traits": ["organização", "planejamento"] },
      { "answer": "Procuro recompensar-me após a conclusão.", "traits": ["autorrecompensa", "motivação"] }
    ]
  },
  {
    "question": "Qual é a sua reação ao receber feedback negativo?",
    "options": [
      { "answer": "Vejo como uma oportunidade de melhoria.", "traits": ["humildade", "crescimento"] },
      { "answer": "Refletindo sobre os pontos levantados e ajustando conforme necessário.", "traits": ["reflexão", "ajuste"] },
      { "answer": "Busco entender melhor para evitar futuros erros.", "traits": ["compreensão", "prevenção"] },
      { "answer": "Agradeço o feedback e trabalho para melhorar.", "traits": ["gratidão", "melhoria contínua"] }
    ]
  },
  {
    "question": "Como você equilibra vida pessoal e profissional?",
    "options": [
      { "answer": "Estabeleço limites claros entre trabalho e lazer.", "traits": ["organização", "equilíbrio"] },
      { "answer": "Prioritizo atividades que trazem satisfação em ambas as áreas.", "traits": ["priorização", "satisfação"] },
      { "answer": "Busco flexibilidade para atender às demandas de ambos os lados.", "traits": ["flexibilidade", "adaptação"] },
      { "answer": "Planejo meu tempo de forma eficiente para acomodar tudo.", "traits": ["planejamento", "eficiência"] }
    ]
  },
  {
    "question": "O que você valoriza mais em um ambiente de trabalho?",
    "options": [
      { "answer": "A cultura de respeito e inclusão.", "traits": ["respeito", "inclusão"] },
      { "answer": "Oportunidades de crescimento e desenvolvimento.", "traits": ["crescimento", "desenvolvimento"] },
      { "answer": "A colaboração e o espírito de equipe.", "traits": ["colaboração", "espírito de equipe"] },
      { "answer": "A inovação e a abertura para novas ideias.", "traits": ["inovação", "criatividade"] }
    ]
  },
  {
    "question": "Como você se prepara para enfrentar um grande desafio?",
    "options": [
      { "answer": "Planejo detalhadamente cada passo necessário.", "traits": ["planejamento", "detalhismo"] },
      { "answer": "Busco conhecimento e informações relevantes.", "traits": ["conhecimento", "preparação"] },
      { "answer": "Fortaleço minha confiança e mentalidade positiva.", "traits": ["confiança", "positividade"] },
      { "answer": "Procuro apoio e conselhos de mentores ou colegas.", "traits": ["apoio", "mentoria"] }
    ]
  },
  {
    "question": "Qual é a sua atitude ao aprender algo novo?",
    "options": [
      { "answer": "Estou sempre aberto e curioso para novas experiências.", "traits": ["curiosidade", "abertura"] },
      { "answer": "Busco entender profundamente o assunto.", "traits": ["profundidade", "entendimento"] },
      { "answer": "Aplico o conhecimento na prática o mais rápido possível.", "traits": ["praticidade", "aplicação"] },
      { "answer": "Compartilho o que aprendi com os outros.", "traits": ["compartilhamento", "educação"] }
    ]
  },
  {
    "question": "Como você reage ao receber uma tarefa desafiadora?",
    "options": [
      { "answer": "Aceito com entusiasmo e vejo como uma oportunidade de crescimento.", "traits": ["entusiasmo", "crescimento"] },
      { "answer": "Analiso cuidadosamente antes de decidir como proceder.", "traits": ["análise", "cautela"] },
      { "answer": "Busco apoio de colegas para garantir o sucesso.", "traits": ["colaboração", "apoio"] },
      { "answer": "Confio em minhas habilidades e sigo em frente com confiança.", "traits": ["autoconfiança", "determinação"] }
    ]
  },
  {
    "question": "Qual é a sua abordagem ao resolver conflitos entre amigos?",
    "options": [
      { "answer": "Atuo como mediador, buscando uma solução justa para todos.", "traits": ["mediação", "justiça"] },
      { "answer": "Ofereço apoio emocional e ouço ambos os lados.", "traits": ["empatia", "apoio"] },
      { "answer": "Procuro entender as causas profundas do conflito.", "traits": ["compreensão", "análise"] },
      { "answer": "Incentivo a comunicação aberta para resolver as diferenças.", "traits": ["comunicação", "resolução"] }
    ]
  },
  {
    "question": "Como você lida com mudanças inesperadas em seus planos?",
    "options": [
      { "answer": "Adapto-me rapidamente e busco alternativas.", "traits": ["adaptação", "flexibilidade"] },
      { "answer": "Mantenho a calma e reavalio a situação.", "traits": ["calma", "reavaliação"] },
      { "answer": "Procuro entender o motivo da mudança antes de agir.", "traits": ["compreensão", "paciência"] },
      { "answer": "Confio na minha capacidade de superar obstáculos.", "traits": ["confiança", "resiliência"] }
    ]
  },
  {
    "question": "O que você considera mais importante ao trabalhar em um projeto?",
    "options": [
      { "answer": "A qualidade e a excelência do resultado final.", "traits": ["excelência", "perfeccionismo"] },
      { "answer": "A colaboração e o trabalho em equipe.", "traits": ["colaboração", "trabalho em equipe"] },
      { "answer": "O cumprimento dos prazos estabelecidos.", "traits": ["pontualidade", "responsabilidade"] },
      { "answer": "A inovação e a criatividade no processo.", "traits": ["inovação", "criatividade"] }
    ]
  },
  {
    "question": "Como você se motiva diante de tarefas monótonas?",
    "options": [
      { "answer": "Encontro maneiras de tornar a tarefa mais interessante.", "traits": ["criatividade", "iniciativa"] },
      { "answer": "Lembro-me dos objetivos maiores que essa tarefa atende.", "traits": ["foco", "objetividade"] },
      { "answer": "Divido a tarefa em partes menores para facilitar.", "traits": ["organização", "planejamento"] },
      { "answer": "Procuro recompensar-me após a conclusão.", "traits": ["autorrecompensa", "motivação"] }
    ]
  },
  {
    "question": "Qual é a sua reação ao receber feedback negativo?",
    "options": [
      { "answer": "Vejo como uma oportunidade de melhoria.", "traits": ["humildade", "crescimento"] },
      { "answer": "Refletindo sobre os pontos levantados e ajustando conforme necessário.", "traits": ["reflexão", "ajuste"] },
      { "answer": "Busco entender melhor para evitar futuros erros.", "traits": ["compreensão", "prevenção"] },
      { "answer": "Agradeço o feedback e trabalho para melhorar.", "traits": ["gratidão", "melhoria contínua"] }
    ]
  },
  {
    "question": "Como você equilibra vida pessoal e profissional?",
    "options": [
      { "answer": "Estabeleço limites claros entre trabalho e lazer.", "traits": ["organização", "equilíbrio"] },
      { "answer": "Prioritizo atividades que trazem satisfação em ambas as áreas.", "traits": ["priorização", "satisfação"] },
      { "answer": "Busco flexibilidade para atender às demandas de ambos os lados.", "traits": ["flexibilidade", "adaptação"] },
      { "answer": "Planejo meu tempo de forma eficiente para acomodar tudo.", "traits": ["planejamento", "eficiência"] }
    ]
  },
  {
    "question": "O que você valoriza mais em um ambiente de trabalho?",
    "options": [
      { "answer": "A cultura de respeito e inclusão.", "traits": ["respeito", "inclusão"] },
      { "answer": "Oportunidades de crescimento e desenvolvimento.", "traits": ["crescimento", "desenvolvimento"] },
      { "answer": "A colaboração e o espírito de equipe.", "traits": ["colaboração", "espírito de equipe"] },
      { "answer": "A inovação e a abertura para novas ideias.", "traits": ["inovação", "criatividade"] }
    ]
  },
  {
    "question": "Como você se prepara para enfrentar um grande desafio?",
    "options": [
      { "answer": "Planejo detalhadamente cada passo necessário.", "traits": ["planejamento", "detalhismo"] },
      { "answer": "Busco conhecimento e informações relevantes.", "traits": ["conhecimento", "preparação"] },
      { "answer": "Fortaleço minha confiança e mentalidade positiva.", "traits": ["confiança", "positividade"] },
      { "answer": "Procuro apoio e conselhos de mentores ou colegas.", "traits": ["apoio", "mentoria"] }
    ]
  },
  {
    "question": "Qual é a sua atitude ao aprender algo novo?",
    "options": [
      { "answer": "Estou sempre aberto e curioso para novas experiências.", "traits": ["curiosidade", "abertura"] },
      { "answer": "Busco entender profundamente o assunto.", "traits": ["profundidade", "entendimento"] },
      { "answer": "Aplico o conhecimento na prática o mais rápido possível.", "traits": ["praticidade", "aplicação"] },
      { "answer": "Compartilho o que aprendi com os outros.", "traits": ["compartilhamento", "educação"] }
    ]
  },
  {
    "question": "Como você reage ao enfrentar uma situação de perigo iminente?",
    "options": [
      { "answer": "Enfrento o perigo de frente, sem hesitar.", "traits": ["coragem", "bravura"] },
      { "answer": "Analiso rapidamente a situação antes de agir.", "traits": ["prudência", "estratégia"] },
      { "answer": "Busco proteger aqueles ao meu redor primeiro.", "traits": ["proteção", "altruísmo"] },
      { "answer": "Procuro uma solução pacífica para evitar conflitos.", "traits": ["paz", "diplomacia"] }
    ]
  },
  {
    "question": "Qual é a sua prioridade ao trabalhar em equipe?",
    "options": [
      { "answer": "Garantir que todos estejam motivados e engajados.", "traits": ["liderança", "motivação"] },
      { "answer": "Assegurar que as tarefas sejam concluídas com eficiência.", "traits": ["eficiência", "organização"] },
      { "answer": "Manter a harmonia e o bom relacionamento entre os membros.", "traits": ["harmonia", "empatia"] },
      { "answer": "Inovar e trazer novas ideias para o grupo.", "traits": ["criatividade", "inovação"] }
    ]
  },
  {
    "question": "Como você lida com críticas construtivas?",
    "options": [
      { "answer": "Aceito e busco melhorar continuamente.", "traits": ["humildade", "crescimento"] },
      { "answer": "Analiso e aplico o que considero relevante.", "traits": ["sabedoria", "discernimento"] },
      { "answer": "Agradeço e reflito sobre os pontos levantados.", "traits": ["gratidão", "reflexão"] },
      { "answer": "Defendo meu ponto de vista, mas considero as sugestões.", "traits": ["assertividade", "abertura"] }
    ]
  },
  {
    "question": "O que mais o motiva a alcançar seus objetivos?",
    "options": [
      { "answer": "O desejo de proteger e ajudar os outros.", "traits": ["altruísmo", "proteção"] },
      { "answer": "A busca por conhecimento e sabedoria.", "traits": ["curiosidade", "aprendizado"] },
      { "answer": "A vontade de superar meus próprios limites.", "traits": ["autoaperfeiçoamento", "resiliência"] },
      { "answer": "A necessidade de justiça e equidade.", "traits": ["justiça", "equidade"] }
    ]
  },
  {
    "question": "Como você reage ao fracasso?",
    "options": [
      { "answer": "Vejo como uma oportunidade de aprendizado.", "traits": ["resiliência", "aprendizado"] },
      { "answer": "Refletindo sobre os erros e buscando melhorias.", "traits": ["autocrítica", "melhoria contínua"] },
      { "answer": "Mantenho a calma e tento novamente com mais empenho.", "traits": ["paciência", "determinação"] },
      { "answer": "Procuro apoio e conselhos de pessoas de confiança.", "traits": ["humildade", "busca de apoio"] }
    ]
  },
  {
    "question": "Qual é a sua maior força em situações de pressão?",
    "options": [
      { "answer": "Minha capacidade de manter a calma.", "traits": ["calma", "controle emocional"] },
      { "answer": "Minha habilidade de tomar decisões rápidas.", "traits": ["decisividade", "agilidade mental"] },
      { "answer": "Minha resistência e perseverança.", "traits": ["resiliência", "perseverança"] },
      { "answer": "Minha criatividade para encontrar soluções.", "traits": ["criatividade", "inovação"] }
    ]
  },
  {
    "question": "Como você define sucesso pessoal?",
    "options": [
      { "answer": "Alcançar meus objetivos mantendo minha integridade.", "traits": ["integridade", "realização"] },
      { "answer": "Fazer a diferença positiva na vida das pessoas.", "traits": ["impacto social", "altruísmo"] },
      { "answer": "Adquirir conhecimento e crescer continuamente.", "traits": ["crescimento pessoal", "sabedoria"] },
      { "answer": "Superar desafios e me tornar mais forte.", "traits": ["superação", "fortalecimento"] }
    ]
  },
  {
    "question": "O que você considera mais importante em um líder?",
    "options": [
      { "answer": "A capacidade de inspirar e motivar.", "traits": ["inspiração", "motivação"] },
      { "answer": "A habilidade de tomar decisões justas.", "traits": ["justiça", "imparcialidade"] },
      { "answer": "A empatia e compreensão com a equipe.", "traits": ["empatia", "compreensão"] },
      { "answer": "A visão estratégica e planejamento.", "traits": ["visão", "planejamento"] }
    ]
  },
  {
    "question": "Como você equilibra razão e emoção em suas decisões?",
    "options": [
      { "answer": "Confio na minha intuição, mas considero os fatos.", "traits": ["intuição", "racionalidade"] },
      { "answer": "Analiso logicamente, mas não ignoro meus sentimentos.", "traits": ["lógica", "sensibilidade"] },
      { "answer": "Busco um equilíbrio entre ambos, dependendo da situação.", "traits": ["equilíbrio", "flexibilidade"] },
      { "answer": "Dou prioridade à razão, mas reconheço a importância das emoções.", "traits": ["racionalidade", "consciência emocional"] }
    ]
  },
  {
    "question": "Como você lida com adversidades?",
    "options": [
      { "answer": "Enfrento-as de cabeça erguida.", "traits": ["resiliência", "força"] },
      { "answer": "Procuro resolver de forma pacífica.", "traits": ["paz", "compaixão"] },
      { "answer": "Analiso e busco uma solução estratégica.", "traits": ["sabedoria", "estratégia"] },
      { "answer": "Encontro força nos meus valores.", "traits": ["honra", "justiça"] }
    ]
  },
  {
    "question": "Como você reage ao enfrentar uma situação de perigo iminente?",
    "options": [
      { "answer": "Enfrento o perigo de frente, sem hesitar.", "traits": ["coragem", "bravura"] },
      { "answer": "Analiso rapidamente a situação antes de agir.", "traits": ["prudência", "estratégia"] },
      { "answer": "Busco proteger aqueles ao meu redor primeiro.", "traits": ["proteção", "altruísmo"] },
      { "answer": "Procuro uma solução pacífica para evitar conflitos.", "traits": ["paz", "diplomacia"] }
    ]
  },
  {
    "question": "Qual é a sua prioridade ao trabalhar em equipe?",
    "options": [
      { "answer": "Garantir que todos estejam motivados e engajados.", "traits": ["liderança", "motivação"] },
      { "answer": "Assegurar que as tarefas sejam concluídas com eficiência.", "traits": ["eficiência", "organização"] },
      { "answer": "Manter a harmonia e o bom relacionamento entre os membros.", "traits": ["harmonia", "empatia"] },
      { "answer": "Inovar e trazer novas ideias para o grupo.", "traits": ["criatividade", "inovação"] }
    ]
  },
  {
    "question": "Como você lida com críticas construtivas?",
    "options": [
      { "answer": "Aceito e busco melhorar continuamente.", "traits": ["humildade", "crescimento"] },
      { "answer": "Analiso e aplico o que considero relevante.", "traits": ["sabedoria", "discernimento"] },
      { "answer": "Agradeço e reflito sobre os pontos levantados.", "traits": ["gratidão", "reflexão"] },
      { "answer": "Defendo meu ponto de vista, mas considero as sugestões.", "traits": ["assertividade", "abertura"] }
    ]
  },
  {
    "question": "O que mais o motiva a alcançar seus objetivos?",
    "options": [
      { "answer": "O desejo de proteger e ajudar os outros.", "traits": ["altruísmo", "proteção"] },
      { "answer": "A busca por conhecimento e sabedoria.", "traits": ["curiosidade", "aprendizado"] },
      { "answer": "A vontade de superar meus próprios limites.", "traits": ["autoaperfeiçoamento", "resiliência"] },
      { "answer": "A necessidade de justiça e equidade.", "traits": ["justiça", "equidade"] }
    ]
  },
  {
    "question": "Como você reage ao fracasso?",
    "options": [
      { "answer": "Vejo como uma oportunidade de aprendizado.", "traits": ["resiliência", "aprendizado"] },
      { "answer": "Refletindo sobre os erros e buscando melhorias.", "traits": ["autocrítica", "melhoria contínua"] },
      { "answer": "Mantenho a calma e tento novamente com mais empenho.", "traits": ["paciência", "determinação"] },
      { "answer": "Procuro apoio e conselhos de pessoas de confiança.", "traits": ["humildade", "busca de apoio"] }
    ]
  },
  {
    "question": "Qual é a sua maior força em situações de pressão?",
    "options": [
      { "answer": "Minha capacidade de manter a calma.", "traits": ["calma", "controle emocional"] },
      { "answer": "Minha habilidade de tomar decisões rápidas.", "traits": ["decisividade", "agilidade mental"] },
      { "answer": "Minha resistência e perseverança.", "traits": ["resiliência", "perseverança"] },
      { "answer": "Minha criatividade para encontrar soluções.", "traits": ["criatividade", "inovação"] }
    ]
  },
  {
    "question": "Como você define sucesso pessoal?",
    "options": [
      { "answer": "Alcançar meus objetivos mantendo minha integridade.", "traits": ["integridade", "realização"] },
      { "answer": "Fazer a diferença positiva na vida das pessoas.", "traits": ["impacto social", "altruísmo"] },
      { "answer": "Adquirir conhecimento e crescer continuamente.", "traits": ["crescimento pessoal", "sabedoria"] },
      { "answer": "Superar desafios e me tornar mais forte.", "traits": ["superação", "fortalecimento"] }
    ]
  },
  {
    "question": "O que você considera mais importante em um líder?",
    "options": [
      { "answer": "A capacidade de inspirar e motivar.", "traits": ["inspiração", "motivação"] },
      { "answer": "A habilidade de tomar decisões justas.", "traits": ["justiça", "imparcialidade"] },
      { "answer": "A empatia e compreensão com a equipe.", "traits": ["empatia", "compreensão"] },
      { "answer": "A visão estratégica e planejamento.", "traits": ["visão", "planejamento"] }
    ]
  },
  {
    "question": "Como você equilibra razão e emoção em suas decisões?",
    "options": [
      { "answer": "Confio na minha intuição, mas considero os fatos.", "traits": ["intuição", "racionalidade"] },
      { "answer": "Analiso logicamente, mas não ignoro meus sentimentos.", "traits": ["lógica", "sensibilidade"] },
      { "answer": "Busco um equilíbrio entre ambos, dependendo da situação.", "traits": ["equilíbrio", "flexibilidade"] },
      { "answer": "Dou prioridade à razão, mas reconheço a importância das emoções.", "traits": ["racionalidade", "consciência emocional"] }
    ]
  },
  {
    "question": "Como você lida com adversidades?",
    "options": [
      { "answer": "Enfrento-as de cabeça erguida.", "traits": ["resiliência", "força"] },
      { "answer": "Procuro resolver de forma pacífica.", "traits": ["paz", "compaixão"] },
      { "answer": "Analiso e busco uma solução estratégica.", "traits": ["sabedoria", "estratégia"] },
      { "answer": "Encontro força nos meus valores.", "traits": ["honra", "justiça"] }
    ]
  },
];
  