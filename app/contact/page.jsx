"use client"

import styles from "@/app/contact/contact.module.css"
export default function page() {
  return (
    <>
      <div className={styles.contact}>
        <div className="container">
          <h2> Contact us</h2>
        </div>
      </div>

      <div className={styles.contact_form}>
        <div className="container"> 
        <div className={styles.full_contact_form}> 
          <div className={styles.contact_left}>
             <h3> Get in touch via the form below and we’ll reply as soon as we can. </h3>
             <div className={styles.form_box}>
              <form action=""> 
                  <div className={styles.my_2}>
                    <label htmlFor="first-name"> First name </label>
                    <input type="text" id="first-name"/>                
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="last-name"> Last name</label>
                    <input type="text" id="last-name"/>                
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="phone"> Phone </label>
                    <input type="text" id="phone"/>                
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="email"> Email Address </label>
                    <input type="text" id="email"/>                
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="message"> Message </label>
                    <textarea name="" id="message" rows="5"></textarea>             
                  </div>
                  <div className={styles.my_2}>
                    <label htmlFor="message" id="help"> How can we help? </label>
                    <select name="" id="help">
                      <option value="General Enquiry"> General Enquiry </option>
                      <option value="Global ID"> Global ID </option>
                      <option value="AML + Risk Screening"> AML + Risk Screening </option>
                      <option value="Document Verification"> Document Verification </option>
                      <option value="Qualification Checks"> Qualification Checks </option>
                    </select>          
                  </div>
                  <button type="submit"> Submit </button>
              </form>
             </div>
          </div>

          <div className={styles.contact_right}>
              
              <div className={styles.contact_details}>
                    <h2 className={styles.heading}>   Contact us </h2>
                   <div className={styles.mail_contact}>
                     <h2> Email : </h2>
                     <span> developergoutam53@gmail.com </span>
                   </div>
                   <div className={styles.mail_contact}>
                     <h2> Phone : </h2>
                     <span> +8801755302053  </span>
                   </div>
                   <div className={styles.mail_contact}>
                     <h2> Location : </h2>
                     <span> Mistripara, Rangpur </span>
                   </div>
                   <div className={styles.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.5557591198403!2d89.25424357444562!3d25.752200608999402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de33ae01021%3A0x8aa549ffe8c656!2sShalbon%20Mistry%20Para%20Road%2C%20Rangpur!5e0!3m2!1sen!2sbd!4v1715605598670!5m2!1sen!2sbd" width="500" height="400" style={{border : "0px"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div> 
              </div>
 
          </div> 
        </div>
      </div>
    </div>
    </>
  )
}
