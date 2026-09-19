import { useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import BriefForm from '../components/BriefForm'
import NiraPaths from '../components/NiraPaths'
import { PageMeta, Reveal, SectionIntro } from '../components/Shared'
import { eventCategories, founders, locations, processSteps, services } from '../data/content'
import '../home-redesign.css'

function HomeHero() {
  const [active, setActive] = useState(1)
  const reduced = useReducedMotion()
  const event = eventCategories[active]
  return <header className="home-stage" aria-labelledby="home-title">
    <div className="home-stage-media" aria-hidden="true"><AnimatePresence initial={false}>{<motion.img key={event.slug} src={event.image} alt="" fetchPriority="high" initial={{ opacity: 0, scale: reduced ? 1 : 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .8 }} />}</AnimatePresence></div>
    <div className="home-stage-shade" /><motion.svg className="home-stage-thread" viewBox="0 0 300 900" preserveAspectRatio="none" aria-hidden="true"><motion.path d="M 180 -30 C -80 190, 350 300, 160 510 S 10 760, 220 930" fill="none" stroke="currentColor" strokeWidth="1" initial={reduced?false:{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:.4}} transition={{duration:2.4,ease:'easeInOut'}} /></motion.svg>
    <div className="shell home-stage-content">

      <motion.div initial={reduced ? false : { opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{duration:.8}}><h1 id="home-title">Tu vivilo.<br /><em>Noi facciamolo</em><br /><span>accadere.</span></h1></motion.div>
      <div className="home-stage-description"><p>Le tue persone. La tua atmosfera.<br />Una regia che tiene insieme ogni dettaglio.</p><Link to="/contatti"><span>Diamo forma alla tua idea</span><span className="home-cta-arrow"><ArrowUpRight size={22} /></span></Link></div>
      <div className="home-stage-bottom"><a href="#eventi" className="home-stage-scroll"><ArrowDown size={20} /><span>Entra nel mondo NIRA</span></a><div className="home-stage-picker" aria-label="Scegli l’atmosfera dell’anteprima">{eventCategories.map((item,index)=><button key={item.slug} type="button" aria-pressed={active===index} onClick={()=>setActive(index)}>{item.label}<span /></button>)}</div></div>
    </div>

  </header>
}
function HomeEvents() {
  return <section className="home-worlds" id="eventi"><div className="shell"><div className="home-heading-row"><Reveal><p className="home-kicker">Un’occasione. Mille possibilità.</p><h2>Non seguiamo un copione.<br /><em>Seguiamo te.</em></h2></Reveal><p>C’è chi sogna una festa senza orari.<br />Chi un sì, chi un nuovo inizio.<br />Noi partiamo da lì.</p></div><div className="home-world-grid">{eventCategories.map((event,index)=><Reveal key={event.slug} className={`home-world home-world-${index}`} delay={index%2*.1}><Link to={`/eventi/${event.slug}`}><figure><img src={event.image} alt={event.imageAlt} loading="lazy" /><span>Esplora <ArrowUpRight size={20} /></span></figure><div><h3>{event.label}</h3><p>{event.summary}</p></div></Link></Reveal>)}</div></div></section>
}

function HomeMethod() {
  return <section className="home-route"><div className="shell"><div className="home-heading-row"><div><p className="home-kicker">Il metodo, dietro la magia</p><h2>Le idee prendono vita.<br /><em>Un passo alla volta.</em></h2></div><Link to="/chi-siamo" className="home-line-link">Il nostro approccio <ArrowUpRight size={18} /></Link></div><div className="home-route-steps">{processSteps.map((step,index)=><Reveal key={step.title} delay={index*.1}><h3>{step.title}</h3><p>{step.text}</p></Reveal>)}</div></div></section>
}

function HomeServices() {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()
  const service = services[active]
  return <section className="home-studio"><div className="shell"><div className="home-heading-row"><div><p className="home-kicker">Dentro lo studio NIRA</p><h2>Il dettaglio giusto.<br /><em>Al momento giusto.</em></h2></div><p>Design, musica, luce, ospitalità.<br />Competenze diverse, un’unica direzione.</p></div><div className="home-studio-layout"><div className="home-studio-menu">{services.map((item,index)=><button type="button" key={item.slug} aria-pressed={active===index} onClick={()=>setActive(index)}><span>{item.title}</span><ArrowUpRight size={18} /></button>)}</div><div className="home-studio-preview"><div className="home-studio-photo"><AnimatePresence initial={false}><motion.img key={service.slug} src={service.image} alt={`Ispirazione per ${service.title}`} initial={{opacity:0, x:reduced?0:20}} animate={{opacity:1,x:0}} exit={{opacity:0}} transition={{duration:reduced?0:.45}} /></AnimatePresence></div><div className="home-studio-caption" aria-live="polite"><h3>{service.title}</h3><p>{service.summary}</p><Link to={`/servizi#${service.slug}`} className="home-line-link">Dentro questa competenza <ArrowUpRight size={18} /></Link></div></div></div></div></section>
}

function HomeLocations() {
  const [active,setActive] = useState(1)
  const location = locations[active]
  const reduced = useReducedMotion()
  return <section className="home-destination"><div className="shell home-destination-layout"><div className="home-destination-copy"><p className="home-kicker">Coordinate per un ricordo</p><h2>Ci vediamo<br /><em>in un posto speciale.</em></h2><p>Dal giardino alla pista, dalla terrazza al mare. Troviamo lo spazio che dà respiro alla tua idea.</p><Link to="/location" className="home-line-link">Esplora le location <ArrowUpRight size={18} /></Link><div className="home-destination-controls"><button type="button" aria-label="Location precedente" onClick={()=>setActive((active+locations.length-1)%locations.length)}><ArrowLeft size={20} /></button><span>0{active+1} / 0{locations.length}</span><button type="button" aria-label="Location successiva" onClick={()=>setActive((active+1)%locations.length)}><ArrowRight size={20} /></button></div></div><Link className="home-destination-postcard" to={`/location/${location.slug}`}><motion.img key={location.slug} src={location.image} alt={location.imageAlt} initial={reduced?false:{opacity:.5}} animate={{opacity:1}} transition={{duration:.4}} /><div aria-live="polite"><span>Campania / {location.title}</span><ArrowUpRight size={24} /></div><small>Immagine d’ispirazione</small></Link></div></section>
}

function HomePeople() {
  return <section className="home-people"><div className="shell home-people-layout"><Reveal className="home-people-photo"><img src="/images/founders.webp" alt="Antonello Di Fraia e Federico Caldora, fondatori di NIRA" loading="lazy" /><span>Piacere, siamo NIRA.</span></Reveal><div><p className="home-kicker">Le persone dietro la regia</p><h2>Due sguardi.<br /><em>La stessa cura.</em></h2><p>Ci conosciamo, ascoltiamo, immaginiamo insieme. Il tuo progetto ha un volto, una voce e qualcuno su cui contare.</p><div className="home-people-names">{founders.map(founder=><div key={founder.name}><h3>{founder.name}</h3><p>{founder.role}</p></div>)}</div><Link to="/chi-siamo" className="home-line-link">Conosciamoci meglio <ArrowUpRight size={18} /></Link></div></div></section>
}

export default function HomePage() {
  return <>
    <PageMeta title="NIRA — Event design e regia in Campania" description="NIRA progetta e coordina eventi privati, matrimoni, NIRA Baby ed eventi business in Campania." />
    <HomeHero /><HomeEvents /><HomeMethod /><HomeServices /><HomeLocations />
      <section className="section paths-page-section" id="percorsi-nira">
        <div className="container">
          <SectionIntro
            eyebrow="Quanto vuoi affidare a NIRA?"
            title="Scegli il livello di supporto che ti fa stare bene."
            text="Da un primo orientamento alla regia completa: il perimetro è chiaro, il metodo resta lo stesso."
          />
          <NiraPaths />
        </div>
      </section>
    <HomePeople />
    <section className="home-invitation"><div className="shell home-invitation-layout"><div><p className="home-kicker">Qui comincia qualcosa di bello</p><h2>Hai già<br /><em>un’idea in testa?</em></h2><p>Anche se è solo una sensazione, ci basta per iniziare. Raccontaci chi ci sarà e cosa vorresti far vivere.</p><span className="home-invitation-note">Il primo passo è una conversazione.</span></div><BriefForm compact /></div></section>
  </>
}

