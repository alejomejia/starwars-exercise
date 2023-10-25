import { getVehicles } from '@/services/getVehicles'
import { getEntityId } from './utils/getEntityId'

export async function useVehicles(count?: number) {
  const { results } = await getVehicles()

  return (count ? results.slice(0, count) : results).map((vehicle) => ({
    id: getEntityId(vehicle.url),
    ...vehicle
  }))
}
