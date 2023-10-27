import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralSpecies } from '@/components/General/GeneralSpecies'

import { getParsedResource } from '@/utils/getParsedResource'

export default async function Species() {
  const species = await getParsedResource({ entity: 'species' })

  return (
    <PageWrapper>
      <GeneralSpecies species={species} />
    </PageWrapper>
  )
}
