import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { eventCategories, services } from '../data/content'
import { buildWhatsAppUrl, type BriefState } from '../lib/whatsapp'

const initialState: BriefState = {
  name: '',
  eventType: '',
  date: '',
  guests: '',
  area: '',
  services: [],
  message: '',
}

export default function BriefForm({ compact = false }: { compact?: boolean }) {
  const [brief, setBrief] = useState<BriefState>(initialState)
  const [errors, setErrors] = useState<{ name?: string; eventType?: string }>({})

  function toggleService(title: string) {
    setBrief((current) => ({
      ...current,
      services: current.services.includes(title)
        ? current.services.filter((item) => item !== title)
        : [...current.services, title],
    }))
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = {
      name: brief.name.trim() ? undefined : 'Scrivi il tuo nome.',
      eventType: brief.eventType ? undefined : 'Scegli il tipo di evento.',
    }
    setErrors(nextErrors)
    if (nextErrors.name || nextErrors.eventType) return
    window.open(buildWhatsAppUrl(brief), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className={`brief-form ${compact ? 'brief-form-compact' : ''}`} onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          <span>Il tuo nome *</span>
          <input
            value={brief.name}
            onChange={(event) => setBrief({ ...brief, name: event.target.value })}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Come ti chiami?"
          />
          {errors.name && <small id="name-error" className="field-error">{errors.name}</small>}
        </label>
        <label>
          <span>Tipo di evento *</span>
          <select
            value={brief.eventType}
            onChange={(event) => setBrief({ ...brief, eventType: event.target.value })}
            aria-invalid={Boolean(errors.eventType)}
            aria-describedby={errors.eventType ? 'event-error' : undefined}
          >
            <option value="">Seleziona</option>
            {eventCategories.map((category) => <option key={category.slug}>{category.label}</option>)}
          </select>
          {errors.eventType && <small id="event-error" className="field-error">{errors.eventType}</small>}
        </label>
        <label>
          <span>Data indicativa</span>
          <input type="date" value={brief.date} onChange={(event) => setBrief({ ...brief, date: event.target.value })} />
        </label>
        <label>
          <span>Numero di invitati</span>
          <input value={brief.guests} onChange={(event) => setBrief({ ...brief, guests: event.target.value })} placeholder="Anche approssimativo" inputMode="numeric" />
        </label>
        <label className="form-span-two">
          <span>Zona o tipo di location</span>
          <input value={brief.area} onChange={(event) => setBrief({ ...brief, area: event.target.value })} placeholder="Napoli, Campi Flegrei, villa, terrazza…" />
        </label>
      </div>

      {!compact && (
        <fieldset>
          <legend>Quali servizi stai valutando?</legend>
          <div className="service-checks">
            {services.map((service) => {
              const checked = brief.services.includes(service.title)
              return (
                <button
                  type="button"
                  key={service.slug}
                  className={checked ? 'is-selected' : ''}
                  aria-pressed={checked}
                  onClick={() => toggleService(service.title)}
                >
                  <span className="check-box">{checked && <Check size={14} aria-hidden="true" />}</span>
                  {service.title}
                </button>
              )
            })}
          </div>
        </fieldset>
      )}

      <label>
        <span>Dettagli utili</span>
        <textarea
          value={brief.message}
          onChange={(event) => setBrief({ ...brief, message: event.target.value })}
          placeholder="Raccontaci cosa hai già scelto e cosa vuoi definire con NIRA."
          rows={compact ? 3 : 5}
        />
      </label>

      <div className="form-submit-row">
        <p>I dati restano nel browser e vengono inseriti nel messaggio WhatsApp.</p>
        <button className="button" type="submit">
          Apri WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
