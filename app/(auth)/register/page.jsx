"use client"

import logo from "@/public/logo.svg"

import styles from "./register.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


export default function Register() {
  // get form data 
   const [input, setInput] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    number : "",
    country : ""
   }); 

   // handle input change 
   const handleInputChange = (e) => {
      setInput((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value 
      }))
   };  

   // form submit 
   const handleFormSubmit = (e) => {
    e.preventDefault();

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
                        <input type="text" id="fastName" name="firstName" value={input.firstName} onChange={handleInputChange}/>
                      </div>
                      <div className={styles.last_name}>
                      <label htmlFor="lastName"> Last Name </label>
                        <input type="text" id="lastName" name="lastName" value={input.lastName} onChange={handleInputChange}/>
                      </div>
                    </div>
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="email"> Email </label>
                    <input type="email" id="email" name="email" value={input.email} onChange={handleInputChange} />
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="number"> Phone Number </label>
                    <input type="text" id="number" name="number" value={input.number} onChange={handleInputChange}/>
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="pass"> Password </label>
                    <input type="text" id="pass" name="password" value={input.password} onChange={handleInputChange} />
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="country"> Country</label>
                    <select name="country" value={input.country} onChange={handleInputChange}>
                       <option value="Bangladesh"> Bangladesh </option>
                       <option value="India"> India </option>
                       <option value="Sri Lanka"> Sri Lanka </option>
                       <option value="Australia"> Australia </option>
                       <option value="Canada"> Canada </option>
                       <option value="Japan"> Japan </option>
                    </select>
                  </div>
                  <button> Create Account </button>
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
