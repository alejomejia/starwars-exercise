import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CountView } from '@/components/CountView/CountView'
import { LinkButton } from '@/components/LinkButton/LinkButton'
import { getResourceById } from '@/services/getResourceById'
import { ROUTES } from '@/components/Navigation/consts'
import { PlanetDetails } from '@/components/Details/PlanetDetails'

interface Props {
  params: {
    id: string
  }
}

export default async function Planet({ params: { id } }: Props) {
  const planet = await getResourceById('planets', id)

  return (
    <PageWrapper>
      <CountView id={id} entity="planets" />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-12 pb-24">
            <div className="mb-8">
              <LinkButton href={ROUTES.planets}>Back to planets</LinkButton>
            </div>
            <PlanetDetails planet={planet} />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
