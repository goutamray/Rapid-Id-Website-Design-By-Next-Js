 import Image from "next/image";
import styles from "./single.module.css"

export default async function SinglePage({ params }) {

  const id = params.id;
  const url = `https://netflix-data.p.rapidapi.com/title/details/?ids=${id}`   

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '85a0f74b45mshb0102c0ed4063fcp160975jsna02aa031fcc7',
      'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);    
  const data = await res.json();
  const main_data = data[0].details

  return (
    <>
      <div className={styles.single_post}>
        <div className="container">
           <Image src={main_data.backgroundImage.url} alt="post" height="400" width="1200"/>
          <h2> {main_data.title}  </h2>
          <p> {main_data.synopsis} </p>
        </div>
      </div>
    </>
  )
}


