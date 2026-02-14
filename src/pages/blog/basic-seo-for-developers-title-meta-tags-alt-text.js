import Head from "next/head";
import SEOBasics from "@/Components/Blog/SEOBasics";

export default function SEOBasicsPage() {
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
      headline: "SEO Basics – Complete Beginner Guide",
      description:
        "Learn SEO basics including on-page SEO, technical SEO, and best practices to improve website ranking on Google.",
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
        "@id": "https://www.kritirai.com/blog/seo-basics",
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
          name: "SEO Basics",
          item: "https://www.kritirai.com/blog/seo-basics",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>SEO Basics – Beginner Guide | Kriti Rai</title>
        <meta
          name="description"
          content="SEO Basics explained for beginners. Learn on-page SEO, technical SEO, keywords, and best practices to rank higher on Google."
        />
        <meta
          name="keywords"
          content="SEO basics, beginner SEO guide, on-page SEO, technical SEO, search engine optimization"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.kritirai.com/blog/seo-basics"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="SEO Basics – Beginner Guide | Kriti Rai"
        />
        <meta
          property="og:description"
          content="A complete beginner-friendly guide to SEO fundamentals, written by Full Stack Developer Kriti Rai."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/blog/seo-basics"
        />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/seo-basics.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SEO Basics – Beginner Guide | Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Learn SEO basics with this beginner-friendly guide covering keywords, on-page SEO, and technical SEO."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/seo-basics.png"
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

      <SEOBasics />
    </>
  );
}
