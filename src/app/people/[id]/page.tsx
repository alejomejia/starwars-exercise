import { PageWrapper } from '@/components/PageWrapper/PageWrapper'

interface Props {
  params: {
    id: string
  }
}

export default function Person({ params: { id } }: Props) {
  return (
    <PageWrapper>
      <h1 className="text-9xl">Person {id}</h1>
    </PageWrapper>
  )
}
