import { PageHero } from '../components/sections/PageHero'
import { PartnersStrip } from '../components/sections/PartnersStrip'
import { siteContent } from '../content/siteContent'

export function AboutPage() {
  return (
    <>
      <PageHero
        title="About SuperTech"
        subtitle={siteContent.aboutSummary[0]}
        imageSrc={siteContent.heroSlides[1].image}
        imageAlt="SuperTech team at work"
      />

      <section className="section">
        <div className="container stack">
          <p className="eyebrow">Who We Are</p>
          <h2 className="section-title">A trusted engineering partner since 2006</h2>
          {siteContent.aboutSummary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid-three">
          <article className="card premium-card">
            <p className="card-kicker">Vision</p>
            <h2>Our Vision</h2>
            <p>{siteContent.vision}</p>
          </article>
          <article className="card premium-card">
            <p className="card-kicker">Mission</p>
            <h2>Our Mission</h2>
            <p>{siteContent.mission}</p>
          </article>
          <article className="card premium-card">
            <p className="card-kicker">Clients</p>
            <h2>Our Clients</h2>
            <ul className="list">
              {siteContent.clients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card premium-card">
            <p className="card-kicker">Company Credentials</p>
            <h2>Legal and registration profile</h2>
            <ul className="list">
              {siteContent.companyFacts.map((fact) => (
                <li key={fact.label}>
                  <strong>{fact.label}:</strong> {fact.value}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <PartnersStrip />
    </>
  )
}
