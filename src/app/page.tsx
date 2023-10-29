import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { MostViewedSection } from '@/components/MostViewedSection/MostViewedSection'
import { parsedResource } from '@/lib/parsedResource'

export default async function Home() {
  const people = (await parsedResource('people')).results
  const films = (await parsedResource('films')).results
  const starships = (await parsedResource('starships')).results
  const vehicles = (await parsedResource('vehicles')).results
  const species = (await parsedResource('species')).results
  const planets = (await parsedResource('planets')).results

  const allResources = {
    people,
    films,
    starships,
    vehicles,
    species,
    planets
  }

  return (
    <PageWrapper>
      <main className="min-h-screen w-full max-w-7xl mx-auto">
        <div className="px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-20">
            <MostViewedSection {...allResources} />
          </div>
        </div>
      </main>
    </PageWrapper>
  )
}
