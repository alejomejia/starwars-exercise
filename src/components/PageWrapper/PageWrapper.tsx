'use client'

import { motion } from 'framer-motion'
import { animate, initial, exit } from './animations'

interface Props {
  children: React.ReactNode
}

export function PageWrapper({ children }: Props) {
  return (
    <motion.div initial={initial} animate={animate} exit={exit}>
      {children}
    </motion.div>
  )
}
