/**
 * Using the resource `url`, returns the resource `id` as `number`
 */

export function getResourceId(url: string): string {
  const parts = url.split('/')
  return parts[parts.length - 2]
}
