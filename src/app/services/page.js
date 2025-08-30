import ServicesDetails from "@/Components/ServicesDetails/ServicesDetails";
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};


import JsonLdSchema from "@/Components/JsonLdSchema/JsonLdSchema";

export async function generateMetadata() {
  return {
  title: "Kriti Rai's Services | My Expertise & Services",
  description:
    "Offering adiverse range of services to enhance your brand and projects. With a focus on quality and creativity and effective outcomes that stand out.",
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
    title: "Kriti Rai's Services | My Expertise & Services",
    description:
      "Offering adiverse range of services to enhance your brand and projects. With a focus on quality and creativity and effective outcomes that stand out.",
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
    title: "Kriti Rai's Services | My Expertise & Services",
    description:
      "Offering adiverse range of services to enhance your brand and projects. With a focus on quality and creativity and effective outcomes that stand out.",
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
  };
}
export default function Home() {
const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kriti Rai",
    "url": "https://www.kritirai.com",
    "image": "https://www.kritirai.com/assets/images/kriti-rai.jpeg",
    "sameAs": [
      "https://www.linkedin.com/in/dev-kritirai",
          "https://x.com/dev_kritirai",
          "https://github.com/kritirai-hyd",
    ],
    "jobTitle": "UX/UI Designer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Osmania University"
    }
  },
  ,
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.kritirai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://www.kritirai.com/services"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Kriti rai",
    "creator": {
      "@type": "Person",
      "name": "Kriti Rai"
    },
    "url": "https://www.kritirai.com/works",
    "description": "Kriti Rai is a skilled full stack developer specializing in MERN stack, SEO-optimized web applications, responsive design, and scalable backend systems. Explore her portfolio and hire a top developer in Delhi, Hyderabad, or remotely across India.",
    "image": "https://www.kritirai.com/assest/image/responsive-design.png",
    "datePublished": "2024-04-20"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kriti Rai Portfolio",
    "url": "https://www.kritirai.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.kritirai.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Kriti Rai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I'm Kriti Rai, a Full Stack Developer passionate about building responsive, SEO-optimized websites and web applications that deliver high performance and exceptional user experiences."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Kriti Rai specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I have a strong command of modern web technologies including HTML, CSS, JavaScript, React, Next.js, Node.js, and SQL."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Kriti Rai offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I offer full stack web development services, including building SEO-optimized, responsive websites, web applications, and custom solutions tailored to client needs."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Kriti Rai for a project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact me through the contact form on my website or by emailing kriti@raidesign.com."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I see Kriti Rai’s past projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My portfolio showcases a variety of projects involving modern web development, available in the Projects section of my website."
        }
      },
      {
        "@type": "Question",
        "name": "Does Kriti Rai offer freelance work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I am available for freelance projects. Feel free to inquire about availability through the contact page."
        }
      }
    ]
  }
];

  return (
<>

<ServicesDetails />
      <JsonLdSchema schema={schemaData} />

</>
  );
}



