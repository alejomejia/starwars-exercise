'use client'

import { usePathname } from 'next/navigation'
import cx from 'classnames'

interface Props {
  label: string
  path: string
}

export function NavigationLink({ label, path }: Props) {
  const pathname = usePathname()

  const linkClassnames =
    'uppercase py-4 flex justify-center items-center text-sm font-semibold transform hover:text-yellow-300 hover:-translate-y-0.5 transition-all duration-200'

  const activeLinkClassnames =
    'text-yellow-300 after:block after:w-6 after:h-6 after:bg-yellow-100 after:absolute after:-z-10 after:rounded-full after:blur-xl after:opacity-50'

  return (
    <li>
      <a
        className={cx(linkClassnames, {
          [activeLinkClassnames]: path === pathname
        })}
        href={path}
      >
        {label}
      </a>
    </li>
  )
}
