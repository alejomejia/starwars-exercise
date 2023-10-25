import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CardsSection } from '@/components/CardsSection/CardsSection'
import { ROUTES } from '@/components/Navigation/consts'

import { usePeople } from '@/hooks/usePeople'
import { useFilms } from '@/hooks/useFilms'
import { useStarships } from '@/hooks/useStarships'
import { useVehicles } from '@/hooks/useVehicles'
import { useSpecies } from '@/hooks/useSpecies'
import { usePlanets } from '@/hooks/usePlanets'

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

  const vehicles = (await useVehicles(MAX_CARDS_PER_SECTION)).map(({ id, name }) => ({
    id,
    title: name,
    context: 'vehicles'
  }))

  const species = (await useSpecies(MAX_CARDS_PER_SECTION)).map(({ id, name }) => ({
    id,
    title: name,
    context: 'species'
  }))

  const planets = (await usePlanets(MAX_CARDS_PER_SECTION)).map(({ id, name }) => ({
    id,
    title: name,
    context: 'planets'
  }))

  return (
    <PageWrapper>
      <main className="min-h-screen">
        <div className="pb-20">
          <div className="flex flex-col gap-20">
            <CardsSection title="Most viewed people" viewMoreRoute={ROUTES.people} cards={people} />
            <CardsSection title="Most viewed films" viewMoreRoute={ROUTES.films} cards={films} />
            <CardsSection title="Most viewed starships" viewMoreRoute={ROUTES.starships} cards={starships} />
            <CardsSection title="Most viewed vehicles" viewMoreRoute={ROUTES.vehicles} cards={vehicles} />
            <CardsSection title="Most viewed species" viewMoreRoute={ROUTES.species} cards={species} />
            <CardsSection title="Most viewed planets" viewMoreRoute={ROUTES.planets} cards={planets} />
          </div>
        </div>
      </main>
    </PageWrapper>
  )
}
