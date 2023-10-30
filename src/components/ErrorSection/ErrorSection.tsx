'use client'

import { Button } from '../Button/Button'
import { IconReload } from '../Icons/IconReload'
import { useRouter } from 'next/navigation'

export function ErrorSection() {
  const { refresh } = useRouter()

  return (
    <main className="min-h-screen pt-24">
      <section className="w-full max-w-7xl mx-auto flex justify-center">
        <div>
          <h1 className="text-6xl font-semibold mb-8">Something went wrong!</h1>
          <div className="w-44 mx-auto">
            <Button onClick={refresh} endIcon={<IconReload />}>
              Try Again
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
