'use client'
import { Entry } from '@/interfaces'
import { createContext } from 'react'

interface ContextProps {
  entries: Entry[]
  addNewEntry: (description: string) => void
  updatEntry: (entry: Entry) => void
}

export const EntriesContext = createContext({} as ContextProps)
