import { CardsSection } from '@/components/CardsSection/CardsSection'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'

import { getResource } from '@/services/getResource'

export default async function Vehicles() {
  const { results } = await getResource({ entity: 'vehicles' })

  const vehicles = results.map(({ id, name, imageUrl, entity }) => ({
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
            <CardsSection title="All vehicles" cards={vehicles} />
          </div>
        </div>
      </main>
    </PageWrapper>
  )
}
