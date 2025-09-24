"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LoadingContextType {
  hasLoadedOnce: boolean
  setHasLoadedOnce: (value: boolean) => void
}

const LoadingContext = createContext<LoadingContextType>({
  hasLoadedOnce: false,
  setHasLoadedOnce: () => {}
})

export const useLoadingContext = () => useContext(LoadingContext)

interface LoadingProviderProps {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [hasLoadedOnce, setHasLoadedOnceState] = useState(false)

  useEffect(() => {
    // Check if user has already seen the loading screen in this session
    const hasLoaded = sessionStorage.getItem('hasLoadedOnce') === 'true'
    setHasLoadedOnceState(hasLoaded)
  }, [])

  const setHasLoadedOnce = (value: boolean) => {
    setHasLoadedOnceState(value)
    sessionStorage.setItem('hasLoadedOnce', value.toString())
  }

  return (
    <LoadingContext.Provider value={{ hasLoadedOnce, setHasLoadedOnce }}>
      {children}
    </LoadingContext.Provider>
  )
}