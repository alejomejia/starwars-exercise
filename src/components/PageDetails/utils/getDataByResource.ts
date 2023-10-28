import {
  ParsedResource,
  Person,
  Film,
  Starship,
  Vehicle,
  Specie,
  Planet,
  isApiPerson,
  isApiFilm,
  isApiStarship,
  isApiVehicle,
  isApiSpecie,
  isApiPlanet
} from '@/lib/types'

type Title = {
  main: string
  secondary?: string
}

interface Return {
  title: Title
  imageUrl: string | null
  description?: string
  details: Record<string, string>
}

interface Props<T extends ParsedResource> {
  resourceData: T
}

export const getDataByResource = ({ resourceData }: Props<ParsedResource>): Return => {
  if (isApiPerson(resourceData)) {
    return getPersonData(resourceData)
  } else if (isApiFilm(resourceData)) {
    return getFilmData(resourceData)
  } else if (isApiStarship(resourceData)) {
    return getStarshipData(resourceData)
  } else if (isApiVehicle(resourceData)) {
    return getVehicleData(resourceData)
  } else if (isApiSpecie(resourceData)) {
    return getSpecieData(resourceData)
  } else {
    return getPlanetData(resourceData)
  }
}

const getPersonData = (person: Person) => {
  const {
    imageUrl,
    name,
    height,
    mass,
    hair_color: hairColor,
    skin_color: skinColor,
    gender,
    birth_year: birthYear,
    eye_color: eyeColor
  } = person

  const details = {
    ['Hair Color']: hairColor,
    ['Eye Color']: eyeColor,
    ['Skin Color']: skinColor,
    ['Height']: `${height}cm`,
    ['Mass']: `${mass}kg`,
    ['Gender']: gender,
    ['Birth year']: birthYear
  }

  return {
    title: { main: name },
    imageUrl,
    details
  }
}

const getFilmData = (film: Film) => {
  const {
    imageUrl,
    title,
    episode_id: episodeId,
    opening_crawl: openingCrawl,
    director,
    producer,
    release_date: releaseDate
  } = film

  const details = {
    ['Director']: director,
    ['Producer']: producer,
    ['Release Date']: releaseDate
  }

  const episodeMap: Record<number, string> = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI'
  }

  const episode = episodeMap[episodeId]
  const secondaryTitle = `Star Wars: Episode ${episode}`

  return {
    title: { main: title, secondary: secondaryTitle },
    imageUrl,
    description: openingCrawl,
    details
  }
}

const getStarshipData = (starship: Starship) => {
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
    hyperdrive_rating: hyperdriveRating
  } = starship

  const hasSameModelAsName = model === name

  const details = {
    ['Manufacturers']: manufacturer,
    ['Const In Credits']: `${costInCredits} imperial credits`,
    ['Length']: `${length}m`,
    ['Maximum Atmosphering Speed']: maxAtmospheringSpeed,
    ['Crew']: crew,
    ['Passengers']: passengers,
    ['Cargo Capacity']: `${cargoCapacity}kg`,
    ['Consumables']: consumables,
    ['Hyperdrive Rating']: hyperdriveRating
  }

  return {
    title: { main: name, secondary: !hasSameModelAsName ? model : '' },
    imageUrl,
    details
  }
}

const getVehicleData = (vehicle: Vehicle) => {
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

  const details = {
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

  return {
    title: { main: name, secondary: !hasSameModelAsName ? model : '' },
    imageUrl,
    details
  }
}

const getSpecieData = (specie: Specie) => {
  const {
    imageUrl,
    name,
    classification,
    designation,
    hair_colors: hairColors,
    eye_colors: eyeColors,
    skin_colors: skinColors,
    language,
    average_height: averageHeight,
    average_lifespan: averageLifespan
  } = specie

  const details = {
    ['Classification']: classification,
    ['Designation']: designation,
    ['Hair Colors']: hairColors,
    ['Eye Colors']: eyeColors,
    ['Skin Colors']: skinColors,
    ['Language']: language,
    ['Average Height']: averageHeight === 'n/a' ? averageHeight : `${averageHeight}cm`,
    ['Average Lifespan']: `${averageLifespan} years`
  }

  return {
    title: { main: name },
    imageUrl,
    details
  }
}

const getPlanetData = (planet: Planet) => {
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

  const details = {
    ['Diameter']: `${diameter}kms`,
    ['Climate']: climate,
    ['Terrain']: terrain,
    ['Gravity']: gravity,
    ['Population']: isNaN(Number(population)) ? population : `${population} beings`,
    ['Rotation Period']: `${rotationPeriod} hours`,
    ['Orbital Period']: `${orbitalPeriod} days`
  }

  return {
    title: { main: name },
    imageUrl,
    details
  }
}
