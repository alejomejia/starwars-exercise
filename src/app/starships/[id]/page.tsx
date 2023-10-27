import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CountView } from '@/components/CountView/CountView'
import { getResourceById } from '@/services/getResourceById'
import { ROUTES } from '@/components/Navigation/consts'
import { PageDetails } from '@/components/PageDetails/PageDetails'
import { GoBackLink } from '@/components/GoBackLink/GoBackLink'

interface Props {
  params: {
    id: string
  }
}

export default async function Starship({ params: { id } }: Props) {
  const {
    imageUrl,
    name,
    model,
    manufacturer,
    cost_in_credits: costInCredits,
    length,
    max_atmosphering_speed: maxAtmospheringSpeed,
    crew,
    passengers,
    cargo_capacity: cargoCapacity,
    consumables,
    hyperdrive_rating: hyperdriveRating
  } = await getResourceById('starships', id)

  const hasSameModelAsName = model === name

  const starshipInfoMap = {
    ['Manufacturers']: manufacturer,
    ['Const In Credits']: `${costInCredits} imperial credits`,
    ['Length']: `${length}m`,
    ['Maximum Atmosphering Speed']: maxAtmospheringSpeed,
    ['Crew']: crew,
    ['Passengers']: passengers,
    ['Cargo Capacity']: `${cargoCapacity}kg`,
    ['Consumables']: consumables,
    ['Hyperdrive Rating']: hyperdriveRating
  }

  return (
    <PageWrapper>
      <CountView id={id} entity="starships" />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-12 pb-24">
            <div className="mb-8">
              <GoBackLink href={ROUTES.starships}>Back to Starships</GoBackLink>
            </div>
            <PageDetails
              title={{ main: name, secondary: !hasSameModelAsName ? model : '' }}
              imageUrl={imageUrl}
              details={starshipInfoMap}
            />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
