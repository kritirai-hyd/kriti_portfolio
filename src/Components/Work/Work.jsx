"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Work.module.css";
import a from "../../assets/image/project-1.png";
import b from "../../assets/image/couponszone-p1.png";
import c from "../../assets/image/user-auth.png";
import { useTheme } from "../../app/context/ThemeContext";

const Work = () => {
 const { theme } = useTheme();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  setIsVisible(true);

  const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
    if (entry.isIntersecting) {
     entry.target.classList.add(styles.show);
    }
   });
  }, { threshold: 0.1 });

  const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
  hiddenElements.forEach((el) => observer.observe(el));

  return () => {
   hiddenElements.forEach((el) => observer.unobserve(el));
  };
 }, []);

 return (
  <>
   <div id="projects" className={`${styles.projects} ${theme === 'dark' ? styles.bgDark : styles.bgLight}`}>
    <div className={styles.sTitle}>
     <h2 className={`${styles.groupTitle} ${theme === 'dark' ? styles.tDark : styles.tLight}`}>My Projects</h2>

    </div>
    <section className={styles.portfolioContainer}>
     <div className={`${styles.projectCard} ${styles.hidden} ${isVisible ? styles.animateFadeIn : ''}`}>
      <div className={styles.projectImageContainer}>
       <Image
        src={a}
        alt="Car Rental Website Screenshot"
        className={styles.projectImage}
       />
       <div className={styles.projectOverlay}>
        <div className={styles.projectLinks}>
         <a href="https://www.kritirai.com" target="_blank" className={styles.demoLink}>
          <span>Live Demo</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
         </a>
        </div>
       </div>
      </div>
      <div className={styles.projectContent}>
       <h3 className={styles.projectTitle}>Car Rental Website</h3>
       <p className={styles.projectDescription}>
        Responsive car rental site built with Next.js and CSS, showcasing UI design and client-side routing.
       </p>
       <div className={styles.projectTags}>
        <span>Next.js</span>
        <span>React</span>
        <span>CSS</span>
       </div>
      </div>
     </div>

     <div className={`${styles.projectCard} ${styles.hidden} ${isVisible ? styles.animateFadeIn : ''}`} style={{ animationDelay: '0.2s' }}>
      <div className={styles.projectImageContainer}>
       <Image
        src={b}
        alt="Coupon Website Screenshot"
        className={styles.projectImage}
       />
       <div className={styles.projectOverlay}>
        <div className={styles.projectLinks}>
         <a href="https://www.couponszone.co.in" target="_blank" className={styles.demoLink}>
          <span>Live Demo</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
         </a>
        </div>
       </div>
      </div>
      <div className={styles.projectContent}>
       <h3 className={styles.projectTitle}>Coupon Website</h3>
       <p className={styles.projectDescription}>
        Dynamic coupon-sharing platform using Next.js, Node.js, and React, with real-time deal updates and backend integration.
       </p>
       <div className={styles.projectTags}>
        <span>Next.js</span>
        <span>React</span>
        <span>CSS</span>
        <span>Node.js</span>
       </div>
      </div>
     </div>

     <div className={`${styles.projectCard} ${styles.hidden} ${isVisible ? styles.animateFadeIn : ''}`} style={{ animationDelay: '0.4s' }}>
      <div className={styles.projectImageContainer}>
       <Image
        src={c}
        alt="User Authentication System Screenshot"
        className={styles.projectImage}
       />
       <div className={styles.projectOverlay}>
        <div className={styles.projectLinks}>
         <a href="https://www.kritirai.com" target="_blank" className={styles.demoLink}>
          <span>Live Demo</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
         </a>
        </div>
       </div>
      </div>
      <div className={styles.projectContent}>
       <h3 className={styles.projectTitle}>User Registration and Authentication System</h3>
       <p className={styles.projectDescription}>
        Full-stack authentication system with NextAuth.js, Express, and MongoDB, supporting secure login.
       </p>
       <div className={styles.projectTags}>
        <span>MongoDB</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>Next.js</span>
        <span>NextAuth.js</span>
       </div>
      </div>
     </div>
    </section>
   </div>
  </>
 );
};

export default Work;