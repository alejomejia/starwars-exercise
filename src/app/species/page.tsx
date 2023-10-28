import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralPage } from '@/components/GeneralPage/GeneralPage'
import { parsedResource } from '@/lib/parsedResource'

export default async function Species() {
  const { results } = await parsedResource('species')

  return (
    <PageWrapper>
      <GeneralPage resourceData={results} />
    </PageWrapper>
  )
}
