"use client";
import React from "react";
import { usePDF } from "react-to-pdf";
import styles from "./Kritirai.module.css";
import {
  Award,
  File,
  Github,
  Lightbulb,
  Linkedin,
  Locate,
  Mail,
  Map,
  MapPin,
} from "lucide-react";

const Kritirai = () => {
  const { toPDF, targetRef } = usePDF({ filename: "kritirai-cv.pdf" });

  return (
    <>
      <div className={styles.container}>
        <button onClick={() => toPDF()} className={styles.download}>
          <i className="fa fa-download"></i> Download PDF Resume
        </button>
        <div ref={targetRef}>
          <div className={styles.resumeContainer}>
            <header className={styles.header}>
              <div className={styles.headerText}>
                <h1>Kriti Rai</h1>
                <p className={styles.tagline}>
                  Full Stack Developer | Responsive Web Design | SEO-Friendly
                  Websites
                </p>
                <div className={styles.contactcontainer}>
                <div className={styles.locationInfo}>
                  <MapPin />
                  Hyderabad, Telangana, India
                </div>
                <div className={styles.locationInfo}>
                  <Mail /> kritirai.hyd@gmail.com
                </div>
                <div className={styles.locationInfo}>
                   <Github />
                  Github
                </div>
                <div className={styles.locationInfo}>
              <File />
                  Hackerrank
                </div>
      
     </div>
              </div>
          
            </header>

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
              <div className={styles.keyHighlights}>
                <span className={styles.highlight}>3+ Personal Projects</span>
                <span className={styles.highlight}>
                  4 Professional Certifications
                </span>

                <span className={styles.highlight}> Responsive Web Design</span>
              </div>
            </section>

            <div className={styles.resumeGrid}>
              <div className={styles.mainCol}>
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <i className="fa fa-code"></i> Featured Projects
                  </h2>

                  <div className={styles.item}>
                    <div className={styles.projectHeader}>
                      <div>
                        <div className={styles.itemHeader}>
                          <span>Car Rental Website</span>
                          <span className={styles.projectStatus}>
                            <i className="fa fa-external-link-alt"></i> Live
                            Demo Available
                          </span>
                        </div>
                        <div className={styles.projectLinks}>
                          <a href="#" className={styles.projectLink}>
                            <i className="fa fa-eye"></i> View Demo
                          </a>
                          <a href="#" className={styles.projectLink}>
                            <i className="fa fa-code"></i> Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemSub}>
                      Personal Project • 2024
                    </div>
                    <ul className={styles.list}>
                      <li>
                        Developed a fully responsive car rental platform with
                        real-time availability checking
                      </li>
                      <li>
                        Implemented client-side routing for seamless navigation
                        and booking flow
                      </li>
                      <li>
                        Optimized performance achieving 95+ Lighthouse score for
                        mobile devices
                      </li>
                      <li>
                        Integrated Google Maps API for location-based car search
                        functionality
                      </li>
                      <li>
                        Designed and implemented a clean, modern UI with CSS
                        Grid and Flexbox
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

                  <div className={styles.item}>
                    <div className={styles.projectHeader}>
                      <div>
                        <div className={styles.itemHeader}>
                          <span>Coupon Website</span>
                          <span className={styles.projectStatus}>
                            <i className="fa fa-external-link-alt"></i> Live
                            Demo Available
                          </span>
                        </div>
                        <div className={styles.projectLinks}>
                          <a href="#" className={styles.projectLink}>
                            <i className="fa fa-eye"></i> View Demo
                          </a>
                          <a href="#" className={styles.projectLink}>
                            <i className="fa fa-code"></i> Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemSub}>
                      Personal Project • 2024
                    </div>
                    <ul className={styles.list}>
                      <li>
                        Built a dynamic coupon-sharing platform with real-time
                        deal updates from multiple sources
                      </li>
                      <li>
                        Developed RESTful API backend for managing coupons,
                        users, and categories
                      </li>
                      <li>
                        Implemented user authentication and role-based access
                        control
                      </li>
                      <li>
                        Created an admin dashboard for content management and
                        analytics
                      </li>
                      <li>
                        Optimized database queries for handling thousands of
                        coupon entries
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

                  <div className={styles.item}>
                    <div className={styles.projectHeader}>
                      <div>
                        <div className={styles.itemHeader}>
                          <span>Employee Management System</span>
                          <span className={styles.projectStatus}>
                            <i className="fa fa-lock"></i> Private Repository
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemSub}>
                      Academic Project • 2024
                    </div>
                    <ul className={styles.list}>
                      <li>
                        Designed and developed a comprehensive employee
                        management system with secure authentication
                      </li>
                      <li>
                        Implemented role-based access control with NextAuth.js
                        for admin and employee roles
                      </li>
                      <li>
                        Built RESTful API endpoints for CRUD operations on
                        employee data
                      </li>
                      <li>
                        Created dashboard with data visualization for HR
                        analytics
                      </li>
                      <li>
                        Implemented file upload functionality for employee
                        documents and profiles
                      </li>
                      <li>
                        Added real-time notifications for important updates and
                        announcements
                      </li>
                    </ul>
                    <div className={styles.techStack}>
                      <span className={styles.techTag}>Next.js 13</span>
                      <span className={styles.techTag}>NextAuth.js</span>
                      <span className={styles.techTag}>MongoDB</span>
                      <span className={styles.techTag}>Mongoose</span>
                      <span className={styles.techTag}>Chart.js</span>
                      <span className={styles.techTag}>Cloudinary</span>
                    </div>
                  </div>

               
                </section>

                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <i className="fa fa-graduation-cap"></i> Education &
                    Academic Background
                  </h2>
                  <div className={styles.item}>
                    <div className={styles.educationDegree}>
                     Bachelor of Computer
                      Applications (BCA)
                    </div>
                    <div className={styles.itemSub}>
                      Osmania University, Hyderabad
                    </div>
                    <div className={styles.educationPeriod}>
                       July 2023 – May 2026
                      (Expected)
                    </div>
                    <div className={styles.grade}>
                      Current Grade: A (8.5 CGPA)
                    </div>
                    <div className={styles.academicHighlights}>
                      <h4>Relevant Coursework:</h4>
                      <ul className={styles.courseworkList}>
                        <li>Web Technologies & Applications</li>
                        <li>Database Management Systems</li>
                        <li>Object-Oriented Programming</li>
                        <li>Data Structures & Algorithms</li>
                        <li>Software Engineering</li>
                        <li>Computer Networks</li>
                      </ul>
                    </div>
                  </div>
    <div className={styles.item}>
                    <div className={styles.educationDegree}>
                     Higher Secondary
                      Education (12th Grade)
                    </div>
                    <div className={styles.itemSub}>
                     Priyanka Junior, Degree & PG College For Womens, Hyderabad
                    </div>
                    <div className={styles.educationPeriod}>
                      2021 – 2023
                    </div>
                    <div className={styles.grade}>
                     Percentage: 83.4%
                    </div>
                  </div>
               
                </section>
              </div>

              <div className={styles.sideCol}>
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <i className="fa fa-tools"></i> Technical Skills
                  </h2>

                  <h3 className={styles.skillCategory}>
                    <i className="fa fa-desktop"></i> Frontend Development
                  </h3>
                  <div className={styles.skillsContainer}>
                    <span className={styles.skillTag}>
                      HTML5 & Semantic HTML
                    </span>
                    <span className={styles.skillTag}>
                     CSS Grid/Flexbox
                    </span>
                    <span className={styles.skillTag}>JavaScript</span>
                
                    <span className={styles.skillTag}>React.js & Hooks</span>
                    <span className={styles.advancedTag}>Next.js</span>
                 
                    <span className={styles.skillTag}>Bootstrap 5</span>
                    <span className={styles.skillTag}>
                      Responsive Web Design
                    </span>
                    <span className={styles.skillTag}>
                      Web Accessibility
                    </span>
                  </div>

                  <h3 className={styles.skillCategory}>
                    <i className="fa fa-server"></i> Backend Development
                  </h3>
                  <div className={styles.skillsContainer}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Express.js</span>
                    <span className={styles.advancedTag}>RESTful APIs</span>
                    <span className={styles.skillTag}>NextAuth.js</span>
                    <span className={styles.skillTag}>JWT Authentication</span>
                    <span className={styles.skillTag}>API Integration</span>
                  
                  </div>

                  <h3 className={styles.skillCategory}>
                    <i className="fa fa-database"></i> Database & Storage
                  </h3>
                  <div className={styles.skillsContainer}>
                   
                    <span className={styles.skillTag}>MySQL</span>
                    <span className={styles.skillTag}>SQL Queries</span>
                   <span className={styles.skillTag}>MongoDB & Mongoose</span>
                    <span className={styles.skillTag}>Schema Design</span>
              
                  </div>

                  <h3 className={styles.skillCategory}>
                    <i className="fa fa-cogs"></i> Development Tools & Others
                  </h3>
                  <div className={styles.skillsContainer}>
                    <span className={styles.skillTag}>Git & GitHub</span>
                    <span className={styles.skillTag}>VS Code</span>
                    <span className={styles.skillTag}>Postman</span>
                    <span className={styles.skillTag}>SEO Optimization</span>
                    <span className={styles.skillTag}>Web Performance</span>
                    <span className={styles.skillTag}>
                      PageSpeed Insights Testing
                    </span>
               
                    <span className={styles.skillTag}>Problem Solving</span>
                    <span className={styles.skillTag}>Debugging</span>
                  </div>

                  <h3 className={styles.skillCategory}>
                   Currently Learning
                  </h3>
                  <div className={styles.skillsContainer} style={{justifyContent:"center"}}>
              
                    <span className={styles.learningTag} style={{textAlignt:"center"}}>Python</span>
                  </div>
                </section>

                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                 Certifications &
                    Achievements
                  </h2>
                  <ul className={styles.certificationList}>
                    <li>
                      <div className={styles.certHeader}>
                        <strong>Responsive Web Design</strong>
                        <span className={styles.certOrg}>freeCodeCamp</span>
                      </div>
                      <div className={styles.certDate}>
                        Issued: April 10,
                        2024
                      </div>
                    
                    </li>
                    <li>
                      <div className={styles.certHeader}>
                        <strong>JavaScript Algorithms & Data Structures</strong>
                        <span className={styles.certOrg}>freeCodeCamp</span>
                      </div>
                      <div className={styles.certDate}>
                        Issued: May 4, 2024
                      </div>
                     
                    </li>
                    <li>
                      <div className={styles.certHeader}>
                        <strong>SQL and Relational Databases</strong>
                        <span className={styles.certOrg}>HackerRank</span>
                      </div>
                      <div className={styles.certDate}>
                        Issued: September
                        2024
                      </div>
                     
                    </li>
                    <li>
                      <div className={styles.certHeader}>
                        <strong>Web Development Fundamentals</strong>
                        <span className={styles.certOrg}>IBM SkillsBuild</span>
                      </div>
                      <div className={styles.certDate}>
                         Issued: December 2024
                      </div>
                      
                    </li>
                  </ul>
                </section>

                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    Additional Information
                  </h2>
                  <div className={styles.additionalInfo}>
                    <div className={styles.infoItem}>
                      <h4>
                        SEO Expertise
                      </h4>
                      <p>
                        Strong understanding of SEO principles including meta
                        tags, structured data, page speed optimization, and
                        mobile-first indexing.
                      </p>
                    </div>
                    <div className={styles.infoItem}>
                      <h4>
                    Development Approach
                      </h4>
                      <p>
                        Follows mobile-first responsive design, clean code
                        practices, and focuses on performance optimization and
                        user experience.
                      </p>
                    </div>
                    <div className={styles.infoItem}>
                      <h4>
                       Learning & Growth
                      </h4>
                      <p>
                        Continuously learning new technologies, contributing to
                        open-source projects, and building practical
                        applications.
                      </p>
                    </div>
                  </div>
                  <div className={styles.badgesContainer}>
                    <h4>
                   <Award size={16} /> Badges & Achievements
                    </h4>
                    <div className={styles.badges}>
                      <span className={styles.badge}>
                        IBM Certified Developer
                      </span>
                      <span className={styles.badge}>5★ SQL HackerRank</span>
                      <span className={styles.badge}>Problem Solver</span>
                      <span className={styles.badge}>100 Days of Code</span>
                        </div>
                  </div>
                </section>
              </div>
            </div>

            <footer className={styles.footer}>
              <div className={styles.footerContent}>
              
                <div className={styles.footerLinks}>
              
                  <span>Last Updated: January 2026</span>
                  <span>•</span>
                  <span>Portfolio: kritirai.com</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kritirai;
