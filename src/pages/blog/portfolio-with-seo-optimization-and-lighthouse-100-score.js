import Head from "next/head";
import PortfolioSEO from "@/Components/Blog/PortfolioSEO";

export default function PortfolioSEOPage() {
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
      headline: "Portfolio SEO – Optimize Your Developer Portfolio for Google",
      description:
        "Learn how to optimize your developer portfolio for search engines using SEO best practices, structured data, and performance optimization.",
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
        "@id": "https://www.kritirai.com/blog/portfolio-seo",
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
          name: "Portfolio SEO",
          item: "https://www.kritirai.com/blog/portfolio-seo",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Portfolio SEO Guide – Optimize Your Developer Portfolio | Kriti Rai</title>
        <meta
          name="description"
          content="A complete guide to portfolio SEO. Learn how to optimize your developer portfolio for Google using on-page SEO, performance, and structured data."
        />
        <meta
          name="keywords"
          content="portfolio SEO, developer portfolio SEO, SEO for portfolio website, web developer SEO, personal website SEO"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.kritirai.com/blog/portfolio-seo"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Portfolio SEO – Optimize Your Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Learn proven SEO techniques to rank your developer portfolio higher on Google."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/blog/portfolio-seo"
        />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/portfolio-seo.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Portfolio SEO – Optimize Your Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="SEO best practices for optimizing your developer portfolio website."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/portfolio-seo.png"
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

      <PortfolioSEO />
    </>
  );
}
