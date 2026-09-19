import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import BriefForm from '../components/BriefForm'
import { PageMeta, Reveal } from '../components/Shared'
import '../contact-redesign.css'

export default function ContactPage() {
  return <div className="contact-studio">
    <PageMeta title="Contatti" description="Raccontaci il tuo evento. Compila il brief o contatta direttamente NIRA su WhatsApp." />
    <header className="contact-studio-hero shell"><Reveal><h1>Le cose belle<br />iniziano con <em>un ciao.</em></h1></Reveal><div className="contact-studio-intro"><p>Un’idea precisa o ancora tutta da immaginare.<br />Partiamo da quello che hai in mente.</p><a href="#raccontaci">Raccontaci il tuo evento <ArrowDown size={22} /></a></div></header>
    <section className="contact-workspace shell" id="raccontaci"><aside className="contact-conversation"><div className="contact-direct"><MessageCircle size={32} aria-hidden="true" /><p>Preferisci scriverci direttamente?</p><a href="https://wa.me/393501647055" target="_blank" rel="noreferrer">350 164 7055 <ArrowUpRight size={24} /></a><span>Ci trovi su WhatsApp</span></div><div className="contact-expectation"><h2>Cominciamo<br /><em>da te.</em></h2><p>Occasione, persone, atmosfera. Non serve avere già tutte le risposte: il nostro lavoro è aiutarti a trovarle.</p><div><span>Dove lavoriamo</span><p>Napoli, Campi Flegrei<br />e Campania.</p></div></div></aside><div className="contact-paper"><div className="contact-paper-heading"><h2>La tua prossima occasione.</h2><p>Compila ciò che sai già. I campi con * sono obbligatori.</p></div><BriefForm /><p className="contact-paper-note">Si aprirà WhatsApp con il messaggio preparato: potrai rileggerlo e modificarlo prima di inviarlo.</p></div></section>
    <div className="contact-signoff shell"><p>Tu porta l’idea.<br /><em>Al resto diamo forma insieme.</em></p></div>
  </div>
}
