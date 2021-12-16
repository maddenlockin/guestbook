import React, { createContext, useContext, useState } from "react";
//create context
const EntryContext = createContext()
//create provider
const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([])

  return (
    <EntryContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntryContext.Provider>
  )
}

//create custom hook to be used in the provider
const useEntries = () => {
  const context = useContext(EntryContext)

  if (context === undefined) {
    throw new Error('useEntries can only be used within the EntryContext Provider')
  }
  return context
}

export { EntryProvider, useEntries }