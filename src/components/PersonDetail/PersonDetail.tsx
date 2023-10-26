import { CustomPerson } from '@/types/resources'

interface Props {
  person: CustomPerson
}

export async function PersonDetail({ person }: Props) {
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
  } = person

  const personalInfoMap = {
    ['Hair Color']: hairColor,
    ['Eye Color']: eyeColor,
    ['Skin Color']: skinColor,
    ['Height']: `${height}cm`,
    ['Mass']: `${mass}kg`,
    ['Gender']: gender,
    ['Birth year']: birthYear
  }

  const personalInfo = Object.entries(personalInfoMap).map(([key, value], index) => (
    <li key={index} className="mb-2">
      <strong className="font-medium text-yellow-300">{key}:</strong> <span className="capitalize">{value}</span>
    </li>
  ))

  return (
    <div className="flex gap-8 text-white">
      <picture className="w-full max-w-sm">
        <img
          className="object-cover object-top w-full h-96 rounded-xl"
          src={imageUrl ?? 'images/resource-fallback.jpg'}
          alt={name}
        />
      </picture>
      <div className="flex-1">
        <h1 className="inline-block text-4xl font-bold mb-8 border-b-4 border-b-yellow-300">{name}</h1>
        <ul className="">{personalInfo}</ul>
      </div>
    </div>
  )
}
