'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cx from 'classnames'
import { motion } from 'framer-motion'

interface Props {
  label: string
  path: string
}

export function NavigationLink({ label, path }: Props) {
  const pathname = usePathname()
  const isActive = pathname === path

  const linkClassnames =
    'uppercase py-4 flex justify-center items-center text-sm font-semibold transform hover:text-yellow-300'

  const activeLinkClassnames =
    'text-yellow-300 after:block after:w-6 after:h-6 after:bg-yellow-100 after:absolute after:-z-10 after:rounded-full after:blur-xl after:opacity-30'

  return (
    <li>
      <Link
        className={cx(linkClassnames, {
          [activeLinkClassnames]: isActive
        })}
        href={path}
      >
        {isActive && (
          <motion.span
            layoutId="underline"
            className="absolute left-0 top-full block h-[2px] rounded w-full bg-yellow-300"
          />
        )}
        {label}
      </Link>
    </li>
  )
}
