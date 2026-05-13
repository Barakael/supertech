import { siteContent } from '../../content/siteContent'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-block">
            <p className="footer-title">{siteContent.companyName}</p>
            <p>{siteContent.tagline}</p>
          </div>
          <div className="footer-block">
            <p className="footer-title">Contact</p>
            <p>{siteContent.contact.phone}</p>
            <p>{siteContent.contact.email}</p>
          </div>
          <div className="footer-block">
            <p className="footer-title">Address</p>
            <p>{siteContent.contact.location}</p>
          </div>
        </div>
        <p className="footer-note">
          &copy; {new Date().getFullYear()} {siteContent.companyName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
