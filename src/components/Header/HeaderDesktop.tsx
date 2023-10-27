import Link from 'next/link'

import { Logo } from '../Logo/Logo'
import { NavigationDesktop } from '../Navigation/NavigationDesktop'
import { ROUTES } from '../Navigation/consts'
import { SoundToggle } from '../SoundToggle/SoundToggle'

export function HeaderDesktop() {
  return (
    <div className="hidden lg:block">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="w-32">
          <Link href={ROUTES.home}>
            <Logo />
          </Link>
        </div>
        <NavigationDesktop />
        <SoundToggle />
      </div>
    </div>
  )
}
