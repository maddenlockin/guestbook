import React, { useContext } from 'react'
import { authContext } from '../context/ProvideAuth'

/**
 * @returns {{user: {email:string}, login: (email:string, password:string) => bool, logout: () => void}} authContext
*/

export function useAuth() {

  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a ProvideAuth context')
  }

  return context;
}
