import React from "react";
import "@/styles/globals.css";

import { ThemeProvider } from "@/Components/context/ThemeContext";
import Header from "@/Components/header/Header";
import Footer from "@/Components/footer/Footer";
import useLenis from "@/Components/hooks/useLenis";

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