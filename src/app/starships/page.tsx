import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralStarships } from '@/components/General/GeneralStarships'

import { getParsedResource } from '@/utils/getParsedResource'

export default async function Starships() {
  const starships = await getParsedResource({ entity: 'starships' })

  return (
    <PageWrapper>
      <GeneralStarships starships={starships} />
    </PageWrapper>
  )
}
