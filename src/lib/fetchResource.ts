import { BASE_API_URL } from './const'
import { ApiResourceMap, ResourceString } from './types'

export async function fetchResource<T extends ResourceString>(
  resource: T,
  currentPage?: number
): Promise<ApiResourceMap[T]> {
  const segments = [BASE_API_URL, `/${resource}`, currentPage ? `/?page=${currentPage}` : '']
  const url = segments.join('')

  try {
    const response = await fetch(url)
    const data: ApiResourceMap[T] = await response.json()

    return data
  } catch (error) {
    console.error(`Fetch error: ${error}`)
    throw new Error('Failed to fetch resource')
  }
}
