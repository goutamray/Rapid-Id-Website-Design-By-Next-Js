

import styles from "./load.module.css"
export default function loading() {
  return (
    <>
    <div className={styles.loding}>
          <div class={styles.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </>

  )
}




