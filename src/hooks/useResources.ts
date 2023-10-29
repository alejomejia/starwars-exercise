'use client'

import { LS_INITIAL_VIEWS, LocalStorageViews } from '@/storage/views'
import { ParsedResources } from '@/lib/types'

import { useLocalStorage } from './useLocalStorage'

export function useResources<T extends ParsedResources>(resource: T) {
  const [views] = useLocalStorage<LocalStorageViews>('views', LS_INITIAL_VIEWS)

  return resource.map((r) => ({ ...r, views: views[r.resource][r.id] ?? 0 })) as T
}
