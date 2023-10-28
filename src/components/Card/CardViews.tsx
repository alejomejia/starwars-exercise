import pluralize from '@/utils/pluralize'

import { IconEye } from '../Icons/IconEye'

interface Props {
  views?: number
}

export function CardViews({ views }: Props) {
  const getViewsText = (): string => {
    const pluralizeViews = pluralize({ count: views ?? 0, singular: 'view' })
    return `${views} ${pluralizeViews}`
  }

  const viewsText = getViewsText()

  return (
    <div className="flex gap-2 items-center">
      <div className="w-5 h-5 text-slate-600">
        <IconEye />
      </div>
      <span className="text-slate-500">{viewsText}</span>
    </div>
  )
}
