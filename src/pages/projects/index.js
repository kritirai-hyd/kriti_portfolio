import Head from "next/head";
import WorkDetails from "@/Components/WorkDetails/WorkDetails";

export default function ProjectsPage() {

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
      "@type": "CollectionPage",
      name: "Projects by Kriti Rai",
      url: "https://www.kritirai.com/projects",
      description:
        "Portfolio projects by Kriti Rai showcasing MERN stack, Next.js, and full stack web development work.",
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
          name: "Projects",
          item: "https://www.kritirai.com/projects",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
 
        <title>Projects – Kriti Rai | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore projects by Kriti Rai, a Full Stack Developer specializing in MERN stack, Next.js, responsive design, and scalable web applications."
        />
        <meta
          name="keywords"
          content="Kriti Rai projects, Full stack developer portfolio, MERN stack projects, React projects, Next.js portfolio"
        />
        <meta name="author" content="Kriti Rai" />

        <link rel="canonical" href="https://www.kritirai.com/projects" />


        <meta
          property="og:title"
          content="Projects – Kriti Rai | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="View real-world MERN stack and full stack web development projects by Kriti Rai."
        />
        <meta property="og:url" content="https://www.kritirai.com/projects" />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/svg/kritirai.svg"
        />
        <meta property="og:locale" content="en_IN" />

    
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projects – Kriti Rai | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Browse MERN stack, React, and Next.js projects built by Kriti Rai."
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

      <WorkDetails />
    </>
  );
}
