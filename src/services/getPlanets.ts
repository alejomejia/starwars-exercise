import { ApiMetadata, Planet } from '@/types/api'
import { ENDPOINTS } from './consts'

interface Planets extends ApiMetadata {
  results: Planet[]
}

export async function getPlanets(): Promise<Planets> {
  const res = await fetch(ENDPOINTS.planets)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: Planets = await res.json()

  return data
}
