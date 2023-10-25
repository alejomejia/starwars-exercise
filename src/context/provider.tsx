'use client'

import { useState } from 'react'
import { AppContext } from '.'

interface Props {
  children: React.ReactNode
}

export function AppContextProvider({ children }: Props) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false)

  return <AppContext.Provider value={{ isSoundEnabled, setIsSoundEnabled }}>{children}</AppContext.Provider>
}
