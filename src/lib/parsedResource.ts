import { type ResourceString, type ParsedResourcesMap, isApiFilm } from './types'
import { fetchResource } from './fetchResource'
import { getResourceId } from './utils/getResourceId'
import { getResourceImageUrl } from './utils/getResourceImageUrl'

export async function parsedResource<T extends ResourceString>(
  resource: T,
  currentPage?: string
): Promise<ParsedResourcesMap[T]> {
  const data = await fetchResource(resource, currentPage)

  const results = await Promise.all(
    data.results.map(async (item) => {
      const id = getResourceId(item.url)
      const imageUrl = await getResourceImageUrl({ resource, id: String(id) })
      const name = isApiFilm(item) ? item.title : item.name

      return {
        ...item,
        id,
        title: name,
        imageUrl,
        resource
      }
    })
  )

  return { ...data, results } as ParsedResourcesMap[T]
}
