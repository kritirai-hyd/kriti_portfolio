import Head from "next/head";
import ResponsiveDesign from "@/Components/Blog/ResponsiveDesign";

export default function ResponsiveDesignPage() {
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
      headline: "Responsive Web Design – Build Mobile-Friendly Websites",
      description:
        "Learn responsive web design fundamentals including mobile-first design, media queries, and flexible layouts.",
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
        "@id": "https://www.kritirai.com/blog/responsive-design",
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
          name: "Responsive Design",
          item: "https://www.kritirai.com/blog/responsive-design",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Responsive Web Design Guide | Kriti Rai</title>
        <meta
          name="description"
          content="A complete guide to responsive web design. Learn mobile-first design, flexible grids, and media queries to build modern websites."
        />
        <meta
          name="keywords"
          content="responsive web design, mobile first design, CSS media queries, responsive layouts, web design basics"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.kritirai.com/blog/responsive-design"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Responsive Web Design – Mobile-Friendly Websites"
        />
        <meta
          property="og:description"
          content="Learn how to build responsive websites that work on all devices."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/blog/responsive-design"
        />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/responsive-design.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Responsive Web Design Guide | Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="A beginner-friendly guide to responsive web design and mobile-first development."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/responsive-design.png"
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

      <ResponsiveDesign />
    </>
  );
}
