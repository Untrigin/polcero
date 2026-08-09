import type { RichBranch, DeepPartial } from '../../branchRich';

export const pt: Record<string, DeepPartial<RichBranch>> = {
  'icb-robots': {
    stats: [
      { label: 'Em atividade desde' },
      { label: 'Anos de experiência' },
      { label: 'Setores industriais' },
      { label: 'Robótica como serviço (RaaS)' },
    ],
    productsHeading: {
      eyebrow: 'Especificações do produto',
      title: 'Dados reais do catálogo ICB',
      desc: 'Especificações publicadas da linha de produtos POLCERO / ICB Robots.',
    },
    products: [
      {
        name: 'Robô de montagem e manipulação de precisão controlado por IA',
        desc: 'Concebido para tarefas complexas com elevada precisão. Controlado pelo nosso software e sistema de visão com IA, opera em diferentes ambientes de produção e corrige o próprio movimento em tempo real. Programamo-lo para o seu processo, instalamo-lo e prestamos assistência.',
        specs: [
          { label: 'Carga útil' },
          { label: 'Alcance' },
          { label: 'Repetibilidade' },
          { label: 'Temperatura de funcionamento' },
          { label: 'Garantia' },
          { label: 'Controlo' },
        ],
        points: [
          'Sistema de visão com IA para correção de movimento em tempo real',
          'Opera em diferentes ambientes de produção sem reconfiguração de ferramentas',
          'Programação personalizada por processo - configuramos, instalamos e prestamos assistência',
          'Aplicável em produção, logística e controlo de qualidade',
        ],
      },
      {
        name: 'Braços robóticos inteligentes de 6 eixos',
        desc: 'Seis graus de movimento para tarefas complexas em espaços de produção reduzidos. Compacto e de fácil integração - precisão e velocidade onde o espaço no chão é limitado. Disponível em variante de montagem no teto.',
        specs: [
          { label: 'Graus de liberdade' },
          { label: 'Repetibilidade' },
          { label: 'Carga útil' },
          { label: 'Opções de montagem' },
        ],
        points: [
          'Elevada repetibilidade para tarefas de precisão',
          'Elevada capacidade de carga admissível',
          'Versão de montagem no teto disponível - poupa espaço no chão',
          'Aplicações: montagem, embalagem, soldadura, controlo de qualidade',
        ],
      },
    ],
    servicesHeading: {
      eyebrow: 'Categorias de serviço',
      title: 'Seis formas de robotizar a sua fábrica',
      desc: 'Cada sistema é construído por encomenda do cliente - ajustado ao processo, à fábrica e aos requisitos de integração.',
    },
    services: [
      {
        badge: 'POR ENCOMENDA',
        name: 'Robôs colaborativos (cobots)',
        tagline: 'Apoiar pessoas, automatizar, abastecer, montar, transportar',
        desc: 'Os nossos cobots trabalham lado a lado com operadores humanos - sem necessidade de gaiolas de segurança em configurações certificadas. Executam tarefas repetitivas, ergonomicamente exigentes ou de precisão, enquanto as pessoas se concentram no discernimento e no controlo de qualidade. Programados em Python, C++ e ROS, ajustados ao seu processo.',
        points: [
          'Apoiam os operadores humanos em postos de trabalho partilhados',
          'Automatizam tarefas repetitivas ou ergonomicamente exigentes',
          'Abastecem a linha de produção com componentes e materiais',
        ],
      },
      {
        badge: 'POR ENCOMENDA',
        name: 'Empilhadores autónomos',
        tagline: 'Transportar, elevar, digitalizar, localizar, evitar obstáculos',
        desc: 'Os nossos empilhadores autónomos asseguram a logística interna 24 horas por dia - recolhendo paletes ou cargas, transportando-as pela instalação e colocando-as no local de destino sem condutor. Navegação SLAM: sem necessidade de marcadores no chão ou alterações à infraestrutura. Integração WMS/ERP de série.',
        points: [
          'Transportam paletes e cargas de forma autónoma pela instalação',
          'Elevam e colocam cargas nos locais de destino sem condutor',
          'Leem códigos de barras e códigos QR para identificação de cargas',
        ],
      },
      {
        badge: 'POR ENCOMENDA',
        name: 'Plataforma AMR',
        tagline: 'Entrar, elevar, transportar, navegar, evitar, entregar',
        desc: 'A Plataforma AMR da ICB é um robô móvel autónomo configurável para transporte dentro da instalação. A plataforma base navega de forma autónoma através de LiDAR SLAM; os módulos de tarefa (topo com transportador, prateleira, rolos, suporte personalizado) trocam-se sem alterar a plataforma. Carga útil: 100-600 kg consoante a variante de chassi.',
        points: [
          'Entram em corredores estreitos e elevam de forma autónoma',
          'Elevam e transportam cargas até 600 kg',
          'Navegam dinamicamente, redefinindo o percurso em torno de obstáculos em tempo real',
        ],
      },
      {
        badge: 'POR ENCOMENDA',
        name: 'Centro de controlo',
        tagline: 'Monitorizar, analisar, alertar, responder, proteger, reportar',
        desc: 'O Centro de Controlo da ICB é uma camada de software de supervisão que agrega dados de toda a frota de robôs e da instalação. Monitoriza as operações em tempo real, deteta anomalias, aciona alertas, coordena respostas e gera relatórios de conformidade e produtividade.',
        points: [
          'Monitorizam as operações da frota e da instalação em tempo real',
          'Analisam dados de produção e logística para identificar estrangulamentos',
          'Alertam automaticamente os operadores para exceções e anomalias',
        ],
      },
      {
        badge: 'POR ENCOMENDA',
        name: 'Produção autónoma',
        tagline: 'Separar, embalar, rotular, inspecionar, mover, sincronizar',
        desc: 'Os sistemas de produção autónoma da ICB executam tarefas de fim de linha e pós-produção sem intervenção manual. A visão e a IA controlam a sequência; o robô adapta-se à variação do produto em tempo real. Concebidos para linhas de embalagem, rotulagem e controlo de qualidade.',
        points: [
          'Separam artigos por tipo, tamanho ou destino com visão por IA',
          'Embalam produtos em caixas, tabuleiros ou sacos',
          'Rotulam embalagens com precisão e verificam a colocação do rótulo',
        ],
      },
      {
        badge: 'POR ENCOMENDA',
        name: 'Linhas de produção',
        tagline: 'Otimizar, automatizar, controlar, integrar, monitorizar, melhorar',
        desc: 'Concebemos e automatizamos linhas de produção completas - integrando cobots, AMR, transportadores e software de controlo num único sistema orquestrado. Cada linha é construída de acordo com o processo do cliente; testamo-la na nossa própria instalação antes da entrega.',
        points: [
          'Otimizam o fluxo de produção e reduzem os tempos de ciclo',
          'Automatizam postos de trabalho anteriormente manuais',
          'Controlam toda a linha através de uma interface SCADA / MES unificada',
        ],
      },
    ],
    casesHeading: {
      eyebrow: 'Casos de estudo',
      title: 'Implementações e projetos reais',
      desc: 'As fases refletem o estado publicado no site original polcero.com.',
    },
    cases: [
      {
        sector: 'Construção',
        stage: 'Conceito',
        title: 'Robôs de transporte de materiais em estaleiros de construção',
        desc: 'Robôs autónomos para transporte de materiais de construção - tijolos, blocos furados, elementos pré-fabricados - em estaleiros de construção ativos. Em fase de conceito, com competências de domínio em construção na equipa.',
      },
      {
        sector: 'Construção',
        stage: 'I&D',
        title: 'Drones e robôs para inspeção de estaleiros de construção',
        desc: 'Drones e robôs móveis para inspeção, medição e monitorização de estaleiros de construção. Com base na análise do mercado da construção - em fase de I&D.',
      },
      {
        sector: 'Logística',
        stage: 'Piloto',
        title: 'Transporte interno autónomo: AMR e empilhadores num armazém',
        desc: 'Transporte interno autónomo que combina plataformas AMR e empilhadores autónomos num ambiente de armazém. Atualmente em implementação piloto.',
      },
    ],
    sectorsHeading: {
      eyebrow: 'Setores industriais',
      title: 'Onde os robôs ICB trabalham',
      desc: 'Os sistemas ICB são implementados na produção, na logística e em indústrias afins - ajustados ao processo e à fábrica específicos.',
    },
    sectors: [
      { name: 'Produção industrial', desc: 'Montagem, alimentação de máquinas, transporte entre linhas, inspeção e paletização em linhas de produção de todas as escalas.' },
      { name: 'Agricultura', desc: 'Transporte interno em instalações de processamento agrícola, câmaras frigoríficas e centros de embalagem.' },
      { name: 'Construção', desc: 'Transporte de materiais em estaleiros de construção, montagem de pré-fabricados, inspeção e tarefas de construção repetitivas.' },
      { name: 'Logística e armazenagem', desc: 'Manuseamento de paletes, carga e descarga de reboques, picking goods-to-person e separação final.' },
      { name: 'Serviços', desc: 'Hotelaria, logística hospitalar, serviços de manutenção de instalações e tarefas de limpeza / desinfeção.' },
      { name: 'Energias renováveis', desc: 'Automação da produção e montagem de componentes para fabricantes de energias renováveis.' },
    ],
    processHeading: {
      eyebrow: 'Como entregamos',
      title: 'Ciclo de vida do projeto - construído por encomenda',
      desc: 'Cada implementação da ICB segue um processo de quatro fases, desde a documentação até à colocação em serviço no local.',
    },
    process: [
      { title: 'Documentação do projeto', desc: 'Reunimos com o cliente para mapear o processo e documentar requisitos, restrições e critérios de êxito. Resultado: um relatório de viabilidade e uma proposta de conceito.' },
      { title: 'Projeto da equipa', desc: 'A nossa equipa de engenharia concebe o sistema de robô ou AMR - mecânica, eletrónica e software - e afina o cérebro de IA com dados do cliente ou simulações do processo.' },
      { title: 'Construção e integração', desc: 'Fabrico e montagem na nossa própria instalação. Teste de aceitação de fábrica (FAT) completo e integração de software. Documentação de conformidade UE (CE, ISO, NIS2) preparada.' },
      { title: 'Entrega e colocação em serviço', desc: 'Instalação no local, teste de aceitação no local (SAT), formação de operadores e transferência. Assistência contínua ao abrigo do nosso acordo RaaS / de nível de serviço.' },
    ],
    aiBrain: {
      eyebrow: 'Cérebro de IA',
      title: 'Cada robô ICB funciona com o cérebro de IA POLCERO',
      desc: 'Todos os produtos ICB são alimentados pela camada de inteligência POLCERO AI Systems: modelos VLA, deteção de classe YOLO, navegação SLAM e gestão de frotas. O mesmo cérebro é afinado com os dados do seu processo. Programação: Python, C++ e ROS.',
      ctaLabel: 'Saiba mais sobre a AI Systems',
    },
    compliance: {
      eyebrow: 'Conformidade e segurança',
    },
  },
  'ai-systems': {
    stats: [
      { label: 'Latência de controlo no edge' },
      { label: 'Modelos de base afinados' },
      { label: 'Perceção multimodal' },
      { label: 'Arquitetura híbrida' },
    ],
    servicesHeading: {
      eyebrow: 'Capacidades',
      title: 'A camada de inteligência',
      desc: 'A mesma stack de IA alimenta todas as áreas da POLCERO. O hardware do robô pode ser o seu ou do nosso catálogo - nós fornecemos o cérebro.',
    },
    services: [
      {
        badge: 'CAPACIDADE',
        name: 'Afinação de modelos VLA',
        tagline: 'Modelos de base, adaptados à sua tarefa',
        desc: 'Modelos VLA abertos (GR00T N1.7, π0, OpenVLA) afinados com dados do cliente. Uma camada de abstração permite-nos trocar os modelos de base sem voltar a treinar a inteligência da sua tarefa.',
      },
      {
        badge: 'CAPACIDADE',
        name: 'Visão e perceção',
        tagline: 'Compreensão da cena em tempo real',
        desc: 'Deteção de classe YOLO para reconhecimento de objetos em tempo real, câmaras de profundidade (RGB-D), LiDAR, imagem multiespectral e térmica, além de um VLM para compreensão de cena e linguagem.',
      },
      {
        badge: 'CAPACIDADE',
        name: 'Arquitetura edge + cloud',
        tagline: 'Controlo em menos de 10 ms, aprendizagem à escala da cloud',
        desc: 'Inferência no edge a bordo para controlo em menos de 10 ms. Cloud para atualizações de treino, análise e gestão de frotas. Um ciclo virtuoso de dados melhora continuamente o desempenho.',
      },
      {
        badge: 'CAPACIDADE',
        name: 'Controlo clássico onde é suficiente',
        tagline: 'IA apenas onde faz sentido',
        desc: 'Controladores PID para tarefas simples e repetitivas de preensão e corte - menor custo, maior fiabilidade. Reservamos a IA para decisões complexas de perceção e compreensão da cena.',
      },
      {
        badge: 'CAPACIDADE',
        name: 'Gestão de frotas',
        tagline: 'Coordenar muitos robôs como um só sistema',
        desc: 'Supervisão central de uma frota mista de robôs: atribuição de tarefas, telemetria, distribuição de modelos e relatórios de produtividade a partir de uma única camada de controlo.',
      },
    ],
    processHeading: {
      eyebrow: 'Como colaboramos',
      title: 'Dos dados do processo a um cérebro em funcionamento',
      desc: 'Acrescentamos inteligência ao seu hardware ou ao nosso em quatro passos.',
    },
    process: [
      { title: 'Dados e definição do âmbito', desc: 'Mapeamos a tarefa, recolhemos ou simulamos dados do processo e definimos os requisitos de perceção e controlo.' },
      { title: 'Seleção e afinação de modelos', desc: 'Escolhemos os modelos VLA / de visão adequados (ou controlo clássico) e afinamo-los com os seus dados por trás de uma camada de abstração estável.' },
      { title: 'Integração e implementação no edge', desc: 'Integramos o cérebro com o robô, implementamos a inferência no edge para controlo de baixa latência e validamos face aos critérios de aceitação.' },
      { title: 'Operação de frota e ciclo virtuoso de dados', desc: 'A análise na cloud, as atualizações de modelos e a gestão de frotas continuam a melhorar o desempenho após a entrada em funcionamento.' },
    ],
  },
  robots: {
    stats: [
      { label: 'Tipos de chassi (W4 · T6 · WL4 · Q4)' },
      { label: 'Eficiência energética com rodas vs pernas' },
      { label: 'Cérebro de IA partilhado por todas as configurações' },
      { label: 'Módulos de tarefa normalizados' },
    ],
    servicesHeading: {
      eyebrow: 'O sistema modular',
      title: 'Uma plataforma, muitos robôs',
      desc: 'Um cérebro de IA partilhado, uma interface normalizada, chassis intercambiáveis e módulos de tarefa plug-and-play - implementados para qualquer mercado, por encomenda.',
    },
    services: [
      { badge: 'BASE', name: 'Cérebro de IA', tagline: 'A mesma inteligência em cada chassi', desc: 'Modelos VLA + YOLO afinados com dados do cliente. Inferência no edge e treino na cloud. A mesma camada de inteligência adapta-se a cada chassi e mercado.' },
      { badge: 'BASE', name: 'Interface plug-and-play', tagline: 'Um único ponto de integração para todas as combinações', desc: 'Um conector mecânico e elétrico normalizado. Troque chassis ou módulos de tarefa sem redesenhar a camada de inteligência - um único ponto de integração para todas as combinações.' },
      { badge: 'CHASSI', name: 'Família de chassis', tagline: 'W4 · T6 · WL4 · Q4', desc: 'W4 (rodas), T6 (lagartas), WL4 (roda-perna), Q4 (pernas). As plataformas com rodas são cerca de 2,5 vezes mais eficientes em energia do que as com pernas em terreno plano - ajustadas ao terreno e à tarefa.' },
      { badge: 'MÓDULO', name: 'Módulos de tarefa', tagline: 'A ferramenta certa para cada trabalho', desc: 'Garra flexível, cabeça de pulverização/fertirrega, mastro de sensores (RGB-D / multiespectral / térmico), transportador logístico, manipulador remoto - encaixe a ferramenta certa para cada trabalho.' },
      { badge: 'CONFIGURAÇÃO', name: 'Robôs agrícolas', tagline: 'Plataformas de campo autónomas', desc: 'Plataformas de campo autónomas para plantação, tratamento, pulverização de precisão e colheita seletiva. Fusão de sensores RGB-D + multiespectral + térmico para monitorização da saúde das culturas.' },
      { badge: 'CONFIGURAÇÃO', name: 'Robôs para estaleiros de construção', tagline: 'Autonomia do BIM ao terreno', desc: 'Marcação do BIM para o terreno, perfuração, movimentação de terras autónoma, inspeção face a um gémeo digital. Autonomia supervisionada por humanos em toda a operação.' },
      { badge: 'CONFIGURAÇÃO', name: 'Máquinas estacionárias com IA', tagline: 'Células de braço fixo e postos de trabalho', desc: 'Robôs de braço fixo e postos de trabalho inteligentes para inspeção, controlo de qualidade, montagem repetitiva e manuseamento de materiais em linhas de produção.' },
    ],
    processHeading: {
      eyebrow: 'Como entregamos',
      title: 'Configurado e construído por encomenda',
      desc: 'Cada robô é montado a partir da plataforma partilhada e ajustado ao seu processo.',
    },
    process: [
      { title: 'Definir âmbito e configurar', desc: 'Mapeamos a tarefa e escolhemos o chassi, os módulos de tarefa e os sensores adequados ao terreno e ao trabalho.' },
      { title: 'Instalar o cérebro de IA', desc: 'A camada de inteligência partilhada é afinada com os seus dados e integrada através da interface normalizada.' },
      { title: 'Construir e validar', desc: 'Montagem e testes na nossa própria instalação, com um teste de aceitação de fábrica antes da entrega.' },
      { title: 'Implementar e apoiar', desc: 'Colocação em serviço no local, formação de operadores e assistência contínua - os módulos e os chassis podem ser trocados à medida que as necessidades mudam.' },
    ],
    aiBrain: {
      eyebrow: 'Cérebro de IA',
      title: 'Cada configuração funciona com o cérebro de IA POLCERO',
      desc: 'A plataforma Robots partilha a camada de inteligência POLCERO AI Systems - modelos VLA, visão de classe YOLO, navegação SLAM e gestão de frotas - afinada com os dados do seu processo.',
      ctaLabel: 'Saiba mais sobre a AI Systems',
    },
  },
  'farma-ai': {
    stats: [
      { label: 'Robô como serviço, sem investimento inicial' },
      { label: 'Uso de químicos vs pulverização total' },
      { label: 'Precisão de colocação da sementeira' },
      { label: 'Fases do ciclo de cultura automatizadas' },
    ],
    servicesHeading: {
      eyebrow: 'O ciclo de cultura',
      title: 'Um cérebro de agricultor-IA, toda a estação',
      desc: 'Uma frota de robôs de campo autónomos gerida pelo cérebro de supervisão "agricultor-IA" - para grandes explorações de hortícolas, entregue como Robô como Serviço.',
    },
    services: [
      { badge: 'FASE', name: 'Plantação', tagline: 'Transplantação e sementeira direta de precisão', desc: 'Transplantação linha a linha de precisão ou sementeira direta com navegação RTK/SLAM. Precisão de colocação inferior ao centímetro no chassi POLCERO-W4.' },
      { badge: 'FASE', name: 'Tratamento - monda e desbaste', tagline: 'Sem herbicida para as ervas daninhas detetadas', desc: 'Deteção de ervas daninhas por visão computacional, associada a monda mecânica ou térmica. Sem herbicida para as ervas daninhas identificadas - apenas pulverização localizada dirigida.' },
      { badge: 'FASE', name: 'Pulverização localizada / microdosagem', tagline: 'Químicos apenas onde são necessários', desc: 'Aplicação seletiva de fertilizante ou produtos fitossanitários apenas onde a IA deteta necessidade. Reduz o uso de químicos até 90% face à pulverização total.' },
      { badge: 'FASE', name: 'Monitorização', tagline: 'Um mapa diário da saúde das culturas', desc: 'Análise diária do campo com câmaras RGB-D + multiespectral + térmica. Mapa da saúde das culturas, alerta precoce de doenças e previsão de prontidão para a colheita.' },
      { badge: 'FASE', name: 'Colheita seletiva', tagline: 'A lacuna mais difícil por resolver na automação agrícola', desc: 'Colheita seletiva de hortícolas delicadas (começando pelas alfaces) - a lacuna mais difícil por resolver na automação agrícola. Garra flexível associada a deteção de maturação por IA.' },
    ],
    processHeading: {
      eyebrow: 'Como colaboramos',
      title: 'Robô como serviço, com o campo em primeiro lugar',
      desc: 'Assumimos a frota, as operações e o risco - o cliente obtém o resultado por hectare.',
    },
    process: [
      { title: 'Avaliação do campo', desc: 'Analisamos a exploração, as culturas e a estação, e acordamos as operações-alvo e as métricas de êxito.' },
      { title: 'Configuração da frota e do cérebro', desc: 'Configuramos os robôs de campo e afinamos o cérebro do agricultor-IA à cultura, ao solo e à disposição.' },
      { title: 'Operação supervisionada', desc: 'Os robôs executam o ciclo de cultura sob autonomia supervisionada por humanos; cada passagem alimenta o mapa de monitorização.' },
      { title: 'Balanço da estação e expansão', desc: 'Analisamos o rendimento, a poupança de insumos e a disponibilidade, e depois expandimos a frota para a estação seguinte.' },
    ],
    aiBrain: {
      eyebrow: 'Cérebro de IA',
      title: 'Alimentado pelo cérebro de agricultor-IA POLCERO',
      desc: 'A Farma AI funciona com a camada de inteligência POLCERO AI Systems - visão, perceção e gestão de frotas - especializada para a agricultura e afinada com os seus campos.',
      ctaLabel: 'Saiba mais sobre a AI Systems',
    },
  },
  'photonic-processors': {
    stats: [
      { label: 'Latência da multiplicação matricial ótica' },
      { label: 'Mercado 2025-2034' },
      { label: 'CAGR' },
      { label: 'Empresas de computação fotónica acompanhadas (2026)' },
    ],
    servicesHeading: {
      eyebrow: 'Direção de I&D',
      title: 'Computação de IA com luz',
      desc: 'Uma direção de investigação: acelerar a inferência de IA nos nossos robôs utilizando luz em vez de eletrónica apenas - menos energia, maior débito.',
    },
    services: [
      { badge: 'I&D', name: 'Multiplicação matricial ótica', tagline: 'Uma passagem ótica vs milhares de ciclos de relógio', desc: 'A inferência de redes neuronais é dominada pela multiplicação matriz-vetor (GEMM). Os chips fotónicos executam-na com luz a passar por redes de interferómetros de Mach-Zehnder - fazendo numa única passagem ótica o que a eletrónica precisa de milhares de ciclos de relógio para calcular.' },
      { badge: 'I&D', name: 'Arquitetura híbrida fotónica-eletrónica', tagline: 'Cálculo ótico, ativações eletrónicas', desc: 'Os chips fotónicos destacam-se nas operações lineares (cálculo matricial), mas não nas não lineares (funções de ativação). A arquitetura consensual associa núcleos óticos para o cálculo matricial a unidades eletrónicas para as ativações - um desenho híbrido que aproveita o melhor de ambos.' },
      { badge: 'MERCADO', name: 'De €1.8B para €14.6B', tagline: 'Um mercado de aceleradores em rápido crescimento', desc: 'O mercado mundial de aceleradores de IA fotónicos, de 2025 a 2034 (CAGR 26,3%). Em 2026, acompanhamos 52 empresas de computação fotónica em todo o mundo.' },
      { badge: 'ESTRATÉGIA', name: 'A fotónica como a futura camada de computação', tagline: 'Trocar o substrato, manter a inteligência', desc: 'À medida que os aceleradores fotónicos atingem a maturidade (uma janela de 2027-2031 para produtos de classe datacenter), a arquitetura do cérebro de IA POLCERO está concebida para os absorver - a camada de abstração permite-nos trocar o substrato de computação sem voltar a treinar a inteligência da tarefa.' },
    ],
  },
};
