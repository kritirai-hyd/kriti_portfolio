

import React, { useEffect } from "react";
import "@/styles/globals.css";


import '../Components/Education/Education.css';
import '../Components/Hero/Hero.css';

import { ThemeProvider } from "../context/ThemeContext";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function App({ Component, pageProps }) {
    // useEffect(() => {
     
    //   const handleContextMenu = (e) => {
    //     e.preventDefault();
    //   };
  
    //   const handleKeyDown = (e) => {
       
    //     if (
    //       e.key === 'F12' ||
    //       (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) ||
    //       (e.ctrlKey && e.key.toUpperCase() === 'U')
    //     ) {
    //       e.preventDefault();
    //       return false;
    //     }
    //   };
  
    //   document.addEventListener('contextmenu', handleContextMenu);
    //   document.addEventListener('keydown', handleKeyDown);
  
    //   return () => {
    //     document.removeEventListener('contextmenu', handleContextMenu);
    //     document.removeEventListener('keydown', handleKeyDown);
    //   };
    // }, []);
  return (
    <ThemeProvider>
      
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
