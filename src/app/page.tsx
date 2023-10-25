import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CardsSection } from '@/components/CardsSection/CardsSection'
import { usePeople } from '@/hooks/usePeople'

const MAX_CARDS_PER_SECTION = 4

export default async function Home() {
  const people = (await usePeople(MAX_CARDS_PER_SECTION)).map(({ id, name }) => ({ id, title: name }))

  return (
    <PageWrapper>
      <main className="min-h-screen">
        <div className="flex flex-col">
          <CardsSection title="Top StarWars Characters" cards={people} />
        </div>
      </main>
    </PageWrapper>
  )
}
