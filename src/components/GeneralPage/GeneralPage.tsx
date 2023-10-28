'use client'

import { useResource } from '@/hooks/useResource'
import { ParsedResources } from '@/lib/types'

import { CardsSection } from '../CardsSection/CardsSection'

interface Props<T extends ParsedResources> {
  resourceData: T
}

export function GeneralPage({ resourceData }: Props<ParsedResources>) {
  const parsedResource = useResource(resourceData)

  return (
    <main className="min-h-screen">
      <div className="flex flex-col gap-20">
        <CardsSection title="All people" cards={parsedResource} />
      </div>
    </main>
  )
}
