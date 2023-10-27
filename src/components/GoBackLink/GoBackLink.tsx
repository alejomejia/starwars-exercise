import { LinkButton } from '../LinkButton/LinkButton'
import { IconArrow } from '../Icons/IconArrow'

interface Props {
  href: string
  children: React.ReactNode
}

export function GoBackLink({ href, children }: Props) {
  return (
    <LinkButton href={href} startIcon={<IconArrow />}>
      {children}
    </LinkButton>
  )
}
