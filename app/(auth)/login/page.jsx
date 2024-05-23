"use client"

import logo from "@/public/logo.svg"
import Image from "next/image"
import Link from "next/link"
import styles from "./login.module.css"
import { signIn, useSession } from "next-auth/react" 
import { useEffect, useState } from "react"
 import { isEmail } from "@/helpers/helpers"
import { useRouter } from "next/navigation" 


export default function Login() {

  const [error, setError] = useState("");      
  const router = useRouter(); 
  const session = useSession(); 

  useEffect(() => {
    if (session?.status === "authenticated") {
       router.replace("/dashboard")
    }
 }, [session, router]); 


   // handle form submit 
   const handleFormSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;   

   // check email 
    if(!isEmail(email)){
      setError("Email is Invalid")
      return;  
    }; 

  // check password 
    if(!password || password.length < 6 ){
       setError("Password is Invalid")
       return;    
    };     

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password
    })
     
    if (res?.error) {
      setError("Invalid user or password");
      if(res?.url) {
        return router.replace("/dashboard")
      }
     }else{
      setError("")
     }

   }


  return (
    <> 
      <div className={styles.login}>       
        <div className="container"> 
          <div className={styles.login_form}>     
              <div className={styles.logo}>
                  <Image src={logo} alt="logo"/> 
              </div>
              <div className={styles.form_data}>   
                <h3> Sign In </h3>
                <form onSubmit={handleFormSubmit}>
                  <div className={styles.my_2}>
                    <label htmlFor="email"> Email </label>
                    <input type="email" id="email" name="email"  />
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="pass"> Password </label>
                    <input type="password" id="pass" name="password" />
                  </div>
                  <button type="submit"> Log In </button>
                  <p className={styles.ab_error}> {error && error }</p>
                </form>
                <div className={styles.my_2_ab} >
                    <Link href="/register" className={styles.create}> Create Account </Link>   
                  </div>
              </div>        
          </div>
        </div>     
      </div>
    </>
  )
}

