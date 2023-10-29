import { ResourceString } from '@/lib/types'
import { LinkButton } from '../LinkButton/LinkButton'
import { IconArrow } from '../Icons/IconArrow'

interface Props {
  resource: ResourceString
  resourceTotal: number
  page: string
}
const CARDS_PER_PAGE = 10

export function Pagination({ resource, resourceTotal, page }: Props) {
  const MAX_PAGE = String(Math.ceil(resourceTotal / CARDS_PER_PAGE))

  const previousPageLink = page === '1' ? null : `/${resource}?page=${Number(page) - 1}`
  const nextPageLink = page === MAX_PAGE ? null : `/${resource}?page=${Number(page) + 1}`

  return (
    <div className="mt-12 mb-6 sm:mb-0">
      <div className="flex flex-col gap-8 items-center sm:flex-row justify-between">
        <div className="w-44">
          <LinkButton href={previousPageLink} startIcon={<IconArrow />}>
            Previous Page
          </LinkButton>
        </div>
        <div className="w-44">
          <LinkButton href={nextPageLink} endIcon={<IconArrow className="rotate-180" />}>
            Next Page
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
