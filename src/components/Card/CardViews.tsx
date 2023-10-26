import { useLocalStorage } from '@/hooks/useLocalStorage'

import pluralize from '@/utils/pluralize'
import { Entities } from '@/types/api'
import { LS_INITIAL_VIEWS, LocalStorageViews } from '@/storage/views'

import { IconEye } from '../Icons/IconEye'

interface Props {
  id: number
  entity: Entities
}

export function CardViews({ id, entity }: Props) {
  const [views] = useLocalStorage<LocalStorageViews>('views', LS_INITIAL_VIEWS)

  const getViewsText = (): string => {
    const count = views[entity]?.[id] ?? 0
    const pluralizeViews = pluralize({ count: Number(count), singular: 'view' })

    return `${count} ${pluralizeViews}`
  }

  return (
    <div className="flex gap-2 items-center">
      <div className="w-5 h-5 text-slate-600">
        <IconEye />
      </div>
      <span className="text-slate-500">{getViewsText()}</span>
    </div>
  )
}
