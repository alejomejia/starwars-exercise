import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { PersonDetail } from '@/components/PersonDetail/PersonDetail'
import { CountView } from '@/components/CountView/CountView'
import { LinkButton } from '@/components/LinkButton/LinkButton'
import { getResourceById } from '@/services/getResourceById'

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
              <LinkButton href="/people">Back</LinkButton>
            </div>
            <PersonDetail person={person} />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
