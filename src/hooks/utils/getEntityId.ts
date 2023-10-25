/**
 * Using the entity `url`, returns the entity `id` as `number`
 */

export function getEntityId(url: string): number {
  const parts = url.split('/')
  return Number(parts[parts.length - 2])
}
