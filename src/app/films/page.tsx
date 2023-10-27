import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralFilms } from '@/components/General/GeneralFilms'

import { getParsedResource } from '@/utils/getParsedResource'

export default async function Films() {
  const films = await getParsedResource({ entity: 'films' })

  return (
    <PageWrapper>
      <GeneralFilms films={films} />
    </PageWrapper>
  )
}
