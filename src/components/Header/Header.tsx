import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import { ROUTES } from '../Navigation/consts'
import { Sound } from '../Sound/Sound'

export function Header() {
  return (
    <header className="sticky z-50 bg-slate-800 mb-16 bg-opacity-5 backdrop-blur-3xl top-0">
      <div className="px-6 py-4 flex justify-between items-center">
        <a className="w-32" href={ROUTES.home}>
          <Logo />
        </a>
        <Navigation />
        <Sound />
      </div>
    </header>
  )
}
