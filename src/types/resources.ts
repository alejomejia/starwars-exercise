import { ApiMetadata, Person, Film, Starship, Vehicle, Specie, Planet, Entity, Entities } from './api'

interface SharedCustomAttributes {
  id: number
  imageUrl: string | null
  entity: Entities
}

export type CustomPerson = Person & SharedCustomAttributes
export type CustomFilm = Film & SharedCustomAttributes
export type CustomStarship = Starship & SharedCustomAttributes
export type CustomVehicle = Vehicle & SharedCustomAttributes
export type CustomSpecie = Specie & SharedCustomAttributes
export type CustomPlanet = Planet & SharedCustomAttributes

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

export type ResourceById = Person | Film | Starship | Vehicle | Specie | Planet

export type Resources = People | Films | Starships | Vehicles | Species | Planets

export function isFilm(resource: Entity): resource is Film {
  return (resource as Film).opening_crawl !== undefined
}
