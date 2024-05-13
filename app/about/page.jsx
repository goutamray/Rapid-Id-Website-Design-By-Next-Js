import rocket from "@/public/rocket.svg"
import technology from "@/public/technology.svg"
import calculator from "@/public/calculator.svg"
import aust from "@/public/aust.svg"
import united from "@/public/united.svg"
import hong from "@/public/hong.svg"
import london from "@/public/london.svg"

import scan  from "@/public/scan.svg"
import effi  from "@/public/effi.svg"
import lead  from "@/public/Leading.svg"
import emp  from "@/public/emp.svg"
import use  from "@/public/use.svg"
import rela  from "@/public/rela.svg"

import price1  from "@/public/price1.svg"
import price2  from "@/public/price2.svg"
import price3  from "@/public/price3.svg"
import price4  from "@/public/price4.svg"

import styles from "./about.module.css"
import Image from "next/image"
import WeBox from "../components/weBox/weBox"
import Button from "../components/button/button"
import Link from "next/link"

export default function About() {
  return (
    <>
      <div className={styles.real_state}>
        <div className="container"> 
          <div className={styles.full_real_box}> 
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

      {/* latest tools section start */}
       <div className={styles.rocket} style={{backgroundColor:"#f8f8f8"}}>
         <div className="container">
          <div className={styles.full_rocket}> 
            <div className={styles.rocket_text}>
                 <h4> LATEST TOOLS </h4>
                 <h2> We evolve with technology</h2>
                 <p>Technology doesn’t sit still, and neither do we. We’re always questioning how we can make things faster, more efficient and a better experience for our customers. </p>
            </div>
            <div className={styles.rocket_image}>
               <Image src={technology} alt="rocket"/>
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
            <div className={styles.rocket_text}>
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
            <div className={styles.rocket_text}>
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

