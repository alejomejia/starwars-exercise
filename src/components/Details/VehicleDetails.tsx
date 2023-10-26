import { CustomVehicle } from '@/types/resources'

interface Props {
  vehicle: CustomVehicle
}

export async function VehicleDetails({ vehicle }: Props) {
  const {
    imageUrl,
    name,
    model,
    manufacturer,
    cost_in_credits: costInCredits,
    length,
    max_atmosphering_speed: maxAtmospheringSpeed,
    crew,
    passengers,
    cargo_capacity: cargoCapacity,
    consumables,
    vehicle_class: vehicleClass
  } = vehicle

  const hasSameModelAsName = model === name

  const vehicleInfoMap = {
    ['Manufacturers']: manufacturer,
    ['Const In Credits']: `${costInCredits} imperial credits`,
    ['Length']: `${length}m`,
    ['Maximum Atmosphering Speed']: maxAtmospheringSpeed,
    ['Crew']: crew,
    ['Passengers']: passengers,
    ['Cargo Capacity']: `${cargoCapacity}kg`,
    ['Consumables']: consumables,
    ['Vehicle Class']: vehicleClass
  }

  const vehicleInfo = Object.entries(vehicleInfoMap).map(([key, value], index) => (
    <li key={index} className="mb-2">
      <strong className="font-medium text-yellow-300">{key}:</strong> <span className="capitalize">{value}</span>
    </li>
  ))

  return (
    <div className="flex gap-8 text-white">
      <picture className="w-full max-w-sm">
        <img
          className="object-cover object-top w-full h-96 rounded-xl"
          src={imageUrl ?? '/images/resource-fallback.jpg'}
          alt={name}
        />
      </picture>
      <div className="flex-1">
        {!hasSameModelAsName && <h1 className="capitalize mb-2 text-xl font-medium text-slate-300">{model}</h1>}
        <h2 className="inline-block text-4xl font-bold mb-8 border-b-4 border-b-yellow-300">{name}</h2>
        <ul>{vehicleInfo}</ul>
      </div>
    </div>
  )
}
