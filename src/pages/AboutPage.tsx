import { ArrowDown } from 'lucide-react'
import { PageMeta, Reveal } from '../components/Shared'
import { founders, processSteps } from '../data/content'
import { AgencyCta } from '../components/Agency'
import '../agency.css'

export default function AboutPage() {
  return <div className="agency agency-about">
    <PageMeta title="Chi siamo" description="Antonello Di Fraia e Federico Caldora: relazione, creatività e produzione in un’unica regia." />
    <header className="agency-about-hero shell">
      <Reveal><h1>Dietro la scena.<br /><em>Dentro ogni dettaglio.</em></h1></Reveal>
      <div className="agency-about-composition"><figure><img src="/images/founders.webp" alt="I fondatori di NIRA, Antonello Di Fraia e Federico Caldora" fetchPriority="high" /><figcaption>Le persone dietro il progetto</figcaption></figure><div><p className="agency-label">Piacere, siamo NIRA.</p><p className="agency-about-lead">Due sguardi diversi.<br />La stessa idea di <em>cura.</em></p><p>Mettiamo insieme relazione e direzione creativa per trasformare le idee in esperienze da vivere. Con sensibilità, metodo e una presenza vera.</p><a href="#persone" className="agency-round-link">Conosciamoci <span><ArrowDown size={20} /></span></a></div></div>
    </header>
    <section className="about-human-note shell" aria-label="Il nostro approccio"><p>Prima del progetto,<br /><em>ci sono le persone.</em></p></section>
    <section className="agency-founders shell" id="persone"><div className="agency-section-heading"><p className="agency-label">La nostra squadra</p><h2>Il lato umano<br /><em>della regia.</em></h2><p>Ascoltare bene. Immaginare insieme. Far accadere le cose. È da qui che parte ogni progetto NIRA.</p></div><div className="agency-founder-grid">{founders.map((founder, index) => <Reveal key={founder.name} delay={index * 0.1}><h3>{founder.name}</h3><p className="agency-label">{founder.role}</p><p>{founder.text}</p></Reveal>)}</div></section>
    <section className="agency-manifesto"><div className="shell"><p className="agency-label">Quello in cui crediamo</p><Reveal><h2>Un evento non è una<br />somma di fornitori.<br />È un insieme di <em>emozioni.</em></h2></Reveal></div></section>
    <section className="agency-process shell"><div><p className="agency-label">Il metodo NIRA</p><h2>Ci siamo.<br /><em>In ogni momento.</em></h2></div><div>{processSteps.map((step) => <Reveal className="agency-process-step" key={step.title}><div><h3>{step.title}</h3><p>{step.text}</p></div></Reveal>)}</div></section>
    <AgencyCta />
  </div>
}
