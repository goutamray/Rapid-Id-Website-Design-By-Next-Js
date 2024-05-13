
import Image from "next/image"
import styles from "./weBox.module.css"


export default function WeBox({ icon , title, desc}) {
  return (
    <>
        <div className={styles.stand_box}>
            <Image src={icon} alt="what"/>
            <h4> {title }</h4>
            <p> {desc }</p>
        </div>
    </>
  )
}



