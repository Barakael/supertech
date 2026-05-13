import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/siteContent'
import { SmartImage } from './SmartImage'

const intervalMs = 5500

export function HeroSlider() {
  const slides = siteContent.heroSlides
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [slides.length])

  const activeSlide = slides[activeIndex]

  const moveToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const moveToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="hero-slider" aria-label="Featured services slider">
      <div className="container hero-slider-shell">
        <div className="hero-slider-content">
          <p className="eyebrow">Engineering Excellence</p>
          <h1>Premium Technical Solutions for Modern Infrastructure</h1>
          <p className="lead">
            {activeSlide.subtitle} SuperTech delivers professional electrical,
            telecommunications and ICT services across Tanzania.
          </p>
          <div className="button-row">
            <Link to="/services" className="button button-primary">
              View Services
            </Link>
            <Link to="/projects" className="button button-secondary">
              View Projects
            </Link>
          </div>
          <div className="hero-slider-controls">
            <button
              type="button"
              className="slider-arrow"
              onClick={moveToPrevious}
              aria-label="Show previous slide"
            >
              &#8592;
            </button>
            <button
              type="button"
              className="slider-arrow"
              onClick={moveToNext}
              aria-label="Show next slide"
            >
              &#8594;
            </button>
            <div className="slider-dots" role="tablist" aria-label="Slide selector">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Show slide ${index + 1}: ${slide.title}`}
                  className={index === activeIndex ? 'slider-dot active' : 'slider-dot'}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-slider-media">
          <SmartImage
            src={activeSlide.image}
            alt={activeSlide.title}
            className="hero-image"
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero-slide-caption">
            <p className="hero-slide-title">{activeSlide.title}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
