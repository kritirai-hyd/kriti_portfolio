import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Work.module.css";
import { useTheme } from "../context/ThemeContext";
import Heading from "../ui/Heading/Heading";
import works from "./Work.json";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

/* Skills & Tools Icons */
import nextjs from "../../assets/svg/next-js.svg";
import react from "../../assets/svg/react.svg";
import css from "../../assets/svg/css.svg";
import node from "../../assets/svg/node-js.svg";
import mongodb from "../../assets/svg/mongodb.png";
import express from "../../assets/svg/express.png";

const Work = () => {
  const { theme } = useTheme();
  const [visibleProjects, setVisibleProjects] = useState([]);

  // Animate cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(`.${styles.projectCard}`);
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.bg} ${theme === "dark" ? "bgDark" : "bgLight"}`}>
      <div id="projects" className={styles.projects}>
        <Heading heading="My Projects" />
        <section className={styles.portfolioContainer}>
          {works.map((w) => {
            const img = require(`../../assets/image/${w.image}`);
            return (
              <div className={`${styles.projectCard} ${styles.hidden}`} key={w.id}>
                {/* Image with overlay */}
                <div className={styles.projectImageContainer}>
                  <Image
                    src={img}
                    alt={w.title}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectOverlay}>
                    <Link
                      href={w.demo}
                      target="_blank"
                      className={styles.demoLink}
                    >
                      <span>Live Demo</span>
                      <SquareArrowOutUpRight size={18} />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{w.title}</h3>
                  <p className={styles.projectDescription}>{w.description}</p>
             <div className={styles.projectTags}>
  {w.tags.map((t) => {
    let icon;
    let color; // assign a unique color
    switch (t.toLowerCase()) {
      case "next.js":
        icon = nextjs;
        color = "#000000"; // black for Next.js
        break;
      case "react":
        icon = react;
        color = "#005870"; // React blue
        break;
      case "css":
        icon = css;
        color = "#264de4"; // CSS blue
        break;
      case "node.js":
        icon = node;
        color = "#024100"; // Node green
        break;
      case "express":
        icon = express;
        color = "#000000"; // Express white
        break;
      case "mongodb":
        icon = mongodb;
        color = "#0e6b00"; // Mongo green
        break;
      default:
        icon = null;
        color = "#002397"; // default purple
    }

    return (
      <span
        key={t}
        className={styles.tag}
        style={{ backgroundColor: color + "13", color: color }} // light bg with main color text
      >
        {icon && <Image src={icon} width={20} height={20} alt={t} />}
        {t}
      </span>
    );
  })}
</div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Work;