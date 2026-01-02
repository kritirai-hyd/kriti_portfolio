import Head from "next/head";
import ServicesDetails from "@/Components/ServicesDetails/ServicesDetails";

export default function ServicesPage() {

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
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Full Stack Web Development",
      provider: {
        "@type": "Person",
        name: "Kriti Rai",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      description:
        "Full stack web development services using MERN stack, Next.js, and SEO-optimized architectures.",
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
          name: "Services",
          item: "https://www.kritirai.com/services",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Web Development Services – Kriti Rai | MERN Stack Developer</title>
        <meta
          name="description"
          content="Explore web development services by Kriti Rai, a Full Stack Developer specializing in MERN stack, Next.js, responsive design, and SEO optimization."
        />
        <meta
          name="keywords"
          content="Web development services India, Hire full stack developer, MERN stack developer services, React developer India, Next.js developer India"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.kritirai.com/services" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Web Development Services – Kriti Rai"
        />
        <meta
          property="og:description"
          content="Professional MERN stack and full stack web development services by Kriti Rai."
        />
        <meta property="og:url" content="https://www.kritirai.com/services" />
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
          content="Web Development Services – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Hire Kriti Rai for MERN stack, React, and Next.js web development services."
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

      <ServicesDetails />
    </>
  );
}
