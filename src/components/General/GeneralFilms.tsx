'use client'

import { useMostViewedResources } from '@/hooks/useMostViewedResources'

import { CardsSection } from '../CardsSection/CardsSection'

interface Props {
  films: any // temporal
}

export function GeneralFilms({ films }: Props) {
  const { films: filmsSortedByViews } = useMostViewedResources({ films })

  return (
    <main className="min-h-screen">
      <div className="pb-20">
        <div className="flex flex-col gap-20">
          <CardsSection title="All films" cards={filmsSortedByViews} />
        </div>
      </div>
    </main>
  )
}
