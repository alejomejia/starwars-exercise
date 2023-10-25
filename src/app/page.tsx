import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CardsSection } from '@/components/CardsSection/CardsSection'
import { ROUTES } from '@/components/Navigation/consts'

import { getResource } from '@/services/getResource'

const MAX_CARDS_PER_SECTION = 4

export default async function Home() {
  const people = (await getResource({ entity: 'people', count: MAX_CARDS_PER_SECTION })).results.map(
    ({ id, name, imageUrl, entity }) => ({
      id,
      title: name,
      imageUrl,
      entity
    })
  )

  const films = (await getResource({ entity: 'films', count: MAX_CARDS_PER_SECTION })).results.map(
    ({ id, name, imageUrl, entity }) => ({
      id,
      title: name,
      imageUrl,
      entity
    })
  )

  const starships = (await getResource({ entity: 'starships', count: MAX_CARDS_PER_SECTION })).results.map(
    ({ id, name, imageUrl, entity }) => ({
      id,
      title: name,
      imageUrl,
      entity
    })
  )

  const vehicles = (await getResource({ entity: 'vehicles', count: MAX_CARDS_PER_SECTION })).results.map(
    ({ id, name, imageUrl, entity }) => ({
      id,
      title: name,
      imageUrl,
      entity
    })
  )

  const species = (await getResource({ entity: 'species', count: MAX_CARDS_PER_SECTION })).results.map(
    ({ id, name, imageUrl, entity }) => ({
      id,
      title: name,
      imageUrl,
      entity
    })
  )

  const planets = (await getResource({ entity: 'planets', count: MAX_CARDS_PER_SECTION })).results.map(
    ({ id, name, imageUrl, entity }) => ({
      id,
      title: name,
      imageUrl,
      entity
    })
  )

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
