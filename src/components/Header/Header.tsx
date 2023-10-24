import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import { Sound } from '../Sound/Sound'

export function Header() {
  return (
    <header className="relative z-10 bg-slate-800 bg-opacity-5 backdrop-blur-3xl">
      <div className="px-6 py-4 flex justify-between items-center">
        <a className="w-32" href="/">
          <Logo />
        </a>
        <Navigation />
        <Sound />
      </div>
    </header>
  )
}
