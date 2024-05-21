import box from "@/public/box.svg"
import okay  from "@/public/okay.svg"
import phone  from "@/public/phone.svg"
import man2  from "@/public/man2.svg"
import code  from "@/public/code.svg"

import ContentImage from "../components/contentImage/contentImage"
import ImageContent from "../components/imageContent/imageContent"
import WhatWe from "../components/whatWe/whatWe"
import Pricing from "../components/pricing/pricing"
import GetStarted from "../components/getStarted/getStarted"
import Banner from "../components/banner/banner"

export const metadata = {
  title: 'Security',
  description: 'Rapid Api',
}

export default function Security() {
  return (
    <>
      {/* real state section start  */}
      <Banner title={"RapidID for Security"}text={"Create a multi-layer security environment with several authentication solutions, so you can verify documents and people instaneously to avoid potential security breaches or threats."} photo={box}/> 




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



