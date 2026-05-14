import { useEffect, useState } from 'react'
import { siteContent } from '../../content/siteContent'
import { SmartImage } from './SmartImage'

const intervalMs = 5000
const desktopBreakpoint = 1080
const tabletBreakpoint = 740

export function ProjectsShowcaseSlider() {
  const projects = siteContent.projectsPortfolio.slice(0, 8)
  const [cardsPerView, setCardsPerView] = useState(4)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= tabletBreakpoint) {
        setCardsPerView(1)
        return
      }

      if (window.innerWidth <= desktopBreakpoint) {
        setCardsPerView(2)
        return
      }

      setCardsPerView(4)
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, projects.length - cardsPerView)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [maxIndex])

  useEffect(() => {
    setActiveIndex((prev) => (prev > maxIndex ? maxIndex : prev))
  }, [maxIndex])

  const movePrevious = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const moveNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  return (
    <section className="section section-alt home-projects-slider-section">
      <div className="container home-projects-slider-shell">
        <div className="home-projects-slider-head">
          <p className="eyebrow">Featured Projects</p>
          <h2 className="section-title">Projects delivered with practical engineering impact</h2>
        </div>

        <div className="home-projects-viewport">
          <div
            className="home-projects-track"
            style={{ transform: `translateX(-${(activeIndex * 100) / cardsPerView}%)` }}
          >
            {projects.map((project) => (
              <article key={`${project.title}-${project.client}`} className="home-project-slide-card">
                <SmartImage
                  src={project.image}
                  alt={project.title}
                  className="home-project-slide-image"
                />
                <div className="home-project-slide-overlay">
                  <p className="home-project-slide-client">{project.client}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="home-project-slider-controls">
          <button
            type="button"
            className="slider-arrow"
            onClick={movePrevious}
            aria-label="Previous project"
          >
            &#8592;
          </button>
          <div className="slider-dots" role="tablist" aria-label="Project selector">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={`project-page-${index + 1}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show project set ${index + 1}`}
                className={index === activeIndex ? 'slider-dot active' : 'slider-dot'}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="slider-arrow"
            onClick={moveNext}
            aria-label="Next project"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  )
}
