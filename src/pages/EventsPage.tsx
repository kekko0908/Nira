import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageMeta, Reveal } from '../components/Shared'
import { eventCategories } from '../data/content'
import { AgencyCta, AgencyRibbon } from '../components/Agency'
import '../agency.css'

export default function EventsPage() {
  return <div className="agency agency-events">
    <PageMeta title="Eventi" description="Feste private, matrimoni, NIRA Baby ed eventi business progettati da NIRA in Campania." />
    <header className="agency-hero shell">
      <Reveal><h1>Non un evento.<br /><em>Il tuo evento.</em><span className="agency-star" aria-hidden="true">✳</span></h1></Reveal>
      <div className="agency-hero-bottom"><p>Ci sono occasioni che meritano di diventare ricordi.<br />Noi diamo loro una forma, un’atmosfera, una regia.</p><a className="agency-round-link" href="#occasioni">Trova la tua occasione <span><ArrowDown size={20} /></span></a></div>
    </header>
    <section className="agency-event-grid shell" id="occasioni" aria-label="Le nostre tipologie di evento">
      {eventCategories.map((category, index) => <Reveal key={category.slug} className="agency-event" delay={index % 2 * 0.1}><Link to={`/eventi/${category.slug}`}>
        <img src={category.image} alt={category.imageAlt} loading={index < 2 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} />
        <div className="agency-event-top"><ArrowUpRight aria-hidden="true" /></div>
        <div className="agency-event-caption"><p>{category.occasions.slice(0, 3).join(' · ')}</p><h2>{category.label}</h2><span>{category.summary}</span></div>
      </Link></Reveal>)}
      <p className="agency-image-note">Immagini d’ispirazione, rappresentative delle atmosfere.</p>
    </section>
    <AgencyRibbon />
    <section className="agency-statement shell"><p className="agency-label">L’occasione cambia. La cura resta.</p><Reveal><h2>La differenza è in ciò<br />che <em>fai sentire.</em></h2></Reveal><div><p>Una tavola che invita a restare. La musica al momento giusto. Un dettaglio che parla di te. Progettiamo ogni elemento perché l’esperienza abbia una voce sola.</p><Link className="agency-underlink" to="/servizi">Scopri come lo realizziamo <ArrowUpRight size={18} /></Link></div></section>
    <AgencyCta />
  </div>
}
