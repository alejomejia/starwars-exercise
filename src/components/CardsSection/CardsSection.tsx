import { ParsedResources } from '@/lib/types'

import { LinkButton } from '../LinkButton/LinkButton'
import { CardsGrid } from '../CardsGrid/CardsGrid'

interface Props<T extends ParsedResources> {
  title: string
  viewMoreRoute?: string
  cards: T
}

export function CardsSection({ title, viewMoreRoute, cards }: Props<ParsedResources>) {
  return (
    <section>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:items-center mb-8">
        <h2 className="capitalize text-xl md:text-3xl font-semibold text-slate-50 border-b-2 border-b-yellow-300">
          {title}
        </h2>
        {viewMoreRoute && <LinkButton href={viewMoreRoute}>View more</LinkButton>}
      </div>
      <CardsGrid cards={cards} />
    </section>
  )
}
