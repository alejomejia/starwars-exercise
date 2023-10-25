import { getPeople } from '@/services/getPeople'
import { getEntityId } from './utils/getEntityId'

export async function usePeople(count?: number) {
  const { results } = await getPeople()

  return (count ? results.slice(0, count) : results).map((character) => ({
    id: getEntityId(character.url),
    ...character
  }))
}
