import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";
import styles from "./About.module.css";
import { fadeIn } from "../variants";

// Skills & Tools Assets
import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import js from "../../assets/svg/js.svg";
import react from "../../assets/svg/react.svg";
import node from "../../assets/svg/node-js.svg";
import nextjs from "../../assets/svg/next-js.svg";
import express from "../../assets/svg/express.png";
import npm from "../../assets/svg/npm.png";
import sql from "../../assets/svg/sql.svg";
import postgres from "../../assets/svg/postgresssql.png";
import mongodb from "../../assets/svg/mongodb.png";
import supabase from "../../assets/svg/supabase.png";
import tailwind from "../../assets/svg/tailwind.svg";
import bootstrap from "../../assets/svg/bootstrap.svg";
import git from "../../assets/svg/git.svg";
import github from "../../assets/svg/github.svg";
import vercel from "../../assets/svg/vercel.svg";
import postman from "../../assets/svg/postman.svg";
import vscode from "../../assets/svg/visual.svg";
import restapi from "../../assets/svg/rest-api.png";
import googleAnalytics from "../../assets/svg/google-analytics.png";
import googleSearch from "../../assets/svg/google-console-search.png";
import bingSearch from "../../assets/svg/bing-search.png";
import cpanel from "../../assets/svg/cpanel.png";

// Skills and Tools arrays
const skills = [
  { src: html, label: "HTML" },
  { src: css, label: "CSS" },
  { src: js, label: "JavaScript" },
  { src: react, label: "React" },
  { src: nextjs, label: "Next.js" },
  { src: node, label: "Node.js" },
  { src: express, label: "Express.js" },
  { src: npm, label: "NPM" },
  { src: tailwind, label: "Tailwind CSS" },
  { src: bootstrap, label: "Bootstrap" },
  { src: sql, label: "SQL" },
  { src: postgres, label: "PostgreSQL" },
  { src: mongodb, label: "MongoDB" },
  { src: supabase, label: "Supabase" },
];

const tools = [
  { src: git, label: "Git" },
  { src: github, label: "GitHub" },
  { src: vscode, label: "VS Code" },
  { src: postman, label: "Postman" },
  { src: vercel, label: "Vercel" },
  { src: restapi, label: "REST API" },
  { src: googleAnalytics, label: "Google Analytics" },
  { src: googleSearch, label: "Google Search Console" },
  { src: bingSearch, label: "Bing Webmaster Tools" },
  { src: cpanel, label: "cPanel" },
];

// Individual Skill/Tool Card
const SkillCard = ({ src, label, theme }) => (
  <motion.div
    className={`${styles.skillCard} ${
      theme === "dark" ? styles.cardDark : styles.cardLight
    }`}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.95 }}
  >
    <div className={styles.cardInner}>
      <div className={styles.skillIcon}>
        <Image src={src} alt={`${label} logo`} width={50} height={50} style={{ objectFit: "contain" }} />
      </div>
      <p className={`${styles.skillName} ${theme === "dark" ? styles.textLight : styles.textDark}`}>
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
      className={`${styles.about} ${theme === "dark" ? styles.bgDark : styles.bgLight}`}
    >
      {/* Animated Background Shapes */}
      <div className={styles.aboutContainer}>
        <div className={styles.aboutBackground}>
          <div className={`${styles.bgShape} ${styles.shape1}`}></div>
          <div className={`${styles.bgShape} ${styles.shape2}`}></div>
          <div className={`${styles.bgShape} ${styles.shape3}`}></div>
          <div className={`${styles.bgShape} ${styles.shape4}`}></div>
        </div>

        {/* Section Title */}
        <motion.div
          className={styles.sTitle}
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2 className={theme === "dark" ? styles.tDark : styles.tLight}>My Skills & Tools</h2>
        </motion.div>

        {/* Skills */}
        <div className={styles.aboutSection}>
          <motion.div
            className={styles.aboutGroup}
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <div className={styles.groupHeader}>
              <h3 className={styles.groupTitle}>Skills</h3>
              <div className={styles.groupUnderline}></div>
            </div>
            <div className={styles.gridContainer}>
              {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} theme={theme} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className={styles.aboutGroup}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <div className={styles.groupHeader}>
              <h3 className={styles.groupTitle}>Tools</h3>
              <div className={styles.groupUnderline}></div>
            </div>
            <div className={styles.gridContainer}>
              {tools.map((tool, index) => (
                <SkillCard key={index} {...tool} theme={theme} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
