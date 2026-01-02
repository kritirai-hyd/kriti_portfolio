'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { useTheme } from '../../context/ThemeContext';
import { fadeIn } from '../variants';
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
const skills = [
  { src: html, label: 'HTML' },
  { src: css, label: 'CSS' },
  { src: js, label: 'JavaScript' },
  { src: react, label: 'React' },
  { src: tailwind, label: 'Tailwind CSS' },
  { src: boot, label: 'Bootstrap' },
  { src: node, label: 'Node.js' },
  { src: next, label: 'Next.js' },
  { src: express, label: 'Express.js' },
  { src: sql, label: 'SQL' },
];
const tools = [
  { src: git, label: 'Git' },
  { src: github, label: 'GitHub' },
  { src: visual, label: 'VS Code' },
  { src: postman, label: 'Postman' },
  { src: vercel, label: 'Vercel' },
];
const SkillCard = ({ src, label, theme }) => (
  <motion.div
    className={`${styles.skillCard} ${theme === 'dark' ? styles.cardDark : styles.cardLight}`}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.95 }}
  >
    <div className={styles.cardInner}>
      <div className={styles.skillIcon}>
        <Image
          src={src}
          alt={`${label} logo`}
          width={50}
          height={50}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className={`${styles.skillName} ${theme === 'dark' ? styles.textLight : styles.textDark}`}>
        {label}
      </p>
    </div>
    <div className={styles.cardGlow}></div>
  </motion.div>
);
const About = () => {
  const { theme } = useTheme();
  return (
    <section
      id="skills"
      className={`${styles.about} ${theme === 'dark' ? styles.bgDark : styles.bgLight}`}
    >
      <div className={styles.aboutContainer}>
        <div className={styles.aboutBackground}>
          <div className={`${styles.bgShape} ${styles.shape1}`}></div>
          <div className={`${styles.bgShape} ${styles.shape2}`}></div>
          <div className={`${styles.bgShape} ${styles.shape3}`}></div>
          <div className={`${styles.bgShape} ${styles.shape4}`}></div>
        </div>
        <motion.div
          className={styles.sTitle}
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2 className={`${styles.skillsTitle} ${theme === 'dark' ? styles.tDark : styles.tLight}`}>
            Skills & Tools
          </h2>
        </motion.div>
        <div className={styles.aboutSection}>
          <motion.div
            className={styles.aboutGroup}
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <motion.div
              className={styles.gridContainer}
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} theme={theme} />
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className={styles.aboutGroup}
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            
            <motion.div
              className={styles.gridContainer}
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              {tools.map((tool, index) => (
                <SkillCard key={index} {...tool} theme={theme} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
