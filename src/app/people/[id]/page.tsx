import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { usePerson } from '@/hooks/usePerson'

interface Props {
  params: {
    id: string
  }
}

export default async function Person({ params: { id } }: Props) {
  const { name, height, mass, birth_year, gender } = await usePerson(id)

  return (
    <PageWrapper>
      <h1 className="text-9xl">Person {id}</h1>
      <ul>
        <li>{name}</li>
        <li>{height}</li>
        <li>{mass}</li>
        <li>{birth_year}</li>
        <li>{gender}</li>
      </ul>
    </PageWrapper>
  )
}
