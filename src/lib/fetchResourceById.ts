import { BASE_API_URL } from './const'
import { FetchResourceById } from './types'

export async function fetchResourceById({ resource, id }: FetchResourceById) {
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
