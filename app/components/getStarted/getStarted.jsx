import Link from "next/link";
import Button from "../button/button";

import styles from "./getStarted.module.css"

export default function GetStarted() {
  return (
    <>
        <div className={styles.get_started}>
        <div className="container">
            <div className={styles.all_get_start}>
                <div className={styles.text_start}>
                    <h2> Get Started Today </h2>
                </div>
                <div className={styles.text_end}>
                    <Button />
                     <Link href="/contact" className={styles.text_btn}> Book a Demo </Link>
                 </div>
          </div>
        </div>
     </div>
    </>     
  )
}


