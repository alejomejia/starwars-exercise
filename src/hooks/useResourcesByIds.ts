import { parsedResourceById } from '@/lib/parsedResourceById'
import { ResourceString } from '@/lib/types'

export async function useResourcesByIds(resource: ResourceString, ids: string[]) {
  const resources = await Promise.all(ids.map(async (id) => await parsedResourceById(resource, id)))

  return resources
}
