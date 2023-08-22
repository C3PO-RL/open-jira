'use client'
import { UIState } from './'

export enum UIAction {
  Open = 'UI-OPEN-SIDEBAR',
  Close = 'UI-CLOSE-SIDEBAR',
}

type UIActionType = { type: UIAction }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case UIAction.Open:
      return { ...state, sideMenuOpen: true }

    case UIAction.Close:
      return { ...state, sideMenuOpen: false }

    default:
      return state
  }
}
