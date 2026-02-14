import React from "react";
import Image from "next/image";
import styles from "./Work.module.css";
import { useTheme } from '../context/ThemeContext';
import Heading from "../ui/Heading/Heading";
import works from "./Work.json";
import Link from "next/link";
import {SquareArrowOutUpRight } from "lucide-react";
const Work = () => {
  const { theme } = useTheme();
  return (
    <>
   <div className={styles.bg}>
       <div
        id="projects"
        className={styles.projects}
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
   </div>
    </>
  );
};
export default Work;
