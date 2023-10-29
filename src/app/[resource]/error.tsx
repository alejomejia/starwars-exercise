'use client'

import { ErrorSection } from '@/components/ErrorSection/ErrorSection'

interface Props {
  error: Error & { digest?: string }
}

export default function Error({ error }: Props) {
  return <ErrorSection />
}
