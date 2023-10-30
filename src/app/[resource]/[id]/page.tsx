import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CountView } from '@/components/CountView/CountView'
import { GoBackLink } from '@/components/GoBackLink/GoBackLink'
import { ROUTES } from '@/components/Navigation/consts'
import { PageDetails } from '@/components/PageDetails/PageDetails'
import { ResourceString } from '@/lib/types'
import { parsedResourceById } from '@/lib/parsedResourceById'

interface Props {
  params: {
    resource: ResourceString
    id: string
  }
}

export default async function Person({ params: { resource, id } }: Props) {
  const parsedResource = await parsedResourceById(resource, id)

  return (
    <PageWrapper>
      <CountView id={id} resource={resource} />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-8 lg:px-12">
            <div className="mb-8 w-52">
              <GoBackLink href={ROUTES[resource]}>Back to {resource}</GoBackLink>
            </div>
            <PageDetails resourceData={parsedResource} />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
