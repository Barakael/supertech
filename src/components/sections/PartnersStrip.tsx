import { siteContent } from '../../content/siteContent'
import { SmartImage } from './SmartImage'

export function PartnersStrip() {
  return (
    <section className="section section-alt">
      <div className="container partners-shell">
        <p className="eyebrow">Trusted by leading institutions</p>
        <h2 className="section-title">Our Clients and Partners</h2>
        <div className="partners-grid">
          {siteContent.partners.map((partner) => (
            <article key={partner.name} className="partner-card">
              <SmartImage
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="partner-logo"
              />
              <p>{partner.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
