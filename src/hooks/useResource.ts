'use client'

import { LS_INITIAL_VIEWS } from '@/storage/views'
import { ParsedResources, ResourceString } from '@/lib/types'

import { useLocalStorage } from './useLocalStorage'

/* Move to useLocalStorage */
type ResourceViews = Record<string, number>
export type LocalStorageViews = Record<ResourceString, ResourceViews>
/*** */

interface Props<T extends ParsedResources> {
  resources: T
  sortByViews?: boolean
  count?: number
}

export function useResource({ resources, sortByViews, count }: Props<ParsedResources>) {
  const [views] = useLocalStorage<LocalStorageViews>('views', LS_INITIAL_VIEWS)

  const resourceWithViews = resources.map((r) => ({ ...r, views: views[r.resource][r.id] ?? 0 }))
  const sortedResourceByViews = sortByViews ? resourceWithViews.sort((a, b) => b.views - a.views) : resourceWithViews

  return count ? sortedResourceByViews.slice(0, count) : sortedResourceByViews
}
