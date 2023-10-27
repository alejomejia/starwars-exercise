'use client'

import { useMostViewedResources } from '@/hooks/useMostViewedResources'

import { CardsSection } from '../CardsSection/CardsSection'

interface Props {
  vehicles: any // temporal
}

export function GeneralVehicles({ vehicles }: Props) {
  const { vehicles: vehiclesSortedByViews } = useMostViewedResources({ vehicles })

  return (
    <main className="min-h-screen">
      <div className="pb-20">
        <div className="flex flex-col gap-20">
          <CardsSection title="All vehicles" cards={vehiclesSortedByViews} />
        </div>
      </div>
    </main>
  )
}
