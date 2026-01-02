
import React, { useState, useEffect } from "react";

import kriti from "../../assets/image/kriti-rai.jpeg";
import github from "../../assets/svg/githubi.svg";
import xcion from "../../assets/svg/x-icon.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import star from "../../assets/svg/star.svg";
import s from "../../assets/svg/services.svg";
import w from "../../assets/svg/works.svg";
import sk from "../../assets/svg/skills.svg";
import a from "../../assets/svg/about.svg";
import c from "../../assets/svg/call.svg";
import b from "../../assets/svg/blog.svg";
import Image from "next/image";
import Counter from "../Counter/Increment";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const scrollItems = [
    "Frontend Web Developer",
    "Backend Web Developer", 
    "Full Stack Web Developer",
    "SEO Expert"
  ];

  return (
    <>

      <div className={`hero ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
        <div className="hero-background">
          <div className="gradient-blob"></div>
          <div className="gradient-blob-2"></div>
          <div className="grid-pattern"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="container">
          <section className="hero-section">
            <div className="hero-container">
              <div className="hero-wrapper">
                <div className="hero-left">
                  <motion.h1 
                    className="intro-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Full Stack Web Developer
                  </motion.h1>
                  
                  <motion.p 
                    className={`hero-description ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    I'm Kriti Rai, a Full Stack Developer passionate about
                    building responsive, SEO-optimized websites and web
                    applications that deliver high performance and exceptional
                    user experiences. I'm skilled in using modern tools like 
                    HTML, CSS, JavaScript, React, Next.js, Node.js, and SQL to 
                    build smooth and effective digital experiences.
                  </motion.p>
                  
                  <motion.div 
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="card-flex">
                      <div className={`download-btn ${theme === 'dark' ? 'cv-dark' : 'cv-light'}`}>
                        <Link 
                          href="/kritirai-cv" 
                          className={`download-link ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`}
                        >
                          View CV
                        </Link>
                      </div>
                      
                      <ul className="social-icons">
                        <li className="social-item">
                          <Link 
                            href="https://github.com/kritirai-hyd" 
                            aria-label="GitHub profile"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              className="social-img"
                              src={github}
                              height={34}
                              width={34}
                              alt="Kriti Rai"
                            />
                          </Link>
                        </li>
                        <li className="social-item">
                          <Link 
                            href="https://x.com/dev_kritirai"
                            aria-label="X (Twitter) profile"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              className="social-img"
                              src={xcion}
                              height={34}
                              width={34}
                              alt="Kriti"
                            />
                          </Link>
                        </li>
                        <li className="social-item">
                          <Link 
                            href="https://www.linkedin.com/in/dev-kritirai"
                            aria-label="LinkedIn profile"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              className="social-img"
                              src={linkedin}
                              height={34}
                              width={34}
                              alt="Kriti Rai Sankrityayan"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
                
                <div className="hero-right">
                  <motion.div 
                    className="profile-image-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="profile-frame">
                      <div className="profile-glow"></div>
                      <div className="profile-border-animation"></div>
                      <Image 
                        src={kriti}
                        alt="Kriti Rai - Full Stack Developer"
                        className="profile-image"
                        width={320}
                        height={340}
                        priority
                      />
                    </div>
                    
                 
                    <div className="decorative-element dec-1"></div>
                    <div className="decorative-element dec-2"></div>
                    <div className="decorative-element dec-3"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div className="scroll-banner">
          {scrollItems.map((item, index) => (
            <div key={index} className="scroll-item">
              <Image className="star-icon" src={star} width={20} height={20} alt="Kriti" />
              <span>{item}</span>
              <Image className="star-icon" src={star} width={20} height={20} alt="Kriti Sankrityayan" />
            </div>
          ))}
        </div>
        
        <div className={`floating-nav ${isOpen ? "open" : ""}`}>
          <button 
            className="floating-nav-toggle"
            onClick={toggleNav}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className="floating-nav-list">
            <li className="floating-nav-item">
              <Link href="/skills" className="floating-nav-link">
                <Image src={sk} width={24} height={24} alt="Kriti Sankrityayan" />
                <span className="nav-label">Skills</span>
              </Link>
            </li>
            <li className="floating-nav-item">
              <Link href="/services" className="floating-nav-link">
                <Image src={w} width={24} height={24} alt="Kriti | Full Stack Developer" />
                <span className="nav-label">Services</span>
              </Link>
            </li>
            <li className="floating-nav-item">
              <Link href="/works" className="floating-nav-link">
                <Image src={s} width={24} height={24} alt="Kriti Rai | Website Developer" />
                <span className="nav-label">Projects</span>
              </Link>
            </li>
            <li className="floating-nav-item">
              <Link href="/contact" className="floating-nav-link">
                <Image src={c} width={24} height={24} alt="Website Developer | Kriti rai" />
                <span className="nav-label">Contact</span>
              </Link>
            </li>
            <li className="floating-nav-item">
              <Link href="/blog" className="floating-nav-link">
                <Image src={b} width={28} height={28} alt="Website Application Developer | Kriti rai" />
                <span className="nav-label">Blog</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;