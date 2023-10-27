import { IconProps } from './types'

export function IconMobileMenu({ color }: IconProps) {
  return (
    <svg fill={color ?? 'currentColor'} viewBox="0 0 64 64">
      <path d="M60 29.8H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3zM60 46.8H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM4 17.2h56c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3z" />
    </svg>
  )
}
