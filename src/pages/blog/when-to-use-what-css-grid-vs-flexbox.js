import Head from "next/head";
import GridVsFlexbox from "@/Components/Blog/Flexbox";

export default function GridVsFlexboxPage() {
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
      headline: "CSS Grid vs Flexbox – When and How to Use Each",
      description:
        "Learn the differences between CSS Grid and Flexbox, when to use each layout system, and best practices for modern web design.",
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
        "@id": "https://www.kritirai.com/blog/grid-vs-flexbox",
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
          name: "Grid vs Flexbox",
          item: "https://www.kritirai.com/blog/grid-vs-flexbox",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>CSS Grid vs Flexbox – Layout Guide | Kriti Rai</title>
        <meta
          name="description"
          content="A complete guide comparing CSS Grid and Flexbox. Learn when to use Grid vs Flexbox with practical examples."
        />
        <meta
          name="keywords"
          content="CSS Grid vs Flexbox, grid vs flexbox, CSS layout, responsive layouts, web design"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.kritirai.com/blog/grid-vs-flexbox"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="CSS Grid vs Flexbox – When to Use Each"
        />
        <meta
          property="og:description"
          content="Understand the key differences between CSS Grid and Flexbox for building modern layouts."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/blog/grid-vs-flexbox"
        />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/grid-vs-flexbox.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CSS Grid vs Flexbox – Layout Guide"
        />
        <meta
          name="twitter:description"
          content="Learn the differences between CSS Grid and Flexbox and when to use each."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/grid-vs-flexbox.png"
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

      <GridVsFlexbox />
    </>
  );
}
