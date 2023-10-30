'use client'

import { ErrorSection } from '@/components/ErrorSection/ErrorSection'
import { useRouter } from 'next/navigation'

export default function Error() {
  const { refresh } = useRouter()

  return <ErrorSection onClick={refresh} />
}
