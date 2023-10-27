import { getParsedResource } from '@/utils/getParsedResource'

import { MostViewedSection } from './MostViewedSection'

export async function MostViewedSectionServer() {
  const allResources = {
    people: await getParsedResource({ entity: 'people' }),
    films: await getParsedResource({ entity: 'films' }),
    starships: await getParsedResource({ entity: 'starships' }),
    vehicles: await getParsedResource({ entity: 'vehicles' }),
    species: await getParsedResource({ entity: 'species' }),
    planets: await getParsedResource({ entity: 'planets' })
  }

  return <MostViewedSection {...allResources} />
}
