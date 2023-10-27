'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion } from 'framer-motion'

interface Props {
  label: string
  path: string
  onMobileClick?: () => void
}

export function NavigationLink({ label, path, onMobileClick }: Props) {
  const pathname = usePathname()
  const isActive = pathname === path

  const linkClassnames =
    'uppercase lg:py-4 flex justify-center items-center text-xl lg:text-sm font-semibold transform transition-color duration-200 hover:text-yellow-300'

  const activeLinkClassnames =
    'text-yellow-300 after:block after:w-6 after:h-6 after:bg-yellow-100 after:absolute after:-z-10 after:rounded-full after:blur-xl after:opacity-30'

  return (
    <li>
      <Link
        href={path}
        className={clsx(linkClassnames, {
          [activeLinkClassnames]: isActive
        })}
        onClick={() => onMobileClick?.()}
      >
        {isActive && (
          <motion.span
            layoutId="underline"
            className="absolute left-0 top-full h-[2px] rounded w-full bg-yellow-300 hidden lg:block"
          />
        )}
        {label}
      </Link>
    </li>
  )
}
