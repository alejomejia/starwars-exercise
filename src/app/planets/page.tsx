import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralPage } from '@/components/GeneralPage/GeneralPage'
import { parsedResource } from '@/lib/parsedResource'

export default async function Planets() {
  const { results } = await parsedResource('planets')

  return (
    <PageWrapper>
      <GeneralPage resourceData={results} />
    </PageWrapper>
  )
}
