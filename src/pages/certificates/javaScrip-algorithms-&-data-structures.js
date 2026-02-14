import Head from "next/head";
import { JavaScriptAlgorithms } from "@/Components/Certificate/JavaScriptAlgorithms";

export default function JavaScriptAlgorithmsPage() {

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
      name: "JavaScript Algorithms and Data Structures Certification",
      description:
        "Certification demonstrating proficiency in JavaScript algorithms, data structures, and problem-solving skills.",
      credentialCategory: "Professional Certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "freeCodeCamp",
      },
      about: [
        "JavaScript",
        "Algorithms",
        "Data Structures",
        "Problem Solving",
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
          name: "JavaScript Algorithms",
          item: "https://www.kritirai.com/certificates/javaScrip-algorithms-&-data-structures",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>
          JavaScript Algorithms Certificate – Kriti Rai | Full Stack Developer
        </title>
        <meta
          name="description"
          content="JavaScript Algorithms and Data Structures certification earned by Kriti Rai, demonstrating strong problem-solving and core JavaScript skills."
        />
        <meta
          name="keywords"
          content="JavaScript algorithms certificate, freeCodeCamp JavaScript certification, Data structures JavaScript, Kriti Rai certificates"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.kritirai.com/certificates/javaScrip-algorithms-&-data-structures"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="JavaScript Algorithms Certificate – Kriti Rai"
        />
        <meta
          property="og:description"
          content="Verified JavaScript Algorithms and Data Structures certification earned by Kriti Rai."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/certificates/javaScrip-algorithms-&-data-structures"
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
          content="JavaScript Algorithms Certificate – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="JavaScript Algorithms and Data Structures certification by Kriti Rai."
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

      <JavaScriptAlgorithms />
    </>
  );
}
