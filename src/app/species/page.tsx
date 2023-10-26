import { CardsSection } from '@/components/CardsSection/CardsSection'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'

import { getResource } from '@/services/getResource'

export default async function Species() {
  const { results } = await getResource({ entity: 'species' })

  const species = results.map(({ id, name, imageUrl, entity }) => ({
    id,
    title: name,
    imageUrl,
    entity
  }))

  return (
    <PageWrapper>
      <main className="min-h-screen">
        <div className="pb-20">
          <div className="flex flex-col gap-20">
            <CardsSection title="All species" cards={species} />
          </div>
        </div>
      </main>
    </PageWrapper>
  )
}
