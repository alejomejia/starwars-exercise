'use client'

import { LS_INITIAL_VIEWS, LocalStorageViews } from '@/storage/views'
import { ParsedResources, ResourceString } from '@/lib/types'

import { useLocalStorage } from './useLocalStorage'

export function useResource<T extends ParsedResources>(resource: T, sortByViews?: boolean, count?: number) {
  const [views] = useLocalStorage<LocalStorageViews>('views', LS_INITIAL_VIEWS)

  const resourceWithViews = resource.map((r) => ({ ...r, views: views[r.resource][r.id] ?? 0 }))
  const sortedResourceByViews = sortByViews ? resourceWithViews.sort((a, b) => b.views - a.views) : resourceWithViews

  return (count ? sortedResourceByViews.slice(0, count) : sortedResourceByViews) as T
}
