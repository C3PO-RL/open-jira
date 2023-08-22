'use client'
import { useReducer, ReactNode } from 'react'
import { UIContext } from './UIContext'
import { uiReducer, UIAction } from './uiReducer'

export interface UIState {
  sideMenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = { sideMenuOpen: false }

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  const openSideMenu = () => {
    dispatch({ type: UIAction.Open })
  }
  const closeSideMenu = () => {
    dispatch({ type: UIAction.Close })
  }
  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
      {children}
    </UIContext.Provider>
  )
}
