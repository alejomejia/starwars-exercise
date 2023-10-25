import { createContext, type Dispatch, type SetStateAction } from 'react'

interface AppContextType {
  isSoundEnabled: boolean
  setIsSoundEnabled: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextType>({} as AppContextType)
