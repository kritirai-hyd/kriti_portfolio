"use client";
import React from "react";
import useLenis from "../hooks/useLenis";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Link from "next/link";
import services from "./Services.json";
import { SquareArrowOutUpRight } from "lucide-react";
import styles from "./ServicesDetails.module.css";

const ServicesDetails = () => {
  useLenis();
  const { theme } = useTheme();

  return (
    <div className={`${styles.servicesPage} ${theme === "dark" ? styles.darkTheme : styles.lightTheme}`}>

      <section className={styles.breadcrumb}>
        <div className="container">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Services
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={styles.breadcrumbText}
          >
            <Link href="/">Home</Link> / Services
          </motion.p>
        </div>
      </section>


      <section
        id="services"
        className={`${styles.services} ${theme === "dark" ? styles.bgLDark : styles.servicesLight}`}
        aria-label="Services offered"
      >
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className={styles.serviceContainer}
        >
          {services.map((item) => (
            <motion.div
              key={item.id}
              className={styles.servicesCard}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.title}>
                <h3>{item.title}</h3>
                <Link href="https://www.kritirai.com/services" title={`Explore ${item.title} services`} className={styles.servicesBtn}>
                  <SquareArrowOutUpRight size={20} />
                </Link>
              </div>
              <div className={styles.desc}>
                <p className={styles.des}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesDetails;
