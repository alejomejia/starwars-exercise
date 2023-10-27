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

export default async function Specie({ params: { id } }: Props) {
  const {
    imageUrl,
    name,
    classification,
    designation,
    hair_colors: hairColors,
    eye_colors: eyeColors,
    skin_colors: skinColors,
    language,
    average_height: averageHeight,
    average_lifespan: averageLifespan
  } = await getResourceById('species', id)

  const specieInfoMap = {
    ['Classification']: classification,
    ['Designation']: designation,
    ['Hair Colors']: hairColors,
    ['Eye Colors']: eyeColors,
    ['Skin Colors']: skinColors,
    ['Language']: language,
    ['Average Height']: averageHeight === 'n/a' ? averageHeight : `${averageHeight}cm`,
    ['Average Lifespan']: `${averageLifespan} years`
  }

  return (
    <PageWrapper>
      <CountView id={id} entity="species" />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-12 pb-24">
            <div className="mb-8">
              <GoBackLink href={ROUTES.species}>Back to Species</GoBackLink>
            </div>
            <PageDetails title={{ main: name }} imageUrl={imageUrl} details={specieInfoMap} />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
