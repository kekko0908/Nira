import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ClosingCta, PageMeta, Reveal, SectionIntro } from '../components/Shared'
import { eventCategories, processSteps } from '../data/content'
import NotFoundPage from './NotFoundPage'

export default function EventDetailPage() {
  const { slug } = useParams()
  const category = eventCategories.find((item) => item.slug === slug)
  if (!category) return <NotFoundPage />

  return (
    <>
      <PageMeta title={category.title} description={category.summary} />
      <section className={`detail-hero detail-hero-${category.tone}`}>
        <div className="shell detail-hero-grid">
          <div className="detail-hero-copy">
            <Link className="back-link" to="/eventi"><ArrowLeft size={16} /> Tutti gli eventi</Link>
            <p className="eyebrow">{category.eyebrow}</p>
            <h1>{category.title}</h1>
            <p>{category.summary}</p>
            <Link className="button" to="/contatti">Parliamone su WhatsApp <ArrowUpRight size={18} /></Link>
          </div>
          <figure>
            <img src={category.image} alt={category.imageAlt} fetchPriority="high" />
            <figcaption>Immagine rappresentativa</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-pad detail-intro">
        <div className="shell detail-intro-grid">
          <Reveal><p className="eyebrow">Il progetto</p><h2>{category.description}</h2></Reveal>
          <Reveal className="occasion-panel" delay={0.1}>
            <h3>Occasioni</h3>
            <div className="chip-list">{category.occasions.map((item) => <span key={item}>{item}</span>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad included-section">
        <div className="shell two-list-grid">
          <Reveal>
            <p className="eyebrow">Servizi compatibili</p>
            <h2>Cosa possiamo coordinare</h2>
            <ul className="check-list">{category.services.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul>
            <Link className="text-link" to="/servizi">Apri tutti i servizi <ArrowUpRight size={17} /></Link>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Spazi</p>
            <h2>Location da valutare</h2>
            <ul className="check-list">{category.locations.map((item) => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul>
            <Link className="text-link" to="/location">Apri le categorie <ArrowUpRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad compact-process">
        <div className="shell">
          <SectionIntro eyebrow="Come lavoriamo" title="Dal primo incontro alla regia sul posto." />
          <div className="compact-process-grid">{processSteps.map((step) => <div key={step.index}><i aria-hidden="true" /><h3>{step.title}</h3><p>{step.text}</p></div>)}</div>
        </div>
      </section>
      <ClosingCta title={`Parliamo del tuo progetto ${category.label.toLowerCase()}.`} />
    </>
  )
}
