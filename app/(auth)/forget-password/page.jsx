
import logo from "@/public/logo.svg"
import Image from "next/image"
import Link from "next/link"

import styles from "./forget.module.css"; 
export default function Forget() {
  return (
    <>
      <div className={styles.forget}>  
        <div className="container">
          <div className={styles.forget_form}>
              <div className={styles.logo}>
                  <Image src={logo} alt="logo"/> 
              </div>
              <div className={styles.form_data}>
                <form action="">
                  <div className={styles.my_2}>
                    <label htmlFor="email"> Email </label>
                    <input type="email" id="email"/>
                  </div>
                  <div className={styles.my_2}>
                    <Link href="/login"> I remembered my password </Link>
                  </div>
                  <button> Send forgot password email </button>
                </form>

              </div>
          </div>
        </div>
      </div>
    </>
  )
}



