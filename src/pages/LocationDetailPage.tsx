import { ArrowLeft, ArrowUpRight, Check, Eye, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { LocationIcon } from '../components/BrandIcon'
import { ClosingCta, PageMeta, Reveal } from '../components/Shared'
import { locations } from '../data/content'
import NotFoundPage from './NotFoundPage'

const gallery: Record<string, [string, string]> = {
  'locali-club': ['/images/music.webp', '/images/business.webp'],
  'ville-dimore': ['/images/hero-wedding.webp', '/images/banquet.webp'],
  'ristoranti-terrazze': ['/images/food.webp', '/images/celebration.webp'],
  'mare-barche': ['/images/boat.webp', '/images/terrace.webp'],
}

export default function LocationDetailPage() {
  const { slug } = useParams()
  const location = locations.find((item) => item.slug === slug)
  if (!location) return <NotFoundPage />
  const scenes = gallery[location.slug]

  return (
    <>
      <PageMeta title={location.title} description={location.summary} />
      <header className={`location-detail-hero location-detail-${location.slug}`}>
        <img className="location-detail-backdrop" src={location.image} alt="" aria-hidden="true" />
        <div className="location-detail-overlay" />
        <div className="shell location-detail-heading">
          <Link className="back-link back-link-light" to="/location"><ArrowLeft size={16} aria-hidden="true" /> Tutte le location</Link>
          <span className="location-detail-icon"><LocationIcon slug={location.slug} /></span>
          <p className="eyebrow eyebrow-light">Tipologia di location</p>
          <h1>{location.title}</h1>
          <p>{location.summary}</p>
        </div>
        <span className="representative-label">Immagine rappresentativa</span>
      </header>

      <section className="section-pad location-fit-section">
        <div className="shell location-fit-grid">
          <Reveal className="location-fit-intro"><p className="eyebrow">Perché sceglierla</p><h2>{location.description}</h2><p>Disponibilità e caratteristiche vengono confermate durante la consulenza. La demo non associa questa categoria a strutture specifiche.</p></Reveal>
          <Reveal className="location-fit-panel" delay={0.1}>
            <Eye aria-hidden="true" /><h3>Eventi compatibili</h3><div className="chip-list">{location.suitableFor.map((item) => <span key={item}>{item}</span>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="location-scenarios section-pad">
        <div className="shell">
          <div className="location-scenarios-head"><div><p className="eyebrow">Scenari possibili</p><h2>La stessa tipologia può cambiare con layout, luce e programma.</h2></div><p>Immagini di riferimento per discutere la direzione. Non mostrano lavori NIRA né spazi disponibili.</p></div>
          <div className="location-scenario-grid">{scenes.map((image, index) => <figure key={image}><img src={image} alt="Scenario rappresentativo per la tipologia di location" loading="lazy" /><figcaption>{index === 0 ? 'Atmosfera' : 'Configurazione'} · immagine rappresentativa</figcaption></figure>)}</div>
        </div>
      </section>

      <section className="section-pad location-confirm-section">
        <div className="shell location-confirm-grid">
          <div><ShieldCheck aria-hidden="true" /><p className="eyebrow">Prima di proportela</p><h2>Confermiamo questi punti con la struttura.</h2></div>
          <ul>{location.notes.map((item) => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul>
          <Link className="button" to="/contatti">Parlaci del tuo evento <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
      <ClosingCta title={`Valutiamo insieme ${location.title.toLowerCase()}.`} />
    </>
  )
}
