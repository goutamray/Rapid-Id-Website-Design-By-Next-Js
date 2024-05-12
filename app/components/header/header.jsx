

import logo from "@/public/logo.svg"
import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.css"

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className="container">
            <div className={styles.topPart}>
                {/* part 1  */}
                 <div className={styles.leftPart1}> 
                     <div className={styles.logo}>
                          <Link href="/"> 
                            <Image src={logo} alt="logo" /> 
                          </Link>
                    </div>
                  </div>

                {/* part 2  */}
                <div className={styles.leftPart2}> 
                  <div className={styles.menu}>
                    <ul>
                        <li>
                            <Link href="/"> Home </Link>
                        </li>
                        <li>
                            <Link href="/about"> About </Link>
                        </li>
                        <li>
                            <Link href="/blog"> Blog </Link>
                        </li>
                        <li>
                            <Link href="/faq"> Faq </Link>
                        </li>
                        <li>
                            <Link href="/security"> Security </Link>
                        </li>
                        <li>
                            <Link href="/contact"> Contact </Link>
                        </li>
                    </ul>
                  </div>
                </div>
               
               {/* part 3  */}
                <div className={styles.leftPart3}> 
                  <div className={styles.auth}>
                    <ul>
                        <li>
                           <Link href="/login"> Sign In </Link>
                        </li>
                        <li>
                           <Link href="/register" className={styles.buttonRegister}> Get Started </Link>
                        </li>
                    </ul>
                  </div>
                </div>

             </div>
        </div>
      </div>
    </>
  )
}
