import { ResourceString } from '@/lib/types'
import { MostViewedClient } from './MostViewedClient'
import { parsedResourceById } from '@/lib/parsedResourceById'

interface Props {
  mostViewedIdsByResource: Record<ResourceString, { resource: ResourceString; ids: string[] }>
}

export async function MostViewedServer({ mostViewedIdsByResource }: Props) {
  const entries = Object.entries(mostViewedIdsByResource)

  const [people, films, starships, vehicles, species, planets] = await Promise.all(
    entries.map(async ([_, { resource, ids }]) => {
      const resourceHasViews = ids.length > 0

      return {
        [resource]: resourceHasViews
          ? await Promise.all(ids.map(async (id) => await parsedResourceById(resource, id)))
          : []
      }
      // return {
      //   resourceName: resource,
      //   resources: resourceHasViews
      //     ? await Promise.all(ids.map(async (id) => await parsedResourceById(resource, id)))
      //     : []
      // }
    })
  )

  return null
  return (
    <MostViewedClient
      mostViewedPeople={people}
      mostViewedFilms={films}
      mostViewedStarships={starships}
      mostViewedVehicles={vehicles}
      mostViewedSpecies={species}
      mostViewedPlanets={planets}
    />
  )

  // return <MostViewedClient data={fetchedResources} />
}
