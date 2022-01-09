import React, { createContext, useContext, useState,  useMemo } from "react";
//create context
const UserContext = createContext()
//create provider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')

  const value = useMemo(() => ({ user, setUser }), [user])
  return <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
}
//create custom hook
const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser can only be used within the UserContext Provider');
  }
  return context
}

export{ UserProvider, useUser }