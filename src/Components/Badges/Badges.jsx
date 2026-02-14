"use client";
import React from "react";
import Image from "next/image";
import styles from "./Badges.module.css";
<<<<<<< HEAD
import { useTheme } from "../context/ThemeContext";
=======
import { useTheme } from "../../context/ThemeContext";
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
import Heading from "../../Components/ui/Heading/Heading";
import works from "./Badges.json";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
const Badges = () => {
  const { theme } = useTheme();
  return (
    <div
      id="projects"
      className={`${styles.projects} ${
        theme === "dark" ? styles.bgDark : styles.bgLight
      }`}
    >
      <Heading heading="Badges" />
      <section className={styles.portfolioContainer}>
        {works.map((w) => {
          const img = require(`../../assets/image/${w.image}`);
          return (
            <div
              key={w.id}
              className={`${styles.projectCard} ${styles.animateFadeIn}`}
            >
              <div className={styles.projectImageContainer}>
                <Image
                  src={img}
                  alt={w.title}
                  width={280}
                  height={180}
                  className={styles.projectImage}
                />
                {w.demo && (
                  <div className={styles.projectOverlay}>
                    <Link
                      href={w.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.demoLink}
                    >
                      Demo <SquareArrowOutUpRight size={18} />
                    </Link>
                  </div>
                )}
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{w.title}</h3>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Badges;
