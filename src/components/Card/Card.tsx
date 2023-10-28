import Link from 'next/link'
import Image from 'next/image'

import { ParsedProperties } from '@/lib/types'

import { CardViews } from './CardViews'

interface Props extends ParsedProperties {}

export function Card({ id, title, imageUrl, resource, views }: Props) {
  return (
    <Link href={`/${resource}/${id}`} className="group">
      <article className="flex flex-col justify-center h-full transform transition duration-200 hover:-translate-y-1">
        <picture>
          <Image
            src={imageUrl ?? '/images/resource-fallback.jpg'}
            alt={title}
            className="object-cover object-top w-full h-72 rounded-t-lg"
            width={400}
            height={400}
          />
        </picture>
        <div className="bg-slate-900 p-4 rounded-b-lg transition duration-200 group-hover:bg-slate-800">
          <h3 className="text-slate-300 font-medium sm:mb-1">{title}</h3>
          <CardViews views={views} />
        </div>
      </article>
    </Link>
  )
}
