import Head from "next/head";
import BreadCrumb from "@/Components/ui/BreadCrumb/BreadCrumb";
import Contact from "@/Components/Contact/Contact";
export default function ContactPage() {
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
      jobTitle: "Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Kriti Rai",
      url: "https://www.kritirai.com/contact",
      description:
        "Get in touch with Kriti Rai for full stack development, MERN stack projects, and freelance web development services.",
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
          name: "Contact",
          item: "https://www.kritirai.com/contact",
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Contact Kriti Rai – Full Stack Developer in India</title>
        <meta
          name="description"
          content="Contact Kriti Rai, a Full Stack Developer in India, for MERN stack development, responsive websites, and scalable web applications."
        />
        <meta
          name="keywords"
          content="Contact Kriti Rai, Hire full stack developer India, MERN stack developer India, Freelance web developer India, Web developer Hyderabad, Web developer Delhi"
        />
        <meta name="author" content="Kriti Rai" />
        <link rel="canonical" href="https://www.kritirai.com/contact" />
        <meta
          property="og:title"
          content="Contact Kriti Rai – Full Stack Developer in India"
        />
        <meta
          property="og:description"
          content="Get in touch with Kriti Rai for MERN stack development, freelance web projects, and scalable applications."
        />
        <meta property="og:url" content="https://www.kritirai.com/contact" />
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
          content="Contact Kriti Rai – Full Stack Developer in India"
        />
        <meta
          name="twitter:description"
          content="Reach out to Kriti Rai for freelance full stack development and MERN stack projects."
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
       <BreadCrumb
        title="Contact"
        path={[{ name: "Home", link: "/" }, { name: "Contact" }]}
      />

    <Contact />
    </>
  );
}
