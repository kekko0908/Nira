import { ArrowUpRight, CloudRain, DoorOpen, Music2, UsersRound, UtensilsCrossed, Waypoints } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LocationIcon } from '../components/BrandIcon'
import { ClosingCta, PageMeta, Reveal, SectionIntro } from '../components/Shared'
import { locations } from '../data/content'

const checks = [
  { icon: UsersRound, title: 'Capienza e flussi', text: 'Ospiti, tavoli, aree di passaggio, guardaroba e momenti in piedi.' },
  { icon: DoorOpen, title: 'Accessi e montaggio', text: 'Ingresso fornitori, tempi di allestimento, scarico e chiusura.' },
  { icon: CloudRain, title: 'Piano meteo', text: 'Spazi interni, coperture e tempi per decidere una configurazione alternativa.' },
  { icon: Music2, title: 'Audio e orari', text: 'Impianti presenti, limiti acustici, musica dal vivo e termine della serata.' },
  { icon: UtensilsCrossed, title: 'Food e servizio', text: 'Cucina, catering, beverage, personale e disposizione operativa.' },
  { icon: Waypoints, title: 'Arrivi e transfer', text: 'Parcheggio, navette, partenze, accessibilità e rientro degli ospiti.' },
]

export default function LocationsPage() {
  return (
    <>
      <PageMeta title="Location" description="Categorie di location selezionate da NIRA tra Napoli, Campi Flegrei e Campania." />

      <header className="locations-page-hero">
        <div className="shell locations-page-copy">
          <p className="eyebrow eyebrow-light">Location in Campania</p>
          <h1>Lo spazio deve funzionare prima di sorprendere.</h1>
          <p>Partiamo da ospiti, programma e logistica. Poi valutiamo atmosfera, servizi e margini di personalizzazione.</p>
        </div>
        <div className="location-hero-film" aria-label="Tipologie di location rappresentative">
          {locations.map((location) => <figure key={location.slug}><img src={location.image} alt={location.imageAlt} fetchPriority="high" /><figcaption>{location.title}</figcaption></figure>)}
        </div>
      </header>

      <section className="section-pad location-catalogue-v2">
        <div className="shell">
          <div className="demo-note"><span>Contenuto demo</span><p>Le fotografie mostrano categorie di spazio. Nomi, sale, capienze e lavori realizzati verranno inseriti solo con materiali verificati.</p></div>
          <div className="location-story-list">
            {locations.map((location, index) => (
              <Reveal className={`location-story location-story-${location.slug}`} key={location.slug}>
                <figure><img src={location.image} alt={location.imageAlt} loading="lazy" /><figcaption>Immagine rappresentativa</figcaption></figure>
                <div className="location-story-copy">
                  <span className="location-story-icon"><LocationIcon slug={location.slug} /></span>
                  <p className="eyebrow">Tipologia</p>
                  <h2>{location.title}</h2>
                  <p>{location.description}</p>
                  <div className="location-story-uses"><strong>Funziona per</strong><span>{location.suitableFor.slice(0, 4).join(' · ')}</span></div>
                  <Link className="text-link" to={`/location/${location.slug}`}>Vedi scenari e verifiche <ArrowUpRight size={17} aria-hidden="true" /></Link>
                </div>
                <span className="location-story-word" aria-hidden="true">{index % 2 === 0 ? 'spazio' : 'ritmo'}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad location-criteria-v2">
        <div className="shell selection-layout">
          <SectionIntro eyebrow="Prima della proposta" title="Sei verifiche che evitano sorprese operative." text="Questi dati vengono incrociati con formato dell’evento, budget e servizi richiesti." />
          <div className="selection-board">
            {checks.map(({ icon: Icon, title, text }, index) => <Reveal key={title} className={`selection-item selection-item-${index + 1}`}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}
          </div>
        </div>
      </section>
      <ClosingCta title="Cerchiamo lo spazio adatto al tuo evento." text="Indicaci zona, invitati e atmosfera. NIRA restringe la ricerca alle tipologie compatibili." />
    </>
  )
}
