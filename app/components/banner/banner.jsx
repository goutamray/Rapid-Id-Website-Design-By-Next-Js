import Link from "next/link";
import Button from "../button/button";
import Image from "next/image";

import styles from "./banner.module.css"

export default function Banner({ title , text, photo }) {
  return (
    <>
       <div className={styles.real_state}>
        <div className="container"> 
          <div className={styles.full_real_box}> 
            <div className={styles.realState_left}>
               <div className={styles.realDesc}>
                   <h1> { title }  </h1>
                   <p> { text } </p>
                   <div className={styles.button_btn}>
                       <Button />
                       <Link href="/contact" className={styles.secondBtn}> Book a Demo  </Link>
                   </div>
               </div>
           </div>
            <div className={styles.realState_right}>
               <div className={styles.realPhoto}>
                   <Image src={photo} alt="building"/>
               </div>
            </div>
           </div>
         </div>
      </div>
    </>
  )
}
