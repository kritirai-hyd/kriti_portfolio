import { Inter, Roboto } from "next/font/google";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { ThemeProvider } from "../app/context/ThemeContext";
import DisableContextMenu from "@/Components/DisableContextMenu";

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "700"],
});
const geistMono = Roboto({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "700"],
});
export const metadata = {
  title:
    "Kriti Rai | Full Stack Developer in India | MERN Stack Portfolio 2025",
  description:
    "Kriti Rai is a skilled full stack developer specializing in MERN stack, SEO-optimized web applications, responsive design, and scalable backend systems. Explore her portfolio and hire a top developer in Delhi, Hyderabad, or remotely across India.",
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
  siteName: "Kriti Rai",
  authors: [{ name: "Kriti Rai", url: "https://www.kritirai.com" }],
  creator: "Kriti Rai",
  publisher: "Kriti Rai",
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
    title: "Kriti Rai | Full Stack Developer | MERN Portfolio 2025",
    description:
      "Explore Kriti Rai’s full stack web development portfolio with top MERN stack projects, SEO-first coding, and responsive UI/UX design. Hire from Delhi, Hyderabad, or anywhere in India.",
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
    title: "Kriti Rai | Full Stack Developer | MERN Portfolio 2025",
    description:
      "See Kriti Rai’s MERN stack portfolio with performance-optimized projects, backend logic, and mobile-ready designs. Available for hire in India.",
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
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.kritirai.com/#website",
        url: "https://www.kritirai.com",
        name: "Kriti Rai",
        publisher: {
          "@id": "https://www.kritirai.com/#person",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.kritirai.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.kritirai.com/#webpage",
        url: "https://www.kritirai.com",
        name: "Kriti Rai | Full Stack Developer Portfolio",
        description:
          "Explore the MERN stack portfolio of Kriti Rai, a full stack developer from India. Featuring responsive web apps, scalable backends, and SEO-focused coding.",
        isPartOf: { "@id": "https://www.kritirai.com/#website" },
        inLanguage: "en-IN",
      },
      {
        "@type": "Person",
        "@id": "https://www.kritirai.com/#person",
        name: "Kriti Rai",
        url: "https://www.kritirai.com/about",
        jobTitle: "Full Stack Developer",
        sameAs: [
          "https://www.linkedin.com/in/dev-kritirai",
          "https://x.com/dev_kritirai",
          "https://github.com/kritirai-hyd",
        ],
        worksFor: {
          "@id": "https://www.kritirai.com/#organization",
        },
        description:
          "Kriti Rai is a professional full stack web developer in India offering MERN stack services, backend development, SEO strategy, and responsive frontend design for scalable applications.",
      },
      {
        "@type": "Organization",
        "@id": "https://www.kritirai.com/#organization",
        name: "Kriti Rai",
        url: "https://www.kritirai.com",
      },
      {
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
          {
            "@type": "ListItem",
            position: 3,
            name: "Skills",
            item: "https://www.kritirai.com/skills",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Services",
            item: "https://www.kritirai.com/services",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Works",
            item: "https://www.kritirai.com/works",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Contact",
            item: "https://www.kritirai.com/contact",
          },
        ],
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
        <DisableContextMenu />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
