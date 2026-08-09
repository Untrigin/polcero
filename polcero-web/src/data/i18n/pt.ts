import type { SiteContentOverride } from './overrides';

export const pt: SiteContentOverride = {
  tagline: 'Robôs modulares autónomos para a indústria e a agricultura',
  nav: {
    products: 'Produtos',
    solutions: 'Soluções',
    services: 'Áreas',
    industries: 'Indústrias',
    useCases: 'Casos de uso',
    company: 'Empresa',
    news: 'Notícias',
    contact: 'Contacto',
    cta: 'Fale connosco',
  },
  services: {
    eyebrow: 'ÁREAS DE NEGÓCIO',
    h2: [
      { text: 'Cinco áreas, ', weight: 300 },
      { text: 'um cérebro de IA', weight: 700 },
    ],
    lead: 'Dos cobots prontos a usar à fotónica em laboratório - todas as áreas assentam na mesma camada de inteligência POLCERO.',
    cta: 'Explorar as áreas',
    all: 'Todas as áreas',
  },
  branches: [
    {
      tagline: 'Cobots industriais e AMR', desc: 'Robôs colaborativos industriais, empilhadores autónomos e plataformas AMR - concebidos e entregues por encomenda.',
      intro: 'Os robôs já existem - o que falta são os sistemas que os controlam. Construímos essa camada em falta: instalamos conhecimento, um plano e "olhos" (câmaras, sensores) na máquina, ligamo-la à IA e fazemo-la trabalhar por si só - sem condutor e sem supervisão constante. A ICB Robots é a área operacional ativa da POLCERO: concebemos, construímos e implementamos cobots, empilhadores autónomos, plataformas AMR e sistemas de produção automatizados.',
      points: ['Robôs colaborativos (cobots)', 'Empilhadores autónomos', 'Plataformas AMR', 'Centro de controlo', 'Produção autónoma', 'Linhas de produção'],
      note: 'Área ativa · experiência da equipa desde 1980',
      sections: [
        { title: 'Cobots', desc: 'Apoiam pessoas, automatizam, abastecem, montam e transportam.' },
        { title: 'Empilhadores autónomos', desc: 'Transportam, elevam, digitalizam, localizam e evitam obstáculos.' },
        { title: 'Plataforma AMR', desc: 'Entra, eleva, transporta, navega, evita e entrega.' },
        { title: 'Centro de controlo', desc: 'Monitoriza, analisa, alerta, responde, protege e reporta.' },
        { title: 'Produção autónoma', desc: 'Separa, embala, etiqueta, inspeciona, movimenta e sincroniza.' },
        { title: 'Linhas de produção', desc: 'Otimiza, automatiza, controla, integra, monitoriza e melhora.' },
        { title: 'O cérebro de IA POLCERO em cada robô', desc: 'Todos os produtos ICB são alimentados pela camada de inteligência POLCERO AI Systems: modelos VLA, deteção de classe YOLO, navegação SLAM e gestão de frota. O mesmo cérebro é afinado com os dados do seu processo. Programação: Python, C++ e ROS.' },
      ],
    },
    {
      tagline: 'O cérebro de IA para qualquer robô', desc: 'Construímos a camada de inteligência para robôs humanoides e especializados: perceção, planeamento, autonomia e gestão de frota.',
      intro: 'A POLCERO constrói uma camada de inteligência de IA - perceção, planeamento, controlo e gestão de frota - para robôs humanoides e especializados. A mesma stack de IA serve todas as áreas POLCERO: modelos VLA afinados, visão YOLO, arquitetura edge+cloud e um volante de dados. O hardware do robô pode ser do próprio cliente ou do nosso catálogo; nós fornecemos a inteligência.',
      points: ['Afinação de modelos VLA', 'Visão e perceção', 'Arquitetura edge + cloud', 'Controlo clássico onde é suficiente', 'Gestão de frota'],
      sections: [
        { title: 'Afinação de VLA', desc: 'Modelos VLA abertos (GR00T N1.7, π0, OpenVLA) afinados com dados do cliente. Uma camada de abstração permite trocar os modelos base sem voltar a treinar a inteligência das tarefas.' },
        { title: 'Visão e perceção', desc: 'Deteção de classe YOLO para reconhecimento de objetos em tempo real, câmaras de profundidade (RGB-D), LiDAR, imagem multiespectral e térmica, e um VLM para compreensão de cena e linguagem.' },
        { title: 'Arquitetura edge + cloud', desc: 'Inferência edge a bordo para controlo com latência inferior a 10 ms. A cloud para atualizações de treino, análise e gestão de frota. Um volante de dados melhora continuamente o desempenho.' },
        { title: 'Controlo clássico onde é suficiente', desc: 'Controladores PID para preensão e corte simples e repetitivos - menor custo, maior fiabilidade. Reservamos a IA para perceção complexa e decisões de compreensão de cena.' },
      ],
    },
    {
      tagline: 'Plataforma + robôs especializados', desc: 'A plataforma modular POLCERO e um catálogo de robôs que implementamos com o nosso cérebro de IA - para qualquer mercado, por encomenda.',
      intro: 'A área Robots é a plataforma modular no cerne de tudo o que construímos - um cérebro de IA comum, uma interface normalizada, chassis intercambiáveis e módulos de tarefa plug-and-play. Também implementamos robôs do catálogo de parceiros, sobrepondo-lhes o nosso cérebro de IA para qualquer mercado.',
      points: ['Cérebro de IA', 'Interface plug-and-play', 'Família de chassis', 'Módulos de tarefa', 'Robôs agrícolas', 'Robôs para estaleiros', 'Máquinas de IA estacionárias'],
      sections: [
        { title: 'Cérebro de IA', desc: 'Modelos VLA + YOLO afinados com dados do cliente. Inferência edge e treino na cloud. A mesma camada de inteligência adapta-se a cada chassis e mercado.' },
        { title: 'Interface plug-and-play', desc: 'Um conector mecânico e elétrico normalizado. Troque o chassis ou os módulos de tarefa sem redesenhar a camada de inteligência - um único ponto de integração para todas as combinações.' },
        { title: 'Família de chassis', desc: 'W4 (rodas), T6 (lagartas), WL4 (roda-perna), Q4 (pernas). As plataformas de rodas são cerca de 2,5 vezes mais eficientes em energia do que as de pernas em terreno plano - ajustadas ao terreno e à tarefa.' },
        { title: 'Módulos de tarefa', desc: 'Garra macia, cabeça de pulverização/fertirrega, mastro sensorial (RGB-D / multiespectral / térmico), portador logístico, manipulador remoto - encaixe a ferramenta certa para a tarefa.' },
        { title: 'Robôs agrícolas', desc: 'Plataformas de campo autónomas para sementeira, tratamento, pulverização de precisão e colheita seletiva. Fusão de sensores RGB-D + multiespectral + térmico para monitorização do estado das culturas.' },
        { title: 'Robôs para estaleiros', desc: 'Marcação BIM-para-campo, perfuração, movimentos de terra autónomos, inspeção face a um gémeo digital. Autonomia supervisionada por humanos em todo o processo.' },
        { title: 'Máquinas de IA estacionárias', desc: 'Robôs de braço fixo e postos de trabalho inteligentes para inspeção, controlo de qualidade, montagem repetitiva e manuseamento de materiais em linhas de produção.' },
      ],
    },
    {
      tagline: 'IA agrícola + robôs de campo', desc: 'Frota de robôs de campo autónomos com o cérebro do agricultor-IA: sementeira, tratamento, colheita seletiva - modelo RaaS (robô como serviço).',
      intro: 'A Farma AI é a área agrícola da POLCERO: uma frota de robôs de campo autónomos governada pelo cérebro supervisor do "agricultor-IA" para o ciclo completo da cultura - sementeira, tratamento (monda, pulverização localizada), monitorização e colheita seletiva de legumes delicados. Concebida para grandes explorações de legumes, entregue como Robot-as-a-Service (RaaS) - sem investimento de capital.',
      points: ['Sementeira', 'Tratamento - monda e desbaste', 'Pulverização localizada / microdosagem', 'Monitorização', 'Colheita seletiva'],
      sections: [
        { title: 'Sementeira', desc: 'Transplantação fila a fila de precisão ou sementeira direta com navegação RTK/SLAM. Precisão de colocação inferior ao centímetro no chassis POLCERO-W4.' },
        { title: 'Tratamento - monda e desbaste', desc: 'Deteção de infestantes por visão computacional mais monda mecânica ou térmica. Sem herbicida para as infestantes identificadas - apenas pulverização localizada dirigida.' },
        { title: 'Pulverização localizada / microdosagem', desc: 'Aplicação seletiva de fertilizante ou produtos fitofarmacêuticos apenas onde a IA deteta necessidade. Reduz o uso de química até 90% face à pulverização generalizada.' },
        { title: 'Monitorização', desc: 'Varrimento diário do campo com câmaras RGB-D + multiespectrais + térmicas. Mapa do estado das culturas, alerta precoce de doenças e previsão da maturação para colheita.' },
        { title: 'Colheita seletiva', desc: 'Colheita seletiva de legumes delicados (a começar por alfaces) - a lacuna por resolver mais difícil na automação agrícola. Garra macia mais deteção de maturação por IA.' },
      ],
    },
    {
      tagline: 'Computação de IA com luz', desc: 'Direção de I&D: computação fotónica para acelerar a inferência de IA nos nossos robôs - menos consumo, maior desempenho.',
      intro: 'Os Processadores Fotónicos são a direção de I&D da POLCERO: acelerar a inferência de IA nos nossos robôs usando luz em vez de apenas eletrónica. A multiplicação óptica de matrizes - a operação central nas redes neuronais - pode ser feita numa única passagem óptica por um chip fotónico, proporcionando latência sub-nanossegundo e um consumo de energia por operação ordens de grandeza inferior ao dos chips GPU/ASIC.',
      points: ['Multiplicação óptica de matrizes', 'Arquitetura híbrida fotónica-eletrónica', 'Mercado: de 1,8 mil milhões para 14,6 mil milhões USD', 'A fotónica como futura camada de computação'],
      sections: [
        { title: 'Multiplicação óptica de matrizes', desc: 'A inferência de redes neuronais é dominada pela multiplicação matriz-vetor (GEMM). Os chips fotónicos executam-na com luz que atravessa malhas de interferómetros de Mach-Zehnder - fazendo numa única passagem óptica o que a eletrónica precisa de milhares de ciclos de relógio para calcular.' },
        { title: 'Arquitetura híbrida fotónica-eletrónica', desc: 'Os chips fotónicos destacam-se em operações lineares (matemática de matrizes), mas não nas não lineares (funções de ativação). A arquitetura de consenso combina núcleos ópticos para a matemática de matrizes com unidades eletrónicas para as ativações - um projeto híbrido que aproveita o melhor de ambos.' },
        { title: 'Mercado: de 1,8 mil milhões para 14,6 mil milhões USD', desc: 'O mercado global de aceleradores de IA fotónicos, de 2025 a 2034 (CAGR de 26,3%). Em 2026, acompanhamos 52 empresas de computação fotónica a nível mundial.' },
        { title: 'A fotónica como futura camada de computação', desc: 'À medida que os aceleradores fotónicos atinjam a maturidade (uma janela de 2027-2031 para produtos de classe centro de dados), a arquitetura do cérebro de IA POLCERO está preparada para os absorver - a camada de abstração permite trocar o substrato de computação sem voltar a treinar a inteligência das tarefas.' },
      ],
    },
  ],
  hero: {
    eyebrow: 'ROBÔS MODULARES · POLÓNIA',
    h1: [
      { text: 'Robôs ', weight: 300 },
      { text: 'modulares', weight: 700 },
      { text: ' autónomos', weight: 300 },
    ],
    subhead: 'Não construímos um único robô. Construímos um ecossistema que só faz sentido em conjunto.',
    h2: [
      { text: 'Uma plataforma, ', weight: 300 },
      { text: 'módulos permutáveis', weight: 700 },
      { text: ', qualquer tarefa.', weight: 300 },
    ],
    body: 'A POLCERO reúne três camadas: uma plataforma de IA que planeia e supervisiona o trabalho, o transporte que entrega o robô no local e um robô modular que escolhe o seu próprio chassis e módulo de tarefa para a tarefa que encontra. Define um objetivo, não um movimento.',
    ctaPrimary: 'Falar sobre implementação',
    ctaSecondary: 'Ver a plataforma',
    imageAlt: 'Robô modular POLCERO numa plataforma móvel numa nave de produção',
  },
  stats: [
    { label: 'carga do drone de transporte' },
    { label: 'valor das primeiras implementações' },
    { label: 'menor custo de colheita por unidade' },
    { label: 'primeiras implementações em clientes' },
  ],
  platform: {
    h2: [
      { text: 'Um cérebro que ', weight: 300 },
      { text: 'define um objetivo', weight: 700 },
      { text: ' - não um movimento pré-programado.', weight: 300 },
    ],
    body: 'A plataforma de IA recebe a tarefa, planeia a sua execução, supervisiona o processo e documenta o resultado. O robô aprende por demonstração - um operador executa a tarefa, o sistema compreende e atua de forma autónoma, sem programação complexa. Os modelos podem correr localmente, no dispositivo, sem enviar imagens para o exterior.',
    cta: 'Como funciona a plataforma',
    layers: [
      { title: 'Camada de IA', body: 'Planeamento, supervisão e documentação da tarefa. Os dados e a conformidade permanecem na União Europeia.' },
      { title: 'Camada de transporte', body: 'Um drone de transporte entrega o robô onde o acesso é dispendioso ou impossível - e, no futuro, os próprios robôs.' },
      { title: 'Robô modular', body: 'Um módulo central comum, chassis e módulos de tarefa permutáveis. Lê a situação e escolhe a sua própria ferramenta.' },
    ],
  },
  tabs: {
    h2: [
      { text: 'Onde ', weight: 300 },
      { text: 'a POLCERO trabalha', weight: 700 },
    ],
    items: [
      {
        label: 'Indústria',
        title: 'O robô desloca-se até ao posto - não está aparafusado a ele',
        body: 'Um humanoide sobre uma plataforma móvel entra numa nave concebida para pessoas sem a reconstruir. Alcança onde um trabalhador alcança, atende vários postos em vez de ficar num só e executa duas operações num único ciclo.',
        alt: 'Robô humanoide POLCERO a operar um posto de montagem numa nave',
      },
      {
        label: 'Agricultura',
        title: 'Manipulação seletiva onde a colheita em massa falha',
        body: 'Um robô com um módulo de tarefa agrícola colhe legumes em estufas, túneis e no campo e, quando necessário, troca a garra por um laser para monda. Trabalha onde o sinal de satélite falha.',
        alt: 'Robô POLCERO a trabalhar entre filas de culturas num túnel de plástico',
      },
      {
        label: 'Logística',
        title: 'Transporte onde a estrada acaba',
        body: 'Um drone de transporte entrega peças, materiais e os próprios robôs em terreno montanhoso, estaleiros sem estradas pavimentadas e zonas isoladas após uma avaria ou cheia. O elo em falta do modelo de aluguer à hora.',
        alt: 'Drone de transporte POLCERO a transportar uma carga sobre terreno de difícil acesso',
      },
    ],
  },
  overview: {
    h2: [
      { text: 'Uma plataforma em ', weight: 300 },
      { text: 'muitas configurações', weight: 700 },
    ],
    lead: 'Não construímos uma máquina separada para cada tarefa. Construímos um módulo central, montamo-lo no chassis escolhido e equipamo-lo com um módulo de tarefa - a mesma máquina, uma ferramenta e um programa diferentes, executa uma tarefa diferente.',
  },
  cards: {
    eyebrow: 'DISPONÍVEL POR ENCOMENDA',
    h2: [
      { text: 'Robôs construídos ', weight: 300 },
      { text: 'em torno do processo', weight: 700 },
      { text: ' do cliente', weight: 300 },
    ],
  },
  mission: {
    h2: [
      { text: 'Cada nova implementação ', weight: 300 },
      { text: 'mais barata e mais rápida', weight: 700 },
      { text: ' do que a anterior', weight: 300 },
    ],
    body: 'O módulo central comum é reutilizável e os dados de implementações anteriores reduzem o treino dos modelos. Este é o nosso principal indicador de sucesso - o caminho de uma empresa de projetos a um fabricante de robôs.',
    imageAlt: 'Uma frota de robôs autónomos POLCERO numa fábrica de produção moderna',
  },
  closing: {
    h2: [
      { text: 'Vendemos o ', weight: 300 },
      { text: 'resultado', weight: 700 },
      { text: ', não a máquina.', weight: 300 },
    ],
    body: 'Faturamos por hectares colhidos, volume processado e prazos cumpridos. Assumimos o risco técnico, porque somos nós que respondemos pela tecnologia. Vamos falar sobre o seu processo.',
    cta: 'Fale connosco',
  },
  footer: {
    tagline: 'Robôs modulares autónomos para a indústria e a agricultura. Concebidos, construídos e assistidos na Polónia.',
    columns: [
      {
        title: 'Produtos',
        links: [
          { label: 'Humanoide' },
          { label: 'Humanoide sobre plataforma móvel' },
          { label: 'Robôs especializados' },
          { label: 'Drone de transporte' },
          { label: 'Especificações' },
        ],
      },
      {
        title: 'Indústrias',
        links: [
          { label: 'Indústria' },
          { label: 'Agricultura' },
          { label: 'Construção' },
          { label: 'Logística' },
          { label: 'Setor público' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Áreas' },
          { label: 'Sobre nós' },
          { label: 'Notícias' },
          { label: 'Contacto' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          { label: 'Plataforma POLCERO OS' },
          { label: 'Sobre nós (PDF)' },
          { label: 'RSS' },
        ],
      },
    ],
    legal: 'Política de privacidade',
    rights: 'Todos os direitos reservados.',
  },
  products: [
    {
      name: 'Humanoide', category: 'Humanoide',
      blurb: 'O módulo central completado com pernas e dois braços. Entra em espaços concebidos para pessoas e opera máquinas feitas para operação manual.',
      subtitle: 'Trabalha onde as pessoas trabalham',
      uses: ['Ocupar postos concebidos para pessoas', 'Montagem e trabalho físico repetitivo', 'Operar máquinas feitas para operação manual', 'Apoio doméstico e limpeza (roteiro)'],
    },
    {
      name: 'Humanoide sobre plataforma móvel', category: 'Humanoide',
      blurb: 'O mesmo humanoide sobre uma base móvel. Desloca-se até ao posto e atende vários pontos em vez de ficar num só.',
      subtitle: 'Um robô, muitos postos',
      uses: ['Atender vários postos a partir de uma máquina', 'Fechar lacunas entre máquinas no chão de fábrica', 'Transporte interno entre postos', 'Duas operações num único ciclo'],
    },
    {
      name: 'Robôs especializados', category: 'Robôs especializados',
      blurb: 'O mesmo módulo central - controlo, IA e baterias de troca rápida - no chassis de que o seu terreno precisa: com pernas, de lagartas, de rodas ou roda-perna. Troque a plataforma, mantenha o cérebro e os módulos de tarefa.',
      subtitle: 'Um módulo central, quatro chassis',
      uses: ['Inspeção e monitorização em terreno difícil', 'Patrulha de infraestruturas e instalações', 'Trabalho de campo e transporte em terreno não pavimentado', 'Trabalho e transporte de materiais em estaleiros', 'Transporte interno e monitorização em pavimentos'],
      platforms: [
        { name: 'Robô com pernas', drive: 'Chassis com pernas (4 pernas)', terrain: 'Escadas, obstáculos, piso irregular', blurb: 'O módulo central sobre um chassis com pernas. Vence escadas, lancis e terreno que as rodas não conseguem.' },
        { name: 'Robô de lagartas', drive: 'Chassis de lagartas', terrain: 'Terreno não pavimentado, acidentado, estaleiros', blurb: 'Um chassis de lagartas para terreno acidentado e irregular, estaleiros e trabalho no campo.' },
        { name: 'Robô de rodas', drive: 'Chassis de rodas', terrain: 'Pavimentos, armazéns, piso plano', blurb: 'Um chassis de rodas rápido e silencioso para pavimentos industriais, armazéns e monitorização.' },
        { name: 'Robô roda-perna', drive: 'Chassis roda-perna', terrain: 'Piso plano, obstáculos e carris', blurb: 'Um chassis híbrido roda-perna: rola no plano e vence obstáculos e carris.' },
      ],
    },
    {
      name: 'Drone de transporte', category: 'Drone de transporte',
      blurb: 'Um drone de transporte pesado para levar robôs, módulos e cargas a locais de difícil acesso. Entregamos o robô onde o acesso é impossível.',
      specs: [ { label: 'Carga máxima' }, { label: 'Peso do drone' }, { label: 'Construção', value: 'modular' }, { label: 'Transporta', value: 'robôs · módulos · cargas' } ],
      subtitle: 'Entrega o robô onde não há estrada',
      uses: ['Entrega de robôs, módulos e cargas a locais de difícil acesso', 'Entregas após uma avaria ou cheia', 'Transporte para terreno montanhoso e florestal', 'Abastecimento de estaleiros sem estradas'],
    },
    {
      name: 'POLCERO OS', category: 'Software',
      blurb: 'O módulo central com a camada de IA: controlo, perceção e planeamento. O robô aprende por demonstração - um operador executa a tarefa, o sistema compreende e atua de forma autónoma, reduzindo o tempo de programação até dez vezes.',
      subtitle: 'O cérebro de IA que aprende por demonstração',
      price: 'Incluído na implementação',
      uses: ['Ensinar o robô por demonstração', 'Planeamento, supervisão e documentação de tarefas', 'Gestão de frota de robôs', 'Operação local com dados na UE'],
    },
  ],
  industries: [
    {
      name: 'Indústria', blurb: 'Um humanoide sobre plataforma móvel em naves concebidas para pessoas.',
      intro: 'As naves de produção, os postos, os transportadores e as alturas de trabalho foram concebidos para pessoas durante décadas. Um robô com proporções humanas entra nesse ambiente sem o reconstruir - alcança onde um trabalhador alcança e opera máquinas feitas para operação manual. O cliente não adapta a fábrica ao robô, apenas o robô à fábrica.',
      challenges: [
        { title: 'Escassez de mão de obra', text: 'O trabalho físico repetitivo e de limpeza é cada vez mais difícil de preencher, e a rotatividade continua a aumentar.' },
        { title: 'Postos fixos', text: 'Os robôs industriais estão aparafusados a um único ponto e não acompanham as mudanças de processo.' },
        { title: 'Reconstruções dispendiosas', text: 'A automação implica normalmente redesenhar a nave em torno da máquina, elevando a barreira de entrada.' },
        { title: 'Integração com as máquinas existentes', text: 'Um novo equipamento tem de trabalhar com as máquinas que o cliente já opera.' },
      ],
      approach: [
        { title: 'O robô desloca-se até ao posto', text: 'Um humanoide sobre plataforma móvel atende vários postos em vez de ficar num só e fecha as lacunas entre máquinas.' },
        { title: 'Duas operações por ciclo', text: 'Uma configuração de dois braços com rotação na cintura aumenta o rendimento do posto em trabalho repetitivo.' },
        { title: 'Implementação chave na mão', text: 'Projeto, construção, integração, comissionamento, documentação e assistência - a partir de 2 milhões de PLN, com avaliação de conformidade.' },
      ],
    },
    {
      name: 'Agricultura', blurb: 'Colheita seletiva e tratamento em túneis e estufas.',
      intro: 'Os grandes fabricantes agrícolas são muito bons na colheita em massa e na navegação em campo aberto. A manipulação seletiva em culturas macias e delicadas, e o trabalho em túneis e estufas onde o sinal de satélite falha, permanecem mal servidos. Esta é a nossa área, e escolhemo-la deliberadamente.',
      challenges: [
        { title: 'Escassez de mão de obra sazonal', text: 'Uma única exploração emprega de cem a cento e cinquenta pessoas no pico - e há cada vez menos disponíveis.' },
        { title: 'Custos de mão de obra crescentes', text: 'O custo total de um trabalhador sazonal ronda hoje os 15 900 PLN por mês, e continua a subir.' },
        { title: 'Pressão para reduzir a química', text: 'O tratamento e a monda têm de ser cada vez mais precisos e localizados.' },
        { title: 'Uma época curta', text: 'Uma exploração precisa da máquina durante seis meses - não faz sentido imobilizar capital nela o ano inteiro.' },
      ],
      approach: [
        { title: 'Um módulo de tarefa agrícola', text: 'Um robô com braços e garra colhe a cultura e, quando necessário, troca a ferramenta por um laser para monda.' },
        { title: 'Faturação por resultado', text: 'Visamos 9-12 groszy por unidade contra 15-20 na colheita manual - cerca de 40% menos.' },
        { title: 'Trabalha sem GPS', text: 'Colheita seletiva e tratamento em túneis e estufas onde a navegação por satélite falha.' },
      ],
    },
    {
      name: 'Construção', blurb: 'Inspeção, transporte pesado e patrulha de SST - trabalho humano que os robôs podem assumir.',
      intro: 'No estaleiro, os robôs assumem trabalho que é arriscado ou fastidioso para as pessoas: inspeção e captura da realidade face ao modelo BIM, marcação, transporte pesado e patrulhas de SST. Um chassis de lagartas lida com terreno não pavimentado e irregular, enquanto o drone de transporte reforça os abastecimentos a partir do exterior.',
      challenges: [
        { title: 'Riscos de segurança', text: 'O trabalho em altura, com poeira e junto a máquinas em movimento é perigoso para as pessoas.' },
        { title: 'Divergência BIM-realidade', text: 'O estado real diverge do modelo, e detetar as diferenças leva tempo.' },
        { title: 'Monitorização de progresso tardia', text: 'A documentação do progresso é feita raramente e à mão.' },
        { title: 'Terreno difícil e não pavimentado', text: 'O acesso e o transporte de materiais num estaleiro sem estradas é dispendioso.' },
      ],
      approach: [
        { title: 'Inspeção e captura da realidade face ao BIM', text: 'O robô capta o estado do estaleiro e compara-o com o modelo, assinalando diferenças.' },
        { title: 'Transporte em terreno difícil', text: 'Um chassis de lagartas move materiais entre zonas enquanto o drone os traz do exterior.' },
        { title: 'Patrulha de SST e monitorização', text: 'Rondas regulares e documentação sem pôr pessoas em risco, com os dados do lado do cliente.' },
      ],
    },
    {
      name: 'Logística', blurb: 'Um drone de transporte onde a estrada acaba.',
      intro: 'Um robô vale o que vale no local onde é necessário. A camada de transporte - com um drone que transporta até 500 quilogramas, um protótipo que já temos - entrega peças, materiais e os próprios robôs onde o acesso é dispendioso, lento ou impossível.',
      challenges: [
        { title: 'Terreno de difícil acesso', text: 'Zonas montanhosas e florestais, estaleiros sem estradas pavimentadas, zonas isoladas após uma avaria ou cheia.' },
        { title: 'Custo de frota e motoristas', text: 'A manutenção de veículos e motoristas, e a dependência do trânsito e do estado das estradas, oneram cada serviço.' },
        { title: 'Descarga e paletização', text: 'O transporte interno pesado e repetitivo no armazém continua a exigir mãos.' },
        { title: 'A última milha do robô', text: 'O custo e o tempo de entregar o robô determinam a viabilidade do aluguer à hora.' },
      ],
      approach: [
        { title: 'Drone de transporte', text: 'Entrega cargas, pessoas e robôs onde a estrada acaba - sem manter uma frota.' },
        { title: 'Cobots e plataformas AMR', text: 'ICB Robots para descarga, picking e transporte interno, entregues por encomenda.' },
        { title: 'Robô entregue no local', text: 'O elo em falta do modelo de aluguer à hora - o robô serve vários clientes no mesmo dia.' },
      ],
    },
    {
      name: 'Setor público', blurb: 'Dados e conformidade na UE. No dispositivo, sem enviar imagens para o exterior.',
      intro: 'Para muitas instituições, os dados das naves de produção e das infraestruturas são informação sensível. Os nossos modelos podem correr localmente, no dispositivo, sem enviar imagens para o exterior. Com o aumento das exigências regulatórias, isto deixa de ser um argumento técnico e passa a ser uma condição de compra.',
      challenges: [
        { title: 'Exigências regulatórias', text: 'A conformidade e a auditabilidade são uma condição da conversa, não um extra.' },
        { title: 'Sensibilidade dos dados', text: 'As imagens e os dados operacionais não podem sair da organização nem da União Europeia.' },
        { title: 'Controlo da cadeia de abastecimento', text: 'As instituições públicas esperam uma cadeia de abastecimento europeia e transparente.' },
        { title: 'Fabrico na UE', text: 'O valor acrescentado - projeto, software, montagem e assistência - deve ser criado no local.' },
      ],
      approach: [
        { title: 'Modelos no dispositivo', text: 'A perceção e a inferência correm localmente; os dados e a conformidade permanecem na União Europeia.' },
        { title: 'Concebido e construído na Polónia', text: 'Uma fábrica em Kietrz e fornecedores polacos para a maioria dos componentes - controlo sobre a cadeia de abastecimento.' },
        { title: 'Direção fotónica (I&D)', text: 'A computação fotónica acelera a inferência de IA com menor consumo de energia.' },
      ],
    },
  ],
};
