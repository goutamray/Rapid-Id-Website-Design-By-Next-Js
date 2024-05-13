

import styles from "./blog.module.css";

export default function Blog() {
  return (
    <>
      <div className={styles.blog_top}>
        <div className="container">
            <div className={styles.top_bar}>
               <h2> The Latest in Verification Insights </h2> 
               <div className={styles.subscribe}>
                 <input type="text" placeholder="Enter Your Email"/>
                 <button> Register </button>
               </div>
               <p> Get all of our latest published articles delivered straight to your inbox. </p>
            </div>
        </div>
      </div>
    </>
  )
}



