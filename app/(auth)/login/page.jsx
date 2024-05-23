"use client"

import logo from "@/public/logo.svg"
import Image from "next/image"
import Link from "next/link"
import styles from "./login.module.css"


export default function Login() {
   // form submit 
   const handleFormSubmit = async (e) => {
    e.preventDefault();      

  

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

