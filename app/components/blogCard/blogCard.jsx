import Image from "next/image";

import styles from "../../blog/blog.module.css"; 
import Link from "next/link";

export default function BlogCard({ item}) {

  const { id , releaseYear, title, synopsis} =  item.jawSummary;

  return (
    <>
            <div className={styles.single_blog}>
              <Link href={`/blog/${id}`}> <Image src={item.jawSummary.backgroundImage.url} alt="blog" width="350" height="400" /> </Link>    
               <div className={styles.blog_data}> 
                  <h4> Publish Year :  { releaseYear } </h4>
                  <h1 className={styles.heading}> <Link href={`/blog/${id}`} className={styles.title_data}> { title.substring(0, 20) } </Link>  </h1>
                  <p>{` ${ synopsis.substring(0, 100)} . . . . .`}</p>
                  <Link href={`/blog/${id}`}> Read More </Link>
               </div>
            </div>
      
    </>
  )
}


