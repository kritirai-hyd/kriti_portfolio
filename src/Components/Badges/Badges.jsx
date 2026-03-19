import React from "react";
import Image from "next/image";
import styles from "./Badges.module.css";
import { useTheme } from "../context/ThemeContext";
import Heading from "../../Components/ui/Heading/Heading";
import badges from "./Badges.json";
import Link from "next/link";
import { SquareArrowOutUpRight, Award } from "lucide-react";

const Badges = () => {
  const { theme } = useTheme();

  return (
  <div className={styles.bg}>
      <section
      id="badges"
      className={`${styles.badges}`}
    >
 <Heading 
  heading="Badges & Achievements" 
  para="A collection of badges and achievements that highlight my skills, accomplishments, and continuous learning journey." 
/>
      
      <div className={styles.portfolioContainer}>
        {badges.map((badge, index) => {
    
          const imagePath = require(`../../assets/image/${badge.image}`);

          return (
            <div
              key={badge.id}
              className={`${styles.badgeCard} ${styles.animateFadeIn}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.badgeImageContainer}>
                <Image
                  src={imagePath}
                  alt={badge.title}
                  width={280}
                  height={180}
                  className={styles.badgeImage}
                  priority={index < 2} // Prioritize first 2 images
                />
                
                {badge.credential && (
                  <div className={styles.badgeOverlay}>
                    <Link
                      href={badge.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.verifyLink}
                    >
                      <SquareArrowOutUpRight size={18} />
                      Verify
                    </Link>
                  </div>
                )}
              </div>
              
              <div className={styles.badgeContent}>
                <h3 className={styles.badgeTitle}>{badge.title}</h3>
                
                {badge.issuer && (
                  <p className={styles.badgeIssuer}>
                    <Award size={14} />
                    {badge.issuer}
                  </p>
                )}
                
                {badge.date && (
                  <p className={styles.badgeDate}>{badge.date}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </div>
  );
};

export default Badges;