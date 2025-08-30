"use client"
import React from 'react';
import './Certificate.css';
import Image from 'next/image';
import a from '../../assets/image/free-responisve.png';
import b from '../../assets/image/free-js.png';
import c from '../../assets/image/c-sql.png';
import { useTheme } from "../../app/context/ThemeContext";
const Certificate = () => {
      const { theme } = useTheme();
  return (
    <>
    <div className={`${theme === 'dark' ? 'cerfitcate bg-l-dark' : 'cerfitcate bg-l-light'}`}>
     <div className='s-title'>
        <h2 className="skills-title">Certificates</h2>
      </div>
    <section className="certificate-section">

      <div className="certificate-card">
        <div className="certificate-image-wrapper">
          <Image
            src={a}
            alt="Full Stack Web Development Certificate"
            className="certificate-image"
            placeholder="blur"
          />
        </div>
        <div className="certificate-content">
          <div className="certificate-title">Responsive Web Design</div>
          <div className="certificate-org">freeCodeCamp</div>
          <div className="certificate-date">Issued: April 10 2024</div>
        
        </div>
      </div>

      {/* Certificate Card 2 */}
      <div className="certificate-card">
        <div className="certificate-image-wrapper">
          <Image
            src={b}
            alt="Responsive Web Design Certificate"
            className="certificate-image"
            placeholder="blur"
          />
        </div>
        <div className="certificate-content">
          <div className="certificate-title">JavaScript Algorithms &amp; Data Structures</div>
          <div className="certificate-org">freeCodeCamp</div>
          <div className="certificate-date">Issued: May 4 2024</div>
        
        </div>
      </div>

      {/* Certificate Card 3 */}
      <div className="certificate-card">
        <div className="certificate-image-wrapper">
          <Image
            src={c}
            alt="JavaScript Algorithms Certificate"
            className="certificate-image"
            placeholder="blur"
          />
        </div>
        <div className="certificate-content">
          <div className="certificate-title">SQL and Relational Databases</div>
          <div className="certificate-org">Cognitive Class</div>
          <div className="certificate-date">Issued: jan 28 2025</div>
        
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default Certificate;
