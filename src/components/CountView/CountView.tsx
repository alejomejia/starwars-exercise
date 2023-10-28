'use client'

import { useEffect } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { LS_INITIAL_VIEWS, LocalStorageViews } from '@/storage/views'
import { ResourceString } from '@/lib/types'

interface Props {
  id: string
  resource: ResourceString
}

export function CountView({ id, resource }: Props) {
  const [_, setViews] = useLocalStorage<LocalStorageViews>('views', LS_INITIAL_VIEWS)

  useEffect(() => {
    setViews((prev) => {
      const currentIdCount = prev[resource]?.[id]
      const idCount = (currentIdCount ?? 0) + 1

      return {
        ...prev,
        [resource]: {
          ...prev[resource],
          [id]: idCount
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return null
}
