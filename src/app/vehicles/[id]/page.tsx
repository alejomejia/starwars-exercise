import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CountView } from '@/components/CountView/CountView'
import { LinkButton } from '@/components/LinkButton/LinkButton'
import { getResourceById } from '@/services/getResourceById'
import { ROUTES } from '@/components/Navigation/consts'
import { VehicleDetails } from '@/components/Details/VehicleDetails'

interface Props {
  params: {
    id: string
  }
}

export default async function Vehicle({ params: { id } }: Props) {
  const vehicle = await getResourceById('vehicles', id)

  return (
    <PageWrapper>
      <CountView id={id} entity="vehicles" />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-12 pb-24">
            <div className="mb-8">
              <LinkButton href={ROUTES.vehicles}>Back</LinkButton>
            </div>
            <VehicleDetails vehicle={vehicle} />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
