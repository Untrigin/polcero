import type { ProductRichOverride } from '../../productRich';

// ── Blocuri comune (identice pentru humanoid și mobile-humanoid) ──────────────
const batteryRobot = {
  title: 'Baterie și energie',
  lead: 'Fiecare robot funcționează pe trei acumulatori hot-swap montați în modulul central. Un acumulator este o unitate autonomă de 48 V, așa că puterea crește cu numărul de acumulatori, iar unul descărcat se schimbă fără scule în timp ce robotul continuă să lucreze pe ceilalți.',
  rows: [
    { label: 'Tensiune acumulator', value: '48 V hot-swap' },
    { label: 'Energie pe acumulator', value: '≈ 864 Wh fiecare' },
    { label: 'Acumulatori în modulul central', value: '3 (≈ 2.6 kWh în total)' },
    { label: 'Autonomie pe baterie', value: '≈ 5 h în regim uzual' },
    { label: 'La alimentare directă', value: '24/7 (prin cablu sau rețea)' },
    { label: 'Timp de schimb', value: '< 60 s pe acumulator, fără scule' },
  ],
};

const swapRobot = {
  title: 'Acumulatori care se schimbă singuri — zero opriri',
  lead: 'Robotul nu se oprește niciodată complet pentru a se încărca. Își rotește cei trei acumulatori pe rând, funcționând pe ceilalți doi în timp ce unul descărcat se încarcă — așa că un schimb nu se oprește niciodată din cauza bateriei.',
  robot: {
    title: 'Robotul o face singur',
    steps: [
      'Simțind un acumulator pe terminate, robotul se deplasează la stația de încărcare și își menține starea pe cei doi acumulatori rămași.',
      'Un braț ajunge la spatele modulului central, eliberează zăvorul și scoate acumulatorul descărcat.',
      'Așază acumulatorul într-un locaș liber al stației cu 4 locașuri și ia în loc unul complet încărcat.',
      'Acumulatorul proaspăt se fixează cu un clic; robotul repetă pentru fiecare acumulator pe rând și revine la muncă — niciodată oprit, niciodată inactiv.',
    ],
  },
  human: {
    title: 'O persoană o poate face în câteva secunde',
    steps: [
      'Fără oprire și fără scule: acumulatorii se schimbă la cald în timp ce robotul stă pregătit.',
      'Apasă zăvorul de pe spatele modulului central și trage acumulatorul drept afară.',
      'Introdu un acumulator încărcat până se fixează cu un clic — robotul continuă de unde a rămas.',
    ],
  },
};

const statusRobot = {
  title: 'Starea bateriei și stația de încărcare',
  lead: 'Fiecare acumulator își raportează propria stare, așa că robotul și operatorii săi știu mereu când să schimbe. O stație de încărcare cu 4 locașuri ține pregătită o rotație de acumulatori, iar robotul se andochează pentru a-și schimba singur acumulatorii în timpul lucrului.',
  points: [
    { title: 'Stare live per acumulator', text: 'Nivel de încărcare, sănătate și temperatură pentru fiecare dintre cei trei acumulatori, în timp real.' },
    { title: 'Schimb predictiv', text: 'Sistemul programează următorul schimb înainte ca un acumulator să se descarce, așa că munca nu este întreruptă niciodată în mijlocul unei sarcini.' },
    { title: 'Stație de încărcare cu 4 locașuri', text: 'Patru intrări de încărcare țin acumulatorii de rezervă plini și pregătiți pentru următoarea rotație.' },
    { title: 'Andocare autonomă', text: 'Robotul își rotește singur acumulatorii la stație în timpul unui schimb — fără operator și fără opriri.' },
  ],
};

const visionRobot = {
  title: 'Cum vede robotul',
  lead: 'Robotul construiește o singură imagine a lumii din mai multe perspective deodată. Un cap binocular cu câmp larg oferă o imagine stângă și una dreaptă; compararea lor dă adâncimea; peste asta, stratul AI adaugă o perspectivă de percepție care denumește obiecte, suprafețe și oameni.',
  views: [
    { label: 'Stânga', text: 'Ochiul stâng al capului binocular — o imagine color cu câmp larg a scenei.' },
    { label: 'Dreapta', text: 'Ochiul drept — a doua imagine color pe care robotul o compară cu cea stângă.' },
    { label: 'Adâncime', text: 'Disparitatea stereo dintre stânga și dreapta dă distanța până la fiecare punct din cadru.' },
    { label: 'Percepție', text: 'Stratul AI etichetează obiecte, suprafețe, obstacole și oameni și planifică următoarea mișcare direct pe dispozitiv.' },
  ],
  extra: [
    { title: 'Camere la încheieturi', text: 'Camere HD la fiecare încheietură oferă o imagine de aproape pentru prindere și asamblare precise.' },
    { title: 'LiDAR + ultrasunete', text: 'LiDAR-ul de pe șasiu și senzorii cu ultrasunete cartografiază spațiul și surprind obstacolele dincolo de camere.' },
    { title: 'Forță și IMU', text: 'Articulațiile cu feedback de forță și un IMU simt contactul și echilibrul pentru o mișcare sigură și stabilă.' },
    { title: 'Voce și limbaj', text: 'Interacțiunea vocală și un model de limbaj permit unei persoane să dirijeze robotul prin vorbire firească.' },
  ],
};

const powerRobot = {
  title: 'Două moduri de a-l alimenta: baterii sau rețeaua',
  lead: 'Robotul este autonom pe baterii, dar acolo unde un amplasament poate furniza energie, funcționează direct din rețea prin cablu — fără acumulatori de rotit, fără opriri, cu costuri de exploatare mai mici.',
  modes: [
    { name: 'Acumulatori hot-swap', text: 'Complet mobil și autonom. Trei acumulatori se rotesc prin stația de încărcare, așa că robotul se poate deplasa oriunde fără cablu.' },
    { name: 'Alimentare directă (cablu)', text: 'Pentru o stație fixă sau regim 24/7, robotul preia energie prin cablu și funcționează continuu — bateriile devin rezervă.' },
    { name: 'Infrastructură de rețea', text: 'În hale, fabrici și sere instalăm șine de alimentare fixe; în exterior, pe câmpuri și în curți, linii aeriene ca firul de tramvai. Robotul preia energie din linie și își reîncarcă acumulatorii în timp ce lucrează.' },
  ],
};

const R = { battery: batteryRobot, swap: swapRobot, status: statusRobot, vision: visionRobot, power: powerRobot };

export const ro: Record<string, ProductRichOverride> = {
  humanoid: {
    ...R,
    application: {
      title: 'Trei humanoizi, un singur depozit',
      body: 'Așa arată un schimb. Într-o singură încăpere, un humanoid împachetează un colet la banc, un al doilea ridică de pe podea o ladă metalică încărcată, iar un al treilea stivuiește cutii pe un raft. Același robot, trei sarcini — fiecare a intrat într-un spațiu construit pentru oameni și a preluat muncă făcută pentru mâini omenești, fără nicio linie de reconstruit în jurul lor.',
    },
  },
  'mobile-humanoid': {
    ...R,
    versions: {
      title: 'Două versiuni de platformă',
      lead: 'Același tors humanoid stă pe baza mobilă de care ai nevoie — o bază ușoară, pliabilă, pentru culegere la nivelul podelei, sau o bază grea pentru a ridica greutate reală.',
      items: [
        {
          name: 'V1 — bază pliabilă',
          blurb: 'Catargul se pliază la mijloc, așa că robotul se apleacă să ridice lucruri de pe podea cu pierdere minimă de putere. Roțile de la bază rotesc întregul robot pe loc, făcându-l agil pe culoare înguste și la înălțimi mici de culegere.',
          specs: [
            { label: 'Cel mai potrivit pentru', value: 'Culegere la nivelul podelei, culoare înguste' },
            { label: 'Bază', value: 'Catarg pliabil, rotire pe loc' },
            { label: 'Rază de acțiune', value: 'De la podea la înălțimea de lucru' },
          ],
        },
        {
          name: 'V2 — bază grea',
          blurb: 'O platformă mobilă mai puternică, construită să ridice greutate reală. Păstrează partea superioară humanoidă cu două brațe, dar stă pe o bază rigidă cu sarcină utilă mare pentru manipularea și asamblarea unor piese industriale mai grele.',
          specs: [
            { label: 'Cel mai potrivit pentru', value: 'Manipulare și asamblare grea' },
            { label: 'Bază', value: 'Platformă rigidă cu sarcină utilă mare' },
            { label: 'Sarcină utilă nominală', value: '≈ 7 kg per braț' },
          ],
        },
      ],
    },
  },
  'specialized-robots': {
    ...R,
    vision: { ...visionRobot, extra: [
      { title: 'Catarg de percepție', text: 'Pe un șasiu specializat, modulul central poartă un catarg suplimentar de scule și camere pentru sarcina în cauză.' },
      { title: 'LiDAR + ultrasunete', text: 'LiDAR-ul de pe șasiu și senzorii cu ultrasunete cartografiază terenul accidentat și surprind obstacolele dincolo de camere.' },
      { title: 'Multispectral / termic', text: 'Imagistică multispectrală și termică opțională pentru sănătatea culturilor, inspecție și lucrul pe timp de noapte.' },
      { title: 'Calcul pe dispozitiv', text: 'Detecția și planificarea rulează pe dispozitiv; datele și conformitatea rămân în UE.' },
    ] },
    robots: {
      title: 'Linia specializată, robot cu robot',
      lead: 'Fiecare dintre aceștia este același modul central — control, AI și acumulatori hot-swap — pe un șasiu diferit. Păstrezi creierul și modulele de sarcină; schimbi platforma potrivit terenului. Adaugi sau scoți brațe, un clește, un cap de recoltare sau un catarg de senzori la conectorul cu eliberare rapidă.',
      items: [
        {
          name: 'Robot pășitor',
          role: 'Scări, obstacole, teren neuniform',
          body: 'Un șasiu pe patru picioare care trece peste scări, borduri și teren accidentat pe care nicio roată nu-l poate lua. Parcurge trasee de inspecție prin uzine, stații de transformare și amplasamente amenajate pentru oameni, nu pentru mașini.',
          modify: 'Adaugă unul sau două brațe cu clește pentru manipulare, ori un catarg de senzori pentru inspecție. Treci la o bază pe roți sau pe șenile când terenul devine plat sau moale.',
        },
        {
          name: 'Robot pe șenile',
          role: 'Neasfaltat, teren greu, șantiere',
          body: 'Un șasiu pe șenile pentru noroi, moloz și teren abrupt, neasfaltat. Duce sarcină peste un șantier sau un câmp deschis unde roțile se împotmolesc și picioarele sunt prea lente.',
          modify: 'Montează un cărăuș logistic pentru transport greu, un braț pentru manipulare sau un catarg de măsurare pentru inspecție BIM. Același corp trece pe picioare sau roți când se schimbă sarcina.',
        },
        {
          name: 'Robot pe roți',
          role: 'Podele, depozite, teren plat',
          body: 'Un șasiu pe roți rapid și silențios pentru podele industriale și depozite — cu circa 2.5× mai eficient energetic decât picioarele pe teren plat. Ideal pentru patrulare, monitorizare și transport intern.',
          modify: 'Adaugă brațe și un clește pentru pick-and-place, un catarg de senzori pentru monitorizare sau un cărăuș pentru transport. Mută modulul central pe o bază cu șenile ca să părăsești asfaltul.',
        },
        {
          name: 'Robot roată-picior',
          role: 'Teren plat, obstacole și șine',
          body: 'Un șasiu hibrid roată-picior: rulează rapid pe plat și, când întâlnește o treaptă, o bordură sau o șină, picioarele ridică roțile peste ea. O singură platformă pentru medii mixte care altfel ar avea nevoie de doi roboți.',
          modify: 'Brațe, clește, cap de recoltare sau catarg de senzori se montează toate la conectorul cu eliberare rapidă. Scoate picioarele pentru o bază pur pe roți, ori pune-le la loc când traseul devine dificil.',
        },
        {
          name: 'Braț pe o platformă',
          role: 'Linii de producție, mașini mobile, headere',
          body: 'Modulul central fixat într-un singur punct — pe o linie de producție sau montat pe o mașină în mișcare ori pe un header. Pe un header de recoltat salată, de exemplu, brațele taie și așază cultura direct pe bandă în timp ce mașina înaintează.',
          modify: 'Alege unul sau două brațe cu clește, cuțit sau cap de recoltare. Montează-l fix pe o linie sau pe orice mașină gazdă care îl poartă prin câmp.',
        },
        {
          name: 'Robot pe șine',
          role: 'Sere, rânduri, trasee fixe',
          body: 'O versiune ghidată pe șine pentru sere și sere de sticlă amenajate pe rânduri fixe. Rulează pe șinele conductelor încălzite dintre culturi pentru stropire, monitorizare și recoltare selectivă precise și repetabile.',
          modify: 'Adaugă un cap de stropire sau fertirigare, un catarg de senzori sau un clește moale. Același modul central se ridică de pe șine pe o bază pe roți sau roată-picior pentru teren deschis.',
        },
      ],
    },
  },
  'transport-drone': {
    battery: {
      title: 'Baterie și energie',
      lead: 'Drona de transport zboară pe propriul acumulator de zbor de mare putere și transportă totodată acumulatori hot-swap încărcați pentru roboții pe care îi livrează — astfel încât aceștia să ajungă cu bateriile pline și să-și cheltuiască energia pe muncă, nu pe călătorie.',
      rows: [
        { label: 'Acumulator', value: 'Acumulator de zbor hot-swap' },
        { label: 'Energie pe acumulator', value: '≈ 30 kWh' },
        { label: 'Autonomie la sarcină utilă maximă', value: '≈ 20 min' },
        { label: 'Reîncărcare', value: 'Schimb hot-swap între zboruri' },
        { label: 'Transportă și', value: 'Acumulatori de 48 V încărcați pentru roboți' },
      ],
    },
    drone: {
      title: 'Drona transportă roboții',
      body: 'Scopul nostru este ca drona să transporte roboți și humanoizi pe distanțele mai lungi, astfel încât roboții să-și păstreze energia pentru sarcină în loc să o cheltuiască ajungând acolo. Drona transportă și module și șasiuri interschimbabile, așa că un robot ajunge capabil să aleagă modulul de sarcină și platforma pe care le cere mediul său.',
      points: [
        'Roboții ajung la fața locului cu bateriile pline și aterizează gata de lucru.',
        'Șasiuri și module de sarcină interschimbabile călătoresc împreună cu drona.',
        'Livrare acolo unde se termină drumul — munți, amplasamente fără drumuri asfaltate, zone izolate după o inundație.',
        'Veriga lipsă a modelului de închiriere pe oră: un robot deservește mai mulți clienți în aceeași zi.',
      ],
    },
  },
  'polcero-os': {
    vision: visionRobot,
  },
};
