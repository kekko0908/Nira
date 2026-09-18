export interface BriefState {
  name: string
  eventType: string
  date: string
  guests: string
  area: string
  services: string[]
  message: string
}

export const WHATSAPP_NUMBER = '393501647055'

export function buildWhatsAppMessage(brief: BriefState): string {
  const lines = [
    'Ciao NIRA, vorrei parlarvi del mio evento.',
    '',
    `Nome: ${brief.name.trim()}`,
    `Tipo di evento: ${brief.eventType.trim()}`,
    `Data o periodo: ${brief.date.trim() || 'Da definire'}`,
    `Invitati: ${brief.guests.trim() || 'Da definire'}`,
    `Zona: ${brief.area.trim() || 'Da definire'}`,
    `Servizi: ${brief.services.length ? brief.services.join(', ') : 'Da definire insieme'}`,
  ]

  if (brief.message.trim()) {
    lines.push('', `Dettagli: ${brief.message.trim()}`)
  }

  return lines.join('\n')
}

export function buildWhatsAppUrl(brief: BriefState): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(brief))}`
}
