'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import useLenis from '../hooks/useLenis';
import { useTheme } from "../../app/context/ThemeContext";
import './AboutDetails.css'
// Import all your assets
import html from '../../assets/svg/html.svg';
import css from '../../assets/svg/css.svg';
import js from '../../assets/svg/js.svg';
import react from '../../assets/svg/react.svg';
import node from '../../assets/svg/node-js.svg';
import sql from '../../assets/svg/sql.svg';
import next from '../../assets/svg/next-js.svg';
import boot from '../../assets/svg/bootstrap.svg';
import postman from '../../assets/svg/postman.svg';
import tailwind from '../../assets/svg/tailwind.svg';
import visual from '../../assets/svg/visual.svg';
import git from '../../assets/svg/git.svg';
import github from '../../assets/svg/github.svg';
import vercel from '../../assets/svg/vercel.svg';
import kriti from "../../assets/image/kriitrai.jpeg";
import fj from '../../assets/image/free-js.png';
import cs from '../../assets/image/c-sql.png';
import fr from '../../assets/image/free-responisve.png';
import Certificate from '../Certificate/Certificate';

const skills = [
  { src: html, label: 'HTML' },
  { src: css, label: 'CSS' },
  { src: js, label: 'JavaScript' },
  { src: react, label: 'React' },
  { src: tailwind, label: 'Tailwind' },
  { src: boot, label: 'Bootstrap' },
  { src: node, label: 'Node.js' },
  { src: next, label: 'Next.js' },
  { src: sql, label: 'SQL' },
];

const tools = [
  { src: git, label: 'Git' },
  { src: github, label: 'Github' },
  { src: visual, label: 'VS Code' },
  { src: postman, label: 'Postman' },
  { src: vercel, label: 'Vercel' }
];

const certifications = [
  { src: fr, title: "Responsive Web Design", issuer: "FreeCodeCamp" },
  { src: cs, title: "SQL Database", issuer: "Codecademy" },
  { src: fj, title: "JavaScript Algorithms", issuer: "FreeCodeCamp" }
];

const AboutDetails = () => {
  useLenis();
  const { theme } = useTheme();

  return (
    <div className={`about-page ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      {/* Hero/Breadcrumb Section */}
      <section className="breadcrumb-section">
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
      <section className="about-section">
        <div className="container about-container">
          <motion.div 
            className="about-image"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="image-wrapper">
              <Image 
                src={kriti} 
                alt="Kriti Rai" 
                width={400} 
                height={400} 
                className="profile-image"
                priority
              />
              <div className="image-decoration"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2>About Me</h2>
            <div className="about-text">
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

      {/* Skills Section */}
      <section className={`skills-section" ${theme === 'dark' ? 'Dtheme' : 'Ltheme'}`}>
        <div className="container">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="section-header"
          >
            <h2>Development Skills</h2>
         
          </motion.div>

          <motion.div
            className="skills-grid"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-card"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="skill-icon">
                  <Image src={skill.src} alt={skill.label} width={50} height={50} />
                </div>
                <p>{skill.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="container">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="section-header"
          >
            <h2>Development Tools</h2>
       
          </motion.div>

          <motion.div
            className="tools-grid"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {tools.map((tool, index) => (
              <motion.div 
                key={index} 
                className="tool-card"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="tool-icon">
                  <Image src={tool.src} alt={tool.label} width={45} height={45} />
                </div>
                <p>{tool.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    <Certificate />
    </div>
  );
};

export default AboutDetails;