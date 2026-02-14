import Head from "next/head";
import { Foundational } from "@/Components/Certificate/Foundational";

export default function FoundationalCertificatePage() {
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
      "@type": "EducationalOccupationalCredential",
      name: "Foundational Web Development Certificate",
      description:
        "Foundational certificate earned by Kriti Rai covering HTML, CSS, JavaScript, and core web development fundamentals.",
      credentialCategory: "Certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "freeCodeCamp",
      },
      url: "https://www.kritirai.com/certificates/foundational",
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
          name: "Foundational Certificate",
          item: "https://www.kritirai.com/certificates/foundational",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Foundational Certificate – Kriti Rai | Web Development</title>
        <meta
          name="description"
          content="View the Foundational Web Development certificate earned by Kriti Rai, covering HTML, CSS, JavaScript, and core programming concepts."
        />
        <meta
          name="keywords"
          content="foundational certificate, web development certificate, HTML CSS JavaScript certificate, Kriti Rai certificates"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.kritirai.com/certificates/foundational"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Foundational Certificate – Kriti Rai"
        />
        <meta
          property="og:description"
          content="Foundational Web Development Certificate earned by Kriti Rai."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/certificates/foundational"
        />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/foundational-certificate.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Foundational Certificate – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Foundational Web Development Certificate earned by Kriti Rai."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/foundational-certificate.png"
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

      <Foundational />
    </>
  );
}
