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

    {/* pricing section start*/}
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

     {/* get Started section */}
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



