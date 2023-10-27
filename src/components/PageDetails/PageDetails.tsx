'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { variantImage, variantContent } from './animation'

type Title = {
  main: string
  secondary?: string
}

interface Props {
  title: Title
  imageUrl: string | null
  description?: string
  details: Record<string, string>
}

export function PageDetails({ title, imageUrl, description, details }: Props) {
  const Heading = title.secondary ? 'h2' : 'h1'

  const detailsInfo = Object.entries(details).map(([key, value], index) => (
    <li key={index} className="mb-2">
      <strong className="font-medium text-yellow-300">{key}:</strong> <span className="capitalize">{value}</span>
    </li>
  ))

  return (
    <div className="flex gap-8 text-white">
      <motion.picture className="w-full max-w-sm" variants={variantImage} initial="initial" animate="animate">
        <Image
          className="object-cover object-top w-full h-96 rounded-xl"
          src={imageUrl ?? '/images/resource-fallback.jpg'}
          alt={title.main}
          width={400}
          height={400}
        />
      </motion.picture>
      <motion.div variants={variantContent} initial="initial" animate="animate">
        <div className="flex-1">
          {title.secondary && <h1 className="mb-2 text-xl font-medium text-slate-300">{title.secondary}</h1>}
          <Heading className="inline-block text-4xl font-bold mb-8 border-b-4 border-b-yellow-300">
            {title.main}
          </Heading>
          {description && <p className="text-lg mb-8">{description}</p>}
          <ul>{detailsInfo}</ul>
        </div>
      </motion.div>
    </div>
  )
}
