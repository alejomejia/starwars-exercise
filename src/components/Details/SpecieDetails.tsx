import { CustomSpecie } from '@/types/resources'

interface Props {
  specie: CustomSpecie
}

export async function SpecieDetails({ specie }: Props) {
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
  } = specie

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

  const specieInfo = Object.entries(specieInfoMap).map(([key, value], index) => (
    <li key={index} className="mb-2">
      <strong className="font-medium text-yellow-300">{key}:</strong> <span className="capitalize">{value}</span>
    </li>
  ))

  return (
    <div className="flex gap-8 text-white">
      <picture className="w-full max-w-sm">
        <img
          className="object-cover object-top w-full h-96 rounded-xl"
          src={imageUrl ?? '/images/resource-fallback.jpg'}
          alt={name}
        />
      </picture>
      <div className="flex-1">
        <h1 className="inline-block text-4xl font-bold mb-8 border-b-4 border-b-yellow-300">{name}</h1>
        <ul>{specieInfo}</ul>
      </div>
    </div>
  )
}
