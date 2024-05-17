import box from "@/public/box.svg"
import okay  from "@/public/okay.svg"
import phone  from "@/public/phone.svg"
import man2  from "@/public/man2.svg"
import code  from "@/public/code.svg"
import scan  from "@/public/scan.svg"
import effi  from "@/public/effi.svg"
import lead  from "@/public/Leading.svg"
import price1  from "@/public/price1.svg"
import price2  from "@/public/price2.svg"
import price3  from "@/public/price3.svg"
import price4  from "@/public/price4.svg"   

import emp  from "@/public/emp.svg"
import use  from "@/public/use.svg"
import rela  from "@/public/rela.svg"

import Image from "next/image"
import styles from "./security.module.css"
import Button from "../components/button/button"
import Link from "next/link"
import WeBox from "../components/weBox/weBox"
import ContentImage from "../components/contentImage/contentImage"
import ImageContent from "../components/imageContent/imageContent"
import WhatWe from "../components/whatWe/whatWe"
import Pricing from "../components/pricing/pricing"
import GetStarted from "../components/getStarted/getStarted"

export default function Security() {
  return (
    <>
      {/* real state section start  */}
      <div className={styles.real_state}>
        <div className="container"> 
          <div className={styles.full_real_box}> 
            <div className={styles.realState_left}>
               <div className={styles.realDesc}>
                   <h1> RapidID for Security </h1>
                   <p> Create a multi-layer security environment with several authentication solutions, so you can verify documents and people instaneously to avoid potential security breaches or threats. </p>
                   <div className={styles.button_btn}>
                       <Button />
                       <Link href="/contact" className={styles.secondBtn}> Book a Demo  </Link>
                   </div>
               </div>
           </div>
            <div className={styles.realState_right}>
               <div className={styles.realPhoto}>
                   <Image src={box} alt="building"/>
               </div>
            </div>
           </div>
         </div>
      </div>


      {/** passport box section start  */}
      <ImageContent image={okay} title={"DOCUMENT VERIFICATION"} details={"Spot The Fake IDs & Avoid Hefty Fines "}
      paragraph = {"With intantaneous real-time verification, you can verify any form of ID in real-time against the DVS to keep the lines short, your patrons happy and avoid any underage drinking fines."}/>


      {/** biometric section start  */}
        <ContentImage photo={man2} title={"BIOMETRIC VERIFICATION"} desc={"Ensure Anyone Accessing Secure Premises Has Appropriate Clearance"} para={"Using liveness & face-match technology, you will know exactly who is entering and leaving secure premises to avoid any security breach. Their identity will be analysed in real-time so that you avoid granting access to any employee or visitor who has had their access revoked, or they have been identified as a threat."}/> 


     {/* remove section start */}
      <ImageContent image={phone} title={"REAL-TIME BACKGROUND CHECKS"} details={"Identify Security or Terrorist Threats Faster"}
      paragraph = {"Artificial intelligence technology that performs global watch-list checks faster & more frequently so that you can be alerted of any politically exposed person or criminal in real-time."}/>


     {/** biometric section start  */}
     <ContentImage photo={code} title={"DEVELOPERS"} desc={"Made for Developers, By Developers"} para={"We've created a service that is easy to set-up and start using without instructions. Our web portal is simplistic by design, and our developers love working with the JSON RESTful API."}/> 


     {/* What we section start  */}
       <WhatWe /> 

    {/* pricing section start*/}
      <Pricing /> 

     {/* get Started section */}
     <GetStarted />
    </>
  )
}



