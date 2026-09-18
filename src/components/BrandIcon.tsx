import {
  AudioLines,
  Baby,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  Camera,
  Heart,
  Landmark,
  Lightbulb,
  MessageCircle,
  Music2,
  Palette,
  PartyPopper,
  PenLine,
  PenTool,
  Ship,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'

const eventIcons: Record<string, LucideIcon> = {
  privati: PartyPopper,
  matrimoni: Heart,
  'nira-baby': Baby,
  business: BriefcaseBusiness,
}

const serviceIcons: Record<string, LucideIcon> = {
  'event-design': Palette,
  'musica-spettacolo': Music2,
  'immagine-contenuti': Camera,
  'tecnica-effetti': Lightbulb,
  'food-accoglienza': UtensilsCrossed,
  'grafica-dettagli': PenTool,
}

const locationIcons: Record<string, LucideIcon> = {
  'locali-club': Building2,
  'ville-dimore': Landmark,
  'ristoranti-terrazze': UtensilsCrossed,
  'mare-barche': Ship,
}

const pathIcons: Record<string, LucideIcon> = {
  'NIRA Incontro': MessageCircle,
  'NIRA Mood': CalendarCheck2,
  'NIRA Experience': AudioLines,
  'NIRA Signature': PenLine,
}

function Icon({ icon: IconComponent }: { icon: LucideIcon }) {
  return <IconComponent aria-hidden="true" strokeWidth={1.65} />
}

export function EventIcon({ slug }: { slug: string }) {
  return <Icon icon={eventIcons[slug] ?? PartyPopper} />
}

export function ServiceIcon({ slug }: { slug: string }) {
  return <Icon icon={serviceIcons[slug] ?? Palette} />
}

export function LocationIcon({ slug }: { slug: string }) {
  return <Icon icon={locationIcons[slug] ?? Building2} />
}

export function PathIcon({ name }: { name: string }) {
  return <Icon icon={pathIcons[name] ?? MessageCircle} />
}
