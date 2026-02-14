import React from "react";
import Image from "next/image";
import styles from "./Work.module.css";
<<<<<<< HEAD
import { useTheme } from '../context/ThemeContext';
=======
import { useTheme } from '../../context/ThemeContext';
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
import Heading from "../ui/Heading/Heading";
import works from "./Work.json";
import Link from "next/link";
import {SquareArrowOutUpRight } from "lucide-react";
const Work = () => {
  const { theme } = useTheme();
  return (
    <>
<<<<<<< HEAD
   <div className={styles.bg}>
       <div
        id="projects"
        className={styles.projects}
=======
      <div
        id="projects"
        className={`${styles.projects} ${
          theme === "dark" ? styles.bgDark : styles.bgLight
        }`}
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
      >
        <Heading heading="My Projects" />
        <section className={styles.portfolioContainer}>
          {works.map((w) => {
            const img = require(`../../assets/image/${w.image}`);
            return (
              <>
                <div className={styles.projectCard}>
                  <div className={styles.projectImageContainer}>
                    <Image
                      src={img}
                      alt="Responsive design developer"
                      className={styles.projectImage}
                    />
                    <div className={styles.projectOverlay}>
                      <div className={styles.projectLinks}>
                        <Link
                          href={`${w.demo}`}
                          target="_blank"
                          className={styles.demoLink}
                        >
                          <span>Live Demo</span>
                         <SquareArrowOutUpRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{w.title}</h3>
                    <p className={styles.projectDescription}>{w.description}</p>
                    <div className={styles.projectTags}>
                      {w.tags.map((t) => {
                        return <span>{t}</span>;
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </section>
      </div>
<<<<<<< HEAD
   </div>
=======
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
    </>
  );
};
export default Work;
