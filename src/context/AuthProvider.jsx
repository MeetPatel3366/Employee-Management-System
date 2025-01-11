import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
   const [userData,setUserData]=useState(null)

//    const data=getLocalStorage()
//    console.log(data);

    useEffect(() => {
        setLocalStorage()
        const {admin,employees}=getLocalStorage()
        setUserData({admin,employees})
    }, [])
    

  return (
    <div>
      <AuthContext.Provider value={userData} >
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
