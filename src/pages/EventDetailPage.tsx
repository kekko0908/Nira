import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { PageMeta, Reveal } from '../components/Shared'
import { eventCategories, eventPageDetails, locations } from '../data/content'
import NotFoundPage from './NotFoundPage'
import '../agency.css'
import '../discovery.css'

const headlines: Record<string, [string,string]> = {
  privati: ['La serata è tua.', 'Falla somigliare a te.'],
  matrimoni: ['Il vostro sì.', 'Tutto il resto, insieme.'],
  'nira-baby': ['Piccoli ospiti.', 'Grandissime meraviglie.'],
  business: ['Un messaggio chiaro.', 'Un evento che lascia il segno.'],
}

export default function EventDetailPage() {
  const { slug } = useParams()
  const category = eventCategories.find(item=>item.slug===slug)
  const detail = slug ? eventPageDetails[slug] : undefined
  if (!category || !detail) return <NotFoundPage />
  const suggested = locations.filter(location=>category.locations.includes(location.title))
  const headline = headlines[category.slug]
  return <div className={`agency occasion occasion-${category.slug}`}>
    <PageMeta title={category.title} description={category.summary} />
    <header className="occasion-hero"><div className="occasion-hero-copy"><Link to="/eventi" className="discovery-back"><ArrowLeft size={16} />Tutti gli eventi</Link><Reveal><h1>{headline[0]}<br /><em>{headline[1]}</em></h1></Reveal><p>{category.summary}</p><Link className="occasion-hero-cta" to="/contatti">Cominciamo dalla tua idea <ArrowUpRight size={18} /></Link><a href="#esperienza" className="occasion-down"><ArrowDown size={18} />Dentro l’esperienza</a></div><figure className="occasion-hero-image"><img src={category.image} alt={category.imageAlt} fetchPriority="high" /><figcaption>{category.eyebrow} / Immagine d’ispirazione</figcaption></figure></header>
    <section className="occasion-formats shell"><div className="occasion-formats-heading"><h2>Che cosa<br /><em>festeggiamo?</em></h2><p>Ogni occasione merita un progetto tutto suo. Partiamo dalla tua.</p></div><ul>{category.occasions.map(item=><li key={item}>{item}</li>)}</ul></section>
    <section className="occasion-story shell" id="esperienza"><Reveal><p className="discovery-kicker">L’intenzione, prima dei dettagli</p><h2>{detail.experienceTitle}</h2></Reveal><div><p className="occasion-intro">{detail.intro}</p><p>{detail.experienceText}</p></div></section>
    <section className="occasion-mood shell" aria-label="Atmosfere e dettagli">{detail.gallery.slice(1).map(scene=><figure key={scene.image}><img src={scene.image} alt={scene.alt} loading="lazy" /><figcaption>{scene.caption}</figcaption></figure>)}</section>
    <section className="occasion-craft"><div className="shell"><div className="occasion-craft-heading"><p className="discovery-kicker">Il progetto prende forma</p><h2>Cosa fa<br /><em>la differenza.</em></h2><Link to="/servizi">Tutte le competenze <ArrowUpRight size={18} /></Link></div><div className="occasion-pillar-list">{detail.pillars.map((pillar)=><Reveal key={pillar.title}><div><h3>{pillar.title}</h3><p>{pillar.text}</p></div></Reveal>)}</div></div></section>
    <section className="occasion-brief shell"><div><h2>Partiamo da ciò<br /><em>che conta per te.</em></h2><p>Mettiamo a fuoco le priorità prima di scegliere i dettagli.</p></div><div className="occasion-questions">{detail.decisions.map(decision=><article key={decision.title}><h3>{decision.title}</h3><p>{decision.text}</p></article>)}</div></section>
    {suggested.length>0 && <section className="occasion-places shell"><div><h2>Troviamo<br /><em>il posto giusto.</em></h2><p>Spazi diversi per dare alla tua occasione l’atmosfera che cerchi.</p></div><div>{suggested.map(location=><Link key={location.slug} to={`/location/${location.slug}`}><img src={location.image} alt={location.imageAlt} loading="lazy" /><span>{location.title}<ArrowUpRight size={20} /></span></Link>)}</div></section>}
    <section className="occasion-finale"><div className="shell"><p>{detail.closing}</p><Link to="/contatti">Diamo inizio al progetto <ArrowRight size={24} /></Link></div></section>
  </div>
}
