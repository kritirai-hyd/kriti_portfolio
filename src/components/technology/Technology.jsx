import React from "react";
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
import Image from "next/image";
import styles from "./styles.module.css";
import Heading from "../ui/Heading/Heading";
const Technology = () => {
  const frontend = [
    { text: "HTML", img: html, color: "#E34F26" },
    { text: "CSS", img: css, color: "#1572B6" },
    { text: "JavaScript", img: js, color: "#F7DF1E" },
    { text: "React", img: react, color: "#61DAFB" },
    { text: "Next.js", img: nextjs, color: "#000000" },
    { text: "Node.js", img: node, color: "#339933" },
    { text: "Express.js", img: express, color: "#444444" },
    { text: "NPM", img: npm, color: "#CB3837" },
    { text: "Tailwind CSS", img: tailwind, color: "#06B6D4" },
    { text: "Bootstrap", img: bootstrap, color: "#7952B3" },
  ];
  const backend = [
    { text: "SQL", img: sql, color: "#4479A1" },
    { text: "PostgreSQL", img: postgres, color: "#336791" },
    { text: "MongoDB", img: mongodb, color: "#47A248" },
    { text: "Supabase", img: supabase, color: "#3ECF8E" },
    { text: "Git", img: git, color: "#F05032" },
    { text: "GitHub", img: github, color: "#181717" },
    { text: "VS Code", img: vscode, color: "#007ACC" },
    { text: "Postman", img: postman, color: "#FF6C37" },
    { text: "Vercel", img: vercel, color: "#000000" },
    { text: "REST API", img: restapi, color: "#2563EB" },
    { text: "Google Analytics", img: googleAnalytics, color: "#F9AB00" },
    { text: "Google Search Console", img: googleSearch, color: "#4285F4" },
    { text: "Bing Webmaster Tools", img: bingSearch, color: "#008373" },
    { text: "cPanel", img: cpanel, color: "#FF6C2C" },
  ];
  const Scroll = ({ items, reverse = false }) => (
    <div className={`${styles.line} ${reverse ? styles.reverse : ""}`}>
      {[...items, ...items].map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className={styles.card}>
            <Image
              src={item.img}
              alt={item.text}
              className={styles.img}
              width={25}
              height={25}
            />
            <span
              style={{
                color: item.color,
              }}
            >
              {item.text}
            </span>
          </div>
        );
      })}
    </div>
  );
  return (
    <div className={styles.bg}>
      <section className={styles.section}>
        <div className={styles.header}>
          <Heading heading="Technologies i use " />
          <Heading para="I use powerful and reliable technologies to create fast, scalable, secure, and user-friendly digital experiences that help businesses grow online." />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.slider}>
            <Scroll items={frontend} />
          </div>
          <div className={styles.slider}>
            <Scroll items={backend} reverse />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Technology;
