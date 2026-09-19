interface LocationStory {
  accent: string
  promise: string
  intro: string
  acts: { title: string; text: string }[]
  gallery: { image: string; alt: string; caption: string }[]
}
export const locationStories: Record<string, LocationStory> = {
  'locali-club': {
    accent: 'Volume, luce, movimento.',
    promise: 'Lo spazio segue il beat, non il contrario.',
    intro: 'Qui il progetto si misura in energia. Disegniamo ingressi, palco, tavoli e pista perché ogni cambio di ritmo abbia il suo posto e la serata non perda mai tensione.',
    acts: [
      { title: 'Ingresso', text: 'Accredito, guardaroba e primo impatto preparano subito l’atmosfera.' },
      { title: 'Show', text: 'Palco, luci e performance diventano il centro visivo della sala.' },
      { title: 'After', text: 'La pista prende spazio senza spezzare food, conversazioni e servizio.' },
    ],
    gallery: [
      { image: '/images/music.webp', alt: 'Performance musicale con luci scenografiche', caption: 'Live performance' },
      { image: '/images/business.webp', alt: 'Palco per una presentazione aziendale', caption: 'Brand night' },
      { image: '/images/celebration.webp', alt: 'Ospiti durante una serata privata', caption: 'Private party' },
    ],
  },
  'ville-dimore': {
    accent: 'Un luogo, molte scene.',
    promise: 'Ogni ambiente apre un nuovo momento.',
    intro: 'Giardino, corte, sale interne e terrazze permettono di comporre una giornata in più atti. Progettiamo i passaggi tra gli spazi perché gli ospiti scoprano la villa un momento alla volta.',
    acts: [
      { title: 'Benvenuto', text: 'Il giardino accoglie gli ospiti e dà subito respiro all’esperienza.' },
      { title: 'Tavola', text: 'Mise en place, luce e servizio costruiscono il cuore del ricevimento.' },
      { title: 'Notte', text: 'Una sala o una corte cambiano volto per musica, torta e festa.' },
    ],
    gallery: [
      { image: '/images/hero-wedding.webp', alt: 'Ricevimento elegante all’aperto', caption: 'Cena in giardino' },
      { image: '/images/banquet.webp', alt: 'Sala preparata per un ricevimento', caption: 'Sala delle feste' },
      { image: '/images/details.webp', alt: 'Dettagli coordinati per un evento', caption: 'Dettagli su misura' },
    ],
  },
  'ristoranti-terrazze': {
    accent: 'La tavola incontra il panorama.',
    promise: 'L’ospitalità è già parte della scena.',
    intro: 'Quando cucina e vista lavorano insieme, basta dare ordine ai dettagli. Costruiamo il progetto intorno al servizio, alla luce naturale e al modo in cui gli ospiti vivranno la tavola.',
    acts: [
      { title: 'Aperitivo', text: 'Un arrivo aperto e informale lascia entrare il paesaggio nella festa.' },
      { title: 'Cena', text: 'Tavoli, menu e tempi di servizio mantengono la serata fluida.' },
      { title: 'Brindisi', text: 'Luci più calde e musica trasformano la terrazza dopo cena.' },
    ],
    gallery: [
      { image: '/images/terrace.webp', alt: 'Terrazza apparecchiata per un evento', caption: 'Sunset dinner' },
      { image: '/images/food.webp', alt: 'Preparazioni gastronomiche per un ricevimento', caption: 'Food experience' },
      { image: '/images/celebration.webp', alt: 'Ospiti che brindano a tavola', caption: 'Cena privata' },
    ],
  },
  'mare-barche': {
    accent: 'Il viaggio è già l’evento.',
    promise: 'La costa cambia, la regia resta precisa.',
    intro: 'A bordo ogni metro conta e ogni momento dipende dal mare. Disegniamo una rotta realistica per accoglienza, musica, food e soste, con un piano chiaro anche quando cambia il vento.',
    acts: [
      { title: 'Partenza', text: 'Imbarco, welcome drink e briefing fanno iniziare bene il viaggio.' },
      { title: 'Rotta', text: 'Musica, soste e servizio seguono luce, mare e tempi di navigazione.' },
      { title: 'Tramonto', text: 'Il momento più atteso ha già posizione, luce e brindisi pronti.' },
    ],
    gallery: [
      { image: '/images/boat.webp', alt: 'Barca in navigazione sul mare', caption: 'Party in navigazione' },
      { image: '/images/terrace.webp', alt: 'Cena con vista sul mare', caption: 'Cena al tramonto' },
      { image: '/images/food.webp', alt: 'Servizio food curato per un evento', caption: 'Servizio a bordo' },
    ],
  },
}


