// pages/_app.js
import React, { useEffect } from "react";
import "@/styles/globals.css";
import Head from "next/head";

import { ThemeProvider } from "../Components/context/ThemeContext";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import useLenis from "@/Components/hooks/useLenis";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === "U")
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useLenis();

  return (
    <ThemeProvider>
      {/* Global Head - Appears on every page */}
      <Head>
        <title>Full Stack Developer in India | Kriti Rai</title>
        <meta
          name="description"
          content="Kriti Rai is a Full Stack Developer specializing in MERN stack, SEO-optimized web apps, responsive design, and scalable backend systems."
        />
        <meta name="keywords" content="Kriti Rai, Full Stack Developer India, MERN stack, Web developer portfolio, SEO optimized website" />
        <meta name="author" content="Kriti Rai" />
        <link rel="canonical" href="https://www.kritirai.com" />

        {/* Open Graph */}
        <meta property="og:title" content="Full Stack Developer in India | Kriti Rai" />
        <meta property="og:description" content="Explore Kriti Rai’s portfolio showcasing MERN stack projects, responsive web apps, and scalable backend systems." />
        <meta property="og:url" content="https://www.kritirai.com" />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kritirai.com/assets/images/kriitrai.png" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Full Stack Developer in India | Kriti Rai" />
        <meta name="twitter:description" content="See Kriti Rai’s MERN stack portfolio with performance-optimized projects and mobile-ready designs. Available for hire in India." />
        <meta name="twitter:image" content="https://www.kritirai.com/assets/images/kriitrai.png" />
        <meta name="twitter:creator" content="@dev_kritirai" />

        {/* JSON-LD: WebSite, Breadcrumb, FAQ, Article */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.kritirai.com",
          "name": "Kriti Rai",
          "publisher": {
            "@type": "Organization",
            "name": "Kriti Rai",
            "logo": "https://www.kritirai.com/assets/svg/kritirai.svg",
            "url": "https://www.kritirai.com"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.kritirai.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kritirai.com" }
          ]
        })}} />

      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}