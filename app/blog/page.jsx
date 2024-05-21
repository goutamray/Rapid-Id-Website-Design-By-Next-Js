

import styles from "./blog.module.css";
import BlogCard from "../components/blogCard/blogCard";

export const metadata = {
  title: 'Blog',
  description: 'Rapid Api',
}


export default async function Blog() {

  const url = process.env.RAPID_KEY 

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '85a0f74b45mshb0102c0ed4063fcp160975jsna02aa031fcc7',
      'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);

  const data = await res.json();

  const main_data = data.titles;

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
      <div className={styles.our_blog}>
        <div className="container">
          <div className={styles.blog_title}>
            <h2> Our Blogs </h2>
          </div>
          <div className={styles.blog_details}>
            {
              main_data.map((item, index) => {
                return <BlogCard item={item} key={index}/>                    
              })
            }                
          </div>   
        </div>
      </div>
    </>
  )
}



