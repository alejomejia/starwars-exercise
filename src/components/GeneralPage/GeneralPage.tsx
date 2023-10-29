'use client'

import { useResource } from '@/hooks/useResource'
import { ParsedResources, ResourceString } from '@/lib/types'

import { CardsSection } from '../CardsSection/CardsSection'

interface Props<T extends ParsedResources> {
  resourceData: T
  resource: ResourceString
}

export function GeneralPage({ resource, resourceData }: Props<ParsedResources>) {
  const parsedResource = useResource(resourceData)

  return (
    <div className="relative z-10 flex flex-col gap-20">
      <CardsSection title={`All ${resource}`} cards={parsedResource} />
    </div>
  )
}
