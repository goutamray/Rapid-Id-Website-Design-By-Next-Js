
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

import ImageContent from "./components/imageContent/imageContent";
import ContentImage from "./components/contentImage/contentImage";
import WeBox from "./components/weBox/weBox";



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
  );
}
