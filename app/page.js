
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "./components/button/button";
// import images 
import building from "@/public/build.svg"
import passPhoto  from "@/public/pass.svg"
import phone  from "@/public/phone.svg"
import man2  from "@/public/man2.svg"
import code  from "@/public/code.svg"





import ImageContent from "./components/imageContent/imageContent";
import ContentImage from "./components/contentImage/contentImage";
import WhatWe from "./components/whatWe/whatWe";
import Pricing from "./components/pricing/pricing";
import GetStarted from "./components/getStarted/getStarted";




export default function Home() {
  return (
   <>
     {/* real state section start  */}
      <div className={styles.real_state}>
        <div className="container"> 
          <div className={styles.full_real_box}> 
            <div className={styles.realState_left}>
               <div className={styles.realDesc}>
                   <h1> RapidID for Real Estate </h1>
                   <p> A Multi-Factor Verification Suite for Real Estate Agencies and Property Management Professionals. Verify homeowners, buyers and renters in seconds with our simple web-portal or integrated solutions. Simplify customer transactions, while meeting your Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) obligations (The AML/CTF Act). </p>
                   <div className={styles.button_btn}>
                       <Button />
                       <Link href="/contact" className={styles.secondBtn}> Book a Demo  </Link>
                   </div>
               </div>
           </div>
            <div className={styles.realState_right}>
               <div className={styles.realPhoto}>
                   <Image src={building} alt="building"/>
               </div>
            </div>
           </div>
         </div>
      </div>


      {/** passport box section start  */}
      <ImageContent image={passPhoto} title={"DOCUMENT VERIFICATION"} details={" Find & On-Board the Right Tenant Quickly"}
      paragraph = {"Using their smartphone tablet or desktop devices, tenants can easily verify their 100 points of ID against trusted & approved government data sources within seconds, making the last minute scramble an enjoyable experience for all parties involved"}/>


      {/** biometric section start  */}
        <ContentImage photo={man2} title={"BIOMETRICS & ID SCANNING"} desc={"Remove Friction When it Comes to Paperwork and Manual Processes"} para={"Property settlement can seem like an endless reel of paperwork. With RapidID, you can decrease drop-off rates by allowing buyers, sellers and tenants to scan their ID documents in seconds & verify their details against government data sources."}/> 


     {/* remove section start */}
      <ImageContent image={phone} title={"GLOBAL ID VERIFICATION"} details={"Remotely Ensure the Correct Person is Behind the Application"}
      paragraph = {"Wherever your buyer or seller is in the world, RapidID’s secure neural networks reduce the risk of fraud by verifying the identity of the buyer or seller and their authority to buy or sell the nominated land or property against 100+ billion identity records across 180+ countries."}/>


     {/** biometric section start  */}
     <ContentImage photo={code} title={"DEVELOPER FRIENDLY"} desc={"Made For Developers, By Developers"} para={"We've created a service that is easy to set-up and start using without instructions. Our web portal is simplistic by design, and our developers love working with the JSON RESTful API."}/> 


     {/* What we section start  */}
      <WhatWe /> 
 
    {/* pricing section start*/}
         <Pricing />    

     {/* get Started section */}
        <GetStarted /> 
   </>
  );
}
