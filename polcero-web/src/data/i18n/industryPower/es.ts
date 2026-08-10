import type { IndustryPower } from '../../industryPower';

export const es: Record<string, IndustryPower> = {
  industry: {
    eyebrow: 'INFRAESTRUCTURA ELÉCTRICA',
    title: 'Alimentación de red en la planta de producción',
    lead: 'Una nave tiene corriente en todas partes, así que la mayoría de los robots no necesitan transportarla. Instalamos raíles de alimentación fijos a lo largo de los puestos y dejamos que los robots funcionen directamente de la red — las baterías pasan a ser el respaldo para los que se desplazan entre máquinas.',
    modes: [
      { name: 'Raíles fijos en los puestos', text: 'Un robot atornillado a un puesto fijo o que lo atiende toma energía de un raíl y funciona 24/7 sin un solo cambio.' },
      { name: 'Hot-swap para los móviles', text: 'Un humanoide que se mueve entre máquinas lleva tres baterías hot-swap y las recarga en una estación de carga.' },
      { name: 'Una sola integración', text: 'La alimentación por raíl y la de batería usan el mismo módulo central — cambia un robot de cable a móvil sin rediseño.' },
    ],
  },
  agriculture: {
    eyebrow: 'INFRAESTRUCTURA ELÉCTRICA',
    title: 'Alimentar toda la granja autónoma',
    lead: 'Farma AI alimenta todo el ecosistema de cultivo desde la red allí donde puede. Los invernaderos reciben raíles de alimentación fijos; los campos abiertos, líneas aéreas de conductor como la catenaria del tranvía a lo largo de las hileras; los robots sobre raíles toman energía directamente de los raíles de tubería calefactada — las baterías cubren allí donde no llega ninguna línea.',
    modes: [
      { name: 'Raíles fijos en invernaderos', text: 'Los umbráculos y túneles hacen funcionar los robots con raíles fijos, de modo que la flota trabaja las 24 horas durante toda la temporada.' },
      { name: 'Líneas aéreas en los campos', text: 'En los campos abiertos tendemos líneas aéreas de conductor a lo largo de las hileras; el robot toma energía de la línea y recarga sus baterías mientras trabaja.' },
      { name: 'Baterías fuera de la red', text: 'Más allá de las líneas, las baterías hot-swap mantienen autónomos a los robots de campo — cambiadas en una estación de carga alimentada por energía solar.' },
    ],
  },
  construction: {
    eyebrow: 'INFRAESTRUCTURA ELÉCTRICA',
    title: 'Energía donde aún no hay red',
    lead: 'Una obra rara vez tiene alimentación fija en las primeras fases, así que los robots de construcción se apoyan en las baterías, con el dron de transporte entregando baterías cargadas en los rincones más lejanos. Donde hay energía de obra o un generador, las estaciones fijas funcionan por cable.',
    modes: [
      { name: 'Hot-swap sobre el terreno', text: 'Los robots con orugas y con patas llevan tres baterías y las cambian en una estación de carga móvil en la obra.' },
      { name: 'Baterías entregadas por dron', text: 'El dron de transporte deja baterías cargadas y recoge las gastadas allí donde no llega la carretera.' },
      { name: 'Por cable en puntos fijos', text: 'Donde hay energía de obra o un generador, las estaciones de inspección y manipulación funcionan de forma continua por cable.' },
    ],
  },
  logistics: {
    eyebrow: 'INFRAESTRUCTURA ELÉCTRICA',
    title: 'Carriles de carga en el almacén, baterías en el patio',
    lead: 'Un almacén tiene corriente por todo el recinto, así que tendemos carriles de carga y raíles fijos para los robots que trabajan dentro; en el patio y en la carretera la flota funciona con baterías hot-swap, y el dron lleva baterías cargadas a los puntos remotos.',
    modes: [
      { name: 'Carriles de carga en interior', text: 'Los robots se acoplan a lo largo de los carriles de carga entre tareas, de modo que la recogida y el transporte interno nunca se detienen por energía.' },
      { name: 'Hot-swap en el patio', text: 'Fuera del edificio, los robots de tres baterías rotan sus propias baterías en una estación de carga del patio.' },
      { name: 'Baterías a puntos remotos', text: 'El dron de transporte entrega baterías cargadas junto con el robot, de modo que aterriza listo para trabajar.' },
    ],
  },
  'public-sector': {
    eyebrow: 'INFRAESTRUCTURA ELÉCTRICA',
    title: 'Energía en el sitio, datos en el sitio',
    lead: 'En las instalaciones públicas, tanto la energía como los datos permanecen en el sitio. La infraestructura fija funciona con la red local por cable o raíl; los robots móviles de inspección y patrulla funcionan con baterías hot-swap — y, como los modelos, nada tiene que salir de las instalaciones.',
    modes: [
      { name: 'Red para instalaciones fijas', text: 'Las máquinas estacionarias y las estaciones de carga funcionan con la red del edificio por cable o raíl fijo.' },
      { name: 'Baterías para patrulla', text: 'Los robots de inspección y patrulla permanecen autónomos con tres baterías hot-swap, cambiadas en una estación local.' },
      { name: 'Todo permanece local', text: 'La alimentación, la carga y la inferencia en el dispositivo residen todas en las instalaciones — sin dependencia enviada al exterior.' },
    ],
  },
};
