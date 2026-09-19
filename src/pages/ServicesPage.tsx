import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageMeta, Reveal } from '../components/Shared'
import { services } from '../data/content'
import { AgencyCta } from '../components/Agency'
import '../agency.css'

export default function ServicesPage() {
  const [open, setOpen] = useState<string | null>(() => window.location.hash.slice(1) || services[0].slug)
  return <div className="agency agency-services">
    <PageMeta title="Servizi" description="Design, musica, immagine, tecnica, food e dettagli: sei aree professionali, una regia NIRA." />
    <header className="agency-service-hero"><div className="shell">
      <Reveal><h1>Tu immagina.<br /><em>Noi orchestriamo.</em></h1></Reveal>
      <div className="agency-service-intro"><span className="agency-star" aria-hidden="true">✳</span><p>Creatività, persone e produzione.<br />Tutto quello che serve al tuo evento,<br />tenuto insieme da un’unica visione.</p><a className="agency-round-link" href="#aree">Dentro il progetto <span><ArrowDown size={20} /></span></a></div>
      <figure className="agency-service-photo"><img src="/images/banquet.webp" alt="Una sala allestita con tavoli e luci per un ricevimento" fetchPriority="high" /><figcaption>La cura si vede. La regia si sente.</figcaption></figure>
    </div></header>
    <section className="agency-services-section shell" id="aree">
      <div className="agency-section-heading"><h2>Ogni dettaglio.<br /><em>Una direzione.</em></h2><p>Esplora le sei aree. Componiamo servizi e professionisti intorno al tuo progetto, ai tuoi ospiti e allo spazio che li accoglie.</p></div>
      <div className="agency-accordion">{services.map((service) => <article id={service.slug} key={service.slug} className={open === service.slug ? 'is-open' : ''}>
        <h3><button type="button" aria-expanded={open === service.slug} aria-controls={`panel-${service.slug}`} id={`trigger-${service.slug}`} onClick={() => setOpen(open === service.slug ? null : service.slug)}><span>{service.title}</span><Plus aria-hidden="true" /></button></h3>
        <div className="service-expand" id={`panel-${service.slug}`} role="region" aria-labelledby={`trigger-${service.slug}`} aria-hidden={open !== service.slug} inert={open !== service.slug}><div className="service-expand-inner"><div className="agency-service-panel"><figure><img src={service.image} alt={`Ispirazione per ${service.title.toLowerCase()}`} loading="lazy" /><figcaption>Immagine d’ispirazione</figcaption></figure><div className="service-readable-copy"><p className="agency-service-summary">{service.summary}</p><h4>Cosa possiamo realizzare</h4><ul className="service-activities">{service.items.map(item => <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul><div className="service-team-box"><h4>I professionisti coinvolti</h4><ul>{service.professionals.map(person => <li key={person}>{person}</li>)}</ul></div><Link to="/contatti" className="agency-underlink">Parliamo di questa area <ArrowUpRight size={18} /></Link></div></div></div></div>
      </article>)}</div>
    </section>
    <section className="agency-principles"><div className="shell"><p className="agency-label">Il nostro valore aggiunto</p><Reveal><h2>Molte competenze.<br /><em>Un solo filo.</em></h2></Reveal><div className="agency-principles-grid">{[{ title: 'Una squadra su misura', text: 'Scegliamo i professionisti in base al concept, allo spazio e alle esigenze reali del progetto.' }, { title: 'Una visione condivisa', text: 'Allestimenti, musica e accoglienza parlano la stessa lingua. Ogni scelta sostiene le altre.' }, { title: 'Una presenza concreta', text: 'Coordiniamo tempi, fornitori e passaggi sul posto. Tu puoi essere parte del tuo evento.' }].map((item, index) => <Reveal key={item.title} delay={index * 0.08}><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div></div></section>
    <AgencyCta />
  </div>
}
