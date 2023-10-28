/**
 * Using the entity `url`, returns the entity `id` as `number`
 */

export function getResourceId(url: string): number {
  const parts = url.split('/')
  return Number(parts[parts.length - 2])
}
