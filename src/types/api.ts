export type ApiMetadata = {
  count: number
  next: string | null
  previous: string | null
}

export type Person = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: Film[]
  species: Specie[]
  vehicles: Vehicle[]
  starships: Starship[]
  created: string
  edited: string
  url: string
}

export type Film = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: Date
  species: Specie[]
  starships: Starship[]
  vehicles: Vehicle[]
  characters: Person[]
  planets: Planet[]
  url: string
  created: string
  edited: string
}

export type Starship = {
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
  films: Film[]
  pilots: Person[]
  url: string
  created: string
  edited: string
}

export type Vehicle = {
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
  films: Film[]
  pilots: Person[]
  url: string
  created: string
  edited: string
}

export type Specie = {
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
  people: Person[]
  films: Film[]
  url: string
  created: string
  edited: string
}

export type Planet = {
  name: string
  diameter: string
  rotation_period: string
  orbital_period: string
  gravity: string
  population: string
  climate: string
  terrain: string
  surface_water: string
  residents: Person[]
  films: Film[]
  url: string
  created: string
  edited: string
}
