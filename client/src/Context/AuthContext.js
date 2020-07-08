import React, { createContext } from 'react'

import useAuth from './hooks/useAuth'

const Context = createContext()

const AuthProvider = ({ children }) => {
  const {
    handleLogin,
    handleLogout,
    authenticated,
    message,
    isSubmitting,
  } = useAuth()

  return (
    <Context.Provider
      value={{
        handleLogin,
        handleLogout,
        authenticated,
        message,
        isSubmitting,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { AuthProvider, Context }
