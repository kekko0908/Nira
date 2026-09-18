import { ArrowDown } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { ClosingCta, PageMeta, Reveal } from '../components/Shared'
import { founders, processSteps } from '../data/content'

export default function AboutPage() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <PageMeta title="Chi siamo" description="Antonello Di Fraia e Federico Caldora: relazione, creatività e produzione in un’unica regia." />

      <header className="about-editorial-hero">
        <div className="about-editorial-mark" aria-hidden="true">NIRA</div>
        <div className="shell about-editorial-copy">
          <p className="eyebrow">Chi siamo</p>
          <h1>Le idee prendono forma quando qualcuno si assume la regia.</h1>
          <p>Antonello e Federico uniscono relazione, visione creativa e produzione. Il cliente resta vicino alle decisioni, senza dover inseguire ogni dettaglio.</p>
          <a href="#persone" aria-label="Conosci le persone dietro NIRA"><ArrowDown aria-hidden="true" /></a>
        </div>
      </header>

      <section className="section about-manifesto">
        <div className="container about-manifesto-grid">
          <Reveal className="about-manifesto-quote">
            <p>“Un evento non è una somma di fornitori. È un’esperienza con un ritmo, una voce e una responsabilità chiara.”</p>
          </Reveal>
          <Reveal className="about-manifesto-copy" delay={0.1}>
            <p className="section-kicker">Il nostro modo</p>
            <h2>Ascolto e produzione siedono allo stesso tavolo.</h2>
            <p>La relazione con le persone e la progettazione creativa non sono due momenti separati. Ogni scelta viene letta insieme alle altre, così il progetto resta coerente e realizzabile.</p>
          </Reveal>
        </div>
      </section>

      <section className="section about-people" id="persone">
        <div className="container">
          <div className="about-people-heading"><p className="section-kicker">Le persone</p><h2>Competenze diverse, presenza condivisa.</h2></div>
          <div className="about-people-grid">
            {founders.map((founder, index) => {
              const initials = founder.name.split(' ').map((part) => part[0]).join('')
              return (
                <Reveal className="about-person" key={founder.name} delay={index * 0.1}>
                  <div className="about-person-portrait">
                    <motion.span
                      initial={reducedMotion ? false : { rotate: -8, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                    >{initials}</motion.span>
                    <small>Ritratto in arrivo</small>
                  </div>
                  <div className="about-person-copy"><p>{founder.role}</p><h3>{founder.name}</h3><span>{founder.text}</span></div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section about-flow">
        <div className="container about-flow-layout">
          <div><p className="section-kicker">Una presenza continua</p><h2>Dal primo confronto alla regia sul posto.</h2></div>
          <div className="about-flow-list">
            {processSteps.map((step) => (
              <motion.article
                key={step.title}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <span aria-hidden="true" />
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title="Raccontaci cosa stai immaginando." text="Ti rispondiamo con domande concrete e una prima direzione possibile." />
    </>
  )
}
