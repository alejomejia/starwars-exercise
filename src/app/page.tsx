import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { MostViewedSectionServer } from '@/components/MostViewedSection/MostViewedSectionServer'

export default async function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen">
        <div className="pb-20">
          <div className="flex flex-col gap-20">
            <MostViewedSectionServer />
          </div>
        </div>
      </main>
    </PageWrapper>
  )
}
