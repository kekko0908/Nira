import { ArrowDown, ArrowUpRight, CloudRain, DoorOpen, Music2, UsersRound, UtensilsCrossed, Waypoints } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { LocationIcon } from '../components/BrandIcon'
import { ClosingCta, PageMeta, Reveal, SectionIntro } from '../components/Shared'
import { locations } from '../data/content'

const checks = [
  { icon: UsersRound, title: 'Capienza e flussi', text: 'Ospiti, tavoli, passaggi e momenti in piedi devono convivere senza attriti.' },
  { icon: DoorOpen, title: 'Accessi e montaggio', text: 'Studiamo ingressi, scarico, tempi di allestimento e uscita dei fornitori.' },
  { icon: CloudRain, title: 'Piano meteo', text: 'Lo scenario alternativo viene progettato prima, non improvvisato il giorno dell’evento.' },
  { icon: Music2, title: 'Audio e orari', text: 'Impianti, limiti acustici e durata della serata entrano nel progetto fin dall’inizio.' },
  { icon: UtensilsCrossed, title: 'Food e servizio', text: 'Cucina, catering e disposizione operativa devono sostenere il ritmo dell’esperienza.' },
  { icon: Waypoints, title: 'Arrivi e transfer', text: 'Parcheggio, navette e accessibilità rendono semplice ciò che l’ospite non deve notare.' },
]

export default function LocationsPage() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <PageMeta title="Location" description="NIRA seleziona location per eventi tra Napoli, Campi Flegrei e Campania." />

      <header className="location-cinema-hero">
        <motion.img
          src="/images/villa.webp"
          alt="Interno luminoso di una villa contemporanea"
          initial={reducedMotion ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: reducedMotion ? 0 : 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="location-cinema-shade" />
        <div className="shell location-cinema-copy">
          <p className="eyebrow eyebrow-light">La scena del tuo evento</p>
          <h1>Un luogo giusto si sente prima ancora di riempirlo.</h1>
          <p>Atmosfera e bellezza contano. Ma è il modo in cui lo spazio accoglie persone, tempi e servizi a renderlo davvero adatto.</p>
          <a href="#spazi" className="location-scroll-link">Esplora gli spazi <ArrowDown size={18} aria-hidden="true" /></a>
        </div>
      </header>

      <section className="section location-editorial" id="spazi">
        <div className="container">
          <SectionIntro
            eyebrow="Quattro atmosfere"
            title="Non scegliamo uno sfondo. Scegliamo una possibilità."
            text="Ogni tipologia cambia il ritmo della giornata, il modo in cui gli ospiti si muovono e la libertà del progetto."
          />
          <div className="location-editorial-grid">
            {locations.map((location, index) => (
              <Reveal className={`location-editorial-card location-editorial-card-${index + 1}`} key={location.slug}>
                <Link to={`/location/${location.slug}`}>
                  <figure><img src={location.image} alt={location.imageAlt} loading="lazy" /></figure>
                  <div className="location-editorial-copy">
                    <LocationIcon slug={location.slug} />
                    <div><h2>{location.title}</h2><p>{location.summary}</p></div>
                    <ArrowUpRight aria-hidden="true" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section location-criteria-immersive">
        <div className="container criteria-layout">
          <div className="criteria-sticky">
            <p className="section-kicker">Prima di proporti un luogo</p>
            <h2>La bellezza deve reggere la realtà.</h2>
            <p>Incrociamo ogni desiderio con sei verifiche concrete. È così che uno spazio suggestivo diventa una scelta solida.</p>
          </div>
          <div className="criteria-list">
            {checks.map(({ icon: Icon, title, text }) => (
              <motion.article
                key={title}
                initial={reducedMotion ? false : { opacity: 0.3, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.7 }}
              >
                <Icon aria-hidden="true" />
                <div><h3>{title}</h3><p>{text}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title="Troviamo uno spazio capace di sostenere la tua idea." text="Indicaci zona, invitati e atmosfera. NIRA seleziona soltanto le possibilità realmente compatibili." />
    </>
  )
}
