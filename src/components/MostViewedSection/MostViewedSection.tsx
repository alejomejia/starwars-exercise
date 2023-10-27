'use client'

import { CardsSection } from '@/components/CardsSection/CardsSection'
import { ROUTES } from '@/components/Navigation/consts'
import { useMostViewedResources } from '@/hooks/useMostViewedResources'

interface Props {
  people: any // temporal
  films: any // temporal
  starships: any // temporal
  vehicles: any // temporal
  species: any // temporal
  planets: any // temporal
}

const MAX_CARDS_PER_SECTION = 4

export function MostViewedSection(resources: Props) {
  const mostViewedResources = useMostViewedResources({ ...resources, count: MAX_CARDS_PER_SECTION })

  const cardSections = [
    {
      title: 'Most viewed people',
      viewMoreRoute: ROUTES.people,
      cards: mostViewedResources.people
    },
    {
      title: 'Most viewed films',
      viewMoreRoute: ROUTES.films,
      cards: mostViewedResources.films
    },
    {
      title: 'Most viewed starships',
      viewMoreRoute: ROUTES.starships,
      cards: mostViewedResources.starships
    },
    {
      title: 'Most viewed vehicles',
      viewMoreRoute: ROUTES.vehicles,
      cards: mostViewedResources.vehicles
    },
    {
      title: 'Most viewed species',
      viewMoreRoute: ROUTES.species,
      cards: mostViewedResources.species
    },
    {
      title: 'Most viewed planets',
      viewMoreRoute: ROUTES.planets,
      cards: mostViewedResources.planets
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
