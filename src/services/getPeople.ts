import { Metadata, Person } from '@/types/api'
import { ENDPOINTS } from './consts'

interface People extends Metadata {
  results: Person[]
}

export async function getPeople(): Promise<People> {
  const res = await fetch(ENDPOINTS.people)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: People = await res.json()

  return data
}
