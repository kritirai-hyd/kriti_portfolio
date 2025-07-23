"use client";
import React from "react";
import Image from "next/image";
import "./Work.css";
import a from "../../assets/image/project-1.png";
import b from "../../assets/image/couponszone-p1.png";
import c from "../../assets/image/user-auth.png";
import { useTheme } from "../../app/context/ThemeContext";
const Work = () => {
      const { theme } = useTheme();
  return (
    <>
      <div className={`${theme === 'dark' ? 'projects bg-dark' : 'projects bg-light'}`}>
        <div className="s-title">
          <h2 className="skills-title">Projects</h2>
        </div>
        <section className="portfolio-container">

            <div className="project-card">
              <Image
                src={a}
                alt="Project Screenshot"
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">Carrental Website</h3>
                <p className="project-description p-p">
                Responsive car rental site built with Next.js and CSS, showcasing UI design and client-side routing.
                </p>
                <div className="project-tags">
                    <span>Next.js</span>
                  <span>React</span>
                
                  <span>CSS</span>
                </div>
                <div className="project-links">
                  <a href="https://www.m.coderbox.co.in" target="_blank">
                    Live Demo
                  </a>
                 
                </div>
              </div>
            </div>
           


            <div className="project-card">
              <Image
                src={b}
                alt="Project Screenshot"
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">Coupon Website</h3>
                <p className="project-description p-p">
                 Dynamic coupon-sharing platform using Next.js, Node.js, and React, with real-time deal updates and backend integration.
                </p>
                <div className="project-tags">
                   <span>Next.js</span>
                  <span>React</span>
                
                  <span>CSS</span>
                  <span>Node.js</span>
              
                </div>
                <div className="project-links">
                  <a href="https://www.couponszone.co.in" target="_blank">
                    Live Demo
                  </a>
                 
                </div>
              </div>
            </div>
           
    
              
            <div className="project-card">
              <Image
                src={c}
                alt="Project Screenshot"
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">User Registration and Authentication System</h3>
                <p className="project-description p-p">
                 Full-stack authentication system with NextAuth.js, Express, and MongoDB, supporting secure login.
                </p>
                <div className="project-tags">
                  <span>MongoDB</span>
                  <span>Node.js</span>
                  <span>Express</span>
                    <span>Next.js</span>
                  <span>NextAuth.js</span>
                
                </div>
                <div className="project-links">
                  <a href="https://www.kritirai.com" target="_blank">
                    Live Demo
                  </a>
                 
                </div>
              </div>
            </div>
           
 
        </section>
      </div>
    </>
  );
};

export default Work;
