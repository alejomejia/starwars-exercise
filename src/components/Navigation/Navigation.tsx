import { NavigationLink } from './NavigationLink'
import { ROUTES } from './consts'

export function Navigation() {
  const links = Object.entries(ROUTES)

  return (
    <nav>
      <ul className="flex gap-8 items-center">
        {links.map(([label, path]) => (
          <NavigationLink key={label} label={label} path={path} />
        ))}
      </ul>
    </nav>
  )
}
