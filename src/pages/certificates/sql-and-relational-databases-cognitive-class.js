import Head from "next/head";
import { SQL } from "@/Components/Certificate/SQL";

export default function SQLCertificatePage() {
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
      name: "SQL Certification",
      description:
        "Certification demonstrating proficiency in SQL, relational databases, query writing, and data management.",
      credentialCategory: "Professional Certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "freeCodeCamp",
      },
      about: [
        "SQL",
        "Relational Databases",
        "Query Writing",
        "Data Management",
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
          name: "SQL",
          item: "https://www.kritirai.com/certificates/sql-and-relational-databases-cognitive-class",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>SQL Certificate – Kriti Rai | Full Stack Developer</title>
        <meta
          name="description"
          content="SQL certification earned by Kriti Rai, showcasing expertise in relational databases, SQL queries, and data management."
        />
        <meta
          name="keywords"
          content="SQL certificate, relational database certification, SQL queries, Kriti Rai certificates, freeCodeCamp SQL"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.kritirai.com/certificates/sql-and-relational-databases-cognitive-class" />

        {/* Open Graph */}
        <meta property="og:title" content="SQL Certificate – Kriti Rai" />
        <meta
          property="og:description"
          content="Verified SQL certification earned by Kriti Rai."
        />
        <meta property="og:url" content="https://www.kritirai.com/certificates/sql-and-relational-databases-cognitive-class" />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/kriitrai.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SQL Certificate – Kriti Rai" />
        <meta
          name="twitter:description"
          content="SQL certification by Kriti Rai, demonstrating database and query management skills."
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

      <SQL />
    </>
  );
}
