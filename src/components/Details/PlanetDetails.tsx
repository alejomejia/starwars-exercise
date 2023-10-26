import { CustomPlanet } from '@/types/resources'

interface Props {
  planet: CustomPlanet
}

export async function PlanetDetails({ planet }: Props) {
  const {
    imageUrl,
    name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    population
  } = planet

  const planetInfoMap = {
    ['Diameter']: `${diameter}kms`,
    ['Climate']: climate,
    ['Terrain']: terrain,
    ['Gravity']: gravity,
    ['Population']: isNaN(Number(population)) ? population : `${population} beings`,
    ['Rotation Period']: `${rotationPeriod} hours`,
    ['Orbital Period']: `${orbitalPeriod} days`
  }

  const planetInfo = Object.entries(planetInfoMap).map(([key, value], index) => (
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
        <h1 className="inline-block text-4xl font-bold mb-8 border-b-4 border-b-yellow-300">{name}</h1>
        <ul>{planetInfo}</ul>
      </div>
    </div>
  )
}
