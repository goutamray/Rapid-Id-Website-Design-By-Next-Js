

import Image from "next/image"
import styles from "./imageContent.module.css"

export default function ImageContent({image, title, details, paragraph }) {
  return (
    <>
        <div className={styles.passport_box} >
          <div className="container">
              <div className={styles.pass_content}>
                <div className={styles.passContent_left}>
                   <h4 > {title}</h4>
                   <h2> {details} </h2>
                   <p> {paragraph} </p>
                </div>
                <div className={styles.passContent_right}>
                   <div className={styles.pass_photo}>
                    <Image src={image} alt="passPhoto"/>
                   </div>
                </div>
             </div>    
         </div>
      </div>
    </>
  )
}



