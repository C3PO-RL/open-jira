'use client'
import { EntriesState } from './EntriesProvider'

enum Action {}

type EntriesActionType = { type: Action }

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    // case '':
    //   return { ...state }

    // case '':
    //   return { ...state }

    default:
      return state
  }
}
