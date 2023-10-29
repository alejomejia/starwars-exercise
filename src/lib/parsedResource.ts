import { type ResourceString, type ParsedResourcesMap, isApiFilm } from './types'
import { fetchResource } from './fetchResource'
import { getResourceId } from './utils/getResourceId'
import { getResourceImageUrl } from './utils/getResourceImageUrl'

export async function parsedResource<T extends ResourceString>(
  resource: T,
  currentPage?: string
): Promise<ParsedResourcesMap[T]> {
  const { count, next, previous, results } = await fetchResource(resource, currentPage)

  const parsedResults = await Promise.all(
    results.map(async (item) => {
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

  const metadata = { count, next, previous }

  return { ...metadata, results: parsedResults } as unknown as ParsedResourcesMap[T]
}
