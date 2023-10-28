const RESOURCES_STRINGS = ['people', 'films', 'starships', 'vehicles', 'species', 'planets'] as const
export type ResourceString = (typeof RESOURCES_STRINGS)[number]

export type FetchResourceById = {
  resource: ResourceString
  id: string
}

/** Api Types */

type ApiMetadata = {
  count: number
  next: string | null
  previous: string | null
}

type ApiPerson = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: ApiFilm[]
  species: ApiSpecie[]
  vehicles: ApiVehicle[]
  starships: ApiStarship[]
  created: string
  edited: string
  url: string
}

type ApiFilm = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  species: ApiSpecie[]
  starships: ApiStarship[]
  vehicles: ApiVehicle[]
  characters: ApiPerson[]
  planets: ApiPlanet[]
  url: string
  created: string
  edited: string
}

type ApiStarship = {
  name: string
  model: string
  starship_class: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  hyperdrive_rating: string
  MGLT: string
  cargo_capacity: string
  consumables: string
  films: ApiFilm[]
  pilots: ApiPerson[]
  url: string
  created: string
  edited: string
}

type ApiVehicle = {
  name: string
  model: string
  vehicle_class: string
  manufacturer: string
  length: string
  cost_in_credits: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  cargo_capacity: string
  consumables: string
  films: ApiFilm[]
  pilots: ApiPerson[]
  url: string
  created: string
  edited: string
}

type ApiSpecie = {
  name: string
  classification: string
  designation: string
  average_height: string
  average_lifespan: string
  eye_colors: string
  hair_colors: string
  skin_colors: string
  language: string
  homeworld: string
  people: ApiPerson[]
  films: ApiFilm[]
  url: string
  created: string
  edited: string
}

type ApiPlanet = {
  name: string
  diameter: string
  rotation_period: string
  orbital_period: string
  gravity: string
  population: string
  climate: string
  terrain: string
  surface_water: string
  residents: ApiPerson[]
  films: ApiFilm[]
  url: string
  created: string
  edited: string
}

type ApiPeople = ApiMetadata & {
  results: ApiPerson[]
}

type ApiFilms = ApiMetadata & {
  results: ApiFilm[]
}

type ApiStarships = ApiMetadata & {
  results: ApiStarship[]
}

type ApiVehicles = ApiMetadata & {
  results: ApiVehicle[]
}

type ApiSpecies = ApiMetadata & {
  results: ApiSpecie[]
}

type ApiPlanets = ApiMetadata & {
  results: ApiPlanet[]
}

export type ApiResourceMap = {
  people: ApiPeople
  films: ApiFilms
  starships: ApiStarships
  vehicles: ApiVehicles
  species: ApiSpecies
  planets: ApiPlanets
}

type ApiResource = ApiPerson | ApiFilm | ApiStarship | ApiVehicle | ApiSpecie | ApiPlanet

/** Type Guards */

export function isApiFilm(resource: ApiResource): resource is ApiFilm {
  return (resource as ApiFilm).opening_crawl !== undefined
}

/** Parsed Resources */

export type ParsedProperties = {
  id: number
  title: string
  imageUrl: string | null
  resource: ResourceString
  views?: number
}

type Person = ApiPerson & ParsedProperties
type Film = ApiFilm & ParsedProperties
type Starship = ApiStarship & ParsedProperties
type Vehicle = ApiVehicle & ParsedProperties
type Specie = ApiSpecie & ParsedProperties
type Planet = ApiPlanet & ParsedProperties

type People = ApiMetadata & {
  results: Person[]
}

type Films = ApiMetadata & {
  results: Film[]
}

type Starships = ApiMetadata & {
  results: Starship[]
}

type Vehicles = ApiMetadata & {
  results: Vehicle[]
}

type Species = ApiMetadata & {
  results: Specie[]
}

type Planets = ApiMetadata & {
  results: Planet[]
}

export type ParsedResourcesMap = {
  people: People
  films: Films
  starships: Starships
  vehicles: Vehicles
  species: Species
  planets: Planets
}

export type ParsedResources = Person[] | Film[] | Starship[] | Vehicle[] | Specie[] | Planet[]
