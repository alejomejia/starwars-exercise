import { IconProps } from './types'

export function IconArrow({ color }: IconProps) {
  return (
    <svg fill={color ?? 'currentColor'} viewBox="0 0 64 64">
      <path d="M56 29.8H13.3l17-17.3c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-20.7 21c-.9.9-.9 2.3 0 3.2l20.7 21c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2L13.4 34.3H56c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z" />
    </svg>
  )
}
