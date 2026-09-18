import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { locations } from '../data/content'
import { LocationIcon } from './BrandIcon'
import { Reveal } from './Shared'

export default function LocationRail() {
  return (
    <div className="location-rail-wrap">
      <div className="location-rail" aria-label="Tipologie di location">
        {locations.map((location, index) => (
          <Reveal className={`location-slide location-slide-${location.slug}`} key={location.slug} delay={index * 0.06}>
            <Link to={`/location/${location.slug}`}>
              <img src={location.image} alt={location.imageAlt} loading="lazy" />
              <div className="location-slide-shade" />
              <div className="location-slide-copy">
                <span className="location-slide-icon"><LocationIcon slug={location.slug} /></span>
                <div>
                  <h3>{location.title}</h3>
                  <p>{location.summary}</p>
                </div>
                <ArrowUpRight className="location-slide-arrow" aria-hidden="true" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
