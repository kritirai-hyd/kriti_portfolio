"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./About.module.css";
import { fadeIn } from "../variants";

/* Skills & Tools Assets */
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
import Heading from "../ui/Heading/Heading";

/* Skills */
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

/* Tools */
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

/* Reusable Card */
const SkillCard = ({ src, label }) => (
  <motion.div
    className={styles.skillCard}
    whileHover={{ y: -8 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className={styles.skillIcon}>
      <Image
        src={src}
        alt={`${label} logo`}
        width={50}
        height={50}
        style={{ objectFit: "contain" }}
      />
    </div>
    <p className={styles.skillName}>{label}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="skills" className={styles.about}>
      <div className={styles.aboutContainer}>

        <Heading heading="My Skills & Tools" />

        <div className={styles.aboutSection}>

          {/* Skills */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={styles.aboutGroup}
          >
            <h3 className={styles.groupTitle}>Skills</h3>
            <div className={styles.gridContainer}>
              {skills.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={styles.aboutGroup}
          >
            <h3 className={styles.groupTitle}>Tools</h3>
            <div className={styles.gridContainer}>
              {tools.map((tool, i) => (
                <SkillCard key={i} {...tool} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
