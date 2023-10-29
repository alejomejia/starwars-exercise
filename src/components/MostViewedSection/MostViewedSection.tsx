'use client'

import { CardsSection } from '@/components/CardsSection/CardsSection'
import { ROUTES } from '@/components/Navigation/consts'
import { useResources } from '@/hooks/useResources'
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
  const people = useResources(resources.people)
  const films = useResources(resources.films)
  const starships = useResources(resources.starships)
  const vehicles = useResources(resources.vehicles)
  const species = useResources(resources.species)
  const planets = useResources(resources.planets)

  const cardSections = [
    {
      title: 'Most Viewed People',
      viewMoreRoute: ROUTES.people,
      cards: people.sort((a, b) => b.views - a.views).slice(0, MAX_CARDS_PER_SECTION)
    },
    {
      title: 'Most Viewed Films',
      viewMoreRoute: ROUTES.films,
      cards: films.sort((a, b) => b.views - a.views).slice(0, MAX_CARDS_PER_SECTION)
    },
    {
      title: 'Most Viewed Starships',
      viewMoreRoute: ROUTES.starships,
      cards: starships.sort((a, b) => b.views - a.views).slice(0, MAX_CARDS_PER_SECTION)
    },
    {
      title: 'Most Viewed Vehicles',
      viewMoreRoute: ROUTES.vehicles,
      cards: vehicles.sort((a, b) => b.views - a.views).slice(0, MAX_CARDS_PER_SECTION)
    },
    {
      title: 'Most Viewed Species',
      viewMoreRoute: ROUTES.species,
      cards: species.sort((a, b) => b.views - a.views).slice(0, MAX_CARDS_PER_SECTION)
    },
    {
      title: 'Most Viewed Planets',
      viewMoreRoute: ROUTES.planets,
      cards: planets.sort((a, b) => b.views - a.views).slice(0, MAX_CARDS_PER_SECTION)
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
