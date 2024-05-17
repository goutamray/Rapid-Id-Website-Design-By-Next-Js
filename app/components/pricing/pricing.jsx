
import Image from 'next/image'
import price1  from "@/public/price1.svg"
import price2  from "@/public/price2.svg"
import price3  from "@/public/price3.svg"
import price4  from "@/public/price4.svg"

import styles from "./pricing.module.css"

export default function Pricing() {
  return (
    <>
       <div className={styles.what_we}>
       <div className="container">
          <div className={styles.top_part}>
               <h2> Pricing thats fair. </h2>
               <p> We believe in providing the best service on the market at the best price. </p>
          </div>
          <div className={styles.pricing_bottom}>
             <div className={styles.price_box}>
                <Image src={price1} alt="price"/>
                <h6> No Licence Fees </h6>
             </div>
             <div className={styles.price_box}>
                <Image src={price2} alt="price"/>
                <h6> No Implementation Fees </h6>
             </div>
             <div className={styles.price_box}>
                <Image src={price3} alt="price"/>
                <h6> No Minimum Spend </h6>
             </div>
             <div className={styles.price_box}>
                <Image src={price4} alt="price"/>
                <h6> No Hosting Fees </h6>
             </div>
          </div>

          </div>
     </div>
    </>
  )
}


