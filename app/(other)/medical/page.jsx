
// import images 

import okay  from "@/public/okay.svg"
import phone  from "@/public/phone.svg"
import man2  from "@/public/man2.svg"
import code  from "@/public/code.svg"
import medical from "@/public/medical.svg"

import WhatWe from "@/app/components/whatWe/whatWe";
import Pricing from "@/app/components/pricing/pricing";
import GetStarted from "@/app/components/getStarted/getStarted";
import Banner from "@/app/components/banner/banner"
import ImageContent from "@/app/components/imageContent/imageContent"
import ContentImage from "@/app/components/contentImage/contentImage"



export const metadata = {
  title: 'Medical',
  description: 'Rapid Api',
}



export default function Medical() {
  return (
    <>
      <Banner title={"RapidID for Medical"}text={"From hospitals to physio and psychology practices, ensure accurate patient identity and secure sensitive medical information to avoid healthcare identity theft."} photo={medical}/> 
  
      {/** passport box section start  */}
     <ImageContent image={okay} title={"DOCUMENT VERIFICATION & ID SCANNING"} details={"Ensure Your Employees & Patients Are Who They Say They Are"}
    paragraph = {"Using Document ID verification and Electronic Identity Verification, you can verify hospital staff and patient identities instantly - ensuring safe, accurate and reliable patient care."}/>

      {/** biometric section start  */}
      <ContentImage photo={man2} title={"BIOMETRIC VERIFICATION"} desc={"Confidentiality of Sensitive Client Information"} para={"Ensure the right person with the right permissions can access what they need to and secure sensitive medical information with biometric security features."}/> 


        {/* remove section start */}
      <ImageContent image={phone} title={"ID SCANNING & DOCUMENT VERIFICATION"} details={"Improve the Onboarding Process"}
      paragraph = {"Eliminate arduous paperwork and reduce labor costs by using RapidID’s identity verification solutions to improve the flow of patient information and transactions. Also, be confident that the person standing at the reception desk is the same person scheduled for an appointment."}/>


        {/** biometric section start  */}
        <ContentImage photo={code} title={"DOCUMENT VERIFICATION"} desc={"Maintain a Clean and Accurate Patient Database"} para={"Manual data collection of patient information can lead to inaccurate data and lost patient information somewhere in the system. With RapidID’s document verification and document scanning technology, you can rely on accurate patient verification to avoid claim rejections, payment delays and identity fraud."}/> 

      {/* What we section start  */}
      <WhatWe /> 

      {/* pricing section start*/}
        <Pricing /> 

      {/* get Started section */}
      <GetStarted />
    </>
  )
}



