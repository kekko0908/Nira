import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { EventIcon } from '../components/BrandIcon'
import { ClosingCta, PageMeta, Reveal, SectionIntro } from '../components/Shared'
import { eventCategories } from '../data/content'

export default function EventsPage() {
  return (
    <>
      <PageMeta title="Eventi" description="Feste private, matrimoni, NIRA Baby ed eventi business progettati da NIRA in Campania." />

      <header className="events-page-hero">
        <div className="shell events-page-hero-grid">
          <div className="events-page-copy"><p className="eyebrow">Eventi</p><h1>Il progetto cambia con persone, spazio e occasione.</h1><p>Privati, matrimoni, NIRA Baby e business partono da esigenze diverse. Per ogni categoria definiamo servizi, professionisti, location e tempi.</p></div>
          <div className="events-page-mosaic">
            {eventCategories.map((category) => <Link to={`/eventi/${category.slug}`} key={category.slug}><img src={category.image} alt={category.imageAlt} fetchPriority="high" /><span><EventIcon slug={category.slug} />{category.label}</span></Link>)}
          </div>
        </div>
      </header>

      <section className="section-pad event-hub-section">
        <div className="shell">
          <SectionIntro eyebrow="Scegli l’occasione" title="Apri il percorso più vicino al tuo evento." text="Troverai occasioni, servizi e tipologie di spazio da usare come base per il primo confronto." />
          <div className="event-hub-grid event-hub-grid-v2">
            {eventCategories.map((category, index) => (
              <Reveal key={category.slug} className="event-hub-card" delay={index * 0.06}>
                <Link to={`/eventi/${category.slug}`}>
                  <div className="event-hub-image"><img src={category.image} alt={category.imageAlt} loading="lazy" /><span>Immagine rappresentativa</span></div>
                  <div className="event-hub-copy">
                    <span className="event-hub-icon"><EventIcon slug={category.slug} /></span>
                    <p>{category.eyebrow}</p>
                    <h2>{category.title}</h2>
                    <p>{category.summary}</p>
                    <ul>{category.occasions.slice(0, 5).map((occasion) => <li key={occasion}>{occasion}</li>)}</ul>
                    <span className="card-action">Apri il percorso <ArrowUpRight size={18} aria-hidden="true" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ClosingCta title="Partiamo dall’occasione, dagli ospiti e dal luogo." text="Con queste informazioni possiamo definire il perimetro del progetto e i servizi da coinvolgere." />
    </>
  )
}
