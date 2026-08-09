import type { SpecsContent } from '../../specs';
import type { CookieText } from '../../cookieText';

export const es = {
  specs: {
    eyebrow: 'ESPECIFICACIÓN',
    title: 'Plataforma modular - especificación',
    lead: 'Un módulo central en varias configuraciones. A continuación, una comparación de las variantes de la plataforma POLCERO.',
    columns: ['Humanoide', 'Humanoide sobre plataforma móvil', 'Robot especializado', 'Dron de transporte'],
    legend: '"–" = no disponible · "o" = opcional · "✓" = de serie',
    note: 'Los valores son supuestos de diseño y objetivos del producto; el producto está en desarrollo y la configuración y los parámetros pueden cambiar. Confirme los detalles con el departamento de ventas antes de realizar el pedido.',
    groups: [
      {
        title: 'Construcción',
        rows: [
          { label: 'Material', values: ['Aluminio y composites', 'Aluminio y composites', 'Aluminio y composites', 'Composites de carbono'] },
          { label: 'Construcción modular', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Módulo central (control + IA)', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Conector de herramientas de liberación rápida', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Manipulación',
        rows: [
          { label: 'Número de brazos', values: ['2', '2', 'o (0–2)', '–'] },
          { label: 'Módulos de tarea intercambiables', values: ['✓', '✓', '✓', '–'] },
          { label: 'Efectores finales (pinza · cabezal de recolección · láser)', values: ['✓', '✓', '✓', '–'] },
        ],
      },
      {
        title: 'Movilidad',
        rows: [
          { label: 'Tracción', values: ['Piernas', 'Plataforma móvil', 'Con ruedas · con orugas · con patas · rueda-pata', 'Multirrotor'] },
          { label: 'Supera escaleras y obstáculos', values: ['✓', 'o', '✓', '–'] },
          { label: 'Funciona fuera de carreteras pavimentadas', values: ['o', '–', '✓', '✓'] },
        ],
      },
      {
        title: 'Alimentación',
        rows: [
          { label: 'Baterías hot-swap', values: ['3', '3', '3', 'o'] },
          { label: 'Cambio de batería sin tiempo de inactividad', values: ['✓', '✓', '✓', 'o'] },
          { label: 'IA en el dispositivo (funcionamiento local)', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Percepción',
        rows: [
          { label: 'Cámaras RGBD', values: ['✓', '✓', '✓', '✓'] },
          { label: 'LiDAR', values: ['✓', '✓', '✓', 'o'] },
          { label: 'IMU', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
      {
        title: 'Transporte',
        rows: [
          { label: 'Carga útil máxima', values: ['–', '–', '–', '500 kg'] },
          { label: 'Peso propio', values: ['–', '–', '–', '90 kg'] },
          { label: 'Transporta robots y módulos', values: ['–', '–', '–', '✓'] },
        ],
      },
      {
        title: 'IA y software',
        rows: [
          { label: 'POLCERO OS', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Aprendizaje por demostración', values: ['✓', '✓', '✓', 'o'] },
          { label: 'Datos y cumplimiento en la UE', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Adaptado al proceso del cliente', values: ['✓', '✓', '✓', '✓'] },
        ],
      },
    ],
  } as SpecsContent,

  specLabels: {
    construction: 'Construcción', material: 'Material', modular: 'Construcción modular', core: 'Módulo central (control + IA)', coupler: 'Conector de herramientas de liberación rápida',
    mobility: 'Tracción y movilidad', drive: 'Tracción', terrain: 'Terreno',
    manip: 'Manipulación', arms: 'Número de brazos', tasks: 'Módulos de tarea', ends: 'Efectores finales intercambiables',
    power: 'Alimentación', batt: 'Baterías hot-swap', swap: 'Cambio sin tiempo de inactividad', local: 'Funcionamiento local (IA en el dispositivo)',
    perc: 'Percepción', ai: 'IA y software', os: 'POLCERO OS', demo: 'Aprendizaje por demostración', eu: 'Datos y cumplimiento en la UE',
    transport: 'Transporte', payload: 'Carga útil máxima', weight: 'Peso propio', carry: 'Transporta robots y módulos', autonomy: 'Autonomía', gear: 'Control y equipo de tarea',
    platform: 'Plataforma', functions: 'Funciones', planning: 'Planificación y supervisión de tareas', fleet: 'Gestión de flota', compat: 'Compatibilidad', chassis: 'Funciona con chasis',
    yes: 'Sí', optArms: 'Opcional (0-2)', opt: 'Opcional', dev: 'En desarrollo', allTypes: 'Todos los tipos de chasis',
    tasksVal: 'Pinza · cabezal de recolección · láser', percCam: 'Cámaras, LiDAR', demoVal: 'hasta 10× menos programación',
    carbon: 'Composites de carbono', aluminium: 'Aluminio y composites', multirotor: 'Multirrotor',
  },

  drive: {
    humanoid: ['Piernas (bípedo)', 'Escaleras, bordillos, espacios diseñados para personas'],
    'mobile-humanoid': ['Plataforma móvil', 'Naves y suelos industriales'],
    'quadruped-robot': ['Chasis con patas (4 patas)', 'Escaleras, obstáculos, terreno irregular'],
    'tracked-robot': ['Chasis con orugas', 'Terreno sin pavimentar, accidentado, obras de construcción'],
    'wheeled-robot': ['Chasis con ruedas', 'Suelos, almacenes, terreno llano'],
    'wheel-leg-robot': ['Chasis rueda-pata', 'Terreno llano, obstáculos y raíles'],
    'specialized-robots': ['4 chasis intercambiables', 'Con patas · con orugas · con ruedas · rueda-pata'],
  } as Record<string, [string, string]>,

  cookie: {
    title: 'Valoramos su privacidad',
    desc: 'Utilizamos cookies esenciales para que este sitio funcione. Con su consentimiento, también utilizamos cookies analíticas y de marketing para mejorarlo. Puede cambiar su elección en cualquier momento.',
    acceptAll: 'Aceptar todas',
    rejectOptional: 'Rechazar opcionales',
    moreOptions: 'Más opciones',
    prefTitle: 'Preferencias de cookies',
    prefDesc: 'Elija qué categorías de cookies permite. Las cookies esenciales están siempre activadas.',
    essential: 'Esenciales', essentialDesc: 'Necesarias para la funcionalidad básica y la seguridad del sitio. Siempre activas.',
    alwaysActive: 'Siempre activas',
    analytics: 'Analíticas', analyticsDesc: 'Nos ayudan a entender cómo se usa el sitio para poder mejorarlo.',
    marketing: 'Marketing', marketingDesc: 'Se utilizan para medir y personalizar campañas.',
    save: 'Guardar elección', cancel: 'Cancelar',
    footer: 'Lea nuestra', privacyLink: 'Política de privacidad', cookieLink: 'Política de cookies', close: 'Cerrar',
  } as CookieText,
};
