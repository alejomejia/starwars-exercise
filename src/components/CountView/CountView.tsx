'use client'

import { useEffect } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { LS_INITIAL_VIEWS, LocalStorageViews } from '@/storage/views'
import { Entities } from '@/types/api'

interface Props {
  id: string
  entity: Entities
}

export function CountView({ id, entity }: Props) {
  const [_, setViews] = useLocalStorage<LocalStorageViews>('views', LS_INITIAL_VIEWS)

  useEffect(() => {
    setViews((prev) => ({
      ...prev,
      [entity]: {
        ...prev[entity],
        [id]: (prev[entity]?.[id] ?? 0) + 1
      }
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return null
}
