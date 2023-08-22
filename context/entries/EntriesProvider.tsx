'use client'
import { useReducer, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { EntriesContext } from './EntriesContext'
import { entriesReducer } from './entriesReducer'
import { Entry, Status } from '@/interfaces'

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'initial state description 1',
      createdAt: Date.now(),
      status: Status.Pending,
    },
    {
      _id: uuidv4(),
      description: 'initial state description 2',
      createdAt: Date.now() - 1000000,
      status: Status.InProgress,
    },
    {
      _id: uuidv4(),
      description: 'initial state description 3',
      createdAt: Date.now() - 100000,
      status: Status.Finished,
    },
  ],
}

export const EntriesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  )
}
