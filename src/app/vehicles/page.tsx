import { GeneralPage } from '@/components/GeneralPage/GeneralPage'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { parsedResource } from '@/lib/parsedResource'

export default async function Vehicles() {
  const { results } = await parsedResource('vehicles')

  return (
    <PageWrapper>
      <GeneralPage resourceData={results} />
    </PageWrapper>
  )
}
