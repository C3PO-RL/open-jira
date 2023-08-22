'use client'
import { useReducer, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { EntriesContext } from './EntriesContext'
import { EntriesAction, entriesReducer } from './entriesReducer'
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

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: Status.Pending,
    }
    dispatch({ type: EntriesAction.Add, payload: newEntry })
  }

  const updatEntry = (entry: Entry) => {
    dispatch({ type: EntriesAction.Add, payload: entry })
  }

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updatEntry }}>
      {children}
    </EntriesContext.Provider>
  )
}
