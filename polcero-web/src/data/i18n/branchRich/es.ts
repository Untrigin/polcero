import type { RichBranch, DeepPartial } from '../../branchRich';

export const es: Record<string, DeepPartial<RichBranch>> = {
  'icb-robots': {
    stats: [
      { label: 'En activo desde' },
      { label: 'Años de experiencia' },
      { label: 'Sectores industriales' },
      { label: 'Robótica como servicio' },
    ],
    productsHeading: {
      eyebrow: 'Especificaciones de producto',
      title: 'Datos reales del catálogo ICB',
      desc: 'Especificaciones publicadas de la línea de productos POLCERO / ICB Robots.',
    },
    products: [
      {
        name: 'Robot de ensamblaje y manipulación de precisión controlado por IA',
        desc: 'Diseñado para tareas complejas con alta precisión. Controlado por nuestro software y sistema de visión con IA, trabaja en distintos entornos de producción y corrige su propio movimiento en tiempo real. Lo programamos según su proceso, lo desplegamos y le damos servicio.',
        specs: [
          { label: 'Carga útil' },
          { label: 'Alcance' },
          { label: 'Repetibilidad' },
          { label: 'Temperatura de funcionamiento' },
          { label: 'Garantía' },
          { label: 'Control' },
        ],
        points: [
          'Sistema de visión con IA para la corrección del movimiento en tiempo real',
          'Trabaja en distintos entornos de producción sin necesidad de reconfiguración',
          'Programación personalizada por proceso - configuramos, desplegamos y damos servicio',
          'Aplicable en fabricación, logística y control de calidad',
        ],
      },
      {
        name: 'Brazos robóticos inteligentes de 6 ejes',
        desc: 'Seis grados de movimiento para tareas complejas en espacios de producción reducidos. Compacto y fácil de integrar - precisión y velocidad allí donde el espacio de suelo es limitado. Disponible en variante de montaje en techo.',
        specs: [
          { label: 'Grados de libertad' },
          { label: 'Repetibilidad', value: 'Alta' },
          { label: 'Carga útil', value: 'Alta (consultar especificación)' },
          { label: 'Opciones de montaje', value: 'Suelo / Techo' },
        ],
        points: [
          'Alta repetibilidad para tareas de precisión',
          'Alta capacidad de carga admisible',
          'Versión de montaje en techo disponible - ahorra espacio de suelo',
          'Aplicaciones: ensamblaje, empaquetado, soldadura, control de calidad',
        ],
      },
    ],
    servicesHeading: {
      eyebrow: 'Categorías de servicio',
      title: 'Seis formas de robotizar su planta',
      desc: 'Cada sistema se fabrica por encargo del cliente - adaptado al proceso, a la planta y a los requisitos de integración.',
    },
    services: [
      {
        badge: 'POR ENCARGO',
        name: 'Robots colaborativos (cobots)',
        tagline: 'Apoyar a las personas, automatizar, suministrar, ensamblar, transportar',
        desc: 'Nuestros cobots trabajan junto a operarios humanos - sin necesidad de jaulas de seguridad en configuraciones certificadas. Se encargan de tareas repetitivas, ergonómicamente exigentes o de precisión, mientras las personas se centran en el criterio y el control de calidad. Programados en Python, C++ y ROS, adaptados a su proceso.',
        points: [
          'Apoyan a los trabajadores humanos en puestos de trabajo compartidos',
          'Automatizan tareas repetitivas o ergonómicamente exigentes',
          'Suministran componentes y materiales a la línea de producción',
        ],
      },
      {
        badge: 'POR ENCARGO',
        name: 'Carretillas elevadoras autónomas',
        tagline: 'Transportar, elevar, escanear, localizar, evitar obstáculos',
        desc: 'Nuestras carretillas elevadoras autónomas gestionan la logística interna de la instalación 24/7 - recogiendo palés o cargas, transportándolos por toda la instalación y depositándolos en la ubicación de destino sin conductor. Navegación SLAM: sin marcas en el suelo ni cambios en la infraestructura. Integración con WMS/ERP de serie.',
        points: [
          'Transportan palés y cargas de forma autónoma por toda la instalación',
          'Elevan y depositan cargas en las ubicaciones de destino sin conductor',
          'Escanean códigos de barras y códigos QR para identificar las cargas',
        ],
      },
      {
        badge: 'POR ENCARGO',
        name: 'Plataforma AMR',
        tagline: 'Entrar, elevar, transportar, navegar, evitar, entregar',
        desc: 'La plataforma AMR de ICB es un robot móvil autónomo configurable para el transporte dentro de la instalación. La plataforma base navega de forma autónoma mediante LiDAR SLAM; los módulos de tarea (cinta transportadora superior, estantería, rodillos, útil personalizado) se intercambian sin cambiar la plataforma. Carga útil: 100-600 kg según la variante de chasis.',
        points: [
          'Entran en pasillos estrechos y elevan de forma autónoma',
          'Elevan y transportan cargas de hasta 600 kg',
          'Navegan dinámicamente, replanificando la ruta ante los obstáculos en tiempo real',
        ],
      },
      {
        badge: 'POR ENCARGO',
        name: 'Centro de control',
        tagline: 'Supervisar, analizar, alertar, responder, proteger, informar',
        desc: 'El Centro de Control de ICB es una capa de software de supervisión que agrega datos de toda la flota de robots y de la instalación. Supervisa las operaciones en tiempo real, detecta anomalías, activa alertas, coordina respuestas y genera informes de cumplimiento y productividad.',
        points: [
          'Supervisan las operaciones de la flota y la instalación en tiempo real',
          'Analizan los datos de producción y logística para detectar cuellos de botella',
          'Alertan automáticamente a los operarios ante excepciones y anomalías',
        ],
      },
      {
        badge: 'POR ENCARGO',
        name: 'Producción autónoma',
        tagline: 'Clasificar, empaquetar, etiquetar, inspeccionar, mover, sincronizar',
        desc: 'Los sistemas de producción autónoma de ICB gestionan las tareas de final de línea y posproducción sin intervención manual. La visión y la IA controlan la secuencia; el robot se adapta a la variación del producto en tiempo real. Diseñados para líneas de empaquetado, etiquetado y control de calidad.',
        points: [
          'Clasifican artículos por tipo, tamaño o destino con visión por IA',
          'Empaquetan productos en cajas, bandejas o bolsas',
          'Etiquetan los paquetes con precisión y auditan la colocación de las etiquetas',
        ],
      },
      {
        badge: 'POR ENCARGO',
        name: 'Líneas de producción',
        tagline: 'Optimizar, automatizar, controlar, integrar, supervisar, mejorar',
        desc: 'Diseñamos y automatizamos líneas de producción completas - integrando cobots, AMR, cintas transportadoras y software de control en un único sistema orquestado. Cada línea se construye según el proceso del cliente; la probamos en nuestras propias instalaciones antes de la entrega.',
        points: [
          'Optimizan el flujo de producción y reducen los tiempos de ciclo',
          'Automatizan puestos de trabajo antes manuales',
          'Controlan la línea completa a través de una interfaz SCADA / MES unificada',
        ],
      },
    ],
    casesHeading: {
      eyebrow: 'Casos de estudio',
      title: 'Despliegues y proyectos reales',
      desc: 'Las fases reflejan el estado publicado en el sitio original polcero.com.',
    },
    cases: [
      {
        sector: 'Construcción',
        stage: 'Concepto',
        title: 'Robots de transporte de materiales en obras de construcción',
        desc: 'Robots autónomos para el transporte de materiales de construcción - ladrillos, bloques huecos, elementos prefabricados - por obras en activo. En fase de concepto, con experiencia en el sector de la construcción dentro del equipo.',
      },
      {
        sector: 'Construcción',
        stage: 'I+D',
        title: 'Drones y robots para la inspección de obras',
        desc: 'Drones y robots móviles para la inspección, medición y monitorización de obras de construcción. Basado en el análisis del mercado de la construcción - en fase de I+D.',
      },
      {
        sector: 'Logística',
        stage: 'Piloto',
        title: 'Transporte interno autónomo: AMR y carretillas en un almacén',
        desc: 'Transporte interno autónomo que combina plataformas AMR y carretillas elevadoras autónomas en un entorno de almacén. Actualmente en despliegue piloto.',
      },
    ],
    sectorsHeading: {
      eyebrow: 'Sectores industriales',
      title: 'Dónde trabajan los robots ICB',
      desc: 'Los sistemas ICB se despliegan en fabricación, logística e industrias afines - adaptados al proceso y la planta específicos.',
    },
    sectors: [
      { name: 'Fabricación', desc: 'Ensamblaje, atención de máquinas, transporte dentro de la línea, inspección y paletizado en líneas de producción de cualquier escala.' },
      { name: 'Agricultura', desc: 'Transporte interno en instalaciones de procesamiento agrícola, cámaras frigoríficas y centrales de empaquetado.' },
      { name: 'Construcción', desc: 'Transporte de materiales en obras, montaje de prefabricados, inspección y tareas de construcción repetitivas.' },
      { name: 'Logística y almacenamiento', desc: 'Manipulación de palés, carga y descarga de remolques, preparación de pedidos goods-to-person y clasificación final.' },
      { name: 'Servicios', desc: 'Hostelería, logística sanitaria, servicios de instalaciones y tareas de limpieza / desinfección.' },
      { name: 'Energías renovables', desc: 'Automatización de la producción y el ensamblaje de componentes para fabricantes de energías renovables.' },
    ],
    processHeading: {
      eyebrow: 'Cómo lo entregamos',
      title: 'Ciclo de vida del proyecto - hecho por encargo',
      desc: 'Cada despliegue de ICB sigue un proceso de cuatro fases, desde la documentación hasta la puesta en marcha in situ.',
    },
    process: [
      { title: 'Documentación del proyecto', desc: 'Nos reunimos con el cliente para mapear el proceso y documentar los requisitos, las restricciones y los criterios de éxito. Resultado: un informe de viabilidad y una propuesta de concepto.' },
      { title: 'Proyecto del equipo', desc: 'Nuestro equipo de ingeniería diseña el robot o el sistema AMR - mecánica, electrónica y software - y afina el cerebro de IA con los datos del cliente o simulaciones del proceso.' },
      { title: 'Construcción e integración', desc: 'Fabricación y montaje en nuestras propias instalaciones. Prueba de aceptación en fábrica (FAT) completa e integración del software. Se prepara la documentación de conformidad de la UE (CE, ISO, NIS2).' },
      { title: 'Entrega y puesta en marcha', desc: 'Instalación in situ, prueba de aceptación en obra (SAT), formación de operarios y entrega. Servicio continuo bajo nuestro acuerdo RaaS / de nivel de servicio.' },
    ],
    aiBrain: {
      eyebrow: 'Cerebro de IA',
      title: 'Cada robot ICB funciona con el cerebro de IA de POLCERO',
      desc: 'Todos los productos ICB están impulsados por la capa de inteligencia de POLCERO AI Systems: modelos VLA, detección de tipo YOLO, navegación SLAM y gestión de flotas. El mismo cerebro se afina con los datos de su proceso. Programación: Python, C++ y ROS.',
      ctaLabel: 'Más información sobre AI Systems',
    },
    compliance: {
      eyebrow: 'Cumplimiento y seguridad',
    },
  },
  'ai-systems': {
    stats: [
      { label: 'Latencia de control en el borde' },
      { label: 'Modelos fundacionales afinados' },
      { label: 'Percepción multimodal' },
      { label: 'Arquitectura híbrida' },
    ],
    servicesHeading: {
      eyebrow: 'Capacidades',
      title: 'La capa de inteligencia',
      desc: 'El mismo stack de IA impulsa cada rama de POLCERO. El hardware del robot puede ser el suyo propio o el de nuestro catálogo - nosotros aportamos el cerebro.',
    },
    services: [
      {
        badge: 'CAPACIDAD',
        name: 'Ajuste fino de VLA',
        tagline: 'Modelos fundacionales, adaptados a su tarea',
        desc: 'Modelos VLA abiertos (GR00T N1.7, π0, OpenVLA) afinados con los datos del cliente. Una capa de abstracción nos permite cambiar los modelos base sin reentrenar la inteligencia de su tarea.',
      },
      {
        badge: 'CAPACIDAD',
        name: 'Visión y percepción',
        tagline: 'Comprensión de la escena en tiempo real',
        desc: 'Detección de tipo YOLO para el reconocimiento de objetos en tiempo real, cámaras de profundidad (RGB-D), LiDAR, imagen multiespectral y térmica, además de un VLM para la comprensión de la escena y el lenguaje.',
      },
      {
        badge: 'CAPACIDAD',
        name: 'Arquitectura de borde + nube',
        tagline: 'Control por debajo de 10 ms, aprendizaje a escala de nube',
        desc: 'Inferencia a bordo en el borde para un control por debajo de 10 ms. Nube para actualizaciones de entrenamiento, analítica y gestión de flotas. Un volante de datos mejora el rendimiento de forma continua.',
      },
      {
        badge: 'CAPACIDAD',
        name: 'Control clásico donde basta',
        tagline: 'IA solo donde aporta valor',
        desc: 'Controladores PID para operaciones de agarre y corte sencillas y repetitivas - menor coste, mayor fiabilidad. Reservamos la IA para decisiones complejas de percepción y comprensión de la escena.',
      },
      {
        badge: 'CAPACIDAD',
        name: 'Gestión de flotas',
        tagline: 'Coordinar muchos robots como un solo sistema',
        desc: 'Supervisión central de una flota mixta de robots: asignación de tareas, telemetría, despliegue de modelos e informes de productividad desde una única capa de control.',
      },
    ],
    processHeading: {
      eyebrow: 'Cómo colaboramos',
      title: 'De los datos del proceso a un cerebro en funcionamiento',
      desc: 'Añadimos inteligencia sobre su hardware o el nuestro en cuatro pasos.',
    },
    process: [
      { title: 'Datos y alcance', desc: 'Mapeamos la tarea, recopilamos o simulamos datos del proceso y definimos los requisitos de percepción y control.' },
      { title: 'Selección de modelos y ajuste fino', desc: 'Elegimos los modelos VLA / de visión adecuados (o control clásico) y los afinamos con sus datos tras una capa de abstracción estable.' },
      { title: 'Integración y despliegue en el borde', desc: 'Integramos el cerebro con el robot, desplegamos la inferencia en el borde para un control de baja latencia y validamos frente a los criterios de aceptación.' },
      { title: 'Operación de flota y volante de datos', desc: 'La analítica en la nube, las actualizaciones de modelos y la gestión de flotas siguen mejorando el rendimiento tras la puesta en marcha.' },
    ],
  },
  robots: {
    stats: [
      { label: 'Tipos de chasis (W4 · T6 · WL4 · Q4)' },
      { label: 'Eficiencia energética con ruedas frente a patas' },
      { label: 'Cerebro de IA compartido en todas las versiones' },
      { label: 'Módulos de tarea estandarizados' },
    ],
    servicesHeading: {
      eyebrow: 'El sistema modular',
      title: 'Una plataforma, muchos robots',
      desc: 'Un cerebro de IA compartido, una interfaz estandarizada, chasis intercambiables y módulos de tarea plug-and-play - desplegados para cualquier mercado, por encargo.',
    },
    services: [
      { badge: 'NÚCLEO', name: 'Cerebro de IA', tagline: 'La misma inteligencia en todos los chasis', desc: 'Modelos VLA + YOLO afinados con los datos del cliente. Inferencia en el borde y entrenamiento en la nube. La misma capa de inteligencia se adapta a cada chasis y mercado.' },
      { badge: 'NÚCLEO', name: 'Interfaz plug-and-play', tagline: 'Un único punto de integración para todas las combinaciones', desc: 'Un conector mecánico y eléctrico estandarizado. Cambie el chasis o los módulos de tarea sin rediseñar la capa de inteligencia - un único punto de integración para todas las combinaciones.' },
      { badge: 'CHASIS', name: 'Familia de chasis', tagline: 'W4 · T6 · WL4 · Q4', desc: 'W4 (con ruedas), T6 (con orugas), WL4 (rueda-pata), Q4 (con patas). Las plataformas con ruedas son unas 2,5 veces más eficientes energéticamente que las de patas en terreno llano - adaptadas al terreno y la tarea.' },
      { badge: 'MÓDULO', name: 'Módulos de tarea', tagline: 'La herramienta adecuada para cada trabajo', desc: 'Pinza blanda, cabezal de pulverización/fertirrigación, mástil de sensores (RGB-D / multiespectral / térmico), portador logístico, manipulador remoto - conecte la herramienta adecuada para cada trabajo.' },
      { badge: 'VERSIÓN', name: 'Robots agrícolas', tagline: 'Plataformas de campo autónomas', desc: 'Plataformas de campo autónomas para la siembra, el cuidado, la pulverización de precisión y la recolección selectiva. Fusión de sensores RGB-D + multiespectral + térmico para la monitorización de la salud de los cultivos.' },
      { badge: 'VERSIÓN', name: 'Robots para obras de construcción', tagline: 'Autonomía de BIM al campo', desc: 'Replanteo de BIM al campo, perforación, movimiento de tierras autónomo e inspección frente a un gemelo digital. Autonomía supervisada por humanos en todo momento.' },
      { badge: 'VERSIÓN', name: 'Máquinas de IA estacionarias', tagline: 'Celdas de brazo fijo y puestos de trabajo', desc: 'Robots de brazo fijo y puestos de trabajo inteligentes para la inspección, el control de calidad, el ensamblaje repetitivo y la manipulación de materiales en líneas de producción.' },
    ],
    processHeading: {
      eyebrow: 'Cómo lo entregamos',
      title: 'Configurado y fabricado por encargo',
      desc: 'Cada robot se ensambla a partir de la plataforma compartida y se adapta a su proceso.',
    },
    process: [
      { title: 'Alcance y configuración', desc: 'Mapeamos la tarea y elegimos el chasis, los módulos de tarea y los sensores que se ajustan al terreno y al trabajo.' },
      { title: 'Instalar el cerebro de IA', desc: 'La capa de inteligencia compartida se afina con sus datos y se integra a través de la interfaz estandarizada.' },
      { title: 'Construir y validar', desc: 'Montaje y pruebas en nuestras propias instalaciones, con una prueba de aceptación en fábrica antes de la entrega.' },
      { title: 'Desplegar y dar soporte', desc: 'Puesta en marcha in situ, formación de operarios y servicio continuo - los módulos y el chasis pueden intercambiarse a medida que cambian las necesidades.' },
    ],
    aiBrain: {
      eyebrow: 'Cerebro de IA',
      title: 'Cada versión funciona con el cerebro de IA de POLCERO',
      desc: 'La plataforma Robots comparte la capa de inteligencia de POLCERO AI Systems - modelos VLA, visión de tipo YOLO, navegación SLAM y gestión de flotas - afinada con los datos de su proceso.',
      ctaLabel: 'Más información sobre AI Systems',
    },
  },
  'farma-ai': {
    stats: [
      { label: 'Robot como servicio, sin capex' },
      { label: 'Uso de químicos frente a pulverización total' },
      { label: 'Precisión de colocación de la siembra' },
      { label: 'Fases del ciclo de cultivo automatizadas' },
    ],
    servicesHeading: {
      eyebrow: 'El ciclo de cultivo',
      title: 'Un cerebro de agricultor con IA, toda la temporada',
      desc: 'Una flota de robots de campo autónomos gobernados por el cerebro supervisor "agricultor con IA" - para grandes explotaciones de hortalizas, entregada como robot como servicio.',
    },
    services: [
      { badge: 'FASE', name: 'Siembra', tagline: 'Trasplante preciso y siembra directa', desc: 'Trasplante preciso fila a fila o siembra directa con navegación RTK/SLAM. Precisión de colocación por debajo del centímetro sobre el chasis POLCERO-W4.' },
      { badge: 'FASE', name: 'Cuidado - deshierbe y aclareo', tagline: 'Sin herbicida para las malas hierbas detectadas', desc: 'Detección de malas hierbas por visión artificial más deshierbe mecánico o térmico. Sin herbicida para las malas hierbas identificadas - solo pulverización localizada dirigida.' },
      { badge: 'FASE', name: 'Pulverización localizada / microdosificación', tagline: 'Químicos solo donde se necesitan', desc: 'Aplicación selectiva de fertilizante o productos fitosanitarios solo donde la IA detecta necesidad. Reduce el uso de químicos hasta en un 90% frente a la pulverización total.' },
      { badge: 'FASE', name: 'Monitorización', tagline: 'Un mapa diario de salud del cultivo', desc: 'Escaneo diario del campo con cámaras RGB-D + multiespectral + térmica. Mapa de salud del cultivo, alerta temprana de enfermedades y predicción de la madurez para la cosecha.' },
      { badge: 'FASE', name: 'Recolección selectiva', tagline: 'La brecha sin resolver más difícil de la automatización agrícola', desc: 'Recolección selectiva de hortalizas delicadas (empezando por las lechugas) - la brecha sin resolver más difícil de la automatización agrícola. Pinza blanda más detección de madurez por IA.' },
    ],
    processHeading: {
      eyebrow: 'Cómo colaboramos',
      title: 'Robot como servicio, priorizando el campo',
      desc: 'Asumimos la flota, las operaciones y el riesgo - usted obtiene el resultado por hectárea.',
    },
    process: [
      { title: 'Evaluación del campo', desc: 'Inspeccionamos la explotación, los cultivos y la temporada, y acordamos las operaciones objetivo y las métricas de éxito.' },
      { title: 'Configuración de flota y cerebro', desc: 'Configuramos los robots de campo y ajustamos el cerebro de agricultor con IA al cultivo, el suelo y la distribución.' },
      { title: 'Operación supervisada', desc: 'Los robots ejecutan el ciclo de cultivo bajo autonomía supervisada por humanos; cada pasada alimenta el mapa de monitorización.' },
      { title: 'Balance de la temporada y escalado', desc: 'Revisamos el rendimiento, el ahorro de insumos y la disponibilidad, y luego escalamos la flota para la siguiente temporada.' },
    ],
    aiBrain: {
      eyebrow: 'Cerebro de IA',
      title: 'Impulsado por el cerebro de agricultor con IA de POLCERO',
      desc: 'Farma AI funciona con la capa de inteligencia de POLCERO AI Systems - visión, percepción y gestión de flotas - especializada para la agricultura y afinada con sus campos.',
      ctaLabel: 'Más información sobre AI Systems',
    },
  },
  'photonic-processors': {
    stats: [
      { label: 'Latencia de multiplicación matricial óptica' },
      { label: 'Mercado 2025-2034' },
      { label: 'CAGR' },
      { label: 'Empresas de computación fotónica seguidas (2026)' },
    ],
    servicesHeading: {
      eyebrow: 'Dirección de I+D',
      title: 'Cómputo de IA con luz',
      desc: 'Una dirección de investigación: acelerar la inferencia de IA en nuestros robots usando luz en lugar de solo electrónica - menor consumo, mayor rendimiento.',
    },
    services: [
      { badge: 'I+D', name: 'Multiplicación matricial óptica', tagline: 'Una pasada óptica frente a miles de ciclos de reloj', desc: 'La inferencia de redes neuronales está dominada por la multiplicación matriz-vector (GEMM). Los chips fotónicos la realizan con luz que atraviesa mallas de interferómetros Mach-Zehnder - haciendo en una sola pasada óptica lo que la electrónica necesita miles de ciclos de reloj para calcular.' },
      { badge: 'I+D', name: 'Arquitectura híbrida fotónico-electrónica', tagline: 'Cálculo óptico, activaciones electrónicas', desc: 'Los chips fotónicos destacan en las operaciones lineales (cálculo matricial) pero no en las no lineales (funciones de activación). La arquitectura de consenso combina núcleos ópticos para el cálculo matricial con unidades electrónicas para las activaciones - un diseño híbrido que aprovecha lo mejor de ambos.' },
      { badge: 'MERCADO', name: 'De 1.800 M$ a 14.600 M$', tagline: 'Un mercado de aceleradores en rápido crecimiento', desc: 'El mercado global de aceleradores de IA fotónicos, de 2025 a 2034 (CAGR 26,3%). A fecha de 2026 seguimos a 52 empresas de computación fotónica en todo el mundo.' },
      { badge: 'ESTRATEGIA', name: 'La fotónica como la futura capa de cómputo', tagline: 'Cambiar el sustrato, conservar la inteligencia', desc: 'A medida que los aceleradores fotónicos alcancen la madurez (una ventana de 2027-2031 para productos de clase centro de datos), la arquitectura del cerebro de IA de POLCERO está diseñada para absorberlos - la capa de abstracción nos permite cambiar el sustrato de cómputo sin reentrenar la inteligencia de la tarea.' },
    ],
  },
};
