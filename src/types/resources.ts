import { ApiMetadata, Person, Film, Starship, Vehicle, Specie, Planet, Entity } from './api'

interface SharedCustomAttributes {
  id: number
  imageUrl: string | null
}

type CustomPerson = Person & SharedCustomAttributes
type CustomFilm = Film & SharedCustomAttributes
type CustomStarship = Starship & SharedCustomAttributes
type CustomVehicle = Vehicle & SharedCustomAttributes
type CustomSpecie = Specie & SharedCustomAttributes
type CustomPlanet = Planet & SharedCustomAttributes

export interface People extends ApiMetadata {
  results: CustomPerson[]
}

interface Films extends ApiMetadata {
  results: CustomFilm[]
}

interface Starships extends ApiMetadata {
  results: CustomStarship[]
}

interface Vehicles extends ApiMetadata {
  results: CustomVehicle[]
}

interface Species extends ApiMetadata {
  results: CustomSpecie[]
}

interface Planets extends ApiMetadata {
  results: CustomPlanet[]
}

export type Resources = People | Films | Starships | Vehicles | Species | Planets

export function isFilm(resource: Entity): resource is Film {
  return (resource as Film).opening_crawl !== undefined
}
