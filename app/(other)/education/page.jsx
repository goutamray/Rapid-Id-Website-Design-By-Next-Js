import Banner from "@/app/components/banner/banner";
import ContentImage from "@/app/components/contentImage/contentImage";
import GetStarted from "@/app/components/getStarted/getStarted";
import ImageContent from "@/app/components/imageContent/imageContent";
import Pricing from "@/app/components/pricing/pricing";
import WhatWe from "@/app/components/whatWe/whatWe";

import phone  from "@/public/phone.svg"
import man2  from "@/public/man2.svg"
import code  from "@/public/code.svg"
import educate from "@/public/educate.svg"
import acal from "@/public/acal.svg"


export const metadata = {
  title: 'Education',
  description: 'Rapid Api',
}



export default function Education() {
  return (
    <>
          <Banner title={"RapidID for Education"}text={"From enrolment of students, through the examination process, upon qualification, and during subsequent employment; the higher education sector is not immune from risks of identity-related fraud."} photo={educate}/> 
  
          {/** passport box section start  */}
        <ImageContent image={acal} title={"DOCUMENT VERIFICATION"} details={"Fast Registration and Verification"}
        paragraph = {"Increase conversion rates by allowing new traders to open their accounts faster with less manual data entry using RapidID’s Global ID Verification services."}/>

          {/** biometric section start  */}
          <ContentImage photo={man2} title={"AML + RISK SCREENING"} desc={"Simplify and Speed Up Purchase Process"} para={"Say goodbye to clunky and slow verification processes. With RapidID, your customers can verify themselves instantly on your exchange and purchase assets as fast as possible to take advantage of any anticipated price changes before they occur."}/> 


            {/* remove section start */}
          <ImageContent image={phone} title={"REAL TIME AI WATCH-LIST CHECKS"} details={"Offer a Secure Trading Platform That Meets AML Regulations"}
          paragraph = {"Don’t put your business or customers at risk. RapidID is your one source of truth for instant regulatory compliance by securely matching against real-time data sources and alerting you of any criminal activity through deep background checks, automatically."}/>


        {/** biometric section start  */}
        <ContentImage photo={code} title={"DEVELOPER FRIENDLY"} desc={"Developer friendly"} para={"We've created a service that is easy to set-up and start using without instructions. Our web portal is simplistic by design, and our developers love working with the JSON RESTful API."}/> 

        {/* What we section start  */}
        <WhatWe /> 

        {/* pricing section start*/}
          <Pricing /> 

        {/* get Started section */}
        <GetStarted />
    </>
  )
}




