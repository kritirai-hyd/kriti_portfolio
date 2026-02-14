import Head from "next/head";
import Blog from "@/Components/Blog/Blog";

export default function BlogPage() {

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
      "@type": "Blog",
      name: "Kriti Rai Blog",
      url: "https://www.kritirai.com/blog",
      description:
        "Technical blog by Kriti Rai covering MERN stack, Next.js, JavaScript, SEO, and modern web development.",
      publisher: {
        "@type": "Person",
        name: "Kriti Rai",
      },
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
      ],
    },
  ];

  return (
    <>
      <Head>
  
        <title>Blog – Kriti Rai | Full Stack & MERN Developer</title>
        <meta
          name="description"
          content="Read articles by Kriti Rai on MERN stack, Next.js, JavaScript, SEO, and full stack web development."
        />
        <meta
          name="keywords"
          content="Kriti Rai blog, MERN stack blog, Full stack developer blog India, Next.js tutorials, JavaScript tips"
        />
        <meta name="author" content="Kriti Rai" />


        <link rel="canonical" href="https://www.kritirai.com/blog" />

        <meta
          property="og:title"
          content="Blog – Kriti Rai | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Technical blogs and tutorials on MERN stack, Next.js, and modern web development by Kriti Rai."
        />
        <meta property="og:url" content="https://www.kritirai.com/blog" />
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
          content="Blog – Kriti Rai | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Learn MERN stack, Next.js, and modern JavaScript from Kriti Rai’s technical blog."
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

      <Blog />
    </>
  );
}
