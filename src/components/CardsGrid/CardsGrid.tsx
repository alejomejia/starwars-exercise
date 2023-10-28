'use client'

import { motion } from 'framer-motion'

import { ParsedResources } from '@/lib/types'

import { Card } from '../Card/Card'
import { animate, initial } from './animation'

interface Props<T extends ParsedResources> {
  cards: T
}

export function CardsGrid({ cards }: Props<ParsedResources>) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ id, title, imageUrl, resource, views }, index) => (
        <motion.div key={id} initial={initial} animate={animate(index)}>
          <Card id={id} title={title} imageUrl={imageUrl} resource={resource} views={views} />
        </motion.div>
      ))}
    </div>
  )
}
