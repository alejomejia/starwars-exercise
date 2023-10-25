import { getFilms } from '@/services/getFilms'
import { getEntityId } from './utils/getEntityId'

export async function useFilms(count?: number) {
  const { results } = await getFilms()

  return (count ? results.slice(0, count) : results).map((film) => ({
    id: getEntityId(film.url),
    ...film
  }))
}
