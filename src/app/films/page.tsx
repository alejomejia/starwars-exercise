import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralPage } from '@/components/GeneralPage/GeneralPage'
import { parsedResource } from '@/lib/parsedResource'

export default async function Films() {
  const data = await parsedResource('films')

  return (
    <PageWrapper>
      <GeneralPage resourceData={data.results} />
    </PageWrapper>
  )
}
