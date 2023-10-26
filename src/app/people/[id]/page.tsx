import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { PersonDetails } from '@/components/Details/PersonDetails'
import { CountView } from '@/components/CountView/CountView'
import { LinkButton } from '@/components/LinkButton/LinkButton'
import { getResourceById } from '@/services/getResourceById'
import { ROUTES } from '@/components/Navigation/consts'

interface Props {
  params: {
    id: string
  }
}

export default async function Person({ params: { id } }: Props) {
  const person = await getResourceById('people', id)

  return (
    <PageWrapper>
      <CountView id={id} entity="people" />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-12">
            <div className="mb-8">
              <LinkButton href={ROUTES.people}>Back to people</LinkButton>
            </div>
            <PersonDetails person={person} />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
