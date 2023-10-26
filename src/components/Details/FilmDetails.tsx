import { CustomFilm } from '@/types/resources'

interface Props {
  film: CustomFilm
}

const episodeMap: Record<number, string> = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI'
}

export async function FilmDetails({ film }: Props) {
  const {
    imageUrl,
    title,
    episode_id: episodeId,
    opening_crawl: openingCrawl,
    director,
    producer,
    release_date: releaseDate
  } = film

  const filmInfoMap = {
    ['Director']: director,
    ['Producer']: producer,
    ['Release Date']: releaseDate
  }

  const episode = episodeMap[episodeId]

  const filmInfo = Object.entries(filmInfoMap).map(([key, value], index) => (
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
          alt={title}
        />
      </picture>
      <div className="flex-1">
        <h1 className="mb-2 text-xl font-medium text-slate-300">Star Wars: Episode {episode}</h1>
        <h2 className="inline-block text-4xl font-bold mb-8 border-b-4 border-b-yellow-300">{title}</h2>
        <p className="text-lg mb-8">{openingCrawl}</p>
        <ul>{filmInfo}</ul>
      </div>
    </div>
  )
}
