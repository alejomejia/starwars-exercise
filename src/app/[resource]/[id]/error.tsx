'use client'

import { ErrorSection } from '@/components/ErrorSection/ErrorSection'

interface Props {
  reset: () => void
}

export default function Error({ reset }: Props) {
  return <ErrorSection onReset={reset} />
}
