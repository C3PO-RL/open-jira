'use client'
import { Entry } from '@/interfaces'
import { EntriesState } from './EntriesProvider'

export enum EntriesAction {
  Add = 'ADD',
  UpdateEntry = 'UPDATE-ENTRY',
}

type EntriesActionType = { type: EntriesAction; payload: Entry }

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case EntriesAction.Add:
      return { ...state, entries: [...state.entries, action.payload] }

    case EntriesAction.UpdateEntry:
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (action.payload._id === entry._id) {
            entry.status = action.payload.status
            entry.description = action.payload.description
          }
          return entry
        }),
      }

    default:
      return state
  }
}
