'use client'
import { createContext } from 'react'

interface ContextProps {
  sideMenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
  openSideMenu: () => void
  closeSideMenu: () => void
  setIsAddingEntry: (isAddingEntry: boolean) => void
  dragging: (drag: boolean) => void
}

export const UIContext = createContext({} as ContextProps)
