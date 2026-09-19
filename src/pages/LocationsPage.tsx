import { useRef } from 'react'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Link } from 'react-router-dom'
import { PageMeta, Reveal } from '../components/Shared'
import { locations } from '../data/content'
import { locationStories } from '../data/locationStories'
import LocationInspection from '../components/LocationInspection'
import '../agency.css'
import '../discovery.css'
import '../locations-editorial.css'

function LocationChapter({ location }: { location: (typeof locations)[number] }) {
  const ref=useRef<HTMLElement>(null)
  const reduced=useReducedMotion()
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']})
  const y=useTransform(scrollYProgress,[0,1],['-5%','5%'])
  const story=locationStories[location.slug]
  return <section className={`location-chapter chapter-${location.slug}`} ref={ref} id={location.slug}>
    <div className="location-chapter-inner"><Reveal className="location-chapter-copy"><h2>{location.title}</h2><p className="location-chapter-promise">{story.accent}</p><p>{location.summary}</p><p>{story.intro}</p><ul>{location.suitableFor.map(item=><li key={item}>{item}</li>)}</ul><Link to={`/location/${location.slug}`}>Scopri questa atmosfera <ArrowUpRight size={22} /></Link></Reveal>
    <div className="location-chapter-visual"><motion.img src={location.image} alt={location.imageAlt} loading="lazy" style={{y:reduced?0:y}} /><span>{story.promise}</span></div></div>
  </section>
}

export default function LocationsPage() {
  const reduced=useReducedMotion()
  return <div className="agency location-collection">
    <PageMeta title="Location" description="Locali, ville, terrazze e barche: scopri le atmosfere che NIRA può cercare per il tuo evento in Campania." />
    <header className="collection-hero"><div className="shell"><Reveal><h1>Ci sono luoghi<br />che fanno <em>accadere le cose.</em></h1></Reveal><div className="collection-hero-bottom"><p>Il tuo evento comincia da una sensazione.<br />Noi cerchiamo il luogo capace di accoglierla.</p><a href="#luoghi">Lasciati ispirare <ArrowDown size={22} /></a></div></div><motion.figure initial={reduced?false:{clipPath:'inset(0 12% 0 12%)'}} animate={{clipPath:'inset(0 0% 0 0%)'}} transition={{duration:1.2,ease:[.22,1,.36,1]}}><img src="/images/hero-wedding.webp" alt="Un ricevimento all’aperto, tra fiori e luce naturale" fetchPriority="high" /></motion.figure></header>
    <div id="luoghi" className="collection-intro shell"><p>Un luogo diverso.<br /><em>Un altro modo di stare insieme.</em></p><span>Immagini d’ispirazione. Selezioniamo le strutture in base al tuo progetto.</span></div>
    {locations.map(location=><LocationChapter location={location} key={location.slug} />)}
    <LocationInspection />
    <section className="atlas-contact shell"><MapPin aria-hidden="true" /><div><h2>La tua idea cerca un posto.</h2><p>Raccontaci dove vorresti essere e con chi.</p></div><Link to="/contatti">Troviamolo insieme <ArrowUpRight size={20} /></Link></section>
  </div>
}
