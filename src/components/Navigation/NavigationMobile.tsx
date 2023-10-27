'use client'

import { motion } from 'framer-motion'

import { IconButton } from '../IconButton/IconButton'
import { IconClose } from '../Icons/IconClose'
import { NavigationLink } from './NavigationLink'
import { NAVIGATION_LINKS } from './consts'
import { variantLinks, variantNavigationMobile } from './animation'

interface Props {
  onClose: () => void
}

export function NavigationMobile({ onClose }: Props) {
  return (
    <motion.div variants={variantNavigationMobile} initial="initial" animate="animate" exit="initial">
      <div className="fixed inset-0 min-h-screen z-[100]">
        <div className="w-96 h-96 bg-slate-500 absolute top-48 left-2/3 transform -translate-x-72 translate-y-6 blur-2xl rounded-full opacity-20"></div>
        <div className="bg-slate-950 min-h-full grid place-items-center">
          <div className="absolute right-0 bottom-0 p-8">
            <div className="transform rotate-0 transition duration-200 hover:rotate-90">
              <IconButton className="w-16 h-16 p-4" onClick={onClose}>
                <IconClose />
              </IconButton>
            </div>
          </div>
          <nav>
            <ul className="flex flex-col p-12 gap-12 justify-center">
              {NAVIGATION_LINKS.map(([label, path], index) => (
                <motion.div key={index} variants={variantLinks} initial="initial" animate="animate" custom={index}>
                  <NavigationLink key={label} label={label} path={path} onMobileClick={onClose} />
                </motion.div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.div>
  )
}
