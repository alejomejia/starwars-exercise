import { CardsSection } from '@/components/CardsSection/CardsSection'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'

import { getParsedResource } from '@/utils/getParsedResource'

export default async function Vehicles() {
  const vehicles = await getParsedResource({ entity: 'vehicles' })

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
