import { Entities } from '@/types/api'
import { Resources, isFilm } from '@/types/resources'

import { ENDPOINTS } from './consts'
import { getEntityId } from './utils/getEntityId'
import { getImageUrl } from './utils/getImageUrl'

interface Props {
  entity: Entities
  count?: number
}

export async function getResource({ entity, count }: Props) {
  const res = await fetch(ENDPOINTS[entity])

  if (!res.ok) {
    throw new Error(`Failed to fetch ${entity} data`)
  }

  const data: Resources = await res.json()
  const resultsToMap = count ? data.results.slice(0, count) : data.results

  const results = await Promise.all(
    resultsToMap.map(async (resource) => {
      const id = getEntityId(resource.url)
      const imageUrl = await getImageUrl({ entity, id })
      const name = isFilm(resource) ? resource.title : resource.name

      return {
        ...resource,
        name,
        id,
        imageUrl,
        entity
      }
    })
  )

  return { ...data, results }
}
