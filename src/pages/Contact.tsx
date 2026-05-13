import { PageHero } from '../components/sections/PageHero'
import { siteContent } from '../content/siteContent'

export function ContactPage() {
  const { contact } = siteContent

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Talk to our team for consultations, project inquiries, and support."
        imageSrc={contact.mapImage}
        imageAlt="Location map"
      />

      <section className="section">
        <div className="container grid-two">
          <article className="card premium-card">
            <p className="card-kicker">Office Details</p>
            <h2>Office</h2>
            <p>{siteContent.companyName}</p>
            <p>{contact.mailingAddress}</p>
            <p>{contact.location}</p>
          </article>
          <article className="card premium-card accent-card">
            <p className="card-kicker">Reach Our Team</p>
            <h2>Reach Us</h2>
            <p>{contact.phone}</p>
            <p>
              <a className="inline-link light-link" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
