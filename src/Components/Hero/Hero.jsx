import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// import kriti from "../../assets/image/kriti-rai.jpeg";
import github from "../../assets/svg/githubi.svg";
import xcion from "../../assets/svg/x-icon.svg";
import linkedin from "../../assets/svg/linkedin.svg";

import kriti from "../../assets/image/kritirai-2.jpeg";

import styles from "./Hero.module.css";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const scrollItems = [
    "Frontend Web Developer",
    "Backend Web Developer",
    "Full Stack Web Developer",
    "SEO Expert"
  ];

  return (
    <div className={`${styles.hero} ${theme === "dark" ? styles.bgDark : styles.bgLight}`}>
      <div className={styles.heroBackground}>
        <div className={styles.gradientBlob}></div>
        <div className={styles.gradientBlob2}></div>
        <div className={styles.gridPattern}></div>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroWrapper}>
          {/* Left Section */}
          <div className={styles.heroLeft}>
            <motion.h1
              className={styles.introText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Full Stack Web Developer
            </motion.h1>

            <motion.p
              className={`${styles.heroDescription} ${
                theme === "dark" ? styles.clDark : styles.clLight
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
             I'm Kriti Rai, a Full Stack Developer passionate about
                    building responsive, SEO-optimized websites and web
                    applications that deliver high performance and exceptional
                    user experiences. I'm skilled in using modern tools like 
                    HTML, CSS, JavaScript, React, Next.js, Node.js, and SQL to 
                    build smooth and effective digital experiences.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.cardFlex}>
                <div className={`${styles.downloadBtn} ${theme === "dark" ? styles.cvDark : styles.cvLight}`}>
                  <Link
                    href="/kritirai-cv"
                    className={`${styles.downloadLink} ${theme === "dark" ? styles.clDark : styles.clLight}`}
                  >
                    View CV
                  </Link>
                </div>
                <ul className={styles.socialIcons}>
                  <li className={styles.socialItem}>
                    <Link href="https://github.com/kritirai-hyd" target="_blank" rel="noopener noreferrer">
                      <Image src={github} width={34} height={34} alt="GitHub" />
                    </Link>
                  </li>
                  <li className={styles.socialItem}>
                    <Link href="https://x.com/dev_kritirai" target="_blank" rel="noopener noreferrer">
                      <Image src={xcion} width={34} height={34} alt="X" />
                    </Link>
                  </li>
                  <li className={styles.socialItem}>
                    <Link href="https://www.linkedin.com/in/dev-kritirai" target="_blank" rel="noopener noreferrer">
                      <Image src={linkedin} width={34} height={34} alt="LinkedIn" />
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className={styles.heroRight}>
            <motion.div
              className={styles.profileImageWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.profileFrame}>
                <div className={styles.profileGlow}></div>
                <div className={styles.profileBorderAnimation}></div>
                <Image
                  src={kriti}
                  alt="Kriti Rai - Full Stack Developer"
                  className={styles.profileImage}
                  width={320}
                  height={340}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
