import { getSpecies } from '@/services/getSpecies'
import { getEntityId } from './utils/getEntityId'

export async function useSpecies(count?: number) {
  const { results } = await getSpecies()

  return (count ? results.slice(0, count) : results).map((specie) => ({
    id: getEntityId(specie.url),
    ...specie
  }))
}
