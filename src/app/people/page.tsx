import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralPeople } from '@/components/General/GeneralPeople'

import { getParsedResource } from '@/utils/getParsedResource'

export default async function People() {
  const people = await getParsedResource({ entity: 'people' })

  return (
    <PageWrapper>
      <GeneralPeople people={people} />
    </PageWrapper>
  )
}
