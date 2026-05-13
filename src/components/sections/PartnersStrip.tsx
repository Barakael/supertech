import { useState } from 'react'
import { siteContent } from '../../content/siteContent'
import { SmartImage } from './SmartImage'

export function PartnersStrip() {
  const defaultVisiblePartners = 8
  const [showAllPartners, setShowAllPartners] = useState(false)

  const visiblePartners = showAllPartners
    ? siteContent.partners
    : siteContent.partners.slice(0, defaultVisiblePartners)

  const shouldShowToggle = siteContent.partners.length > defaultVisiblePartners

  return (
    <section className="section section-alt">
      <div className="container partners-shell">
        <p className="eyebrow">Trusted by leading institutions</p>
        <h2 className="section-title">Our Clients and Partners</h2>
        <div className="partners-grid">
          {visiblePartners.map((partner) => (
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
        {shouldShowToggle ? (
          <div className="partners-actions">
            <button
              type="button"
              className="button button-secondary"
              onClick={() => setShowAllPartners((prev) => !prev)}
            >
              {showAllPartners ? 'View Less' : 'View More'}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
