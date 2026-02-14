import Head from "next/head";
import { ResponsiveWeb } from "@/Components/Certificate/ResponsiveWeb";

export default function ResponsiveWebDesignPage() {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      name: "Responsive Web Design Certification",
      description:
        "Certification demonstrating proficiency in responsive web design, HTML, CSS, Flexbox, Grid, and accessibility principles.",
      credentialCategory: "Professional Certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "freeCodeCamp",
      },
      about: [
        "Responsive Web Design",
        "HTML",
        "CSS",
        "Flexbox",
        "CSS Grid",
        "Web Accessibility",
      ],
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
          name: "Certificates",
          item: "https://www.kritirai.com/certificates",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Responsive Web Design",
          item: "https://www.kritirai.com/certificates/responsive-design-certificates",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>
          Responsive Web Design Certificate – Kriti Rai | Full Stack Developer
        </title>
        <meta
          name="description"
          content="Responsive Web Design certification earned by Kriti Rai, showcasing expertise in HTML, CSS, Flexbox, Grid, and accessibility."
        />
        <meta
          name="keywords"
          content="Responsive Web Design certificate, freeCodeCamp responsive web design, HTML CSS certificate, Kriti Rai certificates"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.kritirai.com/certificates/responsive-design-certificates"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Responsive Web Design Certificate – Kriti Rai"
        />
        <meta
          property="og:description"
          content="Verified Responsive Web Design certification earned by Kriti Rai."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/certificates/responsive-design-certificates"
        />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/kriitrai.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Responsive Web Design Certificate – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Responsive Web Design certification by Kriti Rai."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/kriitrai.png"
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

      <ResponsiveWeb />
    </>
  );
}
