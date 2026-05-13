import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'SuperTech Limited | Home',
    description:
      'Professional electrical, ICT and telecommunications services in Tanzania.',
  },
  '/about': {
    title: 'SuperTech Limited | About',
    description:
      'Learn about SuperTech history, mission, vision and client portfolio.',
  },
  '/services': {
    title: 'SuperTech Limited | Services and Projects',
    description:
      'Explore SuperTech integrated services and project portfolio across electrical, ICT and telecommunications delivery.',
  },
  '/projects': {
    title: 'SuperTech Limited | Services and Projects',
    description:
      'Projects are now included in the Services page with combined delivery highlights and references.',
  },
  '/contact': {
    title: 'SuperTech Limited | Contact',
    description:
      'Contact SuperTech for consultations, project inquiries and support.',
  },
}

export function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = routeMeta[pathname] ?? routeMeta['/']
    document.title = meta.title

    const descriptionTag = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null

    if (descriptionTag) {
      descriptionTag.content = meta.description
    } else {
      const tag = document.createElement('meta')
      tag.name = 'description'
      tag.content = meta.description
      document.head.appendChild(tag)
    }
  }, [pathname])

  return null
}
