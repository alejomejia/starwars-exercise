import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GeneralPage } from '@/components/GeneralPage/GeneralPage'
import { Pagination } from '@/components/Pagination/Pagination'

import { parsedResource } from '@/lib/parsedResource'
import { ResourceString } from '@/lib/types'

interface Props {
  params: {
    resource: ResourceString
  }
  searchParams: {
    page: string
  }
}

export default async function Resource({ params: { resource }, searchParams: { page } }: Props) {
  const { results, count } = await parsedResource(resource, page)

  return (
    <PageWrapper>
      <main className="min-h-screen w-full max-w-7xl mx-auto">
        <div className="px-6 sm:px-8 lg:px-12">
          <GeneralPage resource={resource} resourceData={results} />
          <Pagination resource={resource} resourceTotal={count} page={page} />
        </div>
      </main>
    </PageWrapper>
  )
}
