import { ClosingCta, PageMeta, Reveal, SectionIntro } from '../components/Shared'
import { founders, processSteps } from '../data/content'

export default function AboutPage() {
  return (
    <>
      <PageMeta title="Chi siamo" description="Antonello Di Fraia e Federico Caldora uniscono relazioni, progettazione creativa e produzione in NIRA." />

      <header className="about-hero">
        <div className="shell about-hero-grid">
          <div className="about-hero-copy"><p className="eyebrow">Chi siamo</p><h1>Relazioni e produzione, nello stesso progetto.</h1><p>Antonello cura consulenza, accordi e partnership. Federico sviluppa il concept e coordina la produzione. Il cliente mantiene un confronto diretto durante tutto il lavoro.</p></div>
          <figure><span className="about-word" aria-hidden="true">NIRA</span><img src="/images/founders.webp" alt="Antonello Di Fraia e Federico Caldora" fetchPriority="high" /></figure>
        </div>
      </header>

      <section className="section-pad name-story-v2">
        <div className="shell name-origin-layout">
          <Reveal className="name-origin-copy"><p className="eyebrow">Il nome</p><h2>Due significati descrivono il modo in cui lavoriamo.</h2><p>Nel racconto del brand, NIRA unisce l’idea di tessitura alla ricerca di un risultato essenziale e curato.</p></Reveal>
          <div className="name-orbit" aria-label="I due significati del nome NIRA">
            <Reveal className="name-orbit-item name-orbit-violet"><span>Tessitura</span><p>Fili diversi prendono forma quando persone, servizi e tempi seguono lo stesso disegno.</p><small>Radice ebraica</small></Reveal>
            <Reveal className="name-orbit-item name-orbit-green" delay={0.1}><span>Purezza</span><p>Ogni scelta resta leggibile, utile al progetto e coerente con l’occasione.</p><small>Radice sanscrita</small></Reveal>
            <div className="name-orbit-core" aria-hidden="true">NIRA</div>
          </div>
        </div>
      </section>

      <section className="brand-colors section-pad">
        <div className="shell brand-colors-grid">
          <Reveal className="brand-color-stage"><span className="manifesto-number">02</span><p>Due esperienze.<br />Un solo modo<br />di creare.</p><div className="manifesto-orbit" aria-hidden="true"><span /><span /></div></Reveal>
          <Reveal className="brand-colors-copy" delay={0.1}><p className="eyebrow eyebrow-light">Il nostro modo</p><h2>Le idee diventano belle quando funzionano insieme.</h2><p>La relazione con le persone e la progettazione creativa non sono due momenti separati. Ascolto, concept e produzione restano nello stesso tavolo di lavoro.</p><blockquote>Un evento non è una somma di fornitori. È un’esperienza con un ritmo, una voce e una responsabilità chiara.</blockquote></Reveal>
        </div>
      </section>

      <section className="section-pad founder-profiles founder-profiles-v2">
        <div className="shell">
          <SectionIntro eyebrow="Competenze complementari" title="Due responsabilità chiare, un confronto condiviso." />
          <div className="profile-grid profile-grid-v2">
            {founders.map((founder, index) => <Reveal key={founder.name} className={`profile-card profile-card-${index + 1}`} delay={index * 0.1}><h2>{founder.name}</h2><h3>{founder.role}</h3><p>{founder.text}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-pad about-process">
        <div className="shell"><SectionIntro eyebrow="Responsabilità condivisa" title="NIRA resta presente in ogni fase." /><div className="about-process-list">{processSteps.map((step) => <Reveal key={step.index}><span>{step.index}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></Reveal>)}</div></div>
      </section>
      <ClosingCta />
    </>
  )
}
