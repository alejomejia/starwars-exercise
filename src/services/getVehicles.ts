import { ApiMetadata, Vehicle } from '@/types/api'
import { ENDPOINTS } from './consts'

interface Vehicles extends ApiMetadata {
  results: Vehicle[]
}

export async function getVehicles(): Promise<Vehicles> {
  const res = await fetch(ENDPOINTS.vehicles)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: Vehicles = await res.json()

  return data
}
