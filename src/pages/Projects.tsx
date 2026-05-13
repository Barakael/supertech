import { PageHero } from '../components/sections/PageHero'
import { siteContent } from '../content/siteContent'

export function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Selected project categories delivered with quality, safety and long-term reliability."
        imageSrc={siteContent.heroSlides[2].image}
        imageAlt="SuperTech project fieldwork"
      />

      <section className="section">
        <div className="container stack">
          <article className="card premium-card">
            <p className="card-kicker">Delivery Portfolio</p>
            <h2>Selected project references</h2>
            <p>
              Our portfolio includes structured cabling, fiber deployments,
              automation equipment supply, access systems and telecom integration
              across utilities, banking and public institutions.
            </p>
          </article>
          <div className="grid-two">
            {siteContent.projectsPortfolio.map((project) => (
              <article key={`${project.title}-${project.client}`} className="card premium-card">
                <p className="card-kicker">{project.client}</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
          <article className="card premium-card accent-card">
            <p className="card-kicker">Delivery Philosophy</p>
            <h2>Execution approach</h2>
            <p>{siteContent.mission}</p>
            <p>
              Contact us to request a targeted portfolio for your sector, scope
              and implementation timeline.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
