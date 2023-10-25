'use client'

import { motion } from 'framer-motion'

import { Card, CardProps } from '../Card/Card'
import { animate, initial } from './animation'

interface Props {
  cards: CardProps[]
}

export function CardsGrid({ cards }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map(({ id, title, imageUrl, context }, index) => (
        <motion.div key={id} initial={initial} animate={animate(index)}>
          <Card id={id} title={title} imageUrl={imageUrl} context={context} />
        </motion.div>
      ))}
    </div>
  )
}
