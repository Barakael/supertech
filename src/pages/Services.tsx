import { PageHero } from '../components/sections/PageHero'
import { SmartImage } from '../components/sections/SmartImage'
import { siteContent } from '../content/siteContent'

export function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Business Solutions"
        subtitle="We deliver end-to-end turnkey services with quality execution that meets standards and specifications."
        imageSrc={siteContent.heroSlides[0].image}
        imageAlt="Electrical and telecom service delivery"
      />

      <section className="section">
        <div className="container stack">
          <p className="eyebrow">Service Standards</p>
          <h2 className="section-title">
            End-to-end business solutions with dependable execution
          </h2>
          <p>
            At SuperTech, we have offered value-driven electrical,
            telecommunications and ICT services across Tanzania for nearly two
            decades. Our teams are trained, experienced and focused on safe,
            reliable delivery.
          </p>
          <p>
            <strong>Business Motto:</strong> {siteContent.motto}
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid-two">
          {siteContent.services.map((service) => (
            <article key={service.title} className="card premium-card service-card">
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
      </section>

      <section className="section">
        <div className="container">
          <article className="card premium-card">
            <p className="card-kicker">Products and Supplies</p>
            <h2>Equipment and materials we supply</h2>
            <ul className="list">
              {siteContent.productsSupplied.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
