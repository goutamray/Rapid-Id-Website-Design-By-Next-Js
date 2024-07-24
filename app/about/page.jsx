
// import images 
import rocket from "@/public/rocket.svg"
import technology from "@/public/technology.svg"
import calculator from "@/public/calculator.svg"
import aust from "@/public/aust.svg"
import united from "@/public/united.svg"
import hong from "@/public/hong.svg"
import london from "@/public/london.svg"


import styles from "./about.module.css"
import Image from "next/image"
import WeBox from "../components/weBox/weBox"
import WhatWe from "../components/whatWe/whatWe"
import Pricing from "../components/pricing/pricing"
import GetStarted from "../components/getStarted/getStarted"


export const metadata = {
  title: 'About',
  description: 'Rapid Api',
}


export default function About() {
  return (
    <>
      {/* banner section star */}

      <div className={styles.real_state}>
        <div className="container"> 
          <div className={styles.full_real_box_ab}> 
            <div className={styles.realState_left}>
               <div className={styles.realDesc}>
                   <h1>Dedicated to Advancing & Simplifying ID Verification </h1>
                   <p>We’re living in a digital world with multiple devices, carrying multiple versions of our identity. Each device we interact with and connect to, captures a snapshot of our identity in that particular moment. From startups to Fortune 500 companies, RapidID is helping businesses join the dots to create deeper connections and trust in the world we live in, through real-time identity verification. </p>
                  
                 </div>
              </div>
           </div>
         </div>
      </div>

      {/* Rocket section start  */}
       <div className={styles.rocket}>
         <div className="container">
          <div className={styles.full_rocket}> 
            <div className={styles.rocket_image}>
               <Image src={rocket} alt="rocket"/>
            </div>
            <div className={styles.rocket_text}>
                 <h2> Its in the name </h2>
                 <p>Everything we do is rapid. In a world where we’ve become impatient, the use of trusted identity technology is enabling faster interactions with the tools we’re using everyday. From fingerprints, to voice applications and facial recognition, we’re obsessed with ensuring the digital interactions you have everyday are streamlined and secure in every way possible. </p>
            </div>
           </div>
         </div>     
       </div>                

      {/***** latest tools section start *******/}
       <div className={styles.rocket}  style={{backgroundColor:"#f8f8f8"}}>
         <div className="container">
          <div className={styles.full_rocket}> 
            <div className={styles.rocket_text}>
                 <h4> LATEST TOOLS </h4>
                 <h2> We envolve with technology</h2>
                 <p>Technology doesn’t sit still, and neither do we. We’re always questioning how we can make things faster, more efficient and a better experience for our customers. </p>
            </div>
            <div className={styles.rocket_image}>
               <Image  src={technology} alt="rocket"/>    
            </div>
           </div>       
         </div>
       </div>

      {/* instant regulatory section start */}
       <div className={styles.rocket} style={{paddingTop: "40px"}}>
         <div className="container">
          <div className={styles.full_rocket}> 
            <div className={styles.rocket_image}>
               <Image src={calculator} alt="rocket"/>
            </div>
            <div  className={styles.rocket_text}>
                 <h4> INSTANT REGULATORY COMPLIANCE </h4>
                 <h2> We don’t believe in financial barriers </h2>
                 <p>We believe in a simple costing model, where you only pay for what services you use. RapidID’s systems are highly automated & this means we can pass savings onto you instead. </p>
            </div>
           </div>
         </div>
       </div>

       {/* austrian section */}
       <div className={styles.rocket} style={{paddingTop: "40px"}}>
         <div className="container">
          <div className={styles.full_rocket}> 
            <div className={styles.rocket_image}>
               <Image src={aust} alt="rocket"/>
            </div>
            <div className={styles.rocket_text} style={{textAlign: "center"}}>
                 <h2> 100% </h2>
                 <h5> AUSTRALIAN OWNED, GLOBALLY OPERATED  </h5>
            </div>
           
           </div>
         </div>
       </div>


     {/* country css */}
     <div className="united_country"> 
      <div className="container">
        <div className={styles.we_bottom_part}>
             <div className={styles.we_box_content}>
                <WeBox icon={united} title={"UNITED STATES"} desc={"RAPIDID INC"}/> 
             </div>
             <div className={styles.we_box_content}>
                <WeBox icon={hong} title={"HONG KONG"} desc={"RAPIDID HK PTY LTD"}/> 
             </div>
             <div className={styles.we_box_content}>
                <WeBox icon={london} title={"LONDON"} desc={"RAPIDID PTY LTD "}/> 
             </div>
          </div>
        </div>
      </div>

      
     {/* What we section start  */}
      <WhatWe />

    {/* pricing section start*/}
     <Pricing /> 

     {/* get Started section */}
      <GetStarted /> 
    </>
  )
}

