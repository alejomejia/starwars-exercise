import { Entities } from '@/types/api'
import { Resources } from '@/types/resources'

import { ENDPOINTS } from './consts'

interface Props {
  entity: Entities
  count?: number
}

export async function getResource({ entity, count }: Props) {
  const res = await fetch(ENDPOINTS[entity])

  if (!res.ok) {
    throw new Error(`Failed to fetch ${entity} data`)
  }

  const data: Resources = await res.json()

  return data.results
}
