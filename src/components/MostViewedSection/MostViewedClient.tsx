'use client'

import { CardsSection } from '@/components/CardsSection/CardsSection'
import { ROUTES } from '@/components/Navigation/consts'
import { useResources } from '@/hooks/useResources'
import { Film, ParsedResourceMap, Person, Planet, ResourceString, Specie, Starship, Vehicle } from '@/lib/types'

interface Props<T extends ResourceString> {
  data: { resourceName: T; resources: ParsedResourceMap[T][] }[]
}

interface AProps {
  mostViewedPeople: Person[]
  mostViewedFilms: Film[]
  mostViewedStarships: Starship[]
  mostViewedVehicles: Vehicle[]
  mostViewedSpecies: Specie[]
  mostViewedPlanets: Planet[]
}

export function MostViewedClient({
  mostViewedPeople,
  mostViewedFilms,
  mostViewedStarships,
  mostViewedVehicles,
  mostViewedSpecies,
  mostViewedPlanets
}: AProps) {
  const people = useResources(mostViewedPeople)
  const films = useResources(mostViewedFilms)
  const starships = useResources(mostViewedStarships)
  const vehicles = useResources(mostViewedVehicles)
  const species = useResources(mostViewedSpecies)
  const planets = useResources(mostViewedPlanets)

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

  return null
}

// export function MostViewedClient({ data }: Props<ResourceString>) {
//   // const [_, peopleResources] = data.find(({ resourceName }) => resourceName === 'people')
//   console.log(data)
//   const people = useResources(data[0]['people'].resources)

//   // const people: Person[] = useResources(resources.people)
//   // const films: Film[] = useResources(resources.films)
//   // const starships: Starship[] = useResources(resources.starships)
//   // const vehicles: Vehicle[] = useResources(resources.vehicles)
//   // const species: Specie[] = useResources(resources.species)
//   // const planets: Planet[] = useResources(resources.planets)

//   // const allResources = [people, films, starships, vehicles, species, planets]

//   // console.log({ allResources })

//   // const cardSections = allResources.map((obj) => {
//   //   const resource = Object.keys(obj)[0] as ResourceString

//   //   return {
//   //     title: `Most Viewed ${resource}`,
//   //     viewMoreRoute: ROUTES[resource],
//   //     cards: obj[resource as keyof typeof obj]
//   //   }
//   // })

//   // const cardSections = [
//   //   {
//   //     title: 'Most Viewed People',
//   //     viewMoreRoute: ROUTES.people,
//   //     cards: people
//   //   },
//   //   {
//   //     title: 'Most Viewed Films',
//   //     viewMoreRoute: ROUTES.films,
//   //     cards: films
//   //   },
//   //   {
//   //     title: 'Most Viewed Starships',
//   //     viewMoreRoute: ROUTES.starships,
//   //     cards: starships
//   //   },
//   //   {
//   //     title: 'Most Viewed Vehicles',
//   //     viewMoreRoute: ROUTES.vehicles,
//   //     cards: vehicles
//   //   },
//   //   {
//   //     title: 'Most Viewed Species',
//   //     viewMoreRoute: ROUTES.species,
//   //     cards: species
//   //   },
//   //   {
//   //     title: 'Most Viewed Planets',
//   //     viewMoreRoute: ROUTES.planets,
//   //     cards: planets
//   //   }
//   // ]

//   return null
//   return (
//     <>
//       <div className="flex flex-col gap-20">
//         {cardSections.map((section) => (
//           <CardsSection key={section.title} {...section} />
//         ))}
//       </div>
//     </>
//   )
// }
