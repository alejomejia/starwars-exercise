import { Entities } from '@/types/api'

export const LS_INITIAL_VIEWS: LocalStorageViews = {
  people: {},
  films: {},
  starships: {},
  vehicles: {},
  species: {},
  planets: {}
}

type EntityViews = Record<string, number>

export type LocalStorageViews = Record<Entities, EntityViews>
