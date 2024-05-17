import WeBox from "../weBox/weBox";
import scan  from "@/public/scan.svg"
import effi  from "@/public/effi.svg"
import lead  from "@/public/Leading.svg"
import emp  from "@/public/emp.svg"
import use  from "@/public/use.svg"
import rela  from "@/public/rela.svg"

import styles from "./whatWe.module.css"

export default function WhatWe() {
  return (
    <>
          <div className={styles.what_we}>
       <div className="container">
          <div className={styles.top_part}>
               <h2> What We Stand For </h2>
               <p> We are creating a seamless connection between people and technology through ID verification. </p>
          </div>
          <div className={styles.we_bottom_part}>
             <div className={styles.we_box_content}>
                <WeBox icon={scan} title={"TRANSPARENCY"} desc={"We don’t collect data, so you can enjoy peace of mind knowing client’s personal data won’t be mined and used later."}/> 
             </div>
             <div className={styles.we_box_content}>
                <WeBox icon={effi} title={"EFFICIENCY"} desc={"With access to more than 100+ billion identity records from around the world, we're able verify virtually any form of ID Document including passports, driver’s licenses & National ID's in real time."}/> 
             </div>
             <div className={styles.we_box_content}>
                <WeBox icon={lead} title={"LEADING"} desc={"RapidID is among the most cost-effective options on the market, with no setup fees, no monthly licence fees, no minimum spend, just a simple PAYG model. "}/> 
             </div>
          </div>

          <div className={styles.we_bottom_part}>
             <div className={styles.we_box_content}>
                <WeBox icon={emp} title={"EMPOWERMENT"} desc={"We're here to support your business with the right tools that are intuitive and easy-to-use, so that you can offer a seamless experience to your customers."}/> 
             </div>
             <div className={styles.we_box_content}>
                <WeBox icon={rela} title={"SECURITY"} desc={"We take data protection & your privacy very seriously. The burden of a possible data breach is too much responsibility for any one company. We don't keep any sensitive personal information at all. Zero data. Zero risk of any data breach. "}/> 
             </div>
             <div className={styles.we_box_content}>
                <WeBox icon={use} title={"EASE-OF-USE"} desc={"We've created a service that is easy to set-up and start using without instructions. Our web portal is simplistic by design, and our developers love working with the JSON RESTFUL API."}/> 
             </div>
          </div>

       </div>
    </div>
    </>
  )
}


