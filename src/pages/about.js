import Head from "next/head";
import AboutDetails from "@/Components/AboutDetails/AboutDetails";

export default function AboutPage() {
  // JSON-LD Structured Data
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Kriti Rai",
      url: "https://www.kritirai.com",
      image: "https://www.kritirai.com/assets/images/kriti-rai.jpeg",
      sameAs: [
        "https://www.linkedin.com/in/dev-kritirai",
        "https://x.com/dev_kritirai",
        "https://github.com/kritirai-hyd",
      ],
      jobTitle: "UX/UI Designer",
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
          name: "About",
          item: "https://www.kritirai.com/about",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Kriti Rai?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "I'm Kriti Rai, a Full Stack Developer passionate about building responsive, SEO-optimized websites and web applications.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies does Kriti Rai specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "I have a strong command of HTML, CSS, JavaScript, React, Next.js, Node.js, and SQL.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Kriti Rai offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Full stack web development, including responsive design, SEO, and scalable backend systems.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact Kriti Rai?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the contact form on the website or email kriti@raidesign.com.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I see Kriti Rai’s projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Visit the Projects section of my website to explore my work.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kriti Rai offer freelance work?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, I’m available for freelance projects. Contact me for availability.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>About Kriti Rai – Full Stack Developer in India</title>
        <meta
          name="description"
          content="Learn about Kriti Rai, a passionate Full Stack Developer, specializing in MERN stack development. Creating responsive website and e-commerce applications."
        />
        <meta
          name="keywords"
          content="Kriti Rai, Full stack developer India, MERN stack developer 2026, Kriti Rai portfolio, Web developer in Delhi, Web developer in Hyderabad, Hire full stack developer India, MERN stack projects, JavaScript developer India, Responsive design developer, SEO optimized portfolio developer"
        />
        <meta name="author" content="Kriti Rai" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.kritirai.com/about" />
   <meta
          property="og:title"
          content="About Kriti Rai – Full Stack Developer in India"
        />
        <meta
          property="og:description"
          content="Learn about Kriti Rai, a passionate Full Stack Developer, specializing in MERN stack development. Creating responsive website and e-commerce applications."
        />
        <meta property="og:url" content="https://www.kritirai.com/about" />
        <meta property="og:site_name" content="Kriti Rai" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kritirai.com/assets/svg/kritirai.svg"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Kriti Rai – Full Stack Developer in India"
        />
        <meta
          name="twitter:description"
          content="Learn about Kriti Rai, a passionate Full Stack Developer, specializing in MERN stack development. Creating responsive website and e-commerce applications."
        />
        <meta
          name="twitter:image"
          content="https://www.kritirai.com/assets/images/kriitrai.png"
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

      <AboutDetails />
    </>
  );
}
