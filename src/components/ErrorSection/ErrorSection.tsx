import { Button } from '../Button/Button'
import { IconReload } from '../Icons/IconReload'

interface Props {
  onClick: () => void
}

export function ErrorSection({ onClick }: Props) {
  return (
    <main className="min-h-screen pt-24">
      <section className="w-full max-w-7xl mx-auto flex justify-center">
        <div>
          <h1 className="text-6xl font-semibold mb-8">Something went wrong!</h1>
          <div className="w-44 mx-auto">
            <Button onClick={onClick} endIcon={<IconReload />}>
              Try Again
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
