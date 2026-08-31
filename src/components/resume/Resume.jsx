import React from "react";
import { usePDF } from "react-to-pdf";
import styles from "./resume.module.css";
import {
  Award,
  Download,
  File,
  Code2,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const Resume = () => {
  const { toPDF, targetRef } = usePDF({ filename: "kritirai-cv.pdf" });

  return (
    <>
      <div className={styles.container}>
        <button onClick={() => toPDF()} className={styles.download}>
          <Download /> Download PDF Resume
        </button>

        <div ref={targetRef}>
          <div className={styles.resumeContainer}>
            {/* HEADER SECTION */}
            <header className={styles.header}>
              <div className={styles.headerText}>
                <h1>Kriti Rai</h1>
                <p className={styles.tagline}>
                  Full Stack Developer | Responsive Web Design | SEO-Friendly Websites
                </p>
                <div className={styles.contactcontainer}>
                  <div className={styles.locationInfo}>
                    <MapPin />
                    Hyderabad, Telangana, India
                  </div>
                  <a href="mailto:kritirai.hyd@gmail.com" className={styles.locationInfo}>
                    <Mail /> kritirai.hyd@gmail.com
                  </a>
                  <Link href="https://github.com/kritirai-hyd" className={styles.locationInfo}>
                    <Code2 /> Github
                  </Link>
                  <Link href="https://www.hackerrank.com/profile/kritirai_hyd" className={styles.locationInfo}>
                    <File /> HackerRank
                  </Link>
                </div>
              </div>
            </header>

            {/* SUMMARY SECTION */}
            <section className={styles.summarySection}>
              <h2 className={styles.sectionTitle}>Professional Summary</h2>
              <p className={styles.summaryText}>
                Full Stack Developer passionate about building responsive,
                SEO-optimized websites and web applications that deliver high
                performance and exceptional user experiences. Skilled in modern
                web technologies including React, Next.js, Node.js, and
                databases. Passionate about creating clean, efficient code and
                delivering exceptional user experiences. Recently completed a
                Bachelor of Computer Applications (BCA) while actively working
                on real-world projects to enhance practical skills in web
                development.
              </p>
            </section>

            <div className={styles.resumeGrid}>
              <div className={styles.mainCol}>
                {/* FEATURED PROJECTS SECTION */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Featured Projects</h2>

                  {/* Project 1: Car Rental */}
                  <div className={styles.item}>
                    <div className={styles.projectHeader}>
                      <div className={styles.itemHeader}>
                        <span>Car Rental Website Development</span>
                      </div>
                    </div>
                    <div className={styles.itemSub}>Personal Project • 2024</div>
                    <ul className={styles.list}>
                      <li>
                        A modern and responsive car rental website designed to help customers easily explore available vehicles and submit booking inquiries.
                      </li>
                      <li>
                        Implemented real-time availability checking and client-side routing for a seamless booking flow across desktop, tablet, and mobile devices.
                      </li>
                      <li>
                        Optimized performance achieving 95+ Lighthouse score for mobile devices with an SEO-first design.
                      </li>
                      <li>
                        Integrated Google Maps API for location-based car search functionality.
                      </li>
                    </ul>
                    <div className={styles.techStack}>
                      <span className={styles.techTag}>Next.js 14</span>
                      <span className={styles.techTag}>React</span>
                      <span className={styles.techTag}>CSS Modules</span>
                      <span className={styles.techTag}>Google Maps API</span>
                      <span className={styles.techTag}>Responsive Design</span>
                    </div>
                  </div>

                  {/* Project 2: Creative Coder */}
                  <div className={styles.item}>
                    <div className={styles.projectHeader}>
                      <div className={styles.itemHeader}>
                        <span>Creative Coder Website</span>
                      </div>
                    </div>
                    <div className={styles.itemSub}>Company Website Project • 2025</div>
                    <ul className={styles.list}>
                      <li>
                        Created a professional agency website for a software development company to showcase its services, portfolio projects, and technical expertise.
                      </li>
                      <li>
                        Designed a modern responsive user interface optimized for speed, cross-device accessibility, and Core Web Vitals performance.
                      </li>
                      <li>
                        Structured high-converting call-to-action sections to capture potential business leads effectively.
                      </li>
                    </ul>
                    <div className={styles.techStack}>
                      <span className={styles.techTag}>Next.js</span>
                      <span className={styles.techTag}>React</span>
                      <span className={styles.techTag}>SEO Optimization</span>
                      <span className={styles.techTag}>Tailwind CSS</span>
                    </div>
                  </div>

                  {/* Project 3: CouponsZone */}
                  <div className={styles.item}>
                    <div className={styles.projectHeader}>
                      <div className={styles.itemHeader}>
                        <span>CouponsZone - Coupon & Deals Website</span>
                      </div>
                    </div>
                    <div className={styles.itemSub}>Full Stack Project • 2024 - 2025</div>
                    <ul className={styles.list}>
                      <li>
                        Built a dynamic coupon-sharing platform enabling users to search, filter, and discover the latest offers and store discounts.
                      </li>
                      <li>
                        Developed a RESTful API backend to efficiently manage deals, users, categories, and database queries for thousands of coupon entries.
                      </li>
                      <li>
                        Implemented safe user authentication, role-based access control, and an administrative panel for store management and analytics.
                      </li>
                    </ul>
                    <div className={styles.techStack}>
                      <span className={styles.techTag}>Next.js</span>
                      <span className={styles.techTag}>Node.js</span>
                      <span className={styles.techTag}>Express.js</span>
                      <span className={styles.techTag}>MongoDB</span>
                      <span className={styles.techTag}>JWT Auth</span>
                      <span className={styles.techTag}>REST API</span>
                    </div>
                  </div>
                </section>

                {/* EDUCATION SECTION */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    Education & Academic Background
                  </h2>
                  <div className={styles.item}>
                    <div className={styles.educationDegree}>
                      Master of Computer Applications (MCA)
                    </div>
                    <div className={styles.itemSub}>
                      Jawaharlal Nehru Technological University Hyderabad (JNTUH)
                    </div>
                    <div className={styles.educationPeriod}>
                      Aug 2026 – Jul 2028
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.educationDegree}>
                      Bachelor of Computer Applications (BCA)
                    </div>
                    <div className={styles.itemSub}>
                      Osmania University, Hyderabad
                    </div>
                    <div className={styles.educationPeriod}>
                      July 2023 – May 2026
                    </div>
                    <div className={styles.grade}>Grade: A (8.5 CGPA)</div>
                  </div>
                </section>
              </div>

              {/* SIDEBAR COLUMN */}
              <div className={styles.sideCol}>
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Technical Skills</h2>

                  <h3 className={styles.skillCategory}>Frontend Development</h3>
                  <div className={styles.skillsContainer}>
                    <span className={styles.skillTag}>HTML5</span>
                    <span className={styles.skillTag}>CSS3 / Tailwind</span>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>React.js</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>Bootstrap 5</span>
                    <span className={styles.skillTag}>Responsive Design</span>
                  </div>

                  <h3 className={styles.skillCategory}>Backend Development</h3>
                  <div className={styles.skillsContainer}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Express.js</span>
                    <span className={styles.skillTag}>RESTful APIs</span>
                    <span className={styles.skillTag}>JWT Authentication</span>
                  </div>

                  <h3 className={styles.skillCategory}>Database & Storage</h3>
                  <div className={styles.skillsContainer}>
                    <span className={styles.skillTag}>MySQL / SQL</span>
                    <span className={styles.skillTag}>MongoDB & Mongoose</span>
                    <span className={styles.skillTag}>Schema Design</span>
                  </div>
                </section>

    <br />
            
         <section className={styles.section}>
  <h2 className={styles.sectionTitle}>Certifications & Credentials</h2>
  <ul className={styles.certificationList}>
    <li>
      <div className={styles.certHeader}>
        <strong>Google Play Academy - Store Listing Certificate</strong>
        <span className={styles.certOrg}>Google Play Academy</span>
      </div>
      <div className={styles.certDate}>Issued: Oct 2025 · Expires: Oct 2028 | ID: 163160749</div>
    </li>
    <li>
      <div className={styles.certHeader}>
        <strong>Postman API Fundamentals Student Expert</strong>
        <span className={styles.certOrg}>Postman</span>
      </div>
      <div className={styles.certDate}>Issued: Jan 2025</div>
    </li>
    <li>
      <Link href="https://www.hackerrank.com/certificates/22f1961a6cff">
        <div className={styles.certHeader}>
          <strong>SQL Certificate</strong>
          <span className={styles.certOrg}>HackerRank</span>
        </div>
        <div className={styles.certDate}>Issued: Jan 2025 | ID: 22f1961a6cff</div>
      </Link>
    </li>
    <li>
      <div className={styles.certHeader}>
        <strong>SQL and Relational Databases 101</strong>
        <span className={styles.certOrg}>Cognitive Class (IBM)</span>
      </div>
      <div className={styles.certDate}>Issued: Jan 2025 | ID: 72376ab72f974ae3a633f80b6ee5810a</div>
    </li>
    <li>
      <div className={styles.certHeader}>
        <strong>LFW111: Introduction to Node.js</strong>
        <span className={styles.certOrg}>The Linux Foundation</span>
      </div>
      <div className={styles.certDate}>Issued: Dec 2024</div>
    </li>
    <li>
      <Link href="https://www.freecodecamp.org/certification/fcc0eff59a2-6ba3-4acc-923c-f68ff0f8c431/foundational-c-sharp-with-microsoft">
        <div className={styles.certHeader}>
          <strong>Foundational C# with Microsoft</strong>
          <span className={styles.certOrg}>freeCodeCamp</span>
        </div>
        <div className={styles.certDate}>Issued: Dec 2024</div>
      </Link>
    </li>
    <li>
      <div className={styles.certHeader}>
        <strong>Web Development Fundamentals</strong>
        <span className={styles.certOrg}>IBM</span>
      </div>
      <div className={styles.certDate}>Issued: Dec 2024</div>
    </li>
    <li>
      <Link href="https://www.freecodecamp.org/certification/fcc0eff59a2-6ba3-4acc-923c-f68ff0f8c431/javascript-algorithms-and-data-structures-v8">
        <div className={styles.certHeader}>
          <strong>JavaScript Algorithms and Data Structures</strong>
          <span className={styles.certOrg}>freeCodeCamp</span>
        </div>
        <div className={styles.certDate}>Issued: May 2024</div>
      </Link>
    </li>
    <li>
      <Link href="https://www.freecodecamp.org/certification/fcc0eff59a2-6ba3-4acc-923c-f68ff0f8c431/responsive-web-design">
        <div className={styles.certHeader}>
          <strong>Responsive Web Design</strong>
          <span className={styles.certOrg}>freeCodeCamp</span>
        </div>
        <div className={styles.certDate}>Issued: Apr 2024</div>
      </Link>
    </li>
  </ul>
</section>
     
              </div>
            </div>

            {/* FOOTER */}
            <footer className={styles.footer}>
              <div className={styles.footerContent}>
                <div className={styles.footerLinks}>
                  <span>Last Updated: August 2026</span>
                  <span>•</span>
                  <span>Portfolio: dev-kritirai</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;