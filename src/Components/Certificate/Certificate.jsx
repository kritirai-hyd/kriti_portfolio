"use client"
import React from 'react';
import Image from 'next/image';
import styles from './Certificate.module.css'; // Import as a module
import a from '../../assets/image/free-responisve.png';
import b from '../../assets/image/free-js.png';
import c from '../../assets/image/c-sql.png';
import { useTheme } from "../../app/context/ThemeContext";

const Certificate = () => {
 const { theme } = useTheme();
 
 const certificates = [
  {
   id: 1,
   image: a,
   title: "Responsive Web Design",
   org: "freeCodeCamp",
   date: "Issued: April 10 2024",
   credential: "#"
  },
  {
   id: 2,
   image: b,
   title: "JavaScript Algorithms & Data Structures",
   org: "freeCodeCamp",
   date: "Issued: May 4 2024",
   credential: "#"
  },
  {
   id: 3,
   image: c,
   title: "SQL and Relational Databases",
   org: "Cognitive Class",
   date: "Issued: Jan 28 2025",
   credential: "#"
  }
 ];

 return (
  <section className={`${styles['certificate-section']} ${theme === 'dark' ? styles['dark-theme'] : styles['light-theme']}`} id="certificates">
   <div className={styles.container}>
    <div className={styles['section-header']}>
     <h2 className={`${styles.groupTitle} ${theme === 'dark' ? styles.tDark : styles.tLight}`}>Certificates</h2>
   
    </div>
    
    <div className={styles['certificates-grid']}>
     {certificates.map((cert) => (
      <div className={styles['certificate-card']} key={cert.id}>
       <div className={styles['card-inner']}>
        <div className={styles['certificate-image-wrapper']}>
         <Image
          src={cert.image}
          alt={`${cert.title} Certificate`}
          className={styles['certificate-image']}
          placeholder="blur"
         />
         <div className={styles['certificate-overlay']}>
          <button className={styles['view-button']}>View Certificate</button>
         </div>
        </div>
        
        <div className={styles['certificate-content']}>
         <h3 className={styles['certificate-title']}>{cert.title}</h3>
         <p className={`${styles['certificate-org']} ${theme === 'dark' ? styles.tDog : styles.tLog}`}>{cert.org}</p>
         <p className={`${styles['certificate-date']} ${theme === 'dark' ? styles.tDog : styles.tLog}`}>{cert.date}</p>
         
         <div className={styles['certificate-actions']}>
          <a 
           href={cert.credential} 
           target="_blank" 
           rel="noopener noreferrer"
           className={`${styles['credential-link']} ${theme === 'dark' ? styles.tDbtn : styles.tLbtn}`}
          >
           Verify Credential
          </a>
         </div>
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default Certificate;