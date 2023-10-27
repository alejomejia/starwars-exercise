import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralPlanets } from '@/components/General/GeneralPlanets'

import { getParsedResource } from '@/utils/getParsedResource'

export default async function Planets() {
  const planets = await getParsedResource({ entity: 'planets' })

  return (
    <PageWrapper>
      <GeneralPlanets planets={planets} />
    </PageWrapper>
  )
}
