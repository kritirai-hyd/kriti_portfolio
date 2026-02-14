import Head from "next/head";
import UiUxDesign from "@/Components/ServicesDetails/ui-ux-design";

export default function UiUxDesignPage() {

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
      name: "UI/UX Design Services",
      provider: {
        "@type": "Person",
        name: "Kriti Rai",
        url: "https://www.kritirai.com",
      },
      areaServed: "Worldwide",
      description:
        "Professional UI/UX design services focused on user-centered design, intuitive interfaces, wireframing, prototyping, and seamless digital experiences.",
      url: "https://www.kritirai.com/services/ui-ux-design",
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
          name: "UI/UX Design",
          item: "https://www.kritirai.com/services/ui-ux-design",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          UI/UX Design Services – Kriti Rai | Modern & User-Centered Design
        </title>

        <meta
          name="description"
          content="Elevate your digital experience with professional UI/UX design services by Kriti Rai. Intuitive, user-friendly, and conversion-focused designs."
        />

        <meta
          name="keywords"
          content="UI UX design services, user interface design, user experience design, wireframing, prototyping, UX expert"
        />

        <meta name="author" content="Kriti Rai" />

        <link
          rel="canonical"
          href="https://www.kritirai.com/services/ui-ux-design"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="UI/UX Design Services – Kriti Rai"
        />
        <meta
          property="og:description"
          content="User-centered UI/UX design services for intuitive, engaging, and high-converting digital products."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/services/ui-ux-design"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/ui-ux-design-banner.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="UI/UX Design – Kriti Rai"
        />
        <meta
          name="twitter:description"
          content="Modern, user-focused UI/UX design services that improve usability and engagement."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/ui-ux-design-banner.png"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <UiUxDesign />
    </>
  );
}
