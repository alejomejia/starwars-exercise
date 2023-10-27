import { GeneralVehicles } from '@/components/General/GeneralVehicles'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'

import { getParsedResource } from '@/utils/getParsedResource'

export default async function Vehicles() {
  const vehicles = await getParsedResource({ entity: 'vehicles' })

  return (
    <PageWrapper>
      <GeneralVehicles vehicles={vehicles} />
    </PageWrapper>
  )
}
