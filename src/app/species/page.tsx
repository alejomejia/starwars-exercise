import { CardsSection } from '@/components/CardsSection/CardsSection'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'

import { getParsedResource } from '@/utils/getParsedResource'

export default async function Species() {
  const species = await getParsedResource({ entity: 'species' })

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
