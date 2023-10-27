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

export default async function Planet({ params: { id } }: Props) {
  const {
    imageUrl,
    name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    population
  } = await getResourceById('planets', id)

  const planetInfoMap = {
    ['Diameter']: `${diameter}kms`,
    ['Climate']: climate,
    ['Terrain']: terrain,
    ['Gravity']: gravity,
    ['Population']: isNaN(Number(population)) ? population : `${population} beings`,
    ['Rotation Period']: `${rotationPeriod} hours`,
    ['Orbital Period']: `${orbitalPeriod} days`
  }

  return (
    <PageWrapper>
      <CountView id={id} entity="planets" />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-8 lg:px-12">
            <div className="mb-8">
              <GoBackLink href={ROUTES.planets}>Back to Planets</GoBackLink>
            </div>
            <PageDetails title={{ main: name }} imageUrl={imageUrl} details={planetInfoMap} />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
