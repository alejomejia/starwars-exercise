import { ApiMetadata, Specie } from '@/types/api'
import { ENDPOINTS } from './consts'

interface Species extends ApiMetadata {
  results: Specie[]
}

export async function getSpecies(): Promise<Species> {
  const res = await fetch(ENDPOINTS.species)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: Species = await res.json()

  return data
}
