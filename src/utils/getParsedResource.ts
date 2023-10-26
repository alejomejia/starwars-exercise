import { Entities } from '@/types/api'
import { getResource } from '@/services/getResource'
import { getEntityId } from '@/services/utils/getEntityId'
import { getImageUrl } from '@/services/utils/getImageUrl'
import { isFilm } from '@/types/resources'

interface Props {
  entity: Entities
  count?: number
}

export async function getParsedResource({ entity, count }: Props) {
  const response = await getResource({ entity })

  const results = await Promise.all(
    response.map(async (resource) => {
      const id = getEntityId(resource.url)
      const imageUrl = await getImageUrl({ entity, id })
      const name = isFilm(resource) ? resource.title : resource.name

      return {
        ...resource,
        title: name,
        id,
        imageUrl,
        entity
      }
    })
  )

  return count ? results.slice(0, count) : results
}
