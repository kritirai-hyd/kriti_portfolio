'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import useLenis from '../hooks/useLenis';
import { useTheme } from "../../context/ThemeContext";

import styles from './AboutDetails.module.css';

import kriti from "../../assets/image/kriitrai.png";
import Certificate from '../Certificate/Certificate';
import About from '../About/About';

const AboutDetails = () => {
  useLenis();
  const { theme } = useTheme();

  return (
    <div className={`${styles.aboutPage} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>

      <section className={styles.breadcrumbSection}>
        <div className="container">
          <motion.h1 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h1>
          <motion.p 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Home / Skills
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutContainer}`}>
          <motion.div 
            className={styles.aboutImage}
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src={kriti} 
                alt="Full Stack Developer | Kriti Rai" 
                width={450} 
                height={500} 
                className={styles.profileImage}
                priority
              />
              <div className={styles.imageDecoration}></div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.aboutContent}
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2>About Me</h2>
            <div className={styles.aboutText}>
              <p>
                I'm <strong>Kriti Rai</strong>, a Full Stack Developer passionate about building responsive,
                SEO-optimized websites and web applications that deliver high performance and exceptional user experiences.
              </p>
              <p>
                I'm skilled in modern tools like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,
                <strong> React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>SQL</strong>,
                creating smooth and effective digital experiences from front to back.
              </p>
              <p>
                I take pride in writing clean, scalable code and following best practices to ensure long-term maintainability. 
                Whether I'm building dynamic front-end interfaces or robust backend APIs, I focus on delivering solutions that are both user-friendly and technically sound.
              </p>
              <p>
                I'm also a quick learner who enjoys exploring new technologies and improving performance, accessibility, and design systems. 
                With a passion for continuous improvement and problem-solving, I aim to build software that makes a real impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <About />
      <Certificate />
    </div>
  );
};

export default AboutDetails;
