import Head from "next/head";
import { CognitiveClass } from "@/Components/Certificate/CognitiveClass";

export default function CognitiveClassCertificatePage() {
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
      name: "Cognitive Class Certification",
      description:
        "Certification demonstrating proficiency in data science, AI, and machine learning concepts provided by Cognitive Class.",
      credentialCategory: "Professional Certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "Cognitive Class",
      },
      about: [
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "Python",
        "Analytics",
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
          name: "Cognitive Class",
          item: "https://www.kritirai.com/certificatessql-and-relational-databases",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>
          Cognitive Class Certificate – Kriti Rai | Full Stack Developer
        </title>
        <meta
          name="description"
          content="Cognitive Class certification earned by Kriti Rai, showcasing skills in data science, AI, machine learning, and analytics."
        />
        <meta
          name="keywords"
          content="Cognitive Class certificate, data science certificate, machine learning certification, AI certification, Kriti Rai certificates"
        />
        <meta name="author" content="Kriti Rai" />

  
        <link
          rel="canonical"
          href="https://www.kritirai.com/certificatessql-and-relational-databases"
        />

        <meta
          property="og:title"
          content="Cognitive Class Certificate – Kriti Rai"
        />
        <meta
          property="og:description"
          content="Verified Cognitive Class certification earned by Kriti Rai."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/certificatessql-and-relational-databases"
        />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/kriitrai.png"
        />
        <meta property="og:locale" content="en_IN" />

 
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cognitive Class Certificate – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Cognitive Class certification by Kriti Rai, demonstrating proficiency in data science, AI, and machine learning."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/kriitrai.png"
        />
        <meta name="twitter:creator" content="@dev_kritirai" />

     
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <CognitiveClass />
    </>
  );
}
