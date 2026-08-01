import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import view from "../../assets/view.svg";
import consult from "../../assets/consult.svg";

import kriti from "../../assets/image/kritirai-portfolio.png";

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
    <div  style={{ width: "100%", }} ref={vantaRef} className={`${styles.bg} ${theme === "dark" ? styles.bgDark : styles.bgLight}`}>
      <div className={styles.vantabg}></div>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Left Section */}
          <div className={styles.left}>
            <motion.h1
              className={styles.introText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
             I help businesses get customers with SEO websites & build personal brands to get clients.
            </motion.h1>

            <motion.p
              className={`${styles.description} ${
                theme === "dark" ? styles.clDark : styles.clLight
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
      I help businesses, startups, and professionals create modern websites that do more than just look good. I build fast, user-friendly websites that help people find your business online, understand your services, trust your brand, and take action. By combining clean design, strong performance, and search-friendly development, I create websites that help businesses build a stronger online presence and connect with more customers.      </motion.p>

            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.cardFlex}>
                <div className={`${styles.consult} ${styles.button} ${theme === "dark" ? styles.cvDark : styles.cvLight}`}>
                  <Link
                    href="/kritirai-cv"
                    className={`${styles.downloadLink} ${theme === "dark" ? styles.clDark : styles.clLight}`}
                  >
             <Image src={consult} className={styles.icon} width={24} height={24}  />  Get a Free Consultation
                  </Link>
                </div>
           <div className={`${styles.download} ${styles.button} ${theme === "dark" ? styles.cvDark : styles.cvLight}`}>
                  <Link
                    href="/kritirai-cv"
                    className={`${styles.downloadLink} ${theme === "dark" ? styles.clDark : styles.clLight}`}
                  >
             
                <Image src={view} className={styles.icon} width={24} height={24}  />
                   View My Works
                  </Link>
                </div>
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
