import AboutDetails from "@/Components/AboutDetails/AboutDetails";
import JsonLdSchema from "@/Components/JsonLdSchema/JsonLdSchema";

// ✅ SEO Metadata - Automatically handled by App Router
export const generateMetadata = () => ({
  title: "About Kriti Rai – Creative Designer & Innovator",
  description:
    "Learn about Kriti Rai, a passionate designer focused on delivering innovative and impactful creative solutions.",
  keywords: [
    "Kriti Rai",
    "Full stack developer India",
    "MERN stack developer 2025",
    "Kriti Rai portfolio",
    "Web developer in Delhi",
    "Web developer in Hyderabad",
    "Hire full stack developer India",
    "MERN stack projects",
    "Kriti Rai web development services",
    "JavaScript developer India",
    "Responsive design developer",
    "Full stack portfolio site",
    "SEO optimized portfolio developer",
  ],
  authors: [{ name: "Kriti Rai", url: "https://www.kritirai.com" }],
  creator: "Kriti Rai",
  publisher: "Kriti Rai",
  siteName: "Kriti Rai",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "About Kriti Rai – Creative Designer & Innovator",
    description:
      "Learn about Kriti Rai, a passionate designer focused on delivering innovative and impactful creative solutions.",
    url: "https://www.kritirai.com",
    siteName: "Kriti Rai",
    images: [
      {
        url: "https://www.kritirai.com/assets/svg/kritirai.svg",
        width: 1200,
        height: 630,
        alt: "Kriti Rai Full Stack Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kriti Rai – Creative Designer & Innovator",
    description:
      "Learn about Kriti Rai, a passionate designer focused on delivering innovative and impactful creative solutions.",
    images: ["https://www.kritirai.com/assets/svg/kritirai.svg"],
    creator: "@dev_kritirai",
  },
  alternates: {
    canonical: "https://www.kritirai.com",
    languages: {
      "en-IN": "https://www.kritirai.com",
      "en-US": "https://www.kritirai.com",
    },
  },
});

// ✅ JSON-LD Structured Schema
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
    "@type": "CreativeWork",
    name: "Kriti Rai Portfolio",
    creator: {
      "@type": "Person",
      name: "Kriti Rai",
    },
    url: "https://www.kritirai.com/works",
    description:
      "Kriti Rai is a skilled full stack developer specializing in MERN stack, SEO-optimized web applications, responsive design, and scalable backend systems.",
    image: "https://www.kritirai.com/assets/image/responsive-design.png",
    datePublished: "2024-04-20",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kriti Rai Portfolio",
    url: "https://www.kritirai.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.kritirai.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
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
          text: "I'm Kriti Rai, a Full Stack Developer passionate about building responsive, SEO-optimized websites and web applications.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Kriti Rai specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I have a strong command of HTML, CSS, JavaScript, React, Next.js, Node.js, and SQL.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Kriti Rai offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full stack web development, including responsive design, SEO, and scalable backend systems.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Kriti Rai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the contact form on the website or email kriti@raidesign.com.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I see Kriti Rai’s projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit the Projects section of my website to explore my work.",
        },
      },
      {
        "@type": "Question",
        name: "Does Kriti Rai offer freelance work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I’m available for freelance projects. Contact me for availability.",
        },
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutDetails />
      <JsonLdSchema schema={schemaData} />
    </>
  );
}
