import { getStarships } from '@/services/getStarships'
import { getEntityId } from './utils/getEntityId'

export async function useStarships(count?: number) {
  const { results } = await getStarships()

  return (count ? results.slice(0, count) : results).map((starship) => ({
    id: getEntityId(starship.url),
    ...starship
  }))
}
