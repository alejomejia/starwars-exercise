import { CardsSection } from '@/components/CardsSection/CardsSection'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'

import { getResource } from '@/services/getResource'

export default async function Planets() {
  const { results } = await getResource({ entity: 'planets' })

  const planets = results.map(({ id, name, imageUrl, entity }) => ({
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
            <CardsSection title="All planets" cards={planets} />
          </div>
        </div>
      </main>
    </PageWrapper>
  )
}
