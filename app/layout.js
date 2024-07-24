
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { getServerSession } from "next-auth";
import  SessionProvider  from "@/config/SessionProvider"; 


const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
}); 

export default async function RootLayout({ children }) {

    const session = getServerSession(); 

  return (
    <html lang="en">
      <body className={poppins.className}>
            <SessionProvider session={session}> 
            <Header />
                   {children}
              <Footer />
            </SessionProvider>
        </body>    
    </html>    
  );
}
