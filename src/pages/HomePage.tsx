import { useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import BriefForm from '../components/BriefForm'
import { EventIcon, ServiceIcon } from '../components/BrandIcon'
import LocationRail from '../components/LocationRail'
import NiraPaths from '../components/NiraPaths'
import { PageMeta, Reveal, SectionIntro, TextLink } from '../components/Shared'
import { eventCategories, founders, processSteps, services } from '../data/content'

function ImmersiveHero() {
  const [activeIndex, setActiveIndex] = useState(1)
  const reducedMotion = useReducedMotion()
  const activeEvent = eventCategories[activeIndex]

  return (
    <section className="immersive-hero" aria-labelledby="home-title">
      <div className="immersive-hero-media" aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.img
            key={activeEvent.slug}
            src={activeEvent.image}
            alt=""
            initial={reducedMotion ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
      </div>
      <div className="immersive-hero-shade" aria-hidden="true" />

      <div className="container immersive-hero-content">
        <motion.div
          className="hero-copy"
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.12 }}
        >
          <h1 id="home-title">
            <span>Il tuo evento, </span><span>seguito dall’idea </span><span>alla regia.</span>
          </h1>
          <p>
            Un’unica direzione creativa per dare forma a persone, spazi e dettagli. Tu vivi il momento,
            NIRA tiene insieme tutto il resto.
          </p>
          <Link className="button button-light" to="/contatti">
            Raccontaci il tuo evento <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="hero-event-explorer">
          <div className="hero-event-intro">
            <span>Esplora per tipo di evento</span>
            <motion.p
              key={activeEvent.slug}
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {activeEvent.summary}
            </motion.p>
          </div>
          <div className="hero-event-tabs" role="tablist" aria-label="Tipi di evento">
            {eventCategories.map((event, index) => (
              <button
                className={index === activeIndex ? 'hero-event-tab is-active' : 'hero-event-tab'}
                key={event.slug}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <EventIcon slug={event.slug} />
                <span>{event.label}</span>
              </button>
            ))}
          </div>
        </div>

        <a className="hero-scroll" href="#eventi" aria-label="Scopri gli eventi">
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

function EditorialEvents() {
  return (
    <section className="section editorial-events" id="eventi">
      <div className="container">
        <SectionIntro
          eyebrow="Ogni occasione cambia il ritmo"
          title="Quattro punti di partenza. Nessuna formula già scritta."
          text="Partiamo da ciò che stai immaginando e costruiamo un progetto capace di somigliarti davvero."
        />

        <div className="editorial-event-grid">
          {eventCategories.map((event, index) => (
            <Reveal className={`editorial-event-card editorial-event-card-${index + 1}`} key={event.slug}>
              <Link to={`/eventi/${event.slug}`} aria-label={`Scopri ${event.label}`}>
                <div className="editorial-event-image image-reveal">
                  <img src={event.image} alt={event.imageAlt} loading="lazy" />
                </div>
                <div className="editorial-event-copy">
                  <p>{event.eyebrow}</p>
                  <h3>{event.title}</h3>
                  <span>
                    Apri il percorso <ArrowUpRight size={17} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function MethodJourney() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="section method-journey">
      <div className="container method-layout">
        <div className="method-sticky">
          <p className="section-kicker">Il metodo NIRA</p>
          <h2>Un processo che diventa regia.</h2>
          <p>Ogni passaggio prepara il successivo. Una linea continua, dal primo ascolto al giorno dell’evento.</p>
          <TextLink to="/chi-siamo">Conosci il nostro approccio</TextLink>
        </div>

        <div className="method-track">
          <motion.div
            className="method-progress"
            initial={reducedMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reducedMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          {processSteps.map((step) => (
            <motion.article
              className="method-step"
              key={step.title}
              initial={reducedMotion ? false : { opacity: 0.25, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.65 }}
              transition={{ duration: reducedMotion ? 0 : 0.45 }}
            >
              <span className="method-dot" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion()
  const activeService = services[activeIndex]

  return (
    <section className="section service-spotlight-section">
      <div className="container">
        <SectionIntro
          eyebrow="Servizi e professionisti"
          title="Le competenze entrano in scena come un unico insieme."
          text="Non un catalogo di fornitori, ma una squadra costruita intorno al progetto e coordinata da un’unica regia."
        />

        <div className="service-spotlight">
          <div className="service-spotlight-media">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService.slug}
                src={activeService.image}
                alt=""
                initial={reducedMotion ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.45 }}
              />
            </AnimatePresence>
            <motion.div
              className="service-spotlight-caption"
              key={`${activeService.slug}-caption`}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p>{activeService.summary}</p>
              <Link to={`/servizi#${activeService.slug}`}>
                Scopri quest’area <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          <div className="service-spotlight-list" role="tablist" aria-label="Aree di lavoro">
            {services.map((service, index) => (
              <button
                className={index === activeIndex ? 'service-spotlight-button is-active' : 'service-spotlight-button'}
                key={service.slug}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <ServiceIcon slug={service.slug} />
                <span>{service.title}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FoundersSection() {
  return (
    <section className="section founders-editorial">
      <div className="container">
        <SectionIntro
          eyebrow="Dietro la regia"
          title="Due sguardi, una sola direzione."
          text="La relazione resta diretta: conosci chi immagina il progetto e chi ne protegge ogni passaggio."
        />
        <div className="founder-grid">
          {founders.map((founder) => {
            const initials = founder.name
              .split(' ')
              .map((part) => part[0])
              .join('')
            return (
              <Reveal className="founder-profile" key={founder.name}>
                <div className="founder-placeholder" aria-label={`Spazio ritratto di ${founder.name}`}>
                  <span>{initials}</span>
                  <p>Ritratto in arrivo</p>
                </div>
                <div className="founder-copy">
                  <p>{founder.role}</p>
                  <h3>{founder.name}</h3>
                  <span>{founder.text}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="NIRA — Event design e regia in Campania"
        description="NIRA progetta e coordina eventi privati, matrimoni, NIRA Baby ed eventi business in Campania."
      />
      <ImmersiveHero />
      <EditorialEvents />
      <MethodJourney />
      <ServiceSpotlight />

      <section className="section locations-showcase">
        <div className="container">
          <SectionIntro
            eyebrow="La location giusta"
            title="Lo spazio non ospita soltanto l’evento. Ne cambia la storia."
            text="Ville, terrazze, mare e architetture contemporanee: scegliamo luoghi capaci di sostenere davvero il concept."
          />
          <LocationRail />
          <TextLink to="/location">Scopri come selezioniamo le location</TextLink>
        </div>
      </section>

      <section className="section paths-page-section">
        <div className="container">
          <SectionIntro
            eyebrow="Quanto vuoi affidare a NIRA?"
            title="Scegli il livello di supporto che ti fa stare bene."
            text="Da un primo orientamento alla regia completa: il perimetro è chiaro, il metodo resta lo stesso."
          />
          <NiraPaths />
        </div>
      </section>
      <FoundersSection />

      <section className="section home-contact">
        <div className="container home-contact-shell">
          <div className="home-contact-copy">
            <p className="section-kicker">Il primo passo è una conversazione</p>
            <h2>Prima del progetto, vogliamo capire cosa conta per te.</h2>
            <p>
              Bastano pochi dettagli. Ti rispondiamo con domande utili, una direzione possibile e il prossimo passo
              più sensato.
            </p>
          </div>
          <BriefForm compact />
        </div>
      </section>
    </>
  )
}
