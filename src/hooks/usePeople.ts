import { getPeople } from '@/services/getPeople'

export async function usePeople(count?: number) {
  const { results } = await getPeople()

  return (count ? results.slice(0, count) : results).map((character) => ({
    id: getPersonId(character.url),
    ...character
  }))
}

function getPersonId(url: string): number {
  const parts = url.split('/')
  return Number(parts[parts.length - 2])
}
