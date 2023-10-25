import { ApiMetadata, Starship } from '@/types/api'
import { ENDPOINTS } from './consts'

interface Starships extends ApiMetadata {
  results: Starship[]
}

export async function getStarships(): Promise<Starships> {
  const res = await fetch(ENDPOINTS.starships)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: Starships = await res.json()

  return data
}
