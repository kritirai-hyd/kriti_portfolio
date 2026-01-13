import Head from "next/head";
import PortfolioTutorial from "@/Components/Blog/Portfolio";

export default function PortfolioTutorialPage() {
  // JSON-LD Structured Data
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Kriti Rai",
      url: "https://www.kritirai.com",
      image: "https://www.kritirai.com/assets/images/kriti-rai.jpeg",
      jobTitle: "Full Stack Developer",
      sameAs: [
        "https://www.linkedin.com/in/dev-kritirai",
        "https://x.com/dev_kritirai",
        "https://github.com/kritirai-hyd",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Osmania University",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "How to Build a Developer Portfolio – Step-by-Step Guide",
      description:
        "Learn how to build a professional developer portfolio from scratch using modern web technologies like React and Next.js.",
      author: {
        "@type": "Person",
        name: "Kriti Rai",
      },
      publisher: {
        "@type": "Person",
        name: "Kriti Rai",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.kritirai.com/blog/portfolio-tutorial",
      },
      datePublished: "2025-01-12",
      dateModified: "2025-01-12",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.kritirai.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.kritirai.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Portfolio Tutorial",
          item: "https://www.kritirai.com/blog/portfolio-tutorial",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>How to Build a Developer Portfolio | Kriti Rai</title>
        <meta
          name="description"
          content="Step-by-step tutorial on how to build a professional developer portfolio using React, Next.js, and modern web development practices."
        />
        <meta
          name="keywords"
          content="developer portfolio tutorial, portfolio website, React portfolio, Next.js portfolio, web developer portfolio"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.kritirai.com/blog/portfolio-tutorial"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="How to Build a Developer Portfolio | Kriti Rai"
        />
        <meta
          property="og:description"
          content="Learn how to create a developer portfolio that stands out and helps you get hired."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/blog/portfolio-tutorial"
        />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/portfolio-tutorial.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How to Build a Developer Portfolio | Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="A complete guide to building a professional developer portfolio using modern web tools."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/portfolio-tutorial.png"
        />
        <meta name="twitter:creator" content="@dev_kritirai" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <PortfolioTutorial />
    </>
  );
}
