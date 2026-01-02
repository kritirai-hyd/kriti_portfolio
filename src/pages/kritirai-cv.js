import Head from "next/head";
import Kritirai from "@/Components/Kritirai/Kritirai";

export default function ResumePage() {

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
      knowsAbout: [
        "MERN Stack",
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "SEO Optimization",
        "Responsive Web Design",
      ],
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
          name: "Resume",
          item: "https://www.kritirai.com/resume",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Resume of Kriti Rai – Full Stack Developer (MERN)</title>
        <meta
          name="description"
          content="View the resume of Kriti Rai, a Full Stack Developer specializing in MERN stack, Next.js, and SEO-optimized web applications."
        />
        <meta
          name="keywords"
          content="Kriti Rai resume, Full stack developer resume India, MERN stack developer resume, React developer resume, Next.js developer resume"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.kritirai.com/resume" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Resume of Kriti Rai – Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore the professional resume of Kriti Rai, a MERN stack developer building scalable and SEO-friendly web applications."
        />
        <meta property="og:url" content="https://www.kritirai.com/resume" />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/images/kriitrai.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Resume of Kriti Rai – Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Professional resume of Kriti Rai, MERN stack & Next.js developer."
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

      <Kritirai />
    </>
  );
}
