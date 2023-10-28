import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralPage } from '@/components/GeneralPage/GeneralPage'
import { parsedResource } from '@/lib/parsedResource'

export default async function People() {
  const { results } = await parsedResource('people')

  return (
    <PageWrapper>
      <GeneralPage resourceData={results} />
    </PageWrapper>
  )
}
