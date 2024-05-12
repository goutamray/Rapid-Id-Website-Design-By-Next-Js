import logo2 from "@/public/logo2.svg"
import certfied from "@/public/footer.png"
import Image from "next/image"
import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
         <div className="container">
            <div className={styles.bottomFooterPart}>
                {/* footer part 1 start */}
                <div className={styles.footerPart1}>
                    <div className={styles.logoBox}>
                        <div className={styles.logo}>
                            <Image src={logo2} alt="logo"/>
                        </div>
                        <div className={styles.description}>
                            <p> RapidID is a Gateway to a number of Government Document Verification Services DVS internationally. Get rapid access today. ISO Certified Protection. </p>
                        </div>
                    </div>
                </div>

             {/* footer part 2 start */}
                <div className={styles.footerPart2}>
                    <div className={styles.solution}>
                        <h4> Solutions </h4>
                        <div className={styles.solutionPart}>
                            <ul>
                                <li> <Link href="#"> Global ID Verification </Link></li>
                                <li> <Link href="#"> Anti-Money Laundering + Risk Screening </Link></li>
                                <li> <Link href="#"> Document Verification </Link></li>
                                <li> <Link href="#"> Biometric Verification </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* footer part 3 start */}
                <div className={styles.footerPart3}>
                    <h4> Industries </h4>
                    <div className={styles.industries}>
                        <ul>
                            <li> <Link href="/"> Real Estate </Link> </li>
                            <li> <Link href="/travel"> Travel </Link> </li>
                            <li> <Link href="/medical"> Medical </Link> </li>
                            <li> <Link href="/education"> Education </Link> </li>
                            <li> <Link href="/crypto"> Crypto </Link> </li>
                            <li> <Link href="/finance"> Finance </Link> </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerPart4}>
                     <h4> Company </h4>
                     <div className={styles.company}>
                        <ul> 
                            <li> <Link href="/about"> About Us </Link></li>
                            <li> <Link href="/security"> Security </Link></li>
                            <li> <Link href="/contact"> Contact Us </Link></li>
                            <li> <Link href="/privacy-policy"> Privacy Policy </Link></li>
                            <li> <Link href="/terms-condition"> Terms & Condition </Link></li>
                        </ul>
                     </div>
                </div>
                <div className={styles.footerPart5}>
                    <div className={styles.cerified}>
                        <Image src={certfied} alt="certify"/>
                    </div>
                </div>
            </div>  
         </div>
      </div>
    </>
  )
}
  