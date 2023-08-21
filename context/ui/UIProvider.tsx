'use client'
import { UIContext, uiReducer } from './'
import { useReducer, ReactNode } from 'react'

export interface UIState {
  sideMenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = { sideMenuOpen: false }

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  return (
    <UIContext.Provider value={{ sideMenuOpen: false }}>
      {children}
    </UIContext.Provider>
  )
}
