'use client'

import { useMostViewedResources } from '@/hooks/useMostViewedResources'

import { CardsSection } from '../CardsSection/CardsSection'

interface Props {
  planets: any // temporal
}

export function GeneralPlanets({ planets }: Props) {
  const { planets: planetsSortedByViews } = useMostViewedResources({ planets })

  return (
    <main className="min-h-screen">
      <div className="pb-20">
        <div className="flex flex-col gap-20">
          <CardsSection title="All planets" cards={planetsSortedByViews} />
        </div>
      </div>
    </main>
  )
}
