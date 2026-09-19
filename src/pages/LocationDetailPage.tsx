import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, MapPin } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { PageMeta, Reveal } from '../components/Shared'
import { locations } from '../data/content'
import { locationStories } from '../data/locationStories'
import NotFoundPage from './NotFoundPage'
import '../agency.css'
import '../discovery.css'

export default function LocationDetailPage() {
  const { slug } = useParams()
  const location = locations.find(item => item.slug === slug)
  if (!location) return <NotFoundPage />
  return <LocationProfile key={location.slug} location={location} />
}
function LocationProfile({ location }: { location: (typeof locations)[number] }) {
  const [scene, setScene] = useState(0)
  const story = locationStories[location.slug]
  const next = locations[(locations.indexOf(location)+1)%locations.length]
  return <div className={`agency place-profile place-${location.slug}`}>
    <PageMeta title={location.title} description={location.summary} />
    <header className="place-hero shell"><Link className="discovery-back" to="/location"><ArrowLeft size={16} />L’atlante degli spazi</Link><div className="place-title"><div><h1>{location.title}</h1></div><p>{story.accent}</p></div><div className="place-cover"><img src={location.image} alt={location.imageAlt} fetchPriority="high" /><div className="place-stamp"><MapPin size={18} /><span>Lo spazio<br />diventa esperienza.</span></div></div><div className="place-photo-caption"><span>Campania / Atmosfere da esplorare</span><span>Immagine rappresentativa</span></div></header>
    <section className="place-intro shell"><Reveal><p className="discovery-kicker">Il carattere del luogo</p><h2>{story.promise}</h2><p>{story.intro}</p></Reveal><aside><span className="place-note-label">Da immaginare qui</span><ul>{location.suitableFor.map(item=><li key={item}>{item}<ArrowUpRight size={15} /></li>)}</ul><p>Formato, ospiti e periodo guidano la selezione della struttura.</p></aside></section>
    <section className="place-scenes"><div className="shell"><div className="place-scene-heading"><p className="discovery-kicker">Un luogo, tre momenti</p><h2>Prova a <em>immaginarti qui.</em></h2></div><div className="place-scene-stage"><figure><img key={scene} src={story.gallery[scene].image} alt={story.gallery[scene].alt} /><figcaption>{story.gallery[scene].caption} / Immagine d’ispirazione</figcaption></figure><div className="place-scene-controls">{story.acts.map((act,index)=><button type="button" key={act.title} aria-pressed={scene===index} onClick={()=>setScene(index)}><div><h3>{act.title}</h3><p>{act.text}</p></div><ArrowRight size={20} /></button>)}</div></div></div></section>
    <section className="place-specs shell"><div><p className="discovery-kicker">La parte concreta</p><h2>Il fascino incontra<br /><em>la fattibilità.</em></h2><p>{location.description}</p></div><div className="place-checklist"><span>Da verificare insieme</span>{location.notes.map(note=><p key={note}><Check size={18} />{note}</p>)}<Link to="/contatti">Valutiamo questo spazio <ArrowUpRight size={18} /></Link></div></section>
    <section className="place-next"><Link className="shell" to={`/location/${next.slug}`}><span>Un’altra atmosfera</span><h2>{next.title}</h2><ArrowRight aria-hidden="true" /></Link></section>
  </div>
}
