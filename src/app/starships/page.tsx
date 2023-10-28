import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralPage } from '@/components/GeneralPage/GeneralPage'
import { parsedResource } from '@/lib/parsedResource'

export default async function Starships() {
  const { results } = await parsedResource('starships')

  return (
    <PageWrapper>
      <GeneralPage resourceData={results} />
    </PageWrapper>
  )
}
