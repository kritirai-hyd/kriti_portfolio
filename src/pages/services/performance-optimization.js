import Head from "next/head";
import PerformanceOptimization from "@/Components/ServicesDetails/performance-optimization";

export default function PerformanceOptimizationPage() {

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
      name: "Website Performance Optimization Services",
      provider: {
        "@type": "Person",
        name: "Kriti Rai",
        url: "https://www.kritirai.com",
      },
      areaServed: "Worldwide",
      description:
        "Professional website performance optimization services to improve speed, Core Web Vitals, page load time, and overall user experience.",
      url: "https://www.kritirai.com/services/performance-optimization",
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
          name: "Performance Optimization",
          item: "https://www.kritirai.com/services/performance-optimization",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Website Performance Optimization – Kriti Rai | Improve Speed & Core Web Vitals
        </title>

        <meta
          name="description"
          content="Boost website speed and improve Core Web Vitals with performance optimization services by Kriti Rai. Faster load times, better SEO, and improved user experience."
        />

        <meta
          name="keywords"
          content="Website performance optimization, improve website speed, Core Web Vitals optimization, page speed optimization, website speed expert"
        />

        <meta name="author" content="Kriti Rai" />

        <link
          rel="canonical"
          href="https://www.kritirai.com/services/performance-optimization"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Website Performance Optimization – Kriti Rai"
        />
        <meta
          property="og:description"
          content="Improve website speed, Core Web Vitals, and overall performance with expert optimization services."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/services/performance-optimization"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/performance-optimization-banner.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Website Performance Optimization – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Speed up your website and improve SEO with professional performance optimization services."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/performance-optimization-banner.png"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <PerformanceOptimization />
    </>
  );
}
