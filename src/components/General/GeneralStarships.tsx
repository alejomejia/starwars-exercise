'use client'

import { useMostViewedResources } from '@/hooks/useMostViewedResources'

import { CardsSection } from '../CardsSection/CardsSection'

interface Props {
  starships: any // temporal
}

export function GeneralStarships({ starships }: Props) {
  const { starships: starshipsSortedByViews } = useMostViewedResources({ starships })

  return (
    <main className="min-h-screen">
      <div className="pb-20">
        <div className="flex flex-col gap-20">
          <CardsSection title="All starships" cards={starshipsSortedByViews} />
        </div>
      </div>
    </main>
  )
}
