import Head from "next/head";
import ResponsiveWebDesign from "@/Components/ServicesDetails/responsive-web-design";

export default function ResponsiveWebDesignPage() {

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
      name: "Responsive Web Design Services",
      provider: {
        "@type": "Person",
        name: "Kriti Rai",
        url: "https://www.kritirai.com",
      },
      areaServed: "Worldwide",
      description:
        "Professional responsive web design services to create mobile-friendly, SEO-optimized, and fully responsive websites across all devices.",
      url: "https://www.kritirai.com/services/responsive-web-design",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Responsive Web Design",
          item: "https://www.kritirai.com/services/responsive-web-design",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Responsive Web Design Services – Kriti Rai | Mobile-Friendly Websites
        </title>

        <meta
          name="description"
          content="Build mobile-friendly, fast, and SEO-optimized websites with responsive web design services by Kriti Rai. Perfect experience across all devices."
        />

        <meta
          name="keywords"
          content="Responsive web design, mobile friendly website, adaptive website design, SEO responsive website, web design services"
        />

        <meta name="author" content="Kriti Rai" />

        <link
          rel="canonical"
          href="https://www.kritirai.com/services/responsive-web-design"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Responsive Web Design Services – Kriti Rai"
        />
        <meta
          property="og:description"
          content="Create fully responsive, mobile-first, and SEO-friendly websites with expert responsive web design services."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/services/responsive-web-design"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/responsive-design-banner.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Responsive Web Design – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Mobile-friendly and responsive websites designed for performance and SEO."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/responsive-design-banner.png"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <ResponsiveWebDesign />
    </>
  );
}
