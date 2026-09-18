import { useState, type CSSProperties } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import BriefForm from '../components/BriefForm'
import { ServiceIcon } from '../components/BrandIcon'
import LocationRail from '../components/LocationRail'
import NiraPaths from '../components/NiraPaths'
import { PageMeta, Reveal, SectionIntro, TextLink } from '../components/Shared'
import { eventCategories, founders, processSteps, services } from '../data/content'

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const activeEvent = eventCategories[activeIndex]

  return (
    <section className="home-hero home-hero-v2" aria-labelledby="home-title">
      <div className="shell hero-stage">
        <motion.div className="hero-copy hero-copy-v2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <p className="eyebrow">Event design & planning · Campania</p>
          <h1 id="home-title">Il tuo evento, seguito dall’idea alla regia.</h1>
          <p className="hero-lead">NIRA coordina location, allestimenti, musica, immagine, tecnica e accoglienza. Un referente tiene insieme il progetto tra Napoli, Campi Flegrei e Campania.</p>
          <div className="hero-actions">
            <Link className="button" to="/contatti">Raccontaci il tuo evento <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link className="text-link" to="/servizi">Guarda cosa coordiniamo <ArrowDown size={17} aria-hidden="true" /></Link>
          </div>
          <p className="hero-proof">Napoli · Campi Flegrei · Campania</p>
        </motion.div>

        <motion.div className="hero-explorer" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
          <div className="hero-explorer-frame">
            <AnimatePresence mode="wait">
              <motion.figure
                key={activeEvent.slug}
                initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={activeEvent.image} alt={activeEvent.imageAlt} fetchPriority={activeIndex === 0 ? 'high' : undefined} />
                <figcaption>Immagine rappresentativa</figcaption>
              </motion.figure>
            </AnimatePresence>
            <div className="hero-explorer-copy" aria-live="polite">
              <span>{String(activeIndex + 1).padStart(2, '0')} / 04</span>
              <div><small>{activeEvent.eyebrow}</small><strong>{activeEvent.title}</strong></div>
              <Link to={`/eventi/${activeEvent.slug}`} aria-label={`Scopri ${activeEvent.title}`}><ArrowUpRight aria-hidden="true" /></Link>
            </div>
            <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
          </div>
          <div className="hero-event-switcher" role="tablist" aria-label="Esplora i tipi di evento">
            {eventCategories.map((category, index) => (
              <button
                key={category.slug}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={activeIndex === index ? 'is-active' : ''}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>{category.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <PageMeta title="Event Design & Planning" description="NIRA progetta feste, matrimoni, eventi per bambini e business tra Napoli, Campi Flegrei e Campania." />
      <Hero />

      <section className="intro-statement section-pad">
        <div className="shell intro-statement-grid">
          <Reveal><p className="eyebrow">Un progetto, un referente</p><h2>Location, fornitori e scaletta parlano la stessa lingua.</h2></Reveal>
          <Reveal className="intro-copy" delay={0.12}><p>NIRA parte da occasione, ospiti, spazio e budget. Poi definisce il concept, seleziona i professionisti e coordina i tempi fino al giorno dell’evento.</p><TextLink to="/servizi">Guarda tutti i servizi</TextLink></Reveal>
        </div>
      </section>

      <section className="events-showcase section-pad">
        <div className="shell">
          <SectionIntro eyebrow="Da quale evento partiamo?" title="Quattro esigenze, quattro punti di partenza." text="Ogni percorso raccoglie occasioni, servizi e location compatibili. La proposta viene definita dopo il primo confronto." />
          <div className="editorial-card-grid editorial-card-grid-v2">
            {eventCategories.map((category, index) => (
              <Reveal key={category.slug} className={`editorial-card card-${category.tone}`} delay={index * 0.06}>
                <Link to={`/eventi/${category.slug}`} aria-label={`Scopri ${category.label}`}>
                  <figure><img src={category.image} alt={category.imageAlt} loading="lazy" /><figcaption>Immagine rappresentativa</figcaption></figure>
                  <div className="editorial-card-copy"><span>0{index + 1}</span><p>{category.eyebrow}</p><h3>{category.title}</h3><ArrowUpRight aria-hidden="true" /></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="shell">
          <SectionIntro eyebrow="Il metodo NIRA" title="Quattro passaggi, dalla prima conversazione al giorno dell’evento." />
          <div className="process-line">
            {processSteps.map((step, index) => <Reveal className="process-step" key={step.index} delay={index * 0.08}><div className="process-index">{step.index}</div><div><h3>{step.title}</h3><p>{step.text}</p></div><span className="process-progress" style={{ '--step': index + 1 } as CSSProperties} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="services-section services-section-v2 section-pad">
        <div className="shell">
          <div className="services-heading"><SectionIntro eyebrow="Servizi e professionisti" title="Sei aree di lavoro. Una regia comune." text="Ogni area include attività e figure diverse. NIRA definisce chi serve, quando interviene e come si collega al resto del progetto." /><TextLink to="/servizi">Esplora tutti i servizi</TextLink></div>
          <div className="service-chapters">
            {services.map((service, index) => (
              <Reveal key={service.slug} className={`service-chapter service-chapter-${index + 1}`} delay={(index % 2) * 0.06}>
                <span className="service-chapter-index">0{index + 1}</span>
                <div className="service-chapter-icon"><ServiceIcon slug={service.slug} /></div>
                <div className="service-chapter-copy"><h3>{service.title}</h3><p>{service.summary}</p><div className="service-chapter-detail"><span>{service.items.slice(0, 3).join(' · ')}</span></div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="baby-feature baby-feature-v2 section-pad">
        <div className="shell baby-grid">
          <Reveal className="baby-media"><img src="/images/baby.webp" alt="Bambina che gioca con una macchina fotografica" loading="lazy" /><span>Immagine rappresentativa</span></Reveal>
          <Reveal className="baby-copy" delay={0.12}><span className="baby-monogram" aria-hidden="true">NB</span><p className="eyebrow">NIRA Baby</p><h2>Una festa costruita sui tempi dei bambini.</h2><p>Compleanni, battesimi, comunioni e party a tema possono includere allestimenti, animazione, laboratori, catering kids e foto ricordo.</p><div className="baby-tags"><span>Balloon art</span><span>Laboratori</span><span>Animazione</span><span>Catering kids</span></div><TextLink to="/eventi/nira-baby">Scopri NIRA Baby</TextLink></Reveal>
        </div>
      </section>

      <section className="location-section location-section-v2 section-pad">
        <div className="shell location-section-heading"><SectionIntro eyebrow="La location giusta" title="Prima scegliamo come vuoi vivere l’evento. Poi cerchiamo lo spazio." text="Valutiamo capienza, disposizione, accessi, piano meteo, tecnica e servizi. Le immagini indicano le categorie disponibili nella demo." /><TextLink to="/location">Come selezioniamo gli spazi</TextLink></div>
        <LocationRail />
      </section>

      <section className="paths-section paths-section-v2 section-pad">
        <div className="shell"><SectionIntro eyebrow="Quanto vuoi affidare a NIRA?" title="Dal primo orientamento alla direzione creativa completa." text="I nomi dei percorsi indicano il tipo di supporto. Servizi e costi vengono definiti sul progetto." /><NiraPaths /></div>
      </section>

      <section className="founders-section section-pad">
        <div className="shell founders-grid">
          <Reveal className="founders-copy"><p className="eyebrow eyebrow-light">Due competenze, una responsabilità condivisa</p><h2>Antonello e Federico seguono il progetto dall’ascolto alla regia.</h2><div className="founders-bios">{founders.map((founder) => <div key={founder.name}><h3>{founder.name}</h3><span>{founder.role}</span><p>{founder.text}</p></div>)}</div><TextLink to="/chi-siamo" light>Conosci NIRA</TextLink></Reveal>
          <Reveal className="founders-media" delay={0.1}><img src="/images/founders.webp" alt="Antonello Di Fraia e Federico Caldora" loading="lazy" /></Reveal>
        </div>
      </section>

      <section className="inspiration-section inspiration-section-v2 section-pad">
        <div className="shell inspiration-editorial">
          <div className="inspiration-heading"><SectionIntro eyebrow="Atmosfere per la demo" title="Tre modi diversi di costruire il tono dell’evento." text="Fotografie rappresentative: servono a discutere stile, composizione e priorità. Non mostrano lavori realizzati da NIRA." /></div>
          <figure className="inspiration-main"><img src="/images/celebration.webp" alt="Ospiti durante una cena" loading="lazy" /><figcaption><strong>Conviviale</strong><span>Persone, tavola, ritmo</span></figcaption></figure>
          <figure className="inspiration-detail"><img src="/images/details.webp" alt="Dettaglio grafico per un matrimonio" loading="lazy" /><figcaption><strong>Curata</strong><span>Grafica, materiali, segni</span></figcaption></figure>
          <figure className="inspiration-food"><img src="/images/food.webp" alt="Buffet preparato per un evento" loading="lazy" /><figcaption><strong>Accogliente</strong><span>Food, servizio, ospitalità</span></figcaption></figure>
        </div>
      </section>

      <section className="home-brief section-pad" id="brief">
        <div className="shell brief-layout"><div className="brief-intro"><p className="eyebrow">Primo contatto</p><h2>Dicci cosa stai organizzando.</h2><p>Compila i dati che conosci. Il pulsante prepara un messaggio WhatsApp che puoi controllare prima dell’invio.</p></div><BriefForm compact /></div>
      </section>
    </>
  )
}
