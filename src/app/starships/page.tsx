import { CardsSection } from '@/components/CardsSection/CardsSection'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'

import { getParsedResource } from '@/utils/getParsedResource'

export default async function Starships() {
  const starships = await getParsedResource({ entity: 'starships' })

  return (
    <PageWrapper>
      <main className="min-h-screen">
        <div className="pb-20">
          <div className="flex flex-col gap-20">
            <CardsSection title="All starships" cards={starships} />
          </div>
        </div>
      </main>
    </PageWrapper>
  )
}
