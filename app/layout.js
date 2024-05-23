
import { Poppins } from "next/font/google";
import "./globals.css";
// import Header from "./components/header/header";
import Footer from "./components/footer/footer";



const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
}); 

export default async function RootLayout({ children }) {

    

  return (
    <html lang="en">
      <body className={poppins.className}>
      
             {/* <Header /> */}
                  {children}
              <Footer />
    
        </body>    
    </html>    
  );
}
