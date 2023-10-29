import { SW_VISUAL_GUIDE_BASE_URL } from '../const'
import { FetchResourceById } from '../types'

/**
 * Used to grab the resource image from url.
 * It returns `null` if image doesn't exist.
 */

export async function getResourceImageUrl({ resource, id }: FetchResourceById): Promise<string | null> {
  const urlResourceName = resource === 'people' ? 'characters' : resource
  const imageUrl = `${SW_VISUAL_GUIDE_BASE_URL}/${urlResourceName}/${id}.jpg`

  const { ok } = await fetch(imageUrl)

  if (!ok) {
    return null
  }

  return imageUrl
}
