import { PageWrapper } from '@/components/PageWrapper/PageWrapper'

interface Props {
  params: {
    id: string
  }
}

export default function Film({ params: { id } }: Props) {
  return (
    <PageWrapper>
      {' '}
      <h1 className="text-9xl">Film {id}</h1>
    </PageWrapper>
  )
}
