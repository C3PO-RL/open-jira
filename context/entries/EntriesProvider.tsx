'use client'
import { useReducer, ReactNode, useEffect } from 'react'
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

  const updateEntry = async (entry: Entry) => {
    const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, {
      description: entry.description,
      status: entry.status,
    })

    dispatch({ type: EntriesAction.UpdateEntry, payload: data })
  }

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: EntriesAction.InitalLoad, payload: data })
  }

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', {
      description: description,
    })
    dispatch({ type: EntriesAction.Add, payload: data })
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
