"use client"

import { SessionProvider } from "next-auth/react"

// create auth provider 
const AuthProvider = ({ children }) => {
   return <SessionProvider > { children } </SessionProvider>
}
 
export default AuthProvider; 



















