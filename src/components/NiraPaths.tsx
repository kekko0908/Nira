import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { niraPaths } from '../data/content'
import { PathIcon } from './BrandIcon'
import { Reveal } from './Shared'

export default function NiraPaths({ withAction = false }: { withAction?: boolean }) {
  return (
    <div className="path-explorer">
      {niraPaths.map((path, index) => (
        <Reveal className="path-option" key={path.name} delay={index * 0.06}>
          <div className="path-option-top">
            <span className="path-option-number">0{index + 1}</span>
            <div className="path-option-icon"><PathIcon name={path.name} /></div>
            <div className="path-option-name">{path.name}</div>
          </div>
          <div className="path-option-body"><h3>{path.title}</h3><p>{path.description}</p></div>
          <div className="path-option-fit"><strong>È il percorso giusto se</strong><span>{path.bestFor}</span></div>
        </Reveal>
      ))}
      {withAction && (
        <Link className="button path-explorer-action" to="/contatti">
          Troviamo il supporto adatto <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
