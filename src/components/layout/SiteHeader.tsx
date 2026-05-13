import { NavLink } from 'react-router-dom'
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

  return (
    <header className="site-header">
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
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
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
          <a className="button button-primary header-cta" href="mailto:stech_sppj@yahoo.com">
            Request Quote
          </a>
        </div>
      </div>
    </header>
  )
}
