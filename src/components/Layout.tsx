import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navigation = [
  { to: '/eventi', label: 'Eventi' },
  { to: '/servizi', label: 'Servizi' },
  { to: '/location', label: 'Location' },
  { to: '/chi-siamo', label: 'Chi siamo' },
  { to: '/contatti', label: 'Contatti' },
]

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link to="/" className="brand" aria-label="NIRA, torna alla homepage">
          <img src="/logo-nira.png" alt="NIRA Event Design & Planning" />
        </Link>

        <nav className="desktop-nav" aria-label="Navigazione principale">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link className="button button-small header-cta" to="/contatti">
          Raccontaci il tuo evento <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Navigazione mobile">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <p>Napoli · Campi Flegrei · Campania</p>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src="/logo-nira.png" alt="NIRA Event Design & Planning" />
          <p>Eventi progettati e coordinati tra Napoli, Campi Flegrei e Campania.</p>
        </div>
        <div>
          <p className="footer-label">Esplora</p>
          {navigation.slice(0, 4).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
        <div>
          <p className="footer-label">Contatti</p>
          <a href="https://wa.me/393501647055" target="_blank" rel="noreferrer">WhatsApp · 350 164 7055</a>
          <Link to="/contatti">Invia il tuo brief</Link>
        </div>
        <div>
          <p className="footer-label">Informazioni</p>
          <Link to="/privacy">Privacy</Link>
          <Link to="/cookie">Cookie</Link>
          <a href="/image-credits.txt" target="_blank">Crediti immagini demo</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} NIRA · Event Design & Planning</p>
        <p>Demo progettuale · contenuti e immagini da validare prima della pubblicazione</p>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Vai al contenuto</a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <a
        className="whatsapp-float"
        href="https://wa.me/393501647055"
        target="_blank"
        rel="noreferrer"
        aria-label="Contatta NIRA su WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <Footer />
    </>
  )
}
