'use client'

import { CardsSection } from '@/components/CardsSection/CardsSection'
import { ROUTES } from '@/components/Navigation/consts'
import { useResource } from '@/hooks/useResource'
import { Film, Person, Starship, Vehicle, Specie, Planet } from '@/lib/types'

interface Props {
  people: Person[]
  films: Film[]
  starships: Starship[]
  vehicles: Vehicle[]
  species: Specie[]
  planets: Planet[]
}

const MAX_CARDS_PER_SECTION = 4

export function MostViewedSection(resources: Props) {
  const people = useResource(resources.people, true, MAX_CARDS_PER_SECTION)
  const films = useResource(resources.films, true, MAX_CARDS_PER_SECTION)
  const starships = useResource(resources.starships, true, MAX_CARDS_PER_SECTION)
  const vehicles = useResource(resources.vehicles, true, MAX_CARDS_PER_SECTION)
  const species = useResource(resources.species, true, MAX_CARDS_PER_SECTION)
  const planets = useResource(resources.planets, true, MAX_CARDS_PER_SECTION)

  const cardSections = [
    {
      title: 'Most Viewed People',
      viewMoreRoute: ROUTES.people,
      cards: people
    },
    {
      title: 'Most Viewed Films',
      viewMoreRoute: ROUTES.films,
      cards: films
    },
    {
      title: 'Most Viewed Starships',
      viewMoreRoute: ROUTES.starships,
      cards: starships
    },
    {
      title: 'Most Viewed Vehicles',
      viewMoreRoute: ROUTES.vehicles,
      cards: vehicles
    },
    {
      title: 'Most Viewed Species',
      viewMoreRoute: ROUTES.species,
      cards: species
    },
    {
      title: 'Most Viewed Planets',
      viewMoreRoute: ROUTES.planets,
      cards: planets
    }
  ]

  return (
    <div className="flex flex-col gap-20">
      {cardSections.map((section) => (
        <CardsSection key={section.title} {...section} />
      ))}
    </div>
  )
}
