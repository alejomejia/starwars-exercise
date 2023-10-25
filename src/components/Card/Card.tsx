import Link from 'next/link'
import { IconEye } from '../Icons/IconEye'

export interface CardProps {
  id: number
  title: string
  context: string
}

export function Card({ id, title, context }: CardProps) {
  return (
    <Link href={`/${context}/${id}`}>
      <article className="bg-slate-900 p-8 rounded-xl flex justify-between items-center h-full transform transition duration-200 hover:bg-slate-800 hover:-translate-y-0.5">
        <h3 className="text-slate-300 font-medium">{title}</h3>
        <div className="text-slate-500">
          <div className="w-6 h-6">
            <IconEye />
          </div>
        </div>
      </article>
    </Link>
  )
}
