import type { ReactNode } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'

export function PageMeta({ title, description }: { title: string; description: string }) {
  if (typeof document !== 'undefined') {
    document.title = `${title} | NIRA`
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description
  }
  return null
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionIntro({ eyebrow, title, text, align = 'left' }: { eyebrow: string; title: string; text?: string; align?: 'left' | 'center' }) {
  return (
    <Reveal className={`section-intro section-intro-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-lead">{text}</p>}
    </Reveal>
  )
}

export function TextLink({ to, children, light = false }: { to: string; children: ReactNode; light?: boolean }) {
  return (
    <Link className={`text-link ${light ? 'text-link-light' : ''}`} to={to}>
      <span>{children}</span><ArrowRight size={18} aria-hidden="true" />
    </Link>
  )
}

export function PageHero({ eyebrow, title, text, image, imageAlt, tone = 'cream' }: {
  eyebrow: string
  title: string
  text: string
  image?: string
  imageAlt?: string
  tone?: 'cream' | 'green' | 'plum' | 'lavender'
}) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="shell page-hero-grid">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="page-hero-rule"><span /></div>
        </div>
        {image && (
          <motion.figure
            className="page-hero-media"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={image} alt={imageAlt ?? ''} fetchPriority="high" />
            <figcaption>Immagine rappresentativa</figcaption>
          </motion.figure>
        )}
      </div>
    </section>
  )
}

export function ClosingCta({ title = 'Parliamo del tuo evento.', text = 'Raccontaci occasione, periodo e numero di invitati. Ti rispondiamo su WhatsApp.' }: { title?: string; text?: string }) {
  return (
    <section className="closing-cta">
      <div className="shell closing-cta-inner">
        <div>
          <p className="eyebrow">Primo incontro</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="button button-light" to="/contatti">
          Raccontaci il tuo evento <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
