import Head from "next/head";
import Accessibility from "@/Components/ServicesDetails/accessibility";

export default function AccessibilityPage() {

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
      name: "Web Accessibility Services",
      provider: {
        "@type": "Person",
        name: "Kriti Rai",
        url: "https://www.kritirai.com",
      },
      areaServed: "Worldwide",
      description:
        "Professional web accessibility services ensuring WCAG compliance, inclusive design, and ADA-friendly websites.",
      url: "https://www.kritirai.com/services/accessibility",
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
          name: "Accessibility",
          item: "https://www.kritirai.com/services/accessibility",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Web Accessibility Services – Kriti Rai | WCAG & ADA Compliance</title>

        <meta
          name="description"
          content="Improve website accessibility with WCAG and ADA compliance services by Kriti Rai. Build inclusive, accessible, and user-friendly web experiences."
        />

        <meta
          name="keywords"
          content="Web Accessibility Services, WCAG compliance, ADA compliant website, accessible web design, accessibility audit"
        />

        <meta name="author" content="Kriti Rai" />

        <link
          rel="canonical"
          href="https://www.kritirai.com/services/accessibility"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Web Accessibility Services – Kriti Rai"
        />
        <meta
          property="og:description"
          content="Ensure your website meets WCAG and ADA accessibility standards with expert accessibility services."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/services/accessibility"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/accessibility-banner.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Accessibility Services – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Accessible web design and WCAG compliance services by Kriti Rai."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/accessibility-banner.png"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <Accessibility />
    </>
  );
}
