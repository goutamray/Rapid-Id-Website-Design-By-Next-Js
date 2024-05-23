"use client"

import logo from "@/public/logo.svg"

import styles from "./register.module.css"
import Image from "next/image"
import Link from "next/link"

import { useState } from "react"
 import { isEmail } from "@/helpers/helpers"
import { useRouter } from "next/navigation"    
    

export default function Register() { 
      
  const [error, setError] = useState("")     
  const router = useRouter(); 

   // handle form submit 
   const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      const fastName = e.target[0].value;
      const lastName = e.target[1].value;
      const phone = e.target[2].value;
      const country = e.target[3].value;
      const email = e.target[4].value;
      const password = e.target[5].value;   

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

      
      try {
        const res = await fetch("/api/register", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            fastName,
            lastName,
            phone,
            country,
            email,   
            password
          }) 
        });     

        if(res.status === 400){
          setError("Email Already Exists")
        }else if(res.status === 200){
           setError("")
           router.push("/login")
        }   

      } catch (error) {
        setError("Error, Something went wrong")
      }    
   }

  return (
    <>
      <div className={styles.signUp}>  
        <div className="container">
          <div className={styles.signUp_form}>
              <div className={styles.logo}>
                  <Image src={logo} alt="logo"/> 
              </div>
              <div className={styles.form_data}>                 
                <h3> Create an Account </h3>
                <form onSubmit={handleFormSubmit}>
                  <div className={styles.my_2}>
                    <div className={styles.name_box}> 
                      <div className={styles.first_name}>
                        <label htmlFor="fastName"> First Name </label>
                        <input type="text" id="fastName" name="firstName" />
                      </div>
                      <div className={styles.last_name}>
                      <label htmlFor="lastName"> Last Name </label>
                        <input type="text" id="lastName" name="lastName" />
                      </div>
                    </div>      
                  </div>        
                   <div className={styles.my_2}>
                    <label htmlFor="number"> Phone Number </label>
                    <input type="text" id="number" name="phone" />
                  </div> 
                  <div className={styles.my_2}>
                    <label htmlFor="country"> Country</label>
                    <select name="country" >
                       <option value="Bangladesh"> Bangladesh </option>
                       <option value="India"> India </option>
                       <option value="Sri Lanka"> Sri Lanka </option>
                       <option value="Australia"> Australia </option>
                       <option value="Canada"> Canada </option>
                       <option value="Japan"> Japan </option>
                    </select>    
                  </div> 
                  <div className={styles.my_2}>
                    <label htmlFor="email1"> Email </label>
                    <input type="email" id="email1" name="email"  />
                  </div> 
                  <div className={styles.my_2}>
                    <label htmlFor="pass"> Password </label>
                    <input type="password" id="pass" name="password"  />
                  </div>    
 
                  <button type="submit"> Create Account </button>
                  <p className={styles.ab_error}> {error && error }</p>
                </form>
                <div className={styles.my_2}>
                    <Link href="/login"> Already have an account </Link>
                </div>     
              </div>       
          </div>
        </div>
      </div>
    </>
  )
}
