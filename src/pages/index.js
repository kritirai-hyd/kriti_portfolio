import Head from "next/head";
import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Hero from "@/Components/Hero/Hero";
import Services from "@/Components/Services/Services";
import Work from "@/Components/Work/Work";
import Education from "@/Components/Education/Education";
import Certificate from "@/Components/Certificate/Certificate";
import useLenis from "@/Components/hooks/useLenis";
import Counter from "@/Components/Counter/Counter";
import Badges from "@/Components/Badges/Badges";
import Scroll from "@/Components/Scroll/Scroll";

export default function Home() {
  useLenis();

  return (
    <>
      <Head>
        {/* Primary title for Google */}
        <title>Kriti Rai | Full Stack Developer in India</title>

        {/* Basic Meta */}
        <meta
          name="description"
          content="Kriti Rai is a Full Stack Developer specializing in MERN stack, SEO-optimized web apps, responsive design, and scalable backend systems."
        />
        <meta name="keywords" content="Kriti Rai, Full Stack Developer India, MERN stack, Web developer portfolio, SEO optimized website" />
        <meta name="author" content="Kriti Rai" />
        <link rel="canonical" href="https://www.kritirai.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Kriti Rai | Full Stack Developer in India" />
        <meta property="og:description" content="Explore Kriti Rai’s portfolio showcasing MERN stack projects, responsive web apps, and scalable backend systems." />
        <meta property="og:url" content="https://www.kritirai.com" />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kritirai.com/assets/images/kriitrai.png" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kriti Rai | Full Stack Developer in India" />
        <meta name="twitter:description" content="See Kriti Rai’s MERN stack portfolio with performance-optimized projects and mobile-ready designs. Available for hire in India." />
        <meta name="twitter:image" content="https://www.kritirai.com/assets/images/kriitrai.png" />
        <meta name="twitter:creator" content="@dev_kritirai" />

        {/* JSON-LD: WebSite + Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />

        {/* Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.kritirai.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://www.kritirai.com/about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Projects",
                  "item": "https://www.kritirai.com/projects"
                }
              ]
            })
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  "name": "What technologies does Kriti Rai use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kriti Rai specializes in the MERN stack (MongoDB, Express, React, Node.js), along with modern frontend and backend technologies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I hire Kriti Rai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Kriti Rai via the Contact page on her portfolio website or email directly to discuss your project requirements."
                  }
                }
              ]
            })
          }}
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Full Stack Developer in India | Kriti Rai",
              description:
                "Explore Kriti Rai’s portfolio showcasing MERN stack projects, SEO-first development, responsive web applications and scalable backend systems.",
              image: "https://www.kritirai.com/assets/svg/kritirai.svg",
              author: {
                "@type": "Person",
                name: "Kriti Rai",
                url: "https://www.kritirai.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Kriti Rai",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.kritirai.com/assets/svg/kritirai.svg",
                },
              },
              datePublished: "2026-01-01T00:00:00+05:30",
              dateModified: "2026-01-01T00:00:00+05:30",
              mainEntityOfPage: "https://www.kritirai.com",
            }),
          }}
        />
      </Head>


      <Hero />

<Scroll />
      <Counter />
      <About />
      <Services />
      <Work />
      <Certificate />
      <Badges />
      <Education />
      <Contact />
    </>
  );
}
