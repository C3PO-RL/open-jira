'use client'
import { Entry } from '@/interfaces'
import { EntriesState } from './EntriesProvider'

export enum EntriesAction {
  Add = 'ADD',
}

type EntriesActionType = { type: EntriesAction; payload: Entry }

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case EntriesAction.Add:
      return { ...state, entries: [...state.entries, action.payload] }

    // case '':
    //   return { ...state }

    default:
      return state
  }
}
