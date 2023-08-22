'use client'
import { useReducer, ReactNode } from 'react'
import { UIContext } from './UIContext'
import { uiReducer, UIAction } from './uiReducer'

export interface UIState {
  sideMenuOpen: boolean
  isAddingEntry: boolean
}

const UI_INITIAL_STATE: UIState = { sideMenuOpen: false, isAddingEntry: false }

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  const openSideMenu = () => {
    dispatch({ type: UIAction.Open, payload: true })
  }
  const closeSideMenu = () => {
    dispatch({ type: UIAction.Close, payload: false })
  }

  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ type: UIAction.AddEntry, payload: isAddingEntry })
  }
  return (
    <UIContext.Provider
      value={{ ...state, openSideMenu, closeSideMenu, setIsAddingEntry }}
    >
      {children}
    </UIContext.Provider>
  )
}
