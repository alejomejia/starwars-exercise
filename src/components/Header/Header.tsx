import { HeaderDesktop } from './HeaderDesktop'
import { HeaderMobile } from './HeaderMobile'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-800 bg-opacity-5 backdrop-blur-3xl border-b-2 border-b-yellow-300">
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  )
}
