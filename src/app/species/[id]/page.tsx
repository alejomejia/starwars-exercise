import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CountView } from '@/components/CountView/CountView'
import { LinkButton } from '@/components/LinkButton/LinkButton'
import { getResourceById } from '@/services/getResourceById'
import { ROUTES } from '@/components/Navigation/consts'
import { SpecieDetails } from '@/components/Details/SpecieDetails'

interface Props {
  params: {
    id: string
  }
}

export default async function Specie({ params: { id } }: Props) {
  const specie = await getResourceById('species', id)

  return (
    <PageWrapper>
      <CountView id={id} entity="species" />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-12 pb-24">
            <div className="mb-8">
              <LinkButton href={ROUTES.species}>Back to species</LinkButton>
            </div>
            <SpecieDetails specie={specie} />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
