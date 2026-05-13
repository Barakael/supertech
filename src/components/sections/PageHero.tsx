import { SmartImage } from './SmartImage'
import type { ReactNode } from 'react'

type PageHeroProps = {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  details?: ReactNode
}

export function PageHero({ title, subtitle, imageSrc, imageAlt, details }: PageHeroProps) {
  const heroInnerClass = details ? 'container page-hero-inner page-hero-inner-detailed' : 'container page-hero-inner'

  return (
    <section className="page-hero premium-hero">
      <div className={heroInnerClass}>
        <div className="page-hero-copy">
          <p className="eyebrow">SuperTech Limited</p>
          <h1>{title}</h1>
          <p className="lead">{subtitle}</p>
          {details ? <div className="page-hero-details">{details}</div> : null}
        </div>
        <div className="page-hero-media">
          <SmartImage src={imageSrc} alt={imageAlt} className="page-hero-image" />
        </div>
      </div>
    </section>
  )
}
