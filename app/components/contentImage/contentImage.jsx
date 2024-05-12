import Image from "next/image";


import styles from "./contentImage.module.css"
export default function ContentImage({ photo , title, desc, para }) {
  return (
    <>
        <div className={styles.passport_box} style={{backgroundColor: "#fbfbfb"}}>
          <div className="container">
              <div className={styles.pass_content}>
                <div className={styles.passContent_right}>
                    <div className={styles.pass_photo}>
                        <Image src={photo} alt="passPhoto"/>
                    </div>
                 </div>

                <div className={styles.passContent_left}>
                   <h4 > {title} </h4>
                   <h2> {desc} </h2>
                   <p> {para} </p>
                </div>
             </div>
         </div>
      </div>
    </>
  )
}
