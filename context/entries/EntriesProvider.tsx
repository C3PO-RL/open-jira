import { useReducer, ReactNode } from 'react'
import { EntriesContext } from './EntriesContext'
import { entriesReducer } from './entriesReducer'

export interface EntriesState {
  entries: []
}

const ENTRIES_INITIAL_STATE: EntriesState = { entries: [] }

export const EntriesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)
  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  )
}
