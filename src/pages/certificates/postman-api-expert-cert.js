import Head from "next/head";
import { PostmanAPI } from "@/Components/Certificate/PostmanAPI";

export default function PostmanAPICertificatePage() {
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
      name: "Postman API Fundamentals Certification",
      description:
        "Certification demonstrating proficiency in API testing, RESTful APIs, and Postman tooling.",
      credentialCategory: "Professional Certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "Postman",
      },
      about: [
        "API Testing",
        "REST APIs",
        "Postman",
        "Backend Development",
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
          name: "Postman API",
          item: "https://www.kritirai.com/certificates/postman-api-expert-cert",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>
          Postman API Certificate – Kriti Rai | Full Stack Developer
        </title>
        <meta
          name="description"
          content="Postman API Fundamentals certification earned by Kriti Rai, showcasing skills in REST APIs, API testing, and backend development."
        />
        <meta
          name="keywords"
          content="Postman API certificate, Postman certification, API testing certificate, Kriti Rai certificates"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.kritirai.com/certificates/postman-api-expert-cert"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Postman API Certificate – Kriti Rai"
        />
        <meta
          property="og:description"
          content="Verified Postman API Fundamentals certification earned by Kriti Rai."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/certificates/postman-api-expert-cert"
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
          content="Postman API Certificate – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Postman API Fundamentals certification by Kriti Rai."
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

      <PostmanAPI />
    </>
  );
}
