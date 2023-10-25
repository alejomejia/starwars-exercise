import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CardsSection } from '@/components/CardsSection/CardsSection'
import { ROUTES } from '@/components/Navigation/consts'

import { usePeople } from '@/hooks/usePeople'
import { useFilms } from '@/hooks/useFilms'
import { useStarships } from '@/hooks/useStarships'

const MAX_CARDS_PER_SECTION = 4

export default async function Home() {
  const people = (await usePeople(MAX_CARDS_PER_SECTION)).map(({ id, name }) => ({
    id,
    title: name,
    context: 'people'
  }))

  const films = (await useFilms(MAX_CARDS_PER_SECTION)).map(({ id, title }) => ({ id, title, context: 'films' }))

  const starships = (await useStarships(MAX_CARDS_PER_SECTION)).map(({ id, name }) => ({
    id,
    title: name,
    context: 'starships'
  }))

  return (
    <PageWrapper>
      <main className="min-h-screen">
        <div className="flex flex-col gap-20">
          <CardsSection title="Most viewed people" viewMoreRoute={ROUTES.people} cards={people} />
          <CardsSection title="Most viewed films" viewMoreRoute={ROUTES.films} cards={films} />
          <CardsSection title="Most viewed starships" viewMoreRoute={ROUTES.starships} cards={starships} />
        </div>
      </main>
    </PageWrapper>
  )
}
