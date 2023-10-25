import { ROUTES } from '../Navigation/consts'
import { LinkButton } from '../LinkButton/LinkButton'
import { CardsGrid } from '../CardsGrid/CardsGrid'
import { CardProps } from '../Card/Card'

interface Props {
  title: string
  cards: CardProps[]
}

export function CardsSection({ title, cards }: Props) {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="px-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-slate-50">{title} ⬇️</h2>
          <LinkButton href={ROUTES.people}>View more</LinkButton>
        </div>
        <CardsGrid cards={cards} />
      </div>
    </section>
  )
}
