import { BASE_API_URL } from './const'
import { ApiResourceMap, ResourceString } from './types'

export async function fetchResourceById<T extends ResourceString>(resource: T, id: string): Promise<ApiResourceMap[T]> {
  const url = `${BASE_API_URL}/${resource}/${id}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(`Fetch error: ${error}`)
    throw new Error('Failed to fetch resource')
  }
}
