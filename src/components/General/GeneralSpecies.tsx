'use client'

import { useMostViewedResources } from '@/hooks/useMostViewedResources'

import { CardsSection } from '../CardsSection/CardsSection'

interface Props {
  species: any // temporal
}

export function GeneralSpecies({ species }: Props) {
  const { species: speciesSortedByViews } = useMostViewedResources({ species })

  return (
    <main className="min-h-screen">
      <div className="pb-20">
        <div className="flex flex-col gap-20">
          <CardsSection title="All species" cards={speciesSortedByViews} />
        </div>
      </div>
    </main>
  )
}
