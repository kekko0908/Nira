import { useState } from 'react'
import { CloudRain, DoorOpen, MapPin, Music2, UsersRound, UtensilsCrossed } from 'lucide-react'


const inspections = [
  { icon: UsersRound, title: 'Spazio per tutti.', label: 'Ospiti e capienza', question: 'Ci stiamo bene, davvero?', text: 'Non basta contare i posti. Studiamo tavoli, pista e percorsi per lasciare agli ospiti libertà di movimento, in ogni momento.', detail: 'Capienza · Disposizione · Flussi', image: '/images/banquet.webp', alt: 'Sala allestita con tavoli e percorsi per gli ospiti' },
  { icon: CloudRain, title: 'Un piano, anche per la pioggia.', label: 'Meteo e alternative', question: 'E se cambia il tempo?', text: 'Valutiamo uno spazio coperto e il passaggio tra i due scenari. Il piano alternativo deve conservare atmosfera, comfort e qualità dell’evento.', detail: 'Spazi coperti · Tempi di cambio · Comfort', image: '/images/villa.webp', alt: 'Spazi interni di una villa' },
  { icon: MapPin, title: 'Arrivare deve essere semplice.', label: 'Arrivi e accessibilità', question: 'Come raggiungiamo il luogo?', text: 'Consideriamo accessibilità, parcheggi e possibilità di transfer. L’esperienza comincia prima che gli ospiti attraversino la porta.', detail: 'Accessibilità · Parcheggi · Transfer', image: '/images/boat.webp', alt: 'Imbarcazione sul mare, una delle tipologie di location' },
  { icon: Music2, title: 'Il volume giusto, fino alla fine.', label: 'Musica e orari', question: 'Che ritmo può avere la serata?', text: 'Verifichiamo impianti disponibili, limiti acustici e orari. La proposta musicale nasce da ciò che il luogo può realmente sostenere.', detail: 'Impianti · Limiti acustici · Orari', image: '/images/music.webp', alt: 'Luci e musica durante uno spettacolo' },
  { icon: DoorOpen, title: 'La scena si prepara prima.', label: 'Accessi e montaggio', question: 'Come diamo forma all’allestimento?', text: 'Ingressi tecnici, scarico e finestre di montaggio entrano nel programma. Ogni professionista deve avere lo spazio e il tempo per lavorare bene.', detail: 'Accessi tecnici · Scarico · Montaggio', image: '/images/business.webp', alt: 'Palco attrezzato per una presentazione' },
  { icon: UtensilsCrossed, title: 'L’ospitalità ha i suoi tempi.', label: 'Cucina e servizio', question: 'Come si muove il servizio?', text: 'Cucina, catering e spazi operativi devono seguire il ritmo della giornata. Valutiamo i passaggi perché la cura arrivi anche a tavola.', detail: 'Cucina · Catering · Tempi di servizio', image: '/images/food.webp', alt: 'Preparazioni gastronomiche per un ricevimento' },
]

export default function LocationInspection() {
  const [active,setActive] = useState(0)
  const check=inspections[active]
  const Icon=check.icon
  return <section className="location-inspection"><div className="shell"><div className="inspection-heading"><div><p>Il sopralluogo NIRA</p><h2>Prima di innamorarsi.<br /><em>Guardiamo meglio.</em></h2></div></div><div className="inspection-board"><nav aria-label="Le verifiche del sopralluogo">{inspections.map((item,index)=><button key={item.label} type="button" aria-pressed={active===index} onClick={()=>setActive(index)}><span>{item.label}</span><item.icon size={20} /></button>)}</nav><div className="inspection-detail" aria-live="polite"><div className="inspection-photo"><img key={check.image} src={check.image} alt={check.alt} /></div><div className="inspection-note" key={check.label}><Icon size={26} /><p>{check.question}</p><h3>{check.title}</h3><p>{check.text}</p><div>{check.detail}</div></div></div></div><div className="inspection-bottom"><span>Immagini rappresentative · Ogni struttura viene valutata sul progetto.</span></div></div></section>
}
