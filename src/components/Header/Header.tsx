import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import { ROUTES } from '../Navigation/consts'
import { Sound } from '../Sound/Sound'

export function Header() {
  return (
    <header className="sticky z-50 bg-slate-800 mb-16 bg-opacity-5 backdrop-blur-3xl top-0 border-b-2 border-b-yellow-300">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="w-32">
          <Logo />
        </div>
        <Navigation />
        <Sound />
      </div>
    </header>
  )
}
