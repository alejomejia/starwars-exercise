import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { FilmDetails } from '@/components/Details/FilmDetails'
import { CountView } from '@/components/CountView/CountView'
import { LinkButton } from '@/components/LinkButton/LinkButton'
import { getResourceById } from '@/services/getResourceById'
import { ROUTES } from '@/components/Navigation/consts'

interface Props {
  params: {
    id: string
  }
}

export default async function Film({ params: { id } }: Props) {
  const film = await getResourceById('films', id)

  return (
    <PageWrapper>
      <CountView id={id} entity="films" />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-12 pb-24">
            <div className="mb-8">
              <LinkButton href={ROUTES.films}>Back</LinkButton>
            </div>
            <FilmDetails film={film} />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
