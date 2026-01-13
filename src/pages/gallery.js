import Head from "next/head";
import Gallery from "@/Components/Gallery/Gallery";

export default function GalleryPage() {
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
      "@type": "CollectionPage",
      name: "Gallery – Kriti Rai",
      url: "https://www.kritirai.com/gallery",
      description:
        "Gallery showcasing projects, designs, certifications, and professional highlights by Kriti Rai, Full Stack Developer.",
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
          name: "Gallery",
          item: "https://www.kritirai.com/gallery",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Gallery – Kriti Rai | Projects & Creative Work</title>
        <meta
          name="description"
          content="Explore the gallery of Kriti Rai featuring projects, UI designs, certificates, and professional work as a Full Stack Developer."
        />
        <meta
          name="keywords"
          content="Kriti Rai gallery, web developer projects, full stack portfolio, MERN stack projects, React gallery"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.kritirai.com/gallery" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Gallery – Kriti Rai | Projects & Creative Work"
        />
        <meta
          property="og:description"
          content="Browse projects, designs, and professional highlights from Kriti Rai’s development journey."
        />
        <meta property="og:url" content="https://www.kritirai.com/gallery" />
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
          content="Gallery – Kriti Rai | Projects & Creative Work"
        />
        <meta
          name="twitter:description"
          content="Projects, designs, certificates, and creative work by Full Stack Developer Kriti Rai."
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

      <Gallery />
    </>
  );
}
