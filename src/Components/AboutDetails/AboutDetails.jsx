'use client';
import React from 'react';


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
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import '../About/About.css'
import './AboutDetails.css'
import kriti from "../../assets/image/kriitrai.jpeg";
import Link from 'next/link';
import useLenis from '../hooks/useLenis';
import fj from '../../assets/image/free-js.png';
import cs from '../../assets/image/c-sql.png';
import fr from '../../assets/image/free-responisve.png';
import { useTheme } from "../../app/context/ThemeContext";
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
                   { src: visual, label: 'Visual' },
                     { src: postman, label: 'Postman' },
      { src: vercel, label: 'Vercel' }
];

const AboutDetails = () => {
  useLenis();
      const { theme } = useTheme();
  return (
    <>
    <div className="about-bredcrumb">
        <h1>Skills</h1>
        <p>Home/ Skills</p>
    </div>
      <section className={`about-s ${theme === 'dark' ? 'about bg-l-dark' : 'about-section'}`}>
    <div class="about-image">
      <Image className='kriti' src={kriti} alt="Kriti Rai"  width={400} height={400} />
    </div>
    <div class="about-text">
      <h2>About Us</h2>
     <p>
  I'm <strong>Kriti Rai</strong>, a Full Stack Developer passionate about building responsive,
  SEO-optimized websites and web applications that deliver high performance and exceptional user experiences.
</p>
<p>
  I’m skilled in modern tools like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,
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
  </section>
     <section id="d-about" className={`${theme === 'dark' ? 'bg-l-dark' : 'about '}`}>
      
 
       <div className="about-section">
         <motion.div
           className="about-group"
           variants={fadeIn('up', 0.2)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.7 }}
         >
           <h2 className={`d-group-title para ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`}>Development</h2>
           <motion.div
           className="grid-container"
           variants={fadeIn('up', 0.2)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.7 }}>
             {skills.map((skill, index) => (
               <div key={index} className='card'>
                 <Image src={skill.src} alt={skill.label} width={55} height={55} />
                 <p className={`para ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`}>{skill.label}</p>
               </div>
             ))}
           </motion.div>
         </motion.div>
 
         <motion.div
           className="about-group"
           variants={fadeIn('up', 0.3)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.7 }}
         >
           <h2 className={`d-group-title para ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`}>Tools</h2>
           <motion.div
           className="grid-container"
           variants={fadeIn('up', 0.2)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.7 }}>
             {tools.map((tool, index) => (
               <div key={index} className="card">
                 <Image src={tool.src} alt={tool.label} width={55} height={55} />
                 <p className={`para ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`}>{tool.label}</p>
               </div>
             ))}
           </motion.div>
         </motion.div>
       </div>
     </section>
         <h3 className={`d-group-title para ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`}>Certifications</h3>
   <div className="c-container">

  <div className="c-card">
    <Image src={fr} className='c-img' alt="Mobile app interface designed by Kriti Rai showcasing clean, user-friendly layout" />
 
  </div>
  <div className="c-card">
    <Image src={cs} className='c-img' alt="Kriti Rai – Creative Designer & Developer Portfolio Homepage" />
 
  </div>
  <div className="c-card">
    <Image src={fj} className='c-img' alt="Kriti Rai – Multidisciplinary Designer with a Passion for User-Centered Experiences" />

  </div>

  </div>
    </>
  )
}

export default AboutDetails