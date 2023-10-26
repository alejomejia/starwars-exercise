import { Loader } from '@/components/Loader/Loader'

export default function Loading() {
  return (
    <main className="min-h-screen pt-24">
      <section className="w-full max-w-7xl mx-auto flex justify-center">
        <Loader />
      </section>
    </main>
  )
}
