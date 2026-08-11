import type { ProductRichOverride } from '../../productRich';

// ── Bloques compartidos (traducidos una vez, reutilizados) ───────────────────
const batteryRobot = {
  title: 'Batería y alimentación',
  lead: 'Cada robot funciona con tres baterías de intercambio en caliente alojadas en el módulo central. Cada batería es una unidad autónoma de 48 V, de modo que la potencia escala con el número de baterías y una agotada se sustituye sin herramientas mientras el robot sigue trabajando con las demás.',
  rows: [
    { label: 'Tensión de la batería', value: '48 V hot-swap' },
    { label: 'Energía por batería', value: '≈ 864 Wh cada una' },
    { label: 'Baterías en el módulo central', value: '3 (≈ 2.6 kWh en total)' },
    { label: 'Autonomía con batería', value: '≈ 5 h en uso típico' },
    { label: 'Con alimentación directa', value: '24/7 (por cable o red)' },
    { label: 'Tiempo de cambio', value: '< 60 s por batería, sin herramientas' },
  ],
};

const swapRobot = {
  title: 'Baterías autointercambiables — sin tiempos muertos',
  lead: 'El robot nunca se apaga por completo para recargar. Rota sus tres baterías de una en una, funcionando con las dos restantes mientras una agotada se carga — de modo que el turno no se detiene por la batería.',
  robot: {
    title: 'El robot lo hace por sí mismo',
    steps: [
      'Al detectar una batería con poca carga, el robot se dirige a la estación de carga y mantiene su estado con las dos baterías restantes.',
      'Un brazo alcanza la parte trasera del módulo central, libera el enganche y extrae la batería agotada.',
      'Coloca la batería en una bahía libre de la estación de 4 bahías y toma una completamente cargada en su lugar.',
      'La batería nueva encaja con un clic; el robot repite el proceso con cada batería por turnos y vuelve al trabajo — nunca apagado, nunca parado.',
    ],
  },
  human: {
    title: 'Una persona puede hacerlo en segundos',
    steps: [
      'Sin apagado y sin herramientas: las baterías son intercambiables en caliente mientras el robot permanece listo.',
      'Presiona el enganche en la parte trasera del módulo central y extrae la batería tirando en línea recta.',
      'Desliza una batería cargada hasta que encaje con un clic — el robot retoma justo donde lo dejó.',
    ],
  },
};

const statusRobot = {
  title: 'Estado de la batería y la estación de carga',
  lead: 'Cada batería informa de su propio estado, de modo que el robot y sus operadores siempre saben cuándo cambiarla. Una estación de carga de 4 bahías mantiene una rotación de baterías lista, y el robot se acopla para cambiar sus propias baterías durante el trabajo.',
  points: [
    { title: 'Estado en vivo por batería', text: 'Estado de carga, salud y temperatura de cada una de las tres baterías, en tiempo real.' },
    { title: 'Cambio predictivo', text: 'El sistema programa el próximo cambio antes de que una batería se agote, de modo que el trabajo nunca se interrumpe a mitad de tarea.' },
    { title: 'Estación de carga de 4 bahías', text: 'Cuatro entradas de carga mantienen las baterías de reserva a tope y listas para la siguiente rotación.' },
    { title: 'Acoplamiento autónomo', text: 'El robot rota sus propias baterías en la estación durante el turno — sin operador y sin tiempos muertos.' },
  ],
};

const visionRobot = {
  title: 'Cómo ve el robot',
  lead: 'El robot construye una única imagen del mundo a partir de varias vistas a la vez. Una cabeza binocular de campo amplio ofrece una imagen izquierda y una derecha; al compararlas se obtiene la profundidad; sobre eso, la capa de IA añade una vista de percepción que identifica objetos, superficies y personas.',
  views: [
    { label: 'Izquierda', text: 'El ojo izquierdo de la cabeza binocular — una vista en color de campo amplio de la escena.' },
    { label: 'Derecha', text: 'El ojo derecho — la segunda vista en color que el robot compara con la izquierda.' },
    { label: 'Profundidad', text: 'La disparidad estéreo entre izquierda y derecha da la distancia a cada punto del encuadre.' },
    { label: 'Percepción', text: 'La capa de IA etiqueta objetos, superficies, obstáculos y personas, y planifica el siguiente movimiento en el propio dispositivo.' },
  ],
  extra: [
    { title: 'Cámaras en las muñecas', text: 'Cámaras HD en cada muñeca ofrecen una vista de cerca para un agarre y un ensamblaje precisos.' },
    { title: 'LiDAR + ultrasonidos', text: 'El LiDAR del chasis y los sensores ultrasónicos cartografían el espacio y detectan obstáculos más allá de las cámaras.' },
    { title: 'Fuerza e IMU', text: 'Articulaciones con retroalimentación de fuerza y una IMU perciben el contacto y el equilibrio para un movimiento seguro y estable.' },
    { title: 'Voz y lenguaje', text: 'La interacción por voz y un modelo de lenguaje permiten a una persona dirigir al robot con habla natural.' },
  ],
};

const powerRobot = {
  title: 'Dos formas de alimentarlo: baterías o la red',
  lead: 'El robot es autónomo con baterías, pero allí donde un emplazamiento pueda suministrar energía funciona directamente de la red a través de un cable — sin baterías que rotar, sin tiempos muertos y con menor coste de operación.',
  modes: [
    { name: 'Baterías hot-swap', text: 'Totalmente móvil y autónomo. Tres baterías rotan por la estación de carga, de modo que el robot se desplaza a cualquier parte sin cable.' },
    { name: 'Alimentación directa (cable)', text: 'Para una estación fija o un servicio 24/7, el robot toma energía por cable y funciona de forma continua — las baterías pasan a ser el respaldo.' },
    { name: 'Infraestructura de red', text: 'En naves, fábricas e invernaderos instalamos raíles de alimentación fijos; en exteriores, en campos y patios, líneas aéreas de conductor como la catenaria del tranvía. El robot toma energía de la línea y recarga sus baterías mientras trabaja.' },
  ],
};

const R = { battery: batteryRobot, swap: swapRobot, status: statusRobot, vision: visionRobot, power: powerRobot };

export const es: Record<string, ProductRichOverride> = {
  humanoid: {
    ...R,
    application: {
      title: 'Tres humanoides, un almacén',
      body: 'Así es un turno. En una sola sala, un humanoide empaqueta un paquete en el banco, un segundo levanta del suelo un contenedor metálico cargado y un tercero apila cajas en una estantería. El mismo robot, tres tareas — cada uno entró en un espacio construido para personas y asumió un trabajo pensado para manos humanas, sin ninguna línea que reconstruir a su alrededor.',
    },
  },
  'mobile-humanoid': {
    ...R,
    versions: {
      title: 'Dos versiones de plataforma',
      lead: 'El mismo torso humanoide se monta sobre la base móvil que necesites — una base ligera y plegable para recogida a nivel de suelo, o una base pesada para levantar peso real.',
      items: [
        {
          name: 'V1 — base plegable',
          blurb: 'El mástil se pliega por su punto medio, de modo que el robot se inclina para recoger cosas del suelo con escasa pérdida de potencia. Las ruedas de la base giran todo el robot sobre sí mismo, haciéndolo ágil en pasillos estrechos y a bajas alturas de recogida.',
          specs: [
            { label: 'Ideal para', value: 'Recogida a nivel de suelo, pasillos estrechos' },
            { label: 'Base', value: 'Mástil plegable, giro sobre el sitio' },
            { label: 'Alcance', value: 'Del suelo a la altura de trabajo' },
          ],
        },
        {
          name: 'V2 — base pesada',
          blurb: 'Una plataforma móvil más robusta construida para levantar peso real. Conserva el cuerpo superior humanoide de doble brazo, pero se apoya sobre una base rígida de alta carga útil para la manipulación y el ensamblaje de piezas industriales más pesadas.',
          specs: [
            { label: 'Ideal para', value: 'Manipulación pesada y ensamblaje' },
            { label: 'Base', value: 'Plataforma rígida de alta carga útil' },
            { label: 'Carga útil nominal', value: '≈ 7 kg por brazo' },
          ],
        },
      ],
    },
  },
  'specialized-robots': {
    ...R,
    vision: {
      ...visionRobot,
      extra: [
        { title: 'Mástil de percepción', text: 'Sobre un chasis especializado, el módulo central lleva un mástil adicional de herramientas y cámaras para la tarea en cuestión.' },
        { title: 'LiDAR + ultrasonidos', text: 'El LiDAR del chasis y los sensores ultrasónicos cartografían el terreno irregular y detectan obstáculos más allá de las cámaras.' },
        { title: 'Multiespectral / térmico', text: 'Imagen multiespectral y térmica opcional para la salud de los cultivos, la inspección y el trabajo nocturno.' },
        { title: 'Cómputo en el dispositivo', text: 'La detección y la planificación se ejecutan en el propio dispositivo; los datos y el cumplimiento normativo permanecen en la UE.' },
      ],
    },
    robots: {
      title: 'La línea especializada, robot a robot',
      lead: 'Cada uno de estos es el mismo módulo central — control, IA y baterías hot-swap — sobre un chasis distinto. Conserva el cerebro y los módulos de tarea; cambia la plataforma para adaptarla al terreno. Añade o retira brazos, una pinza, un cabezal de cosecha o un mástil de sensores en el conector de liberación rápida.',
      items: [
        {
          name: 'Robot con patas',
          role: 'Escaleras, obstáculos, terreno irregular',
          body: 'Un chasis de cuatro patas que salva escaleras, bordillos y terreno accidentado que ninguna rueda puede afrontar. Recorre rutas de inspección por plantas, subestaciones y emplazamientos diseñados para personas, no para máquinas.',
          modify: 'Añade uno o dos brazos con una pinza para manipulación, o un mástil de sensores para inspección. Cambia a una base con ruedas u orugas cuando el terreno se vuelva llano o blando.',
        },
        {
          name: 'Robot con orugas',
          role: 'Sin pavimentar, terreno pesado, obras',
          body: 'Un chasis con orugas para barro, escombros y terreno empinado y sin pavimentar. Transporta carga por una obra o un campo abierto donde las ruedas se atascan y las patas son demasiado lentas.',
          modify: 'Monta un portador logístico para transporte pesado, un brazo para manipulación o un mástil de topografía para inspección BIM. El mismo cuerpo pasa a patas o ruedas cuando cambia la tarea.',
        },
        {
          name: 'Robot con ruedas',
          role: 'Suelos, almacenes, terreno llano',
          body: 'Un chasis con ruedas, rápido y silencioso, para suelos industriales y almacenes — unas 2.5× más eficiente en energía que las patas sobre terreno llano. Ideal para patrulla, monitorización y transporte interno.',
          modify: 'Añade brazos y una pinza para pick-and-place, un mástil de sensores para monitorización o un portador para transporte. Traslada el módulo central a una base con orugas para dejar el pavimento.',
        },
        {
          name: 'Robot rueda-pata',
          role: 'Terreno llano, obstáculos y raíles',
          body: 'Un chasis híbrido rueda-pata: rueda rápido sobre lo llano y, cuando encuentra un escalón, un bordillo o un raíl, las patas alzan las ruedas por encima. Una sola plataforma para entornos mixtos que de otro modo necesitarían dos robots.',
          modify: 'Brazos, pinza, cabezal de cosecha o mástil de sensores se montan todos en el conector de liberación rápida. Retira las patas para una base de ruedas pura, o vuélvelas a añadir cuando la ruta se ponga difícil.',
        },
        {
          name: 'Brazo sobre plataforma',
          role: 'Líneas de producción, máquinas móviles, cabezales',
          body: 'El módulo central fijado en un solo punto — sobre una línea de producción, o montado sobre una máquina móvil o un cabezal. En un cabezal de cosecha de lechuga, por ejemplo, los brazos cortan y depositan el cultivo directamente sobre la cinta a medida que la máquina avanza.',
          modify: 'Elige uno o dos brazos con una pinza, una cuchilla o un cabezal de cosecha. Móntalo fijo en una línea, o sobre cualquier máquina anfitriona que lo transporte por el campo.',
        },
        {
          name: 'Robot sobre raíles',
          role: 'Invernaderos, hileras, rutas fijas',
          body: 'Una versión guiada por raíles para invernaderos y umbráculos dispuestos en hileras fijas. Recorre los raíles de tubería calefactada entre los cultivos para una pulverización, monitorización y cosecha selectiva precisas y repetibles.',
          modify: 'Añade un cabezal de pulverización o fertirrigación, un mástil de sensores o una pinza blanda. El mismo módulo central se alza de los raíles a una base de ruedas o rueda-pata para terreno abierto.',
        },
      ],
    },
  },
  'transport-drone': {
    battery: {
      title: 'Batería y alimentación',
      lead: 'El dron de transporte vuela con su propia batería de vuelo de alta salida y además transporta baterías hot-swap cargadas para los robots que entrega, de modo que lleguen con las baterías llenas y gasten su energía en el trabajo, no en el trayecto.',
      rows: [
        { label: 'Batería', value: 'Batería de vuelo hot-swap' },
        { label: 'Energía de la batería', value: '≈ 30 kWh' },
        { label: 'Autonomía con carga útil máxima', value: '≈ 20 min' },
        { label: 'Reposición', value: 'Cambio hot-swap entre vuelos' },
        { label: 'También transporta', value: 'Baterías de 48 V cargadas para los robots' },
      ],
    },
    drone: {
      title: 'El dron transporta los robots',
      body: 'Nuestro objetivo es que el dron transporte robots y humanoides en las distancias más largas, para que los robots reserven su energía para la tarea en lugar de gastarla en llegar. El dron también transporta módulos y chasis intercambiables, de modo que un robot llega pudiendo elegir el módulo de tarea y la plataforma que su entorno exige.',
      points: [
        'Los robots llegan al emplazamiento con las baterías llenas y aterrizan listos para trabajar.',
        'Chasis y módulos de tarea intercambiables viajan con el dron.',
        'Entrega donde termina la carretera — montañas, emplazamientos sin vías pavimentadas, zonas incomunicadas tras una inundación.',
        'El eslabón que faltaba en el modelo de alquiler por horas: un robot da servicio a varios clientes el mismo día.',
      ],
    },
  },
  'polcero-os': {
    vision: visionRobot,
  },
};
