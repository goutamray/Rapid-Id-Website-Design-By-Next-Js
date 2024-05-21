"use client"

import logo from "@/public/logo.svg"
import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.css"
import Button from "../button/button"
import { useState } from "react"
import { IoMdMenu } from "react-icons/io";
 

export default function Header() {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const [open, setOpen] = useState(false); 

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
              {
                windowWidth < 992 ? <div className={styles.hum_menu}>
                <span onClick={() => setOpen(!open)}><IoMdMenu /></span>
               </div> : <div className={styles.menu} >
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
              }
                  
          

                  {
                    open &&   <div className={styles.menu} >
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
                        {
                      windowWidth < 992 && 
                          <> 
                          <li>
                             <Link href="/login"> Sign In </Link>
                          </li>
                          <li>
                               <Button /> 
                           </li>
                          </>
                        } 
                    </ul>    
                  </div> 
                  }
    
               
                </div>
              
               
               
               {/***** part 3  *******/}
                <div className={styles.leftPart3}> 
                  <div className={styles.auth}>
                    <ul>
                        <li>
                           <Link href="/login"> Sign In </Link>
                        </li>
                        <li>
                          <Button /> 
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
