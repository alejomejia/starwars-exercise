import { type ResourceString } from '@/lib/types'
import { useLocalStorage } from './useLocalStorage'
import { LS_INITIAL_VIEWS, LocalStorageViews } from '@/storage/views'

const MAX_IDS = 4

type ResourceObj = { resource: ResourceString; ids: string[] }
type Return = Record<ResourceString, ResourceObj>

export function useMostViewedIdsByResource() {
  const [views] = useLocalStorage<LocalStorageViews>('views', LS_INITIAL_VIEWS)
  const resourcesStrings: ResourceString[] = ['people', 'planets', 'films', 'species', 'vehicles', 'starships']

  const resources = resourcesStrings.map((resource) => {
    const entries = Object.entries(views[resource])
    const ids = entries
      ? entries
          .slice(0, MAX_IDS)
          .sort(([_a, aViews], [_b, bViews]) => bViews - aViews)
          .map(([id]) => id)
      : []

    return {
      resource,
      ids
    }
  })

  const mappedResources = resources.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.resource]: {
        resource: curr.resource,
        ids: curr.ids
      }
    }
  }, {})

  return { ...mappedResources } as Return
}
