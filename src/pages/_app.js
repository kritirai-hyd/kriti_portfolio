
import "@/styles/globals.css";

import '../assets/css/style.css';
import '../Components/Education/Education.css';
import '../Components/Hero/Hero.css';

import { ThemeProvider } from "../context/ThemeContext";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
