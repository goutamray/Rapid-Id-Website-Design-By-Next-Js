
"use client"

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";

import styles from "./faq.module.css"

export default function Faq() {
  const [open, setOpen ] = useState(false); 
  const [open2, setOpen2 ] = useState(false); 
  const [open3, setOpen3 ] = useState(false); 
  const [open4, setOpen4 ] = useState(false); 
  const [open5, setOpen5 ] = useState(false); 
  const [open6, setOpen6 ] = useState(false); 
  const [open7, setOpen7 ] = useState(false); 
  const [open8, setOpen8 ] = useState(false); 
  const [open9, setOpen9 ] = useState(false); 
  const [open10, setOpen10 ] = useState(false); 
   
  return (
    <>
      <div className={styles.faq_section}>
          <div className="container">
             <div className={styles.heading}>
                 <h2> Frequently Asked Questions </h2>

                 <div className={styles.question_answer}>
                    <div className={styles.topper}>
                      <button onClick={() => setOpen(!open)} className={styles.btn_custom}>
                        <span> 
                          {
                            open ?  <FaMinus />  : <FaPlus />
                          }
                          
                         </span>
                        <h4> What is KYC? </h4>
                      </button>
                    </div>
                      {
                        open && <p> Know Your Customer (KYC) is the process of adhering to legal requirements for the Identification, Due Diligence & Monitoring of an organization’s customer base. These requirements are put in place to prevent organizations from dealing with individuals that may be involved with illegal activities, financial crime or have dealings with sanctioned organizations. The individual provides formal identification to the organization so that their details may be checked against a number of relevant federal databases to determine if they are known for past behaviors or if they are suspected to be participating in money laundering or other high risk illegal activities. Anti-Money Laundering (AML) in particular has very specific regulatory requirements in many regions of the world.Corruption, money laundering & even terrorist financing have become a significant reputational and financial risk for firms throughout the world, and KYC policies are a powerful tool in prevention of these activities. </p>
                      }
                      
                 
                 </div>

                 <div className={styles.question_answer}>
                    <div className={styles.topper}>
                      <button onClick={() => setOpen2(!open2)} className={styles.btn_custom1}>
                        <span> 
                          {
                            open2 ?  <FaMinus />  : <FaPlus />
                          }                       
                       </span>
                        <h4> What is AML? </h4>
                      </button>
                    </div>
                      {
                        open2 && <p>Anti-money laundering (AML) refers to a set of laws, regulations, and procedures to prevent criminals from laundering illegitimate funds as legal income. While each region has different specific regulations, they cover specific transactions and behaviours. AML regulations typically stipulate that institutions issuing credit or providing financial services adhere to these rules.While KYC and AML appear to be somewhat overlapping terms, they should not be conflated to be the same thing, as AML process is significantly broader in it’s scope than KYC.</p>
                      }               
                 </div>

                 <div className={styles.question_answer}>              
                    <div className={styles.topper}>
                      <button onClick={() => setOpen3(!open3)} className={styles.btn_custom2}>
                        <span> 
                          {
                            open3 ?  <FaMinus />  : <FaPlus />
                          }                       
                       </span>
                        <h4>How Do I Comply with KYC & AML? </h4>
                      </button>
                    </div>
                      {
                        open3 && <p>This information should not be substituted for specific legal advice. Each country and region has different requirements for compliance.

                        ‍The Anti-Money Laundering and Counter-Terrorism Financing Act (2006) stipulates all relevant requirements, as well as industries that it applies to. Predominantly these are connected to specific financial activities including payroll, currency exchange or transference of funds. The regulatory body that oversees this is AUSTRAC</p>
                      }               
                   </div>
            

                 <div className={styles.question_answer}>
                    <div className={styles.topper}>
                      <button onClick={() => setOpen4(!open4)} className={styles.btn_custom}>
                        <span> 
                          {
                            open4 ?  <FaMinus />  : <FaPlus />
                          }                       
                       </span>
                        <h4> What is the DVS? </h4>
                      </button>
                    </div>
                      {
                        open4 && <p>The Department of Home Affairs Document Verification Service (DVS) is an identity matching service that helps verify an individuals identity against Government databases. To access the DVS an organisation must use an approved Gateway Service Provider, such as RapidID.
                        Organisations using a DVS provider dont need to keep copies of identity documents, which helps to protect the individual’s privacy and reduces the risk of data breaches. The DVS compares the personal information on Australian identity documents against official government records. The service is provided through secure, online systems that operate 24 hours a day, seven days a week and is updated in real-time.</p>
                      }               
                 </div>

                 <div className={styles.question_answer}>
                    <div className={styles.topper}>
                      <button onClick={() => setOpen5(!open5)} className={styles.btn_custom}>
                        <span> 
                          {
                            open5 ?  <FaMinus />  : <FaPlus />
                          }                       
                       </span>
                        <h4> Which Identity Documents can the DVS check? </h4>
                      </button>
                    </div>
                      {
                        open5 && <p>- Centrelink Concession Card
                        - Certificate of Registration by Descent
                        - Change of Name Certificate
                        - Citizenship Certificate
                        - Drivers License
                        - ImmiCards
                        - Marriage Certificate
                        - Medicare Card
                        - Passport
                        - Visa</p>
                      }               
                 </div>


                 
                 <div className={styles.question_answer}>
                    <div className={styles.topper}>
                      <button onClick={() => setOpen6(!open6)} className={styles.btn_custom}>
                        <span> 
                          {
                            open6 ?  <FaMinus />  : <FaPlus />
                          }                       
                       </span>
                        <h4> How can I engage with a DVS Gateway Service Provider? </h4>
                      </button>
                    </div>
                      {
                        open6 && <p> RapidID is an authorized DVS provider. Additionally, our DVS gateway service is ISO certified and uses AES-256 Encryption. For more information head over to our DVS Services Page. </p>
                      }               
                 </div>

                 <div className={styles.question_answer}>
                    <div className={styles.topper}>
                      <button onClick={() => setOpen7(!open7)} className={styles.btn_custom}>
                        <span> 
                          {
                            open7 ?  <FaMinus />  : <FaPlus />
                          }                       
                       </span>
                        <h4> What are Sanctions? </h4>
                      </button>
                    </div>
                      {
                        open7 && <p> Within Australia, Organizations and Individuals must comply with the Department of Foreign Affairs And Trade (DFAT) sanctions list, which draws from a combination of UN security council Sanctions and Autonomous Sanctions (As per the Autonomous Sanctions Act 2011). Failure to comply with this can mean significant reputational damage as well as punitive measures and fines for an organization or individual. </p>
                      }               
                 </div>

                 <div className={styles.question_answer}>
                    <div className={styles.topper}>
                      <button onClick={() => setOpen8(!open8)} className={styles.btn_custom}>
                        <span> 
                          {
                            open8 ?  <FaMinus />  : <FaPlus />
                          }                       
                       </span>
                        <h4> What is Biometric Verification?</h4>
                      </button>
                    </div>
                      {
                        open8 && <p> Biometric Verification consists of determining the identity of a person by capturing an item of biometric data. It can be a photo of their face, a record of their voice, or an image of their fingerprint. RapidID uses Facial Image Recognition & Liveness technology. Biometric Verification is used in circumstances where there is significant risk if fraudulent activity is successful. RapidID Provides Biometric Verification for businesses internationally. To find out more, head over to our Biometric Verification page.</p>
                      }               
                 </div>

                 <div className={styles.question_answer}>
                    <div className={styles.topper}>
                      <button onClick={() => setOpen9(!open9)} className={styles.btn_custom}>
                        <span> 
                          {
                            open9 ?  <FaMinus />  : <FaPlus />
                          }                       
                       </span>
                        <h4> What is Global Identity Verification? </h4>
                      </button>
                    </div>
                      {
                        open9 && <p> RapidID aggregates leading customer verification technologies for seamless integration with on-boarding & risk analysis processes. This is automated through a RESTful API and accesses over 100 Billion Identity Records from 180 Countries globally. </p>
                      }               
                 </div>

                 <div className={styles.question_answer}>
                    <div className={styles.topper}>
                      <button onClick={() => setOpen10(!open10)} className={styles.btn_custom}>
                        <span> 
                          {
                            open10 ?  <FaMinus />  : <FaPlus />
                          }                       
                       </span>
                        <h4> What is RESTful API? </h4>
                      </button>
                    </div>
                      {
                        open10 && <p> REST or RESTful API design (Representational State Transfer) is designed to take advantage of existing protocols. While REST can be used over nearly any protocol, it usually takes advantage of HTTP when used for Web APIs. </p>
                      }               
                 </div> 
             </div>
          </div>
      </div>
    </>
  )
}
