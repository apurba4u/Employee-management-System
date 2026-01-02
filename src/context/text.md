


import React, { createContext, useEffect } from 'react'
import { getLocalstorage } from '../utils/localstorage'
import { useState } from 'react'
export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)
  
  useEffect(() => {
    const {employees, admin} = getLocalstorage()
    setUserData({employees, admin})
  },[])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

