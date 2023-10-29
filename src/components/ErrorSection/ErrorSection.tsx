import { LinkButton } from '../LinkButton/LinkButton'
import { Loader } from '../Loader/Loader'
import { ROUTES } from '../Navigation/consts'

export function ErrorSection() {
  return (
    <main className="min-h-screen pt-24">
      <section className="w-full max-w-7xl mx-auto flex justify-center">
        <div>
          <h1 className="text-6xl font-semibold mb-8">Something went wrong!</h1>
          <div className="w-44 mx-auto">
            <LinkButton href={ROUTES.home}>Go back to Home</LinkButton>
          </div>
        </div>
      </section>
    </main>
  )
}
