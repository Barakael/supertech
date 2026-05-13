import { SmartImage } from './SmartImage'

type PageHeroProps = {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

export function PageHero({ title, subtitle, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero premium-hero">
      <div className="container page-hero-inner">
        <div className="page-hero-copy">
          <p className="eyebrow">SuperTech Limited</p>
          <h1>{title}</h1>
          <p className="lead">{subtitle}</p>
        </div>
        <div className="page-hero-media">
          <SmartImage src={imageSrc} alt={imageAlt} className="page-hero-image" />
        </div>
      </div>
    </section>
  )
}
