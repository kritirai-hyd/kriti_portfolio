
import { ThemeProvider } from "@/components/context/ThemeContext";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import "@/styles/globals.css";

import { Poppins } from "next/font/google";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});


export default function App({ Component, pageProps }) {
  return (
    <>
        <ThemeProvider>
  <div className={poppins.className}>
    <Header />
    
    <Component {...pageProps} />
<Footer />
  </div>
</ThemeProvider>

    </>
  )
}
