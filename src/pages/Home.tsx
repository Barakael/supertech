import { Link } from 'react-router-dom'
import { HeroSlider } from '../components/sections/HeroSlider'
import { PartnersStrip } from '../components/sections/PartnersStrip'
import { SmartImage } from '../components/sections/SmartImage'
import { siteContent } from '../content/siteContent'

export function HomePage() {
  const aboutFeatures = [
    {
      title: 'What we do',
      body: siteContent.aboutSummary[2],
    },
    {
      title: 'Why choose us',
      body: siteContent.whoWeAre,
    },
  ]

  const aboutHighlights = siteContent.kpis.slice(0, 3)

  return (
    <>
      <HeroSlider />


      <section className="section section-alt">
        <div className="container home-services-shell">
          <div className="home-services-head">
            <p className="eyebrow">Core Services</p>
            <h2 className="section-title">Four specialized solutions for dependable delivery</h2>
            <p className="lead">
              From power systems and telecom infrastructure to ICT and equipment supply, our
              teams deliver practical engineering outcomes for critical operations.
            </p>
          </div>
          <div className="home-services-grid">
            {siteContent.services.map((service) => (
              <article key={service.title} className="card premium-card home-service-card">
                <div className="home-service-image-wrap">
                  <SmartImage src={service.image} alt={service.title} className="home-service-image" />
                </div>
                <p className="card-kicker">Service Area</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {/* <ul className="list home-service-list">
                  {service.bullets.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul> */}
                <Link to="/services" className="inline-link home-service-link">
                  Explore service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-about-unique">
        <div className="container home-about-unique-grid">
          <article className="home-about-pane home-about-copy-pane">
            <p className="eyebrow">Who We Are</p>
            <h2 className="section-title">A trusted partner for technology solutions and services.</h2>
            <p className="lead">{siteContent.aboutSummary[0]}</p>
            <div className="home-about-feature-list">
              {aboutFeatures.map((item) => (
                <article key={item.title} className="home-about-feature-item">
                  <p className="home-about-feature-title">{item.title}</p>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <div className="button-row home-about-actions">
              <Link to="/about" className="button button-primary">
                Learn More
              </Link>
              <Link to="/contact" className="button button-secondary home-about-contact-link">
                Start Project
              </Link>
            </div>
          </article>

          <article className="home-about-pane home-about-visual-pane">
            <p className="home-about-pill">Digital Operations</p>
            <h3>Operate faster with structured, technology-led delivery.</h3>
            <p className="home-about-visual-copy">
              We help teams move from manual workflows to practical systems that improve visibility,
              coordination and service outcomes.
            </p>
            <div className="home-about-benefits-block">
              <p className="home-about-benefits-title">What this gives your business</p>
              <ul className="home-about-checklist">
                <li>Streamlined operations across teams and sites</li>
                <li>Access to information anywhere, anytime</li>
                <li>Faster response and more dependable service</li>
                <li>Future-ready systems aligned to your growth</li>
              </ul>
            </div>
            <div className="home-about-metric-grid">
              {aboutHighlights.map((item) => (
                <article key={item.label} className="home-about-metric-card">
                  <p className="home-about-metric-value">{item.value}</p>
                  <p className="home-about-metric-label">{item.label}</p>
                </article>
              ))}
            </div>
            <p className="home-about-motto-line">{siteContent.motto}</p>
          </article>
        </div>
      </section>


    
   
      <section className="section">
        <div className="container statement-banner">
          <div>
            <p className="eyebrow">Business Motto</p>
            <h2>{siteContent.motto}</h2>
            <p className="lead">
              We combine practical engineering experience with dependable project
              delivery that meets your technical and operational goals.
            </p>
          </div>
          <Link to="/contact" className="button button-secondary">
            Start Your Project
          </Link>
        </div>
      </section>
      
      <PartnersStrip />
    </>
  )
}
