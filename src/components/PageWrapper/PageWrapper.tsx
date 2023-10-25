'use client'

import { motion } from 'framer-motion'
import { animate, initial } from './animations'

interface Props {
  children: React.ReactNode
}

export function PageWrapper({ children }: Props) {
  return (
    <motion.div initial={initial} animate={animate}>
      {children}
    </motion.div>
  )
}
