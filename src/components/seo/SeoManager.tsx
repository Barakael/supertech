import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type RouteSeo = {
  title: string
  description: string
}

const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://supertechltd.co.tz').replace(/\/$/, '')

const DEFAULT_SEO: RouteSeo = {
  title: 'SuperTech Limited | Electrical, ICT & Telecommunications',
  description:
    'SuperTech Limited delivers electrical, ICT, and telecommunications solutions across Tanzania with standards-first execution.',
}

const ROUTE_SEO: Record<string, RouteSeo> = {
  '/': DEFAULT_SEO,
  '/about': {
    title: 'About SuperTech Limited | Trusted Since 2006',
    description:
      'Learn about SuperTech Limited, a Tanzanian engineering contractor delivering electrical, ICT, and telecom solutions since 2006.',
  },
  '/services': {
    title: 'Services | Electrical, Telecom & ICT Solutions',
    description:
      'Explore SuperTech services including electrical installations, telecom systems, ICT integration, and equipment supply.',
  },
  '/contact': {
    title: 'Contact SuperTech Limited',
    description:
      'Contact SuperTech Limited for project consultations, electrical and telecom services, and ICT support in Tanzania.',
  },
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let meta = document.querySelector(`meta[${attribute}="${key}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, key)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function upsertCanonical(url: string): void {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

export function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = ROUTE_SEO[pathname] ?? DEFAULT_SEO
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`

    document.title = seo.title
    upsertCanonical(canonicalUrl)
    upsertMeta('name', 'description', seo.description)
    upsertMeta('name', 'robots', 'index, follow')

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', 'SuperTech Limited')
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:image', `${SITE_URL}/favicon.svg`)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', `${SITE_URL}/favicon.svg`)
  }, [pathname])

  return null
}
