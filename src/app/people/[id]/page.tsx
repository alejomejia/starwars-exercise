'use client'

import { useEffect } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { LS_INITIAL_VIEWS, LocalStorageViews } from '@/storage/views'

interface Props {
  params: {
    id: string
  }
}

export default function Person({ params: { id } }: Props) {
  const [views, setViews] = useLocalStorage<LocalStorageViews>('views', LS_INITIAL_VIEWS)

  useEffect(() => {
    setViews((prev) => ({
      ...prev,
      people: {
        ...prev.people,
        [id]: (prev.people?.[id] ?? 0) + 1
      }
    }))
  }, [id, setViews])

  return (
    <PageWrapper>
      <main className="min-h-screen">
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-12">
            <h1 className="text-9xl">
              Person {id} - Views {views['people']?.[id] ?? 0}
            </h1>
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
