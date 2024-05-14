
import logo from "@/public/logo.svg"
import Image from "next/image"
import Link from "next/link"
import styles from "./login.module.css"
export default function Login() {
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
                <form action="">
                  <div className={styles.my_2}>
                    <label htmlFor="email"> Email </label>
                    <input type="email" id="email"/>
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="pass"> Password </label>
                    <input type="text" id="pass"/>
                  </div>
                  <div className={styles.my_2} style={{display : "flex", justifyContent : "space-between"}}>
                    <Link href="/register"> Create Account </Link>
                    <Link href="/forget-password"> Forget Password </Link>
                  </div>
                  <button> Log In </button>
                </form>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

