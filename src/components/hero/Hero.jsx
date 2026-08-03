import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import view from "../../assets/view.svg";
import consult from "../../assets/consult.svg";
import kriti from "../../assets/image/kritirai-portfolio.png";
import s from "./style.module.css";
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
          threeScript.src =
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
          threeScript.async = true;
          document.body.appendChild(threeScript);
          threeScript.onload = () => {
            const vantaScript = document.createElement("script");
            vantaScript.src =
              "https://cdn.jsdelivr.net/gh/tengbao/vanta@latest/dist/vanta.birds.min.js";
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
                  }),
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
    <div s={{ width: "100%" }} ref={vantaRef} className={`${s.bg}`}>
      <div className={s.vantabg}></div>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.left}>
            <motion.h1
              className={s.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
       High-Performing Websites & Web Applications That Grow Your Business
            </motion.h1>
            <motion.p
              className={s.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
        I help businesses, startups, and professionals build modern, high-performing websites that attract more visitors, rank higher on Google, and turn those visitors into customers. Every website is fast, mobile-friendly, SEO-optimized, and designed to build trust, showcase your services clearly, and encourage people to take action. Whether you want more leads, more inquiries, or more sales, I create websites that help your business stand out online and deliver real results.
            </motion.p>
            <motion.div
              className={s.buttons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={`${s.consult} ${s.button}`}>
                <Link href="/kritirai-cv" className={`${s.link}`}>
                  <Image
                    src={consult}
                    className={s.icon}
                    width={24}
                    height={24}
                  />{" "}
                  Get a Free Consultation
                </Link>
              </div>
              <div className={`${s.download} ${s.button}`}>
                <Link href="/kritirai-cv" className={s.link}>
                  <Image src={view} className={s.icon} width={24} height={24} />
                  View My Works
                </Link>
              </div>
            </motion.div>
          </div>
          <div className={s.right}>
            <motion.div
              className={s.profile}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={s.circle}>
                <div className={s.light}></div>
                <div className={s.border}></div>
                <Image
                  src={kriti}
                  alt="Kriti Rai - Full Stack Developer"
                  className={s.image}
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
