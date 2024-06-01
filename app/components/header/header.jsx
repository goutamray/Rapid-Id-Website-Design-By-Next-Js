"use client"

import logo from "@/public/logo.svg"
import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.css"
import Button from "../button/button"
import { MdMenu } from "react-icons/md";

import { signOut, useSession } from "next-auth/react"

export default function Header() {
   const { data : session } = useSession(); 

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
                  <input className={styles.humba_check} type="checkbox" name=""  />
                  <span> <MdMenu /> </span>
              
                 <ul>
                    <li>
                        <Link href="/"> Home </Link>
                    </li>
                    {/* <li>
                        <Link href="/dashboard"> Dashboard </Link>
                    </li> */}
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
                    <li className={styles.list_menu}>
                        <Link href="/contact"> Contact </Link>
                    </li>
                    {
                      !session ? (
                        <> 
                           <li>
                                <Link href="/login"> Sign In </Link>
                           </li>
                           <li className={styles.button_get}>
                                <Button />    
                           </li>
                       </>
                      ) : (
                        <> 
                           <li>
                               <button onClick={() => { signOut(); }} className="sign-out-btn"> Log Out </button>
                           </li>
                         </>   
                      )
                    }
                   
                    
                </ul>    
              </div>  
                                                                 
            </div>
        </div>
      </div>
    </>
  )
}
