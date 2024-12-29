import React, { createContext, useEffect, useState } from 'react'
import { getlocalstorage } from '../utils/Localstorage'
export const Authcontext=createContext()
const Authprovider = ({children}) => {
    // localStorage.clear()
  const [userdata,setuserdata]=useState(null)
  useEffect(()=>{
    const {employees}
    =getlocalstorage()
    setuserdata(employees)
  },[])

  return (
    <div>
        <Authcontext.Provider value={[userdata,setuserdata]}>
            {children}
        </Authcontext.Provider>
    </div>
  )
}

export default Authprovider
