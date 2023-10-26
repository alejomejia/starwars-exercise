import { Entities } from '@/types/api'
import {
  CustomFilm,
  CustomPerson,
  CustomPlanet,
  CustomSpecie,
  CustomStarship,
  CustomVehicle,
  ResourceById,
  isFilm
} from '@/types/resources'

import { ENDPOINTS } from './consts'
import { getImageUrl } from './utils/getImageUrl'

export type EntityResponseMap = {
  people: CustomPerson
  films: CustomFilm
  starships: CustomStarship
  vehicles: CustomVehicle
  species: CustomSpecie
  planets: CustomPlanet
}

export async function getResourceById<T extends Entities>(entity: T, id: string): Promise<EntityResponseMap[T]> {
  const res = await fetch(`${ENDPOINTS[entity]}/${id}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch ${entity}:${id} data`)
  }

  const data: ResourceById = await res.json()

  const idAsNumber = Number(id)
  const imageUrl = await getImageUrl({ entity, id: idAsNumber })
  const name = isFilm(data) ? data.title : data.name

  return { ...data, id: idAsNumber, imageUrl, name, entity } as unknown as Promise<EntityResponseMap[T]>
}
