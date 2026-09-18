import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageMeta } from '../components/Shared'

export default function NotFoundPage() {
  return (
    <section className="not-found section-pad">
      <PageMeta title="Pagina non trovata" description="La pagina richiesta non è disponibile." />
      <div className="shell"><span>404</span><h1>Questa pagina non è disponibile.</h1><p>Puoi tornare alla homepage oppure consultare gli eventi.</p><div><Link className="button" to="/"><ArrowLeft size={17} /> Homepage</Link><Link className="button button-outline" to="/eventi">Eventi</Link></div></div>
    </section>
  )
}
