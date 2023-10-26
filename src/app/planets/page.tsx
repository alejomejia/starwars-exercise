import { CardsSection } from '@/components/CardsSection/CardsSection'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'

import { getParsedResource } from '@/utils/getParsedResource'

export default async function Planets() {
  const planets = await getParsedResource({ entity: 'planets' })

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
