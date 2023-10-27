'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'

import { Logo } from '../Logo/Logo'
import { ROUTES } from '../Navigation/consts'
import { SoundToggle } from '../SoundToggle/SoundToggle'
import { IconButton } from '../IconButton/IconButton'
import { IconMobileMenu } from '../Icons/IconMobileMenu'
import { NavigationMobile } from '../Navigation/NavigationMobile'

export function HeaderMobile() {
  const [isMenuNavigationOpen, setIsMenuNavigationOpen] = useState(false)

  const handleOpenMenuNavigation = () => setIsMenuNavigationOpen(true)
  const handleCloseMenuNavigation = () => setIsMenuNavigationOpen(false)

  return (
    <div>
      <div className="lg:hidden">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="w-24">
            <Link href={ROUTES.home}>
              <Logo />
            </Link>
          </div>
          <div className="flex gap-4">
            <SoundToggle />
            <IconButton onClick={handleOpenMenuNavigation}>
              <IconMobileMenu />
            </IconButton>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuNavigationOpen && <NavigationMobile onClose={handleCloseMenuNavigation} />}
      </AnimatePresence>
    </div>
  )
}
