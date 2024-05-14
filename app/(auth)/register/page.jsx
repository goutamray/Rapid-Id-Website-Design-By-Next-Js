
import logo from "@/public/logo.svg"

import styles from "./register.module.css"
import Image from "next/image"
import Link from "next/link"
export default function Register() {
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
                <form action="">
                  <div className={styles.my_2}>
                    <div className={styles.name_box}> 
                      <div className={styles.first_name}>
                        <label htmlFor="fastName"> First Name </label>
                        <input type="text" id="fastName" />
                      </div>
                      <div className={styles.last_name}>
                      <label htmlFor="lastName"> Last Name </label>
                        <input type="text" id="lastName" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="email"> Email </label>
                    <input type="email" id="email"/>
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="number"> Phone Number </label>
                    <input type="text" id="number"/>
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="pass"> Password </label>
                    <input type="text" id="pass"/>
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="company"> Company Name (legal entity) </label>
                    <input type="text" id="company"/>
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="country"> Country</label>
                    <select name="country" id="">
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
