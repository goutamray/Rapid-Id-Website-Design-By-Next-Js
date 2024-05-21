
import Banner from "@/app/components/banner/banner";
import ContentImage from "@/app/components/contentImage/contentImage";
import ImageContent from "@/app/components/imageContent/imageContent";

// import images 
import travel from "@/public/travel.svg"
import okay  from "@/public/okay.svg"
import phone  from "@/public/phone.svg"
import man2  from "@/public/man2.svg"
import code  from "@/public/code.svg"
import WhatWe from "@/app/components/whatWe/whatWe";
import Pricing from "@/app/components/pricing/pricing";
import GetStarted from "@/app/components/getStarted/getStarted";


export const metadata = {
  title: 'Travel',
  description: 'Rapid Api',
}



export default function Travel() {
  return (
    <>
      <Banner title={"RapidID for Travel"}text={"Set the pace in this mobile-driven travel industry with RapidID’s all-in-one verification suite for digital identity verification of travelers every step of the way."} photo={travel}/> 

       {/** passport box section start  */}
      <ImageContent image={okay} title={"DOCUMENT VERIFICATION"} details={"Increase Customer Convenience and Avoid Cart Abandonment"}
      paragraph = {"From booking flights to hotel check-in, RapidID offers the latest KYC ID and online verification tools to help you balance the security requirements of passenger data collection with a quick and streamlined way for your customers."}/>

   {/** biometric section start  */}
      <ContentImage photo={man2} title={"DOCUMENT VERIFICATION"} desc={"Delight Your Customers With Streamlined Check-In"} para={"Allow travelers to avoid waiting in long lines to get their boarding passes and the laborious hotel check-ins when they reach their destination by verifying customer details against government and border security sources."}/> 


         {/* remove section start */}
      <ImageContent image={phone} title={"GLOBAL ID SCANNING & VERIFICATION"} details={"Eliminate Card Fraud In a High-Volume Transaction Industry"}
      paragraph = {"Without human presence, RapidID’s A.I. and Machine Learning software does the hard work of combing through thousands of records an hour, updating your records and data in real time, and making fraud much harder for criminals."}/>


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


