'use client'
import { Entry } from '@/interfaces'
import { EntriesState } from './EntriesProvider'

export enum EntriesAction {
  Add = 'ADD',
  UpdateEntry = 'UPDATE-ENTRY',
  InitalLoad = 'INITIAL-LOAD',
}

type EntriesActionType =
  | { type: EntriesAction.Add; payload: Entry }
  | { type: EntriesAction.UpdateEntry; payload: Entry }
  | { type: EntriesAction.InitalLoad; payload: Entry[] }

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
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status
            entry.description = action.payload.description
          }
          return entry
        }),
      }

    case EntriesAction.InitalLoad:
      return { ...state, entries: [...action.payload] }

    default:
      return state
  }
}
