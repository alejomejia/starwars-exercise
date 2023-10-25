import Link from 'next/link'
import { IconEye } from '../Icons/IconEye'

export interface CardProps {
  id: number
  title: string
  imageUrl: string | null
  entity: string
}

export function Card({ id, title, imageUrl, entity }: CardProps) {
  return (
    <Link href={`/${entity}/${id}`}>
      <article className="bg-slate-900 p-8 rounded-xl flex flex-col justify-center h-full transform transition duration-200 hover:bg-slate-800 hover:-translate-y-0.5">
        <picture>
          <img src={imageUrl ?? ''} alt={title} className="rounded-xl" />
        </picture>
        <h3 className="text-slate-300 font-medium mb-2">{title}</h3>
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5 text-slate-600">
            <IconEye />
          </div>
          <span className="text-slate-500">0 views</span>
        </div>
      </article>
    </Link>
  )
}
