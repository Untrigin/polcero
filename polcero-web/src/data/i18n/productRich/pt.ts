import type { ProductRichOverride } from '../../productRich';

// ── Blocos partilhados (base traduzida) reutilizados nos produtos-robô ─────────
const batteryRobot: ProductRichOverride['battery'] = {
  image: '/media/battery.webp',
  alt: 'Bateria hot-swap POLCERO',
  title: 'Bateria e energia',
  lead: 'Cada robô funciona com três baterias hot-swap alojadas no módulo central. Cada bateria é uma unidade autónoma de 48 V, por isso a potência escala com o número de baterias e uma descarregada é substituída sem ferramentas enquanto o robô continua a trabalhar com as restantes.',
  rows: [
    { label: 'Tensão da bateria', value: '48 V hot-swap' },
    { label: 'Energia por bateria', value: '≈ 864 Wh cada' },
    { label: 'Baterias no módulo central', value: '3 (≈ 2.6 kWh no total)' },
    { label: 'Autonomia com bateria', value: '≈ 5 h em serviço típico' },
    { label: 'Com energia direta', value: '24/7 (cabo ou rede)' },
    { label: 'Tempo de troca', value: '< 60 s por bateria, sem ferramentas' },
  ],
};

const swapRobot: ProductRichOverride['swap'] = {
  image: '/media/battery-swap.webp',
  alt: 'Como um robô POLCERO troca a sua própria bateria',
  title: 'Baterias que se trocam a si próprias — sem paragens',
  lead: 'O robô nunca se desliga por completo para recarregar. Roda as suas três baterias uma de cada vez, funcionando com as duas restantes enquanto uma descarregada carrega — para que o turno não pare por causa da bateria.',
  robot: {
    title: 'O robô fá-lo sozinho',
    steps: [
      'Ao detetar uma bateria a ficar fraca, o robô dirige-se à estação de carregamento e mantém o estado nas duas baterias restantes.',
      'Um braço alcança a parte de trás do módulo central, liberta o fecho e retira a bateria descarregada.',
      'Aloja a bateria num compartimento livre da estação de 4 baias e leva no seu lugar uma totalmente carregada.',
      'A bateria nova encaixa; o robô repete o processo para cada bateria e regressa ao trabalho — nunca desligado, nunca parado.',
    ],
  },
  human: {
    title: 'Uma pessoa consegue fazê-lo em segundos',
    steps: [
      'Sem desligar e sem ferramentas: as baterias trocam-se a quente enquanto o robô fica pronto.',
      'Prima o fecho na parte de trás do módulo central e puxe a bateria em linha reta.',
      'Deslize uma bateria carregada até encaixar — o robô retoma onde ficou.',
    ],
  },
};

const statusRobot: ProductRichOverride['status'] = {
  image: '/media/battery-status.webp',
  alt: 'Painel de estado da bateria POLCERO e estação de carregamento de 4 baias',
  title: 'Estado da bateria e a estação de carregamento',
  lead: 'Cada bateria comunica o seu próprio estado, por isso o robô e os seus operadores sabem sempre quando trocar. Uma estação de carregamento de 4 baias mantém uma rotação de baterias prontas, e o robô acopla para trocar as suas próprias baterias durante o trabalho.',
  points: [
    { title: 'Estado por bateria em tempo real', text: 'Estado de carga, saúde e temperatura de cada uma das três baterias, em tempo real.' },
    { title: 'Troca preditiva', text: 'O sistema agenda a próxima troca antes de uma bateria se esgotar, para que o trabalho nunca seja interrompido a meio da tarefa.' },
    { title: 'Estação de carregamento de 4 baias', text: 'Quatro entradas de carregamento mantêm as baterias suplentes carregadas e prontas para a próxima rotação.' },
    { title: 'Acoplagem autónoma', text: 'O robô roda as suas próprias baterias na estação durante um turno — sem operador e sem paragens.' },
  ],
};

const visionRobot: ProductRichOverride['vision'] = {
  image: '/media/vision.webp',
  alt: 'As quatro vistas que um robô POLCERO constrói do mundo',
  title: 'Como o robô vê',
  lead: 'O robô constrói uma imagem do mundo a partir de várias vistas em simultâneo. Uma cabeça binocular de campo largo dá uma imagem esquerda e uma direita; a comparação entre elas gera profundidade; sobre isso, a camada de IA acrescenta uma vista de perceção que nomeia objetos, superfícies e pessoas.',
  views: [
    { label: 'Esquerda', text: 'O olho esquerdo da cabeça binocular — uma vista a cores de campo largo da cena.' },
    { label: 'Direita', text: 'O olho direito — a segunda vista a cores que o robô compara com a esquerda.' },
    { label: 'Profundidade', text: 'A disparidade estéreo entre esquerda e direita gera a distância a cada ponto do enquadramento.' },
    { label: 'Perceção', text: 'A camada de IA rotula objetos, superfícies, obstáculos e pessoas, e planeia o próximo movimento no dispositivo.' },
  ],
  extra: [
    { title: 'Câmaras nos pulsos', text: 'Câmaras HD em cada pulso dão uma vista de perto para agarrar e montar com precisão.' },
    { title: 'LiDAR + ultrassons', text: 'O LiDAR do chassis e os sensores ultrassónicos mapeiam o espaço e captam obstáculos para além das câmaras.' },
    { title: 'Força e IMU', text: 'Articulações com retorno de força e uma IMU detetam o contacto e o equilíbrio para um movimento seguro e estável.' },
    { title: 'Voz e linguagem', text: 'A interação por voz e um modelo de linguagem permitem que uma pessoa comande o robô por fala simples.' },
  ],
};

const powerRobot: ProductRichOverride['power'] = {
  title: 'Duas formas de o alimentar: baterias ou a rede',
  lead: 'O robô é autónomo com baterias, mas onde um local pode fornecer energia funciona diretamente da rede através de um cabo — sem baterias para rodar, sem paragens, menor custo de funcionamento.',
  modes: [
    { name: 'Baterias hot-swap', text: 'Totalmente móvel e autónomo. Três baterias rodam pela estação de carregamento para que o robô circule por qualquer lado sem cabo.' },
    { name: 'Energia direta (cabo)', text: 'Para uma estação fixa ou serviço 24/7, o robô recebe energia por cabo e funciona em contínuo — as baterias passam a ser reserva.' },
    { name: 'Infraestrutura de rede', text: 'Em naves, fábricas e estufas instalamos calhas de energia fixas; ao ar livre, em campos e pátios, linhas aéreas de condutores como a catenária dos elétricos. O robô recebe da linha e recarrega as suas baterias enquanto trabalha.' },
  ],
};

export const pt: Record<string, ProductRichOverride> = {
  humanoid: {
    battery: batteryRobot,
    swap: swapRobot,
    status: statusRobot,
    vision: visionRobot,
    power: powerRobot,
    application: {
      image: '/media/app-warehouse.webp',
      alt: 'Três humanoides POLCERO a trabalhar juntos num armazém moderno',
      title: 'Três humanoides, um armazém',
      body: 'É este o aspeto de um turno. Numa única sala, um humanoide embala uma encomenda na bancada, um segundo levanta do chão uma caixa metálica carregada e um terceiro empilha caixas numa estante. O mesmo robô, três tarefas — cada um entrou num espaço feito para pessoas e assumiu trabalho pensado para mãos humanas, sem nenhuma linha para reconstruir à sua volta.',
    },
  },
  'mobile-humanoid': {
    battery: batteryRobot,
    swap: swapRobot,
    status: statusRobot,
    vision: visionRobot,
    power: powerRobot,
    versions: {
      title: 'Duas versões de plataforma',
      lead: 'O mesmo tronco humanoide assenta na base móvel de que precisa — uma base leve e rebatível para recolha ao nível do chão, ou uma base pesada para levantar peso a sério.',
      items: [
        {
          image: '/media/mobile-v1.webp',
          alt: 'Humanoide de plataforma móvel rebatível, versão 1',
          name: 'V1 — base rebatível',
          blurb: 'O mastro dobra a meio, para que o robô se incline para recolher objetos do chão com pouca perda de potência. As rodas na base rodam o robô inteiro sobre si mesmo, tornando-o ágil em corredores estreitos e a alturas baixas de recolha.',
          specs: [
            { label: 'Ideal para', value: 'Recolha ao nível do chão, corredores estreitos' },
            { label: 'Base', value: 'Mastro rebatível, giro sobre si próprio' },
            { label: 'Alcance', value: 'Do chão à altura de trabalho' },
          ],
        },
        {
          image: '/media/p-mobile.webp',
          alt: 'Humanoide de plataforma móvel de serviço pesado, versão 2',
          name: 'V2 — base pesada',
          blurb: 'Uma plataforma móvel mais robusta, feita para levantar peso a sério. Mantém o corpo superior humanoide de dois braços, mas assenta numa base rígida de alta carga para manuseamento e montagem de peças industriais mais pesadas.',
          specs: [
            { label: 'Ideal para', value: 'Manuseamento pesado e montagem' },
            { label: 'Base', value: 'Plataforma rígida de alta carga' },
            { label: 'Carga nominal', value: '≈ 7 kg por braço' },
          ],
        },
      ],
    },
  },
  'specialized-robots': {
    battery: batteryRobot,
    swap: swapRobot,
    status: statusRobot,
    power: powerRobot,
    vision: {
      ...visionRobot,
      extra: [
        { title: 'Mastro de perceção', text: 'Num chassis especializado, o módulo central leva um mastro adicional de ferramentas e câmaras para a tarefa em causa.' },
        { title: 'LiDAR + ultrassons', text: 'O LiDAR do chassis e os sensores ultrassónicos mapeiam terreno acidentado e captam obstáculos para além das câmaras.' },
        { title: 'Multiespectral / térmico', text: 'Imagem multiespectral e térmica opcional para saúde das culturas, inspeção e trabalho noturno.' },
        { title: 'Computação no dispositivo', text: 'A deteção e o planeamento correm no dispositivo; os dados e a conformidade ficam na UE.' },
      ],
    },
    robots: {
      title: 'A linha especializada, robô a robô',
      lead: 'Cada um destes é o mesmo módulo central — controlo, IA e baterias hot-swap — num chassis diferente. Mantenha o cérebro e os módulos de tarefa; mude a plataforma para se adaptar ao terreno. Acrescente ou retire braços, uma garra, uma cabeça de colheita ou um mastro de sensores no conector de libertação rápida.',
      items: [
        {
          image: '/media/chassis-legged.webp',
          alt: 'Robô com pernas POLCERO',
          name: 'Robô com pernas',
          role: 'Escadas, obstáculos, terreno irregular',
          body: 'Um chassis de quatro pernas que vence escadas, lancis e terreno acidentado que nenhuma roda encara. Percorre rotas de inspeção em fábricas, subestações e locais concebidos para pessoas, não para máquinas.',
          modify: 'Acrescente um ou dois braços com garra para manipulação, ou um mastro de sensores para inspeção. Troque para uma base de rodas ou de lagartas quando o terreno se torna plano ou mole.',
        },
        {
          image: '/media/chassis-tracked.webp',
          alt: 'Robô de lagartas POLCERO',
          name: 'Robô de lagartas',
          role: 'Terreno não pavimentado, pesado, obras',
          body: 'Um chassis de lagartas para lama, entulho e terreno íngreme e não pavimentado. Transporta carga por uma obra ou campo aberto onde as rodas se atolam e as pernas são demasiado lentas.',
          modify: 'Monte um transportador logístico para transporte pesado, um braço para manuseamento ou um mastro topográfico para inspeção BIM. O mesmo corpo passa a pernas ou rodas quando a tarefa muda.',
        },
        {
          image: '/media/chassis-wheeled.webp',
          alt: 'Robô de rodas POLCERO',
          name: 'Robô de rodas',
          role: 'Pisos, armazéns, terreno plano',
          body: 'Um chassis de rodas rápido e silencioso para pisos industriais e armazéns — cerca de 2.5× mais eficiente em energia do que as pernas em terreno plano. Ideal para patrulha, monitorização e transporte interno.',
          modify: 'Acrescente braços e uma garra para pick-and-place, um mastro de sensores para monitorização ou um transportador para transporte. Passe o módulo central para uma base de lagartas para sair do pavimento.',
        },
        {
          image: '/media/chassis-wheelleg.webp',
          alt: 'Robô roda-perna POLCERO',
          name: 'Robô roda-perna',
          role: 'Terreno plano, obstáculos e carris',
          body: 'Um chassis híbrido roda-perna: rola depressa no plano e, quando encontra um degrau, um lancil ou um carril, as pernas erguem as rodas por cima. Uma plataforma para ambientes mistos que de outro modo exigiriam dois robôs.',
          modify: 'Braços, garra, cabeça de colheita ou mastro de sensores montam-se todos no conector de libertação rápida. Retire as pernas para uma base puramente de rodas, ou volte a colocá-las quando a rota se torna acidentada.',
        },
        {
          image: '/media/chassis-arm.webp',
          alt: 'Robô-braço POLCERO fixo numa plataforma ou máquina',
          name: 'Braço numa plataforma',
          role: 'Linhas de produção, máquinas móveis, cabeçotes',
          body: 'O módulo central fixo num único ponto — numa linha de produção, ou montado numa máquina em movimento ou cabeçote. Num cabeçote de colheita de alface, por exemplo, os braços cortam e depositam a cultura diretamente no tapete à medida que a máquina avança.',
          modify: 'Escolha um ou dois braços com garra, cortador ou cabeça de colheita. Monte-o fixo numa linha, ou em qualquer máquina anfitriã que o leve pelo campo.',
        },
        {
          image: '/media/chassis-rails.webp',
          alt: 'Robô POLCERO a circular sobre carris',
          name: 'Robô sobre carris',
          role: 'Estufas, filas, rotas fixas',
          body: 'Uma versão guiada por carris para estufas e estufas de vidro dispostas em filas fixas. Circula sobre os carris de tubo aquecido entre culturas para pulverização, monitorização e colheita seletiva precisas e repetíveis.',
          modify: 'Acrescente uma cabeça de pulverização ou fertirrigação, um mastro de sensores ou uma garra flexível. O mesmo módulo central sai dos carris para uma base de rodas ou roda-perna em terreno aberto.',
        },
      ],
    },
  },
  'transport-drone': {
    battery: {
      image: '/media/battery.webp',
      alt: 'Bateria do dron de transporte POLCERO',
      title: 'Bateria e energia',
      lead: 'O dron de transporte voa com a sua própria bateria de alto rendimento e leva baterias hot-swap para os robôs que entrega. A sua função é mover os robôs para que cheguem com as próprias baterias cheias e gastem a sua energia no trabalho, não na viagem.',
      rows: [
        { label: 'Carga máxima', value: '500 kg' },
        { label: 'Peso do dron', value: '90 kg' },
        { label: 'Transporta', value: 'robôs · módulos · baterias carregadas' },
        { label: 'Construção', value: 'modular' },
      ],
    },
    drone: {
      images: [
        { src: '/media/p-drone.webp', alt: 'Dron de transporte POLCERO' },
        { src: '/media/drone-duo.webp', alt: 'Dron POLCERO a transportar um robô' },
      ],
      title: 'O dron transporta os robôs',
      body: 'O nosso objetivo é que o dron transporte robôs e humanoides pelas distâncias mais longas, para que os robôs guardem a energia para a tarefa em vez de a gastarem a chegar lá. O dron transporta também módulos e chassis intermutáveis, para que um robô chegue capaz de escolher o módulo de tarefa e a plataforma que o seu ambiente exige.',
      points: [
        'Os robôs viajam para o local com as baterias cheias e aterram prontos a trabalhar.',
        'Chassis e módulos de tarefa intermutáveis viajam com o dron.',
        'Entrega onde a estrada acaba — montanhas, locais sem estradas pavimentadas, áreas isoladas após uma cheia.',
        'O elo em falta do modelo de aluguer à hora: um robô serve vários clientes no mesmo dia.',
      ],
    },
  },
  'polcero-os': {
    vision: visionRobot,
  },
};
