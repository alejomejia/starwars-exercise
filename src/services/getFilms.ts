import { ApiMetadata, Film } from '@/types/api'
import { ENDPOINTS } from './consts'

interface Films extends ApiMetadata {
  results: Film[]
}

export async function getFilms(): Promise<Films> {
  const res = await fetch(ENDPOINTS.films)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: Films = await res.json()

  return data
}
