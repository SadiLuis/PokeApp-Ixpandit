import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from '../containers/Register'

import { SingIn } from '../containers/SingIn'
import { DashboarRoutes } from './DashboarRoutes'
import { PrivateRouter } from './PrivateRoutes'
import { PublicRouter } from './PublicRouter'

export const AppRoutes = () => {
  const [cheking, setCheking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] =useState(false)

  useEffect(()=>{
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
          if(user?.uid){
              console.log(user)
              setIsLoggedIn(true)

              user.getIdToken()
             
          }
          else{
              setIsLoggedIn(false)  
          }
          setCheking(false)
      })
  }, [setIsLoggedIn, setCheking])

  if(cheking) {
      return (
         <h1>Espere....</h1>
       
      )
  }
  return (
    <BrowserRouter>
        
    <Routes>
    <Route path="/singin" element={
            <PublicRouter isAutentication={isLoggedIn}>
               <SingIn />
            </PublicRouter>

        } />
     <Route path="/register" element={
            <PublicRouter isAutentication={isLoggedIn}>
               <Register />
            </PublicRouter>

        } />
       
       <Route path="/*" element={
            <PrivateRouter isAutentication={isLoggedIn}>
                <DashboarRoutes />
            </PrivateRouter>
        } />    
       
      
    </Routes>  
  </BrowserRouter> 
  )
}
