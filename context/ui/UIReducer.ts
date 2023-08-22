'use client'
import { UIState } from './UIProvider'

export enum UIAction {
  Open = 'UI-OPEN-SIDEBAR',
  Close = 'UI-CLOSE-SIDEBAR',
  AddEntry = 'UI-SET-ADD-ENTRY',
}

type UIActionType = { type: UIAction; payload: boolean }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case UIAction.Open:
      return { ...state, sideMenuOpen: action.payload }

    case UIAction.Close:
      return { ...state, sideMenuOpen: action.payload }

    case UIAction.AddEntry:
      return { ...state, isAddingEntry: action.payload }

    default:
      return state
  }
}
