import { type ResourceString, isApiFilm, ParsedResourceMap } from './types'
import { getResourceImageUrl } from './utils/getResourceImageUrl'
import { fetchResourceById } from './fetchResourceById'

export async function parsedResourceById<T extends ResourceString>(
  resource: T,
  id: string
): Promise<ParsedResourceMap[T]> {
  const data = await fetchResourceById(resource, id)

  const imageUrl = await getResourceImageUrl({ resource, id })
  const name = isApiFilm(data) ? data.title : data.name

  return { ...data, imageUrl, name, resource } as ParsedResourceMap[T]
}
