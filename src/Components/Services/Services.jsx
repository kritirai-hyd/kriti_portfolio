"use client";
import React from "react";
import services from "./Services.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Services.module.css";
import { SquareArrowOutUpRight } from "lucide-react";

const Services = () => {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      className={`${styles.services} ${
        theme === "dark" ? styles.bgLDark : styles.servicesLight
      }`}
      aria-label="Services offered"
    >
      <div className={styles.sTitle}>
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className={styles.skillsTitle}
        >
          Services
        </motion.h2>
      </div>

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
              <Link
                href="https://www.kritirai.com/services"
                title={`Explore ${item.title} services`}
                className={styles.servicesBtn}
              >
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
  );
};

export default Services;
