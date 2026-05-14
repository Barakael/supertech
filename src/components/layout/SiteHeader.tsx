import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SmartImage } from '../sections/SmartImage'
import { siteContent } from '../../content/siteContent'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const quickDial = '+255784777711'
  const { topBar } = siteContent
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className={`site-header ${menuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="top-info-bar">
        <div className="container top-info-inner">
          <p>{topBar.descriptor}</p>
          <p>{topBar.location}</p>
          <p>
            {topBar.contact} |{' '}
            <a className="top-info-link" href={`mailto:${topBar.email}`}>
              {topBar.email}
            </a>
          </p>
        </div>
      </div>
      <div className="container header-inner">
        <div className="brand-block">
          <SmartImage
            src="/assets/branding/logo.jpg"
            alt={`${siteContent.companyName} logo`}
            className="brand-logo"
          />
          <div>
            <p className="brand-name">{siteContent.companyName}</p>
            <p className="brand-tagline">{siteContent.tagline}</p>
          </div>
        </div>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="main-nav" className="site-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? 'nav-link nav-link-active' : 'nav-link'
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <a className="header-chip" href={`tel:${quickDial}`}>
            Call Us
          </a>
          <a
            className="button button-primary header-cta"
            href="mailto:stech_sppj@yahoo.com"
            onClick={closeMenu}
          >
            Request Quote
          </a>
        </div>
      </div>
    </header>
  )
}
