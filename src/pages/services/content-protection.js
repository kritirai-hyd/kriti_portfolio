import Head from "next/head";
import ContentProtection from "@/Components/ServicesDetails/content-protection";

export default function ContentProtectionPage() {

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
      name: "Website Content Protection Services",
      provider: {
        "@type": "Person",
        name: "Kriti Rai",
        url: "https://www.kritirai.com",
      },
      areaServed: "Worldwide",
      description:
        "Professional website content protection services to prevent content theft, disable copy-paste, secure images, and protect intellectual property online.",
      url: "https://www.kritirai.com/services/content-protection",
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
          name: "Content Protection",
          item: "https://www.kritirai.com/services/content-protection",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Website Content Protection Services – Kriti Rai | Secure Your Website
        </title>

        <meta
          name="description"
          content="Protect your website content from theft and unauthorized copying. Content protection solutions by Kriti Rai including anti-copy, image security, and website safeguards."
        />

        <meta
          name="keywords"
          content="Website content protection, prevent content theft, disable copy paste website, protect website content, secure website content"
        />

        <meta name="author" content="Kriti Rai" />

        <link
          rel="canonical"
          href="https://www.kritirai.com/services/content-protection"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Website Content Protection Services – Kriti Rai"
        />
        <meta
          property="og:description"
          content="Secure your website from content theft with professional content protection services."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/services/content-protection"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/content-protection-banner.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Website Content Protection – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Professional website content security solutions to protect your intellectual property."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/content-protection-banner.png"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <ContentProtection />
    </>
  );
}
