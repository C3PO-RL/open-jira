'use client'
import { UIState } from './'

export enum Action {
  Open = 'UI-OPEN-SIDEBAR',
  Close = 'UI-CLOSE-SIDEBAR',
}

type UIActionType = { type: Action }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case Action.Open:
      return { ...state, sideMenuOpen: true }

    case Action.Close:
      return { ...state, sideMenuOpen: false }

    default:
      return state
  }
}
