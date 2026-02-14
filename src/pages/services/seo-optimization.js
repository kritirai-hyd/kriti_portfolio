import Head from "next/head";
import SeoOptimization from "@/Components/ServicesDetails/seo-optimization";

export default function SeoOptimizationPage() {

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
      name: "SEO Optimization Services",
      provider: {
        "@type": "Person",
        name: "Kriti Rai",
        url: "https://www.kritirai.com",
      },
      areaServed: "Worldwide",
      description:
        "Professional SEO optimization services to improve search engine rankings, increase organic traffic, and boost website visibility.",
      url: "https://www.kritirai.com/services/seo-optimization",
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
          name: "SEO Optimization",
          item: "https://www.kritirai.com/services/seo-optimization",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          SEO Optimization Services – Kriti Rai | Improve Rankings & Traffic
        </title>

        <meta
          name="description"
          content="Boost your search rankings and organic traffic with professional SEO optimization services by Kriti Rai. On-page SEO, technical SEO, and performance improvements."
        />

        <meta
          name="keywords"
          content="SEO optimization services, technical SEO expert, improve Google ranking, on-page SEO, website SEO services"
        />

        <meta name="author" content="Kriti Rai" />

        <link
          rel="canonical"
          href="https://www.kritirai.com/services/seo-optimization"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="SEO Optimization Services – Kriti Rai"
        />
        <meta
          property="og:description"
          content="Improve your Google rankings and organic traffic with expert SEO optimization services."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/services/seo-optimization"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/seo-optimization-banner.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SEO Optimization – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Professional SEO services to improve search rankings and website visibility."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/seo-optimization-banner.png"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <SeoOptimization />
    </>
  );
}
