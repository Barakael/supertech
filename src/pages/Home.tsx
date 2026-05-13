import { Link } from 'react-router-dom'
import { HeroSlider } from '../components/sections/HeroSlider'
import { PartnersStrip } from '../components/sections/PartnersStrip'
import { siteContent } from '../content/siteContent'

export function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="section">
        <div className="container kpi-grid">
          {siteContent.kpis.map((item) => (
            <article key={item.label} className="kpi-card">
              <p className="kpi-value">{item.value}</p>
              <p className="kpi-label">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid-three">
          <article className="card premium-card">
            <p className="card-kicker">Company Profile</p>
            <h2>Who We Are</h2>
            <p>{siteContent.whoWeAre}</p>
            <Link to="/about" className="inline-link">
              Read full story
            </Link>
          </article>
          <article className="card premium-card">
            <p className="card-kicker">Our Value</p>
            <h2>What We Deliver</h2>
            <ul className="list">
              {siteContent.whatWeDo.slice(0, 6).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link to="/services" className="inline-link">
              Explore service lines
            </Link>
          </article>
          <article className="card premium-card accent-card">
            <p className="card-kicker">Partner Trust</p>
            <h2>Our Clients</h2>
            <ul className="list light-list">
              {siteContent.clients.slice(0, 5).map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
            <Link to="/about" className="inline-link light-link">
              View full client list
            </Link>
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
