import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import github from "../../assets/svg/githubi.svg";
import xcion from "../../assets/svg/x-icon.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import kriti from "../../assets/image/kritirai-2.jpeg";

import styles from "./Hero.module.css";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
  
      const loadScripts = async () => {
        if (!window.THREE) {
          const threeScript = document.createElement("script");
          threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
          threeScript.async = true;
          document.body.appendChild(threeScript);

          threeScript.onload = () => {
            const vantaScript = document.createElement("script");
            vantaScript.src = "https://cdn.jsdelivr.net/gh/tengbao/vanta@latest/dist/vanta.birds.min.js";
            vantaScript.async = true;
            document.body.appendChild(vantaScript);

            vantaScript.onload = () => {
              if (!vantaEffect && window.VANTA) {
                setVantaEffect(
                  window.VANTA.BIRDS({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 600,
                    minWidth: 300,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color1: "#3e70ec",
                    color2: "#0011a8",
                    wingSpan: 20.0,
                    quantity: 3.0,
                    backgroundAlpha: 0,
                  })
                );
              }
            };
          };
        }
      };

      loadScripts();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ width: "100%", }} className={`${styles.bg} ${theme === "dark" ? styles.bgDark : styles.bgLight}`}>
      <div className={styles.vantabg}></div>

      <div className={styles.container}>
        <div className={styles.subContainer}>
          {/* Left Section */}
          <div className={styles.left}>
            <motion.h1
              className={styles.introText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Full Stack Web Developer
            </motion.h1>

            <motion.p
              className={`${styles.description} ${
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
          <div className={styles.right}>
            <motion.div
              className={styles.profile}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.circle}>
                <div className={styles.bglight}></div>
                <div className={styles.border}></div>
                <Image
                  src={kriti}
                  alt="Kriti Rai - Full Stack Developer"
                  className={styles.image}
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
