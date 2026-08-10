import type { IndustryPower } from '../../industryPower';

export const ro: Record<string, IndustryPower> = {
  industry: {
    eyebrow: 'INFRASTRUCTURĂ DE ALIMENTARE',
    title: 'Alimentare de la rețea pe podeaua fabricii',
    lead: 'O hală are curent peste tot, așa că majoritatea roboților nu trebuie să-l poarte. Instalăm șine de alimentare fixe de-a lungul stațiilor și lăsăm roboții să funcționeze direct din rețea — bateriile devin rezerva pentru cei care se deplasează între mașini.',
    modes: [
      { name: 'Șine fixe la stații', text: 'Roboții legați de o stație fixă sau care o deservesc preiau curent printr-o șină și funcționează 24/7 fără un singur schimb.' },
      { name: 'Hot-swap pentru cei mobili', text: 'Un humanoid care se mișcă între mașini poartă trei acumulatori hot-swap și îi reîncarcă la o stație de încărcare.' },
      { name: 'O singură integrare', text: 'Alimentarea prin șină și cea pe baterii folosesc același modul central — treci un robot de la cablu la mobil fără reproiectare.' },
    ],
  },
  agriculture: {
    eyebrow: 'INFRASTRUCTURĂ DE ALIMENTARE',
    title: 'Alimentarea întregii ferme autonome',
    lead: 'Farma AI alimentează întregul ecosistem de cultivare de la rețea acolo unde poate. Serele primesc șine de alimentare fixe; câmpurile deschise primesc linii aeriene ca firul de tramvai de-a lungul rândurilor; roboții pe șine preiau curent direct din șinele conductelor încălzite — bateriile completează acolo unde nu ajunge nicio linie.',
    modes: [
      { name: 'Șine fixe în sere', text: 'Serele de sticlă și tunelurile alimentează roboții de pe șine fixe, așa că flota lucrează non-stop pe tot parcursul sezonului.' },
      { name: 'Linii aeriene pe câmpuri', text: 'Pe câmpurile deschise întindem linii aeriene de-a lungul rândurilor; robotul preia curent din linie și își reîncarcă acumulatorii în timp ce lucrează.' },
      { name: 'Baterii în afara rețelei', text: 'Dincolo de linii, acumulatorii hot-swap țin roboții de câmp autonomi — schimbați la o stație de încărcare alimentată solar.' },
    ],
  },
  construction: {
    eyebrow: 'INFRASTRUCTURĂ DE ALIMENTARE',
    title: 'Alimentare acolo unde încă nu există rețea',
    lead: 'Un șantier are rareori alimentare fixă în fazele timpurii, așa că roboții de construcții se bazează pe baterii, iar drona de transport livrează acumulatori încărcați în colțurile îndepărtate. Acolo unde este disponibil curentul de șantier sau un generator, stațiile fixe funcționează prin cablu.',
    modes: [
      { name: 'Hot-swap pe teren', text: 'Roboții pe șenile și pășitori poartă trei acumulatori și îi schimbă la o stație de încărcare mobilă pe șantier.' },
      { name: 'Acumulatori livrați de dronă', text: 'Drona de transport lasă acumulatori încărcați și îi ridică pe cei descărcați acolo unde nu ajunge drumul.' },
      { name: 'Prin cablu în puncte fixe', text: 'Acolo unde există curent de șantier sau un generator, stațiile de inspecție și manipulare funcționează continuu prin cablu.' },
    ],
  },
  logistics: {
    eyebrow: 'INFRASTRUCTURĂ DE ALIMENTARE',
    title: 'Benzi de încărcare în depozit, acumulatori în curte',
    lead: 'Un depozit are curent peste tot, așa că amenajăm benzi de încărcare și șine fixe pentru roboții care lucrează înăuntru; în curte și pe drum flota funcționează pe acumulatori hot-swap, iar drona duce acumulatori încărcați la punctele de livrare îndepărtate.',
    modes: [
      { name: 'Benzi de încărcare în interior', text: 'Roboții se andochează de-a lungul benzilor de încărcare între sarcini, așa că culegerea și transportul intern nu se opresc niciodată pentru curent.' },
      { name: 'Hot-swap în curte', text: 'În afara clădirii, roboții cu trei acumulatori își schimbă singuri bateriile la o stație de încărcare din curte.' },
      { name: 'Acumulatori la puncte îndepărtate', text: 'Drona de transport livrează acumulatori încărcați împreună cu robotul, așa că acesta aterizează gata de lucru.' },
    ],
  },
  'public-sector': {
    eyebrow: 'INFRASTRUCTURĂ DE ALIMENTARE',
    title: 'Alimentare la fața locului, date la fața locului',
    lead: 'Pentru instalațiile publice, atât alimentarea, cât și datele rămân la fața locului. Infrastructura fixă funcționează de la rețeaua locală prin cablu sau șină; roboții mobili de inspecție și patrulare funcționează pe acumulatori hot-swap — și, la fel ca modelele, nimic nu trebuie să părăsească incinta.',
    modes: [
      { name: 'Rețea pentru instalațiile fixe', text: 'Mașinile staționare și stațiile de încărcare funcționează de la rețeaua clădirii prin cablu sau șină fixă.' },
      { name: 'Baterii pentru patrulare', text: 'Roboții de inspecție și patrulare rămân autonomi pe trei acumulatori hot-swap, schimbați la o stație locală.' },
      { name: 'Totul rămâne local', text: 'Alimentare, încărcare și inferență pe dispozitiv — toate la fața locului, fără nicio dependență trimisă în exterior.' },
    ],
  },
};
