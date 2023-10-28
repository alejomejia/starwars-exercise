import { ResourceString } from '@/lib/types'

export const LS_INITIAL_VIEWS: LocalStorageViews = {
  people: {},
  films: {},
  starships: {},
  vehicles: {},
  species: {},
  planets: {}
}

type ResourceViews = Record<string, number>
export type LocalStorageViews = Record<ResourceString, ResourceViews>
