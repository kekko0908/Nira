import { describe, expect, it } from 'vitest'
import { buildWhatsAppMessage, buildWhatsAppUrl } from './whatsapp'

const brief = {
  name: 'Anna D’Amico',
  eventType: 'Matrimonio',
  date: '',
  guests: '120',
  area: 'Campi Flegrei',
  services: ['Allestimenti', 'Musica'],
  message: 'Vorrei una cena all’aperto.',
}

describe('WhatsApp brief', () => {
  it('keeps concrete details and marks unknown values', () => {
    const message = buildWhatsAppMessage(brief)
    expect(message).toContain('Nome: Anna D’Amico')
    expect(message).toContain('Data o periodo: Da definire')
    expect(message).toContain('Servizi: Allestimenti, Musica')
  })

  it('creates an encoded wa.me URL', () => {
    const url = buildWhatsAppUrl(brief)
    expect(url).toMatch(/^https:\/\/wa\.me\/393501647055\?text=/)
    expect(decodeURIComponent(url)).toContain('Vorrei una cena all’aperto.')
  })
})
