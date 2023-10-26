import Link from 'next/link'
import { Entities } from '@/types/api'

import { CardViews } from './CardViews'

export interface CardProps {
  id: number
  title: string
  imageUrl: string | null
  entity: Entities
}

export function Card({ id, title, imageUrl, entity }: CardProps) {
  return (
    <Link href={`/${entity}/${id}`} className="group">
      <article className="flex flex-col justify-center h-full transform transition duration-200 hover:-translate-y-1">
        <picture>
          <img
            src={imageUrl ?? 'images/resource-fallback.jpg'}
            alt={title}
            className="object-cover object-top w-full h-72 rounded-t-lg"
          />
        </picture>
        <div className="bg-slate-900 p-4 rounded-b-lg transition duration-200 group-hover:bg-slate-800">
          <h3 className="text-slate-300 font-medium mb-2">{title}</h3>
          <CardViews id={id} entity={entity} />
        </div>
      </article>
    </Link>
  )
}
