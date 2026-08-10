import type { IndustryPower } from '../../industryPower';

export const it: Record<string, IndustryPower> = {
  industry: {
    eyebrow: 'INFRASTRUTTURA ELETTRICA',
    title: 'Alimentazione di rete nel reparto produzione',
    lead: `Un capannone ha corrente ovunque, quindi la maggior parte dei robot non deve trasportarla. Installiamo binari di alimentazione fissi lungo le postazioni e lasciamo che i robot funzionino direttamente dalla rete — le batterie diventano la riserva per quelli che si spostano tra le macchine.`,
    modes: [
      { name: 'Binari fissi alle postazioni', text: `Un robot fissato a una postazione o che la serve preleva energia da un binario e funziona 24/7 senza un solo cambio.` },
      { name: 'Hot-swap per i mobili', text: `Un umanoide che si sposta tra le macchine porta tre batterie hot-swap e le ricarica a una stazione di ricarica.` },
      { name: `Un'unica integrazione`, text: `L'alimentazione a binario e quella a batteria usano lo stesso modulo centrale — passa un robot da cavo a mobile senza riprogettazione.` },
    ],
  },
  agriculture: {
    eyebrow: 'INFRASTRUTTURA ELETTRICA',
    title: `Alimentare l'intera fattoria autonoma`,
    lead: `Farma AI alimenta l'intero ecosistema di coltivazione dalla rete dove possibile. Le serre ricevono binari di alimentazione fissi; i campi aperti, linee aeree di conduttori come la catenaria del tram lungo i filari; i robot su binari prelevano direttamente dai binari dei tubi riscaldati — le batterie coprono dove nessuna linea arriva.`,
    modes: [
      { name: 'Binari fissi nelle serre', text: `Serre in vetro e tunnel fanno funzionare i robot da binari fissi, così la flotta lavora tutto il giorno per tutta la stagione.` },
      { name: 'Linee aeree sui campi', text: `Sui campi aperti tendiamo linee aeree di conduttori lungo i filari; il robot preleva dalla linea e ricarica le batterie mentre lavora.` },
      { name: 'Batterie fuori rete', text: `Oltre le linee, le batterie hot-swap mantengono autonomi i robot da campo — sostituite in una stazione di ricarica alimentata a energia solare.` },
    ],
  },
  construction: {
    eyebrow: 'INFRASTRUTTURA ELETTRICA',
    title: `Energia dove non c'è ancora la rete`,
    lead: `Un cantiere ha raramente alimentazione fissa nelle prime fasi, quindi i robot da costruzione si affidano alle batterie, con il drone da trasporto che consegna batterie cariche negli angoli più lontani. Dove è disponibile l'energia di cantiere o un generatore, le stazioni fisse funzionano via cavo.`,
    modes: [
      { name: 'Hot-swap sul campo', text: `I robot cingolati e con zampe portano tre batterie e le sostituiscono a una stazione di ricarica mobile in cantiere.` },
      { name: 'Batterie consegnate dal drone', text: `Il drone da trasporto lascia batterie cariche e ritira quelle scariche dove la strada non arriva.` },
      { name: 'Via cavo nei punti fissi', text: `Dove è presente l'energia di cantiere o un generatore, le stazioni di ispezione e movimentazione funzionano di continuo via cavo.` },
    ],
  },
  logistics: {
    eyebrow: 'INFRASTRUTTURA ELETTRICA',
    title: 'Corsie di ricarica in magazzino, batterie nel piazzale',
    lead: `Un magazzino ha corrente in tutto l'edificio, quindi posiamo corsie di ricarica e binari fissi per i robot che lavorano all'interno; nel piazzale e su strada la flotta funziona con batterie hot-swap, e il drone porta batterie cariche ai punti remoti.`,
    modes: [
      { name: 'Corsie di ricarica al chiuso', text: `I robot si agganciano lungo le corsie di ricarica tra un compito e l'altro, così il prelievo e il trasporto interno non si fermano mai per l'energia.` },
      { name: 'Hot-swap nel piazzale', text: `Fuori dall'edificio, i robot a tre batterie ruotano le proprie batterie a una stazione di ricarica del piazzale.` },
      { name: 'Batterie ai punti remoti', text: `Il drone da trasporto consegna batterie cariche insieme al robot, così atterra pronto a lavorare.` },
    ],
  },
  'public-sector': {
    eyebrow: 'INFRASTRUTTURA ELETTRICA',
    title: 'Energia sul posto, dati sul posto',
    lead: `Nelle installazioni pubbliche, sia l'energia sia i dati restano sul posto. L'infrastruttura fissa funziona dalla rete locale via cavo o binario; i robot mobili di ispezione e pattugliamento funzionano con batterie hot-swap — e, come i modelli, nulla deve lasciare la sede.`,
    modes: [
      { name: 'Rete per installazioni fisse', text: `Le macchine stazionarie e le stazioni di ricarica funzionano dalla rete dell'edificio via cavo o binario fisso.` },
      { name: 'Batterie per il pattugliamento', text: `I robot di ispezione e pattugliamento restano autonomi su tre batterie hot-swap, sostituite a una stazione locale.` },
      { name: 'Tutto resta locale', text: `Alimentazione, ricarica e inferenza sul dispositivo risiedono tutte in sede — nessuna dipendenza inviata all'esterno.` },
    ],
  },
};
