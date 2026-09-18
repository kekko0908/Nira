import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ServiceIcon } from '../components/BrandIcon'
import NiraPaths from '../components/NiraPaths'
import { ClosingCta, PageMeta, SectionIntro } from '../components/Shared'
import { services } from '../data/content'

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const activeService = services[activeIndex]

  return (
    <>
      <PageMeta title="Servizi" description="Event design, musica, immagine, tecnica, food e grafica coordinati da NIRA." />

      <header className="services-page-hero">
        <div className="shell services-page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Servizi e professionisti</p>
            <h1>Sei competenze. Un progetto coordinato.</h1>
            <p>NIRA seleziona le figure necessarie, assegna tempi e responsabilità, collega ogni servizio alla location e alla scaletta.</p>
          </div>
          <div className="services-orbit" aria-label="Le sei aree di servizio">
            {services.map((service) => <span key={service.slug}><ServiceIcon slug={service.slug} /><small>{service.title}</small></span>)}
          </div>
        </div>
      </header>

      <section className="service-stories section-pad">
        <div className="shell service-atlas-heading">
          <SectionIntro eyebrow="L’atlante dei servizi" title="Tocca un’area. Guarda subito cosa mette in moto." text="Sei competenze connesse dalla stessa regia: scegli un’area per vedere attività, figure e ruolo nel progetto." />
        </div>
        <div className="shell service-atlas">
          <div className="service-atlas-nav" role="tablist" aria-label="Aree di servizio">
            {services.map((service, index) => (
              <button
                key={service.slug}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={activeIndex === index ? 'is-active' : ''}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span>0{index + 1}</span><ServiceIcon slug={service.slug} /><strong>{service.title}</strong><ArrowUpRight aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="service-atlas-stage">
            <AnimatePresence mode="wait">
              <motion.article
                className="service-atlas-panel"
                key={activeService.slug}
                role="tabpanel"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <figure><img src={activeService.image} alt={`Atmosfera rappresentativa per ${activeService.title}`} /><figcaption>Immagine rappresentativa</figcaption></figure>
                <div className="service-atlas-content">
                  <div className="service-atlas-title"><span className="service-story-icon"><ServiceIcon slug={activeService.slug} /></span><h2>{activeService.title}</h2></div>
                  <p>{activeService.summary}</p>
                  <div className="service-atlas-columns">
                    <div><h3>Cosa attiva</h3><ul>{activeService.items.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul></div>
                    <div><h3>Chi entra in scena</h3><p>{activeService.professionals.join(' · ')}</p></div>
                  </div>
                  <Link className="text-link" to="/contatti">Costruiamo la tua combinazione <ArrowUpRight size={17} aria-hidden="true" /></Link>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="section-pad paths-page-section paths-page-section-v2">
        <div className="shell">
          <SectionIntro eyebrow="Livello di supporto" title="Scegli quanto vuoi affidare a NIRA." text="Dal confronto iniziale alla regia completa: ogni percorso chiarisce responsabilità e perimetro del lavoro." />
          <NiraPaths withAction />
        </div>
      </section>
      <ClosingCta />
    </>
  )
}
