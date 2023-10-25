import { Entities } from '@/types/api'

interface Props {
  entity: Entities
  id: number
}

type MapEntities = Record<Entities, string>

/**
 * Used to grab the entity image from url.
 * It returns `null` if image doesn't exist.
 */

export async function getImageUrl({ entity, id }: Props): Promise<string | null> {
  const BASE_URL = 'https://starwars-visualguide.com/assets/img'

  const mapEntities: MapEntities = {
    people: 'characters',
    films: 'films',
    planets: 'planets',
    species: 'species',
    starships: 'starships',
    vehicles: 'vehicles'
  }

  const entityName = mapEntities[entity]
  const imageUrl = `${BASE_URL}/${entityName}/${id}.jpg`

  const { ok } = await fetch(imageUrl)

  if (!ok) {
    return null
  }

  return `${BASE_URL}/${entityName}/${id}.jpg`
}
