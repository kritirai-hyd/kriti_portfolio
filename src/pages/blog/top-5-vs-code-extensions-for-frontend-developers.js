import Head from "next/head";
import VSCodeExtensions from "@/Components/Blog/VSCodeExtensions";

export default function VSCodeExtensionsPage() {
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
      "@type": "BlogPosting",
      headline: "Best VS Code Extensions for Web Developers",
      description:
        "Discover the best Visual Studio Code extensions to boost productivity for web developers using JavaScript, React, and Next.js.",
      author: {
        "@type": "Person",
        name: "Kriti Rai",
      },
      publisher: {
        "@type": "Person",
        name: "Kriti Rai",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.kritirai.com/blog/vscode-extensions",
      },
      datePublished: "2025-01-12",
      dateModified: "2025-01-12",
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
          name: "Blog",
          item: "https://www.kritirai.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "VS Code Extensions",
          item: "https://www.kritirai.com/blog/vscode-extensions",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Best VS Code Extensions for Developers | Kriti Rai</title>
        <meta
          name="description"
          content="A curated list of the best VS Code extensions for web developers to improve productivity, code quality, and workflow."
        />
        <meta
          name="keywords"
          content="VS Code extensions, best vscode extensions, developer tools, web development vscode, react vscode extensions"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.kritirai.com/blog/vscode-extensions"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best VS Code Extensions for Web Developers"
        />
        <meta
          property="og:description"
          content="Boost your coding productivity with the best Visual Studio Code extensions."
        />
        <meta
          property="og:url"
          content="https://www.kritirai.com/blog/vscode-extensions"
        />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/vscode-extensions.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best VS Code Extensions for Developers"
        />
        <meta
          name="twitter:description"
          content="Top VS Code extensions every web developer should use."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/vscode-extensions.png"
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

      <VSCodeExtensions />
    </>
  );
}
