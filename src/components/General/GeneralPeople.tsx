'use client'

import { useMostViewedResources } from '@/hooks/useMostViewedResources'

import { CardsSection } from '../CardsSection/CardsSection'

interface Props {
  people: any // temporal
}

export function GeneralPeople({ people }: Props) {
  const { people: peopleSortedByViews } = useMostViewedResources({ people })

  return (
    <main className="min-h-screen">
      <div className="pb-20">
        <div className="flex flex-col gap-20">
          <CardsSection title="All people" cards={peopleSortedByViews} />
        </div>
      </div>
    </main>
  )
}
