import Head from "next/head";
import CertificateDetails from "@/Components/Certificate/CertificateDetails";

export default function CertificatesPage() {

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
      "@type": "CollectionPage",
      name: "Certificates of Kriti Rai",
      url: "https://www.kritirai.com/certificates",
      description:
        "Professional certificates earned by Kriti Rai in full stack development, MERN stack, JavaScript, and modern web technologies.",
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
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Certificates – Kriti Rai | Full Stack Developer</title>
        <meta
          name="description"
          content="View professional certificates earned by Kriti Rai, a Full Stack Developer specializing in MERN stack, React, Next.js, and modern web development."
        />
        <meta
          name="keywords"
          content="Kriti Rai certificates, Full stack developer certifications, MERN stack certificates, React certification, Next.js certification"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.kritirai.com/certificates" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Certificates – Kriti Rai | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore verified certificates and professional achievements of Kriti Rai in web development and MERN stack."
        />
        <meta property="og:url" content="https://www.kritirai.com/certificates" />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/svg/kritirai.svg"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Certificates – Kriti Rai | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Professional certifications earned by Kriti Rai in MERN stack, React, and modern web technologies."
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

      <CertificateDetails />
    </>
  );
}
