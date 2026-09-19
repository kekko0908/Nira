export type Tone = 'violet' | 'green' | 'plum' | 'gold'

export interface EventCategory {
  slug: string
  title: string
  label: string
  eyebrow: string
  summary: string
  description: string
  image: string
  imageAlt: string
  tone: Tone
  occasions: string[]
  services: string[]
  locations: string[]
}

export interface ServiceCategory {
  slug: string
  title: string
  summary: string
  items: string[]
  professionals: string[]
  image: string
}

export interface LocationCategory {
  slug: string
  title: string
  summary: string
  description: string
  image: string
  imageAlt: string
  suitableFor: string[]
  notes: string[]
}

export interface NiraPath {
  name: string
  title: string
  subtitle: string
  description: string
  bestFor: string
}

export interface EventPageDetail {
  intro: string
  experienceTitle: string
  experienceText: string
  pillars: { title: string; text: string }[]
  gallery: { image: string; alt: string; caption: string }[]
  decisions: { title: string; text: string }[]
  closing: string
}

export const eventCategories: EventCategory[] = [
  {
    slug: 'privati',
    title: 'Feste e ricorrenze',
    label: 'Privati',
    eyebrow: 'Le persone al centro',
    summary: 'Compleanni, lauree e ricorrenze seguiti dalla scelta della location fino al coordinamento della serata.',
    description: 'Partiamo dagli invitati, dal luogo e dal modo in cui vuoi vivere la festa. NIRA riunisce allestimento, musica, fotografia, food e regia in un progetto coerente.',
    image: '/images/celebration.webp',
    imageAlt: 'Ospiti che brindano durante una cena',
    tone: 'violet',
    occasions: ['Compleanni', '18 anni', 'Lauree', 'Anniversari', 'Promesse', 'Baby shower', 'Gender reveal'],
    services: ['Concept e allestimento', 'Musica e spettacolo', 'Foto e video', 'Food e accoglienza'],
    locations: ['Locali e club', 'Ville e dimore', 'Ristoranti e terrazze'],
  },
  {
    slug: 'matrimoni',
    title: 'Matrimoni',
    label: 'Matrimoni',
    eyebrow: 'Una regia condivisa',
    summary: 'Un progetto unico per cerimonia, ricevimento, ospiti, fornitori e tempi della giornata.',
    description: 'NIRA traduce stile, numero di invitati e luogo in un piano operativo. Coordiniamo professionisti e fornitori affinché ogni passaggio abbia tempi chiari e un solo referente.',
    image: '/images/hero-wedding.webp',
    imageAlt: 'Tavolo apparecchiato per un ricevimento di matrimonio',
    tone: 'green',
    occasions: ['Cerimonia', 'Ricevimento', 'Welcome dinner', 'Party', 'Anniversario di nozze'],
    services: ['Event design', 'Allestimenti floreali', 'Musica e intrattenimento', 'Immagine e contenuti'],
    locations: ['Ville e dimore', 'Ristoranti e terrazze', 'Mare e barche'],
  },
  {
    slug: 'nira-baby',
    title: 'NIRA Baby',
    label: 'NIRA Baby',
    eyebrow: 'Feste pensate per i bambini',
    summary: 'Allestimenti, animazione, laboratori e servizi calibrati sull’età dei piccoli e sugli spazi della festa.',
    description: 'Il progetto tiene insieme gioco, tempi, sicurezza e accoglienza degli adulti. Possiamo coordinare l’intera festa oppure affiancare servizi già scelti.',
    image: '/images/baby.webp',
    imageAlt: 'Bambina che gioca con una macchina fotografica colorata',
    tone: 'gold',
    occasions: ['Compleanni', 'Battesimi', 'Comunioni', 'Party a tema'],
    services: ['Balloon art e scenografie', 'Animatori e mascotte', 'Laboratori e giochi', 'Catering kids e foto ricordo'],
    locations: ['Ville e dimore', 'Ristoranti e terrazze', 'Spazi per feste'],
  },
  {
    slug: 'business',
    title: 'Business & location',
    label: 'Business',
    eyebrow: 'Spazi, tempi, pubblico',
    summary: 'Lanci, inaugurazioni e serate aziendali con produzione tecnica, accoglienza e coordinamento.',
    description: 'Costruiamo la scaletta, selezioniamo lo spazio e coordiniamo allestimento, audio, luci, contenuti e personale. Il progetto parte dall’obiettivo dell’evento e dal pubblico atteso.',
    image: '/images/business.webp',
    imageAlt: 'Presentazione su un grande palco davanti al pubblico',
    tone: 'plum',
    occasions: ['Eventi aziendali', 'Lanci', 'Inaugurazioni', 'Serate', 'Intrattenimento'],
    services: ['Regia e produzione', 'Audio, luci e ledwall', 'Accoglienza', 'Grafica e contenuti'],
    locations: ['Locali e club', 'Ville e dimore', 'Ristoranti e terrazze'],
  },
]

export const eventPageDetails: Record<string, EventPageDetail> = {
  privati: {
    intro: 'Il carattere viene prima del tema. Se la festa parla davvero di chi stiamo celebrando, gli ospiti lo capiscono appena entrano.',
    experienceTitle: 'Costruiamo una serata che abbia il tuo ritmo.',
    experienceText: 'Dall’arrivo degli invitati all’ultimo brano, ogni scelta accompagna un momento preciso. NIRA tiene insieme atmosfera, intrattenimento e ospitalità senza trasformare la festa in una scaletta rigida.',
    pillars: [
      { title: 'Identità della festa', text: 'Palette, allestimenti e dettagli raccontano la ricorrenza con un linguaggio personale e riconoscibile.' },
      { title: 'Ritmo e intrattenimento', text: 'Musica, performance e sorprese vengono distribuite nella serata per mantenere energia e naturalezza.' },
      { title: 'Ospitalità', text: 'Food, beverage, accoglienza e disposizione degli spazi vengono pensati intorno agli invitati.' },
      { title: 'Ricordi', text: 'Foto, video e contenuti social documentano la festa senza invadere ciò che sta accadendo.' },
    ],
    gallery: [
      { image: '/images/celebration.webp', alt: 'Ospiti che brindano durante una festa privata', caption: 'Condivisione' },
      { image: '/images/music.webp', alt: 'Spettacolo e musica dal vivo durante un evento', caption: 'Energia' },
      { image: '/images/food.webp', alt: 'Dettagli food preparati per un ricevimento', caption: 'Ospitalità' },
    ],
    decisions: [
      { title: 'Chi festeggiamo?', text: 'Personalità, età e desideri definiscono il tono del progetto.' },
      { title: 'Come vuoi viverla?', text: 'Cena, party, spettacolo o una sequenza che combina momenti diversi.' },
      { title: 'Chi sarà con te?', text: 'Numero e composizione degli ospiti orientano spazio, servizi e ritmo.' },
    ],
    closing: 'La tua festa non deve assomigliare a un format. Deve assomigliare a te.',
  },
  matrimoni: {
    intro: 'Il matrimonio è una giornata composta da molte scene e molte persone. Il nostro lavoro è dare a tutto la stessa voce, proteggendo tempo, emozione e qualità delle scelte.',
    experienceTitle: 'Un solo progetto, dalla cerimonia alla festa.',
    experienceText: 'Traduciamo il vostro modo di essere in un concept realizzabile e coordiniamo location, fornitori e ospiti perché possiate attraversare la giornata senza occuparvi della regia.',
    pillars: [
      { title: 'Concept e styling', text: 'Palette, fiori, mise en place, stationery e scenografia nascono da una direzione creativa comune.' },
      { title: 'Cerimonia e ricevimento', text: 'Disegniamo passaggi, attese e cambi di atmosfera tra i diversi momenti della giornata.' },
      { title: 'Ospiti e accoglienza', text: 'Transfer, seating, food e informazioni vengono organizzati per rendere ogni movimento semplice.' },
      { title: 'Regia del giorno', text: 'Tempi, professionisti e imprevisti vengono coordinati sul posto da un referente NIRA.' },
    ],
    gallery: [
      { image: '/images/hero-wedding.webp', alt: 'Tavolo apparecchiato per un matrimonio', caption: 'Il ricevimento' },
      { image: '/images/banquet.webp', alt: 'Sala preparata per un ricevimento elegante', caption: 'La scena' },
      { image: '/images/details.webp', alt: 'Dettagli coordinati per un evento', caption: 'I dettagli' },
    ],
    decisions: [
      { title: 'Che atmosfera cercate?', text: 'Intima, conviviale, scenografica o essenziale: lo stile nasce dal vostro modo di stare insieme.' },
      { title: 'Come si muove la giornata?', text: 'Cerimonia, aperitivo, cena e party devono avere continuità senza perdere spontaneità.' },
      { title: 'Cosa volete delegare?', text: 'Definiamo fin dall’inizio decisioni, responsabilità e presenza operativa di NIRA.' },
    ],
    closing: 'Voi restate dentro la giornata. Noi restiamo dentro ogni dettaglio.',
  },
  'nira-baby': {
    intro: 'Una festa per bambini deve parlare ai piccoli e funzionare per gli adulti. Età, tempi di attenzione, sicurezza e libertà di gioco guidano ogni scelta.',
    experienceTitle: 'Il gioco diventa un mondo da attraversare.',
    experienceText: 'Costruiamo una festa leggibile, colorata e coinvolgente senza riempire lo spazio di elementi casuali. Tema, attività, merenda e ricordi seguono la stessa storia.',
    pillars: [
      { title: 'Tema e scenografia', text: 'Balloon art, fondali, tavoli e dettagli trasformano lo spazio in un ambiente coerente, non in una semplice decorazione.' },
      { title: 'Attività per età', text: 'Animatori, laboratori e giochi vengono scelti in base all’età, al gruppo e alla durata della festa.' },
      { title: 'Accoglienza delle famiglie', text: 'Aree dedicate, catering kids e servizi per gli adulti rendono l’esperienza piacevole per tutti.' },
      { title: 'Tempi e sicurezza', text: 'Flussi, pause, spazi e presenza dei professionisti vengono progettati intorno ai bambini.' },
    ],
    gallery: [
      { image: '/images/baby.webp', alt: 'Bambina che gioca durante una festa', caption: 'La meraviglia' },
      { image: '/images/details.webp', alt: 'Dettagli grafici e decorativi coordinati', caption: 'Il tema' },
      { image: '/images/food.webp', alt: 'Preparazioni food per un evento', caption: 'La merenda' },
    ],
    decisions: [
      { title: 'Quanti anni compie?', text: 'Età e autonomia cambiano linguaggi, attività e durata ideale.' },
      { title: 'Cosa lo appassiona?', text: 'Partiamo da interessi reali per creare un tema personale e non intercambiabile.' },
      { title: 'Come sarà composto il gruppo?', text: 'Numero dei bambini, famiglie presenti e spazio disponibile definiscono il formato.' },
    ],
    closing: 'Un ricordo bellissimo per loro. Una festa semplice da vivere per voi.',
  },
  business: {
    intro: 'Un evento business deve produrre un effetto preciso: presentare, connettere, celebrare o posizionare. Il progetto nasce dall’obiettivo e prende forma nello spazio.',
    experienceTitle: 'Il brand diventa un’esperienza dal vivo.',
    experienceText: 'NIRA traduce messaggio, pubblico e risultato atteso in una regia concreta. Contenuti, tecnica e accoglienza lavorano insieme perché ogni ospite capisca dove si trova e perché.',
    pillars: [
      { title: 'Concept di marca', text: 'Format, linguaggio visivo e touchpoint rendono riconoscibile il brand in ogni momento dell’evento.' },
      { title: 'Produzione tecnica', text: 'Audio, luci, ledwall, palco e contenuti vengono dimensionati sulla location e sulla scaletta.' },
      { title: 'Pubblico e accoglienza', text: 'Inviti, accrediti, hostess, food e flussi sono progettati intorno agli ospiti attesi.' },
      { title: 'Regia e contenuti', text: 'Speaker, contributi, performance e cambi scena seguono un piano operativo condiviso.' },
    ],
    gallery: [
      { image: '/images/business.webp', alt: 'Presentazione aziendale su un grande palco', caption: 'Il messaggio' },
      { image: '/images/club.webp', alt: 'Pubblico davanti a un palco illuminato', caption: 'La produzione' },
      { image: '/images/details.webp', alt: 'Materiali grafici coordinati per un evento', caption: 'Il brand' },
    ],
    decisions: [
      { title: 'Qual è il risultato?', text: 'Awareness, relazione, lancio o celebrazione richiedono format differenti.' },
      { title: 'Chi deve essere coinvolto?', text: 'Pubblico, speaker, stakeholder e team interno definiscono contenuti e flussi.' },
      { title: 'Cosa deve restare?', text: 'Progettiamo esperienza e contenuti pensando anche a ciò che vivrà dopo l’evento.' },
    ],
    closing: 'Un evento efficace non occupa soltanto uno spazio. Lascia un messaggio chiaro.',
  },
}

export const services: ServiceCategory[] = [
  {
    slug: 'event-design',
    title: 'Event design e allestimenti',
    summary: 'Il concept prende forma nello spazio attraverso fiori, tavoli, scenografie e dettagli coordinati.',
    items: ['Concept creativo', 'Balloon art', 'Allestimenti floreali', 'Sweet table', 'Scenografie', 'Mise en place'],
    professionals: ['Event designer', 'Flower designer', 'Balloon artist', 'Scenografo', 'Allestitore'],
    image: '/images/hero-wedding.webp',
  },
  {
    slug: 'musica-spettacolo',
    title: 'Musica e spettacolo',
    summary: 'Scegliamo ritmo e formato in base agli ospiti, alla location e ai momenti della serata.',
    items: ['DJ set', 'Live music', 'Animazione', 'Performance', 'Show', 'Intrattenimento'],
    professionals: ['DJ', 'Vocalist', 'Musicisti', 'Cantanti', 'Performer', 'Ballerini'],
    image: '/images/music.webp',
  },
  {
    slug: 'immagine-contenuti',
    title: 'Immagine e contenuti',
    summary: 'Fotografia, video e contenuti social raccontano l’evento senza interromperne il ritmo.',
    items: ['Servizio fotografico', 'Video evento', 'Reel social', 'Photo booth', 'Immagine personale'],
    professionals: ['Fotografo', 'Videomaker', 'Content creator', 'Make-up artist', 'Hair stylist'],
    image: '/images/celebration.webp',
  },
  {
    slug: 'tecnica-effetti',
    title: 'Tecnica ed effetti',
    summary: 'Audio, luce e video sono progettati sullo spazio, sulla scaletta e sul numero degli ospiti.',
    items: ['Impianto audio', 'Light design', 'Ledwall', 'Proiezioni', 'Fontane fredde', 'Fumo', 'Effetti speciali'],
    professionals: ['Tecnico audio', 'Tecnico luci', 'Tecnico video', 'Light designer', 'Operatore effetti'],
    image: '/images/business.webp',
  },
  {
    slug: 'food-accoglienza',
    title: 'Food e accoglienza',
    summary: 'Menu, beverage e personale seguono orari, spazi e stile del ricevimento.',
    items: ['Catering', 'Beverage', 'Open bar', 'Torte', 'Confettate', 'Servizio ai tavoli', 'Transfer'],
    professionals: ['Chef', 'Bartender', 'Camerieri', 'Hostess', 'Steward', 'Security', 'Autista'],
    image: '/images/food.webp',
  },
  {
    slug: 'grafica-dettagli',
    title: 'Grafica e dettagli',
    summary: 'Inviti, menu e segnaletica danno agli ospiti indicazioni chiare e un linguaggio visivo comune.',
    items: ['Inviti', 'Menu', 'Segnaposto', 'Tableau', 'Welcome sign', 'Party kit', 'Coordinati personalizzati'],
    professionals: ['Graphic designer', 'Tipografo', 'Calligrafo', 'Artigiani specializzati'],
    image: '/images/details.webp',
  },
]

export const locations: LocationCategory[] = [
  {
    slug: 'locali-club',
    title: 'Locali e club',
    summary: 'Spazi adatti a feste dinamiche, musica, performance e serate business.',
    description: 'Valutiamo capienza, impianti, accessi, orari e configurazione della sala prima di proporre lo spazio.',
    image: '/images/club.webp',
    imageAlt: 'Pubblico davanti a un palco illuminato',
    suitableFor: ['18 anni', 'Lauree', 'Party', 'Lanci', 'Serate aziendali'],
    notes: ['Configurazione audio e luci', 'Aree per accoglienza e guardaroba', 'Accessi e orari da verificare'],
  },
  {
    slug: 'ville-dimore',
    title: 'Ville e dimore',
    summary: 'Interni ed esterni per ricevimenti, matrimoni e feste con più momenti.',
    description: 'La scelta considera numero di ospiti, percorsi tra gli spazi, piano meteo e servizi già presenti.',
    image: '/images/villa.webp',
    imageAlt: 'Interno luminoso di una villa contemporanea',
    suitableFor: ['Matrimoni', 'Anniversari', 'Feste private', 'NIRA Baby'],
    notes: ['Spazi interni ed esterni', 'Piano alternativo in caso di pioggia', 'Catering e parcheggio da verificare'],
  },
  {
    slug: 'ristoranti-terrazze',
    title: 'Ristoranti e terrazze',
    summary: 'Ospitalità, cucina e panorama per eventi raccolti o ricevimenti completi.',
    description: 'Verifichiamo menu, disposizione dei tavoli, spazi per musica e possibilità di personalizzare l’allestimento.',
    image: '/images/terrace.webp',
    imageAlt: 'Sala ristorante apparecchiata con luce calda',
    suitableFor: ['Compleanni', 'Lauree', 'Promesse', 'Business dinner'],
    notes: ['Menu e beverage', 'Disposizione tavoli', 'Spazi per musica e allestimento'],
  },
  {
    slug: 'mare-barche',
    title: 'Mare e barche',
    summary: 'Eventi in navigazione o sul mare, con partenze possibili da Pozzuoli o Nisida.',
    description: 'Numero degli ospiti, durata, meteo, transfer e servizi di bordo definiscono il formato dell’evento.',
    image: '/images/boat.webp',
    imageAlt: 'Barca a motore in navigazione sul mare',
    suitableFor: ['Compleanni', 'Proposte', 'Party privati', 'Eventi raccolti'],
    notes: ['Partenze da Pozzuoli o Nisida', 'Piano meteo', 'Capienza e servizi di bordo da verificare'],
  },
]

export const niraPaths: NiraPath[] = [
  {
    name: 'NIRA Incontro',
    title: 'Capire da dove partire',
    subtitle: 'Consulenza e orientamento',
    description: 'Mettiamo a fuoco occasione, priorità, budget e primi passi del progetto.',
    bestFor: 'Hai idee sparse e vuoi ordinarle prima di scegliere servizi e location.',
  },
  {
    name: 'NIRA Mood',
    title: 'Coordinare ciò che hai già scelto',
    subtitle: 'Progetto essenziale',
    description: 'Definiamo lo stile e coordiniamo una selezione mirata di servizi e professionisti.',
    bestFor: 'Hai già location o fornitori e ti serve una direzione comune.',
  },
  {
    name: 'NIRA Experience',
    title: 'Affidare a NIRA la regia completa',
    subtitle: 'Progettazione e produzione',
    description: 'Seguiamo concept, allestimento, intrattenimento, fornitori, tempi e coordinamento sul posto.',
    bestFor: 'Vuoi un referente unico dalla progettazione al giorno dell’evento.',
  },
  {
    name: 'NIRA Signature',
    title: 'Costruire un concept personale',
    subtitle: 'Direzione creativa dedicata',
    description: 'Sviluppiamo un linguaggio visivo su misura e coordiniamo ogni scelta attorno al concept.',
    bestFor: 'Cerchi un progetto con scenografie, contenuti e dettagli disegnati per l’occasione.',
  },
]

export const processSteps = [
  { index: '01', title: 'Ascoltiamo', text: 'Occasione, ospiti, stile, luogo e budget definiscono il punto di partenza.' },
  { index: '02', title: 'Progettiamo', text: 'Costruiamo concept, servizi, tempi e proposta economica.' },
  { index: '03', title: 'Coordiniamo', text: 'Un referente segue location, professionisti, fornitori e scaletta.' },
  { index: '04', title: 'Realizziamo', text: 'La regia sul posto tiene insieme persone, tempi e imprevisti.' },
]

export const founders = [
  {
    name: 'Antonello Di Fraia',
    role: 'Relazioni e visione',
    text: 'Lavora da oltre vent’anni nel mondo degli eventi e delle location. Ascolta il cliente, interpreta le esigenze e cura consulenza, accordi e partnership.',
  },
  {
    name: 'Federico Caldora',
    role: 'Creatività e produzione',
    text: 'Da oltre dieci anni progetta matrimoni ed eventi. Trasforma le idee in un concept concreto e coordina stile, spazi, fornitori e produzione.',
  },
]

export const imageCredits = [
  ['hero-wedding.webp', 'https://unsplash.com/photos/1519225421980-715cb0215aed'],
  ['banquet.webp', 'https://unsplash.com/photos/1519167758481-83f550bb49b3'],
  ['celebration.webp', 'https://unsplash.com/photos/1527529482837-4698179dc6ce'],
  ['music.webp', 'https://unsplash.com/photos/1492684223066-81342ee5ff30'],
  ['baby.webp', 'https://unsplash.com/photos/1516627145497-ae6968895b74'],
  ['business.webp', 'https://unsplash.com/photos/1505373877841-8d25f7d46678'],
  ['villa.webp', 'https://unsplash.com/photos/1600607687939-ce8a6c25118c'],
  ['terrace.webp', 'https://unsplash.com/photos/1550966871-3ed3cdb5ed0c'],
  ['boat.webp', 'https://unsplash.com/photos/1569263979104-865ab7cd8d13'],
  ['club.webp', 'https://unsplash.com/photos/1514525253161-7a46d19cd819'],
  ['food.webp', 'https://unsplash.com/photos/1555244162-803834f70033'],
  ['details.webp', 'https://unsplash.com/photos/1507504031003-b417219a0fde'],
] as const
