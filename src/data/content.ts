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
