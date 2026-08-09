import type { SpecsContent } from '../../specs';
import type { CookieText } from '../../cookieText';

export const pt = {
  specs: {
    eyebrow: 'ESPECIFICAÇÃO',
    title: 'Plataforma modular - especificação',
    lead: 'Um módulo central em várias configurações. Abaixo, uma comparação das variantes da plataforma POLCERO.',
    columns: ['Humanoide', 'Humanoide sobre plataforma móvel', 'Robô especializado', 'Drone de transporte'],
    legend: '"–" = indisponível · "o" = opcional · "✓" = padrão',
    note: 'Os valores são pressupostos de projeto e objetivos do produto; o produto está em desenvolvimento e a configuração e os parâmetros podem sofrer alterações. Por favor, confirme os detalhes com o departamento de vendas antes de encomendar.',
    groups: [
      {
        title: 'Construção',
        rows: [
          { label: 'Material', values: ['Alumínio e compósitos', 'Alumínio e compósitos', 'Alumínio e compósitos', 'Compósitos de carbono'] },
          { label: 'Construção modular', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Módulo central (controlo + IA)', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Conector de ferramentas de desengate rápido', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Manipulação',
        rows: [
          { label: 'Número de braços', values: ['2', '2', 'o (0–2)', '–'] },
          { label: 'Módulos de tarefa intercambiáveis', values: ['✓', '✓', '✓', '–'] },
          { label: 'Efetores terminais (garra · cabeça de colheita · laser)', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Mobilidade',
        rows: [
          { label: 'Tração', values: ['Pernas', 'Plataforma móvel', 'Rodas · lagartas · pernas · roda-perna', 'Multirrotor'] },
          { label: 'Supera escadas e obstáculos', values: ['✓', 'o', '✓', '–'] },
          { label: 'Opera fora de estradas pavimentadas', values: ['o', '–', '✓', '✓'] },
        ],
      },
      {
        title: 'Alimentação',
        rows: [
          { label: 'Baterias hot-swap', values: ['3', '3', '3', 'o'] },
          { label: 'Troca de bateria sem paragem', values: ['✓', '✓', '✓', 'o'] },
          { label: 'IA local (no dispositivo)', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Perceção',
        rows: [
          { label: 'Câmaras RGBD', values: ['✓', '✓', '✓', '✓'] },
          { label: 'LiDAR', values: ['✓', '✓', '✓', 'o'] },
          { label: 'IMU', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Transporte',
        rows: [
          { label: 'Carga máxima', values: ['–', '–', '–', '500 kg'] },
          { label: 'Peso próprio', values: ['–', '–', '–', '90 kg'] },
          { label: 'Transporta robôs e módulos', values: ['–', '–', '–', '✓'] },
        ],
      },
      {
        title: 'IA e software',
        rows: [
          { label: 'POLCERO OS', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Aprendizagem por demonstração', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Dados e conformidade na UE', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Adaptado ao processo do cliente', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
    ],
  } as SpecsContent,

  specLabels: {
    construction: 'Construção', material: 'Material', modular: 'Construção modular', core: 'Módulo central (controlo + IA)', coupler: 'Conector de ferramentas de desengate rápido',
    mobility: 'Tração e mobilidade', drive: 'Tração', terrain: 'Terreno',
    manip: 'Manipulação', arms: 'Número de braços', tasks: 'Módulos de tarefa', ends: 'Efetores terminais intercambiáveis',
    power: 'Alimentação', batt: 'Baterias hot-swap', swap: 'Troca sem paragem', local: 'Operação local (IA no dispositivo)',
    perc: 'Perceção', ai: 'IA e software', os: 'POLCERO OS', demo: 'Aprendizagem por demonstração', eu: 'Dados e conformidade na UE',
    transport: 'Transporte', payload: 'Carga máxima', weight: 'Peso próprio', carry: 'Transporta robôs e módulos', autonomy: 'Autonomia', gear: 'Controlo e equipamento de tarefa',
    platform: 'Plataforma', functions: 'Funções', planning: 'Planeamento e supervisão de tarefas', fleet: 'Gestão de frota', compat: 'Compatibilidade', chassis: 'Compatível com chassis',
    yes: 'Sim', optArms: 'Opcional (0-2)', opt: 'Opcional', dev: 'Em desenvolvimento', allTypes: 'Todos os tipos de chassis',
    tasksVal: 'Garra · cabeça de colheita · laser', percCam: 'Câmaras, LiDAR', demoVal: 'até 10× menos programação',
    carbon: 'Compósitos de carbono', aluminium: 'Alumínio e compósitos', multirotor: 'Multirrotor',
  },

  drive: {
    humanoid: ['Pernas (bípede)', 'Escadas, lancis, ambientes projetados para pessoas'],
    'mobile-humanoid': ['Plataforma móvel', 'Naves e pavimentos industriais'],
    'quadruped-robot': ['Chassis com pernas (4 pernas)', 'Escadas, obstáculos, terreno irregular'],
    'tracked-robot': ['Chassis de lagartas', 'Terreno não pavimentado e acidentado, estaleiros de obras'],
    'wheeled-robot': ['Chassis de rodas', 'Pavimentos, armazéns, terreno plano'],
    'wheel-leg-robot': ['Chassis roda-perna', 'Terreno plano, obstáculos e carris'],
    'specialized-robots': ['4 chassis intercambiáveis', 'Com pernas · lagartas · rodas · roda-perna'],
  } as Record<string, [string, string]>,

  cookie: {
    title: 'Valorizamos a sua privacidade',
    desc: 'Utilizamos cookies essenciais para o funcionamento deste site. Com o seu consentimento, utilizamos também cookies de análise e de marketing para o melhorar. Pode alterar a sua escolha a qualquer momento.',
    acceptAll: 'Aceitar todos',
    rejectOptional: 'Rejeitar opcionais',
    moreOptions: 'Mais opções',
    prefTitle: 'Preferências de cookies',
    prefDesc: 'Escolha que categorias de cookies permite. Os cookies essenciais estão sempre ativos.',
    essential: 'Essenciais', essentialDesc: 'Necessários para as funcionalidades e a segurança fundamentais do site. Sempre ativos.',
    alwaysActive: 'Sempre ativos',
    analytics: 'Análise', analyticsDesc: 'Ajudam-nos a compreender como o site é utilizado para o podermos melhorar.',
    marketing: 'Marketing', marketingDesc: 'Utilizados para medir e personalizar campanhas.',
    save: 'Guardar escolhas', cancel: 'Cancelar',
    footer: 'Leia a nossa', privacyLink: 'Política de Privacidade', cookieLink: 'Política de Cookies', close: 'Fechar',
  } as CookieText,
};
