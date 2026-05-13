import { Outlet } from 'react-router-dom'
import { RouteMeta } from './RouteMeta'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function MainLayout() {
  return (
    <div className="site-shell">
      <RouteMeta />
      <SiteHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
