import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kriti Rai | Full Stack Developer | Portfolio",
   description: "Explore Kriti Rai full stack developer portfolio featuring MERN stack projects, responsive design, seo, and scalable web applications.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
   keywords: [
    "Kriti Rai",
    "Kriti Rai portfolio",
    "Full stack developer portfolio",
    "MERN stack developer",
    "Full stack web developer",
    "Web developer portfolio",
    "JavaScript developer portfolio",
    "Responsive web developer",
    "Frontend and backend developer",
    "Full stack developer in delhi",
    "Full stack developer in hyderabad",
  
    "Full stack developer in India",

  ],

  authors: [
    { name: "Kriti Rai", url: "https://www.kritirai.com" },
  ],

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
    title: "Kriti Rai | Full Stack Developer | Portfolio",
    description:
      "Explore Kriti Rai full stack developer portfolio featuring MERN stack projects, responsive design, seo, and scalable web applications.",
    url: "https://www.kritirai.com",
    siteName: "Kriti Rai",
    images: [
      {
        url: "https://www.kritirai.com/kriti-rai.jpeg",
        width: 1200,
        height: 630,
        alt: "Full stack developer in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kriti Rai | Full Stack Developer | Portfolio",
    description:
      "Explore Kriti Rai full stack developer portfolio featuring MERN stack projects, responsive design, seo, and scalable web applications.",
    images: ["https://www.kritirai.com/kriti-rai.jpeg"],
    creator: "@kritirai",
  },
  alternates: {
    canonical: "https://www.kritirai.com",
    languages: {
      "en-IN": "https://www.kritirai.com",
      "en-US": "https://www.kritirai.com",
    },
  }
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kriti Rai",
              url: "https://www.kritirai.com",
                           sameAs: [
                "https://www.linkedin.com/in/dev-kritirai/",
                "https://x.com/dev_kritirai",
                "https://github.com/kritirai-hyd"
              ],
              "jobTitle": "Full Stack Developer"
            }),
          }}
        />
      </body>
    </html>
  );
}
