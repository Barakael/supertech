import { SmartImage } from '../components/sections/SmartImage'
import { siteContent } from '../content/siteContent'

export function ServicesPage() {
  const electricalService = siteContent.services[0]
  const telecomService = siteContent.services[1]
  const ictService = siteContent.services[2]
  const supplyService = siteContent.services[3]

  const combinedService = {
    title: 'ICT Services and Equipment Supply',
    description:
      'Integrated ICT systems and dependable equipment supply delivered under one coordinated implementation model.',
    image: ictService.image,
    bullets: [...ictService.bullets, ...supplyService.bullets],
  }

  const projectCards = siteContent.projectsPortfolio.slice(0, 8)

  return (
    <>
      <section className="section solutions-hero solutions-hero-compact">
        <div className="container">
          <div className="solutions-hero-copy">
            <p className="eyebrow">Services and Projects</p>
            <h1>Premium delivery for electrical, telecom and ICT infrastructure.</h1>
            <p className="lead">
              We execute mission-critical systems with quality, speed and standards-first
              implementation.
            </p>
            <div className="button-row solutions-hero-actions">
              <a className="button button-primary" href="/contact">
                Request Consultation
              </a>
              <a className="button button-secondary" href="#project-showcase">
                Explore Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="solutions-section-head">
            <p className="eyebrow">Core Capabilities</p>
            <h2 className="section-title">Three focused service pillars</h2>
          </div>
          <div className="solutions-services-grid">
            {[electricalService, telecomService, combinedService].map((service) => (
              <article key={service.title} className="card premium-card service-card solutions-service-card">
                <SmartImage
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <p className="card-kicker">Core Service</p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="list">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container solutions-kpi-band">
          {siteContent.kpis.map((kpi) => (
            <article key={kpi.label} className="kpi-card solutions-kpi-card">
              <p className="kpi-value">{kpi.value}</p>
              <p className="kpi-label">{kpi.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="project-showcase" className="section section-alt">
        <div className="container">
          <div className="solutions-section-head">
            <p className="eyebrow">Selected Projects</p>
            <h2 className="section-title">Project portfolio snapshots</h2>
          </div>
          <div className="solutions-projects-grid">
            {projectCards.map((project) => (
              <article
                key={`${project.title}-${project.client}`}
                className="card premium-card solutions-project-card"
              >
                <SmartImage
                  src={project.image}
                  alt={`${project.title} project`}
                  className="solutions-project-image"
                />
                <p className="card-kicker">{project.client}</p>
                <h3>{project.title}</h3>
                <p className="solutions-project-summary">{project.summary}</p>
              </article>
            ))}
          </div>
          <div className="solutions-view-more-wrap">
            <button type="button" className="button button-secondary solutions-view-more">
              View More
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-two solutions-grid">
          <article className="card premium-card">
            <p className="card-kicker">Products and Supplies</p>
            <h2>Equipment and materials we provide</h2>
            <ul className="list">
              {siteContent.productsSupplied.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card premium-card accent-card solutions-cta-card">
            <p className="card-kicker">Ready to Engage</p>
            <h2>Plan your next infrastructure rollout with SuperTech</h2>
            <p>
              Share your scope, timeline and technical requirements. We will provide a practical,
              standards-driven delivery approach tailored to your environment.
            </p>
            <a className="button button-secondary" href="/contact">
              Talk to Our Team
            </a>
          </article>
        </div>
      </section>
    </>
  )
}
