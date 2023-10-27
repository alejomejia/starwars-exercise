import { NavigationLink } from './NavigationLink'
import { ROUTES, NAVIGATION_LINKS } from './consts'

export function NavigationDesktop() {
  return (
    <nav>
      <ul className="flex gap-8 items-center">
        {NAVIGATION_LINKS.map(([label, path]) => (
          <NavigationLink key={label} label={label} path={path} />
        ))}
      </ul>
    </nav>
  )
}
