import React, { useEffect } from "react";
import "@/styles/globals.css";

import Head from "next/head";
import "../Components/Education/Education.css";


import { ThemeProvider } from "../Components/context/ThemeContext";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function App({ Component, pageProps }) {
  const defaultTitle = "Kriti Rai | Full Stack Developer in India";
  const defaultDescription =
    "Kriti Rai is a Full Stack Developer specializing in MERN stack, SEO-optimized web applications, responsive design, and scalable backend systems.";

  // useEffect(() => {

  //     const handleContextMenu = (e) => {
  //       e.preventDefault();
  //     };

  //     const handleKeyDown = (e) => {

  //       if (
  //         e.key === 'F12' ||
  //         (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) ||
  //         (e.ctrlKey && e.key.toUpperCase() === 'U')
  //       ) {
  //         e.preventDefault();
  //         return false;
  //       }
  //     };

  //     document.addEventListener('contextmenu', handleContextMenu);
  //     document.addEventListener('keydown', handleKeyDown);

  //     return () => {
  //       document.removeEventListener('contextmenu', handleContextMenu);
  //       document.removeEventListener('keydown', handleKeyDown);
  //     };
  //   }, []);
  <Head>
    <title>{defaultTitle}</title>
    <meta name="description" content={defaultDescription} />
    <meta
      name="keywords"
      content="Kriti Rai, Full Stack Developer India, MERN stack, Web developer portfolio, SEO optimized website"
    />
    <meta name="author" content="Kriti Rai" />
    <link rel="canonical" href="https://www.kritirai.com" />

    <meta property="og:title" content={defaultTitle} />
    <meta property="og:description" content={defaultDescription} />
    <meta property="og:url" content="https://www.kritirai.com" />
    <meta property="og:site_name" content="Kriti Rai" />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://www.kritirai.com/assets/images/kriitrai.png"
    />
    <meta property="og:locale" content="en_IN" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={defaultTitle} />
    <meta name="twitter:description" content={defaultDescription} />
    <meta
      name="twitter:image"
      content="https://www.kritirai.com/assets/images/kriitrai.png"
    />
    <meta name="twitter:creator" content="@dev_kritirai" />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://www.kritirai.com",
          name: "Kriti Rai",
          publisher: {
            "@type": "Organization",
            name: "Kriti Rai",
            logo: "https://www.kritirai.com/assets/svg/kritirai.svg",
            url: "https://www.kritirai.com",
          },
        }),
      }}
    />
  </Head>;
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
