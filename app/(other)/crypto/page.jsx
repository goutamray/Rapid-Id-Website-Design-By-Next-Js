
import regi  from "@/public/regi.svg"
import three  from "@/public/three.svg"
import pur  from "@/public/pur.svg"
import code  from "@/public/code.svg"
import crypto  from "@/public/crypto.svg"


import WhatWe from "@/app/components/whatWe/whatWe";
import Pricing from "@/app/components/pricing/pricing";
import GetStarted from "@/app/components/getStarted/getStarted";
import Banner from "@/app/components/banner/banner"
import ImageContent from "@/app/components/imageContent/imageContent"
import ContentImage from "@/app/components/contentImage/contentImage"


export const metadata = {
  title: 'Crypto',
  description: 'Rapid Api',
}


export default function Crypto() {
  return (
    <>
          <Banner title={"RapidID for Cryptocurrency"}text={"Since 2016, Cryptocurrency trading has boomed. Due to this rising interest, verification requirements have become more of a common practice in order to prevent money laundering and scams."} photo={crypto}/> 
  
            {/** passport box section start  */}
          <ImageContent image={regi} details={"Prevent Identity Thieves from Enrolling and Graduating Dishonestly"}
          paragraph = {"Using Document ID verification and Electronic Identity Verification, you can verify hospital staff and patient identities instantly - ensuring safe, accurate and reliable patient care."}/>

            {/** biometric section start  */}
            <ContentImage photo={pur} title={"FACE-MATCH & ID SCANNING"} desc={"Ensure Age Verification Requirements Are Met"} para={"Allow your students to face-match their photo ID instantly at on-campus bars, to not only ensure the safety of the students, but you’re also adhering to strict underage drinking laws that come with large penalties."}/> 


        {/* remove section start */}
        <ImageContent image={three} title={"DOCUMENT VERIFICATION"}  details={"Issue New Student Identification With Accuracy and Ease"}
        paragraph = {"Check 100 points of ID or a specific document against the original source to ensure you are issuing identification to the right person and an eligible student."}/>


      {/** biometric section start  */}
      <ContentImage photo={code} title={"DEVELOPERS"} desc={"Developer friendly"} para={"We've created a service that is easy to set-up and start using without instructions. Our web portal is simplistic by design, and our developers love working with the JSON RESTful API."}/> 

      {/* What we section start  */}
      <WhatWe /> 

      {/* pricing section start*/}
        <Pricing /> 

      {/* get Started section */}
      <GetStarted />
    </>
  )
}


