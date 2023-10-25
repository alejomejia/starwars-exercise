import { Person } from '@/types/api'
import { ENDPOINTS } from './consts'

export async function getPeopleById(id: string): Promise<Person> {
  const res = await fetch(`${ENDPOINTS.people}/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: Person = await res.json()

  return data
}
