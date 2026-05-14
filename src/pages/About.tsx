import { useState } from 'react'
import { SmartImage } from '../components/sections/SmartImage'
import ethernetImage from '../assets/ethernet.jpg'
import { siteContent } from '../content/siteContent'


export function AboutPage() {
  const defaultVisibleClients = 5
  const [showAllClients, setShowAllClients] = useState(false)

  const aboutDescription = [
    'SuperTech Limited is a Tanzanian engineering contractor established to deliver dependable electrical, ICT and telecommunications solutions for public and private institutions.',
    'From design support and installation to testing, commissioning and maintenance, our team works with a strong focus on safety, standards compliance and long-term reliability.',
    'For nearly two decades, clients have trusted us to execute projects that are practical, cost-conscious and built to perform in real operating environments.',
  ]
  const visibleClients = showAllClients
    ? siteContent.clients
    : siteContent.clients.slice(0, defaultVisibleClients)

  return (
    <>
      <section className="section solutions-hero about-premium-hero">
        <div className="container solutions-hero-shell">
          <div className="solutions-hero-copy">
            <p className="eyebrow">About SuperTech</p>
            <h1>A trusted engineering partner with standards-first delivery since 2006.</h1>
            {aboutDescription.map((paragraph) => (
              <p key={paragraph} className="lead">
                {paragraph}
              </p>
            ))}
            <div className="button-row solutions-hero-actions">
              <a className="button button-primary" href="/services">
                Explore Services
              </a>
              <a className="button button-secondary" href="/contact">
                Contact Our Team
              </a>
            </div>
          </div>
          <article className="card premium-card solutions-overview-card about-hero-image-card">
            <SmartImage
              src={ethernetImage}
              alt="Network ethernet and rack equipment"
              className="about-hero-image"
            />
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid-three about-cards-grid">
          <article className="card premium-card about-info-card">
            <div className="about-card-head">
              <span className="about-card-icon" aria-hidden="true">
                V
              </span>
              <div>
                <p className="card-kicker">Vision</p>
                <h2>Our Vision</h2>
              </div>
            </div>
            <p>{siteContent.vision}</p>
          </article>
          <article className="card premium-card about-info-card">
            <div className="about-card-head">
              <span className="about-card-icon" aria-hidden="true">
                M
              </span>
              <div>
                <p className="card-kicker">Mission</p>
                <h2>Our Mission</h2>
              </div>
            </div>
            <p>{siteContent.mission}</p>
          </article>
          <article className="card premium-card about-info-card">
            <p className="card-kicker">Clients</p>
            <h2>Our Clients</h2>
            <ul className="list about-clients-list">
              {visibleClients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
            {siteContent.clients.length > defaultVisibleClients ? (
              <div className="about-clients-actions">
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => setShowAllClients((prev) => !prev)}
                >
                  {showAllClients ? 'View Less' : 'View More'}
                </button>
              </div>
            ) : null}
          </article>
        </div>
      </section>

    </>
  )
}
