import { getPlanets } from '@/services/getPlanets'
import { getEntityId } from './utils/getEntityId'

export async function usePlanets(count?: number) {
  const { results } = await getPlanets()

  return (count ? results.slice(0, count) : results).map((planet) => ({
    id: getEntityId(planet.url),
    ...planet
  }))
}
