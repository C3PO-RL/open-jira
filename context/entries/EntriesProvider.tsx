'use client'
import { useReducer, ReactNode, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { EntriesContext } from './EntriesContext'
import { EntriesAction, entriesReducer } from './entriesReducer'
import { Entry, Status } from '@/interfaces'
import { entriesApi } from '@/services'

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
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

  const updateEntry = (entry: Entry) => {
    dispatch({ type: EntriesAction.UpdateEntry, payload: entry })
  }
  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: EntriesAction.InitalLoad, payload: data })
  }
  useEffect(() => {
    refreshEntries()
  }, [])

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  )
}
