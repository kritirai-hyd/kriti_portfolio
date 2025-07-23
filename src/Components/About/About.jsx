'use client';
import React from 'react';
import './About.css';

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
import express from '../../assets/svg/express.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

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
    { src: express, label: 'Expres.js' },
  { src: sql, label: 'SQL' },
];

const tools = [

    { src: git, label: 'Git' },
          { src: github, label: 'Github' },
                   { src: visual, label: 'Visual' },
                     { src: postman, label: 'Postman' },
      { src: vercel, label: 'Vercel' }
];

const About = () => {
    const { theme } = useTheme();
  return (
    <section className={`${theme === 'dark' ? 'about bg-dark' : 'about bg-light'}`}>
    
 <div className='s-title'>
        <h2 className="skills-title">Skills & Tools</h2>
      </div>
      <div className="about-section"  >
        <motion.div
          className="about-group"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          <h3 className="group-title">Development</h3>
          <motion.div
          className="grid-container"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}>
            {skills.map((skill, index) => (
              <div key={index} className='card'>
                <Image src={skill.src} alt={skill.label} width={55} height={55} style={{objectFit:"cover"}} />
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
          <h3 className="group-title">Tools</h3>
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
  );
};

export default About;
