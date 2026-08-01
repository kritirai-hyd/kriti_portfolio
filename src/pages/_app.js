import React from "react";
import "@/styles/globals.css";

import { ThemeProvider } from "@/components/context/ThemeContext";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import useLenis from "@/components/hooks/useLenis";

export default function App({ Component, pageProps }) {

  useLenis();

  return (
    <ThemeProvider>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </ThemeProvider>
  );
}