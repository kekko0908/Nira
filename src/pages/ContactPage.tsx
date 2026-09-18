import { MessageCircle } from 'lucide-react'
import BriefForm from '../components/BriefForm'
import { PageMeta, Reveal } from '../components/Shared'

export default function ContactPage() {
  return (
    <>
      <PageMeta title="Contatti" description="Racconta a NIRA il tuo evento e prepara un brief da inviare su WhatsApp." />
      <section className="contact-page section-pad">
        <div className="shell contact-page-grid">
          <Reveal className="contact-intro">
            <p className="eyebrow">Primo incontro</p>
            <h1>Raccontaci cosa stai organizzando.</h1>
            <p>Inserisci ciò che sai già. Il modulo prepara un messaggio WhatsApp; potrai leggerlo e modificarlo prima di inviarlo.</p>
            <div className="direct-contact">
              <MessageCircle aria-hidden="true" />
              <div><span>WhatsApp diretto</span><a href="https://wa.me/393501647055" target="_blank" rel="noreferrer">350 164 7055</a></div>
            </div>
            <p className="territory-note">Napoli · Campi Flegrei · Campania</p>
          </Reveal>
          <Reveal delay={0.1}><BriefForm /></Reveal>
        </div>
      </section>
    </>
  )
}
