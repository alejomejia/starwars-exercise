import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CountView } from '@/components/CountView/CountView'
import { LinkButton } from '@/components/LinkButton/LinkButton'
import { getResourceById } from '@/services/getResourceById'
import { ROUTES } from '@/components/Navigation/consts'
import { StarshipDetails } from '@/components/Details/StarshipDetails'

interface Props {
  params: {
    id: string
  }
}

export default async function Starship({ params: { id } }: Props) {
  const starship = await getResourceById('starships', id)

  return (
    <PageWrapper>
      <CountView id={id} entity="starships" />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-12 pb-24">
            <div className="mb-8">
              <LinkButton href={ROUTES.starships}>Back to starships</LinkButton>
            </div>
            <StarshipDetails starship={starship} />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
