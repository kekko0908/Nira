import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from './Shared'

export function AgencyRibbon() {
  return <div className="agency-ribbon" aria-label="Idee, persone, atmosfere, ricordi"><div aria-hidden="true">{[0, 1].map(copy => <span key={copy}>Idee. <i>✳</i> Persone. <i>✳</i> Atmosfere. <i>✳</i> Ricordi. <i>✳</i> </span>)}</div></div>
}

export function AgencyCta() {
  return <section className="agency-cta"><div className="shell"><p className="agency-label">Ogni evento comincia con un incontro.</p><Reveal><Link to="/contatti"><h2>Facciamo spazio<br /><em>alla tua idea.</em></h2><span><ArrowUpRight aria-hidden="true" /></span></Link></Reveal><div className="agency-cta-bottom"><p>Raccontaci cosa immagini. Al resto diamo forma insieme.</p><span>NIRA · Event Design & Planning</span></div></div></section>
}
