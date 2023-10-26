import { Loader } from '../Loader/Loader'

export function LoadingSection() {
  return (
    <main className="min-h-screen pt-24">
      <section className="w-full max-w-7xl mx-auto flex justify-center">
        <Loader />
      </section>
    </main>
  )
}
