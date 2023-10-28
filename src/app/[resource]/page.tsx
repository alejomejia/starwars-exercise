import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralPage } from '@/components/GeneralPage/GeneralPage'
import { parsedResource } from '@/lib/parsedResource'
import { LoadMore } from '@/components/LoadMore/LoadMore'
import { ResourceString } from '@/lib/types'

interface Props {
  params: {
    resource: ResourceString
  }
}

export default async function Resource({ params: { resource } }: Props) {
  const { results } = await parsedResource(resource)

  return (
    <PageWrapper>
      <GeneralPage resource={resource} resourceData={results} />
      <LoadMore />
    </PageWrapper>
  )
}
