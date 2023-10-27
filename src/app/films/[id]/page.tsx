import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CountView } from '@/components/CountView/CountView'
import { getResourceById } from '@/services/getResourceById'
import { ROUTES } from '@/components/Navigation/consts'
import { PageDetails } from '@/components/PageDetails/PageDetails'
import { GoBackLink } from '@/components/GoBackLink/GoBackLink'

interface Props {
  params: {
    id: string
  }
}

export default async function Film({ params: { id } }: Props) {
  const {
    imageUrl,
    title,
    episode_id: episodeId,
    opening_crawl: openingCrawl,
    director,
    producer,
    release_date: releaseDate
  } = await getResourceById('films', id)

  const filmInfoMap = {
    ['Director']: director,
    ['Producer']: producer,
    ['Release Date']: releaseDate
  }

  const episodeMap: Record<number, string> = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI'
  }

  const episode = episodeMap[episodeId]
  const secondaryTitle = `Star Wars: Episode ${episode}`

  return (
    <PageWrapper>
      <CountView id={id} entity="films" />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-8 lg:px-12">
            <div className="mb-8">
              <GoBackLink href={ROUTES.films}>Back to Films</GoBackLink>
            </div>
            <PageDetails
              title={{ main: title, secondary: secondaryTitle }}
              imageUrl={imageUrl}
              description={openingCrawl}
              details={filmInfoMap}
            />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
