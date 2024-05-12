
import Link from "next/link";
import styles from "./button.module.css"

export default function Button() {
  return (
    <>
       <Link href="/register" className={styles.buttonRegister}> Get Started </Link>
    </>
  )
}




