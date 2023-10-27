import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { CountView } from '@/components/CountView/CountView'
import { GoBackLink } from '@/components/GoBackLink/GoBackLink'
import { getResourceById } from '@/services/getResourceById'
import { ROUTES } from '@/components/Navigation/consts'
import { PageDetails } from '@/components/PageDetails/PageDetails'

interface Props {
  params: {
    id: string
  }
}

export default async function Person({ params: { id } }: Props) {
  const {
    imageUrl,
    name,
    height,
    mass,
    hair_color: hairColor,
    skin_color: skinColor,
    gender,
    birth_year: birthYear,
    eye_color: eyeColor
  } = await getResourceById('people', id)

  const personInfoMap = {
    ['Hair Color']: hairColor,
    ['Eye Color']: eyeColor,
    ['Skin Color']: skinColor,
    ['Height']: `${height}cm`,
    ['Mass']: `${mass}kg`,
    ['Gender']: gender,
    ['Birth year']: birthYear
  }

  return (
    <PageWrapper>
      <CountView id={id} entity="people" />
      <main>
        <section className="w-full max-w-7xl mx-auto">
          <div className="px-8 lg:px-12">
            <div className="mb-8">
              <GoBackLink href={ROUTES.people}>Back to People</GoBackLink>
            </div>
            <PageDetails title={{ main: name }} imageUrl={imageUrl} details={personInfoMap} />
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
